import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLock, FaClipboardCheck, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import NowPlayingBar from '../Player/NowPlayingBar';
import { useAuth } from '../auth/AuthContext';
import { BONUS, trenutnaLekcija, putanjaKviza } from '../auth/progress';
import { useUI } from '../i18n/ui';

/* Bonus lekcija s Amme džuzom je velika, pa se dovlači tek kad je korisnik otvori */
const AmmeDzuz = React.lazy(() => import('../Lessons/AmmeDzuz'));

/* Čuvar bonus lekcije (/amme-dzuz): otvara se tek kad su položeni kvizovi svih 22 lekcije */
export default function AmmeDzuzPage() {
	const { user, loading, progress, isUnlocked } = useAuth();
	const ui = useUI();
	const location = useLocation();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const otkljucana = !loading && isUnlocked(BONUS);
	const trenutna = trenutnaLekcija(progress) || 1;
	const from = location.pathname;

	if (otkljucana) {
		return (
			<React.Suspense
				fallback={
					<React.Fragment>
						<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
						<PageBand eyebrow={ui.ammeEyebrow} title={ui.ammeNaslov} />
						<main className="gate gate--loading">
							<div className="wrap" />
						</main>
					</React.Fragment>
				}
			>
				<AmmeDzuz />
				<NowPlayingBar />
			</React.Suspense>
		);
	}

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand eyebrow={ui.ammeEyebrow} title={ui.ammeNaslov} text={ui.ammePodnaslov} />
			<main className={'gate' + (loading ? ' gate--loading' : '')}>
				<div className="wrap">
					{!loading && (
						<div className="gate__card">
							<div className="gate__icon">
								<FaLock />
							</div>
							<h2>{ui.ammeZakljucanNaslov}</h2>
							<p>{user ? ui.ammeZakljucanKorisnik(trenutna) : ui.ammeZakljucanGost}</p>
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
