import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson9_bs from '../Components/Lesson9_bs';
import Lesson9_en from '../Components/Lesson9_en';



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
				i18n.language == 'bs' ? <Lesson9_bs/>:<Lesson9_en/>
			}
			</>
		</React.Fragment>
	);
}
export default L1;
