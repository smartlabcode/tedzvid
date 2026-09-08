/*
 * Riječi kur'anskog ajeta za praćenje zvučnog zapisa.
 *
 * Uz svaki ajet u podacima ide `vrijeme`: po jedan zapis [početak, kraj] u
 * milisekundama za svaku riječ. Ovdje se dijelovi ajeta (razlomljeni po
 * tedžvidskim pravilima) grupišu u riječi točno onako kako ih broji taj zapis,
 * pa se dok se ajet sluša u tekstu može istaći riječ koja se upravo uči.
 *
 * Isti kod koristi i scripts/sure/provjeri.js da grupisanje i podaci ne odu svako svojim putem.
 */

/* znakovi za vakf i rub' – stoje samostalno i ne broje se kao riječ */
export const ZNAKOVI = 'ۖۗۘۙۚۛۜ۝۞۩';
export const jeZnakSam = (t) => t.length > 0 && Array.from(t).every((c) => ZNAKOVI.indexOf(c) >= 0);

/*
 * Jedna riječ zna biti razlomljena na više obojenih dijelova, a jedan dio zna
 * obuhvatiti kraj jedne i početak druge riječi – zato se ide komad po komad.
 * Razmaci i znakovi za vakf dobijaju w = -1 i ne broje se.
 */
export function uRijeci(dijelovi) {
	const cjeline = [];
	let tekuca = null;
	let broj = -1;
	dijelovi.forEach((d) => {
		d.t.split(/(\s+)/).forEach((k) => {
			if (!k) return;
			if (/^\s+$/.test(k) || jeZnakSam(k)) {
				tekuca = null;
				cjeline.push({ w: -1, dijelovi: [ { t: k, i: d.i } ] });
				return;
			}
			if (!tekuca) {
				broj += 1;
				tekuca = { w: broj, dijelovi: [] };
				cjeline.push(tekuca);
			}
			tekuca.dijelovi.push({ t: k, i: d.i });
		});
	});
	return cjeline;
}

/* koja se riječ uči u datom trenutku (ms): zadnja čiji je početak prošao */
export function rijecUVremenu(vrijeme, ms) {
	if (!vrijeme || !vrijeme.length || ms < vrijeme[0][0]) return -1;
	let od = 0, do_ = vrijeme.length - 1, n = -1;
	while (od <= do_) {
		const sr = (od + do_) >> 1;
		if (vrijeme[sr][0] <= ms) {
			n = sr;
			od = sr + 1;
		} else do_ = sr - 1;
	}
	return n;
}
