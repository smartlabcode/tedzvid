import React from 'react';
import SiteNav from './SiteNav';
import PageBand from './PageBand';
import { useUI } from '../i18n/ui';

/* Zaglavlje pojedine lekcije: navigacija + tamnoplava traka s brojem i nazivom */
function LekcijaMenu(props) {
	const ui = useUI();
	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand eyebrow={ui.lekcijaEyebrow + ' ' + props.broj} title={props.naziv} />
		</React.Fragment>
	);
}

export default LekcijaMenu;
