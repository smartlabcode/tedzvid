import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	FaArrowRight,
	FaHeart,
	FaRegHeart,
	FaPlay,
	FaRedo,
	FaTrophy,
	FaVolumeUp,
	FaBookOpen,
	FaEye,
	FaHeadphones
} from 'react-icons/fa';
import PRIMJERI from '../Data/Igra/primjeri.json';
import lessons from '../Data/lessons.json';
import Primjer from './Primjer';
import * as audioBus from '../Player/audioBus';
import { putanjaLekcije } from '../auth/progress';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';
import { napraviPitanje } from './pitanja';
import { rekord, upisiRekord, viseBodova, promijesaj, zvjezdice } from './rekordi';
import { pisak } from './zvuk';

/*
 * „Prepoznaj po zvuku” – jedina igra u kojoj se pravilo traži uhom: zapis se
 * pusti, a riječ ostaje skrivena dok se ne odgovori. Ko zaviri u riječ, dobija
 * pola bodova; ako zapis ne može da se pusti (bez mreže ili bez kodeka), riječ
 * se otkriva sama da igra ostane igriva.
 */

const LEKCIJE = lessons['lekcije'].reduce((acc, curr) => acc.concat(curr), []);
const SA_ZAPISOM = PRIMJERI.filter((p) => p.url);
const PITANJA = 10;
const SRCA = 3;
const BODOVI = 20;
const VLASNIK = 'igra-uho';

