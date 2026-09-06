import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLock, FaClipboardCheck, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import data from '../Data/lessons.json';
import { useAuth } from '../auth/AuthContext';
import { PROLAZ, UKUPNO, brojLekcije, trenutnaLekcija, putanjaKviza } from '../auth/progress';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

const pick = (field, lang) => (typeof field === 'string' ? field : field[lang] || field[DEFAULT_LANG]);

/*
 * Čuvar lekcije: otključanu lekciju prikazuje, za zaključanu prikazuje objašnjenje
 * (gostu: prijava/registracija; korisniku: link na kviz koji je treba položiti).
 */
export default function LessonGate({ lekcija, children }) {
	const { user, loading, progress, isUnlocked } = useAuth();
	const { lang } = useLang();
	const ui = useUI();
	const location = useLocation();

	if (!loading && isUnlocked(lekcija)) return children;

	const n = brojLekcije(lekcija);
	const lekcije = data['lekcije'].reduce((acc, curr) => acc.concat(curr), []);
	const info = lekcije[n - 1];
	const naziv = info ? pick(info.title, lang).trim() : '';
	const trenutna = trenutnaLekcija(progress) || 1;
	const from = location.pathname + location.hash;

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand eyebrow={ui.lekcijaEyebrow + ' ' + n} title={naziv} />
			<main className={'gate' + (loading ? ' gate--loading' : '')}>
				<div className="wrap">
					{!loading && (
						<div className="gate__card">
							<div className="gate__icon">
								<FaLock />
							</div>
							<h2>{ui.gateTitle}</h2>
							<p>{user ? ui.gateTextUser(trenutna, PROLAZ, UKUPNO) : ui.gateTextGuest}</p>
							<div className="gate__actions">
								{user ? (
									<Link to={putanjaKviza(trenutna)} className="btn-t btn-t--gold">
										<FaClipboardCheck /> {ui.cardGoQuiz(trenutna)}
									</Link>
								) : (
									<React.Fragment>
										<Link to={{ pathname: '/prijava', state: { from } }} className="btn-t btn-t--gold">
											<FaSignInAlt /> {ui.navPrijava}
										</Link>
										<Link to={{ pathname: '/registracija', state: { from } }} className="btn-t btn-t--outline">
											<FaUserPlus /> {ui.navRegistracija}
										</Link>
									</React.Fragment>
								)}
								<Link to="/lekcije" className="btn-t btn-t--ghost">
									{ui.sveLekcije}
								</Link>
							</div>
						</div>
					)}
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}
