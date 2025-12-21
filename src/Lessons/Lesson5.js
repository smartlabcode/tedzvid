import React from "react";
import { useTranslation } from "react-i18next";
import Lesson5_bs from "../Components/Lesson5_bs";
import Lesson5_en from "../Components/Lesson5_en";
import Lesson5_de from "../Components/Lesson5_de";

// Other
import "../App.scss";
import { scrollToHash } from "./Lesson1";

function L5() {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <>
      {i18n.language == "bs" ? (
        <Lesson5_bs />
      ) : i18n.language == "en" ? (
        <Lesson5_en />
      ) : (
        <Lesson5_de />
      )}
    </>
  );
}

export default L5;
