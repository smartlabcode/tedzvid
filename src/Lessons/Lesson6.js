import React from "react";
import { useTranslation } from "react-i18next";
import Lesson6_bs from "../Components/Lesson6_bs";
import Lesson6_de from "../Components/Lesson6_de";
import Lesson6_en from "../Components/Lesson6_en";
import "../App.scss";
import { scrollToHash } from "./Lesson1";

function L6() {
  const { i18n } = useTranslation();
  React.useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <>
      {i18n.language == "bs" ? (
        <Lesson6_bs />
      ) : i18n.language == "en" ? (
        <Lesson6_en />
      ) : (
        <Lesson6_de />
      )}
    </>
  );
}

export default L6;
