import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeart, FaRegHeart, FaPlay, FaRedo, FaTrophy, FaVolumeUp, FaBookOpen } from 'react-icons/fa';
import PRIMJERI from '../Data/Igra/primjeri.json';
import lessons from '../Data/lessons.json';
import Primjer from './Primjer';
import * as audioBus from '../Player/audioBus';
import { putanjaLekcije } from '../auth/progress';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';
import { rekord, upisiRekord, viseBodova, promijesaj, zvjezdice } from './rekordi';
import { pisak } from './zvuk';

const LEKCIJE = lessons['lekcije'].reduce((acc, curr) => acc.concat(curr), []);
const SRCA = 3;
const SEKUNDI = 12;

/* srodne lekcije – iz njih dolaze "varljivi" ponuđeni odgovori */
const PORODICE = [ [ 4, 5, 6, 7, 15, 16 ], [ 8 ], [ 9, 10 ], [ 11, 12 ], [ 13 ], [ 17, 18, 19, 20, 21, 22 ] ];
const SVE_LEKCIJE = PRIMJERI.reduce((acc, p) => (acc.indexOf(p.lekcija) < 0 ? acc.concat(p.lekcija) : acc), []);

/* jedno pitanje: tačna lekcija + tri ponuđene, s prednošću srodnima */
function napraviPitanje(primjer) {
	const tacna = primjer.lekcija;
	const porodica = (PORODICE.find((p) => p.indexOf(tacna) >= 0) || []).filter(
		(n) => n !== tacna && SVE_LEKCIJE.indexOf(n) >= 0
	);
	const ostale = SVE_LEKCIJE.filter((n) => n !== tacna && porodica.indexOf(n) < 0);
	const ponude = promijesaj(porodica).slice(0, 2).concat(promijesaj(ostale)).slice(0, 3);
	return { primjer, opcije: promijesaj(ponude.concat(tacna)), tacna };
}

