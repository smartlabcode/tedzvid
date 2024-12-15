import React from "react";
import data from "../Data/L14Data.json";
import VjezbeRow from "../Helpers/VjezbeHelper";
import PlayerRow from "../Helpers/PlayerHelper";
import Footer from "../Body/MainFooter";
import LekcijaMenu from "../Body/LekcijaMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";

// Bootstrap
import { Row, Col, Container } from "react-bootstrap";

const Lesson14_de = () => {
  const [show, setShow] = React.useState(false);
  const [showL, setShowL] = React.useState(false);

  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderLesson = () => (
    <>
      <Row>
        <Col className="opisLekcije">
          R Buchstabe<strong> R </strong>
          <span className="arapski-lekcija">(ر)</span> wird <u>kraftvoll</u>
          ausgesprochen u wenn:
        </Col>
      </Row>

      <Row>
        <Col className="opisLekcije">
          <strong>1.</strong> Auf dem<strong> R </strong>einer{" "}
          <strong>der Vokale</strong> E ( {PlayerRow(data, "row1")}) oder U
          vorkommt ( {PlayerRow(data, "row2")}), zum Beispiel: <br />
          {PlayerRow(data, "row3")}
        </Col>
      </Row>

      <Row>
        <Col className="opisLekcije">
          <strong>2.</strong> Wenn vor dem <strong> R </strong>mit{" "}
          <strong>sukun</strong>, ein Buchstabe mit <strong>vokal</strong> E (
          <span className="arapski-lekcija" style={{ color: "red" }}>
            {" "}
            ــَـ رْ{" "}
          </span>
          ) oder U (
          <span className="arapski-lekcija" style={{ color: "red" }}>
            ــُـ رْ
          </span>
          ) vorkommt, zum Beispiel:
          <br />
          {PlayerRow(data, "row4")}
        </Col>
      </Row>

      <Row>
        <Col className="opisLekcije">
          <strong>3.</strong> Wenn Buchstabe
          <strong>
            <strong> R </strong>
          </strong>
          mit <strong>sukun</strong>, und vor dem R ein anderer Buchstabe
          ebenfalls mit <strong>sukun</strong>, vorkommt und vor diesem ein
          Buchstabe mit <strong>Vokal</strong> E (
          <span className="arapski-lekcija" style={{ color: "red" }}>
            {" "}
            ــَـ ــْـ رْ{" "}
          </span>
          ) oder U (
          <span className="arapski-lekcija" style={{ color: "red" }}>
            {" "}
            ــُـ ــْـ رْ{" "}
          </span>
          ) steht, zum Beispiel:
          <br /> {PlayerRow(data, "row5")}
        </Col>
      </Row>

      <Row>
        <Col className="opisLekcije">
          <strong>4.</strong> Wenn Buchstabe <strong> R </strong>mit{" "}
          <strong>sukun</strong> (
          <span className="arapski-lekcija" style={{ color: "red" }}>
            رْ
          </span>
          ), und vor ihm ein anderer Buchstabe mit einer nicht ursprünglichen
          Kasrra steht, zum Beispiel: <br />
          {PlayerRow(data, "row6")}
        </Col>
      </Row>

      <Row>
        <Col className="opisLekcije">
          <strong>5.</strong> Auf dem <strong> R </strong> ein{" "}
          <strong>sukun</strong> ist (
          <span className="arapski-lekcija" style={{ color: "red" }}>
            رْ
          </span>
          ) , und ihm einer der kraftvollen Buchstaben folgt, zum Beispiel:
          <br /> {PlayerRow(data, "row7")}
        </Col>
      </Row>

      <Row>
        <Col>
          <br />
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <LekcijaMenu broj="14" naziv="HUKMURRA" />
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
                14 HUKMURRA
              </h2>
            </div>
            <h4 className="text-center">
              <strong>
                Aussprache des Buchstabens R{" "}
                <span className="arapski-lekcija">(ر)</span>
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
          <MdZoomOutMap className="zoomIcon" onClick={handleShowL} />
        </IconContext.Provider>

        {renderLesson()}

        <Modal
          show={showL}
          onHide={handleCloseL}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>LEKTION</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">{renderLesson()}</Modal.Body>
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
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj15")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj16")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj17")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj18")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj19")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj20")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj21")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj22")} ۞
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
                  src="https://www.youtube.com/embed/rOcWxXFJ_CE?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
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
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj15")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj16")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj17")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj18")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj19")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj20")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
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
              Schließen
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer prev="/lekcija13" next="/lekcija14_2" />
      </Container>
    </>
  );
};

export default Lesson14_de;
