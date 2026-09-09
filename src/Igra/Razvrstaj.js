import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaRedo, FaTrophy, FaHeart, FaRegHeart, FaArrowRight, FaLightbulb, FaBookOpen } from 'react-icons/fa';
import HARFOVI from '../Data/Igra/harfovi.json';
import KATALOG from '../Data/SurePravila.json';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';
import { rekord, upisiRekord, viseBodova, promijesaj, zvjezdice } from './rekordi';
import { pisak } from './zvuk';

/*
 * „Prisloni harf” – harfovi se razvrstavaju u kutije pravila kojima pripadaju.
 * Harf se može povući prstom ili mišem, ali i samo dodirnuti pa dodirnuti kutiju
 * (isti potez radi i na tastaturi), jer je vučenje na malim ekranima nesigurno.
 */

const GRUPE = {};
HARFOVI.grupe.forEach((g) => {
	GRUPE[g.id] = g;
});

/* boje su iste kao u legendi bonus lekcija; grupe harfova nose ista imena pravila */
const BOJA = {};
KATALOG.forEach((p) => {
	BOJA[p.id] = p.boja;
});
const BOJA_GRUPE = { izhar: BOJA['izhar-halkij'] };

/*
 * Kola: grupe koje se u jednom kolu razvrstavaju ne smiju dijeliti nijedan harf,
 * inače pitanje ne bi imalo jedan tačan odgovor (npr. ب je i u iklabu i u kalkali).
 */
const KOLA = [
	{ grupe: [ 'idgam-gunneh', 'idgam-bila-gunneh', 'iklab' ], poGrupi: 3 },
	{ grupe: [ 'idgam-gunneh', 'izhar', 'iklab' ], poGrupi: 3 },
	{ grupe: [ 'kalkala', 'izhar', 'idgam-gunneh' ], poGrupi: 3 },
	{ grupe: [ 'ihfa', 'izhar', 'idgam-gunneh' ], poGrupi: 4 },
	{ grupe: [ 'idgam-gunneh', 'idgam-bila-gunneh', 'iklab', 'izhar' ], poGrupi: 2 }
];

const SRCA = 3;
const ZA_HARF = 10;

/* harfovi jednog kola: iz svake kutije po nekoliko, bez onih koji su u dvije kutije */
function podijeli(kolo) {
	const kutije = kolo.grupe.map((id) => GRUPE[id]);
	const harfovi = [];
	kutije.forEach((g) => {
		const samoNjegovi = g.harfovi.filter((h) => kutije.every((d) => d.id === g.id || d.harfovi.indexOf(h) < 0));
		promijesaj(samoNjegovi).slice(0, kolo.poGrupi).forEach((h, i) => {
			harfovi.push({ id: g.id + '-' + i + '-' + h, harf: h, grupa: g.id });
		});
	});
	return { kutije, harfovi: promijesaj(harfovi) };
}

