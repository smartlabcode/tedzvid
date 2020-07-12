import React from "react";
import data from "../Data/L22Data.json";
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

function L22() {
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
      <LekcijaMenu broj="22" naziv="MEDD LIN"></LekcijaMenu>
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
                MEDD LIN
              </h2>
            </div>
            <h4 className="text-center font-weight-bold ">
              <strong>poluvokalna dužina</strong>
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
            Kada harfovi <strong>V</strong> ili <strong>J</strong> budu sa{" "}
            <strong>
              sukunom <span className="arapski-lekcija">(يْ/وْ)</span>
            </strong>
            , prije njih <strong>kratki vokal</strong> E{" "}
            <span className="arapski-lekcija">ـــَـــ </span> a poslije njih
            harf sa <strong>sukunom</strong>, bit će medd lin, npr.:
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <span class="arapski">( ـــَــ وْ ـــْــ )</span>{" "}
            {PlayerRow(data, "row1lijevi")}
            <span class="arapski">( ـــَــ يْ ـــْــ ) </span>{" "}
            {PlayerRow(data, "row1desni")}
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            Ta dužina na harfu <strong>V</strong>{" "}
            <span className="arapski-lekcija"> (و)</span> ili <strong>J</strong>{" "}
            <span className="arapski-lekcija"> (ى)</span> traje 2-4-6 hareketa.
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
          </Col>
        </Row>

        <Row className="text-center">
          <Col>{PlayerRow(data, "row2")}</Col>
        </Row>

        <Row className="text-center">
          <Col>{PlayerRow(data, "row3")}</Col>
        </Row>

        <Row className="text-center">
          <Col>{PlayerRow(data, "row4")}</Col>
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
                Kada harfovi <strong>V</strong> ili <strong>J</strong> budu sa{" "}
                <strong>
                  sukunom <span className="arapski-lekcija">(يْ/وْ)</span>
                </strong>
                , prije njih <strong>kratki vokal</strong> E{" "}
                <span className="arapski-lekcija">ـــَـــ </span> a poslije njih
                harf sa <strong>sukunom</strong>, bit će medd lin, npr.:
              </Col>
            </Row>

            <Row className="text-center">
              <Col>
                <span class="arapski">( ـــَــ وْ ـــْــ )</span>{" "}
                {PlayerRow(data, "row1lijevi")}
                <span class="arapski">( ـــَــ يْ ـــْــ ) </span>{" "}
                {PlayerRow(data, "row1desni")}
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
              </Col>
            </Row>

            <Row>
              <Col className="opisLekcije">
                Ta dužina na harfu <strong>V</strong>{" "}
                <span className="arapski-lekcija"> (و)</span> ili{" "}
                <strong>J</strong> <span className="arapski-lekcija"> (ى)</span>{" "}
                traje 2-4-6 hareketa.
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
              </Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row2")}</Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row3")}</Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row4")}</Col>
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
          <Col className="mobile-row">
            <span className="tacka">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj8")} ۞
              </span>
            </span>
            <span className="tacka">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj9")} ۞
              </span>
            </span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj10")} ۞
              </span>
            </span>
            <span className="tacka">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj11")} ۞
              </span>
            </span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj12")} ۞
              </span>
            </span>
            <span className="tacka">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj13")} ۞
              </span>
            </span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row">
            <span className="tacka">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj14")} ۞
              </span>
            </span>
            <span className="tacka">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj15")} ۞
              </span>
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
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "broj8")} ۞
                  </span>
                </span>
                <span className="tacka">
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "broj9")} ۞
                  </span>
                </span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "broj10")} ۞
                  </span>
                </span>
                <span className="tacka">
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "broj11")} ۞
                  </span>
                </span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "broj12")} ۞
                  </span>
                </span>
                <span className="tacka">
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "broj13")} ۞
                  </span>
                </span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col className="mobile-row">
                <span className="tacka">
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "broj14")} ۞
                  </span>
                </span>
                <span className="tacka">
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "broj15")} ۞
                  </span>
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
        <Footer prev="/lekcija21" next="/lekcija1" />
      </Container>
    </React.Fragment>
  );
}

export default L22;
