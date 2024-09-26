import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson13_bs from '../Components/Lesson13_bs';
import Lesson13_en from '../Components/Lesson13_en';
import Lesson13_de from "../Components/Lesson13_de";
import { scrollToHash } from "./Lesson1";

// Other
import "../App.scss";

function L13() {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <>
      {i18n.language === "bs" ? (
        <Lesson13_bs />
      ) : i18n.language === "de" ? (
        <Lesson13_de />
      ) : (
        <Lesson13_en />
      )}
    </>
  );
}

export default L13;
