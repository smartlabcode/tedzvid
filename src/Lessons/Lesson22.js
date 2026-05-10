import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson22_bs from '../Components/Lesson22_bs';
import Lesson22_en from '../Components/Lesson22_en';
import Lesson22_de from "../Components/Lesson22_de";

import "../App.scss";
import { scrollToHash } from "./Lesson1";


function L22() {
	const { i18n } = useTranslation();
  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <React.Fragment>
      {i18n.language === "bs" ? (
        <Lesson22_bs />
      ) : i18n.language === "de" ? (
        <Lesson22_de />
      ) : (
        <Lesson22_en />
      )}
    </React.Fragment>
  );
}

export default L22;
