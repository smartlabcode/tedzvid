import React from "react";
import { useTranslation } from "react-i18next";
import Lesson2_bs from "../Components/Lesson2_bs";
import Lesson2_en from "../Components/Lesson2_en";

// Other
import "../App.scss";
import { scrollToHash } from "./Lesson1";
import Lesson2_de from "../Components/Lesson2_de";

function L2() {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <>
      <>
        {i18n.language == "bs" ? (
          <Lesson2_bs />
        ) : i18n.language == "en" ? (
          <Lesson2_en />
        ) : (
          <Lesson2_de />
        )}
      </>
    </>
  );
}

export default L2;
