import React from 'react';
import SiteNav from './SiteNav';
import PageBand from './PageBand';
import NowPlayingBar from '../Player/NowPlayingBar';
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

/* Bonus lekcija s kur'anskim tekstom; `vrsta` bira lekciju i njene natpise. Otvorena je svima. */
export default function BonusPage({ vrsta }) {
	const ui = useUI();
	const T = vrstaTekstovi(ui, vrsta);
	const Lekcija = LEKCIJE[vrsta] || LEKCIJE.fatiha;

	React.useEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ vrsta ]
	);

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
