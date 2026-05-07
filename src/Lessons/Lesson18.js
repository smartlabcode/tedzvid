import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson18_bs from '../Components/Lesson18_bs';
import Lesson18_en from '../Components/Lesson18_en';
import Lesson18_de from "../Components/Lesson18_de";


// Other
import '../App.scss';
import { scrollToHash } from "./Lesson1";


function L18() {
	const { i18n } = useTranslation();
	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
    <React.Fragment>
      {i18n.language === "bs" ? (
        <Lesson18_bs />
      ) : i18n.language === "de" ? (
        <Lesson18_de />
      ) : (
        <Lesson18_en />
      )}
    </React.Fragment>
  );
}

export default L18;
