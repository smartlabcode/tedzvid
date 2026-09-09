/*
 * Bazen pitanja po lekciji: kviz lekcije (L{n}.json) + njen dio završnog kviza (zavrsni/L{n}.json).
 * Grupni kviz i mualimov kviz iz tog bazena izvlače nasumičan izbor, pa svaki pokušaj nosi druga pitanja.
 */
import QUIZ from './index';
import ZAVRSNI_PITANJA from './zavrsni';
import { GRUPE } from '../../auth/progress';

const PO_LEKCIJI = {};

Object.keys(QUIZ).forEach((k) => {
	const n = parseInt(k, 10);
	PO_LEKCIJI[n] = QUIZ[k].pitanja.map((p) => Object.assign({}, p, { lekcija: n }));
});
/* pitanja završnog kviza već nose broj lekcije */
ZAVRSNI_PITANJA.forEach((p) => {
	if (PO_LEKCIJI[p.lekcija]) PO_LEKCIJI[p.lekcija].push(p);
});

export const pitanjaLekcije = (n) => PO_LEKCIJI[n] || [];

/* Bazen za niz brojeva lekcija, poredan po lekcijama */
export const bazenZaLekcije = (lekcije) =>
	(lekcije || []).reduce((acc, n) => acc.concat(pitanjaLekcije(n)), []);

const BAZEN_GRUPE = {};
GRUPE.forEach((g) => {
	BAZEN_GRUPE[g.broj] = bazenZaLekcije(g.lekcije);
});

export const bazenGrupe = (broj) => BAZEN_GRUPE[broj] || [];
