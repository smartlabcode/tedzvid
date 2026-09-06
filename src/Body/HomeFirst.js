import React from 'react';
import { Link } from 'react-router-dom';
import {
	FaBookOpen,
	FaPencilAlt,
	FaTable,
	FaListUl,
	FaPlayCircle,
	FaLock,
	FaCheck,
	FaRedo,
	FaClipboardCheck,
	FaSignInAlt,
	FaUserPlus
} from 'react-icons/fa';
import data from '../Data/lessons.json';
import { useAuth } from '../auth/AuthContext';
import { UKUPNO, trenutnaLekcija, putanjaKviza } from '../auth/progress';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

/* Naslovi lekcija su u lessons.json po jezicima: { bs: '…', en: '…' } */
const pick = (field, lang) => (typeof field === 'string' ? field : field[lang] || field[DEFAULT_LANG]);

function HomeFirst(props) {
	const { lang } = useLang();
	const ui = useUI();
	const { user, loading, progress, isUnlocked } = useAuth();
	const lekcije = data['lekcije'].reduce((acc, curr) => acc.concat(curr), []);
	const trenutna = trenutnaLekcija(progress) || 1;

	return (
		<div className={'lessons__grid' + (loading ? ' is-loading' : '')}>
			{lekcije.map((lekcija, index) => {
				const number = props.start + index + 1;
				const base = '/lekcija' + number;
				const p = progress[String(number)];
				const polozeno = !!(p && p.polozeno);
				const locked = !loading && !isUnlocked(number);
				return (
					<article
						className={'lesson-card' + (locked ? ' is-locked' : '') + (polozeno ? ' is-done' : '')}
						key={index}
					>
						<div className="lesson-card__num" aria-hidden="true">
							{number}
							{locked && (
								<span className="lesson-card__badge">
									<FaLock />
								</span>
							)}
							{polozeno && (
								<span className="lesson-card__badge">
									<FaCheck />
								</span>
							)}
						</div>
						<div className="lesson-card__body">
							<h3 className="lesson-card__title">{pick(lekcija.title, lang).trim()}</h3>
							<p className="lesson-card__sub">{pick(lekcija.subtitle, lang)}</p>
							{p && (
								<div className="lesson-card__status">
									<span className={'status-pill status-pill--' + (polozeno ? 'ok' : 'partial')}>
										{polozeno ? <FaCheck /> : <FaRedo />} {polozeno ? ui.statusPolozeno : ui.statusNijePolozeno}
										{' · '}
										{p.najbolje}/{UKUPNO}
									</span>
								</div>
							)}
							{locked ? (
								<div className="lesson-card__locked">
									<p>{user ? ui.cardUnlockHint(trenutna) : ui.cardUnlockGuest}</p>
									<div className="lesson-card__actions">
										{user ? (
											<Link to={putanjaKviza(trenutna)} className="btn-t btn-t--navy btn-t--sm">
												<FaClipboardCheck /> {ui.cardGoQuiz(trenutna)}
											</Link>
										) : (
											<React.Fragment>
												<Link to="/prijava" className="btn-t btn-t--navy btn-t--sm">
													<FaSignInAlt /> {ui.navPrijava}
												</Link>
												<Link to="/registracija" className="btn-t btn-t--ghost btn-t--sm">
													<FaUserPlus /> {ui.navRegistracija}
												</Link>
											</React.Fragment>
										)}
									</div>
								</div>
							) : (
								<div className="lesson-card__actions">
									<Link to={base + '#lekcija'} className="btn-t btn-t--navy btn-t--sm">
										<FaBookOpen /> {ui.cardLekcija}
									</Link>
									<Link to={base + '#vjezba'} className="btn-t btn-t--ghost btn-t--sm">
										<FaPencilAlt /> {ui.cardVjezba}
									</Link>
									<Link to={base + '#video'} className="btn-t btn-t--ghost btn-t--sm">
										<FaPlayCircle /> {ui.cardVideo}
									</Link>
									{index === 0 && (
										<Link to={base + '#tabela'} className="btn-t btn-t--ghost btn-t--sm">
											<FaTable /> {ui.cardTabela}
										</Link>
									)}
									{index === 0 && (
										<Link to={base + '#znakovi'} className="btn-t btn-t--ghost btn-t--sm">
											<FaListUl /> {ui.cardZnakovi}
										</Link>
									)}
									<Link to={putanjaKviza(number)} className="btn-t btn-t--ghost btn-t--sm">
										<FaClipboardCheck /> {ui.cardKviz}
									</Link>
								</div>
							)}
						</div>
					</article>
				);
			})}
		</div>
	);
}

export default HomeFirst;
