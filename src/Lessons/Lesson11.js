import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson11_bs from '../Components/Lesson11_bs';
import Lesson11_en from '../Components/Lesson11_en';



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
				i18n.language == 'bs' ? <Lesson11_bs/>:<Lesson11_en/>
			}
			</>
		</React.Fragment>
	);
}
export default L1;
