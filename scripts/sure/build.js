/*
 * Gradi podatke za bonus lekcije s kur'anskim tekstom:
 *   src/Data/YasinData.json      – sura Jasin razložena po stranicama mushafa
 *   src/Data/AmmeDzuzData.json    – trideseti (Amme) džuz: 37 sura (En-Nebe’ … En-Nas)
 * Svaki ajet je razložen na dijelove, a uz svaki dio ide tedžvidsko pravilo iz
 * lekcija 1–22 s objašnjenjem zašto se baš tu primjenjuje.
 *
 * Pokretanje:  node scripts/sure/build.js
 * Izvori:      api.quran.com (uthmani tekst s oznakama tedžvidskog mushafa, uz vrijeme
 *              svake riječi u Husarijevom zapisu) i api.alquran.cloud (stranica mushafa
 *              i podaci o suri).
 * Preuzeto se kešira u scripts/sure/.cache da ponovna gradnja ne traži internet.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { razloziOznake, poravnaj, normalizuj, uHarfove, tekstHarfa, jeVakf } = require('./lib');
const KATALOG = require('./pravila');

const CACHE = path.join(__dirname, '.cache');
const DATA = path.join(__dirname, '..', '..', 'src', 'Data');
const IZLAZ_JASIN = path.join(DATA, 'YasinData.json');
const IZLAZ_AMME = path.join(DATA, 'AmmeDzuzData.json');
const IZLAZ_FATIHA = path.join(DATA, 'FatihaData.json');
const IZLAZ_KURSIJ = path.join(DATA, 'KursijData.json');
const IZLAZ_MULK = path.join(DATA, 'MulkData.json');
const KATALOG_IZLAZ = path.join(DATA, 'SurePravila.json');

/* trideseti džuz (Amme džuz): od sure En-Nebe' do En-Nas; značenja prate prijevod B. Korkuta */
const AMME = [
	{ n: 78, bs: 'En-Nebe’', znacenje: { bs: 'Vijest', en: 'The Tidings' } },
	{ n: 79, bs: 'En-Nazi’at', znacenje: { bs: 'Oni koji čupaju', en: 'Those Who Drag Forth' } },
	{ n: 80, bs: 'Abese', znacenje: { bs: 'Namrštio se', en: 'He Frowned' } },
	{ n: 81, bs: 'Et-Tekvir', znacenje: { bs: 'Prestanak sjaja', en: 'The Overthrowing' } },
	{ n: 82, bs: 'El-Infitar', znacenje: { bs: 'Rascjepljenje', en: 'The Cleaving' } },
	{ n: 83, bs: 'El-Mutaffifin', znacenje: { bs: 'Oni koji pri mjerenju zakidaju', en: 'The Defrauding' } },
	{ n: 84, bs: 'El-Inšikak', znacenje: { bs: 'Cijepanje', en: 'The Splitting Open' } },
	{ n: 85, bs: 'El-Burudž', znacenje: { bs: 'Sazviježđa', en: 'The Constellations' } },
	{ n: 86, bs: 'Et-Tarik', znacenje: { bs: 'Danica', en: 'The Nightcomer' } },
	{ n: 87, bs: 'El-A’la', znacenje: { bs: 'Svevišnji', en: 'The Most High' } },
	{ n: 88, bs: 'El-Gašija', znacenje: { bs: 'Teška nevolja', en: 'The Overwhelming' } },
	{ n: 89, bs: 'El-Fedžr', znacenje: { bs: 'Zora', en: 'The Dawn' } },
	{ n: 90, bs: 'El-Beled', znacenje: { bs: 'Grad', en: 'The City' } },
	{ n: 91, bs: 'Eš-Šems', znacenje: { bs: 'Sunce', en: 'The Sun' } },
	{ n: 92, bs: 'El-Lejl', znacenje: { bs: 'Noć', en: 'The Night' } },
	{ n: 93, bs: 'Ed-Duha', znacenje: { bs: 'Jutro', en: 'The Morning Hours' } },
	{ n: 94, bs: 'Eš-Šerh', znacenje: { bs: 'Širokogrudnost', en: 'The Relief' } },
	{ n: 95, bs: 'Et-Tin', znacenje: { bs: 'Smokva', en: 'The Fig' } },
	{ n: 96, bs: 'El-Alek', znacenje: { bs: 'Ugrušak', en: 'The Clot' } },
	{ n: 97, bs: 'El-Kadr', znacenje: { bs: 'Noć Kadr', en: 'The Night of Decree' } },
	{ n: 98, bs: 'El-Bejjine', znacenje: { bs: 'Dokaz jasni', en: 'The Clear Proof' } },
	{ n: 99, bs: 'Ez-Zilzal', znacenje: { bs: 'Zemljotres', en: 'The Earthquake' } },
	{ n: 100, bs: 'El-Adijat', znacenje: { bs: 'Oni koji jure', en: 'The Racers' } },
	{ n: 101, bs: 'El-Karia', znacenje: { bs: 'Smak svijeta', en: 'The Calamity' } },
	{ n: 102, bs: 'Et-Tekasur', znacenje: { bs: 'Nadmetanje', en: 'Rivalry in Worldly Increase' } },
	{ n: 103, bs: 'El-Asr', znacenje: { bs: 'Vrijeme', en: 'The Declining Day' } },
	{ n: 104, bs: 'El-Humeze', znacenje: { bs: 'Klevetnik', en: 'The Slanderer' } },
	{ n: 105, bs: 'El-Fil', znacenje: { bs: 'Slon', en: 'The Elephant' } },
	{ n: 106, bs: 'Kurejš', znacenje: { bs: 'Kurejšije', en: 'Quraysh' } },
	{ n: 107, bs: 'El-Maun', znacenje: { bs: 'Davanje u naruč', en: 'Small Kindnesses' } },
	{ n: 108, bs: 'El-Kevser', znacenje: { bs: 'Mnogo dobro', en: 'Abundance' } },
	{ n: 109, bs: 'El-Kafirun', znacenje: { bs: 'Nevjernici', en: 'The Disbelievers' } },
	{ n: 110, bs: 'En-Nasr', znacenje: { bs: 'Pomoć', en: 'Divine Support' } },
	{ n: 111, bs: 'El-Mesed', znacenje: { bs: 'Palmino vlakno', en: 'The Palm Fibre' } },
	{ n: 112, bs: 'El-Ihlas', znacenje: { bs: 'Iskrenost', en: 'Sincerity' } },
	{ n: 113, bs: 'El-Felek', znacenje: { bs: 'Svitanje', en: 'The Daybreak' } },
	{ n: 114, bs: 'En-Nas', znacenje: { bs: 'Ljudi', en: 'Mankind' } }
];

