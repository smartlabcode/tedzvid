import React from 'react';
import data from '../Data/L2Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import LekcijaMenu from '../Body/LekcijaMenu';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdZoomOutMap } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useTranslation } from "react-i18next";


// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

const Lesson2_en = () => {

    const { t } = useTranslation();
	const [show, setShow] = React.useState(false);
	const [showT, setShowT] = React.useState(false);
	const [showZ, setShowZ] = React.useState(false);
	const [showL, setShowL] = React.useState(false);

	const handleCloseL = () => setShowL(false);
	const handleShowL = () => setShowL(true);

	const handleCloseT = () => setShowT(false);
	const handleShowT = () => setShowT(true);

	const handleCloseZ = () => setShowZ(false);
	const handleShowZ = () => setShowZ(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { i18n } = useTranslation();
  return (
    <>
      <LekcijaMenu broj="2" naziv="Damir" />
      <Container>
        <Row>
          <Col>
            <div className="mobileTop">
              <center>
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/Group 61.svg"}
                  alt="group 61"
                />
              </center>

              <h2
                className="text-center font-weight-bold text-uppercase"
                id="lekcija"
              >
                2 Damir
              </h2>
            </div>
            <h4 className="text-center">
              <strong>The pronunciation of the pronoun HU(</strong>هُ
              <strong>)</strong>
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
            When the pronoun{" "}
            <strong>
              HU (<span className="arapski-lekcija ">هُ</span>)
            </strong>{" "}
            is preceded by the <strong>long vowel </strong>A{" "}
            <span className="arapski-lekcija">ـــَــ ا</span> , I{" "}
            <span className="arapski-lekcija">ـــِـ ى </span>, U{" "}
            <span className="arapski-lekcija">ـــُــ و</span> or
            <strong>
              {" "}
              sukoon <span className="arapski-lekcija">ــــْـــ</span>
            </strong>{" "}
            , its{" "}
            <strong>
              HU (<span className="arapski-lekcija">هُ</span>)
            </strong>{" "}
            recitation is <u>short</u>:
          </Col>
        </Row>

        <Row className="text-center ">
          <Col>{PlayerRow(data, "row1")}</Col>
        </Row>

        <Row className="text-center reorder-basic rtl ">
          <Col>{PlayerRow(data, "row2")}</Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            When the pronoun{" "}
            <strong>
              HU (<span className="arapski-lekcija">هُ</span>)
            </strong>{" "}
            is preceded by the
            <strong> short vowel</strong> E{" "}
            <span className="arapski-lekcija">ــــَـــ</span> , I{" "}
            <strong>
              <span className="arapski-lekcija">ــــِــ </span>
            </strong>
            or U{" "}
            <strong>
              <span className="arapski-lekcija">ــــُـــ</span>
            </strong>
            , its{" "}
            <strong>
              HU (<span className="arapski-lekcija">هُ</span>)
            </strong>{" "}
            recitation is <u>long</u>:
          </Col>
        </Row>

        <Row className="text-center">
          <Col>{PlayerRow(data, "row3")}</Col>
        </Row>

        <Row className="text-center   reorder-basic rtl">
          <Col>{PlayerRow(data, "row4")}</Col>
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
            <Modal.Title>LESSON</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">
            <Row>
              <Col className="opisLekcije">
                When the pronoun{" "}
                <strong>
                  HU (<span className="arapski-lekcija ">هُ</span>)
                </strong>{" "}
                is preceded by the <strong>long vowel </strong>A{" "}
                <span className="arapski-lekcija">ـــَــ ا</span> , I{" "}
                <span className="arapski-lekcija">ـــِـ ى </span>, U{" "}
                <span className="arapski-lekcija">ـــُــ و</span> or
                <strong>
                  {" "}
                  sukoon <span className="arapski-lekcija">ــــْـــ</span>
                </strong>{" "}
                , its{" "}
                <strong>
                  HU (<span className="arapski-lekcija">هُ</span>)
                </strong>{" "}
                recitation is <u>short</u>:
              </Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row1")}</Col>
            </Row>

            <Row className="text-center rtl">
              <Col>{PlayerRow(data, "row2")}</Col>
            </Row>

            <Row>
              <Col className="opisLekcije">
                When the pronoun{" "}
                <strong>
                  HU (<span className="arapski-lekcija">هُ</span>)
                </strong>{" "}
                is preceded by the
                <strong> short vowel</strong> E{" "}
                <span className="arapski-lekcija">ــــَـــ</span> , I{" "}
                <strong>
                  <span className="arapski-lekcija">ــــِــ </span>
                </strong>
                or U{" "}
                <strong>
                  <span className="arapski-lekcija">ــــُـــ</span>
                </strong>
                , its{" "}
                <strong>
                  HU (<span className="arapski-lekcija">هُ</span>)
                </strong>{" "}
                recitation is <u>long</u>:
              </Col>
            </Row>

            <Row className="text-center">
              <Col>{PlayerRow(data, "row3")}</Col>
            </Row>

            <Row className="text-center rtl">
              <Col>{PlayerRow(data, "row4")}</Col>
            </Row>

            <Row>
              <Col>
                <br />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseL}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <h2 className="text-center" id="vjezba">
          <strong>PRACTICE</strong>
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
              {VjezbeRow(data, "vjezba", "broj11")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj12")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj13")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj14")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj15")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj16")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj17")} ۞
            </span>
          </Col>
        </Row>

        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj18")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj19")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj20")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj21")} ۞
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "broj22")} ۞
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <h2 className="text-center" id="video">
              <strong>VIDEO LECTURE</strong>
            </h2>
            <center>
              <div className="video">
                <iframe
                  width="900"
                  height="506"
                  src="https://www.youtube.com/embed/RCc86f8f3z4?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
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
            <Modal.Title>PRACTICE</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj11")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj12")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj13")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj14")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj15")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj16")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj17")} ۞
                </span>
              </Col>
            </Row>

            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj18")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj19")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj20")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj21")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj22")} ۞
                </span>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Footer prev="/lekcija1" next="/lekcija3" />
      </Container>
    </>
  );
}

export default Lesson2_en