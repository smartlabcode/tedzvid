import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson8_bs from '../Components/Lesson8_bs';
import Lesson8_en from '../Components/Lesson8_en';



// Other
import '../App.scss';
import '../LandingPage.scss';
import { scrollToHash } from "./Lesson1";


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
