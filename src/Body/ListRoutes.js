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
import { Route, useHistory } from 'react-router-dom';

const LEKCIJE = {
	'1': L1,
	'2': L2,
	'3': L3,
	'4': L4,
	'5': L5,
	'6': L6,
	'7': L7,
	'8': L8,
	'9': L9,
	'10': L10,
	'11': L11,
	'12': L12,
	'13': L13,
	'14': L14,
	'14_2': L14_2,
	'15': L15,
	'16': L16,
	'17': L17,
	'18': L18,
	'19': L19,
	'20': L20,
	'21': L21,
	'22': L22
};

function ListRoutes() {
	let history = useHistory();
	useEffect(() => {
		ReactGA.initialize('UA-179006564-1');
		ReactGA.set({ page: '/' });
		ReactGA.pageview('/');
	}, []);
	useEffect(
		() => {
			return history.listen((location) => {
				ReactGA.set({ page: location.pathname });
				ReactGA.pageview(location.pathname);
			});
		},
		[ history ]
	);
	return (
		<>
			<Route path="/" exact component={Demo} />
			<Route path="/lekcije" exact component={Home} />
			{Object.keys(LEKCIJE).map((key) => {
				const Lekcija = LEKCIJE[key];
				return (
					<Route
						key={key}
						path={'/lekcija' + key}
						render={() => (
							<div className="lekcija-page">
								<Lekcija />
							</div>
						)}
					/>
				);
			})}
			<Route path="/obavijest" component={Obavijest} />
		</>
	);
}

export default ListRoutes;
