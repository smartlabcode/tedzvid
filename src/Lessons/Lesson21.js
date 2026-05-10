import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson21_bs from '../Components/Lesson21_bs';
import Lesson21_en from '../Components/Lesson21_en';
import Lesson21_de from "../Components/Lesson21_de";

import "../App.scss";
import { scrollToHash } from "./Lesson1";


function L21() {
	const { i18n } = useTranslation();
  
  React.useEffect(() => {
    scrollToHash();
  }, []);
  
  return (
    <React.Fragment>
      {i18n.language === "bs" ? (
        <Lesson21_bs />
      ) : i18n.language === "de" ? (
        <Lesson21_de />
      ) : (
        <Lesson21_en />
      )}
    </React.Fragment>
  );
}

export default L21;
