import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './theme.scss';
import './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { oznaciPlatformu, pokreniNativno } from './native';

/* mobilna aplikacija (Capacitor): klasa na <html> prije prvog iscrtavanja */
oznaciPlatformu();

ReactDOM.render(<App />, document.getElementById('root'), () => {
	/* splash se gasi tek kad je prvi ekran iscrtan */
	pokreniNativno();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
