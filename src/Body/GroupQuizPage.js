import React, { useEffect } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { Container } from '../ui/Bootstrap';
import { FaLock, FaLayerGroup, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import LessonQuiz from '../Quiz/LessonQuiz';
import { useAuth } from '../auth/AuthContext';
import { UKUPNO_GRUPA, PROLAZ_GRUPA, grupa, kljucGrupe, putanjaGrupnog } from '../auth/progress';
import { useUI } from '../i18n/ui';

/*
 * Kviz jedne grupe lekcija (/kviz-grupa1 … /kviz-grupa5): 20 pitanja iz lekcija te grupe.
 * Prvi je otvoren svima; svaki sljedeći traži položen prethodni (napredak se čuva uz račun).
 */
export default function GroupQuizPage({ broj }) {
	const { user, loading, isUnlocked } = useAuth();
	const ui = useUI();
	const location = useLocation();
	const info = grupa(broj);

	useEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ broj ]
	);

	if (!info) return <Redirect to="/lekcije" />;

	const kljuc = kljucGrupe(broj);
	const otkljucan = !loading && isUnlocked(kljuc);
	const from = location.pathname;

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand
				eyebrow={ui.grupaKvizEyebrow(broj)}
				title={ui.grupaKvizNaslov(broj)}
				text={ui.grupaKarticaTekst(UKUPNO_GRUPA, info.od, info.do, PROLAZ_GRUPA)}
			/>
			{otkljucan ? (
				<div className="lekcija-page">
					<Container>
						<LessonQuiz broj={kljuc} />
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
								<h2>{ui.grupaLockedTitle}</h2>
								<p>{user ? ui.grupaLockedUser(broj - 1) : ui.grupaLockedGuest}</p>
								<div className="gate__actions">
									{user ? (
										<Link to={putanjaGrupnog(broj - 1)} className="btn-t btn-t--gold">
											<FaLayerGroup /> {ui.grupaKvizNaslov(broj - 1)}
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