/* ---------- preuzimanje s keširanjem ---------- */
function dohvati(url, ime) {
	const f = path.join(CACHE, ime);
	if (fs.existsSync(f)) return Promise.resolve(JSON.parse(fs.readFileSync(f, 'utf8')));
	fs.mkdirSync(CACHE, { recursive: true });
	return new Promise((res, rej) => {
		https
			.get(url, (r) => {
				let s = '';
				r.setEncoding('utf8'); /* bez ovog se višebajtni harf prelomi na granici paketa */
				r.on('data', (d) => (s += d));
				r.on('end', () => {
					fs.writeFileSync(f, s);
					res(JSON.parse(s));
				});
			})
			.on('error', rej);
	});
}

/* ---------- harfovi i hareke ---------- */
const FETHA = 'َ', DAMMA = 'ُ', KESRA = 'ِ', SUKUN = 'ْ', SEDDA = 'ّ';
const TENVINI = 'ًٌٍ';
const MALI_ALIF = 'ٰ';
const HEMZE = 'ءأإؤئآ';
const GRLENI = 'ءأإؤئآهعحغخ';        /* izhar hallkijj */
const KRUPNI = 'خصضغطقظ';            /* harfovi isti'la – uz njih se R uči krupno */

const vokal = (h) => (h.hareke.find((c) => c === FETHA || c === DAMMA || c === KESRA) || null);
const imaSukun = (h) => h.hareke.indexOf(SUKUN) >= 0;
const imaSeddu = (h) => h.hareke.indexOf(SEDDA) >= 0;
const tenvin = (h) => h.hareke.find((c) => TENVINI.indexOf(c) >= 0) || null;
/* harf bez ijednog vokala/tenvina/šedde u uthmani zapisu je sakin (npr. مِن بَعْدِ) */
const sakin = (h) => imaSukun(h) || (!vokal(h) && !tenvin(h) && !imaSeddu(h) && h.hareke.indexOf(MALI_ALIF) < 0);

/* transliteracija za objašnjenja – uvijek se uz nju piše i sam harf */
const IME = {
	bs: { 'ا': 'A', 'ء': 'hemze', 'أ': 'hemze', 'إ': 'hemze', 'ؤ': 'hemze', 'ئ': 'hemze', 'آ': 'hemze', 'ب': 'B', 'ت': 'T', 'ث': 'S', 'ج': 'DŽ', 'ح': 'H', 'خ': 'H', 'د': 'D', 'ذ': 'Z', 'ر': 'R', 'ز': 'Z', 'س': 'S', 'ش': 'Š', 'ص': 'S', 'ض': 'D', 'ط': 'T', 'ظ': 'Z', 'ع': 'A', 'غ': 'G', 'ف': 'F', 'ق': 'Q', 'ك': 'K', 'ل': 'L', 'م': 'M', 'ن': 'N', 'ه': 'H', 'و': 'V', 'ي': 'J', 'ى': 'J', 'ة': 'T' },
	en: { 'ا': 'A', 'ء': 'hamza', 'أ': 'hamza', 'إ': 'hamza', 'ؤ': 'hamza', 'ئ': 'hamza', 'آ': 'hamza', 'ب': 'B', 'ت': 'T', 'ث': 'TH', 'ج': 'J', 'ح': 'H', 'خ': 'KH', 'د': 'D', 'ذ': 'DH', 'ر': 'R', 'ز': 'Z', 'س': 'S', 'ش': 'SH', 'ص': 'S', 'ض': 'D', 'ط': 'T', 'ظ': 'DH', 'ع': "'A", 'غ': 'GH', 'ف': 'F', 'ق': 'Q', 'ك': 'K', 'ل': 'L', 'م': 'M', 'ن': 'N', 'ه': 'H', 'و': 'W', 'ي': 'Y', 'ى': 'Y', 'ة': 'T' }
};
const im = (c, j) => (IME[j][c] || c) + ' (' + c + ')';

/* nazivi znakova za vakf – uz osmanski oblik iz 1. lekcije */
const ZNAK_VAKF = {
	'ۖ': { osmanski: 'صلي', bs: 'bolje je preći', en: 'better to continue' },
	'ۗ': { osmanski: 'قلي', bs: 'bolje je stati', en: 'better to stop' },
	'ۚ': { osmanski: 'ج', bs: 'bolje je stati', en: 'better to stop' },
	'ۘ': { osmanski: 'م', bs: 'mora se stati', en: 'one must stop' },
	'ۙ': { osmanski: 'لا', bs: 'ne smije se stati', en: 'one must not stop' },
	'ۛ': { osmanski: '∴', bs: 'tri tačkice – stane se samo na jednom od dva znaka', en: 'three dots – stop at only one of the two signs' },
	'ۜ': { osmanski: 'س', bs: 'sekta – pauzira se bez prekidanja daha', en: 'sakta – a pause without breaking the breath' }
};

/* ---------- riječi ---------- */
function uRijeci(harfovi) {
	/* svakom harfu pridružuje redni broj riječi; razmaci i znakovi vakfa nisu dio riječi */
	let r = 0;
	const rijeci = [];
	harfovi.forEach((h, i) => {
		if (h.razmak) {
			r++;
			h.rijec = -1;
			return;
		}
		if (h.vakf) {
			h.rijec = -1;
			return;
		}
		h.rijec = r;
		(rijeci[r] = rijeci[r] || []).push(i);
	});
	return rijeci;
}

/* harf koji se ne uči (tiho ا i sl.) se preskače – pravila gledaju kroz njeg */
const zvucni = (h) => h.harf && h.cls !== 'slnt';
const sljedeciHarf = (H, i) => {
	for (let k = i + 1; k < H.length; k++) if (zvucni(H[k])) return k;
	return -1;
};
const prethodniHarf = (H, i) => {
	for (let k = i - 1; k >= 0; k--) if (zvucni(H[k])) return k;
	return -1;
};
/* može li se na riječi stati: iza nje je znak za vakf ili kraj ajeta */
function stajanje(H, rijeci, r) {
	const zadnji = rijeci[r][rijeci[r].length - 1];
	for (let k = zadnji + 1; k < H.length; k++) {
		if (H[k].vakf) return true;
		if (H[k].harf) return false;
	}
	return true; /* kraj ajeta */
}

/* ---------- prepoznavanje pravila ---------- */
const PRIORITET = {};
KATALOG.forEach((p, i) => {
	PRIORITET[p.id] = i;
});
/* pravila koja se boje prije ostalih (specifičnija su) */
const RED = [
	'vakf', 'ne-uci-se', 'lafzatullah',
	'iklab', 'ihfa', 'ihfa-sefevijj', 'idgam-gunneh', 'idgam-bila-gunneh', 'idgam-mislejn-gunneh',
	'idgam-mislejn', 'idgam-mutedzanisejn', 'idgam-mutekaribejn', 'izhar-halkij', 'izhar-sefevijj',
	'gunne',
	'medd-lazim', 'medd-muttesil', 'medd-munfesil', 'medd-arid', 'medd-lin', 'medd-tabii',
	'kalkala', 'damir', 'hukmurra'
];
const tez = (id) => RED.indexOf(id);

