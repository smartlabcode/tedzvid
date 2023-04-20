import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson21_bs from '../Components/Lesson21_bs';
import Lesson21_en from '../Components/Lesson21_en';

// Bootstrap
import { Row, Col, Container } from "react-bootstrap";

// Other
import "../App.scss";

function scrollToHash() {
  /* Obtain hash from current location (and trim off leading #) */
  const id = window.location.hash.substr(1);

  if (id) {
    /* Find matching element by id */
    const anchor = document.getElementById(id);

    if (anchor) {
      /* Scroll to that element if present */
      anchor.scrollIntoView();
    }
  }
}

function L21() {
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
	<React.Fragment>
			<>
			{
				i18n.language == 'bs' ? <Lesson21_bs/>:<Lesson21_en/>
			}
			</>
		</React.Fragment>
	);
}

export default L21;
