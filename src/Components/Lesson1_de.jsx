import React from "react";
import data from "../Data/L1Data.json";
import PlayerRow from "../Helpers/PlayerHelper";
import VjezbeRow from "../Helpers/VjezbeHelper";
import Footer from "../Body/MainFooter";
import LekcijaMenu from "../Body/LekcijaMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";

// Bootstrap
import { Row, Col, Table, Container } from "react-bootstrap";

const Lesson1_de = () => {
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

  const renderLession = () => (
    <>
      <Row>
        <Col className="opisLekcije">
          Während der Koranrezitation ist es in folgenden Situationen erlaubt
          anzuhalten: am Ende des Verses, beim Haltezeichen, und wenn der Leser
          Luft holen muss. In diesen Fällen muss der Koranleser wie folgt
          anhalten:
        </Col>
      </Row>
      <Row>
        <Col className="opisLekcije my-3">
          <strong>1.</strong> Wenn das Wort, bei dem er anhält, mit E{" "}
          <span className="arapski-lekcija "> ــــَـــ</span> , I{" "}
          <span className="arapski-lekcija "> ــــِــ</span> , U{" "}
          <span className="arapski-lekcija "> ــــُـــ </span>oder{" "}
          <strong>tanwin</strong> IN{" "}
          <span className="arapski-lekcija "> ــــٍــ </span> , UN{" "}
          <span className="arapski-lekcija"> ـــٌـــ</span> endet, dann liest er
          das Wort mit <strong>sukun</strong>{" "}
          <span className="arapski-lekcija "> ــــْـــ</span> , zum Beispiel:
        </Col>
      </Row>
      <Row className="text-center reorder">
        <Col>{PlayerRow(data, "row1_de")}</Col>
      </Row>
      <Row>
        <Col className="opisLekcije my-3">
          <strong>2.</strong> Wenn das Wort mit <strong>tanwin</strong> EN{" "}
          <span className="arapski-lekcija "> ــــًــ</span> endet, dann hält
          der Leser an, als wäre es ein <strong>langes</strong> A{" "}
          <span className="arapski-lekcija "> ـــَـــ ا </span> , zum Beispiel:
        </Col>
      </Row>
      <Row className="text-center reorder">
        <Col>{PlayerRow(data, "row2_de")}</Col>
      </Row>
      <Row>
        <Col className="opisLekcije my-3">
          <strong>3.</strong> Wenn das Wort mit <strong>langem Vokal</strong> A{" "}
          <span className="arapski-lekcija"> ــــَـــ ا </span> , I{" "}
          <span className="arapski-lekcija">ـــِــ ى</span> oder U{" "}
          <span className="arapski-lekcija">ـــُــ و</span> endet, dann bleibt
          das Wortende <u>unverändert</u>, zum Beispiel:
        </Col>
      </Row>
      <Row className="text-center ">
        <Col>
          {VjezbeRow(data, "row3", "broj1")}
          {VjezbeRow(data, "row3", "broj2")}
          {VjezbeRow(data, "row3", "broj3")}
          {VjezbeRow(data, "row3", "broj4")}
          {VjezbeRow(data, "row3", "broj5")}
        </Col>
      </Row>
      <Row>
        <Col className="opisLekcije my-3">
          <strong>4.</strong> Wenn das Wort mit rundem <strong>T</strong>{" "}
          <span className="arapski-lekcija">(ة/ـة)</span> endet, dann liest man
          es mit dem <strong>H </strong>
          <span className="arapski-lekcija">(ه)</span> am Ende, unabhängig
          davon, ob es mit einem Vokal oder tanwin endet, zum Beispiel:
        </Col>
      </Row>
      <Row className="text-center reorder">
        <Col>{PlayerRow(data, "row4_de")}</Col>
      </Row>
    </>
  );

  const renderLession2 = () => (
    <>
      <Table className="tabela-opis text-center" bordered hover responsive>
        <thead className="text-danger text-uppercase">
          <tr>
            <th>Wenn das Wort mit … endet</th>
            <th>Dann halten wir …</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              E <span className="arapski-lekcija ">ــــَـــ</span> , I{" "}
              <span className="arapski-lekcija "> ــــِــ</span> , U{" "}
              <span className="arapski-lekcija"> ــــُـــ</span> , IN{" "}
              <span className="arapski-lekcija"> ـــٍـــ </span> , oder UN{" "}
              <span className="arapski-lekcija"> ـــٌــ</span>
            </td>
            <td>
              als wäre es ein sukun{" "}
              <span className="arapski-lekcija "> ـــْــ</span>
            </td>
          </tr>
          <tr>
            <td>
              EN <span className="arapski-lekcija "> ـــًــ</span>
            </td>
            <td>
              als wäre es ein A{" "}
              <span className="arapski-lekcija"> ــَــ ا</span>
            </td>
          </tr>
          <tr>
            <td>
              langem A <span className="arapski-lekcija">ـــَــ ا</span> , I{" "}
              <span className="arapski lekcija">ـــِـ ى</span> , oder U{" "}
              <span className="arapski-lekcija">ـــُــ و</span>
            </td>
            <td>ohne Veränderung</td>
          </tr>
          <tr>
            <td>
              rundem T <span className="arapski-lekcija"> (ة/ـة)</span>
            </td>
            <td>
              als wäre es ein H <span className="arapski-lekcija"> (ه)</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );

  const renderLession3 = () => (
    <>
      {" "}
      <p>
        Über manchen Wörtern im Koran stehen <strong>Haltezeichen</strong>, die
        darauf hinweisen, ob man bei diesem Wort halten muss oder nicht, oder ob
        es vorteilhafter wäre anzuhalten oder weiterzulesen. Diese Haltezeichen
        sind:
      </p>
      <br />
      <Table className="tabela-opis text-center" bordered hover responsive>
        <thead className="text-uppercase">
          <tr>
            <th className="text-danger">Haltepflicht</th>
            <th>es ist besser anzuhalten</th>
            <th>es ist besser weiterzulesen</th>
            <th className="text-danger">Halteverbot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="arapski-lekcija">م</span>
            </td>
            <td>
              <span className="arapski-lekcija"> قف ؛ قلي ؛ ج ؛ ط</span>
            </td>
            <td>
              <span className="arapski-lekcija"> صلي ؛ ق ؛ ص ؛ ز</span>
            </td>
            <td>
              <span className="arapski-lekcija"> لا</span>
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Table className="tabela-opis text-center" bordered hover responsive>
        <thead className="text-uppercase">
          <tr>
            <th>SEKTA</th>
            <th>DREI PUNKTE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="arapski-lekcija"> سكتة ؛ س</span>
              <br />
              Atempause.
            </td>
            <td>
              <span className="arapski-lekcija"> رَيْبَۚۛ ف۪يهِۚۛ </span>
              <br />
              Anhalten an einem der zwei Wörter mit den drei Punkten ∴ und
              verpflichtendes Weiterlesen beim zweiten.
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
      <p>
        <strong>WICHTIG</strong>: Wenn sich das Zeichen kurz{" "}
        <span className="arapski-lekcija"> قصر</span> unter einem Wort befindet,
        dann liest man es <u>kurz</u>. Wenn sich dieses Zeichen lang
        <span className="arapski-lekcija"> مد </span> unter einem Wort befindet,
        dann liest man es <u>lang</u>.
      </p>
    </>
  );

  return (
    <>
      <LekcijaMenu broj="1" naziv="VAKF" />
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

              <h2 className="text-center font-weight-bold text-uppercase">
                1 Vakf
              </h2>
            </div>

            <h4 className="text-center" id="lekcija">
              <strong>Das Anhalten</strong>
            </h4>
            <hr />
          </Col>
        </Row>
        <IconContext.Provider
          value={{ size: "30px", style: { float: "right" } }}
        >
          <MdZoomOutMap className="zoomIcon" onClick={handleShowL} />
        </IconContext.Provider>

        {renderLession()}

        <Row>
          <Col className="opisLekcije my-3" id="tabela">
            <IconContext.Provider
              value={{ size: "30px", style: { float: "right" } }}
            >
              <MdZoomOutMap className="zoomIcon" onClick={handleShowT} />
            </IconContext.Provider>
            <h3>Tabellenansicht:</h3>
            {renderLession2()}
          </Col>
        </Row>
        <Modal
          show={showT}
          onHide={handleCloseT}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tabellenansicht:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">{renderLession2()}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseT}>
              Schließen
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col className="opisLekcije my-3" id="znakovi">
            <IconContext.Provider
              value={{ size: "30px", style: { float: "right" } }}
            >
              <MdZoomOutMap className="zoomIcon" onClick={handleShowZ} />
            </IconContext.Provider>
            <h3>
              <strong>Haltezeichen:</strong>
            </h3>
            <br />
            {renderLession3()}
          </Col>
        </Row>
        <Modal
          show={showZ}
          onHide={handleCloseZ}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Haltezeichen:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">{renderLession3()}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseZ}>
              Schließen
            </Button>
          </Modal.Footer>
        </Modal>
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
        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <Row id="vjezba" className="text-center vjezba-row">
          <Col className="mobile-row rtl">
            <span style={{ marginLeft: "25px" }}>
              {" "}
              {VjezbeRow(data, "vjezba", "red18")}
            </span>
            <span>{VjezbeRow(data, "vjezba", "red19")}</span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "red20")} ۞
              </span>
            </span>
            <span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "red21")} ۞
              </span>
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span className="mobile-row">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "red22")} ۞
              </span>
            </span>
            <span className="mobile-row">
              {VjezbeRow(data, "vjezba", "red23")}
            </span>
            <span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "red24")} ۞
              </span>
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "red25")} ۞
              </span>
            </span>
            <span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "red26")} ۞
              </span>
            </span>
          </Col>
        </Row>
        <Row className="text-center vjezba-row">
          <Col className="mobile-row">
            <span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "red28")} ۞
              </span>
            </span>
            <span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "red29")} ۞
              </span>
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "red30")} ۞
            </span>
            <span className="tacka">
              {VjezbeRow(data, "vjezba", "red31")} ۞
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
                  src="https://www.youtube.com/embed/tAMzotl-tj0?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                ></iframe>
                <iframe
                  src="https://www.youtube.com/embed/j8RAYs_4Afo?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
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
            <Row>
              <Col>
                <br />
              </Col>
            </Row>
            <Row id="vjezba" className="text-center">
              <Col className="mobile-row rtl">
                <span style={{ marginLeft: "50px" }}>
                  {" "}
                  {VjezbeRow(data, "vjezba", "red18")}
                </span>
                <span>{VjezbeRow(data, "vjezba", "red19")}</span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span>
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "red20")} ۞
                  </span>
                </span>
                <span>
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "red21")} ۞
                  </span>
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="mobile-row">
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "red22")} ۞
                  </span>
                </span>
                <span className="mobile-row">
                  {VjezbeRow(data, "vjezba", "red23")}
                </span>
                <span>
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "red24")} ۞
                  </span>
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span>
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "red25")} ۞
                  </span>
                </span>
                <span>
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "red26")} ۞
                  </span>
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span>
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "red28")} ۞
                  </span>
                </span>
                <span>
                  <span className="tacka">
                    {VjezbeRow(data, "vjezba", "red29")} ۞
                  </span>
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "red30")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "red31")} ۞
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

        <Footer prev="/lekcija22" next="/lekcija2/{{lng}}" />
      </Container>
    </>
  );
};

export default Lesson1_de;
