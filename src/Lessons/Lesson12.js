import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson12_bs from '../Components/Lesson12_bs';
import Lesson12_en from '../Components/Lesson12_en';
import Lesson12_de from "../Components/Lesson12_de";

// Other
import '../App.scss';
import { scrollToHash } from "./Lesson1";


function L12() {
	const { i18n } = useTranslation();

  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <>
      {i18n.language === "bs" ? (
        <Lesson12_bs />
      ) : i18n.language === "de" ? (
        <Lesson12_de />
      ) : (
        <Lesson12_en />
      )}
    </>
  );
}

export default L12;
