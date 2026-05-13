import React from "react";
import data from "../Data/L14Data.json";
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

const Lesson14_2_de = () => {
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
          Der Buchstabe<strong> R </strong>
          <span className="arapski-lekcija">(ر)</span> wird{" "}
          <u>nicht emphatisch</u> in folgenden Situationen gelesen:
        </Col>
      </Row>

      <Row>
        <Col className="opisLekcije">
          <strong>1.</strong> Wenn der Buchstabe<strong> R </strong>mit dem{" "}
          <strong>Vokal</strong> I ( {PlayerRow(data, "row9")} ) vorkommt, z.B.:{" "}
          <br />
          {PlayerRow(data, "row8")}
        </Col>
      </Row>

      <Row>
        <Col className="opisLekcije">
          <strong>2.</strong> Wenn der Buchstabe<strong> R </strong>{" "}
          <strong>sukun</strong> hat und ihm ein Buchstabe mit dem{" "}
          <strong>Vokal</strong> I vorausgeht (
          <span className="arapski-lekcija" style={{ color: "red" }}>
            ــــِـــ رْ{" "}
          </span>
          ), z.B.:
          <br />
          {PlayerRow(data, "row10")}
        </Col>
      </Row>

      <Row>
        <Col className="opisLekcije">
          <strong>3.</strong> Wenn der Buchstabe<strong> R </strong>{" "}
          <strong>sukun</strong> hat und ihm ein Buchstabe mit{" "}
          <strong>sukun</strong> vorausgeht, dem wiederum ein Buchstabe mit dem{" "}
          <strong>Vokal</strong> I vorausgeht (
          <span className="arapski-lekcija" style={{ color: "red" }}>
            {" "}
            ــِـ ــْـ رْ{" "}
          </span>
          ), z.B.:
          <br />
          {PlayerRow(data, "row11")}
        </Col>
      </Row>

      <Row>
        <Col className="opisLekcije">
          <strong>4.</strong> Wenn der Buchstabe<strong> R </strong>{" "}
          <strong>sukun</strong> hat und ihm der Buchstabe <strong>J</strong>{" "}
          mit <strong>sukun</strong> vorausgeht, dem wiederum ein Buchstabe mit
          dem <strong>Vokal</strong> E vorausgeht (
          <span className="arapski-lekcija" style={{ color: "red" }}>
            {" "}
            ــــَـــ يْـــرْ{" "}
          </span>
          ), zum Beispiel: {PlayerRow(data, "row12")}
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <LekcijaMenu broj="14.2" naziv="HUKMURRA" />
      <Container id="lekcija">
        <IconContext.Provider
          value={{ size: "30px", style: { float: "right" } }}
        >
          <MdZoomOutMap className="zoomIcon" onClick={handleShowL} />
        </IconContext.Provider>
        {renderLession()}

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
            {renderLession()}

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
              {VjezbeRow(data, "vjezba", "broj28")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj29")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj30")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj31")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj32")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj33")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj34")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj35")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj36")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj37")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj38")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj39")} ۞
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
                  {VjezbeRow(data, "vjezba", "broj28")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj29")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj30")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj31")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj32")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj33")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj34")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj35")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj36")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj37")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj38")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj39")} ۞
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
        <Footer prev="/lekcija14" next="/lekcija15" />
      </Container>
    </>
  );
};

export default Lesson14_2_de;