const KLASE = {
	ghunnah: 'gunne',
	qalaqah: 'kalkala',
	ikhafa: 'ihfa',
	ikhafa_shafawi: 'ihfa-sefevijj',
	iqlab: 'iklab',
	idgham_wo_ghunnah: 'idgam-bila-gunneh',
	idgham_shafawi: 'idgam-mislejn-gunneh',
	idgham_mutajanisayn: 'idgam-mutedzanisejn',
	idgham_mutaqaribayn: 'idgam-mutekaribejn',
	slnt: 'ne-uci-se'
};

/* ---------- analiza jednog ajeta ---------- */
function analiziraj(html, cist) {
	const H = uHarfove(normalizuj(poravnaj(razloziOznake(html), cist)));
	const rijeci = uRijeci(H);
	const nadjena = [];
	const dodaj = (id, od, doo, tekst) => nadjena.push({ id, od, do: doo, bs: tekst.bs, en: tekst.en });

	/* --- 1. oznake iz tedžvidskog mushafa (quran.com) --- */
	let i = 0;
	while (i < H.length) {
		const cls = H[i].cls;
		if (!cls || (!KLASE[cls] && cls.indexOf('idgham_ghunnah') < 0)) {
			i++;
			continue;
		}
		let j = i;
		while (j + 1 < H.length && H[j + 1].raspon === H[i].raspon) j++;
		const id = cls === 'idgham_ghunnah' ? 'idgam-gunneh' : KLASE[cls];
		if (id) dodaj(id, i, j, objasni(id, { H, od: i, do: j }));
		i = j + 1;
	}
	const zauzet = (od, doo, id) =>
		nadjena.some((p) => !(p.do < od || p.od > doo) && tez(p.id) <= tez(id));

	/* --- 2. znakovi za stajanje (1. lekcija) --- */
	H.forEach((h, k) => {
		if (!h.vakf || h.vakf === '۝' || h.vakf === '۞') return;
		const z = ZNAK_VAKF[h.vakf];
		if (z) dodaj('vakf', k, k, objasni('vakf', { znak: h.vakf, z }));
	});

	/* --- 3. N sa sukunom / tenvin ispred grlenog harfa: izhar hallkijj (9. lekcija) --- */
	H.forEach((h, k) => {
		if (!h.harf) return;
		const t = tenvin(h);
		const jeNun = h.harf === 'ن' && sakin(h);
		if (!t && !jeNun) return;
		let s = sljedeciHarf(H, k);
		/* elif koji se piše uz tenvin EN (كُفُوًا) ne izgovara se u spajanju */
		if (t === 'ً' && s >= 0 && H[s].harf === 'ا' && !H[s].hareke.length) s = sljedeciHarf(H, s);
		if (s < 0 || GRLENI.indexOf(H[s].harf) < 0) return;
		if (zauzet(k, k, 'izhar-halkij')) return;
		dodaj('izhar-halkij', k, k, objasni('izhar-halkij', { tenvin: t, harf: H[s].harf }));
	});

	/* --- 4. M sa sukunom ispred harfa koji nije M ni B: izhar šefevijj (10. lekcija) --- */
	H.forEach((h, k) => {
		if (!h.harf || h.harf !== 'م' || !imaSukun(h)) return;
		const s = sljedeciHarf(H, k);
		if (s < 0 || H[s].harf === 'م' || H[s].harf === 'ب') return;
		if (zauzet(k, k, 'izhar-sefevijj')) return;
		dodaj('izhar-sefevijj', k, k, objasni('izhar-sefevijj', { harf: H[s].harf }));
	});

	/* --- 5. riječ Allah (3. lekcija) --- */
	rijeci.forEach((idx, r) => {
		if (!idx) return;
		const rijec = idx.map((k) => H[k].harf).join('');
		if (rijec !== 'الله' && rijec !== 'لله') return;
		const p = prethodniHarf(H, idx[0]);
		const prije = p >= 0 ? vokal(H[p]) : null;
		const tanko = prije === KESRA || (rijec === 'لله' && H[idx[0] - 0] && vokal(H[idx[0]]) === KESRA);
		const od = idx[rijec === 'الله' ? 1 : 0];
		if (zauzet(od, idx[idx.length - 1], 'lafzatullah')) return;
		dodaj('lafzatullah', od, idx[idx.length - 1], objasni('lafzatullah', { tanko }));
	});

	/* --- 6. uklapanja koja mushaf ne boji: mislejn, mutedžanisejn, mutekaribejn (4, 15, 16) --- */
	const SRODNI = [ 'تطد', 'ثذظ', 'بم' ];
	const BLISKI = [ [ 'ق', 'ك' ], [ 'ل', 'ر' ] ];
	/* uklapaju se samo pravi suglasnici: ne spojna hemza, ne harf dužine, ne ل iz člana الـ */
	const suglasnik = (h) =>
		!!h.harf && h.harf !== 'ـ' && h.harf !== 'ا' && h.cls !== 'ham_wasl' && h.cls !== 'laam_shamsiyah' &&
		!((h.harf === 'و' || h.harf === 'ي') && !imaSukun(h) && !vokal(h) && !imaSeddu(h));
	H.forEach((h, k) => {
		if (!suglasnik(h) || !sakin(h)) return;
		const s = sljedeciHarf(H, k);
		if (s < 0) return;
		if (!suglasnik(H[s])) return;
		const a = h.harf, b = H[s].harf;
		let id = null;
		/* isti harfovi: M u M je idgam mislejn mea-l-gunneh, N u N ide uz idgam mea-l-gunneh */
		if (a === b) id = a === 'م' ? 'idgam-mislejn-gunneh' : a === 'ن' ? 'idgam-gunneh' : 'idgam-mislejn';
		else if (SRODNI.some((g) => g.indexOf(a) >= 0 && g.indexOf(b) >= 0)) id = 'idgam-mutedzanisejn';
		else if (BLISKI.some((g) => g[0] === a && g[1] === b)) id = 'idgam-mutekaribejn';
		if (!id || zauzet(k, s, id)) return;
		dodaj(id, k, s, objasni(id, { a, b }));
	});

	/* --- 7. zamjenica HU (2. lekcija) --- */
	rijeci.forEach((idx) => {
		if (!idx || idx.length < 2) return;
		const zadnji = idx[idx.length - 1];
		const h = H[zadnji];
		if (h.harf !== 'ه') return;
		const v = vokal(h);
		if (v !== DAMMA && v !== KESRA) return;
		const dugo = h.hareke.some((c) => c === 'ۥ' || c === 'ۦ');
		const p = idx[idx.length - 2];
		const prethodni = H[p];
		if (!dugo) {
			/* kratko je samo ako je prije zamjenice dugi vokal ili sukun */
			const duziPrije = sakin(prethodni) || prethodni.hareke.indexOf(MALI_ALIF) >= 0;
			if (!duziPrije) return;
		}
		if (zauzet(zadnji, zadnji, 'damir')) return;
		dodaj('damir', zadnji, zadnji, objasni('damir', { dugo }));
	});

	/* --- 8. harf R (14. lekcija) --- */
	H.forEach((h, k) => {
		if (h.harf !== 'ر') return;
		const o = hukmurra(H, k);
		if (!o || zauzet(k, k, 'hukmurra')) return;
		dodaj('hukmurra', k, k, o);
	});

	/* --- 9. dužine (17–22. lekcija) --- */
	duzine(H, rijeci).forEach((d) => {
		if (zauzet(d.od, d.do, d.id)) return;
		dodaj(d.id, d.od, d.do, objasni(d.id, d));
	});

	nadjena.sort((a, b) => a.od - b.od || tez(a.id) - tez(b.id));
	return { H, rijeci, nadjena };
}

