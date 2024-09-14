import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson10_bs from '../Components/Lesson10_bs';
import Lesson10_en from '../Components/Lesson10_en';



// Other
import '../App.scss';
import '../LandingPage.scss';
import { scrollToHash } from "./Lesson1";


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
				i18n.language == 'bs' ? <Lesson10_bs/>:<Lesson10_en/>
			}
			</>
		</React.Fragment>
	);
}
export default L1;
