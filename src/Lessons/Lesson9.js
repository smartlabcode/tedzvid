import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson9_bs from '../Components/Lesson9_bs';
import Lesson9_en from '../Components/Lesson9_en';



// Other
import '../App.scss';
import '../LandingPage.scss';
import { scrollToHash } from "./Lesson1";
import Lesson9_de from "../Components/Lesson9_de";


function L1() {
	const { i18n } = useTranslation();
	console.log(i18n.language)

	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
    <>
      {i18n.language == "bs" ? (
        <Lesson9_bs />
      ) : i18n.language == "en" ? (
        <Lesson9_en />
      ) : (
        <Lesson9_de />
      )}
    </>
  );
}
export default L1;