export default function Razvrstaj() {
	const { lang } = useLang();
	const ui = useUI();
	const pick = (f) => (f && (f[lang] !== undefined ? f[lang] : f[DEFAULT_LANG])) || '';

	const [ faza, setFaza ] = useState('uvod'); /* uvod | igra | kolo | kraj */
	const [ kolo, setKolo ] = useState(0);
	const [ ploca, setPloca ] = useState({ kutije: [], harfovi: [] });
	const [ postavljeni, setPostavljeni ] = useState({}); /* grupa -> [harf] */
	const [ izabran, setIzabran ] = useState(null);
	const [ trese, setTrese ] = useState(null);
	const [ bodovi, setBodovi ] = useState(0);
	const [ niz, setNiz ] = useState(0);
	const [ srca, setSrca ] = useState(SRCA);
	const [ pomoc, setPomoc ] = useState(true);
	const [ poruka, setPoruka ] = useState(null);
	const [ najbolji, setNajbolji ] = useState(() => rekord('razvrstaj'));
	const [ vucen, setVucen ] = useState(null); /* { id, x, y } dok traje povlačenje */

	const cekanje = useRef(null);
	const povlacenje = useRef(null);

	useEffect(() => () => clearTimeout(cekanje.current), []);

	const novoKolo = (n) => {
		setKolo(n);
		setPloca(podijeli(KOLA[n]));
		setPostavljeni({});
		setIzabran(null);
		setTrese(null);
		setPoruka(null);
		setPomoc(n === 0);
		setFaza('igra');
	};

	const pokreni = () => {
		setBodovi(0);
		setNiz(0);
		setSrca(SRCA);
		novoKolo(0);
	};

	const zavrsi = (konacni, pobjeda) => {
		pisak(pobjeda ? 'pobjeda' : 'kraj');
		setFaza('kraj');
		if (konacni > 0) {
			const r = upisiRekord('razvrstaj', { bodovi: konacni, kolo: kolo + 1, datum: Date.now() }, viseBodova);
			setNajbolji(r.rekord);
		}
	};

	/* harf se prislanja kutiji – tačno ili netačno, uvijek se nešto nauči */
	const prisloni = (harfId, grupaId) => {
		if (faza !== 'igra') return;
		const h = ploca.harfovi.find((x) => x.id === harfId);
		if (!h || postavljen(harfId)) return;
		setIzabran(null);

		if (h.grupa !== grupaId) {
			pisak('nizak');
			setNiz(0);
			setTrese(grupaId);
			setPoruka({ vrsta: 'netacno', harf: h.harf, grupa: grupaId });
			cekanje.current = setTimeout(() => setTrese(null), 500);
			const ostalo = srca - 1;
			setSrca(ostalo);
			if (ostalo <= 0) zavrsi(bodovi, false);
			return;
		}

		const mn = Math.min(5, 1 + Math.floor(niz / 3));
		const novi = bodovi + ZA_HARF * mn;
		const stanje = Object.assign({}, postavljeni, { [grupaId]: (postavljeni[grupaId] || []).concat(h.harf) });
		pisak('dobro');
		setNiz(niz + 1);
		setBodovi(novi);
		setPostavljeni(stanje);
		setPoruka({ vrsta: 'tacno', harf: h.harf, grupa: grupaId });

		const ukupno = Object.keys(stanje).reduce((n, k) => n + stanje[k].length, 0);
		if (ukupno === ploca.harfovi.length) {
			if (kolo + 1 >= KOLA.length) {
				cekanje.current = setTimeout(() => zavrsi(novi, true), 600);
			} else {
				pisak('nivo');
				cekanje.current = setTimeout(() => setFaza('kolo'), 600);
			}
		}
	};

	const postavljen = (harfId) => {
		const h = ploca.harfovi.find((x) => x.id === harfId);
		if (!h) return false;
		const u = postavljeni[h.grupa] || [];
		/* isti harf ne dolazi dvaput u istom kolu, pa je dovoljno provjeriti sadržaj kutije */
		return u.indexOf(h.harf) >= 0;
	};

	/* ---------- povlačenje prstom ili mišem ---------- */
	const pocniVucu = (e, h) => {
		if (faza !== 'igra' || postavljen(h.id)) return;
		povlacenje.current = { id: h.id, x0: e.clientX, y0: e.clientY, pomjeren: false };
		setVucen({ id: h.id, x: 0, y: 0 });
		/* hvatanje pokazivača zna puknuti (npr. pokazivač je već otpušten) – vučenje radi i bez njega */
		try {
			if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
		} catch (err) {}
	};

	const vuci = (e) => {
		const v = povlacenje.current;
		if (!v) return;
		const dx = e.clientX - v.x0;
		const dy = e.clientY - v.y0;
		if (Math.abs(dx) > 6 || Math.abs(dy) > 6) v.pomjeren = true;
		setVucen({ id: v.id, x: dx, y: dy });
	};

	const pustiVucu = (e) => {
		const v = povlacenje.current;
		povlacenje.current = null;
		setVucen(null);
		if (!v) return;

		if (!v.pomjeren) {
			/* dodir bez pomjeranja bira harf; sljedeći dodir na kutiju ga prislanja */
			setIzabran(izabran === v.id ? null : v.id);
			return;
		}
		/* harf je pod prstom, pa se za tren sklanja da bi se vidjelo šta je ispod njega */
		const el = e.currentTarget;
		const prije = el.style.pointerEvents;
		el.style.pointerEvents = 'none';
		const ispod = document.elementFromPoint(e.clientX, e.clientY);
		el.style.pointerEvents = prije;
		const kutija = ispod && ispod.closest ? ispod.closest('[data-kutija]') : null;
		if (kutija) prisloni(v.id, kutija.getAttribute('data-kutija'));
	};

	const naslovGrupe = (g) => pick(g.naziv);

	if (faza === 'uvod' || faza === 'kraj' || faza === 'kolo') {
		const zvijezde = zvjezdice(kolo / (KOLA.length - 1));
		return (
			<div className="igra igra--razvrstaj">
				<div className="igra__sloj igra__sloj--stranica">
					{faza === 'kraj' && (
						<React.Fragment>
							<h3>{srca > 0 ? ui.igraPobjeda : ui.igraKraj}</h3>
							<p className="igra__zvjezde" aria-hidden="true">
								{[ 0, 1, 2 ].map((i) => <span key={i} className={i < zvijezde ? 'je-puna' : ''}>★</span>)}
							</p>
							<p className="igra__krajBodovi">
								<b>{bodovi}</b> {ui.igraBodovi}
							</p>
							<p>{ui.igraRazvrstajKraj(kolo + 1, KOLA.length)}</p>
						</React.Fragment>
					)}
					{faza === 'kolo' && (
						<React.Fragment>
							<h3>{ui.igraKolo(kolo + 2)}</h3>
							<p>{ui.igraRazvrstajKolo(bodovi)}</p>
						</React.Fragment>
					)}
					{faza === 'uvod' && (
						<React.Fragment>
							<h3>{ui.igraRazvrstajNaslov}</h3>
							<p>{ui.igraRazvrstajUvod(KOLA.length)}</p>
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

	const preostali = ploca.harfovi.filter((h) => !postavljen(h.id));

	return (
		<div className="igra igra--razvrstaj">
			<div className="igra__hud">
				<span className="igra__srca" aria-label={ui.igraSrca(srca)}>
					{[ 0, 1, 2 ].map((i) => (i < srca ? <FaHeart key={i} /> : <FaRegHeart key={i} className="je-prazno" />))}
				</span>
				<span className="igra__bodovi">
					<b>{bodovi}</b> {ui.igraBodovi}
				</span>
				<span className={'igra__niz' + (niz >= 3 ? ' je-vruc' : '')}>×{Math.min(5, 1 + Math.floor(niz / 3))}</span>
				<button
					type="button"
					className={'igra-razvrstaj__pomoc-gumb' + (pomoc ? ' je-ukljucena' : '')}
					onClick={() => setPomoc(!pomoc)}
					aria-pressed={pomoc}
				>
					<FaLightbulb /> {ui.igraPomoc}
				</button>
			</div>

			<p className="igra__pitanje">{ui.igraRazvrstajPitanje}</p>

			<div className={'igra-razvrstaj__kutije je-' + ploca.kutije.length}>
				{ploca.kutije.map((g) => {
					const boja = BOJA_GRUPE[g.id] || BOJA[g.id] || 'var(--gold)';
					const u = postavljeni[g.id] || [];
					return (
						<div
							key={g.id}
							data-kutija={g.id}
							className={
								'igra-razvrstaj__kutija' +
								(trese === g.id ? ' je-trese' : '') +
								(izabran ? ' je-meta' : '') +
								(vucen ? ' je-meta' : '')
							}
							style={{ '--boja': boja }}
							role="button"
							tabIndex={0}
							onClick={() => izabran && prisloni(izabran, g.id)}
							onKeyDown={(e) => {
								if (izabran && (e.key === 'Enter' || e.key === ' ')) {
									e.preventDefault();
									prisloni(izabran, g.id);
								}
							}}
						>
							<h4>{naslovGrupe(g)}</h4>
							<p className="igra-razvrstaj__kontekst">{pick(g.kontekst)}</p>
							{pomoc && <p className="igra-razvrstaj__pomoc">{pick(g.pomoc)}</p>}
							<div className="igra-razvrstaj__polje">
								{u.map((h, i) => (
									<span key={i} className="igra-razvrstaj__harf je-postavljen" lang="ar" dir="rtl">
										{h}
									</span>
								))}
							</div>
							<Link to={'/lekcija' + g.lekcija + '#lekcija'} className="igra-razvrstaj__lekcija">
								<FaBookOpen /> {ui.igraLekcija(g.lekcija)}
							</Link>
						</div>
					);
				})}
			</div>

			<div className="igra-razvrstaj__zaliha">
				{preostali.map((h) => {
					const v = vucen && vucen.id === h.id ? vucen : null;
					return (
						<button
							key={h.id}
							type="button"
							className={'igra-razvrstaj__harf' + (izabran === h.id ? ' je-izabran' : '') + (v ? ' je-vucen' : '')}
							style={v ? { transform: 'translate(' + v.x + 'px,' + v.y + 'px)' } : undefined}
							lang="ar"
							dir="rtl"
							onPointerDown={(e) => pocniVucu(e, h)}
							onPointerMove={vuci}
							onPointerUp={pustiVucu}
							onPointerCancel={() => {
								povlacenje.current = null;
								setVucen(null);
							}}
						>
							{h.harf}
						</button>
					);
				})}
				{!preostali.length && <p className="igra-razvrstaj__prazno">{ui.igraRazvrstajGotovo}</p>}
			</div>

			{poruka && (
				<p className={'igra__poruka' + (poruka.vrsta === 'netacno' ? ' je-netacna' : '')} role="status">
					<span lang="ar" dir="rtl" className="igra-razvrstaj__harf-poruka">
						{poruka.harf}
					</span>{' '}
					{poruka.vrsta === 'tacno'
						? ui.igraRazvrstajTacno(naslovGrupe(GRUPE[poruka.grupa]))
						: ui.igraRazvrstajNetacno(naslovGrupe(GRUPE[poruka.grupa]))}
				</p>
			)}
		</div>
	);
}
