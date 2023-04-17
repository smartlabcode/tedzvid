import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson1_bs from '../Components/Lesson1_bs';
import Lesson1_en from '../Components/Lesson1_en';



// Other
import '../App.scss';
import '../LandingPage.scss';

function scrollToHash() {
	/* Obtain hash from current location (and trim off leading #) */
	const id = window.location.hash.substr(1);

	if (id) {
		/* Find matching element by id */
		const anchor = document.getElementById(id);

		if (anchor) {
			/* Scroll to that element if present */
			anchor.scrollIntoView();
		}
	}
}

function L1() {
	const { i18n } = useTranslation();
	console.log(i18n.language)

	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
		<React.Fragment>
			<>
			{
				i18n.language == 'bs' ? <Lesson1_bs/>:<Lesson1_en/>
			}
			</>
		</React.Fragment>
	);
}
export default L1;
