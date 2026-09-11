import React, { useEffect, useMemo, useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { Container } from '../ui/Bootstrap';
import { FaLock, FaChalkboardTeacher, FaClipboardCheck, FaRedo } from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import LessonQuiz from '../Quiz/LessonQuiz';
import { bazenZaLekcije } from '../Data/Quiz/bazen';
import data from '../Data/lessons.json';
import { useAuth } from '../auth/AuthContext';
import { BROJ_LEKCIJA, GRUPE, IZBOR_PITANJA } from '../auth/progress';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

const pick = (field, lang) => (typeof field === 'string' ? field : field[lang] || field[DEFAULT_LANG]);
const LEKCIJE = data['lekcije'].reduce((acc, curr) => acc.concat(curr), []);

/* '1,3,7' → [1, 3, 7]; propušta samo postojeće brojeve lekcija */
function izPutanje(search) {
	const params = new URLSearchParams(search);
	const lekcije = String(params.get('l') || '')
		.split(',')
		.map((v) => parseInt(v, 10))
		.filter((n) => n >= 1 && n <= BROJ_LEKCIJA);
	const koliko = parseInt(params.get('n'), 10);
	return {
		lekcije: Array.from(new Set(lekcije)).sort((a, b) => a - b),
		koliko: koliko > 0 ? koliko : 0
	};
}

/*
 * Mualimova stranica (/mualim): kviz od proizvoljne kombinacije lekcija.
 * Izbor stoji u adresi (?l=1,2,5&n=20) pa se kviz može spremiti u zabilješke.
 * Rezultat se ne upisuje u napredak – ovo je alat za provjeru u razredu.
 */
export default function MualimPage() {
	const { user, loading, isMualim } = useAuth();
	const { lang } = useLang();
	const ui = useUI();
	const history = useHistory();
	const location = useLocation();

	const izAdrese = izPutanje(location.search);
	const [ odabrane, setOdabrane ] = useState(izAdrese.lekcije);
	const [ koliko, setKoliko ] = useState(izAdrese.koliko || IZBOR_PITANJA[1]);
	const [ kviz, setKviz ] = useState(() => (izAdrese.lekcije.length ? izAdrese : null));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const bazen = useMemo(() => bazenZaLekcije(odabrane), [ odabrane ]);
	const bazenKviza = useMemo(() => (kviz ? bazenZaLekcije(kviz.lekcije) : []), [ kviz ]);

	if (!loading && !user) return <Redirect to={{ pathname: '/prijava', state: { from: '/mualim' } }} />;

	const prebaci = (n) =>
		setOdabrane(odabrane.includes(n) ? odabrane.filter((v) => v !== n) : odabrane.concat(n).sort((a, b) => a - b));

	const postavi = (lekcije) => setOdabrane(lekcije);

	const napravi = () => {
		if (!odabrane.length) return;
		const izbor = { lekcije: odabrane, koliko };
		setKviz(izbor);
		history.replace('/mualim?l=' + odabrane.join(',') + '&n=' + koliko);
		window.scrollTo(0, 0);
	};

	const nazad = () => {
		setKviz(null);
		history.replace('/mualim');
		window.scrollTo(0, 0);
	};

	return (
		<React.Fragment>
			<SiteNav active="mualim" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand eyebrow={ui.mualimEyebrow} title={ui.mualimTitle} text={ui.mualimText} />
			<main className={'mualim' + (loading ? ' gate--loading' : '')}>
				<div className="wrap">
					{!loading &&
					user &&
					!isMualim && (
						<div className="gate__card">
							<div className="gate__icon">
								<FaLock />
							</div>
							<p>{ui.mualimForbidden}</p>
						</div>
					)}

					{isMualim &&
					!kviz && (
						<div className="mualim__builder">
							<div className="mualim__blok">
								<h3>{ui.mualimSelect}</h3>
								<div className="mualim__precice">
									<button
										type="button"
										className="btn-t btn-t--ghost btn-t--sm"
										onClick={() => postavi(LEKCIJE.map((_, i) => i + 1))}
									>
										{ui.mualimAll}
									</button>
									<button type="button" className="btn-t btn-t--ghost btn-t--sm" onClick={() => postavi([])}>
										{ui.mualimNone}
									</button>
									{GRUPE.map((g) => (
										<button
											key={g.broj}
											type="button"
											className="btn-t btn-t--ghost btn-t--sm"
											onClick={() => postavi(g.lekcije)}
										>
											{ui.grupaEyebrow(g.broj)}
										</button>
									))}
								</div>
								<ul className="mualim__lekcije">
									{LEKCIJE.map((lekcija, i) => {
										const n = i + 1;
										const izabrana = odabrane.includes(n);
										return (
											<li key={n}>
												<label className={'mualim__lekcija' + (izabrana ? ' is-on' : '')}>
													<input type="checkbox" checked={izabrana} onChange={() => prebaci(n)} />
													<b>{n}</b>
													<span>{pick(lekcija.title, lang).trim()}</span>
												</label>
											</li>
										);
									})}
								</ul>
							</div>

							<div className="mualim__blok">
								<h3>{ui.mualimCount}</h3>
								<div className="mualim__precice">
									{IZBOR_PITANJA.map((n) => (
										<button
											key={n}
											type="button"
											className={'btn-t btn-t--sm ' + (koliko === n ? 'btn-t--navy' : 'btn-t--ghost')}
											onClick={() => setKoliko(n)}
										>
											{n}
										</button>
									))}
									<button
										type="button"
										className={'btn-t btn-t--sm ' + (koliko === 0 ? 'btn-t--navy' : 'btn-t--ghost')}
										onClick={() => setKoliko(0)}
									>
										{ui.mualimCountAll}
									</button>
								</div>
								<p className="mualim__info">{ui.mualimPicked(odabrane.length, bazen.length)}</p>
								{!odabrane.length && <p className="mualim__prazno">{ui.mualimEmpty}</p>}
								<div className="lesson-card__actions">
									<button
										type="button"
										className="btn-t btn-t--gold"
										disabled={!odabrane.length}
										onClick={napravi}
									>
										<FaClipboardCheck /> {ui.mualimCreate}
									</button>
								</div>
							</div>
						</div>
					)}

					{isMualim &&
					kviz && (
						<div className="mualim__kviz">
							<div className="lesson-card__actions mualim__nazad">
								<button type="button" className="btn-t btn-t--ghost btn-t--sm" onClick={nazad}>
									<FaRedo /> {ui.mualimNew}
								</button>
								<span className="mualim__info">
									<FaChalkboardTeacher /> {ui.mualimPicked(kviz.lekcije.length, bazenKviza.length)}
								</span>
							</div>
							<Container>
								<LessonQuiz
									key={kviz.lekcije.join('-') + ':' + kviz.koliko}
									pitanja={bazenKviza}
									koliko={kviz.koliko}
									naslov={ui.mualimQuizTitle}
								/>
							</Container>
						</div>
					)}
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}
