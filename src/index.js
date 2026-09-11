import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './theme.scss';
import './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { oznaciPlatformu, pokreniNativno } from './native';

/* mobilna aplikacija (Capacitor): klasa na <html> prije prvog iscrtavanja */
oznaciPlatformu();

/* createRoot nema povratni poziv kao stari ReactDOM.render, pa splash gasi
   efekat – on se izvršava tek nakon što je prvi ekran iscrtan. */
function Aplikacija() {
	useEffect(() => {
		pokreniNativno();
	}, []);

	return <App />;
}

createRoot(document.getElementById('root')).render(<Aplikacija />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
