import React, { useEffect } from 'react';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import HomeFirst from './HomeFirst';
import FinalQuizCard from './FinalQuizCard';
import BonusKartica from './BonusKartica';
import { useUI } from '../i18n/ui';

function Home() {
	const ui = useUI();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/', label: ui.navNaslovna, back: true }} />
			<PageBand eyebrow={ui.lessonsEyebrow} title={ui.lessonsTitle} text={ui.lessonsText} />
			<main className="lessons">
				<div className="wrap">
					<HomeFirst />
					<FinalQuizCard />
					<BonusKartica vrsta="fatiha" />
					<BonusKartica vrsta="kursij" />
					<BonusKartica vrsta="mulk" />
					<BonusKartica vrsta="jasin" />
					<BonusKartica vrsta="amme" />
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}

export default Home;