/* ---------- dužine (17–22. lekcija) ---------- */
function duzine(H, rijeci) {
	const out = [];
	H.forEach((h, k) => {
		if (!h.harf || h.cls === 'slnt' || h.cls === 'ham_wasl') return;
		const p = prethodniHarf(H, k);
		const prije = p >= 0 ? vokal(H[p]) : null;
		const maliAlif = h.hareke.indexOf(MALI_ALIF) >= 0;
		const bezVokala = !vokal(h) && !tenvin(h) && !imaSeddu(h) && !imaSukun(h);
		let jeDuzina = false, harfDuzine = h.harf;
		if (maliAlif) { jeDuzina = true; harfDuzine = 'ا'; }
		else if (h.harf === 'ا' && bezVokala && prije === FETHA) jeDuzina = true;
		else if (h.harf === 'و' && bezVokala && prije === DAMMA) jeDuzina = true;
		else if (h.harf === 'ي' && bezVokala && prije === KESRA) jeDuzina = true;

		/* poluvokal: و ili ي sa sukunom, a prije njeg kratki vokal E */
		const lin = (h.harf === 'و' || h.harf === 'ي') && imaSukun(h) && prije === FETHA;
		if (!jeDuzina && !lin && h.cls !== 'madda_necessary') return;

		const s = sljedeciHarf(H, k);
		const r = h.rijec;
		const zadnjiURijeci = rijeci[r] && rijeci[r][rijeci[r].length - 1];
		/* posljednji harf koji se uči (bez harfova koji se ne uče) */
		let zadnjiZvucni = zadnjiURijeci;
		while (zadnjiZvucni > k && H[zadnjiZvucni].cls === 'slnt') zadnjiZvucni = prethodniHarf(H, zadnjiZvucni);
		const naKraju = k === zadnjiZvucni;
		const moze = stajanje(H, rijeci, r);
		const ctx = { od: k, do: k, harf: harfDuzine, prije };

		if (h.cls === 'madda_necessary' || (s >= 0 && H[s].rijec === r && (imaSeddu(H[s]) || (imaSukun(H[s]) && s !== zadnjiZvucni)))) {
			out.push(Object.assign(ctx, { id: 'medd-lazim' }));
		} else if (lin) {
			/* medd lin traži da poslije poluvokala dođe harf sa sukunom – najčešće pri stajanju */
			if (s >= 0 && H[s].rijec === r && s === zadnjiZvucni && moze) out.push(Object.assign(ctx, { id: 'medd-lin', lin: h.harf }));
			else if (s >= 0 && H[s].rijec === r && imaSukun(H[s]) && s !== zadnjiZvucni) out.push(Object.assign(ctx, { id: 'medd-lin', lin: h.harf }));
		} else if (s >= 0 && H[s].rijec === r && HEMZE.indexOf(H[s].harf) >= 0) {
			out.push(Object.assign(ctx, { id: 'medd-muttesil' }));
		} else if (naKraju && s >= 0 && H[s].rijec !== r && HEMZE.indexOf(H[s].harf) >= 0) {
			out.push(Object.assign(ctx, { id: 'medd-munfesil' }));
		} else if (moze && s >= 0 && H[s].rijec === r && s === zadnjiZvucni) {
			out.push(Object.assign(ctx, { id: 'medd-arid', zadnji: H[s].harf }));
		} else {
			out.push(Object.assign(ctx, { id: 'medd-tabii' }));
		}
	});
	return out;
}

/* ---------- harf R (14. lekcija) ---------- */
function hukmurra(H, k) {
	const h = H[k];
	const v = vokal(h);
	if (v === FETHA || v === DAMMA) return objasni('hukmurra', { krupno: true, razlog: 'vokal', v });
	if (v === KESRA) return objasni('hukmurra', { krupno: false, razlog: 'vokal', v });
	if (!sakin(h)) return null;
	const s = sljedeciHarf(H, k);
	if (s >= 0 && H[s].rijec === h.rijec && KRUPNI.indexOf(H[s].harf) >= 0)
		return objasni('hukmurra', { krupno: true, razlog: 'krupniIza', harf: H[s].harf });
	const p = prethodniHarf(H, k);
	if (p < 0) return null;
	const vp = vokal(H[p]);
	if (vp === FETHA || vp === DAMMA) return objasni('hukmurra', { krupno: true, razlog: 'vokalPrije', v: vp });
	if (vp === KESRA) return objasni('hukmurra', { krupno: false, razlog: 'vokalPrije', v: vp });
	if (sakin(H[p])) {
		if (H[p].harf === 'ي') return objasni('hukmurra', { krupno: false, razlog: 'jPrije' });
		const p2 = prethodniHarf(H, p);
		const vp2 = p2 >= 0 ? vokal(H[p2]) : null;
		if (vp2 === FETHA || vp2 === DAMMA) return objasni('hukmurra', { krupno: true, razlog: 'dvaPrije', v: vp2 });
		if (vp2 === KESRA) return objasni('hukmurra', { krupno: false, razlog: 'dvaPrije', v: vp2 });
	}
	return null;
}

/* ---------- objašnjenja ---------- */
const TENVIN_IME = { 'ً': 'EN', 'ٌ': 'UN', 'ٍ': 'IN' };
const VOKAL_IME = { bs: { 'َ': 'E', 'ُ': 'U', 'ِ': 'I' }, en: { 'َ': 'A', 'ُ': 'U', 'ِ': 'I' } };

/* pravila kod kojih je izvor N sa sukunom, tenvin ili M sa sukunom */
const NUN_MIM = [ 'ihfa', 'ihfa-sefevijj', 'iklab', 'idgam-gunneh', 'idgam-bila-gunneh', 'idgam-mislejn-gunneh' ];

/*
 * Iz raspona oznake izvlači harf koji je izvor pravila i harf na koji nailazi.
 * Oznaka u mushafu zna početi harekom harfa koji je ispred raspona (npr. tenvin u „ًّا و”),
 * pa se za pravila N/tenvin/M izvor traži i jedan harf unazad.
 */
