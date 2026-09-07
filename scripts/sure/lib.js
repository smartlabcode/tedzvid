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
	while ((m = re.exec(html)) !== null) {
		if (m[4] !== undefined) {
			for (const ch of m[4]) out.push({ ch, cls: null });
		} else {
			const cls = m[2];
			if (cls === 'end') continue; /* redni broj ajeta ne ide u tekst */
			for (const ch of m[3]) out.push({ ch, cls });
		}
	}
	return out;
}

/* ---------- 2. prilagodba pisma fontu Shaikh Hamdullah (kao u ostalim lekcijama) ---------- */
function normalizuj(parovi) {
	const out = [];
	for (let i = 0; i < parovi.length; i++) {
		let { ch, cls } = parovi[i];
		if (ch === '‌') continue; /* nevidljivi razdvajač */
		if (ch === 'ٲ') ch = 'ٰ'; /* ٲ → mali alif (kao u uthmani zapisu) */
		if (ch === 'ٱ') ch = 'ا'; /* ٱ → ا (spojna hemza se u našem pismu ne piše posebno) */
		if (ch === 'ْ' && cls === 'slnt') continue; /* harf koji se ne uči nema sukun */
		if (jeVakf(ch) && out.length && out[out.length - 1].ch !== ' ') out.push({ ch: ' ', cls: null });
		if (ch === 'ى') {
			/* ى koje nosi hareke je zapravo J (ي) – u našem pismu se piše s tačkama */
			const sljedeci = parovi[i + 1] && parovi[i + 1].ch;
			const nosi = sljedeci && 'ًٌٍَُِّْٓٓٔ'.indexOf(sljedeci) >= 0;
			if (nosi) ch = 'ي';
		}
		out.push({ ch, cls });
	}
	/* tenvin EN se piše iznad harfa prije elifa (رَسُولًا), a ne iznad elifa */
	for (let i = 1; i < out.length; i++) {
		if (out[i].ch === 'ً' && out[i - 1].ch === 'ا') {
			out[i] = out[i - 1];
			out[i - 1] = { ch: 'ً', cls: out[i].cls };
		}
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
			harfovi.push({ harf: z.ch, cls: z.cls, hareke: [], vakf: null, od: i, do: i });
		} else if (jeVakf(z.ch)) {
			harfovi.push({ harf: null, cls: z.cls, hareke: [], vakf: z.ch, od: i, do: i });
		} else if (z.ch === ' ') {
			harfovi.push({ harf: null, cls: null, hareke: [], razmak: true, od: i, do: i });
		} else if (harfovi.length) {
			const zadnji = harfovi[harfovi.length - 1];
			zadnji.hareke.push(z.ch);
			zadnji.do = i;
			if (!zadnji.cls && z.cls) zadnji.cls = z.cls;
		}
	});
	return harfovi;
}

const tekstHarfa = (h) => (h.razmak ? ' ' : (h.harf || h.vakf || '') + h.hareke.join(''));

module.exports = { HAREKE, VOKALI, TENVIN, VAKF, jeHareke, jeVakf, jeHarf, razloziOznake, normalizuj, uHarfove, tekstHarfa };
