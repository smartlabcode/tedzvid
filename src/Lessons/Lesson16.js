import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson16_bs from '../Components/Lesson16_bs';
import Lesson16_en from '../Components/Lesson16_en';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';
import { scrollToHash } from "./Lesson1";
import Lesson16_de from "../Components/Lesson16_de";


function L16() {
	const { i18n } = useTranslation();
	const [show, setShow] = React.useState(false);
	const [showL, setShowL] = React.useState(false);

	const handleCloseL = () => setShowL(false);
	const handleShowL = () => setShowL(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
    <>
      {i18n.language === "bs" ? (
        <Lesson16_bs />
      ) : i18n.language === "de" ? (
        <Lesson16_de />
      ) : (
        <Lesson16_en />
      )}
    </>
  );
}

export default L16;