export default function PoZvuku() {
	const { lang } = useLang();
	const ui = useUI();
	const pick = (f) => (f && (f[lang] !== undefined ? f[lang] : f[DEFAULT_LANG])) || '';
	const naziv = (n) => pick(LEKCIJE[n - 1].title).trim();

	const [ faza, setFaza ] = useState('uvod'); /* uvod | pitanje | odgovor | kraj */
	const [ pitanje, setPitanje ] = useState(null);
	const [ izbor, setIzbor ] = useState(null);
	const [ zavirio, setZavirio ] = useState(false);
	const [ bodovi, setBodovi ] = useState(0);
	const [ niz, setNiz ] = useState(0);
	const [ srca, setSrca ] = useState(SRCA);
	const [ rijeseno, setRijeseno ] = useState(0);
	const [ tacnih, setTacnih ] = useState(0);
	const [ zvuk, setZvuk ] = useState(audioBus.getState());
	const [ najbolji, setNajbolji ] = useState(() => rekord('uho'));
	const bazen = useRef([]);

	useEffect(() => audioBus.subscribe(setZvuk), []);
	useEffect(() => () => audioBus.stop(), []);

	const pusti = (p) => {
		const primjer = p || (pitanje && pitanje.primjer);
		if (primjer) audioBus.play(VLASNIK, primjer.url, naziv(primjer.lekcija));
	};

	const sljedece = () => {
		if (!bazen.current.length) bazen.current = promijesaj(SA_ZAPISOM);
		const novo = napraviPitanje(bazen.current.pop());
		setPitanje(novo);
		setIzbor(null);
		setZavirio(false);
		setFaza('pitanje');
		pusti(novo.primjer); /* zapis kreće sam – klik na „Igraj” je već odobrio zvuk */
	};

	const pokreni = () => {
		bazen.current = promijesaj(SA_ZAPISOM);
		setBodovi(0);
		setNiz(0);
		setSrca(SRCA);
		setRijeseno(0);
		setTacnih(0);
		sljedece();
	};

	const zavrsi = () => {
		pisak('kraj');
		audioBus.stop();
		setFaza('kraj');
		if (bodovi > 0) {
			const r = upisiRekord('uho', { bodovi, tacnih, datum: Date.now() }, viseBodova);
			setNajbolji(r.rekord);
		}
	};

	const odgovori = (n) => {
		if (faza !== 'pitanje') return;
		const tacno = n === pitanje.tacna;
		const noviNiz = tacno ? niz + 1 : 0;
		const mn = Math.min(5, 1 + Math.floor(noviNiz / 3));
		const dobitak = tacno ? Math.round(BODOVI * mn / (zavirio ? 2 : 1)) : 0;

		setIzbor(n);
		setNiz(noviNiz);
		setBodovi(bodovi + dobitak);
		setRijeseno(rijeseno + 1);
		if (tacno) setTacnih(tacnih + 1);
		else setSrca(srca - 1);
		setFaza('odgovor');
		pisak(tacno ? 'dobro' : 'nizak');
	};

	const dalje = () => {
		if (srca <= 0 || rijeseno >= PITANJA) zavrsi();
		else sljedece();
	};

	if (faza === 'uvod' || faza === 'kraj') {
		const zvijezde = rijeseno ? zvjezdice(tacnih / PITANJA) : 0;
		return (
			<div className="igra igra--uho">
				<div className="igra__sloj igra__sloj--stranica">
					{faza === 'kraj' ? (
						<React.Fragment>
							<h3>{srca > 0 ? ui.igraUhoGotovo : ui.igraKraj}</h3>
							<p className="igra__zvjezde" aria-hidden="true">
								{[ 0, 1, 2 ].map((i) => <span key={i} className={i < zvijezde ? 'je-puna' : ''}>★</span>)}
							</p>
							<p className="igra__krajBodovi">
								<b>{bodovi}</b> {ui.igraBodovi}
							</p>
							<p>{ui.igraUhoKraj(tacnih, rijeseno)}</p>
						</React.Fragment>
					) : (
						<React.Fragment>
							<h3>{ui.igraUhoNaslov}</h3>
							<p>{ui.igraUhoUvod(PITANJA)}</p>
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
	const gotovo = faza === 'odgovor';
	const tacno = izbor === pitanje.tacna;
	const nasZapis = zvuk.ownerId === VLASNIK;
	const svira = nasZapis && zvuk.playing;
	const pukao = nasZapis && zvuk.error; /* bez kodeka ili bez mreže – riječ se otkriva sama */
	const vidiRijec = gotovo || zavirio || pukao;

	return (
		<div className="igra igra--uho">
			<div className="igra__hud">
				<span className="igra__srca" aria-label={ui.igraSrca(srca)}>
					{[ 0, 1, 2 ].map((i) => (i < srca ? <FaHeart key={i} /> : <FaRegHeart key={i} className="je-prazno" />))}
				</span>
				<span className="igra__bodovi">
					<b>{bodovi}</b> {ui.igraBodovi}
				</span>
				<span className={'igra__niz' + (niz >= 3 ? ' je-vruc' : '')}>×{Math.min(5, 1 + Math.floor(niz / 3))}</span>
				<span className="igra__vrijeme">
					{rijeseno}/{PITANJA}
				</span>
			</div>

			<div className="igra__karta">
				<p className="igra__pitanje">
					<FaHeadphones /> {ui.igraUhoPitanje}
				</p>

				<div className={'igra-uho__zapis' + (svira ? ' je-svira' : '')}>
					<button type="button" className="igra-uho__dugme" onClick={() => pusti()} aria-label={ui.igraUhoPonovo}>
						<FaVolumeUp />
					</button>
					<span className="igra-uho__val" aria-hidden="true">
						{[ 0, 1, 2, 3, 4 ].map((i) => <i key={i} style={{ animationDelay: i * 0.12 + 's' }} />)}
					</span>
					<span className="igra-uho__natpis">{pukao ? ui.igraUhoNemaZapisa : ui.igraUhoPonovo}</span>
				</div>

				<div className={'igra-uho__rijec' + (vidiRijec ? ' je-otkrivena' : '')}>
					{vidiRijec ? (
						<Primjer word={p.word} highlight={p.highlight} />
					) : (
						<button type="button" className="igra-uho__zaviri" onClick={() => setZavirio(true)}>
							<FaEye /> {ui.igraUhoPokazi}
						</button>
					)}
				</div>
				{!gotovo && (
					<p className="igra-uho__stanje">
						{pukao ? ui.igraUhoNemaZapisa : zavirio ? ui.igraUhoZavirio : ui.igraUhoSkriveno}
					</p>
				)}

				<div className="igra__opcije">
					{pitanje.opcije.map((n) => {
						let cls = 'igra__opcija';
						if (gotovo && n === pitanje.tacna) cls += ' je-tacna';
						if (gotovo && n === izbor && n !== pitanje.tacna) cls += ' je-netacna';
						return (
							<button key={n} type="button" className={cls} disabled={gotovo} onClick={() => odgovori(n)}>
								<span className="igra__opcija-broj">{n}</span>
								{naziv(n)}
							</button>
						);
					})}
				</div>

				{gotovo && (
					<div className={'igra__odgovor' + (tacno ? ' je-tacna' : ' je-netacna')}>
						<strong>{tacno ? ui.igraBravo : ui.igraNetacno}</strong>{' '}
						{!tacno && <span>{ui.igraTacnoJe(naziv(pitanje.tacna))} </span>}
						<span>{pick(p.napomena)}</span>
						<div className="igra__odgovor-akcije">
							<Link to={putanjaLekcije(pitanje.tacna)} className="igra__lekcija-link">
								<FaBookOpen /> {ui.igraOtvoriLekciju(pitanje.tacna)}
							</Link>
							<button type="button" className="btn-t btn-t--gold btn-t--sm" onClick={dalje}>
								{srca <= 0 || rijeseno >= PITANJA ? ui.igraRezultat : ui.igraDalje} <FaArrowRight />
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
