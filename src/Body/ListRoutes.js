/* Kenan Babačić - SmartLab.ba */

import React, { useEffect } from 'react';
import Home from './HomePage';
import Demo from './LandingPage';
import Obavijest from './Obavijest';
import {
	L1,
	L2,
	L3,
	L4,
	L5,
	L6,
	L7,
	L8,
	L9,
	L10,
	L11,
	L12,
	L13,
	L14,
	L14_2,
	L15,
	L16,
	L17,
	L18,
	L19,
	L20,
	L21,
	L22
} from '../Helpers/LessonsHelper';
import ReactGA from 'react-ga';

// import Container from 'react-bootstrap/Container';
import {  Route,useHistory } from 'react-router-dom';

function ListRoutes() {
	let history = useHistory();
	useEffect(() => {
		ReactGA.initialize('UA-179006564-1'); // put your tracking id here
		ReactGA.set({ page: '/' }); // Update the user's current page
		ReactGA.pageview('/'); // Record a pageview for the given page
	}, []);
	useEffect(
		() => {
			return history.listen((location) => {
				console.log(`You changed the page to: ${location.pathname} `);
				ReactGA.set({ page: location.pathname }); // Update the user's current page
  				ReactGA.pageview(location.pathname); // Record a pageview for the given page
			});
		},
		[ history ]
	);
	return (
		<>
			<Route path="/" exact component={Demo} />
			<Route path="/lekcije" exact component={Home} />
			<Route path="/lekcija1" component={L1} />
			<Route path="/lekcija2" component={L2} />
			<Route path="/lekcija3" component={L3} />
			<Route path="/lekcija4" component={L4} />
			<Route path="/lekcija5" component={L5} />
			<Route path="/lekcija6" component={L6} />
			<Route path="/lekcija7" component={L7} />
			<Route path="/lekcija8" component={L8} />
			<Route path="/lekcija9" component={L9} />
			<Route path="/lekcija10" component={L10} />
			<Route path="/lekcija11" component={L11} />
			<Route path="/lekcija12" component={L12} />
			<Route path="/lekcija13" component={L13} />
			<Route path="/lekcija14" component={L14} />
			<Route path="/lekcija14_2" component={L14_2} />
			<Route path="/lekcija15" component={L15} />
			<Route path="/lekcija16" component={L16} />
			<Route path="/lekcija17" component={L17} />
			<Route path="/lekcija18" component={L18} />
			<Route path="/lekcija19" component={L19} />
			<Route path="/lekcija20" component={L20} />
			<Route path="/lekcija21" component={L21} />
			<Route path="/lekcija22" component={L22} />
			<Route path="/obavijest" component={Obavijest} />
			</>
	);
}

export default ListRoutes;
