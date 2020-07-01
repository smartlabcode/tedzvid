import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Body/HomePage';
import Demo from './Body/LandingPage';

function LandingPage() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Route path="/home" exact component={Home} />
			<Route path="/" exact component={Demo} />
		</BrowserRouter>
	);
}
export default LandingPage;
