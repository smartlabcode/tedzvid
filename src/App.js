/* Kenan Babačić - SmartLab.ba */

import React from 'react';

import ListRoutes from './Body/ListRoutes';

// import ReactGA from 'react-ga';

// import Container from 'react-bootstrap/Container';
import { BrowserRouter } from 'react-router-dom';

function App() {
	// useEffect(() => {
	// 	const trackingId = 'UA-179006564-1y';
	// 	ReactGA.initialize(trackingId);
	// ReactGA.set({ page: location.pathname }); // Update the user's current page
	// ReactGA.pageview(location.pathname); // Record a pageview for the given page
	// });
	console.log("HI : )");
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<ListRoutes />
		</BrowserRouter>
	);
}

export default App;
