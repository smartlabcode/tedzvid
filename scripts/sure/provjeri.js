/*
 * Provjera izgrađenih podataka: da li svako objašnjenje odgovara harfovima u tekstu
 * i da li se riječi ajeta poklapaju s vremenima iz zvučnog zapisa.
 * Pokretanje:  node scripts/sure/provjeri.js
 */
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', '..', 'src', 'Data');

/* Grupisanje u riječi se čita iz same aplikacije (src/Lessons/suraRijeci.js) da bi
   provjera i prikaz uvijek radili po istom pravilu; `export` se samo skine. */
const IZVOR_RIJECI = path.join(__dirname, '..', '..', 'src', 'Lessons', 'suraRijeci.js');
const { uRijeci } = new Function(
	fs.readFileSync(IZVOR_RIJECI, 'utf8').replace(/^export /gm, '') + '\nreturn { uRijeci, rijecUVremenu };'
)();

/* ciljni harfovi po pravilu – ono ispred čega izvor stoji */
const CILJ = {
	ihfa: 'تثجدذزسشصضطظفقك',
	iklab: 'ب',
	'ihfa-sefevijj': 'ب',
	'idgam-gunneh': 'يمنو',
	'idgam-bila-gunneh': 'لر',
	'izhar-halkij': 'ءأإؤئآهعحغخ',
	'idgam-mislejn-gunneh': 'م'
};
/* kako objašnjenje mora početi – izvor pravila */
const IZVOR = {
	ihfa: /^(N \(ن\) sa sukunom|Tenvin)/,
	iklab: /^(N \(ن\) sa sukunom|Tenvin)/,
	'idgam-gunneh': /^(N \(ن\) sa sukunom|Tenvin)/,
	'idgam-bila-gunneh': /^(N \(ن\) sa sukunom|Tenvin)/,
	'izhar-halkij': /^(N sa sukunom|Tenvin)/,
	'izhar-sefevijj': /^M sa sukunom/,
	'ihfa-sefevijj': /^M sa sukunom/,
	'idgam-mislejn-gunneh': /^M sa sukunom/
};

function provjeri(ime) {
	const d = require(path.join(DATA, ime));
	const greske = [];
	let ajeta = 0, pravila = 0, provjereno = 0;
	const brojac = {};

	const redovi = d.odjeljci.map((o) => ({ o, ajeti: (d.besmela ? [ d.besmela ] : []).concat(o.ajeti) }));
	redovi.forEach(({ o, ajeti }) =>
		ajeti.forEach((a) => {
			ajeta++;
			const oznaka = (o.sura || '?') + ':' + a.n;
			const tekst = a.dijelovi.map((x) => x.t).join('');
			/* svaki dio teksta mora pokazivati na postojeće pravilo */
			a.dijelovi.forEach((x) => {
				if (x.i !== undefined && !a.pravila[x.i]) greske.push(oznaka + ' → dio bez pravila');
			});
			a.pravila.forEach((p) => {
				pravila++;
				brojac[p.id] = (brojac[p.id] || 0) + 1;
				const t = d.objasnjenja.bs[p.t];
				const te = d.objasnjenja.en[p.t];
				if (!t || !te) return greske.push(oznaka + ' → nedostaje objašnjenje za ' + p.id);
				if (/undefined|null|NaN|\[object/.test(t + te)) greske.push(oznaka + ' → nepopunjeno objašnjenje: ' + t);
				if (p.rijec && tekst.indexOf(p.rijec) < 0) greske.push(oznaka + ' → riječ „' + p.rijec + '” nije u ajetu');
				if (IZVOR[p.id]) {
					provjereno++;
					if (!IZVOR[p.id].test(t)) greske.push(oznaka + ' → pogrešan izvor: ' + t);
				}
				if (CILJ[p.id]) {
					const m = /ispred (?:grlenog |istog )?harfa [^()]*\(([^)]+)\)/.exec(t);
					if (!m) greske.push(oznaka + ' → bez ciljnog harfa: ' + t);
					else if (CILJ[p.id].indexOf(m[1]) < 0) greske.push(oznaka + ' → ' + m[1] + ' nije u grupi za ' + p.id);
				}
				if (p.id === 'kalkala') {
					const m = /Harf [^()]*\(([^)]+)\)/.exec(t);
					if (!m || 'قطبجد'.indexOf(m[1]) < 0) greske.push(oznaka + ' → kalkala na harfu izvan grupe: ' + t);
				}
				if (p.id === 'gunne') {
					const m = /^[^()]*\(([^)]+)\)/.exec(t);
					if (!m || 'نم'.indexOf(m[1]) < 0) greske.push(oznaka + ' → gunne na harfu izvan grupe: ' + t);
				}
				if (p.id === 'izhar-sefevijj') {
					const m = /ispred harfa [^()]*\(([^)]+)\)/.exec(t);
					if (m && 'مب'.indexOf(m[1]) >= 0) greske.push(oznaka + ' → izhar šefevijj ispred ' + m[1]);
				}
			});
		})
	);

	console.log('\n' + ime);
	console.log('  odjeljaka: ' + d.odjeljci.length + ', ajeta: ' + ajeta + ', pravila: ' + pravila +
		', objašnjenja: ' + d.objasnjenja.bs.length);
	console.log('  provjereno N/M pravila: ' + provjereno + ', grešaka: ' + greske.length);
	greske.slice(0, 15).forEach((g) => console.log('   ! ' + g));
	return greske.length;
}

