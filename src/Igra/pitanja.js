import PRIMJERI from '../Data/Igra/primjeri.json';
import { promijesaj } from './rekordi';

/*
 * Pravljenje pitanja s ponuđenim odgovorima – dijele ga „trka kroz pravila”
 * i „prepoznaj po zvuku”. Odgovor je uvijek lekcija u kojoj se pravilo obrađuje.
 */

/* srodne lekcije – iz njih dolaze "varljivi" ponuđeni odgovori */
const PORODICE = [ [ 4, 5, 6, 7, 15, 16 ], [ 8 ], [ 9, 10 ], [ 11, 12 ], [ 13 ], [ 17, 18, 19, 20, 21, 22 ] ];
export const SVE_LEKCIJE = PRIMJERI.reduce((acc, p) => (acc.indexOf(p.lekcija) < 0 ? acc.concat(p.lekcija) : acc), []);

/* jedno pitanje: tačna lekcija + tri ponuđene, s prednošću srodnima */
export function napraviPitanje(primjer) {
	const tacna = primjer.lekcija;
	const porodica = (PORODICE.find((p) => p.indexOf(tacna) >= 0) || []).filter(
		(n) => n !== tacna && SVE_LEKCIJE.indexOf(n) >= 0
	);
	const ostale = SVE_LEKCIJE.filter((n) => n !== tacna && porodica.indexOf(n) < 0);
	const ponude = promijesaj(porodica).slice(0, 2).concat(promijesaj(ostale)).slice(0, 3);
	return { primjer, opcije: promijesaj(ponude.concat(tacna)), tacna };
}
