/*
 * Rekordi igraonice – čuvaju se samo u pregledniku (localStorage), bez servera.
 * Ključ po igri: 'tedzvid-igra-<id>'.
 */
const KLJUC = (id) => 'tedzvid-igra-' + id;

export function rekord(id) {
	try {
		const s = JSON.parse(window.localStorage.getItem(KLJUC(id)));
		return s && typeof s === 'object' ? s : null;
	} catch (e) {
		return null;
	}
}

/* Upiši rekord ako je bolji. `bolje` odlučuje šta je bolje (veći broj bodova, manje poteza…). */
export function upisiRekord(id, nov, bolje) {
	const stari = rekord(id);
	if (stari && !bolje(nov, stari)) return { rekord: stari, noviRekord: false };
	try {
		window.localStorage.setItem(KLJUC(id), JSON.stringify(nov));
	} catch (e) {}
	return { rekord: nov, noviRekord: true };
}

export const viseBodova = (a, b) => (a.bodovi || 0) > (b.bodovi || 0);

/* memorija: prvo manje poteza, pa kraće vrijeme */
export const boljiPokusaj = (a, b) => a.potezi < b.potezi || (a.potezi === b.potezi && a.vrijeme < b.vrijeme);

/* nasumičan redoslijed (Fisher–Yates) */
export function promijesaj(niz) {
	const a = niz.slice();
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const t = a[i];
		a[i] = a[j];
		a[j] = t;
	}
	return a;
}

export const nasumicno = (niz) => niz[Math.floor(Math.random() * niz.length)];

/* mm:ss */
export function vrijemeTekst(ms) {
	const s = Math.max(0, Math.round(ms / 1000));
	return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}

/* 1–3 zvjezdice prema učinku (0–1) */
export const zvjezdice = (udio) => (udio >= 0.85 ? 3 : udio >= 0.55 ? 2 : udio >= 0.25 ? 1 : 0);
