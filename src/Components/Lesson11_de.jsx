import React from "react";
import data from "../Data/L11Data.json";
import PlayerRow from "../Helpers/PlayerHelper";
import VjezbeRow from "../Helpers/VjezbeHelper";
import Footer from "../Body/MainFooter";
import LekcijaMenu from "../Body/LekcijaMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";
import Arabic from "../Letters/Arabic";

// Bootstrap
import { Row, Col, Container } from "react-bootstrap";

const Lesson11_de = () => {
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
          Wenn nach dem Buchstaben <strong>N</strong> mit <strong>sukun</strong>{" "}
          (<span className="arapski-lekcija">نْ</span>) oder{" "}
          <strong>tanwin</strong> EN{" "}
          <span className="arapski-lekcija">ـــًـــ</span> , IN{" "}
          <span className="arapski-lekcija">ـــٍــ</span> , oder UN{" "}
          <span className="arapski-lekcija">ــٌــ</span> einer der 15 Buchstaben
          folgt:{" "}
          <span>
            <Arabic arabic="ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق " key="arL11">
              {" "}
              ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق ,
            </Arabic>
          </span>{" "}
          dann wird <strong>N</strong> (
          <span className="arapski-lekcija">ن</span>) oder{" "}
          <strong>tanwin</strong> EN{" "}
          <span className="arapski-lekcija">ـــًـــ</span> , in oder un nasal
          ausgesprochen. Zum Beispiel:
        </Col>
      </Row>

      <Row>
        <Col>
          <br />
        </Col>
      </Row>

      <Row className="text-center reorder-basic-display-after">
        <Col>{PlayerRow(data, "row1")}</Col>
      </Row>
      <Row className="text-center reorder-basic-dislay-after rtl">
        <Col>{PlayerRow(data, "row2")}</Col>
      </Row>

      <Row className="text-center  rtl">
        <Col>
          {VjezbeRow(data, "multirow", "word1")}
          {PlayerRow(data, "row3")}
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
    </>
  );

  return (
    <>
      <LekcijaMenu broj="11" naziv="IHFA" />
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
                11 IHFA
              </h2>
            </div>
            <h4 className="text-center">
              <strong>Verbergen des Buchstaben N (ن)</strong>
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
            <Modal.Title>LEKTION</Modal.Title>
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
        <IconContext.Provider
          value={{ size: "30px", style: { float: "right" } }}
        >
          <MdZoomOutMap className="zoomIcon" onClick={handleShow} />
        </IconContext.Provider>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj7")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj8")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj9")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj10")}{" "}
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
                  src="https://www.youtube.com/embed/J0vbdKs3bu8?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
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
                  {VjezbeRow(data, "vjezba", "broj7")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj8")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj9")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj10")}{" "}
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Schließen
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer prev="/lekcija10" next="/lekcija12" />
      </Container>
    </>
  );
};

export default Lesson11_de;
