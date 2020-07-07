import React from "react";
import data from "../Data/L18Data.json";
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

function L18() {
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
      <LekcijaMenu broj="18" naziv="MEDD MUTTESIL"></LekcijaMenu>
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
                MEDD MUTTESIL
              </h2>
            </div>
            <h4 className="text-center">
              <strong>spojena dužina</strong>
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
            Kada poslije <strong>dugog vokala</strong> A{" "}
            <span className="arapski-lekcija">ـــَــ ا</span> , I{" "}
            <span className="arapski-lekcija">ـــِـ ى </span>, U{" "}
            <span className="arapski-lekcija">ـــُــ و</span> dođe{" "}
            <strong>hemze</strong> u <u>istoj</u> riječi, bit će medd muttesil.
            Traje obavezno 4-5 hareketa, npr.: {PlayerRow(data, "row1")}
          </Col>
        </Row>

        <Row className="text-center">
          <Col>{PlayerRow(data, "row2")}</Col>
        </Row>

        <Row className="text-center">
          <Col>{PlayerRow(data, "row3")}</Col>
        </Row>

        <Row className="text-center">
          <Col>{VjezbeRow(data, "multirow", "row4")}</Col>
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
                Kada poslije <strong>dugog vokala</strong> A{" "}
                <span className="arapski-lekcija">ـــَــ ا</span> , I{" "}
                <span className="arapski-lekcija">ـــِـ ى </span>, U{" "}
                <span className="arapski-lekcija">ـــُــ و</span> dođe{" "}
                <strong>hemze</strong> u <u>istoj</u> riječi, bit će medd
                muttesil. Traje obavezno 4-5 hareketa, npr.:{" "}
                {PlayerRow(data, "row1")}
              </Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row2")}</Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row3")}</Col>
            </Row>

            <Row className="text-center">
              <Col>{VjezbeRow(data, "multirow", "row4")}</Col>
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
            className="zoomIcon"
            onClick={handleShow}
          ></MdZoomOutMap>
        </IconContext.Provider>
        <Row className="text-center">
          <Col>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj6")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="mobile-row">
            {VjezbeRow(data, "vjezba", "broj7")}
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
              <Col>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj6")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="mobile-row">
                {VjezbeRow(data, "vjezba", "broj7")}
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
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Zatvori
            </Button>
          </Modal.Footer>
        </Modal>

        <Footer prev="/lekcija17" next="/lekcija19" />
      </Container>
    </React.Fragment>
  );
}

export default L18;
