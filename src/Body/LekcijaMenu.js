import React from 'react';
import SiteNav from './SiteNav';
import PageBand from './PageBand';

/* Zaglavlje pojedine lekcije: navigacija + tamnoplava traka s brojem i nazivom */
function LekcijaMenu(props) {
	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/lekcije', label: 'Sve lekcije', back: true }} />
			<PageBand eyebrow={'Lekcija ' + props.broj} title={props.naziv} />
		</React.Fragment>
	);
}

export default LekcijaMenu;
