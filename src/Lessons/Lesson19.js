import React from "react";
import data from "../Data/L19Data.json";
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

function L19() {
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
      <LekcijaMenu broj="19" naziv="MEDD MUNFESIL" />
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
                19 MEDD MUNFESIL
              </h2>
            </div>
            <h4 className="text-center">
              <strong>Rastavljena dužina</strong>
            </h4>
          </Col>
        </Row>
        <hr />

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
          <Col className="opisLekcije ">
            Kada poslije <strong>dugog vokala</strong> A{" "}
            <span className="arapski-lekcija">ـــَــ ا</span> , I{" "}
            <span className="arapski-lekcija"> ـــِـ ى</span> , U{" "}
            <span className="arapski-lekcija" style={{ lineHeight: "1.8em" }}>
              ـــُــ و
            </span>{" "}
            dođe <strong>hemze</strong> ili <strong>elif</strong>{" "}
            <u>na početku sljedeće</u> riječi, bit će medd munfesil. Traje 4-5
            hareketa,npr.:
            <span style={{ lineHeight: "1.5em" }}>
              {PlayerRow(data, "row1")}
            </span>
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
          </Col>
        </Row>

        <Row className="opisLekcije text-center  reorder-basic-display-after">
          <Col>
            <pre> „turska štampa“</pre>
          </Col>
          -
          <Col>
            <pre> „medinska štampa“</pre>
          </Col>
        </Row>

        <Row className="text-center  reorder-basic-display-after">
          <Col>
            {VjezbeRow(data, "rows", "row2lijevi")}
            {VjezbeRow(data, "rows", "row2desni")}
          </Col>
        </Row>
        <Row className="text-center  reorder-basic-display-after">
          <Col>
            {VjezbeRow(data, "rows", "row3lijevi")}
            {VjezbeRow(data, "rows", "row3desni")}
          </Col>
        </Row>
        <Row className="text-center reorder-basic-display-after">
          <Col>
            {VjezbeRow(data, "rows", "row4lijevi")}
            {VjezbeRow(data, "rows", "row4desni")}
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
              <Col className="opisLekcije ">
                Kada poslije <strong>dugog vokala</strong> A{" "}
                <span className="arapski-lekcija">ـــَــ ا</span> , I{" "}
                <span className="arapski-lekcija"> ـــِـ ى</span> , U{" "}
                <span
                  className="arapski-lekcija"
                  style={{ lineHeight: "1.8em" }}
                >
                  ـــُــ و
                </span>{" "}
                dođe <strong>hemze</strong> ili <strong>elif</strong>{" "}
                <u>na početku sljedeće</u> riječi, bit će medd munfesil. Traje
                4-5 hareketa,npr.:
                <span style={{ lineHeight: "1.5em" }}>
                  {PlayerRow(data, "row1")}
                </span>
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
              </Col>
            </Row>

            <Row className="opisLekcije text-center">
              <Col>
                <pre> „turska štampa“</pre>
              </Col>
              <Col>
                <pre> „medinska štampa“</pre>
              </Col>
            </Row>

            <Row className="text-center reorder-basic">
              <Col>
                {VjezbeRow(data, "rows", "row2lijevi")}
                {VjezbeRow(data, "rows", "row2desni")}
              </Col>
            </Row>
            <Row className="text-center reorder-basic">
              <Col>
                {VjezbeRow(data, "rows", "row3lijevi")}
                {VjezbeRow(data, "rows", "row3desni")}
              </Col>
            </Row>
            <Row className="text-center reorder-basic">
              <Col>
                {VjezbeRow(data, "rows", "row4lijevi")}
                {VjezbeRow(data, "rows", "row4desni")}
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
          <Col className="mobile-row rtl">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj5")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj6")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj7")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center rtl">
          <Col>
            <span className="tacka">{VjezbeRow(data, "vjezba", "broj8")}</span>
            <span className="tacka">۞</span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row rtl">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj9")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj10")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center rtl">
          <Col>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj11")}{" "}
            </span>
            <span className="tacka">۞</span>
          </Col>
        </Row>

        <Row className="text-center">
          <Col className="mobile-row rtl">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj12")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj13")} ۞
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
                  src="https://www.youtube.com/embed/5CvVMblSvA4?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
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
              <Col className="mobile-row rtl">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj5")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj6")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj7")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center rtl">
              <Col>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj8")}
                </span>
                <span className="tacka">۞</span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col className="mobile-row rtl">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj9")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj10")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center rtl">
              <Col>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj11")}{" "}
                </span>
                <span className="tacka">۞</span>
              </Col>
            </Row>

            <Row className="text-center">
              <Col className="mobile-row rtl">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj12")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj13")} ۞
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
        <Footer prev="/lekcija18" next="/lekcija20" />
      </Container>
    </React.Fragment>
  );
}

export default L19;
