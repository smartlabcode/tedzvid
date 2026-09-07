import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLock, FaClipboardCheck, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import NowPlayingBar from '../Player/NowPlayingBar';
import { useAuth } from '../auth/AuthContext';
import { BONUS, trenutnaLekcija, putanjaKviza } from '../auth/progress';
import vrstaTekstovi from '../Lessons/bonusVrste';
import { useUI } from '../i18n/ui';

/* Lekcije s kur'anskim tekstom su velike, pa se dovlače tek kad ih korisnik otvori */
const LEKCIJE = {
	fatiha: React.lazy(() => import('../Lessons/Fatiha')),
	kursij: React.lazy(() => import('../Lessons/Kursij')),
	mulk: React.lazy(() => import('../Lessons/Mulk')),
	jasin: React.lazy(() => import('../Lessons/Yasin')),
	amme: React.lazy(() => import('../Lessons/AmmeDzuz'))
};

/*
 * Čuvar bonus lekcije s kur'anskim tekstom: otvara se tek kad su položeni
 * kvizovi svih 22 lekcije. `vrsta` bira lekciju i njene natpise.
 */
export default function BonusPage({ vrsta }) {
	const { user, loading, progress, isUnlocked } = useAuth();
	const ui = useUI();
	const location = useLocation();
	const T = vrstaTekstovi(ui, vrsta);
	const Lekcija = LEKCIJE[vrsta];

	React.useEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ vrsta ]
	);

	const otkljucana = !loading && isUnlocked(BONUS);
	const trenutna = trenutnaLekcija(progress) || 1;
	const from = location.pathname;

	if (otkljucana && Lekcija) {
		return (
			<React.Suspense
				fallback={
					<React.Fragment>
						<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
						<PageBand eyebrow={T.eyebrow} title={T.naslov} />
						<main className="gate gate--loading">
							<div className="wrap" />
						</main>
					</React.Fragment>
				}
			>
				<Lekcija />
				<NowPlayingBar />
			</React.Suspense>
		);
	}

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand eyebrow={T.eyebrow} title={T.naslov} text={T.podnaslov} />
			<main className={'gate' + (loading ? ' gate--loading' : '')}>
				<div className="wrap">
					{!loading && (
						<div className="gate__card">
							<div className="gate__icon">
								<FaLock />
							</div>
							<h2>{T.zakljucanNaslov}</h2>
							<p>{user ? T.zakljucanKorisnik(trenutna) : T.zakljucanGost}</p>
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