function par(ctx, id) {
	const H = ctx.H.slice(ctx.od, ctx.do + 1).filter((h) => h.harf);
	const nosilac = (h) => h && (tenvin(h) || ((h.harf === 'ن' || h.harf === 'م') && !vokal(h)));
	let izvor = H[0] || {};
	if (NUN_MIM.indexOf(id) >= 0) {
		const uRasponu = H.slice(0, H.length - 1).find(nosilac);
		const p = prethodniHarf(ctx.H, ctx.od);
		izvor = uRasponu || (p >= 0 && nosilac(ctx.H[p]) ? ctx.H[p] : izvor);
	}
	/* oznaka ponekad obuhvata samo izvorni harf (npr. „عَبَدتُّمْ”), pa se cilj traži iza raspona */
	let cilj = H[H.length - 1] || {};
	if (cilj === izvor || !cilj.harf) {
		const s = sljedeciHarf(ctx.H, ctx.do);
		cilj = s >= 0 ? ctx.H[s] : null;
	}
	const t = tenvin(izvor);
	return {
		izvor,
		cilj: cilj && cilj !== izvor ? cilj : null,
		tenvin: t,
		/* opis izvora: "tenvin IN (ٍ)" ili "N sa sukunom (نْ)" */
		opis: {
			bs: t ? 'Tenvin ' + TENVIN_IME[t] + ' (ـ' + t + ')' : im(izvor.harf, 'bs') + ' sa sukunom',
			en: t ? 'Tanween ' + TENVIN_IME[t] + ' (ـ' + t + ')' : im(izvor.harf, 'en') + ' with a sukun'
		}
	};
}

function objasni(id, ctx) {
	const p = ctx.H ? par(ctx, id) : null;
	const c = p && p.cilj ? im(p.cilj.harf, 'bs') : '';
	const ce = p && p.cilj ? im(p.cilj.harf, 'en') : '';
	switch (id) {
		case 'vakf':
			return {
				bs: 'Znak za stajanje ' + ctx.znak + ' (osmanski ' + ctx.z.osmanski + '): ovdje ' + ctx.z.bs + '.',
				en: 'Stopping sign ' + ctx.znak + ' (Ottoman ' + ctx.z.osmanski + '): here ' + ctx.z.en + '.'
			};
		case 'ne-uci-se':
			return { bs: 'Ovaj harf se piše, ali se ne uči.', en: 'This letter is written but not pronounced.' };
		case 'gunne':
			return {
				bs: im(p.izvor.harf, 'bs') + ' sa šeddom: uči se uz gunnu (kroz nos) 2 hareketa.',
				en: im(p.izvor.harf, 'en') + ' with a shadda: recited with ghunnah (through the nose) for 2 harakas.'
			};
		case 'kalkala':
			return {
				bs: 'Harf ' + im(p.izvor.harf, 'bs') + ' sa sukunom: odskače (kalkala).',
				en: 'The letter ' + im(p.izvor.harf, 'en') + ' with a sukun bounces (qalqalah).'
			};
		case 'ihfa':
			return {
				bs: p.opis.bs + ' ispred harfa ' + c + ': skriva se uz gunnu 2 hareketa (ihfa).',
				en: p.opis.en + ' before the letter ' + ce + ': hidden with ghunnah for 2 harakas (ikhfa).'
			};
		case 'ihfa-sefevijj':
			return {
				bs: 'M sa sukunom (مْ) ispred harfa B (ب): skriva se uz gunnu 2 hareketa (ihfa šefevijj).',
				en: 'M with a sukun (مْ) before the letter B (ب): hidden with ghunnah for 2 harakas (ikhfa shafawi).'
			};
		case 'iklab':
			return {
				bs: p.opis.bs + ' ispred harfa B (ب): N se pretvara u M uz gunnu 2 hareketa (iklab).',
				en: p.opis.en + ' before the letter B (ب): the N turns into M with ghunnah for 2 harakas (iqlab).'
			};
		case 'idgam-gunneh':
			return {
				bs: p.opis.bs + ' ispred harfa ' + c + ': uklapa se u njeg uz gunnu 2 hareketa (idgam mea-l-gunneh).',
				en: p.opis.en + ' before the letter ' + ce + ': merged into it with ghunnah for 2 harakas (idgham ma’al-ghunnah).'
			};
		case 'idgam-bila-gunneh':
			return {
				bs: p.opis.bs + ' ispred harfa ' + c + ': uklapa se u njeg bez gunne (idgam bila gunneh).',
				en: p.opis.en + ' before the letter ' + ce + ': merged into it without ghunnah (idgham bila ghunnah).'
			};
		case 'idgam-mislejn-gunneh':
			return {
				bs: 'M sa sukunom (مْ) ispred istog harfa M (م): uklapa se u njeg uz gunnu 2 hareketa (idgam mislejn mea-l-gunneh).',
				en: 'M with a sukun (مْ) before the same letter M (م): merged into it with ghunnah for 2 harakas (idgham mithlayn ma’al-ghunnah).'
			};
		case 'idgam-mislejn': {
			const a = ctx.a || (p && p.izvor.harf);
			return {
				bs: 'Harf ' + im(a, 'bs') + ' sa sukunom ispred istog harfa: uklapa se u njeg (idgam mislejn).',
				en: 'The letter ' + im(a, 'en') + ' with a sukun before the same letter: merged into it (idgham mithlayn).'
			};
		}
		case 'idgam-mutedzanisejn': {
			const a = ctx.a || (p && p.izvor.harf);
			const b = ctx.b || (p && p.cilj && p.cilj.harf);
			return {
				bs: 'Harf ' + im(a, 'bs') + ' sa sukunom ispred srodnog harfa ' + im(b, 'bs') + ': uklapa se u njeg (idgam mutedžanisejn).',
				en: 'The letter ' + im(a, 'en') + ' with a sukun before the related letter ' + im(b, 'en') + ': merged into it (idgham mutajanisayn).'
			};
		}
		case 'idgam-mutekaribejn': {
			const a = ctx.a || (p && p.izvor.harf);
			const b = ctx.b || (p && p.cilj && p.cilj.harf);
			return {
				bs: 'Harf ' + im(a, 'bs') + ' sa sukunom ispred bliskog harfa ' + im(b, 'bs') + ': uklapa se u njeg (idgam mutekaribejn).',
				en: 'The letter ' + im(a, 'en') + ' with a sukun before the close letter ' + im(b, 'en') + ': merged into it (idgham mutaqaribayn).'
			};
		}
		case 'izhar-halkij':
			return {
				bs: (ctx.tenvin ? 'Tenvin ' + TENVIN_IME[ctx.tenvin] + ' (ـ' + ctx.tenvin + ')' : 'N sa sukunom (نْ)') +
					' ispred grlenog harfa ' + im(ctx.harf, 'bs') + ': izgovara se čisto, bez gunne (izhar hallkijj).',
				en: (ctx.tenvin ? 'Tanween ' + TENVIN_IME[ctx.tenvin] + ' (ـ' + ctx.tenvin + ')' : 'N with a sukun (نْ)') +
					' before the throat letter ' + im(ctx.harf, 'en') + ': pronounced clearly, without ghunnah (idhhar halqi).'
			};
		case 'izhar-sefevijj':
			return {
				bs: 'M sa sukunom (مْ) ispred harfa ' + im(ctx.harf, 'bs') + ': izgovara se čisto, bez gunne (izhar šefevijj).',
				en: 'M with a sukun (مْ) before the letter ' + im(ctx.harf, 'en') + ': pronounced clearly, without ghunnah (idhhar shafawi).'
			};
		case 'lafzatullah':
			return ctx.tanko
				? { bs: 'Prije riječi Allah (اللّٰه) je vokal I: riječ se uči tanko.', en: 'The word Allah (اللّٰه) is preceded by the vowel I: it is recited light (tarqiq).' }
				: { bs: 'Prije riječi Allah (اللّٰه) je vokal E ili U: riječ se uči krupno.', en: 'The word Allah (اللّٰه) is preceded by the vowel A or U: it is recited heavy (tafkhim).' };
		case 'damir':
			return ctx.dugo
				? { bs: 'Zamjenica HU (هُ): prije nje je kratki vokal, pa se uči dugo (2 hareketa).', en: 'The pronoun HU (هُ) is preceded by a short vowel, so it is prolonged (2 harakas).' }
				: { bs: 'Zamjenica HU (هُ): prije nje je dugi vokal ili sukun, pa se uči kratko.', en: 'The pronoun HU (هُ) is preceded by a long vowel or a sukun, so it is recited short.' };
		case 'hukmurra': {
			const razlozi = {
				vokal: { bs: 'jer nosi vokal ' + VOKAL_IME.bs[ctx.v], en: 'because it carries the vowel ' + VOKAL_IME.en[ctx.v] },
				vokalPrije: { bs: 'jer je sa sukunom, a prije njeg je vokal ' + VOKAL_IME.bs[ctx.v], en: 'because it has a sukun and is preceded by the vowel ' + VOKAL_IME.en[ctx.v] },
				dvaPrije: { bs: 'jer je sa sukunom, prije njeg je harf sa sukunom, a prije toga vokal ' + VOKAL_IME.bs[ctx.v], en: 'because it has a sukun, is preceded by a letter with a sukun, and before that the vowel ' + VOKAL_IME.en[ctx.v] },
				jPrije: { bs: 'jer je sa sukunom, a prije njeg je J (يْ) također sa sukunom', en: 'because it has a sukun and is preceded by Y (يْ), also with a sukun' },
				krupniIza: { bs: 'jer je sa sukunom, a poslije njeg dolazi krupni harf ' + im(ctx.harf, 'bs'), en: 'because it has a sukun and is followed by the heavy letter ' + im(ctx.harf, 'en') }
			};
			const r = razlozi[ctx.razlog];
			return {
				bs: 'Harf R (ر) se uči ' + (ctx.krupno ? 'krupno' : 'tanko') + ' ' + r.bs + '.',
				en: 'The letter R (ر) is recited ' + (ctx.krupno ? 'heavy' : 'light') + ' ' + r.en + '.'
			};
		}
		case 'medd-tabii':
			return {
				bs: 'Obična dužina na harfu ' + im(ctx.harf, 'bs') + ': uči se 2 hareketa (medd tabi’ijj).',
				en: 'A natural prolongation on the letter ' + im(ctx.harf, 'en') + ': 2 harakas (madd tabi’i).'
			};
		case 'medd-muttesil':
			return {
				bs: 'Poslije dužine, u istoj riječi, dolazi hemze: medd muttesil – uči se 4 ili 5 hareketa.',
				en: 'The prolongation is followed by a hamza in the same word: madd muttasil – 4 or 5 harakas.'
			};
		case 'medd-munfesil':
			return {
				bs: 'Dužina je na kraju riječi, a sljedeća riječ počinje hemzetom: medd munfesil – uči se 2, 4 ili 5 hareketa.',
				en: 'The prolongation ends the word and the next word begins with a hamza: madd munfasil – 2, 4 or 5 harakas.'
			};
		case 'medd-lazim':
			return {
				bs: 'Poslije dužine dolazi harf sa sukunom ili šeddom: medd lazim – uči se 6 hareketa.',
				en: 'The prolongation is followed by a letter with a sukun or a shadda: madd lazim – 6 harakas.'
			};
		case 'medd-arid':
			return {
				bs: 'Pri stajanju zadnji harf ' + im(ctx.zadnji, 'bs') + ' dobija sukun poslije dužine: medd arid – uči se 2, 4 ili 6 hareketa.',
				en: 'When stopping, the final letter ' + im(ctx.zadnji, 'en') + ' takes a sukun after the prolongation: madd ’arid – 2, 4 or 6 harakas.'
			};
		case 'medd-lin':
			return {
				bs: 'Prije harfa ' + im(ctx.lin, 'bs') + ' sa sukunom je kratki vokal E, a poslije njeg harf sa sukunom: medd lin – uči se 2, 4 ili 6 hareketa.',
				en: 'The letter ' + im(ctx.lin, 'en') + ' with a sukun is preceded by the short vowel A and followed by a letter with a sukun: madd lin – 2, 4 or 6 harakas.'
			};
		default:
			return { bs: '', en: '' };
	}
}

