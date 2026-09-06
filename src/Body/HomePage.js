import React, { useEffect } from 'react';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import HomeFirst from './HomeFirst';

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/', label: 'Naslovna', back: true }} />
			<PageBand
				eyebrow="Interaktivni priručnik"
				title="Lekcije"
				text="Dvadeset dva tedžvidska pravila, korak po korak. Svaka lekcija donosi objašnjenje, zvučne primjere i vježbu."
			/>
			<main className="lessons">
				<div className="wrap">
					<HomeFirst start={0} stop={23} />
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}

export default Home;
