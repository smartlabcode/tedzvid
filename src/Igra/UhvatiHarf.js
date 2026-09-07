import React, { useEffect, useRef, useState } from 'react';
import { FaHeart, FaPause, FaPlay, FaRedo, FaTrophy, FaRegHeart } from 'react-icons/fa';
import HARFOVI from '../Data/Igra/harfovi.json';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';
import { rekord, upisiRekord, viseBodova } from './rekordi';
import { pisak } from './zvuk';

/* ---------- pravila igre ---------- */
const NIVOI = [ 'idgam-gunneh', 'idgam-bila-gunneh', 'iklab', 'izhar', 'kalkala', 'ihfa' ];
const PO_NIVOU = 8; /* koliko tačnih harfova nosi sljedeći nivo */
const SRCA = 3;
const SIRINA_KORPE = 0.16; /* udio širine polja */
const ZONA = [ 0.82, 1.02 ]; /* visina na kojoj korpa hvata */
const UDIO_TACNIH = 0.45; /* koliko harfova koji padaju pripada traženom pravilu */

const GRUPE = HARFOVI.grupe.reduce((acc, g) => {
	acc[g.id] = g;
	return acc;
}, {});

/* svi harfovi koji uopšte mogu doći poslije نْ – iz njih se biraju "pogrešni" */
const SVI = HARFOVI.grupe.reduce((acc, g) => acc.concat(g.harfovi.filter((h) => acc.indexOf(h) < 0)), []);

const brzinaNivoa = (i) => 0.17 + i * 0.032; /* dio visine polja u sekundi */
const razmakNivoa = (i) => Math.max(560, 1150 - i * 95); /* ms između harfova */

let brojac = 0;

