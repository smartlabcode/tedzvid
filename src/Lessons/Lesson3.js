import React from "react";
import data from "../Data/L3Data.json";
import PlayerRow from "../Helpers/PlayerHelper";
import VjezbeRow from "../Helpers/VjezbeHelper";
import Footer from "../Body/MainFooter";
import LekcijaMenu from "../Body/LekcijaMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import Lesson3_bs from '../Components/Lesson3_bs';
import Lesson3_en from '../Components/Lesson3_en';

// Bootstrap
import { Row, Col, Container } from "react-bootstrap";

// Other
import "../App.scss";
import { scrollToHash } from "./Lesson1";

function L3() {
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
				i18n.language == 'bs' ? <Lesson3_bs/>:<Lesson3_en/>
			}
			</>
		</React.Fragment>
	);
}

export default L3;
