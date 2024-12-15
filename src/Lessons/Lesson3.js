import React from "react";
import { useTranslation } from "react-i18next";
import Lesson3_bs from "../Components/Lesson3_bs";
import Lesson3_en from "../Components/Lesson3_en";
import Lesson3_de from "../Components/Lesson3_de";

// Other
import "../App.scss";
import { scrollToHash } from "./Lesson1";

function L3() {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <React.Fragment>
      <>
        {i18n.language == "bs" ? (
          <Lesson3_bs />
        ) : i18n.language == "en" ? (
          <Lesson3_en />
        ) : (
          <Lesson3_de />
        )}
      </>
    </React.Fragment>
  );
}

export default L3;
