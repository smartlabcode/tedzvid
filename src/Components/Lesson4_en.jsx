import React from "react";
import data from "../Data/L4Data.json";
import PlayerRow from "../Helpers/PlayerHelper";
import VjezbeRow from "../Helpers/VjezbeHelper";
import Footer from "../Body/MainFooter";
import LekcijaMenu from "../Body/LekcijaMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";


// Bootstrap
import { Row, Col, Container } from "react-bootstrap";

const Lesson4_en = () => {

    const { t } = useTranslation();
	const [show, setShow] = React.useState(false);
	const [showT, setShowT] = React.useState(false);
	const [showZ, setShowZ] = React.useState(false);
	const [showL, setShowL] = React.useState(false);

	const handleCloseL = () => setShowL(false);
	const handleShowL = () => setShowL(true);

	const handleCloseT = () => setShowT(false);
	const handleShowT = () => setShowT(true);

	const handleCloseZ = () => setShowZ(false);
	const handleShowZ = () => setShowZ(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { i18n } = useTranslation();
  return (
    <>
      <LekcijaMenu broj="4" naziv="IDGHAAM MITHLAYN" />
      <Container>
        <Row>
          <Col>
            <div className="mobileTop">
              <center>
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/Group 61.svg"}
                  alt="Group 61"
                />
              </center>
              <h2
                className="text-center font-weight-bold text-uppercase"
                id="lekcija"
              >
                4 IDGHAAM MITHLAYN
              </h2>
            </div>
            <h4 className="text-center">
              <strong>Assimilation of two identical letters</strong>
            </h4>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <IconContext.Provider
          value={{ size: "30px", style: { float: "right" } }}
        >
          <MdZoomOutMap className="zoomIcon" onClick={handleShowL} />
        </IconContext.Provider>
        <Row>
          <Col className="opisLekcije">
            When the letter with{" "}
            <strong>
              sukunom <span className="arapski-lekcija">ـــْــ</span>
            </strong>{" "}
            is followed by the <u>same</u> letter with a short{" "}
            <strong>vowel/haraka</strong>, a complete assimilation occurs, i.e.
            the first letter is not recited, and the second one is recited with{" "}
            <strong>shaddah</strong>, for example:
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
          </Col>
        </Row>

        <Row className="text-center reorder">
          <Col>{PlayerRow(data, "row1_en")}</Col>,
        </Row>

        <Row className="text-center mobile-row rtl ">
          <Col>{PlayerRow(data, "row2")}</Col>
        </Row>

        <Row className="text-center mobile-row  rtl">
          <Col>{PlayerRow(data, "row3")}</Col>
        </Row>
        <Modal
          show={showL}
          onHide={handleCloseL}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>LESSON</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">
            <Row>
              <Col className="opisLekcije">
                When the letter with{" "}
                <strong>
                  sukunom <span className="arapski-lekcija">ـــْــ</span>
                </strong>{" "}
                is followed by the <u>same</u> letter with a short{" "}
                <strong>vowel/haraka</strong>, a complete assimilation occurs,
                i.e. the first letter is not recited, and the second one is
                recited with <strong>shaddah</strong>, for example:
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
              </Col>
            </Row>

            <Row className="text-center reorder">
              <Col>{PlayerRow(data, "row1_en")}</Col>,
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row2")}</Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row3")}</Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseL}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>

        <h2 className="text-center" id="vjezba">
          <strong>PRACTICE</strong>
        </h2>
        <hr />
        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <IconContext.Provider
          value={{ size: "30px", style: { float: "right" } }}
        >
          <MdZoomOutMap className="zoomIcon" onClick={handleShow} />
        </IconContext.Provider>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj10")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj11")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj12")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj13")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj14")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj15")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj16")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj17")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj18")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj19")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col />
        </Row>
        <Row>
          <Col>
            <hr />
            <h2 className="text-center" id="video">
              <strong>VIDEO LECTURE</strong>
            </h2>
            <center>
              <div className="video">
                <iframe
                  width="900"
                  height="506"
                  src="https://www.youtube.com/embed/pS0IE9vrCnI?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                ></iframe>
              </div>
            </center>
          </Col>
        </Row>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>PRACTICE</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj10")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj11")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj12")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj13")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj14")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj15")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj16")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj17")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj18")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj19")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col />
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer prev="/lekcija3" next="/lekcija5" />
      </Container>
    </>
  );
}

export default Lesson4_en