/*
 * Pravila napretka kroz lekcije – čista logika bez React-a.
 * PROLAZ i UKUPNO moraju odgovarati vrijednostima u server/index.js.
 */
export const PROLAZ = 7; /* najmanje tačnih odgovora za prolaz kviza */
export const UKUPNO = 10; /* pitanja po kvizu */
export const BROJ_LEKCIJA = 22;

/* ključ rute → broj lekcije ('14_2' → 14) */
export const brojLekcije = (key) => parseInt(String(key), 10);

export function jePolozena(progress, n) {
	const p = progress && progress[String(n)];
	return !!(p && p.polozeno);
}

/* Lekcija je otključana ako je prva ili ako je položen kviz prethodne. */
export function jeOtkljucana(progress, key) {
	const n = brojLekcije(key);
	if (!(n > 1)) return true;
	return jePolozena(progress, n - 1);
}

/* Prva lekcija čiji kviz još nije položen (null kad su sve položene) */
export function trenutnaLekcija(progress) {
	for (let n = 1; n <= BROJ_LEKCIJA; n++) {
		if (!jePolozena(progress, n)) return n;
	}
	return null;
}

export const sljedecaLekcija = (n) => (n >= BROJ_LEKCIJA ? null : n + 1);

export const putanjaLekcije = (n) => '/lekcija' + n;

/* Kviz lekcije 14 je na kraju njenog drugog dijela (/lekcija14_2) */
export const putanjaKviza = (n) => (n === 14 ? '/lekcija14_2' : '/lekcija' + n) + '#kviz';

/* '/lekcija14_2' → '14_2', '/lekcija3' → '3' */
export function kljucIzPutanje(path) {
	const m = /lekcija([0-9]+(?:_[0-9]+)?)/.exec(String(path || ''));
	return m ? m[1] : null;
}

/* ----- završni kviz: 100 pitanja iz svih lekcija, otključan kad su položene sve lekcije ----- */
export const ZAVRSNI = 'zavrsni';
export const UKUPNO_ZAVRSNI = 100;
export const PROLAZ_ZAVRSNI = 70;
export const putanjaZavrsnog = '/zavrsni-kviz';
export const jeOtkljucanZavrsni = (progress) => jePolozena(progress, BROJ_LEKCIJA);
export const jePolozenZavrsni = (progress) => jePolozena(progress, ZAVRSNI);
