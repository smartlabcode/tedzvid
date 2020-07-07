import React from "react";
import data from "../Data/L14Data.json";
import PlayerRow from "../Helpers/PlayerHelper";
import VjezbeRow from "../Helpers/VjezbeHelper";
import Footer from "../Body/MainFooter";
import { Link } from "react-router-dom";
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

function L14() {
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
      <LekcijaMenu broj="14" naziv="HUKMURRA"></LekcijaMenu>
      <Container>
        <Row>
          <Col>
            <div className="mobileTop">
              <center>
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/Group 61.svg"}
                />
              </center>
              <h2
                className="text-center font-weight-bold text-uppercase"
                id="lekcija"
              >
                HUKMURRA
              </h2>
            </div>
            <h4 className="text-center">
              <strong>
                izgovor harfa R <span className="arapski-lekcija">(ر)</span>
              </strong>
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
          <MdZoomOutMap
            className="zoomIcon"
            onClick={handleShowL}
          ></MdZoomOutMap>
        </IconContext.Provider>
        <Row>
          <Col className="opisLekcije">
            Harf<strong> R </strong>
            <span className="arapski-lekcija">(ر)</span> se uči <u>krupno</u> u
            sljedećim situacijama:
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-center">
            <strong>1.</strong> kada je harf<strong> R </strong>sa{" "}
            <strong>vokalom</strong> E ( {PlayerRow(data, "row1")}) ili{" "}
            <strong>vokalom</strong> U ( {PlayerRow(data, "row2")}), npr.:
            {PlayerRow(data, "row3")}
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            <strong>2.</strong> kada je harf<strong> R </strong>sa{" "}
            <strong>sukunom</strong>, a prije njeg harf sa{" "}
            <strong>vokalom</strong> E (
            <span className="arapski-lekcija" style={{ color: "red" }}>
              {" "}
              ــَـ رْ{" "}
            </span>
            ) ili U (
            <span className="arapski-lekcija" style={{ color: "red" }}>
              ــُـ رْ
            </span>
            ), npr.:
            {PlayerRow(data, "row4")}
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            <strong>3.</strong> kada je harf
            <strong>
              <strong> R </strong>
            </strong>
            sa <strong>sukunom</strong>, prije njeg harf sa{" "}
            <strong>sukunom</strong>, a prije toga harf sa
            <strong>vokalom</strong> E (
            <span className="arapski-lekcija" style={{ color: "red" }}>
              {" "}
              ــَـ ــْـ رْ{" "}
            </span>
            ) ili U (
            <span className="arapski-lekcija" style={{ color: "red" }}>
              {" "}
              ــُـ ــْـ رْ{" "}
            </span>
            ), npr.: {PlayerRow(data, "row5")}
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            <strong>4.</strong> kada je harf<strong> R </strong>sa{" "}
            <strong>sukunom</strong> (
            <span className="arapski-lekcija" style={{ color: "red" }}>
              رْ
            </span>
            ), a prije njeg glas sa nestalnom kesrom, npr.:{" "}
            {PlayerRow(data, "row6")}
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            <strong>5.</strong> kada je harf<strong> R </strong>sa{" "}
            <strong>sukunom</strong> (
            <span className="arapski-lekcija" style={{ color: "red" }}>
              رْ
            </span>
            ), a poslije njeg jedan od krupnih harfova, npr.:{" "}
            {PlayerRow(data, "row7")}
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
                Harf<strong> R </strong>
                <span className="arapski-lekcija">(ر)</span> se uči{" "}
                <u>krupno</u> u sljedećim situacijama:
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije text-center">
                <strong>1.</strong> kada je harf<strong> R </strong>sa{" "}
                <strong>vokalom</strong> E ( {PlayerRow(data, "row1")}) ili{" "}
                <strong>vokalom</strong> U ( {PlayerRow(data, "row2")}), npr.:
                {PlayerRow(data, "row3")}
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije">
                <strong>2.</strong> kada je harf<strong> R </strong>sa{" "}
                <strong>sukunom</strong>, a prije njeg harf sa{" "}
                <strong>vokalom</strong> E (
                <span className="arapski-lekcija" style={{ color: "red" }}>
                  {" "}
                  ــَـ رْ{" "}
                </span>
                ) ili U (
                <span className="arapski-lekcija" style={{ color: "red" }}>
                  ــُـ رْ
                </span>
                ), npr.:
                {PlayerRow(data, "row4")}
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije">
                <strong>3.</strong> kada je harf
                <strong>
                  <strong> R </strong>
                </strong>
                sa <strong>sukunom</strong>, prije njeg harf sa{" "}
                <strong>sukunom</strong>, a prije toga harf sa
                <strong>vokalom</strong> E (
                <span className="arapski-lekcija" style={{ color: "red" }}>
                  {" "}
                  ــَـ ــْـ رْ{" "}
                </span>
                ) ili U (
                <span className="arapski-lekcija" style={{ color: "red" }}>
                  {" "}
                  ــُـ ــْـ رْ{" "}
                </span>
                ), npr.: {PlayerRow(data, "row5")}
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije">
                <strong>4.</strong> kada je harf<strong> R </strong>sa{" "}
                <strong>sukunom</strong> (
                <span className="arapski-lekcija" style={{ color: "red" }}>
                  رْ
                </span>
                ), a prije njeg glas sa nestalnom kesrom, npr.:{" "}
                {PlayerRow(data, "row6")}
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije">
                <strong>5.</strong> kada je harf<strong> R </strong>sa{" "}
                <strong>sukunom</strong> (
                <span className="arapski-lekcija" style={{ color: "red" }}>
                  رْ
                </span>
                ), a poslije njeg jedan od krupnih harfova, npr.:{" "}
                {PlayerRow(data, "row7")}
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
          <MdZoomOutMap
            className="zoomIcon"
            onClick={handleShow}
          ></MdZoomOutMap>
        </IconContext.Provider>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj12")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj13")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj14")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj15")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj16")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj17")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj18")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj19")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj20")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj21")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj22")} ۞
            </span>
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
                  {VjezbeRow(data, "vjezba", "broj12")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj13")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj14")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj15")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj16")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj17")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj18")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj19")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj20")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj21")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj22")} ۞
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
        <Footer prev="/lekcija13" next="/lekcija14_2" />
      </Container>
    </React.Fragment>
  );
}

export default L14;
