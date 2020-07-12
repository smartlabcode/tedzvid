import React from 'react';
import Demo from './Body/LandingPage';
import Home from './Body/HomePage';

import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route } from 'react-router-dom';

function LandingPage() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/home" exact component={Home} />
			<Route path="/" exact component={Demo} />
		</BrowserRouter>
	);
}
export default LandingPage;
