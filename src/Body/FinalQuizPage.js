import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaLock, FaClipboardCheck, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import LessonQuiz from '../Quiz/LessonQuiz';
import { useAuth } from '../auth/AuthContext';
import {
	ZAVRSNI,
	UKUPNO_ZAVRSNI,
	PROLAZ_ZAVRSNI,
	jeOtkljucanZavrsni,
	trenutnaLekcija,
	putanjaKviza
} from '../auth/progress';
import { useUI } from '../i18n/ui';

/* Završni kviz (/zavrsni-kviz): 100 pitanja iz svih lekcija; otključan kad su položene sve lekcije */
export default function FinalQuizPage() {
	const { user, loading, progress } = useAuth();
	const ui = useUI();
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const otkljucan = !loading && jeOtkljucanZavrsni(progress);
	const trenutna = trenutnaLekcija(progress) || 1;
	const from = location.pathname;

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand
				eyebrow={ui.zavrsniEyebrow}
				title={ui.zavrsniTitle}
				text={ui.zavrsniText(UKUPNO_ZAVRSNI, PROLAZ_ZAVRSNI)}
			/>
			{otkljucan ? (
				<div className="lekcija-page">
					<Container>
						<LessonQuiz broj={ZAVRSNI} />
					</Container>
				</div>
			) : (
				<main className={'gate' + (loading ? ' gate--loading' : '')}>
					<div className="wrap">
						{!loading && (
							<div className="gate__card">
								<div className="gate__icon">
									<FaLock />
								</div>
								<h2>{ui.zavrsniLockedTitle}</h2>
								<p>{user ? ui.zavrsniLockedUser(trenutna) : ui.zavrsniLockedGuest}</p>
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
			)}
			<SiteFooter />
		</React.Fragment>
	);
}
