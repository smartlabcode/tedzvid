import React from "react";
import data from "../Data/L6Data.json";
import Footer from "../Body/MainFooter";
import VjezbeRow from "../Helpers/VjezbeHelper";
import PlayerRow from "../Helpers/PlayerHelper";
import LekcijaMenu from "../Body/LekcijaMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";

import { useTranslation } from "react-i18next";
import Lesson6_bs from '../Components/Lesson6_bs';
import Lesson6_en from '../Components/Lesson6_en';

// Bootstrap
import { Row, Col, Container } from "react-bootstrap";

// Other
import "../App.scss";
import Arabic from "../Letters/Arabic";
import Player from "../Player/Player";

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

function L6() {
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

  // const r1 = data.row1.map((dat) => {
  //   return (
  //     <span key={"key" + dat.id}>
  //       <Player url={dat.url} key={"p" + dat.id}>
  //         <Arabic arabic={dat.highlight} key={"a" + dat.id}>
  //           {dat.word}
  //         </Arabic>
  //       </Player>{" "}
  //       {dat.after === "break" ? <br /> : dat.after}
  //     </span>
  //   );
  // });

  // const r2 = data.row2.map((dat) => {
  //   return (
  //     <span key={"key" + dat.id}>
  //       <Player url={dat.url} key={"p" + dat.id}>
  //         <Arabic arabic={dat.highlight} key={"a" + dat.id}>
  //           {dat.word}
  //         </Arabic>
  //       </Player>{" "}
  //       {dat.after === "break" ? <br /> : dat.after}
  //     </span>
  //   );
  // });

  const r3 = data.row3.map((dat, ind) => {
    return (
      <Arabic arabic={dat.highlight} key={"a" + dat.id}>
        {dat.word}
      </Arabic>
    );
  });

  return (
		<React.Fragment>
			<>
			{
				i18n.language == 'bs' ? <Lesson6_bs/>:<Lesson6_en/>
			}
			</>
		</React.Fragment>
	);
}

export default L6;
