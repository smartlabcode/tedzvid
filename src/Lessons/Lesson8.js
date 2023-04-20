import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson8_bs from '../Components/Lesson8_bs';
import Lesson8_en from '../Components/Lesson8_en';



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

function L8() {
	const { i18n } = useTranslation();
	console.log(i18n.language)

	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
		<React.Fragment>
			<>
			{
				i18n.language == 'bs' ? <Lesson8_bs/>:<Lesson8_en/>
			}
			</>
		</React.Fragment>
	);
}
export default L8;
