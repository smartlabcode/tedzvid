/* Završni kviz: 100 pitanja iz svih lekcija (zavrsni/L{n}.json – 5 po lekciji za 1–12, 4 za 13–22).
   Svako pitanje nosi broj lekcije (za oznaku uz pitanje i preporuku za ponavljanje). */
import L1 from './zavrsni/L1.json';
import L2 from './zavrsni/L2.json';
import L3 from './zavrsni/L3.json';
import L4 from './zavrsni/L4.json';
import L5 from './zavrsni/L5.json';
import L6 from './zavrsni/L6.json';
import L7 from './zavrsni/L7.json';
import L8 from './zavrsni/L8.json';
import L9 from './zavrsni/L9.json';
import L10 from './zavrsni/L10.json';
import L11 from './zavrsni/L11.json';
import L12 from './zavrsni/L12.json';
import L13 from './zavrsni/L13.json';
import L14 from './zavrsni/L14.json';
import L15 from './zavrsni/L15.json';
import L16 from './zavrsni/L16.json';
import L17 from './zavrsni/L17.json';
import L18 from './zavrsni/L18.json';
import L19 from './zavrsni/L19.json';
import L20 from './zavrsni/L20.json';
import L21 from './zavrsni/L21.json';
import L22 from './zavrsni/L22.json';

const DIJELOVI = [
	L1,
	L2,
	L3,
	L4,
	L5,
	L6,
	L7,
	L8,
	L9,
	L10,
	L11,
	L12,
	L13,
	L14,
	L15,
	L16,
	L17,
	L18,
	L19,
	L20,
	L21,
	L22
];

const ZAVRSNI_PITANJA = DIJELOVI.reduce(
	(acc, d) => acc.concat(d.pitanja.map((p) => Object.assign({}, p, { lekcija: d.lekcija }))),
	[]
);

export default ZAVRSNI_PITANJA;
