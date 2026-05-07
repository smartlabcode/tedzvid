import React from 'react';
import { useTranslation } from "react-i18next";
import Lesson17_bs from '../Components/Lesson17_bs';
import Lesson17_en from '../Components/Lesson17_en';
import Lesson17_de from "../Components/Lesson17_de";

import '../App.scss';
import { scrollToHash } from "./Lesson1";


function L17() {
	const { i18n } = useTranslation();
	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
    <React.Fragment>
      {i18n.language === "bs" ? (
        <Lesson17_bs />
      ) : i18n.language === "de" ? (
        <Lesson17_de />
      ) : (
        <Lesson17_en />
      )}
    </React.Fragment>
  );
}

export default L17;
