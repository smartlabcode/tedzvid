import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	FaArrowRight,
	FaCheck,
	FaClipboardCheck,
	FaGraduationCap,
	FaRedo,
	FaSignInAlt,
	FaTrophy,
	FaUserPlus
} from 'react-icons/fa';
import QUIZ from '../Data/Quiz';
import ZAVRSNI_PITANJA from '../Data/Quiz/zavrsni';
import lessons from '../Data/lessons.json';
import { useAuth } from '../auth/AuthContext';
import {
	PROLAZ,
	PROLAZ_ZAVRSNI,
	ZAVRSNI,
	jePolozena,
	sljedecaLekcija,
	putanjaLekcije,
	putanjaZavrsnog
} from '../auth/progress';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

/* Arapski isječci u tekstu pitanja/odgovora dobivaju mushafski font */
const AR = '\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFE';
const AR_RUN = new RegExp('([' + AR + ']+(?:\\s+[' + AR + ']+)*)');

export function Tekst({ children }) {
	const parts = String(children == null ? '' : children).split(AR_RUN);
	return parts.map(
		(p, i) =>
			i % 2 ? (
				<span key={i} className="kviz__ar" dir="rtl" lang="ar">
					{p}
				</span>
			) : (
				<React.Fragment key={i}>{p}</React.Fragment>
			)
	);
}

const LEKCIJE = lessons['lekcije'].reduce((acc, curr) => acc.concat(curr), []);
const STORAGE_KEY = 'tedzvid-zavrsni-kviz';

/* nasumičan redoslijed indeksa 0..n-1 (Fisher–Yates) */
function promijesaj(n) {
	const a = [];
	for (let i = 0; i < n; i++) a.push(i);
	for (let i = n - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const t = a[i];
		a[i] = a[j];
		a[j] = t;
	}
	return a;
}

/* Započeti završni kviz se pamti u sessionStorage (osvježavanje stranice ne briše napredak) */
function ucitajNastavak(n) {
	try {
		const s = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));
		if (
			s &&
			Array.isArray(s.poredak) &&
			s.poredak.length === n &&
			Array.isArray(s.rezultati) &&
			s.rezultati.length === s.idx &&
			s.idx > 0 &&
			s.idx < n
		)
			return s;
	} catch (e) {}
	return null;
}

function zapamti(stanje) {
	try {
		if (stanje) window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stanje));
		else window.sessionStorage.removeItem(STORAGE_KEY);
	} catch (e) {}
}

/*
 * Kviz: uvod → pitanja (jedno po jedno, s povratnom informacijom) → rezultat.
 * props.broj – broj lekcije ("14" i za drugi dio lekcije 14) ili "zavrsni" (100 pitanja iz svih lekcija).
 * Položen kviz (≥ prolaz tačnih) prijavljenom korisniku otključava sljedeću lekciju / završni kviz.
 */
