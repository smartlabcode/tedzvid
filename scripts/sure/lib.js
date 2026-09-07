/*
 * Zajednički alat za izgradnju podataka bonus lekcije (sura Jasin).
 * Ulaz: tedžvidski označen uthmani tekst (quran.com), izlaz: harfovi s oznakama pravila.
 */

/* ---------- znakovi ---------- */
const HAREKE = 'ًٌٍَُِّْٰٰٕٖٓٓٔۥۦۭ۟۠۬ۡۢۤۧۨ';
const VOKALI = { FETHA: 'َ', DAMMA: 'ُ', KESRA: 'ِ', SUKUN: 'ْ', SEDDA: 'ّ' };
const TENVIN = { EN: 'ً', UN: 'ٌ', IN: 'ٍ' };
const VAKF = 'ۖۗۘۙۚۛۜ۝۞۩';
const BROJKE = '٠١٢٣٤٥٦٧٨٩';

const jeHareke = (c) => HAREKE.indexOf(c) >= 0;
const jeVakf = (c) => VAKF.indexOf(c) >= 0;
const jeHarf = (c) => !jeHareke(c) && !jeVakf(c) && c !== ' ' && BROJKE.indexOf(c) < 0 && c !== '‌';

/* ---------- 1. razlaganje <tajweed class=…> oznaka na parove (znak, pravilo) ---------- */
function razloziOznake(html) {
	const out = [];
	const re = /<(tajweed|span)\s+class=([a-z_]+)>([\s\S]*?)<\/(?:tajweed|span)>|([^<]+)/g;
	let m;
	let raspon = 0; /* svaka oznaka je svoj raspon: dvije susjedne oznake istog pravila su dva pravila */
	while ((m = re.exec(html)) !== null) {
		if (m[4] !== undefined) {
			for (const ch of m[4]) if (ch !== '\u200c') out.push({ ch, cls: null, raspon: null });
		} else {
			const cls = m[2];
			if (cls === 'end') continue; /* redni broj ajeta ne ide u tekst */
			raspon++;
			for (const ch of m[3]) if (ch !== '\u200c') out.push({ ch, cls, raspon });
		}
	}
	return out;
}

/* ---------- 1b. poravnanje s čistim uthmani zapisom ----------
   Tedžvidski zapis nosi oznake pravila, ali mu se pravopis mjestimično razlikuje
   (višak tatvila, ٮ umjesto ى, drugačiji redoslijed tenvina i šedde). Zato se
   tekst uzima iz čistog uthmani zapisa, a na njeg se prenesu oznake pravila. */
const PAR_ZNAKOVA = { 'ٲ': 'ٰ', 'ٮ': 'ى', '۟': 'ْ' };
const kljucZnaka = (c) => PAR_ZNAKOVA[c] || c;

function poravnaj(parovi, cist) {
	if (cist.indexOf('�') >= 0) throw new Error('čisti zapis je oštećen: ' + cist.slice(0, 40));
	const a = parovi.map((p) => kljucZnaka(p.ch));
	const b = [].map.call(cist, kljucZnaka);
	const cistZnakovi = [].slice.call(cist);

	/* najduži zajednički podniz – tablica dužina */
	const d = [];
	for (let i = 0; i <= a.length; i++) d.push(new Uint16Array(b.length + 1));
	for (let i = a.length - 1; i >= 0; i--)
		for (let j = b.length - 1; j >= 0; j--)
			d[i][j] = a[i] === b[j] ? d[i + 1][j + 1] + 1 : Math.max(d[i + 1][j], d[i][j + 1]);

	/* svakom znaku čistog zapisa pridruži oznaku pravila sa spojenog znaka */
	const out = cistZnakovi.map((ch) => ({ ch, cls: null, raspon: null, spojen: false }));
	let i = 0, j = 0;
	while (i < a.length && j < b.length) {
		if (a[i] === b[j]) {
			out[j].cls = parovi[i].cls;
			out[j].raspon = parovi[i].raspon;
			out[j].spojen = true;
			i++;
			j++;
		} else if (d[i + 1][j] >= d[i][j + 1]) i++;
		else j++;
	}

	/* znak koji nema para (npr. višak u pravopisu) pripada rasponu ako je unutar njeg */
	for (let k = 0; k < out.length; k++) {
		if (out[k].spojen) continue;
		const prije = out[k - 1];
		let sljedeci = k + 1;
		while (sljedeci < out.length && !out[sljedeci].spojen) sljedeci++;
		const poslije = out[sljedeci];
		if (prije && poslije && prije.raspon !== null && prije.raspon === poslije.raspon) {
			out[k].cls = prije.cls;
			out[k].raspon = prije.raspon;
		}
	}
	return out.map((z) => ({ ch: z.ch, cls: z.cls, raspon: z.raspon }));
}

