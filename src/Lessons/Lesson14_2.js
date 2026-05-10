import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson14_2_bs from '../Components/Lesson14_2_bs';
import Lesson14_2_en from '../Components/Lesson14_2_en';
import Lesson14_2_de from "../Components/Lesson14_2_de";

// Other
import "../App.scss";
import { scrollToHash } from "./Lesson1";

function L14_2() {
	const { i18n } = useTranslation();
  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <React.Fragment>
      {i18n.language === "bs" ? (
        <Lesson14_2_bs />
      ) : i18n.language === "de" ? (
        <Lesson14_2_de />
      ) : (
        <Lesson14_2_en />
      )}
    </React.Fragment>
  );
}

export default L14_2;
