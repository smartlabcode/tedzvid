/*
 * Gradi src/Data/YasinData.json – suru Jasin razloženu po stranicama mushafa,
 * s tedžvidskim pravilima iz svih 22 lekcije i objašnjenjem uz svako pravilo.
 *
 * Pokretanje:  node scripts/yasin/build.js
 * Izvori:      api.quran.com (uthmani tekst s tedžvidskim oznakama) i
 *              api.alquran.cloud (broj stranice mushafa za svaki ajet).
 * Preuzeto se kešira u scripts/yasin/.cache da ponovna gradnja ne traži internet.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { razloziOznake, normalizuj, uHarfove, tekstHarfa } = require('./lib');
const KATALOG = require('./pravila');

const CACHE = path.join(__dirname, '.cache');
const IZLAZ = path.join(__dirname, '..', '..', 'src', 'Data', 'YasinData.json');
const KATALOG_IZLAZ = path.join(__dirname, '..', '..', 'src', 'Data', 'YasinPravila.json');

/* ---------- preuzimanje s keširanjem ---------- */
function dohvati(url, ime) {
	const f = path.join(CACHE, ime);
	if (fs.existsSync(f)) return Promise.resolve(JSON.parse(fs.readFileSync(f, 'utf8')));
	fs.mkdirSync(CACHE, { recursive: true });
	return new Promise((res, rej) => {
		https
			.get(url, (r) => {
				let s = '';
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
const FETHA = 'َ', DAMMA = 'ُ', KESRA = 'ِ', SUKUN = 'ْ', SEDDA = 'ّ', MEDDA = 'ٓ';
const TENVINI = 'ًٌٍ';
const MALI_ALIF = 'ٰ';
const HEMZE = 'ءأإؤئآ';
const GRLENI = 'ءأإؤئآهعحغخ';        /* izhar hallkijj */
const KALKALA_H = 'قطبجد';
const KRUPNI = 'خصضغطقظ';            /* harfovi isti'la – uz njih se R uči krupno */
const SUNCEVI = 'تثدذرزسشصضطظلن';

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

const sljedeciHarf = (H, i) => {
	for (let k = i + 1; k < H.length; k++) if (H[k].harf) return k;
	return -1;
};
const prethodniHarf = (H, i) => {
	for (let k = i - 1; k >= 0; k--) if (H[k].harf) return k;
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
const PRIORITET = KATALOG.reduce((a, p, i) => ((a[p.id] = i), a), {});
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
function analiziraj(html) {
	const H = uHarfove(normalizuj(razloziOznake(html)));
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
		while (j + 1 < H.length && (H[j + 1].cls === cls || (H[j + 1].razmak && H[j + 2] && H[j + 2].cls === cls))) j++;
		const cilj = H.slice(i, j + 1).filter((h) => h.harf);
		const zadnji = cilj[cilj.length - 1];
		let id = KLASE[cls];
		if (cls === 'idgham_ghunnah') id = zadnji && zadnji.harf === 'ن' ? 'idgam-mislejn-gunneh' : 'idgam-gunneh';
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
		const s = sljedeciHarf(H, k);
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
		if (a === b) id = a === 'ن' || a === 'م' ? 'idgam-mislejn-gunneh' : 'idgam-mislejn';
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

/* iz raspona oznake izvlači harf koji je izvor pravila i harf na koji nailazi */
function par(ctx) {
	const H = ctx.H.slice(ctx.od, ctx.do + 1).filter((h) => h.harf);
	const izvor = H[0] || {};
	const cilj = H[H.length - 1] || {};
	const t = tenvin(izvor);
	return {
		izvor,
		cilj: cilj === izvor ? null : cilj,
		tenvin: t,
		/* opis izvora: "tenvin IN (ٍ)" ili "N sa sukunom (نْ)" */
		opis: {
			bs: t ? 'Tenvin ' + TENVIN_IME[t] + ' (' + t + ')' : im(izvor.harf, 'bs') + ' sa sukunom',
			en: t ? 'Tanween ' + TENVIN_IME[t] + ' (' + t + ')' : im(izvor.harf, 'en') + ' with a sukun'
		}
	};
}

function objasni(id, ctx) {
	const p = ctx.H ? par(ctx) : null;
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
		case 'idgam-mislejn-gunneh': {
			const h = p ? p.izvor.harf : ctx.a;
			return {
				bs: im(h, 'bs') + ' sa sukunom ispred istog harfa: uklapa se uz gunnu 2 hareketa (idgam mislejn mea-l-gunneh).',
				en: im(h, 'en') + ' with a sukun before the same letter: merged with ghunnah for 2 harakas (idgham mithlayn ma’al-ghunnah).'
			};
		}
		case 'idgam-mislejn':
			return {
				bs: 'Harf ' + im(ctx.a, 'bs') + ' sa sukunom ispred istog harfa: uklapa se u njeg (idgam mislejn).',
				en: 'The letter ' + im(ctx.a, 'en') + ' with a sukun before the same letter: merged into it (idgham mithlayn).'
			};
		case 'idgam-mutedzanisejn':
			return {
				bs: 'Harf ' + im(ctx.a, 'bs') + ' sa sukunom ispred srodnog harfa ' + im(ctx.b, 'bs') + ': uklapa se u njeg (idgam mutedžanisejn).',
				en: 'The letter ' + im(ctx.a, 'en') + ' with a sukun before the related letter ' + im(ctx.b, 'en') + ': merged into it (idgham mutajanisayn).'
			};
		case 'idgam-mutekaribejn':
			return {
				bs: 'Harf ' + im(ctx.a, 'bs') + ' sa sukunom ispred bliskog harfa ' + im(ctx.b, 'bs') + ': uklapa se u njeg (idgam mutekaribejn).',
				en: 'The letter ' + im(ctx.a, 'en') + ' with a sukun before the close letter ' + im(ctx.b, 'en') + ': merged into it (idgham mutaqaribayn).'
			};
		case 'izhar-halkij':
			return {
				bs: (ctx.tenvin ? 'Tenvin ' + TENVIN_IME[ctx.tenvin] + ' (' + ctx.tenvin + ')' : 'N sa sukunom (نْ)') +
					' ispred grlenog harfa ' + im(ctx.harf, 'bs') + ': izgovara se čisto, bez gunne (izhar hallkijj).',
				en: (ctx.tenvin ? 'Tanween ' + TENVIN_IME[ctx.tenvin] + ' (' + ctx.tenvin + ')' : 'N with a sukun (نْ)') +
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

/* objašnjenja se ponavljaju kroz cijelu suru, pa se čuvaju jednom i navode brojem */
const RJECNIK = { bs: [], en: [], kljuc: {} };
function tekstovi(bs, en) {
	const k = bs + '\u0000' + en;
	if (RJECNIK.kljuc[k] === undefined) {
		RJECNIK.kljuc[k] = RJECNIK.bs.length;
		RJECNIK.bs.push(bs);
		RJECNIK.en.push(en);
	}
	return RJECNIK.kljuc[k];
}

function ajet(html, broj) {
	const { H, rijeci, nadjena } = analiziraj(html);
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

	return {
		n: broj,
		audio: '036' + String(broj).padStart(3, '0') + '.mp3',
		dijelovi: dijelovi.map((d) => (d.i < 0 ? { t: d.t } : { t: d.t, i: d.i })),
		pravila: nadjena.map((p) => ({
			id: p.id,
			rijec: rijecTeksta(p.od) || H[p.od].vakf || '',
			t: tekstovi(p.bs, p.en)
		}))
	};
}

async function main() {
	const taj = await dohvati('https://api.quran.com/api/v4/quran/verses/uthmani_tajweed?chapter_number=36', 'tajweed.json');
	const cloud = await dohvati('https://api.alquran.cloud/v1/surah/36/quran-uthmani', 'stranice.json');
	const stranicaAjeta = {};
	cloud.data.ayahs.forEach((a) => (stranicaAjeta[a.numberInSurah] = a.page));

	const stranice = [];
	const brojac = {};
	taj.verses.forEach((v, idx) => {
		const n = idx + 1;
		const a = ajet(v.text_uthmani_tajweed, n);
		a.pravila.forEach((p) => (brojac[p.id] = (brojac[p.id] || 0) + 1));
		const str = stranicaAjeta[n];
		let s = stranice.find((x) => x.broj === str);
		if (!s) stranice.push((s = { broj: str, ajeti: [] }));
		s.ajeti.push(a);
	});
	stranice.forEach((s) => {
		s.od = s.ajeti[0].n;
		s.do = s.ajeti[s.ajeti.length - 1].n;
	});

	fs.writeFileSync(
		IZLAZ,
		JSON.stringify(
			{
				sura: 36,
				brojAjeta: 83,
				audio: { baza: 'https://everyayah.com/data/Husary_128kbps/', ucac: 'Mahmud Halil el-Husari' },
				objasnjenja: { bs: RJECNIK.bs, en: RJECNIK.en },
				stranice
			},
			null,
			'\t'
		)
	);
	fs.writeFileSync(KATALOG_IZLAZ, JSON.stringify(KATALOG, null, '\t'));

	console.log('Zapisano:', IZLAZ);
	KATALOG.forEach((p) => console.log(String(brojac[p.id] || 0).padStart(4), p.id, '(lekcija ' + p.lekcija + ')'));
	const bez = Object.keys(brojac).filter((k) => !PRIORITET.hasOwnProperty(k));
	if (bez.length) console.log('!! pravila van kataloga:', bez.join(', '));
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