export default function Trka() {
	const { lang } = useLang();
	const ui = useUI();
	const pick = (f) => (f && (f[lang] !== undefined ? f[lang] : f[DEFAULT_LANG])) || '';
	const naziv = (n) => pick(LEKCIJE[n - 1].title).trim();

	const [ faza, setFaza ] = useState('uvod'); /* uvod | pitanje | odgovor | kraj */
	const [ pitanje, setPitanje ] = useState(null);
	const [ izbor, setIzbor ] = useState(null);
	const [ bodovi, setBodovi ] = useState(0);
	const [ niz, setNiz ] = useState(0);
	const [ najveciNiz, setNajveciNiz ] = useState(0);
	const [ srca, setSrca ] = useState(SRCA);
	const [ tacnih, setTacnih ] = useState(0);
	const [ ukupno, setUkupno ] = useState(0);
	const [ preostalo, setPreostalo ] = useState(SEKUNDI);
	const [ najbolji, setNajbolji ] = useState(() => rekord('trka'));
	const bazen = useRef([]);

	const sljedece = () => {
		if (!bazen.current.length) bazen.current = promijesaj(PRIMJERI);
		setPitanje(napraviPitanje(bazen.current.pop()));
		setIzbor(null);
		setPreostalo(SEKUNDI);
		setFaza('pitanje');
	};

	const pokreni = () => {
		bazen.current = promijesaj(PRIMJERI);
		setBodovi(0);
		setNiz(0);
		setNajveciNiz(0);
		setSrca(SRCA);
		setTacnih(0);
		setUkupno(0);
		sljedece();
	};

	/* odbrojavanje traje samo dok je pitanje na ekranu */
	useEffect(
		() => {
			if (faza !== 'pitanje') return undefined;
			const t = setInterval(() => setPreostalo((v) => Math.max(0, +(v - 0.1).toFixed(1))), 100);
			return () => clearInterval(t);
		},
		[ faza, pitanje ]
	);

	const odgovori = (n) => {
		if (faza !== 'pitanje') return;
		const tacno = n === pitanje.tacna;
		const noviNiz = tacno ? niz + 1 : 0;
		const mn = Math.min(5, 1 + Math.floor(noviNiz / 3));
		const noviBodovi = tacno ? bodovi + 10 * mn + Math.round(preostalo) : bodovi;
		const novoTacnih = tacno ? tacnih + 1 : tacnih;
		const ostalaSrca = tacno ? srca : srca - 1;

		setIzbor(n);
		setUkupno(ukupno + 1);
		setNiz(noviNiz);
		if (noviNiz > najveciNiz) setNajveciNiz(noviNiz);
		setBodovi(noviBodovi);
		setTacnih(novoTacnih);
		setSrca(ostalaSrca);
		setFaza('odgovor');
		pisak(tacno ? 'dobro' : 'nizak');

		/* posljednje srce: rezultat se odmah upisuje u rekorde (nula se ne pamti) */
		if (ostalaSrca <= 0 && noviBodovi > 0) {
			const r = upisiRekord('trka', { bodovi: noviBodovi, tacnih: novoTacnih, datum: Date.now() }, viseBodova);
			setNajbolji(r.rekord);
		}
	};

	/* isteklo vrijeme vrijedi kao netačan odgovor */
	useEffect(
		() => {
			if (faza === 'pitanje' && preostalo <= 0) odgovori(null);
		},
		[ preostalo, faza ] // eslint-disable-line react-hooks/exhaustive-deps
	);

	const dalje = () => {
		if (srca <= 0) {
			pisak('kraj');
			setFaza('kraj');
		} else sljedece();
	};

	const pusti = () => {
		if (pitanje && pitanje.primjer.url) audioBus.play('igra-trka', pitanje.primjer.url, naziv(pitanje.tacna));
	};

	useEffect(() => () => audioBus.stop(), []);

	if (faza === 'uvod' || faza === 'kraj') {
		const zvijezde = ukupno ? zvjezdice(tacnih / Math.max(ukupno, 6)) : 0;
		return (
			<div className="igra igra--trka">
				<div className="igra__sloj igra__sloj--stranica">
					{faza === 'kraj' ? (
						<React.Fragment>
							<h3>{ui.igraKraj}</h3>
							<p className="igra__zvjezde" aria-hidden="true">
								{[ 0, 1, 2 ].map((i) => <span key={i} className={i < zvijezde ? 'je-puna' : ''}>★</span>)}
							</p>
							<p className="igra__krajBodovi">
								<b>{bodovi}</b> {ui.igraBodovi}
							</p>
							<p>{ui.igraTrkaKraj(tacnih, ukupno, najveciNiz)}</p>
						</React.Fragment>
					) : (
						<React.Fragment>
							<h3>{ui.igraTrkaNaslov}</h3>
							<p>{ui.igraTrkaUvod(SEKUNDI)}</p>
						</React.Fragment>
					)}
					{najbolji && (
						<p className="igra__rekord">
							<FaTrophy /> {ui.igraRekordBodovi(najbolji.bodovi)}
						</p>
					)}
					<button type="button" className="btn-t btn-t--gold" onClick={pokreni}>
						{faza === 'kraj' ? <FaRedo /> : <FaPlay />} {faza === 'kraj' ? ui.igraPonovo : ui.igraKreni}
					</button>
				</div>
			</div>
		);
	}

	const p = pitanje.primjer;
	const tacno = izbor === pitanje.tacna;

	return (
		<div className="igra igra--trka">
			<div className="igra__hud">
				<span className="igra__srca" aria-label={ui.igraSrca(srca)}>
					{[ 0, 1, 2 ].map((i) => (i < srca ? <FaHeart key={i} /> : <FaRegHeart key={i} className="je-prazno" />))}
				</span>
				<span className="igra__bodovi">
					<b>{bodovi}</b> {ui.igraBodovi}
				</span>
				<span className={'igra__niz' + (niz >= 3 ? ' je-vruc' : '')}>×{Math.min(5, 1 + Math.floor(niz / 3))}</span>
			</div>

			<div className="igra__sat" role="progressbar" aria-valuemin={0} aria-valuemax={SEKUNDI} aria-valuenow={Math.ceil(preostalo)}>
				<span
					className={preostalo <= 3 ? 'je-hitno' : ''}
					style={{ width: preostalo / SEKUNDI * 100 + '%', transition: faza === 'pitanje' ? 'width .1s linear' : 'none' }}
				/>
			</div>

			<div className="igra__karta">
				<p className="igra__pitanje">{ui.igraTrkaPitanje}</p>
				<p className="igra__rijec">
					<Primjer word={p.word} highlight={p.highlight} />
				</p>
				<div className="igra__pomoc-red">
					{p.url && (
						<button type="button" className="igra__zvuk" onClick={pusti}>
							<FaVolumeUp /> {ui.igraPoslusaj}
						</button>
					)}
				</div>

				<div className="igra__opcije">
					{pitanje.opcije.map((n) => {
						let cls = 'igra__opcija';
						if (faza === 'odgovor' && n === pitanje.tacna) cls += ' je-tacna';
						if (faza === 'odgovor' && n === izbor && n !== pitanje.tacna) cls += ' je-netacna';
						return (
							<button key={n} type="button" className={cls} disabled={faza === 'odgovor'} onClick={() => odgovori(n)}>
								<span className="igra__opcija-broj">{n}</span>
								{naziv(n)}
							</button>
						);
					})}
				</div>

				{faza === 'odgovor' && (
					<div className={'igra__odgovor' + (tacno ? ' je-tacna' : ' je-netacna')}>
						<strong>{tacno ? ui.igraBravo : izbor === null ? ui.igraIsteklo : ui.igraNetacno}</strong>{' '}
						{!tacno && <span>{ui.igraTacnoJe(naziv(pitanje.tacna))} </span>}
						<span>{pick(p.napomena)}</span>
						<div className="igra__odgovor-akcije">
							<Link to={putanjaLekcije(pitanje.tacna)} className="igra__lekcija-link">
								<FaBookOpen /> {ui.igraOtvoriLekciju(pitanje.tacna)}
							</Link>
							<button type="button" className="btn-t btn-t--gold btn-t--sm" onClick={dalje}>
								{srca <= 0 ? ui.igraRezultat : ui.igraDalje} <FaArrowRight />
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
