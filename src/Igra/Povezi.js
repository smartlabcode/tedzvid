import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaRedo, FaTrophy, FaStopwatch, FaArrowRight, FaVolumeUp, FaBookOpen, FaTimes } from 'react-icons/fa';
import PRIMJERI from '../Data/Igra/primjeri.json';
import KATALOG from '../Data/SurePravila.json';
import lessons from '../Data/lessons.json';
import Primjer from './Primjer';
import * as audioBus from '../Player/audioBus';
import { putanjaLekcije } from '../auth/progress';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';
import { rekord, upisiRekord, viseBodova, promijesaj, nasumicno, vrijemeTekst, zvjezdice } from './rekordi';
import { pisak } from './zvuk';

/*
 * „Poveži pravila” – lijevo su nazivi pravila, desno primjeri iz lekcija.
 * Klik na jednu pa na drugu stranu povlači nit između njih; tačan spoj ostaje
 * u boji pravila (iste boje kao u bonus lekcijama), a netačan trepne i pukne.
 */

const LEKCIJE = lessons['lekcije'].reduce((acc, curr) => acc.concat(curr), []);
const PAROVA = 5;
const KOLA = 3;
const ZA_PAR = 20;
const KAZNA = 5;
const BEZ_GRESKE = 25; /* bonus za kolo bez ijedne greške */

/* boja pravila po lekciji – ista paleta kao u legendi bonus lekcija */
const BOJA = {};
KATALOG.forEach((p) => {
	if (p.lekcija) BOJA[p.lekcija] = p.boja;
});

/* na kartici je mjesta samo za kratke primjere (najviše dvije riječi) */
const KRATKI = PRIMJERI.filter((p) => p.word.trim().split(/\s+/).length <= 2);
const PO_LEKCIJI = {};
KRATKI.forEach((p) => {
	(PO_LEKCIJI[p.lekcija] = PO_LEKCIJI[p.lekcija] || []).push(p);
});
const SVE_LEKCIJE = Object.keys(PO_LEKCIJI).map(Number);

/* jedno kolo: pet pravila iz različitih lekcija, obje kolone izmiješane zasebno */
function podijeli() {
	const odabrane = promijesaj(SVE_LEKCIJE).slice(0, PAROVA);
	const parovi = odabrane.map((n, i) => ({ par: i, lekcija: n, primjer: nasumicno(PO_LEKCIJI[n]) }));
	return { lijevo: promijesaj(parovi), desno: promijesaj(parovi) };
}

