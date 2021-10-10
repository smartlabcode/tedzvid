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
      <LekcijaMenu broj="15" naziv="IDGAM MUTEDŽANISEJN" />
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
                15 IDGAM MUTEDŽANISEJN
              </h2>
            </div>
            <h4 className="text-center">
              <strong>Uklapanje srodnih harfova</strong>
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
            Kada dođu jedan do drugog <u>srodni</u> harfovi od kojih je prvi sa{" "}
            <strong>sukunom</strong>, a drugi sa <strong>hareketom</strong>,
            onda se prvi uklapa u drugi iz <u>iste grupe</u>:
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-left">
            <strong className="">1.</strong>
            <span className="arapski-lekcija"> ط د ت </span> npr.:{" "}
            {PlayerRow(data, "row1")}
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
            npr.: {PlayerRow(data, "row3")}
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
            npr.: {PlayerRow(data, "row5")}
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
            <Modal.Title>LEKCIJA</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">
            <Row>
              <Col className="opisLekcije">
                Kada dođu jedan do drugog <u>srodni</u> harfovi od kojih je prvi
                sa <strong>sukunom</strong>, a drugi sa{" "}
                <strong>hareketom</strong>, onda se prvi uklapa u drugi iz{" "}
                <u>iste grupe</u>:
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije text-left">
                <strong className="">1.</strong>
                <span className="arapski-lekcija"> ط د ت </span> npr.:{" "}
                {PlayerRow(data, "row1")}
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
                <span className="arapski-lekcija"> ظ ذ ث </span> npr.:{" "}
                {PlayerRow(data, "row3")}
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
                <span className="arapski-lekcija"> ب م </span> npr.:{" "}
                {PlayerRow(data, "row5")}
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
              Zatvori
            </Button>
          </Modal.Footer>
        </Modal>
        <h2 className="text-center" id="vjezba">
          <strong>VJEŽBA</strong>
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
        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj13")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj12")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj14")}۞
            </span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj16")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj15")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj17")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj18")} ۞
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <h2 className="text-center" id="vjezba">
              <strong>VIDEO LEKCIJA</strong>
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
            <Modal.Title>VJEŽBA</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">
            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj13")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj12")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col>
                <span className="tacka">
                  ۞{VjezbeRow(data, "vjezba", "broj14")}{" "}
                </span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj16")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj15")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj17")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj18")} ۞
                </span>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Zatvori
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer prev="/lekcija14" next="/lekcija16" />
      </Container>
    </React.Fragment>
  );
}

export default L15;
