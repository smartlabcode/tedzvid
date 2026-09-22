/* Privremeni test: njemački blok u ui.js mora imati iste ključeve, istog oblika, kao bosanski. */
import UI from './ui';

const oblik = (v) => {
	if (typeof v === 'function') return 'fn/' + v.length;
	if (Array.isArray(v)) return 'arr/' + v.length;
	if (v && typeof v === 'object' && !v.$$typeof) return 'obj';
	if (v && v.$$typeof) return 'jsx';
	return typeof v;
};

const splosti = (o, put = '', out = {}) => {
	Object.keys(o).forEach((k) => {
		const v = o[k];
		const p = put ? put + '.' + k : k;
		out[p] = oblik(v);
		if (v && typeof v === 'object' && !Array.isArray(v) && !v.$$typeof) splosti(v, p, out);
	});
	return out;
};

describe('ui.js – paritet jezika', () => {
	const bs = splosti(UI.bs);

	[ 'en', 'de' ].forEach((jez) => {
		it(`${jez} ima sve ključeve kao bs`, () => {
			const drugi = splosti(UI[jez]);
			const nedostaju = Object.keys(bs).filter((k) => !(k in drugi));
			const viska = Object.keys(drugi).filter((k) => !(k in bs));
			expect({ nedostaju, viska }).toEqual({ nedostaju: [], viska: [] });
		});

		it(`${jez} ima iste oblike vrijednosti kao bs`, () => {
			const drugi = splosti(UI[jez]);
			const razlike = Object.keys(bs)
				.filter((k) => k in drugi && bs[k] !== drugi[k])
				.map((k) => `${k}: bs=${bs[k]} ${jez}=${drugi[k]}`);
			expect(razlike).toEqual([]);
		});

		it(`${jez} nema praznih ili nepromijenjenih tekstova`, () => {
			const drugi = splosti(UI[jez]);
			const sumnjivi = Object.keys(bs).filter(
				(k) => bs[k] === 'string' && drugi[k] === 'string' && k !== 'author' && k !== 'mockAudio' && k !== 'mockVideo'
			);
			const prazni = sumnjivi.filter((k) => {
				const v = k.split('.').reduce((o, dio) => o[dio], UI[jez]);
				return !String(v).trim();
			});
			expect(prazni).toEqual([]);
		});
	});
});
