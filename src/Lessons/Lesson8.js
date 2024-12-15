import React from "react";

import { useTranslation } from "react-i18next";
import Lesson8_bs from "../Components/Lesson8_bs";
import Lesson8_en from "../Components/Lesson8_en";
import Lesson8_de from "../Components/Lesson8_de";

// Other
import "../App.scss";
import "../LandingPage.scss";
import { scrollToHash } from "./Lesson1";

function L8() {
  const { i18n } = useTranslation();
  console.log(i18n.language);

  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <>
      {i18n.language == "bs" ? (
        <Lesson8_bs />
      ) : i18n.language == "en" ? (
        <Lesson8_en />
      ) : (
        <Lesson8_de />
      )}
    </>
  );
}
export default L8;
