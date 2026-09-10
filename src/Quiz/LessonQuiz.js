import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	FaArrowRight,
	FaCheck,
	FaClipboardCheck,
	FaGraduationCap,
	FaLayerGroup,
	FaLock,
	FaRedo,
	FaSignInAlt,
	FaTrophy,
	FaUserPlus
} from 'react-icons/fa';
import QUIZ from '../Data/Quiz';
import ZAVRSNI_PITANJA from '../Data/Quiz/zavrsni';
import { bazenGrupe } from '../Data/Quiz/bazen';
import lessons from '../Data/lessons.json';
import { useAuth } from '../auth/AuthContext';
import {
	PROLAZ,
	PROLAZ_GRUPA,
	PROLAZ_ZAVRSNI,
	UKUPNO_GRUPA,
	ZAVRSNI,
	brojGrupe,
	grupa,
	grupaLekcije,
	jeKljucGrupe,
	jePolozena,
	kljucGrupe,
	sljedecaGrupa,
	sljedecaLekcija,
	putanjaGrupnog,
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

/* Započeti kviz se pamti u sessionStorage (osvježavanje stranice ne briše napredak) */
function ucitajNastavak(kljuc, duzina, uBazenu) {
	if (!kljuc) return null;
	try {
		const s = JSON.parse(window.sessionStorage.getItem(kljuc));
		if (
			s &&
			Array.isArray(s.poredak) &&
			s.poredak.length === duzina &&
			s.poredak.every((i) => i >= 0 && i < uBazenu) &&
			Array.isArray(s.rezultati) &&
			s.rezultati.length === s.idx &&
			s.idx > 0 &&
			s.idx < duzina
		)
			return s;
	} catch (e) {}
	return null;
}

function zapamti(kljuc, stanje) {
	if (!kljuc) return;
	try {
		if (stanje) window.sessionStorage.setItem(kljuc, JSON.stringify(stanje));
		else window.sessionStorage.removeItem(kljuc);
	} catch (e) {}
}

/*
 * Kviz: uvod → pitanja (jedno po jedno, s povratnom informacijom) → rezultat.
 * props.broj – "1"…"22" (kviz lekcije, za vježbu), "g1"…"g5" (grupni kviz) ili "zavrsni".
 * props.pitanja/props.koliko – mualimov kviz od proizvoljne kombinacije lekcija (rezultat se ne sprema).
 * Položen grupni kviz prijavljenom korisniku otključava sljedeći grupni kviz, a posljednji završni.
 */
export default function LessonQuiz({ broj, pitanja: vlastitiBazen, koliko, naslov }) {
	const jeVlastiti = !broj;
	const jeZavrsni = broj === ZAVRSNI;
	const jeGrupni = !jeVlastiti && jeKljucGrupe(broj);
	const g = jeGrupni ? brojGrupe(broj) : null;
	const n = jeVlastiti || jeZavrsni || jeGrupni ? null : parseInt(broj, 10);

	const kljuc = jeVlastiti ? null : jeZavrsni ? ZAVRSNI : jeGrupni ? broj : String(n);
	const bazen = jeVlastiti
		? vlastitiBazen || []
		: jeZavrsni ? ZAVRSNI_PITANJA : jeGrupni ? bazenGrupe(g) : (QUIZ[n] && QUIZ[n].pitanja) || [];
	/* grupni kviz izvlači 20 pitanja iz bazena cijele grupe; kviz lekcije ide redom */
	const zeljeno = jeVlastiti ? koliko || bazen.length : jeGrupni ? UKUPNO_GRUPA : bazen.length;
	const ukupno = Math.min(zeljeno, bazen.length);
	const prolaz = jeZavrsni
		? PROLAZ_ZAVRSNI
		: jeGrupni ? PROLAZ_GRUPA : jeVlastiti ? Math.ceil(ukupno * 0.7) : PROLAZ;
	const mijesa = jeZavrsni || jeGrupni || jeVlastiti;
	/* pitanja iz bazena nose broj lekcije → moguća je preporuka za ponavljanje */
	const poLekcijama = jeZavrsni || jeGrupni || jeVlastiti;
	const storageKey = jeZavrsni ? 'tedzvid-zavrsni-kviz' : jeGrupni ? 'tedzvid-kviz-' + kljuc : null;

	const { lang } = useLang();
	const ui = useUI();
	const location = useLocation();
	const { user, loading, progress, isUnlocked, saveResult } = useAuth();
	const ref = useRef(null);

	const [ faza, setFaza ] = useState('uvod'); /* uvod | pitanja | rezultat */
	const [ poredak, setPoredak ] = useState(null); /* redoslijed pitanja (izmiješan osim kod kviza lekcije) */
	const [ idx, setIdx ] = useState(0);
	const [ izbor, setIzbor ] = useState(null);
	const [ potvrdjeno, setPotvrdjeno ] = useState(false);
	const [ rezultati, setRezultati ] = useState([]); /* true/false po pitanju */
	const [ spremanje, setSpremanje ] = useState(''); /* '' | saving | saved | error */
	const [ nastavak ] = useState(() => ucitajNastavak(storageKey, ukupno, bazen.length));

	if (!ukupno) return null;

	const pick = (f) => (f && (f[lang] !== undefined ? f[lang] : f[DEFAULT_LANG])) || '';
	const izabrana = poredak ? poredak.map((i) => bazen[i]) : bazen;
	const tacnih = rezultati.filter(Boolean).length;
	const polozeno = tacnih >= prolaz;
	const prije = kljuc ? progress[kljuc] : null;
	const vecPolozeno = !!kljuc && jePolozena(progress, kljuc);
	const sljedeca = n ? sljedecaLekcija(n) : null;
	const sljedecaG = jeGrupni ? sljedecaGrupa(g) : null;
	const from = location.pathname + (jeZavrsni || jeGrupni || jeVlastiti ? '' : '#kviz');
	const velikiKviz = ukupno > 20;
	const info = jeGrupni ? grupa(g) : null;
	/* sljedeći korak nudimo tek kad je stvarno otključan (rezultat je spremljen na server) */
	const otkljucanSljedeci = jeGrupni && (sljedecaG ? isUnlocked(kljucGrupe(sljedecaG)) : isUnlocked(ZAVRSNI));
	const mojaGrupa = n ? grupaLekcije(n) : null;

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
		zapamti(storageKey, stanje);
		uVidnoPolje();
	};

	const start = () =>
		pokreni({ poredak: mijesa ? promijesaj(bazen.length).slice(0, ukupno) : null, idx: 0, rezultati: [] });
	const nastavi = () => nastavak && pokreni(nastavak);

	const potvrdi = () => {
		if (izbor === null) return;
		setRezultati(rezultati.concat(izbor === izabrana[idx].tacno));
		setPotvrdjeno(true);
	};

	const dalje = () => {
		if (idx + 1 < ukupno) {
			setIdx(idx + 1);
			setIzbor(null);
			setPotvrdjeno(false);
			zapamti(storageKey, { poredak, idx: idx + 1, rezultati });
		} else {
			setFaza('rezultat');
			zapamti(storageKey, null);
			if (kljuc) spremi(tacnih);
		}
		uVidnoPolje();
	};

	/* lekcije u kojima je bilo grešaka, za ponavljanje */
	const greskePoLekciji = {};
	if (poLekcijama && faza === 'rezultat') {
		rezultati.forEach((ok, i) => {
			if (!ok && izabrana[i].lekcija) greskePoLekciji[izabrana[i].lekcija] = (greskePoLekciji[izabrana[i].lekcija] || 0) + 1;
		});
	}
	const zaPonavljanje = Object.keys(greskePoLekciji).map(Number).sort((a, b) => a - b);

	const p = izabrana[idx];
	const naslovKviza = naslov || (jeZavrsni ? ui.zavrsniTitle : jeGrupni ? ui.grupaKvizNaslov(g) : ui.kviz);

	/* svaki kviz traži prijavu – gostu se umjesto pitanja nudi prijava/registracija */
	if (!user) {
		return (
			<section className="kviz" id="kviz" ref={ref}>
				<h2 className="text-center">
					<strong>{naslovKviza}</strong>
				</h2>
				<hr />
				<div className="kviz__card">
					{!loading && (
						<div className="kviz__intro kviz__gate">
							<div className="kviz__icon">
								<FaLock />
							</div>
							<h3>{ui.kvizLoginTitle}</h3>
							<p>{ui.kvizLoginText}</p>
							<div className="kviz__actions">
								<Link to={{ pathname: '/prijava', state: { from } }} className="btn-t btn-t--gold">
									<FaSignInAlt /> {ui.navPrijava}
								</Link>
								<Link to={{ pathname: '/registracija', state: { from } }} className="btn-t btn-t--outline">
									<FaUserPlus /> {ui.navRegistracija}
								</Link>
							</div>
						</div>
					)}
				</div>
			</section>
		);
	}

	const uvodniTekst = jeZavrsni
		? ui.zavrsniIntroText(ukupno, prolaz)
		: jeGrupni ? ui.grupaIntroText(ukupno, prolaz, info.od, info.do) : jeVlastiti ? ui.mualimIntroText(ukupno, prolaz) : ui.kvizIntroText(prolaz, ukupno);

	const rezultatTekst = jeZavrsni
		? polozeno ? ui.zavrsniPassedText : ui.zavrsniFailed(prolaz)
		: jeGrupni
			? polozeno ? (sljedecaG ? ui.grupaUnlocked(sljedecaG) : ui.grupaAllDone) : ui.kvizFailed(prolaz)
			: jeVlastiti ? (polozeno ? ui.mualimPassedText : ui.kvizFailed(prolaz)) : polozeno ? ui.kvizVjezbaPassed(mojaGrupa ? mojaGrupa.broj : 1) : ui.kvizFailed(prolaz);

	return (
		<section className={'kviz' + (jeZavrsni ? ' kviz--zavrsni' : '') + (jeGrupni ? ' kviz--grupa' : '')} id="kviz" ref={ref}>
			<h2 className="text-center">
				<strong>{naslovKviza}</strong>
			</h2>
			<hr />
			<div className="kviz__card">
				{faza === 'uvod' && (
					<div className="kviz__intro">
						<div className="kviz__icon">
							{jeZavrsni ? <FaGraduationCap /> : jeGrupni ? <FaLayerGroup /> : <FaClipboardCheck />}
						</div>
						<h3>{ui.kvizIntroTitle}</h3>
						<p>{uvodniTekst}</p>
						{prije && (
							<p className="kviz__best">
								{vecPolozeno && <FaCheck />} {ui.kvizBest(prije.najbolje, ukupno)}
							</p>
						)}
						{vecPolozeno && jeGrupni && <p className="kviz__note">{ui.grupaAlreadyPassed}</p>}
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
								{poLekcijama && p.lekcija && <span className="kviz__tag">{ui.kvizNextLesson(p.lekcija)}</span>}
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
									{izabrana.map((_, i) => (
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
						<p>{rezultatTekst}</p>
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

						{kljuc &&
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
						)}

						<div className="kviz__actions">
							<button type="button" className="btn-t btn-t--ghost" onClick={start}>
								<FaRedo /> {ui.kvizRestart}
							</button>
							{/* kviz lekcije je vježba: vodi dalje na sljedeću lekciju, a na kraju grupe na grupni kviz */}
							{n &&
							sljedeca && (
								<Link to={putanjaLekcije(sljedeca)} className="btn-t btn-t--gold">
									{ui.kvizNextLesson(sljedeca)} <FaArrowRight />
								</Link>
							)}
							{n &&
							mojaGrupa &&
							n === mojaGrupa.do && (
								<Link to={putanjaGrupnog(mojaGrupa.broj)} className={'btn-t ' + (sljedeca ? 'btn-t--navy' : 'btn-t--gold')}>
									<FaLayerGroup /> {ui.grupaKvizNaslov(mojaGrupa.broj)}
								</Link>
							)}
							{jeGrupni &&
							otkljucanSljedeci &&
							(sljedecaG ? (
								<Link to={putanjaGrupnog(sljedecaG)} className="btn-t btn-t--gold">
									<FaLayerGroup /> {ui.grupaKvizNaslov(sljedecaG)} <FaArrowRight />
								</Link>
							) : (
								<Link to={putanjaZavrsnog} className="btn-t btn-t--gold">
									<FaGraduationCap /> {ui.zavrsniTitle}
								</Link>
							))}
							{jeZavrsni && (
								<Link to={polozeno ? '/profil' : '/lekcije'} className="btn-t btn-t--gold">
									{polozeno ? ui.navProfil : ui.sveLekcije} <FaArrowRight />
								</Link>
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
