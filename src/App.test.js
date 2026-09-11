import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/*
 * Dimni test: aplikacija se montira i odmontira bez greške.
 *
 * Od Reacta 18 se montira preko createRoot, a act() natjera Reacta da izvrši i
 * efekte – pa test prolazi kroz useEffect u komponentama, što stari
 * ReactDOM.render ovdje nikad nije stizao.
 */
global.IS_REACT_ACT_ENVIRONMENT = true; /* bez ovoga act() upozorava */

/* jsdom nema window.scrollTo, a react-ga traži da u dokumentu već stoji neki
   <script> da bi ubacio svoj. Oboje postoji u pravom pregledniku. */
window.scrollTo = () => {};

jest.mock('react-ga', () => ({
	__esModule: true,
	default: { initialize: () => {}, set: () => {}, pageview: () => {} },
}));

it('renders without crashing', () => {
	const div = document.createElement('div');
	document.body.appendChild(div);

	const root = createRoot(div);
	act(() => {
		root.render(<App />);
	});
	act(() => {
		root.unmount();
	});

	document.body.removeChild(div);
});
