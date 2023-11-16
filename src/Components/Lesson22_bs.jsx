import React from 'react';
import data from '../Data/L22Data.json';
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
import { Row, Col, Table, Container } from 'react-bootstrap';

const Lesson22_bs = () => {

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
      <LekcijaMenu broj="22" naziv="MEDD LIN" />
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
                22 MEDD LIN
              </h2>
            </div>
            <h4 className="text-center font-weight-bold ">
              <strong>Poluvokalna dužina</strong>
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
            Kada harfovi <strong>V</strong> ili <strong>J</strong> budu sa{" "}
            <strong>
              sukunom <span className="arapski-lekcija">(يْ / وْ)</span>
            </strong>
            , prije njih <strong>kratki vokal</strong> E{" "}
            <span className="arapski-lekcija">ـــَـــ </span> a poslije njih
            harf sa <strong>sukunom</strong>, bit će medd lin, npr.:
          </Col>
        </Row>

        <Row className="text-center reorder-basic-display-after rtl">
          <Col>
            <span>
              {PlayerRow(data, "row1desni")}
              <span className="arapski">( ـــَــ يْ ـــْــ ) </span>
            </span>
            <span className="after">;</span>
            <span>
              {PlayerRow(data, "row1lijevi")}
              <span className="arapski">( ـــَــ وْ ـــْــ )</span>
            </span>
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

        <Row className="text-center reorder-basic rtl ">
          <Col>{PlayerRow(data, "row2")}</Col>
        </Row>

        <Row className="text-center reorder-basic rtl ">
          <Col>{PlayerRow(data, "row3")}</Col>
        </Row>

        <Row className="text-center ">
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
                  sukunom <span className="arapski-lekcija">(يْ / وْ)</span>
                </strong>
                , prije njih <strong>kratki vokal</strong> E{" "}
                <span className="arapski-lekcija">ـــَـــ </span> a poslije njih
                harf sa <strong>sukunom</strong>, bit će medd lin, npr.:
              </Col>
            </Row>

            <Row className="text-center ">
              <Col>
                <span>
                  <span className="arapski">( ـــَــ يْ ـــْــ ) </span>{" "}
                  {PlayerRow(data, "row1desni")}
                </span>
                <span>
                  <span className="arapski">( ـــَــ وْ ـــْــ )</span>{" "}
                  {PlayerRow(data, "row1lijevi")}
                </span>
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

            <Row className="text-center rtl">
              <Col>{PlayerRow(data, "row2")}</Col>
            </Row>

            <Row className="text-center rtl">
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
          <MdZoomOutMap className="zoomIcon" onClick={handleShow} />
        </IconContext.Provider>
        <Row className="text-center vjezba-row">
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

        <Row className="text-center vjezba-row">
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

        <Row className="text-center vjezba-row">
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

        <Row className="text-center vjezba-row">
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
        <Row>
          <Col>
            <hr />
            <h2 className="text-center" id="video">
              <strong>VIDEO LEKCIJA</strong>
            </h2>
            <center>
              <div className="video">
                <iframe
                  width="900"
                  height="506"
                  src="https://www.youtube.com/embed/9MqFOGaeaH0?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
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
            <Row className="text-center vjezba-row">
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

            <Row className="text-center vjezba-row">
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

            <Row className="text-center vjezba-row">
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

            <Row className="text-center vjezba-row">
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
    </>
  );
}

export default Lesson22_bs