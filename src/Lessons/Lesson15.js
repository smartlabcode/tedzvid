import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson15_bs from '../Components/Lesson15_bs';
import Lesson15_en from '../Components/Lesson15_en';

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

function L15() {
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
		i18n.language == 'bs' ? <Lesson15_bs/>:<Lesson15_en/>
	}
	</>
</React.Fragment>
	);
}

export default L15;