/* ---------- 2. prilagodba pisma fontu Shaikh Hamdullah (kao u ostalim lekcijama) ---------- */
function normalizuj(parovi) {
	const out = [];
	for (let i = 0; i < parovi.length; i++) {
		let { ch, cls, raspon } = parovi[i];
		if (ch === '‌') continue; /* nevidljivi razdvajač */
		if (ch === 'ٲ') ch = 'ٰ'; /* ٲ → mali alif (kao u uthmani zapisu) */
		if (ch === 'ٱ') ch = 'ا'; /* ٱ → ا (spojna hemza se u našem pismu ne piše posebno) */
		/* harf koji se ne uči nosi kružić (۟) ili sukun – u našem pismu se ne pišu */
		if ((ch === 'ْ' || ch === '۟') && cls === 'slnt') continue;
		/* razmak ispred znaka za vakf ostaje u istom rasponu da ne prekine oznaku pravila */
		if (jeVakf(ch) && out.length && out[out.length - 1].ch !== ' ') out.push({ ch: ' ', cls: null, raspon });
		if (ch === 'ى') {
			/* ى koje nosi hareke je zapravo J (ي) – u našem pismu se piše s tačkama */
			const sljedeci = parovi[i + 1] && parovi[i + 1].ch;
			const nosi = sljedeci && 'ًٌٍَُِّْٓٓٔ'.indexOf(sljedeci) >= 0;
			if (nosi) ch = 'ي';
		}
		out.push({ ch, cls, raspon });
	}
	/* prazan razmak na kraju (iza njeg je stajao redni broj ajeta) */
	while (out.length && out[out.length - 1].ch === ' ') out.pop();
	return out;
}

/* ---------- 3. grupisanje u harfove: harf + njegove hareke ---------- */
function uHarfove(znakovi) {
	const harfovi = [];
	znakovi.forEach((z, i) => {
		if (jeHarf(z.ch)) {
			harfovi.push({ harf: z.ch, cls: z.cls, raspon: z.raspon, hareke: [], vakf: null, od: i, do: i });
		} else if (jeVakf(z.ch)) {
			harfovi.push({ harf: null, cls: z.cls, raspon: z.raspon, hareke: [], vakf: z.ch, od: i, do: i });
		} else if (z.ch === ' ') {
			harfovi.push({ harf: null, cls: null, raspon: z.raspon, hareke: [], razmak: true, od: i, do: i });
		} else if (harfovi.length) {
			/* hareke pripadaju prethodnom harfu; njihova oznaka pravila se na njeg ne prenosi jer
			   oznaka u mushafu često počinje harekom harfa koji je ispred pravila (npr. „ِنۢ ب”) */
			const zadnji = harfovi[harfovi.length - 1];
			zadnji.hareke.push(z.ch);
			zadnji.do = i;
		}
	});
	return harfovi;
}

const tekstHarfa = (h) => (h.razmak ? ' ' : (h.harf || h.vakf || '') + h.hareke.join(''));

module.exports = { HAREKE, VOKALI, TENVIN, VAKF, jeHareke, jeVakf, jeHarf, razloziOznake, poravnaj, normalizuj, uHarfove, tekstHarfa };