/* ---------- gradnja ---------- */
/* mali و / ى (znak dužine zamjenice) se u našem pismu ne piše – s njim otpada i medda iznad njeg */
function cistTekst(h) {
	if (h.razmak) return ' ';
	const hareke = [];
	for (let i = 0; i < h.hareke.length; i++) {
		const c = h.hareke[i];
		if (c === 'ۥ' || c === 'ۦ') {
			if (h.hareke[i + 1] === 'ٓ') i++;
			continue;
		}
		hareke.push(c);
	}
	return (h.harf || h.vakf || '') + hareke.join('');
}

/* objašnjenja se ponavljaju kroz cijeli tekst, pa se čuvaju jednom i navode brojem */
function rjecnik() {
	const bs = [], en = [], kljuc = {};
	return {
		bs,
		en,
		broj(a, b) {
			const k = a + ' | ' + b;
			if (kljuc[k] === undefined) {
				kljuc[k] = bs.length;
				bs.push(a);
				en.push(b);
			}
			return kljuc[k];
		}
	};
}

const dopuni = (n, sirina) => String(n).padStart(sirina, '0');

/* Razlaže jedan ajet: tekst po dijelovima + pravila koja u njemu vrijede. */
function ajet(html, sura, broj, rj, brojac, cist, segmenti) {
	const { H, rijeci, nadjena } = analiziraj(html, cist);
	/* svaki harf dobija najviše jedno pravilo – jače pravilo ima prednost */
	const kome = new Array(H.length).fill(-1);
	nadjena
		.map((p, i) => ({ p, i }))
		.sort((a, b) => tez(a.p.id) - tez(b.p.id))
		.forEach(({ p, i }) => {
			for (let k = p.od; k <= p.do; k++) if (kome[k] < 0 && !H[k].razmak) kome[k] = i;
		});

	const dijelovi = [];
	H.forEach((h, k) => {
		const t = cistTekst(h);
		if (!t) return;
		const i = kome[k];
		const zadnji = dijelovi[dijelovi.length - 1];
		if (zadnji && zadnji.i === i) zadnji.t += t;
		else dijelovi.push({ t, i });
	});

	const rijecTeksta = (k) => {
		const r = H[k].rijec;
		if (r === undefined || r < 0 || !rijeci[r]) return '';
		return rijeci[r].map((x) => cistTekst(H[x])).join('');
	};

	if (brojac) nadjena.forEach((p) => (brojac[p.id] = (brojac[p.id] || 0) + 1));

	const izlazDijelovi = dijelovi.map((d) => (d.i < 0 ? { t: d.t } : { t: d.t, i: d.i }));
	/* vrijeme se upisuje samo ako se broj zapisa poklapa s brojem riječi u našem tekstu */
	const zaZvuk = rijeciAjeta(izlazDijelovi);
	const vrijeme = segmenti && segmenti.length === zaZvuk.length ? segmenti : null;
	if (!vrijeme) bezVremena.push(sura + ':' + broj + ' (riječi ' + zaZvuk.length + ', zapisa ' + ((segmenti || []).length) + ')');

	return Object.assign(
		{
			n: broj,
			audio: dopuni(sura, 3) + dopuni(broj, 3) + '.mp3'
		},
		vrijeme ? { vrijeme } : {},
		{
		dijelovi: izlazDijelovi,
		pravila: nadjena.map((p) => ({
			id: p.id,
			rijec: rijecTeksta(p.od) || H[p.od].vakf || '',
			t: rj.broj(p.bs, p.en)
		}))
		}
	);
}

