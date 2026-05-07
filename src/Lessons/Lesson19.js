import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson19_bs from '../Components/Lesson19_bs';
import Lesson19_en from '../Components/Lesson19_en';
import Lesson19_de from "../Components/Lesson19_de";

import "../App.scss";

function scrollToHash() {
  /* Obtain hash from current location (and trim off leading #) */
  const id = window.location.hash.substr(1);

  if (id) {
    /* Find matching element by id */
    const anchor = document.getElementById(id);

    if (anchor) {
      /* Scroll to that element if present */
      anchor.scrollIntoView();
    }
  }
}

function L19() {
	const { i18n } = useTranslation();
  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <React.Fragment>
      {i18n.language === "bs" ? (
        <Lesson19_bs />
      ) : i18n.language === "de" ? (
        <Lesson19_de />
      ) : (
        <Lesson19_en />
      )}
    </React.Fragment>
  );
}

export default L19;