export default function Povezi() {
	const { lang } = useLang();
	const ui = useUI();
	const pick = (f) => (f && (f[lang] !== undefined ? f[lang] : f[DEFAULT_LANG])) || '';
	const naziv = (n) => pick(LEKCIJE[n - 1].title).trim();

	const [ faza, setFaza ] = useState('uvod'); /* uvod | igra | kolo | kraj */
	const [ kolo, setKolo ] = useState(1);
	const [ ploca, setPloca ] = useState({ lijevo: [], desno: [] });
	const [ spojeni, setSpojeni ] = useState([]); /* [{ par, l, d }] */
	const [ izborL, setIzborL ] = useState(-1);
	const [ izborD, setIzborD ] = useState(-1);
	const [ greska, setGreska ] = useState(null);
	const [ greske, setGreske ] = useState(0);
	const [ greskeKola, setGreskeKola ] = useState(0);
	const [ uKolu, setUKolu ] = useState(0);
	const [ bodovi, setBodovi ] = useState(0);
	const [ poruka, setPoruka ] = useState(null);
	const [ proteklo, setProteklo ] = useState(0);
	const [ najbolji, setNajbolji ] = useState(() => rekord('povezi'));

	const okvir = useRef(null);
	const lijeviRef = useRef({});
	const desniRef = useRef({});
	const pocetak = useRef(0);
	const cekanje = useRef(null);
	const [ niti, setNiti ] = useState([]);

	/* niti se crtaju po stvarnim položajima kartica, pa se računaju poslije iscrtavanja */
	const izracunaj = useCallback(
		() => {
			const o = okvir.current;
			if (!o) return;
			const po = o.getBoundingClientRect();
			const nova = spojeni
				.map((s) => {
					const l = lijeviRef.current[s.l];
					const d = desniRef.current[s.d];
					if (!l || !d) return null;
					const lr = l.getBoundingClientRect();
					const dr = d.getBoundingClientRect();
					return {
						par: s.par,
						boja: BOJA[s.lekcija] || 'var(--gold)',
						x1: lr.right - po.left,
						y1: lr.top + lr.height / 2 - po.top,
						x2: dr.left - po.left,
						y2: dr.top + dr.height / 2 - po.top
					};
				})
				.filter(Boolean);
			setNiti(nova);
		},
		[ spojeni ]
	);

	useLayoutEffect(() => izracunaj(), [ izracunaj, ploca ]);

	/* arapsko pismo se učita naknadno i pomjeri kartice, pa se niti prevuku jos jednom */
	useEffect(
		() => {
			const t = setTimeout(izracunaj, 400);
			return () => clearTimeout(t);
		},
		[ izracunaj, ploca ]
	);

	useEffect(
		() => {
			window.addEventListener('resize', izracunaj);
			return () => window.removeEventListener('resize', izracunaj);
		},
		[ izracunaj ]
	);

	useEffect(
		() => {
			if (faza !== 'igra') return undefined;
			const t = setInterval(() => setProteklo(Date.now() - pocetak.current), 200);
			return () => clearInterval(t);
		},
		[ faza ]
	);

	useEffect(() => () => clearTimeout(cekanje.current), []);
	useEffect(() => () => audioBus.stop(), []);

	const novoKolo = (n) => {
		setKolo(n);
		setPloca(podijeli());
		setSpojeni([]);
		setNiti([]);
		setIzborL(-1);
		setIzborD(-1);
		setGreska(null);
		setGreskeKola(0);
		setUKolu(0);
		setPoruka(null);
		setFaza('igra');
	};

	const pokreni = () => {
		setBodovi(0);
		setGreske(0);
		setProteklo(0);
		pocetak.current = Date.now();
		novoKolo(1);
	};

	/* spoj se provjerava čim su izabrane obje strane */
	const provjeri = (l, d) => {
		const a = ploca.lijevo[l];
		const b = ploca.desno[d];
		setIzborL(-1);
		setIzborD(-1);

		if (a.par === b.par) {
			const gotovo = spojeni.concat({ par: a.par, l, d, lekcija: a.lekcija });
			pisak('par');
			setSpojeni(gotovo);
			setPoruka({ lekcija: a.lekcija, tekst: pick(b.primjer.napomena) });
			setUKolu(uKolu + 1);
			setBodovi(bodovi + ZA_PAR);

			if (gotovo.length === PAROVA) {
				const ukupno = bodovi + ZA_PAR + (greskeKola === 0 ? BEZ_GRESKE : 0);
				setBodovi(ukupno);
				cekanje.current = setTimeout(() => {
					if (kolo >= KOLA) {
						pisak('pobjeda');
						setFaza('kraj');
						if (ukupno > 0) {
							const r = upisiRekord(
								'povezi',
								{ bodovi: ukupno, greske, vrijeme: Date.now() - pocetak.current, datum: Date.now() },
								viseBodova
							);
							setNajbolji(r.rekord);
						}
					} else {
						pisak('nivo');
						setFaza('kolo');
					}
				}, 900);
			}
			return;
		}

		pisak('nizak');
		setGreska({ l, d });
		setGreske(greske + 1);
		setGreskeKola(greskeKola + 1);
		setBodovi(Math.max(0, bodovi - KAZNA));
		setPoruka(null);
		cekanje.current = setTimeout(() => setGreska(null), 700);
	};

	const kliknuoLijevo = (i) => {
		if (faza !== 'igra' || spojeni.some((s) => s.l === i)) return;
		if (izborL === i) {
			setIzborL(-1);
			return;
		}
		setIzborL(i);
		if (izborD >= 0) provjeri(i, izborD);
	};

	const kliknuoDesno = (j) => {
		if (faza !== 'igra' || spojeni.some((s) => s.d === j)) return;
		if (izborD === j) {
			setIzborD(-1);
			return;
		}
		setIzborD(j);
		if (izborL >= 0) provjeri(izborL, j);
	};

	const pusti = (primjer, lekcija) => {
		if (primjer.url) audioBus.play('igra-povezi', primjer.url, naziv(lekcija));
	};

	if (faza === 'uvod' || faza === 'kraj' || faza === 'kolo') {
		const zvijezde = zvjezdice(1 - Math.min(1, greske / (PAROVA * KOLA)));
		return (
			<div className="igra igra--povezi">
				<div className="igra__sloj igra__sloj--stranica">
					{faza === 'kraj' && (
						<React.Fragment>
							<h3>{ui.igraPoveziGotovo}</h3>
							<p className="igra__zvjezde" aria-hidden="true">
								{[ 0, 1, 2 ].map((i) => <span key={i} className={i < zvijezde ? 'je-puna' : ''}>★</span>)}
							</p>
							<p className="igra__krajBodovi">
								<b>{bodovi}</b> {ui.igraBodovi}
							</p>
							<p>{ui.igraPoveziKraj(PAROVA * KOLA, greske, vrijemeTekst(proteklo))}</p>
						</React.Fragment>
					)}
					{faza === 'kolo' && (
						<React.Fragment>
							<h3>{ui.igraKolo(kolo)}</h3>
							<p>{ui.igraPoveziKolo(bodovi)}</p>
						</React.Fragment>
					)}
					{faza === 'uvod' && (
						<React.Fragment>
							<h3>{ui.igraPoveziNaslov}</h3>
							<p>{ui.igraPoveziUvod(PAROVA, KOLA)}</p>
						</React.Fragment>
					)}
					{faza !== 'kolo' &&
					najbolji && (
						<p className="igra__rekord">
							<FaTrophy /> {ui.igraRekordBodovi(najbolji.bodovi)}
						</p>
					)}
					<button
						type="button"
						className="btn-t btn-t--gold"
						onClick={() => (faza === 'kolo' ? novoKolo(kolo + 1) : pokreni())}
					>
						{faza === 'kolo' ? (
							<React.Fragment>
								{ui.igraNastavi} <FaArrowRight />
							</React.Fragment>
						) : (
							<React.Fragment>
								{faza === 'kraj' ? <FaRedo /> : <FaPlay />} {faza === 'kraj' ? ui.igraPonovo : ui.igraKreni}
							</React.Fragment>
						)}
					</button>
				</div>
			</div>
		);
	}

	const stanje = (i, strana) => {
		const spojen = spojeni.find((s) => (strana === 'l' ? s.l === i : s.d === i));
		if (spojen) return { cls: ' je-spojena', boja: BOJA[spojen.lekcija] };
		if (greska && (strana === 'l' ? greska.l === i : greska.d === i)) return { cls: ' je-netacna', boja: null };
		const izabran = strana === 'l' ? izborL === i : izborD === i;
		return { cls: izabran ? ' je-izabrana' : '', boja: null };
	};

	return (
		<div className="igra igra--povezi">
			<div className="igra__hud">
				<span className="igra__bodovi">
					<b>{bodovi}</b> {ui.igraBodovi}
				</span>
				<span className="igra__niz">{ui.igraKolo(kolo)}</span>
				<span className="igra__bodovi">
					<FaTimes /> <b>{greske}</b>
				</span>
				<span className="igra__vrijeme">
					<FaStopwatch /> {vrijemeTekst(proteklo)}
				</span>
			</div>

			<p className="igra__pitanje">{ui.igraPoveziPitanje}</p>

			<div className="igra-povezi__ploca" ref={okvir}>
				<svg className="igra-povezi__niti" aria-hidden="true">
					{niti.map((n) => (
						<line key={n.par} x1={n.x1} y1={n.y1} x2={n.x2} y2={n.y2} stroke={n.boja} strokeWidth="3" strokeLinecap="round" />
					))}
				</svg>

				<div className="igra-povezi__kolona igra-povezi__kolona--lijevo">
					{ploca.lijevo.map((k, i) => {
						const s = stanje(i, 'l');
						return (
							<button
								key={k.par}
								type="button"
								ref={(el) => (lijeviRef.current[i] = el)}
								className={'igra-povezi__kartica igra-povezi__kartica--pravilo' + s.cls}
								style={s.boja ? { '--boja': s.boja } : undefined}
								onClick={() => kliknuoLijevo(i)}
							>
								{naziv(k.lekcija)}
							</button>
						);
					})}
				</div>

				<div className="igra-povezi__kolona igra-povezi__kolona--desno">
					{ploca.desno.map((k, j) => {
						const s = stanje(j, 'd');
						return (
							<button
								key={k.par}
								type="button"
								ref={(el) => (desniRef.current[j] = el)}
								className={'igra-povezi__kartica igra-povezi__kartica--rijec' + s.cls}
								style={s.boja ? { '--boja': s.boja } : undefined}
								onClick={() => kliknuoDesno(j)}
							>
								<Primjer word={k.primjer.word} highlight={k.primjer.highlight} />
								{s.cls === ' je-spojena' &&
								k.primjer.url && (
									<span
										className="igra-povezi__zvuk"
										role="button"
										tabIndex={-1}
										title={ui.igraPoslusaj}
										onClick={(e) => {
											e.stopPropagation();
											pusti(k.primjer, k.lekcija);
										}}
									>
										<FaVolumeUp />
									</span>
								)}
							</button>
						);
					})}
				</div>
			</div>

			{poruka && (
				<p className="igra__poruka" role="status">
					<b>{naziv(poruka.lekcija)}</b> — {poruka.tekst}{' '}
					<Link to={putanjaLekcije(poruka.lekcija)} className="igra__lekcija-link">
						<FaBookOpen /> {ui.igraOtvoriLekciju(poruka.lekcija)}
					</Link>
				</p>
			)}
		</div>
	);
}