/* Isti niz znakova kao naš, ali dobiven iz čistog uthmani zapisa – kontrola da se
   pri razlaganju tedžvidskih oznaka nije izgubio ili promijenio nijedan harf. */
const uporedno = (tekst) =>
	uHarfove(normalizuj([].map.call(tekst, (ch) => ({ ch, cls: null, raspon: null }))))
		.map(tekstHarfa)
		.join('')
		.replace(/[ۥۦ]ٓ?/g, '')
		.replace(/۟/g, '')
		.replace(/\s+/g, ' ')
		.trim();

const razlike = [];
function provjeri(oznaka, a, cist) {
	const nas = a.dijelovi.map((d) => d.t).join('').replace(/\s+/g, ' ').trim();
	const ocekivano = uporedno(cist);
	if (nas !== ocekivano) razlike.push(oznaka + '\n     naš: ' + nas + '\n  izvor: ' + ocekivano);
}

/* alquran.cloud vraća „سُورَةُ الإِخۡلَاصِ” – ostaje samo naziv, s uobičajenim sukunom */
const arapskiNaziv = (ime) => String(ime || '').replace(/^سُورَةُ\s*/, '').replace(/ۡ/g, 'ْ').trim();

const AUDIO = { baza: 'https://everyayah.com/data/Husary_128kbps/', ucac: 'Mahmud Halil el-Husari' };
const tajweedUrl = (n) => 'https://api.quran.com/api/v4/quran/verses/uthmani_tajweed?chapter_number=' + n;
const uthmaniUrl = (n) => 'https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=' + n;

/* ---------- vrijeme svake riječi u zapisu ----------
   quran.com uz Husarijev zapis (učač 6) daje i vrijeme svake riječi, a taj zapis je
   isti onaj s everyayah.com koji stranica pušta – samo u drugoj gustini (64 naspram
   128 kb/s), pa vremena vrijede jedan na jedan. Zahvaljujući tome se pri slušanju u
   tekstu može istaći riječ koja se upravo uči. */
const UCAC = 6;
const vrijemeUrl = (n) =>
	'https://api.quran.com/api/v4/recitations/' + UCAC + '/by_chapter/' + n + '?fields=segments&per_page=300';

async function vremenaSure(sura) {
	const j = await dohvati(vrijemeUrl(sura), 'vrijeme-' + UCAC + '-' + sura + '.json');
	const po = {};
	(j.audio_files || []).forEach((a) => {
		const n = Number(String(a.verse_key).split(':')[1]);
		/* zapis je [redni broj od nule, redni broj od jedan, početak, kraj] – trebaju nam ms */
		po[n] = (a.segments || []).map((g) => [ Math.round(g[2]), Math.round(g[3]) ]);
	});
	return po;
}

/* riječi ajeta onako kako ih broji quran.com: znak za vakf stoji sam i ne broji se */
const jeZnakSam = (t) => t.length > 0 && Array.from(t).every(jeVakf);
const rijeciAjeta = (dijelovi) => dijelovi.map((d) => d.t).join('').split(/\s+/).filter((t) => t && !jeZnakSam(t));

const bezVremena = [];

function zapisi(putanja, sadrzaj, brojac, naslov) {
	/* vremena riječi idu u jedan red po ajetu – razvučena po broju su nečitljiva */
	const vremena = [];
	const tekst = JSON
		.stringify(
			sadrzaj,
			(k, v) => {
				if (k !== 'vrijeme') return v;
				vremena.push(JSON.stringify(v));
				return '@@' + (vremena.length - 1) + '@@';
			},
			'\t'
		)
		.replace(/"@@(\d+)@@"/g, (m, i) => vremena[Number(i)]);
	fs.writeFileSync(putanja, tekst);
	console.log('\n' + naslov + ' → ' + path.relative(process.cwd(), putanja));
	KATALOG.forEach((p) => console.log(String(brojac[p.id] || 0).padStart(5), p.id, '(lekcija ' + p.lekcija + ')'));
	const bez = Object.keys(brojac).filter((k) => !PRIORITET.hasOwnProperty(k));
	if (bez.length) console.log('!! pravila van kataloga:', bez.join(', '));
}

/* ---------- duga sura: odjeljak je stranica mushafa (Jasin, Mulk) ---------- */
async function gradiPoStranicama(sura, izlaz, vrsta, naslov) {
	const taj = await dohvati(tajweedUrl(sura), 'tajweed-' + sura + '.json');
	const cist = await dohvati(uthmaniUrl(sura), 'uthmani-' + sura + '.json');
	const cloud = await dohvati('https://api.alquran.cloud/v1/surah/' + sura + '/quran-uthmani', 'stranice-' + sura + '.json');
	const vremena = await vremenaSure(sura);
	const stranicaAjeta = {};
	cloud.data.ayahs.forEach((a) => (stranicaAjeta[a.numberInSurah] = a.page));

	const rj = rjecnik();
	const brojac = {};
	const odjeljci = [];
	taj.verses.forEach((v, idx) => {
		const n = idx + 1;
		const a = ajet(v.text_uthmani_tajweed, sura, n, rj, brojac, cist.verses[idx].text_uthmani, vremena[n]);
		provjeri(sura + ':' + n, a, cist.verses[idx].text_uthmani);
		const str = stranicaAjeta[n];
		let o = odjeljci.find((x) => x.stranica === str);
		if (!o) odjeljci.push((o = { kljuc: 's' + str, sura, stranica: str, ajeti: [] }));
		o.ajeti.push(a);
	});
	odjeljci.forEach((o) => {
		o.od = o.ajeti[0].n;
		o.do = o.ajeti[o.ajeti.length - 1].n;
	});

	zapisi(
		izlaz,
		{
			vrsta,
			sura,
			brojAjeta: taj.verses.length,
			audio: AUDIO,
			objasnjenja: { bs: rj.bs, en: rj.en },
			odjeljci
		},
		brojac,
		naslov
	);
}

