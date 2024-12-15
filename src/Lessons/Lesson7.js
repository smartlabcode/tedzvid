import React from "react";

import { useTranslation } from "react-i18next";
import Lesson7_bs from "../Components/Lesson7_bs";
import Lesson7_en from "../Components/Lesson7_en";
import Lesson7_de from "../Components/Lesson7_de";

// Other
import "../App.scss";
import { scrollToHash } from "./Lesson1";

function L7() {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <>
      {i18n.language == "bs" ? (
        <Lesson7_bs />
      ) : i18n.language == "en" ? (
        <Lesson7_en />
      ) : (
        <Lesson7_de />
      )}
    </>
  );
}

export default L7;
