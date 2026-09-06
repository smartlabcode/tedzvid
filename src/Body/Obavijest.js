import React, { useEffect } from 'react';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';

function Obavijest() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<SiteNav />
			<PageBand
				eyebrow="Obavijest"
				title="Upozorenje"
				text="Prepoznali smo da vaš pretraživač možda neće najbolje učitati lekcije ili harfove."
			/>
			<main className="notice-page">
				<div className="wrap">
					<div className="notice-page__card">
						<p>
							Poštovani posjetioče stranice <strong>tedzvid.ba</strong>, pozivamo vas da ažurirate postojeći
							ili koristite drugi pretraživač kako bi se stranica ispravno učitala.
						</p>

						<h3>Testirane verzije za Windows 10, 8.1, 8, 7 i macOS</h3>
						<ul>
							<li>Chrome: 76+ verzije</li>
							<li>Firefox: 44+ verzije</li>
							<li>Opera: 63+ verzije</li>
							<li>Edge: sve verzije</li>
						</ul>

						<h3>Windows XP</h3>
						<ul>
							<li>Firefox: 44+ verzije</li>
						</ul>

						<h3>Nepodržani pretraživači</h3>
						<ul>
							<li>
								Internet Explorer: <span className="no">nijedna verzija</span>
							</li>
							<li>
								Safari: <span className="no">nijedna verzija</span>
							</li>
						</ul>

						<h3>Android</h3>
						<ul>
							<li>Chrome: 76+ verzije</li>
							<li>Firefox: 44+ verzije</li>
						</ul>

						<p style={{ marginTop: '28px', textAlign: 'right' }}>Hvala na razumijevanju.</p>
					</div>
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}

export default Obavijest;