const gradiJasin = () => gradiPoStranicama(36, IZLAZ_JASIN, 'jasin', 'Sura Jasin');
const gradiMulk = () => gradiPoStranicama(67, IZLAZ_MULK, 'mulk', 'Sura El-Mulk');

/* ---------- kratka cjelina u jednom odjeljku (Fatiha, Ajetul-kursij) ---------- */
async function gradiCjelinu({ sura, od, do: doAjeta, izlaz, vrsta, kljuc, naziv, znacenje, naslov }) {
	const taj = await dohvati(tajweedUrl(sura), 'tajweed-' + sura + '.json');
	const cist = await dohvati(uthmaniUrl(sura), 'uthmani-' + sura + '.json');
	const popis = (await dohvati('https://api.alquran.cloud/v1/surah', 'sure.json')).data;
	const info = popis.find((x) => x.number === sura) || {};
	const vremena = await vremenaSure(sura);

	const rj = rjecnik();
	const brojac = {};
	const ajeti = [];
	for (let n = od; n <= doAjeta; n++) {
		const idx = n - 1;
		const a = ajet(taj.verses[idx].text_uthmani_tajweed, sura, n, rj, brojac, cist.verses[idx].text_uthmani, vremena[n]);
		provjeri(sura + ':' + n, a, cist.verses[idx].text_uthmani);
		ajeti.push(a);
	}

	zapisi(
		izlaz,
		{
			vrsta,
			sura,
			brojAjeta: ajeti.length,
			audio: AUDIO,
			objasnjenja: { bs: rj.bs, en: rj.en },
			odjeljci: [
				{
					kljuc,
					sura,
					od,
					do: doAjeta,
					brojAjeta: ajeti.length,
					mekkanska: info.revelationType !== 'Medinan',
					naziv: { bs: naziv.bs, en: naziv.en, ar: naziv.ar || arapskiNaziv(info.name) },
					znacenje,
					ajeti
				}
			]
		},
		brojac,
		naslov
	);
}

const gradiFatihu = () =>
	gradiCjelinu({
		sura: 1,
		od: 1,
		do: 7,
		izlaz: IZLAZ_FATIHA,
		vrsta: 'fatiha',
		kljuc: 'f1',
		naziv: { bs: 'El-Fatiha', en: 'Al-Fatihah' },
		znacenje: { bs: 'Pristup', en: 'The Opening' },
		naslov: 'Sura El-Fatiha'
	});

const gradiKursij = () =>
	gradiCjelinu({
		sura: 2,
		od: 255,
		do: 255,
		izlaz: IZLAZ_KURSIJ,
		vrsta: 'kursij',
		kljuc: 'k255',
		naziv: { bs: 'Ajetul-kursij', en: 'Ayat al-Kursi', ar: 'آيَةُ الْكُرْسِيِّ' },
		znacenje: { bs: 'Ajet o Prijestolju', en: 'The Verse of the Throne' },
		naslov: 'Ajetul-kursij (2:255)'
	});

/* ---------- Amme džuz: odjeljak je jedna sura, a besmela se uči prije svake ---------- */
async function gradiAmme() {
	const popis = (await dohvati('https://api.alquran.cloud/v1/surah', 'sure.json')).data;
	const fatiha = await dohvati(tajweedUrl(1), 'tajweed-1.json');
	const fatihaCist = await dohvati(uthmaniUrl(1), 'uthmani-1.json');
	const vremenaFatihe = await vremenaSure(1);

	const rj = rjecnik();
	const brojac = {};

	/* besmela je ista pred svakom surom, pa se čuva jednom */
	const besmela = ajet(fatiha.verses[0].text_uthmani_tajweed, 1, 1, rj, brojac, fatihaCist.verses[0].text_uthmani, vremenaFatihe[1]);
	provjeri('besmela', besmela, fatihaCist.verses[0].text_uthmani);
	besmela.n = 0;
	besmela.besmela = true;

	const odjeljci = [];
	for (const s of AMME) {
		const taj = await dohvati(tajweedUrl(s.n), 'tajweed-' + s.n + '.json');
		const cist = await dohvati(uthmaniUrl(s.n), 'uthmani-' + s.n + '.json');
		const info = popis.find((x) => x.number === s.n) || {};
		const vremena = await vremenaSure(s.n);
		const ajeti = taj.verses.map((v, i) => {
			const a = ajet(v.text_uthmani_tajweed, s.n, i + 1, rj, brojac, cist.verses[i].text_uthmani, vremena[i + 1]);
			provjeri(s.n + ':' + (i + 1), a, cist.verses[i].text_uthmani);
			return a;
		});
		odjeljci.push({
			kljuc: 'r' + s.n,
			sura: s.n,
			od: 1,
			do: taj.verses.length,
			brojAjeta: taj.verses.length,
			mekkanska: info.revelationType !== 'Medinan',
			naziv: { bs: s.bs, en: info.englishName || s.bs, ar: arapskiNaziv(info.name) },
			znacenje: s.znacenje,
			ajeti
		});
	}

	zapisi(
		IZLAZ_AMME,
		{ vrsta: 'amme', dzuz: 30, audio: AUDIO, objasnjenja: { bs: rj.bs, en: rj.en }, besmela, odjeljci },
		brojac,
		'Amme džuz (' + AMME[0].n + '-' + AMME[AMME.length - 1].n + ')'
	);
}

async function main() {
	await gradiFatihu();
	await gradiKursij();
	await gradiMulk();
	await gradiJasin();
	await gradiAmme();
	fs.writeFileSync(KATALOG_IZLAZ, JSON.stringify(KATALOG, null, '\t'));
	console.log('\nProvjera teksta prema čistom uthmani zapisu: ' + (razlike.length ? razlike.length + ' RAZLIKA' : 'sve se poklapa'));
	razlike.slice(0, 10).forEach((r) => console.log('  ' + r));
	console.log('Vrijeme riječi: ' + (bezVremena.length ? bezVremena.length + ' AJET(A) BEZ VREMENA' : 'upisano uz svaki ajet'));
	bezVremena.slice(0, 10).forEach((r) => console.log('  ' + r));
	if (razlike.length) process.exitCode = 1;
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
