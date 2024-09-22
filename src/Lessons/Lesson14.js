import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";
import Lesson14_bs from "../Components/Lesson14_bs";
import Lesson14_en from "../Components/Lesson14_en";
import Lesson14_de from "../Components/Lesson14_de";

import { scrollToHash } from "./Lesson1";

import "../App.scss";

function L14() {
  const { i18n } = useTranslation();

  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <>
      {i18n.language === "bs" ? (
        <Lesson14_bs />
      ) : i18n.language === "de" ? (
        <Lesson14_de />
      ) : (
        <Lesson14_en />
      )}
    </>
  );
}

export default L14;
