import React from "react";
import { useTranslation } from "react-i18next";
import Lesson4_bs from "../Components/Lesson4_bs";
import Lesson4_en from "../Components/Lesson4_en";
import Lesson4_de from "../Components/Lesson4_de";

import "../App.scss";
import { scrollToHash } from "./Lesson1";

function L4() {
  const { i18n } = useTranslation();
  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <>
      {i18n.language == "bs" ? (
        <Lesson4_bs />
      ) : i18n.language == "en" ? (
        <Lesson4_en />
      ) : (
        <Lesson4_de />
      )}
    </>
  );
}

export default L4;
