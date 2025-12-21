import React from "react";
import data from "../Data/L5Data.json";
import PlayerRow from "../Helpers/PlayerHelper";
import VjezbeRow from "../Helpers/VjezbeHelper";
import Footer from "../Body/MainFooter";
import LekcijaMenu from "../Body/LekcijaMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";

import { Row, Col, Container } from "react-bootstrap";

const Lesson5_de = () => {
  const [show, setShow] = React.useState(false);
  const [showL, setShowL] = React.useState(false);

  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderLession = () => (
    <>
      <Row>
        <Col className="opisLekcije">
          Wenn der Buchstabe <strong>M</strong>{" "}
          <span className="arapski-lekcija">(م)</span> mit{" "}
          <strong>sukoon</strong> auf den Buchstaben <strong>M</strong>
          <span className="arapski-lekcija"> (م) </span>mit einer{" "}
          <strong>haraka</strong> folgt, wird der Buchstabe <strong>M</strong>
          <span className="arapski-lekcija"> (م)</span> mit{" "}
          <strong>sukoon</strong> mit dem Buchstaben <strong>M</strong>
          <span className="arapski-lekcija"> (م)</span> mit{" "}
          <strong>haraka</strong> verschmolzen, wobei der Luftstrom durch die
          Nase über zwei harakat anhält, zum Beispiel:
        </Col>
      </Row>

      <Row className="text-center">
        <Col>{PlayerRow(data, "row1_de")}</Col>
      </Row>

      <Row className="text-center rtl">
        <Col>{PlayerRow(data, "row2")}</Col>
      </Row>

      <Row className="text-center rtl">
        <Col>{PlayerRow(data, "row3")}</Col>
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
    </>
  );

  return (
    <>
      <LekcijaMenu broj="5" naziv="IDGAM MITHLAYN MIT GHUNNAH" />

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
                5 IDGAM MITHLAYN MIT GHUNNAH
              </h2>
            </div>
            <h4 className="text-center">
              <strong>
                Verschmelzung identischer Buchstaben mit Nasalausstoß
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
        {renderLession()}
        <Modal
          show={showL}
          onHide={handleCloseL}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>LEKCIJA</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">{renderLession()}</Modal.Body>
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
              {VjezbeRow(data, "vjezba", "broj8")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj9")} ۞
            </span>
          </Col>
        </Row>

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
                  src="https://www.youtube.com/embed/Ni2sUzW5GS0?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
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
                  {VjezbeRow(data, "vjezba", "broj8")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj9")} ۞
                </span>
              </Col>
            </Row>

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
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Schließen
            </Button>
          </Modal.Footer>
        </Modal>

        <Footer prev="/lekcija4" next="/lekcija6" />
      </Container>
    </>
  );
};

export default Lesson5_de;
