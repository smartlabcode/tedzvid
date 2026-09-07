/*
 * Provjera izgrađenih podataka: da li svako objašnjenje odgovara harfovima u tekstu.
 * Pokretanje:  node scripts/sure/provjeri.js
 */
const path = require('path');

const DATA = path.join(__dirname, '..', '..', 'src', 'Data');

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

const ukupno = provjeri('YasinData.json') + provjeri('AmmeDzuzData.json');
console.log('\n' + (ukupno ? 'UKUPNO GREŠAKA: ' + ukupno : 'Sve provjere prošle.'));
process.exitCode = ukupno ? 1 : 0;
