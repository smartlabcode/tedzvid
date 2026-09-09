import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeart, FaRegHeart, FaPlay, FaRedo, FaTrophy, FaVolumeUp, FaBookOpen, FaSearch } from 'react-icons/fa';
import PODACI from '../Data/Igra/ajeti.json';
import KATALOG from '../Data/SurePravila.json';
import { uRijeci } from '../Lessons/suraRijeci';
import * as audioBus from '../Player/audioBus';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';
import { rekord, upisiRekord, viseBodova, promijesaj, nasumicno, zvjezdice } from './rekordi';
import { pisak } from './zvuk';

/*
 * „Nađi pravilo” – u pravom kur'anskom tekstu treba pokazati riječ u kojoj je
 * traženo pravilo. Ajeti dolaze iz bonus lekcija (scripts/igra/ajeti.js ih bira
 * i sažima), pa je svako pravilo već označeno i objašnjeno.
 */

const PRAVILO = {};
KATALOG.forEach((p) => {
	PRAVILO[p.id] = p;
});

const PITANJA = 8; /* koliko ajeta ide u jednu partiju */
const SRCA = 3;
const BODOVI = 25; /* za pogodak iz prve */
const KAZNA = 8; /* koliko oduzme svaki promašaj unutar istog ajeta */

/* jedno pitanje: ajet + jedno pravilo koje se u njemu javlja tačno jednom */
function napraviPitanje(ajet) {
	const id = nasumicno(ajet.trazena);
	return { ajet, id, cilj: ajet.p.findIndex((p) => p.id === id) };
}

