import React from "react";
import data from "../Data/L6Data.json";
import Footer from "../Body/MainFooter";
import VjezbeRow from "../Helpers/VjezbeHelper";
import PlayerRow from "../Helpers/PlayerHelper";
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
  const [show, setShow] = React.useState(false);
  const [showL, setShowL] = React.useState(false);

  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  React.useEffect(() => {
    scrollToHash();
  }, []);

  const r1 = data.row1.map((dat) => {
    return (
      <span key={"key" + dat.id}>
        <Player url={dat.url} key={"p" + dat.id}>
          <Arabic arabic={dat.highlight} key={"a" + dat.id}>
            {dat.word}
          </Arabic>
        </Player>{" "}
        {dat.after === "break" ? <br /> : dat.after}
      </span>
    );
  });

  const r2 = data.row2.map((dat) => {
    return (
      <span key={"key" + dat.id}>
        <Player url={dat.url} key={"p" + dat.id}>
          <Arabic arabic={dat.highlight} key={"a" + dat.id}>
            {dat.word}
          </Arabic>
        </Player>{" "}
        {dat.after === "break" ? <br /> : dat.after}
      </span>
    );
  });

  const r3 = data.row3.map((dat, ind) => {
    return (
      <Arabic arabic={dat.highlight} key={"a" + dat.id}>
        {dat.word}
      </Arabic>
    );
  });

  return (
    <React.Fragment>
      <LekcijaMenu broj="6" naziv="IDGAM MEAL-GUNNEH"></LekcijaMenu>
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
                IDGAM MEAL-GUNNEH
              </h2>
            </div>
            <h4 className="text-center">
              <strong>uklapanje sa propuštanjem zraka kroz nos</strong>
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
            className="zoomIcon" onClick={handleShowL}></MdZoomOutMap>
        </IconContext.Provider>
        <Row>
          <Col className="opisLekcije">
            Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (
            <span className="arapski-lekcija">نْ</span>) ili{" "}
            <strong>tenvina</strong> EN{" "}
            <span className="arapski-lekcija">ـــًـــ</span> , IN{" "}
            <span className="arapski-lekcija">ـــٍــ</span> , UN{" "}
            <span className="arapski-lekcija">ــٌــ</span> dođe jedan od četiri
            harfa:{" "}
            <span className="arapski-lekcija" style={{ color: "red" }}>
              ي م ن و
            </span>{" "}
            (sadržana u riječi <strong>jemnu</strong> –
            <span className="arapski-lekcija">يَمْنُو</span>), dolazi do
            uklapanja harfa <strong>N</strong>(
            <span className="arapski-lekcija">ن</span>) u jedan od spomenuta
            četiri harfa, propuštajući zrak kroz nos u trajanju od 2 hareketa,
            npr.:
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
          </Col>
        </Row>

        <Row className="text-center">
          <Col>{PlayerRow(data, "row1")}</Col>
        </Row>

        <Row className="text-center">
          <Col>{PlayerRow(data, "row2")}</Col>
        </Row>

        <Row className="text-center">
          <Col>
            <span key={"key" + data.row3[0].id}>
              <Player url={data.row3[0].url} key={"p" + data.row3[0].id}>
                {r3}
              </Player>
            </span>{" "}
            {data.row3[0].after}
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
                Kada poslije harfa <strong>N</strong> sa{" "}
                <strong>sukunom</strong> (
                <span className="arapski-lekcija">نْ</span>) ili{" "}
                <strong>tenvina</strong> EN{" "}
                <span className="arapski-lekcija">ـــًـــ</span> , IN{" "}
                <span className="arapski-lekcija">ـــٍــ</span> , UN{" "}
                <span className="arapski-lekcija">ــٌــ</span> dođe jedan od
                četiri harfa:{" "}
                <span className="arapski-lekcija" style={{ color: "red" }}>
                  ي م ن و
                </span>{" "}
                (sadržana u riječi <strong>jemnu</strong> –
                <span className="arapski-lekcija">يَمْنُو</span>), dolazi do
                uklapanja harfa <strong>N</strong>(
                <span className="arapski-lekcija">ن</span>) u jedan od spomenuta
                četiri harfa, propuštajući zrak kroz nos u trajanju od 2
                hareketa, npr.:
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
              </Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row1")}</Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row2")}</Col>
            </Row>

            <Row className="text-center">
              <Col>
                <span key={"key" + data.row3[0].id}>
                  <Player url={data.row3[0].url} key={"p" + data.row3[0].id}>
                    {r3}
                  </Player>
                </span>{" "}
                {data.row3[0].after}
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
          <MdZoomOutMap
            className="zoomIcon" onClick={handleShow}></MdZoomOutMap>
        </IconContext.Provider>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj8")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj9")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj10")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj11")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj12")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj13")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj14")} ۞
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
                  {VjezbeRow(data, "vjezba", "broj8")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj9")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj10")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj11")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj12")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj13")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj14")} ۞
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
        <Footer prev="/lekcija5" next="/lekcija7" />
      </Container>
    </React.Fragment>
  );
}

export default L6;
