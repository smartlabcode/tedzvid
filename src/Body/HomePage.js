import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import HomeFirst, { GrupeNav } from './HomeFirst';
import FinalQuizCard from './FinalQuizCard';
import BonusKartica from './BonusKartica';
import { SIDRO_SURA } from '../auth/progress';
import { useUI } from '../i18n/ui';

function Home() {
	const ui = useUI();
	const { hash } = useLocation();
	const prvi = useRef(true);
	/* sidro u adresi (npr. #kuranske-sure iz menija) vodi na taj dio; bez sidra stranica se otvara na vrhu.
	   Pri otvaranju stranice skok je trenutan, a kad je stranica već otvorena, gladak. */
	useEffect(
		() => {
			const otvaranje = prvi.current;
			prvi.current = false;
			const sidro = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
			if (sidro) sidro.scrollIntoView({ behavior: otvaranje ? 'instant' : 'smooth', block: 'start' });
			else if (otvaranje) window.scrollTo({ top: 0, behavior: 'instant' });
		},
		[ hash ]
	);

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/', label: ui.navNaslovna, back: true }} />
			<PageBand eyebrow={ui.lessonsEyebrow} title={ui.lessonsTitle} text={ui.lessonsText}>
				<GrupeNav />
			</PageBand>
			<main className="lessons">
				<div className="wrap">
					<HomeFirst />
					<FinalQuizCard />
					<section className="lessons__sure" id={SIDRO_SURA}>
						<BonusKartica vrsta="fatiha" />
						<BonusKartica vrsta="kursij" />
						<BonusKartica vrsta="mulk" />
						<BonusKartica vrsta="jasin" />
						<BonusKartica vrsta="amme" />
						<BonusKartica vrsta="bekara" />
					</section>
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}

export default Home;