export default function UhvatiHarf() {
	const { lang } = useLang();
	const ui = useUI();
	const pick = (f) => (f && (f[lang] !== undefined ? f[lang] : f[DEFAULT_LANG])) || '';

	const [ faza, setFaza ] = useState('uvod'); /* uvod | igra | nivo | pauza | kraj */
	const [ , tick ] = useState(0);
	const [ najbolji, setNajbolji ] = useState(() => rekord('harfovi'));

	const poljeRef = useRef(null);
	const svijet = useRef({
		harfovi: [],
		iskre: [],
		nivo: 0,
		ulov: 0,
		bodovi: 0,
		niz: 0,
		srca: SRCA,
		korpa: 0.5,
		smjer: 0,
		zadnji: 0,
		trese: 0,
		pobjeda: false
	});

	const s = svijet.current;
	const fazaRef = useRef(faza);
	fazaRef.current = faza;
	const grupa = GRUPE[NIVOI[Math.min(s.nivo, NIVOI.length - 1)]];
	const mnozitelj = Math.min(5, 1 + Math.floor(s.niz / 3));

	/* ---------- jedan korak igre ---------- */
	const korak = (dt, sada) => {
		const w = svijet.current;
		const g = GRUPE[NIVOI[Math.min(w.nivo, NIVOI.length - 1)]];

		/* tipkovnica pomjera korpu, dodir/miš je postavlja direktno */
		if (w.smjer) w.korpa = Math.min(1, Math.max(0, w.korpa + w.smjer * dt * 1.15));

		/* novi harf */
		if (sada - w.zadnji > razmakNivoa(w.nivo)) {
			w.zadnji = sada;
			const tacan = Math.random() < UDIO_TACNIH;
			const izvor = tacan ? g.harfovi : SVI.filter((h) => g.harfovi.indexOf(h) < 0);
			w.harfovi.push({
				id: ++brojac,
				harf: izvor[Math.floor(Math.random() * izvor.length)],
				ok: tacan,
				x: 0.08 + Math.random() * 0.84,
				y: -0.08,
				nagib: Math.round(Math.random() * 20 - 10)
			});
		}

		const brzina = brzinaNivoa(w.nivo);
		const preostali = [];
		for (const h of w.harfovi) {
			h.y += brzina * dt;
			const uZoni = h.y > ZONA[0] && h.y < ZONA[1];
			const pogodak = uZoni && Math.abs(h.x - w.korpa) < SIRINA_KORPE / 2 + 0.03;

			if (pogodak) {
				if (h.ok) {
					w.niz += 1;
					const mn = Math.min(5, 1 + Math.floor((w.niz - 1) / 3));
					w.bodovi += 10 * mn;
					w.ulov += 1;
					w.iskre.push({ id: ++brojac, x: h.x, tekst: '+' + 10 * mn, ok: true, do: sada + 800 });
					pisak('dobro');
					if (w.ulov >= PO_NIVOU) {
						w.harfovi = [];
						w.ulov = 0;
						if (w.nivo + 1 >= NIVOI.length) {
							w.pobjeda = true;
							zavrsi();
							return;
						}
						w.nivo += 1;
						if (w.srca < SRCA) w.srca += 1; /* novi nivo vraća jedno srce */
						w.zadnji = sada + 700;
						pisak('nivo');
						setFaza('nivo');
						return;
					}
				} else {
					w.niz = 0;
					w.srca -= 1;
					w.trese = sada + 350;
					w.iskre.push({ id: ++brojac, x: h.x, tekst: h.harf, ok: false, do: sada + 800 });
					pisak('nizak');
					if (w.srca <= 0) {
						w.harfovi = [];
						zavrsi();
						return;
					}
				}
				continue;
			}

			if (h.y > 1.08) {
				if (h.ok) w.niz = 0; /* propušten tačan harf gasi niz, ali ne uzima srce */
				continue;
			}
			preostali.push(h);
		}
		w.harfovi = preostali;
		w.iskre = w.iskre.filter((i) => i.do > sada);
	};

	/* petlja uvijek zove posljednju verziju koraka (bez zastarjelih zatvaranja) */
	const korakRef = useRef(korak);
	korakRef.current = korak;

	const zavrsi = () => {
		const w = svijet.current;
		pisak(w.pobjeda ? 'pobjeda' : 'kraj');
		if (w.bodovi > 0) {
			const r = upisiRekord('harfovi', { bodovi: w.bodovi, nivo: w.nivo + 1, datum: Date.now() }, viseBodova);
			setNajbolji(r.rekord);
		}
		setFaza('kraj');
	};

	useEffect(
		() => {
			if (faza !== 'igra') return undefined;
			let id;
			let prije = performance.now();
			const petlja = (sada) => {
				const dt = Math.min(0.05, (sada - prije) / 1000);
				prije = sada;
				korakRef.current(dt, sada);
				tick((t) => t + 1);
				id = requestAnimationFrame(petlja);
			};
			id = requestAnimationFrame(petlja);
			return () => cancelAnimationFrame(id);
		},
		[ faza ]
	);

	/* najava novog nivoa */
	useEffect(
		() => {
			if (faza !== 'nivo') return undefined;
			const t = setTimeout(() => {
				svijet.current.zadnji = performance.now();
				setFaza('igra');
			}, 1900);
			return () => clearTimeout(t);
		},
		[ faza ]
	);

	/* tipkovnica: strelice / A-D, razmak za pauzu */
	useEffect(
		() => {
			const dolje = (e) => {
				if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') svijet.current.smjer = -1;
				else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') svijet.current.smjer = 1;
				else if (e.key === ' ' || e.key === 'Escape') {
					/* razmak pauzira samo dok igra traje – inače ostaje običnom dugmetu */
					if (fazaRef.current !== 'igra' && fazaRef.current !== 'pauza') return;
					setFaza((f) => (f === 'igra' ? 'pauza' : 'igra'));
					if (e.key === ' ') e.preventDefault();
				} else return;
				if (e.key.indexOf('Arrow') === 0) e.preventDefault();
			};
			const gore = (e) => {
				if ([ 'ArrowLeft', 'ArrowRight', 'a', 'A', 'd', 'D' ].indexOf(e.key) >= 0) svijet.current.smjer = 0;
			};
			window.addEventListener('keydown', dolje);
			window.addEventListener('keyup', gore);
			return () => {
				window.removeEventListener('keydown', dolje);
				window.removeEventListener('keyup', gore);
			};
		},
		[]
	);

	/* prelazak na drugu karticu pauzira igru */
	useEffect(() => {
		const skriveno = () => {
			if (document.hidden) setFaza((f) => (f === 'igra' ? 'pauza' : f));
		};
		document.addEventListener('visibilitychange', skriveno);
		return () => document.removeEventListener('visibilitychange', skriveno);
	}, []);

	const pomjeri = (e) => {
		const el = poljeRef.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = ((e.touches ? e.touches[0].clientX : e.clientX) - r.left) / r.width;
		svijet.current.korpa = Math.min(1, Math.max(0, x));
	};

	const pokreni = () => {
		svijet.current = {
			harfovi: [],
			iskre: [],
			nivo: 0,
			ulov: 0,
			bodovi: 0,
			niz: 0,
			srca: SRCA,
			korpa: 0.5,
			smjer: 0,
			zadnji: performance.now(),
			trese: 0,
			pobjeda: false
		};
		setFaza('igra');
		/* na telefonu polje s korpom mora biti u vidnom polju */
		if (poljeRef.current) poljeRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	};

	const trese = s.trese > performance.now();

	return (
		<div className="igra igra--harfovi">
			<div className="igra__hud">
				<span className="igra__srca" aria-label={ui.igraSrca(s.srca)}>
					{[ 0, 1, 2 ].map((i) => (i < s.srca ? <FaHeart key={i} /> : <FaRegHeart key={i} className="je-prazno" />))}
				</span>
				<span className="igra__bodovi">
					<b>{s.bodovi}</b> {ui.igraBodovi}
				</span>
				<span className={'igra__niz' + (mnozitelj > 1 ? ' je-vruc' : '')}>×{mnozitelj}</span>
				{faza === 'igra' && (
					<button type="button" className="igra__pauza" onClick={() => setFaza('pauza')} aria-label={ui.igraPauza}>
						<FaPause />
					</button>
				)}
			</div>

			<p className="igra__zadatak">
				{ui.igraUhvati}{' '}
				<b>
					{pick(grupa.naziv)} <span className="igra__lek">({ui.igraLekcija(grupa.lekcija)})</span>
				</b>
				<small>{pick(grupa.kontekst)}</small>
			</p>
			<p className="igra__ciljni" dir="rtl" lang="ar">
				{grupa.harfovi.join(' ')}
			</p>

			<div
				className={'igra__polje' + (trese ? ' je-udar' : '')}
				ref={poljeRef}
				onMouseMove={faza === 'igra' ? pomjeri : undefined}
				onTouchStart={faza === 'igra' ? pomjeri : undefined}
				onTouchMove={faza === 'igra' ? pomjeri : undefined}
			>
				{faza === 'igra' &&
					s.harfovi.map((h) => (
						<span
							key={h.id}
							className="igra__harf"
							style={{ left: h.x * 100 + '%', top: h.y * 100 + '%', transform: 'translate(-50%,-50%) rotate(' + h.nagib + 'deg)' }}
							lang="ar"
						>
							{h.harf}
						</span>
					))}

				{s.iskre.map((i) => (
					<span key={i.id} className={'igra__iskra' + (i.ok ? '' : ' je-loša')} style={{ left: i.x * 100 + '%' }}>
						{i.tekst}
					</span>
				))}

				{(faza === 'igra' || faza === 'pauza') && (
					<div
						className="igra__korpa"
						style={{ left: s.korpa * 100 + '%', width: SIRINA_KORPE * 100 + '%' }}
						aria-hidden="true"
					>
						<span className="igra__korpa-usta" />
					</div>
				)}

				{faza === 'uvod' && (
					<div className="igra__sloj">
						<h3>{ui.igraHarfNaslov}</h3>
						<p>{ui.igraHarfUvod}</p>
						<p className="igra__uputa">{ui.igraKontrole}</p>
						{najbolji && (
							<p className="igra__rekord">
								<FaTrophy /> {ui.igraRekordBodovi(najbolji.bodovi)}
							</p>
						)}
						<button type="button" className="btn-t btn-t--gold" onClick={pokreni}>
							<FaPlay /> {ui.igraKreni}
						</button>
					</div>
				)}

				{faza === 'nivo' && (
					<div className="igra__sloj igra__sloj--najava">
						<p className="igra__nivo-broj">{ui.igraNivo(s.nivo + 1)}</p>
						<h3>{pick(grupa.naziv)}</h3>
						<p className="igra__ciljni igra__ciljni--veliki" dir="rtl" lang="ar">
							{grupa.harfovi.join(' ')}
						</p>
						<p>{pick(grupa.pomoc)}</p>
					</div>
				)}

				{faza === 'pauza' && (
					<div className="igra__sloj">
						<h3>{ui.igraPauza}</h3>
						<button type="button" className="btn-t btn-t--gold" onClick={() => setFaza('igra')}>
							<FaPlay /> {ui.igraNastavi}
						</button>
					</div>
				)}

				{faza === 'kraj' && (
					<div className="igra__sloj">
						<h3>{s.pobjeda ? ui.igraPobjeda : ui.igraKraj}</h3>
						<p className="igra__krajBodovi">
							<b>{s.bodovi}</b> {ui.igraBodovi}
						</p>
						<p>{s.pobjeda ? ui.igraHarfPobjeda : ui.igraHarfKraj(Math.min(s.nivo + 1, NIVOI.length))}</p>
						{najbolji && (
							<p className="igra__rekord">
								<FaTrophy /> {ui.igraRekordBodovi(najbolji.bodovi)}
							</p>
						)}
						<button type="button" className="btn-t btn-t--gold" onClick={pokreni}>
							<FaRedo /> {ui.igraPonovo}
						</button>
					</div>
				)}
			</div>

			<div className="igra__napredak" aria-hidden="true">
				{NIVOI.map((id, i) => (
					<span key={id} className={i < s.nivo ? 'je-gotov' : i === s.nivo ? 'je-sad' : ''} />
				))}
			</div>
			<p className="igra__podnozje">{ui.igraNapredakNivoa(s.ulov, PO_NIVOU, NIVOI.length)}</p>
		</div>
	);
}
