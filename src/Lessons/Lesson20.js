import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson20_bs from '../Components/Lesson20_bs';
import Lesson20_en from '../Components/Lesson20_en';
import Lesson20_de from "../Components/Lesson20_de";

import "../App.scss";
import { scrollToHash } from "./Lesson1";


function L20() {
	const { i18n } = useTranslation();
  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <React.Fragment>
      {i18n.language === "bs" ? (
        <Lesson20_bs />
      ) : i18n.language === "de" ? (
        <Lesson20_de />
      ) : (
        <Lesson20_en />
      )}
    </React.Fragment>
  );
}

export default L20;
