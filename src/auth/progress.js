/*
 * Pravila napretka – čista logika bez React-a.
 * Lekcije su otvorene svima, bez prijave; napredak se prati kroz grupne kvizove.
 * PROLAZ, UKUPNO i podjela u grupe moraju odgovarati vrijednostima u server/index.js.
 */
export const PROLAZ = 7; /* najmanje tačnih odgovora za prolaz kviza lekcije */
export const UKUPNO = 10; /* pitanja po kvizu lekcije */
export const BROJ_LEKCIJA = 22;

export function jePolozena(progress, n) {
	const p = progress && progress[String(n)];
	return !!(p && p.polozeno);
}

export const sljedecaLekcija = (n) => (n >= BROJ_LEKCIJA ? null : n + 1);

export const putanjaLekcije = (n) => '/lekcija' + n;

/* Kviz lekcije 14 je na kraju njenog drugog dijela (/lekcija14_2) */
export const putanjaKviza = (n) => (n === 14 ? '/lekcija14_2' : '/lekcija' + n) + '#kviz';

/* ----- grupe lekcija: 4 + 4 + 4 + 4 + 6, iza svake grupe stoji grupni kviz ----- */
export const VELICINE_GRUPA = [ 4, 4, 4, 4, 6 ];
export const UKUPNO_GRUPA = 20; /* pitanja u grupnom kvizu */
export const PROLAZ_GRUPA = 14;

export const GRUPE = VELICINE_GRUPA.reduce((acc, koliko, i) => {
	const od = i ? acc[i - 1].do + 1 : 1;
	const lekcije = [];
	for (let n = od; n < od + koliko; n++) lekcije.push(n);
	return acc.concat({ broj: i + 1, od, do: od + koliko - 1, lekcije });
}, []);
export const BROJ_GRUPA = GRUPE.length;

export const kljucGrupe = (broj) => 'g' + broj;
export const jeKljucGrupe = (key) => /^g[1-9][0-9]*$/.test(String(key));
export const brojGrupe = (key) => parseInt(String(key).slice(1), 10);
export const grupa = (broj) => GRUPE[broj - 1] || null;
export const grupaLekcije = (n) => GRUPE.find((g) => n >= g.od && n <= g.do) || null;
export const putanjaGrupnog = (broj) => '/kviz-grupa' + broj;

export const jePolozenaGrupa = (progress, broj) => jePolozena(progress, kljucGrupe(broj));

/* Grupni kviz: prvi je otvoren svima, svaki sljedeći traži položen prethodni. */
export const jeOtkljucanaGrupa = (progress, broj) => !(broj > 1) || jePolozenaGrupa(progress, broj - 1);

/* Prva grupa čiji kviz još nije položen (null kad su sve položene) */
export function trenutnaGrupa(progress) {
	for (let b = 1; b <= BROJ_GRUPA; b++) {
		if (!jePolozenaGrupa(progress, b)) return b;
	}
	return null;
}

export const svePolozeneGrupe = (progress) => GRUPE.every((g) => jePolozenaGrupa(progress, g.broj));
export const sljedecaGrupa = (broj) => (broj >= BROJ_GRUPA ? null : broj + 1);

/* ----- završni kviz: 100 pitanja iz svih lekcija, otključan kad su položeni svi grupni kvizovi ----- */
export const ZAVRSNI = 'zavrsni';
export const UKUPNO_ZAVRSNI = 100;
export const PROLAZ_ZAVRSNI = 70;
export const putanjaZavrsnog = '/zavrsni-kviz';
/* stariji korisnici koji su prešli sve lekcije po starim pravilima zadržavaju pristup */
export const jeOtkljucanZavrsni = (progress) =>
	svePolozeneGrupe(progress) || jePolozena(progress, BROJ_LEKCIJA);
export const jePolozenZavrsni = (progress) => jePolozena(progress, ZAVRSNI);

/* ----- bonus lekcije s kur'anskim tekstom: otvorene su svima, kao i ostale lekcije ----- */
export const putanjaBonusa = '/jasin';
export const putanjaAmmeDzuza = '/amme-dzuz';
export const putanjaFatihe = '/fatiha';
export const putanjaKursija = '/ajetul-kursij';
export const putanjaMulka = '/mulk';

/* ----- mualim: kviz od proizvoljne kombinacije lekcija ----- */
export const putanjaMualima = '/mualim';
export const IZBOR_PITANJA = [ 10, 20, 30 ]; /* ponuđene dužine mualimovog kviza (0 = sva pitanja) */