export default function LessonQuiz({ broj }) {
	const jeZavrsni = broj === ZAVRSNI;
	const n = jeZavrsni ? null : parseInt(broj, 10);
	const kljuc = jeZavrsni ? ZAVRSNI : String(n);
	const bazen = jeZavrsni ? ZAVRSNI_PITANJA : (QUIZ[n] && QUIZ[n].pitanja) || [];
	const ukupno = bazen.length;
	const prolaz = jeZavrsni ? PROLAZ_ZAVRSNI : PROLAZ;

	const { lang } = useLang();
	const ui = useUI();
	const location = useLocation();
	const { user, progress, saveResult } = useAuth();
	const ref = useRef(null);

	const [ faza, setFaza ] = useState('uvod'); /* uvod | pitanja | rezultat */
	const [ poredak, setPoredak ] = useState(null); /* redoslijed pitanja (završni: izmiješan) */
	const [ idx, setIdx ] = useState(0);
	const [ izbor, setIzbor ] = useState(null);
	const [ potvrdjeno, setPotvrdjeno ] = useState(false);
	const [ rezultati, setRezultati ] = useState([]); /* true/false po pitanju */
	const [ spremanje, setSpremanje ] = useState(''); /* '' | saving | saved | error */
	const [ nastavak ] = useState(() => (jeZavrsni ? ucitajNastavak(ukupno) : null));

	if (!ukupno) return null;

	const pick = (f) => (f && (f[lang] !== undefined ? f[lang] : f[DEFAULT_LANG])) || '';
	const pitanja = poredak ? poredak.map((i) => bazen[i]) : bazen;
	const tacnih = rezultati.filter(Boolean).length;
	const polozeno = tacnih >= prolaz;
	const prije = progress[kljuc];
	const vecPolozeno = jePolozena(progress, kljuc);
	const sljedeca = jeZavrsni ? null : sljedecaLekcija(n);
	const from = location.pathname + (jeZavrsni ? '' : '#kviz');
	const velikiKviz = ukupno > 20;

	/* vrh kviza ostaje u vidnom polju kad se sadržaj mijenja */
	const uVidnoPolje = () => {
		const el = ref.current;
		if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	const spremi = (tacno) => {
		setSpremanje('saving');
		saveResult(kljuc, tacno).then(() => setSpremanje('saved'), () => setSpremanje('error'));
	};

	const pokreni = (stanje) => {
		setPoredak(stanje.poredak);
		setIdx(stanje.idx);
		setRezultati(stanje.rezultati);
		setIzbor(null);
		setPotvrdjeno(false);
		setSpremanje('');
		setFaza('pitanja');
		if (jeZavrsni) zapamti(stanje);
		uVidnoPolje();
	};

	const start = () => pokreni({ poredak: jeZavrsni ? promijesaj(ukupno) : null, idx: 0, rezultati: [] });
	const nastavi = () => nastavak && pokreni(nastavak);

	const potvrdi = () => {
		if (izbor === null) return;
		setRezultati(rezultati.concat(izbor === pitanja[idx].tacno));
		setPotvrdjeno(true);
	};

	const dalje = () => {
		if (idx + 1 < ukupno) {
			setIdx(idx + 1);
			setIzbor(null);
			setPotvrdjeno(false);
			if (jeZavrsni) zapamti({ poredak, idx: idx + 1, rezultati });
		} else {
			setFaza('rezultat');
			if (jeZavrsni) zapamti(null);
			if (user) spremi(tacnih);
		}
		uVidnoPolje();
	};

	/* završni: lekcije u kojima je bilo grešaka, za ponavljanje */
	const greskePoLekciji = {};
	if (jeZavrsni && faza === 'rezultat') {
		rezultati.forEach((ok, i) => {
			if (!ok) greskePoLekciji[pitanja[i].lekcija] = (greskePoLekciji[pitanja[i].lekcija] || 0) + 1;
		});
	}
	const zaPonavljanje = Object.keys(greskePoLekciji).map(Number).sort((a, b) => a - b);

	const p = pitanja[idx];

	return (
		<section className={'kviz' + (jeZavrsni ? ' kviz--zavrsni' : '')} id="kviz" ref={ref}>
			<h2 className="text-center">
				<strong>{jeZavrsni ? ui.zavrsniTitle : ui.kviz}</strong>
			</h2>
			<hr />
			<div className="kviz__card">
				{faza === 'uvod' && (
					<div className="kviz__intro">
						<div className="kviz__icon">{jeZavrsni ? <FaGraduationCap /> : <FaClipboardCheck />}</div>
						<h3>{ui.kvizIntroTitle}</h3>
						<p>{jeZavrsni ? ui.zavrsniIntroText(ukupno, prolaz) : ui.kvizIntroText(prolaz, ukupno)}</p>
						{prije && (
							<p className="kviz__best">
								{vecPolozeno && <FaCheck />} {ui.kvizBest(prije.najbolje, ukupno)}
							</p>
						)}
						{vecPolozeno && !jeZavrsni && <p className="kviz__note">{ui.kvizAlreadyPassed}</p>}
						<div className="kviz__actions">
							{nastavak && (
								<button type="button" className="btn-t btn-t--gold" onClick={nastavi}>
									{ui.zavrsniResume(nastavak.idx + 1, ukupno)} <FaArrowRight />
								</button>
							)}
							<button type="button" className={'btn-t ' + (nastavak ? 'btn-t--ghost' : 'btn-t--gold')} onClick={start}>
								{nastavak ? ui.zavrsniRestart : ui.kvizStart} {!nastavak && <FaArrowRight />}
							</button>
						</div>
					</div>
				)}

				{faza === 'pitanja' && (
					<div className="kviz__q">
						<div className="kviz__top">
							<span className="kviz__count">
								{ui.kvizQuestion(idx + 1, ukupno)}
								{jeZavrsni && <span className="kviz__tag">{ui.kvizNextLesson(p.lekcija)}</span>}
							</span>
							{velikiKviz ? (
								<div
									className="kviz__bar"
									role="progressbar"
									aria-label={ui.kvizProgressAria}
									aria-valuemin={0}
									aria-valuemax={ukupno}
									aria-valuenow={idx}
								>
									<span style={{ width: idx / ukupno * 100 + '%' }} />
								</div>
							) : (
								<ol className="kviz__dots" aria-label={ui.kvizProgressAria}>
									{pitanja.map((_, i) => (
										<li
											key={i}
											className={
												i < rezultati.length ? (rezultati[i] ? 'is-ok' : 'is-bad') : i === idx ? 'is-now' : ''
											}
										/>
									))}
								</ol>
							)}
						</div>
						<p className="kviz__text">
							<Tekst>{pick(p.q)}</Tekst>
						</p>
						<div className="kviz__opts" role="radiogroup" aria-label={ui.kvizQuestion(idx + 1, ukupno)}>
							{p.opcije.map((o, i) => {
								let cls = 'kviz__opt';
								if (!potvrdjeno && izbor === i) cls += ' is-selected';
								if (potvrdjeno && i === p.tacno) cls += ' is-correct';
								if (potvrdjeno && izbor === i && i !== p.tacno) cls += ' is-wrong';
								return (
									<button
										key={i}
										type="button"
										role="radio"
										aria-checked={izbor === i}
										className={cls}
										disabled={potvrdjeno}
										onClick={() => setIzbor(i)}
									>
										<span className="kviz__letter">{String.fromCharCode(65 + i)}</span>
										<span>
											<Tekst>{pick(o)}</Tekst>
										</span>
									</button>
								);
							})}
						</div>
						{potvrdjeno && (
							<div className={'kviz__feedback ' + (izbor === p.tacno ? 'is-ok' : 'is-bad')} role="status">
								<strong>{izbor === p.tacno ? ui.kvizCorrect : ui.kvizWrong}</strong>{' '}
								{izbor !== p.tacno && (
									<span>
										{ui.kvizCorrectIs}{' '}
										<b>
											<Tekst>{pick(p.opcije[p.tacno])}</Tekst>
										</b>
										.{' '}
									</span>
								)}
								{p.objasnjenje && (
									<span>
										<Tekst>{pick(p.objasnjenje)}</Tekst>
									</span>
								)}
							</div>
						)}
						<div className="kviz__actions">
							{!potvrdjeno ? (
								<button type="button" className="btn-t btn-t--navy" disabled={izbor === null} onClick={potvrdi}>
									{ui.kvizAnswer}
								</button>
							) : (
								<button type="button" className="btn-t btn-t--gold" onClick={dalje}>
									{idx + 1 < ukupno ? ui.kvizNext : ui.kvizFinish} <FaArrowRight />
								</button>
							)}
						</div>
					</div>
				)}

				{faza === 'rezultat' && (
					<div className={'kviz__result ' + (polozeno ? 'is-pass' : 'is-fail')}>
						<div className="kviz__icon">{polozeno ? <FaTrophy /> : <FaRedo />}</div>
						<p className="kviz__score">
							<b>{tacnih}</b> / {ukupno}
						</p>
						<h3>{polozeno ? (jeZavrsni ? ui.zavrsniPassed : ui.kvizPassed) : ui.kvizFailedTitle}</h3>
						<p>
							{jeZavrsni
								? polozeno ? ui.zavrsniPassedText : ui.zavrsniFailed(prolaz)
								: polozeno ? sljedeca ? ui.kvizUnlocked(sljedeca) : ui.kvizAllDone : ui.kvizFailed(prolaz)}
						</p>
						{velikiKviz ? (
							<p className="kviz__counts">{ui.kvizCorrectCount(tacnih, ukupno)}</p>
						) : (
							<ol className="kviz__dots kviz__dots--big" aria-label={ui.kvizScore(tacnih, ukupno)}>
								{rezultati.map((ok, i) => (
									<li key={i} className={ok ? 'is-ok' : 'is-bad'}>
										{i + 1}
									</li>
								))}
							</ol>
						)}

						{zaPonavljanje.length > 0 && (
							<div className="kviz__review">
								<p>{ui.zavrsniReview}</p>
								<div>
									{zaPonavljanje.map((l) => (
										<Link key={l} to={putanjaLekcije(l)} className="kviz__chip">
											<b>{l}</b> {pick(LEKCIJE[l - 1].title).trim()}
											<small>{ui.zavrsniMistakes(greskePoLekciji[l])}</small>
										</Link>
									))}
								</div>
							</div>
						)}

						{user ? (
							spremanje && (
								<p className={'kviz__save is-' + spremanje} role="status">
									{spremanje === 'saving' && ui.kvizSaving}
									{spremanje === 'saved' && ui.kvizSaved}
									{spremanje === 'error' && (
										<React.Fragment>
											{ui.kvizSaveError}{' '}
											<button type="button" onClick={() => spremi(tacnih)}>
												{ui.kvizRetrySave}
											</button>
										</React.Fragment>
									)}
								</p>
							)
						) : (
							<div className="kviz__guest">
								<p>{ui.kvizGuest}</p>
								<div>
									<Link to={{ pathname: '/prijava', state: { from } }} className="btn-t btn-t--outline btn-t--sm">
										<FaSignInAlt /> {ui.navPrijava}
									</Link>
									<Link to={{ pathname: '/registracija', state: { from } }} className="btn-t btn-t--gold btn-t--sm">
										<FaUserPlus /> {ui.navRegistracija}
									</Link>
								</div>
							</div>
						)}

						<div className="kviz__actions">
							<button type="button" className="btn-t btn-t--ghost" onClick={start}>
								<FaRedo /> {ui.kvizRestart}
							</button>
							{sljedeca && jePolozena(progress, n) && (
								<Link to={putanjaLekcije(sljedeca)} className="btn-t btn-t--gold">
									{ui.kvizNextLesson(sljedeca)} <FaArrowRight />
								</Link>
							)}
							{!jeZavrsni && !sljedeca && jePolozena(progress, n) && (
								<Link to={putanjaZavrsnog} className="btn-t btn-t--gold">
									<FaGraduationCap /> {ui.zavrsniTitle}
								</Link>
							)}
							{jeZavrsni && (
								<Link to={user && polozeno ? '/profil' : '/lekcije'} className="btn-t btn-t--gold">
									{user && polozeno ? ui.navProfil : ui.sveLekcije} <FaArrowRight />
								</Link>
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
