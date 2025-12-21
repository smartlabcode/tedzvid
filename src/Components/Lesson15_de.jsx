import React from "react";
import data from "../Data/L15Data.json";
import PlayerRow from "../Helpers/PlayerHelper";
import VjezbeRow from "../Helpers/VjezbeHelper";
import Footer from "../Body/MainFooter";
import LekcijaMenu from "../Body/LekcijaMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";

// Bootstrap
import { Row, Col, Container } from "react-bootstrap";

const Lesson15_de = () => {
  const [show, setShow] = React.useState(false);
  const [showL, setShowL] = React.useState(false);

  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <LekcijaMenu broj="15" naziv="IDGHAM MUTAJAANISAYN" />
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
                15 IDGHAM MUTAJAANISAYN
              </h2>
            </div>
            <h4 className="text-center">
              <strong>Vollständig Assimilation </strong>
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
            Wenn zwei verwandte Buchstaben hintereinander vorkommen, der Erste
            mit <strong>sukun</strong> und der Folgende mit einem der Vokal E,
            I, U, werden beide ineinander vollständig assimiliert.
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-left">
            <strong className="">1.</strong>
            <span className="arapski-lekcija"> ط د ت </span> Zum Beispiel:{" "}
            {PlayerRow(data, "row1_de")}
          </Col>
        </Row>

        <Row className="text-center  rtl">
          <Col className="opisLekcije text-center">
            {PlayerRow(data, "row2")}
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-left">
            <strong>2.</strong> <span className="arapski-lekcija"> ظ ذ ث </span>{" "}
            Zum Beispiel: {PlayerRow(data, "row3_de")}
          </Col>
        </Row>

        <Row className="text-center  rtl">
          <Col className="opisLekcije text-center">
            {PlayerRow(data, "row4")}
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-left">
            <strong>3.</strong> <span className="arapski-lekcija"> ب م </span>{" "}
            Zum Beispiel: {PlayerRow(data, "row5_de")}
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-center">
            {PlayerRow(data, "row6")}
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <Modal
          show={showL}
          onHide={handleCloseL}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>LEKTION</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">
            <Row>
              <Col className="opisLekcije">
                Wenn zwei verwandte Buchstaben hintereinander vorkommen, der
                Erste mit <strong>sukun</strong> und der Folgende mit einem der
                Vokal E, I, U, werden beide ineinander vollständig assimiliert.
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije text-left">
                <strong className="">1.</strong>
                <span className="arapski-lekcija"> ط د ت </span> Zum Beispiel:{" "}
                {PlayerRow(data, "row1_de")}
              </Col>
            </Row>

            <Row className="text-center  rtl">
              <Col className="opisLekcije text-center">
                {PlayerRow(data, "row2")}
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije text-left">
                <strong>2.</strong>{" "}
                <span className="arapski-lekcija"> ظ ذ ث </span> Zum Beispiel:{" "}
                {PlayerRow(data, "row3_de")}
              </Col>
            </Row>

            <Row className="text-center  rtl">
              <Col className="opisLekcije text-center">
                {PlayerRow(data, "row4")}
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije text-left">
                <strong>3.</strong>{" "}
                <span className="arapski-lekcija"> ب م </span> Zum Beispiel:{" "}
                {PlayerRow(data, "row5_de")}
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije text-center">
                {PlayerRow(data, "row6")}
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseL}>
              Schließen
            </Button>
          </Modal.Footer>
        </Modal>
        <h2 className="text-center" id="vjezba">
          <strong>ÜBUNG</strong>
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
              {VjezbeRow(data, "vjezba", "broj13")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj12")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj14")}۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj16")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj15")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
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
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <h2 className="text-center" id="video">
              <strong>VIDEO LEKTION</strong>
            </h2>
            <center>
              <div className="video">
                <iframe
                  width="900"
                  height="506"
                  src="https://www.youtube.com/embed/Q3ACHoWzWN0?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
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
            <Modal.Title>ÜBUNG</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj13")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj12")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col>
                <span className="tacka">
                  ۞{VjezbeRow(data, "vjezba", "broj14")}{" "}
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj16")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj15")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
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
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Schließen
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer prev="/lekcija14" next="/lekcija16" />
      </Container>
    </>
  );
};

export default Lesson15_de;