/* Vrijeme riječi: mora ga biti tačno onoliko koliko ajet ima riječi, mora rasti,
   a grupisanje mora vratiti isti tekst kakav je i ušao. */
function provjeriVrijeme(ime) {
	const d = require(path.join(DATA, ime));
	const greske = [];
	let ajeta = 0, rijeci = 0;

	const jedan = (sura, a) => {
		ajeta++;
		const oznaka = sura + ':' + a.n;
		const cjeline = uRijeci(a.dijelovi);
		const tekst = cjeline.map((c) => c.dijelovi.map((x) => x.t).join('')).join('');
		if (tekst !== a.dijelovi.map((x) => x.t).join('')) greske.push(oznaka + ' → grupisanje mijenja tekst');
		const brojRijeci = cjeline.filter((c) => c.w >= 0).length;
		rijeci += brojRijeci;
		if (!a.vrijeme) return greske.push(oznaka + ' → nema vremena riječi');
		if (a.vrijeme.length !== brojRijeci)
			greske.push(oznaka + ' → vremena ' + a.vrijeme.length + ', riječi ' + brojRijeci);
		let prije = -1;
		a.vrijeme.forEach((v, i) => {
			if (!Array.isArray(v) || v.length !== 2) greske.push(oznaka + ' → neispravan zapis na ' + i);
			else if (v[0] < prije || v[1] < v[0]) greske.push(oznaka + ' → vrijeme ne raste na ' + i);
			else prije = v[0];
		});
	};

	if (d.besmela) jedan(1, d.besmela);
	d.odjeljci.forEach((o) => o.ajeti.forEach((a) => jedan(o.sura, a)));
	console.log('  ' + ime.padEnd(20) + ' ajeta: ' + String(ajeta).padStart(4) + ', riječi: ' + String(rijeci).padStart(5) +
		', grešaka: ' + greske.length);
	greske.slice(0, 10).forEach((g) => console.log('   ! ' + g));
	return greske.length;
}

let ukupno = provjeri('YasinData.json') + provjeri('AmmeDzuzData.json');
console.log('\nVrijeme riječi uz zvučni zapis');
ukupno += [ 'FatihaData.json', 'KursijData.json', 'MulkData.json', 'YasinData.json', 'AmmeDzuzData.json' ]
	.map(provjeriVrijeme)
	.reduce((a, b) => a + b, 0);
console.log('\n' + (ukupno ? 'UKUPNO GREŠAKA: ' + ukupno : 'Sve provjere prošle.'));
process.exitCode = ukupno ? 1 : 0;