export default function NadjiPravilo() {
	const { lang } = useLang();
	const ui = useUI();
	const pick = (f) => (f && (f[lang] !== undefined ? f[lang] : f[DEFAULT_LANG])) || '';
	const objasnjenja = PODACI.objasnjenja[lang] || PODACI.objasnjenja[DEFAULT_LANG];
	const naziv = (id) => pick(PRAVILO[id]);

	const [ faza, setFaza ] = useState('uvod'); /* uvod | pitanje | odgovor | kraj */
	const [ pitanje, setPitanje ] = useState(null);
	const [ pogresne, setPogresne ] = useState([]); /* riječi promašene u ovom ajetu */
	const [ poruka, setPoruka ] = useState(null);
	const [ bodovi, setBodovi ] = useState(0);
	const [ niz, setNiz ] = useState(0);
	const [ srca, setSrca ] = useState(SRCA);
	const [ rijeseno, setRijeseno ] = useState(0);
	const [ izPrve, setIzPrve ] = useState(0);
	const [ najbolji, setNajbolji ] = useState(() => rekord('nadji'));
	const bazen = useRef([]);

	const sljedece = () => {
		if (!bazen.current.length) bazen.current = promijesaj(PODACI.ajeti);
		setPitanje(napraviPitanje(bazen.current.pop()));
		setPogresne([]);
		setPoruka(null);
		setFaza('pitanje');
	};

	const pokreni = () => {
		bazen.current = promijesaj(PODACI.ajeti);
		setBodovi(0);
		setNiz(0);
		setSrca(SRCA);
		setRijeseno(0);
		setIzPrve(0);
		sljedece();
	};

	useEffect(() => () => audioBus.stop(), []);

	const cjeline = useMemo(() => (pitanje ? uRijeci(pitanje.ajet.d) : []), [ pitanje ]);

	/* rezultat se upisuje tek kad partija zaista stane (nula se ne pamti) */
	const zavrsi = () => {
		pisak('kraj');
		setFaza('kraj');
		if (bodovi > 0) {
			const r = upisiRekord('nadji', { bodovi, tacnih: izPrve, datum: Date.now() }, viseBodova);
			setNajbolji(r.rekord);
		}
	};

	const klik = (c) => {
		if (faza !== 'pitanje') return;
		const tacno = c.dijelovi.some((d) => d.i === pitanje.cilj);

		if (tacno) {
			const bezGreske = pogresne.length === 0;
			const noviNiz = bezGreske ? niz + 1 : 0;
			const mn = Math.min(5, 1 + Math.floor(noviNiz / 3));
			const dobitak = Math.max(5, BODOVI - pogresne.length * KAZNA) * (bezGreske ? mn : 1);
			const noviBodovi = bodovi + dobitak;
			pisak('dobro');
			setNiz(noviNiz);
			setBodovi(noviBodovi);
			setRijeseno(rijeseno + 1);
			if (bezGreske) setIzPrve(izPrve + 1);
			setPoruka(null);
			setFaza('odgovor');
			return;
		}

		/* promašaj: riječ se oboji crveno, a igrač sazna koje pravilo tu zaista jeste */
		const ima = c.dijelovi.filter((d) => d.i !== undefined).map((d) => pitanje.ajet.p[d.i].id);
		const razlicita = ima.filter((id, i) => ima.indexOf(id) === i);
		pisak('nizak');
		setPogresne(pogresne.concat(c.w));
		setPoruka(razlicita.length ? ui.igraNadjiUToj(razlicita.map(naziv).join(', ')) : ui.igraNadjiNemaPravila);
		const ostalo = srca - 1;
		setSrca(ostalo);
		if (ostalo <= 0) setFaza('odgovor'); /* zadnje srce: tačno mjesto se svejedno pokaže */
	};

	const pusti = () => {
		if (!pitanje) return;
		const a = pitanje.ajet;
		audioBus.play('igra-nadji-' + a.s + '-' + a.n, PODACI.audio.baza + a.audio, pick(a.sura) + ' ' + a.n);
	};

	const dalje = () => {
		if (rijeseno >= PITANJA || srca <= 0) zavrsi();
		else sljedece();
	};

	if (faza === 'uvod' || faza === 'kraj') {
		const zvijezde = rijeseno ? zvjezdice(izPrve / PITANJA) : 0;
		return (
			<div className="igra igra--nadji">
				<div className="igra__sloj igra__sloj--stranica">
					{faza === 'kraj' ? (
						<React.Fragment>
							<h3>{srca > 0 ? ui.igraNadjiGotovo : ui.igraKraj}</h3>
							<p className="igra__zvjezde" aria-hidden="true">
								{[ 0, 1, 2 ].map((i) => <span key={i} className={i < zvijezde ? 'je-puna' : ''}>★</span>)}
							</p>
							<p className="igra__krajBodovi">
								<b>{bodovi}</b> {ui.igraBodovi}
							</p>
							<p>{ui.igraNadjiKraj(izPrve, PITANJA)}</p>
						</React.Fragment>
					) : (
						<React.Fragment>
							<h3>{ui.igraNadjiNaslov}</h3>
							<p>{ui.igraNadjiUvod(PITANJA)}</p>
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

	const a = pitanje.ajet;
	const trazeno = PRAVILO[pitanje.id];
	const gotovo = faza === 'odgovor';
	const pojava = a.p[pitanje.cilj];

	return (
		<div className="igra igra--nadji">
			<div className="igra__hud">
				<span className="igra__srca" aria-label={ui.igraSrca(srca)}>
					{[ 0, 1, 2 ].map((i) => (i < srca ? <FaHeart key={i} /> : <FaRegHeart key={i} className="je-prazno" />))}
				</span>
				<span className="igra__bodovi">
					<b>{bodovi}</b> {ui.igraBodovi}
				</span>
				<span className="igra__vrijeme">
					{rijeseno}/{PITANJA}
				</span>
			</div>

			<div className="igra__karta">
				<p className="igra__pitanje">
					<FaSearch /> {ui.igraNadjiPitanje}
				</p>
				<p className="igra-nadji__trazeno" style={{ '--boja': trazeno.boja }}>
					<span className="igra-nadji__tacka" />
					<strong>{naziv(pitanje.id)}</strong>
					{trazeno.lekcija ? (
						<Link to={'/lekcija' + trazeno.lekcija + '#lekcija'} className="igra-nadji__lekcija">
							{ui.igraLekcija(trazeno.lekcija)}
						</Link>
					) : null}
				</p>

				<div className="igra-nadji__ajet">
					<p className="igra-nadji__tekst" lang="ar" dir="rtl">
						{cjeline.map((c, k) => {
							if (c.w < 0) {
								return <span key={k}>{c.dijelovi.map((d) => d.t).join('')}</span>;
							}
							const jeCilj = c.dijelovi.some((d) => d.i === pitanje.cilj);
							let cls = 'igra-nadji__rijec';
							if (gotovo && jeCilj) cls += ' je-tacna';
							if (pogresne.indexOf(c.w) >= 0) cls += ' je-netacna';
							return (
								<span
									key={k}
									className={cls}
									style={gotovo && jeCilj ? { '--boja': trazeno.boja } : undefined}
									role="button"
									tabIndex={gotovo ? -1 : 0}
									onClick={() => klik(c)}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											klik(c);
										}
									}}
								>
									{c.dijelovi.map((d, j) => (
										<span key={j} className={gotovo && d.i === pitanje.cilj ? 'igra-nadji__ozn' : undefined}>
											{d.t}
										</span>
									))}
								</span>
							);
						})}
					</p>
					<p className="igra-nadji__izvor">
						{pick(a.sura)}, {ui.igraNadjiAjet(a.n)}
						<button type="button" className="igra__zvuk" onClick={pusti}>
							<FaVolumeUp /> {ui.igraPoslusaj}
						</button>
					</p>
				</div>

				{poruka &&
				!gotovo && (
					<p className="igra__poruka je-netacna" role="status">
						{poruka}
					</p>
				)}

				{gotovo && (
					<div className={'igra__odgovor' + (srca > 0 ? ' je-tacna' : ' je-netacna')}>
						<strong>{srca > 0 ? ui.igraBravo : ui.igraNetacno}</strong>{' '}
						<span className="igra-nadji__rijec-odg" lang="ar" dir="rtl">
							{pojava.r}
						</span>{' '}
						<span>{objasnjenja[pojava.o]}</span>
						<div className="igra__odgovor-akcije">
							{trazeno.lekcija ? (
								<Link to={'/lekcija' + trazeno.lekcija + '#lekcija'} className="igra__lekcija-link">
									<FaBookOpen /> {ui.igraOtvoriLekciju(trazeno.lekcija)}
								</Link>
							) : (
								<span />
							)}
							<button type="button" className="btn-t btn-t--gold btn-t--sm" onClick={dalje}>
								{rijeseno >= PITANJA || srca <= 0 ? ui.igraRezultat : ui.igraDalje} <FaArrowRight />
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
