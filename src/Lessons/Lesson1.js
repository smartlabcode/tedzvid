import React from "react";
import data from "../Data/L1Data.json";
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
import { Row, Col, Table, Container } from "react-bootstrap";

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

function L1() {
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

  React.useEffect(() => {
    scrollToHash();
  }, []);
  return (
    <React.Fragment>
      <LekcijaMenu broj="1" naziv="VAKF" />
      <Container>
        <Row>
          <Col>
            <div className="mobileTop">
              <center>
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/Group 61.svg"}
                />
              </center>

              <h2 className="text-center font-weight-bold text-uppercase">
                Vakf
              </h2>
            </div>

            <h4 className="text-center" id="lekcija">
              <strong>Stajanje prilikom učenja</strong>
            </h4>
            <hr />
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
            Prilikom učenja Kur'ana, učač može stati u sljedećim situacijama:
            ako je kraj ajeta, ako postoji znak za stajanje i kada mu ponestane
            daha. To čini na sljedeći način:
          </Col>
        </Row>
        <Row>
          <Col className="opisLekcije my-3">
            <strong>1.</strong> Kada riječ na kojoj staje završava{" "}
            <strong>kratkim vokalom</strong> E{" "}
            <span className="arapski-lekcija "> ــــَـــ</span> , I{" "}
            <span className="arapski-lekcija "> ــــِــ</span>, U{" "}
            <span className="arapski-lekcija "> ــــُـــ </span>ili{" "}
            <strong>tenvinom</strong> IN{" "}
            <span className="arapski-lekcija "> ــــٍــ </span>, UN{" "}
            <span className="arapski-lekcija"> ـــٌـــ</span>, stat će kao da je
            na riječi <strong>sukun</strong>{" "}
            <span className="arapski-lekcija "> ــــْـــ</span>, npr.:
          </Col>
        </Row>
        <Row className="text-center">
          <Col>{PlayerRow(data, "row1")}</Col>
        </Row>
        <Row>
          <Col className="opisLekcije my-3">
            <strong>2.</strong> Kada riječ završava <strong>tenvinom</strong> EN{" "}
            <span className="arapski-lekcija "> ــــًــ</span>, stat će kao da
            je <strong>dugo</strong> A{" "}
            <span className="arapski-lekcija "> ـــَـــ ا </span>, npr.:
          </Col>
        </Row>
        <Row className="text-center">
          <Col>{PlayerRow(data, "row2")}</Col>
        </Row>
        <Row>
          <Col className="opisLekcije my-3">
            <strong>3.</strong> Kada riječ završava{" "}
            <strong>dugim vokalom</strong> A{" "}
            <span className="arapski-lekcija"> ــــَـــ ا </span>,{" "}
            <strong>dugim vokalom</strong> I{" "}
            <span className="arapski-lekcija">ـــِــ ى</span> ili{" "}
            <strong>dugim vokalom</strong> U{" "}
            <span className="arapski-lekcija">ـــُــ و</span>, stat će{" "}
            <u>bez ikakve promjene</u>, npr.:
          </Col>
        </Row>
        <Row className="text-center">
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
            <strong>4.</strong> Kada riječ završava okruglim <strong>T</strong>{" "}
            <span className="arapski-lekcija">(ة/ـة)</span>, stat će kao da je
            napisano slovo <strong>H </strong>
            <span className="arapski-lekcija">(ه)</span>, bez obzira koji je
            vokal ili tenvin napisan na njemu, npr.:
          </Col>
        </Row>
        <Row className="text-center">
          <Col>{PlayerRow(data, "row4")}</Col>
        </Row>
        <Row>
          <Col className="opisLekcije my-3" id="tabela">
		  <IconContext.Provider value={{ size: "30px", style: { float: 'right' } }}>
			<MdZoomOutMap className="zoomIcon" onClick={handleShowT}></MdZoomOutMap>
		</IconContext.Provider>
            <h3>Pregled u tabeli:</h3>
            <Table
              className="tabela-opis text-center"
              bordered
              hover
              responsive
            >
              <thead className="text-danger text-uppercase">
                <tr>
                  <th>Kada riječ završava na</th>
                  <th>Stajemo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    E <span class="arapski-lekcija ">ــــَـــ</span> , I{" "}
                    <span className="arapski-lekcija "> ــــِــ</span> , U{" "}
                    <span className="arapski-lekcija"> ــــُـــ</span> , IN{" "}
                    <span className="arapski-lekcija"> ـــٍـــ </span>, UN{" "}
                    <span className="arapski-lekcija"> ـــٌــ</span>
                  </td>
                  <td>
                    kao da je sukun{" "}
                    <span className="arapski-lekcija "> ـــْــ</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    EN <span className="arapski-lekcija "> ـــًــ</span>
                  </td>
                  <td>
                    kao da je dugo A{" "}
                    <span className="arapski-lekcija"> ــَــ ا</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    dugo A <span className="arapski-lekcija">ـــَــ ا</span> ,
                    dugo I <span className="arapski lekcija">ـــِـ ى</span> ,
                    dugo U <span className="arapski-lekcija">ـــُــ و</span>
                  </td>
                  <td>bez ikakve promjene</td>
                </tr>
                <tr>
                  <td>
                    okruglo T <span className="arapski-lekcija"> (ة/ـة)</span>
                  </td>
                  <td>
                    kao da je H <span className="arapski-lekcija"> (ه)</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
		<Modal
	show={showT}
	onHide={handleCloseT}
	backdrop="static"
	keyboard={false}
	>
	<Modal.Header closeButton>
	<Modal.Title>Pregled u tabeli:</Modal.Title>
	</Modal.Header>
	<Modal.Body className="custom-modal">
            <Table
              className="tabela-opis text-center"
              bordered
              hover
              responsive
            >
              <thead className="text-danger text-uppercase">
                <tr>
                  <th>Kada riječ završava na</th>
                  <th>Stajemo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    E <span class="arapski-lekcija ">ــــَـــ</span> , I{" "}
                    <span className="arapski-lekcija "> ــــِــ</span> , U{" "}
                    <span className="arapski-lekcija"> ــــُـــ</span> , IN{" "}
                    <span className="arapski-lekcija"> ـــٍـــ </span>, UN{" "}
                    <span className="arapski-lekcija"> ـــٌــ</span>
                  </td>
                  <td>
                    kao da je sukun{" "}
                    <span className="arapski-lekcija "> ـــْــ</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    EN <span className="arapski-lekcija "> ـــًــ</span>
                  </td>
                  <td>
                    kao da je dugo A{" "}
                    <span className="arapski-lekcija"> ــَــ ا</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    dugo A <span className="arapski-lekcija">ـــَــ ا</span> ,
                    dugo I <span className="arapski lekcija">ـــِـ ى</span> ,
                    dugo U <span className="arapski-lekcija">ـــُــ و</span>
                  </td>
                  <td>bez ikakve promjene</td>
                </tr>
                <tr>
                  <td>
                    okruglo T <span className="arapski-lekcija"> (ة/ـة)</span>
                  </td>
                  <td>
                    kao da je H <span className="arapski-lekcija"> (ه)</span>
                  </td>
                </tr>
              </tbody>
            </Table>
	</Modal.Body>
	<Modal.Footer>
	<Button variant="secondary" onClick={handleCloseT}>
		Zatvori
	</Button>
	</Modal.Footer>
</Modal>
        <Row>
          <Col className="opisLekcije my-3" id="znakovi">
		  <IconContext.Provider value={{ size: "30px", style: { float: 'right' } }}>
	<MdZoomOutMap className="zoomIcon" onClick={handleShowZ}></MdZoomOutMap>
</IconContext.Provider>
            <h3>
              <strong>Znakovi za stajanje:</strong>
            </h3>
            <br />
            <p>
              Iznad nekih riječi u Kur'anu nalaze se <strong>znakovi</strong>{" "}
              koji označavaju da li se na toj riječi mora stati ili se ne smije,
              da li je bolje stati ili je bolje preći. Ti znakovi su:
            </p>
            <br />
            <Table
              className="tabela-opis text-center"
              bordered
              hover
              responsive
            >
              <thead className="text-uppercase">
                <tr>
                  <th className="text-danger">Mora stati</th>
                  <th>Bolje stati</th>
                  <th>Boje preći</th>
                  <th className="text-danger">Ne smije se stati</th>
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

            <Table
              className="tabela-opis text-center"
              bordered
              hover
              responsive
            >
              <thead className="text-uppercase">
                <tr>
                  <th>Sekta</th>
                  <th>Tri tačkice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="arapski-lekcija"> سكتة ؛ س</span>
                    <br />
                    Pauzira se bez prekidanja daha.
                  </td>
                  <td>
                    <span className="arapski-lekcija"> رَيْبَۚۛ ف۪يهِۚۛ </span>
                    <br />
                    Ukoliko se pauzira na prvom znaku, onda je na drugom
                    obavezno preći i obrnuto.
                  </td>
                </tr>
              </tbody>
            </Table>

            <br />

            <p>
              <strong>NAPOMENA</strong>: Znak{" "}
              <span className="arapski-lekcija"> قصر</span> ispod riječi je znak
              da se vokal ispod kojeg se nalazi uči <u>kratko</u>, a{" "}
              <span className="arapski-lekcija"> مد </span>je znak da se vokal
              uči <u>dugo</u>.
            </p>
          </Col>
        </Row>
		<Modal
	show={showZ}
	onHide={handleCloseZ}
	backdrop="static"
	keyboard={false}
	>
	<Modal.Header closeButton>
	<Modal.Title>Znakovi za stajanje:</Modal.Title>
	</Modal.Header>
	<Modal.Body className="custom-modal">
	<p>
              Iznad nekih riječi u Kur'anu nalaze se <strong>znakovi</strong>{" "}
              koji označavaju da li se na toj riječi mora stati ili se ne smije,
              da li je bolje stati ili je bolje preći. Ti znakovi su:
            </p>
            <br />
            <Table
              className="tabela-opis text-center"
              bordered
              hover
              responsive
            >
              <thead className="text-uppercase">
                <tr>
                  <th className="text-danger">Mora stati</th>
                  <th>Bolje stati</th>
                  <th>Boje preći</th>
                  <th className="text-danger">Ne smije se stati</th>
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

            <Table
              className="tabela-opis text-center"
              bordered
              hover
              responsive
            >
              <thead className="text-uppercase">
                <tr>
                  <th>Sekta</th>
                  <th>Tri tačkice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="arapski-lekcija"> سكتة ؛ س</span>
                    <br />
                    Pauzira se bez prekidanja daha.
                  </td>
                  <td>
                    <span className="arapski-lekcija"> رَيْبَۚۛ ف۪يهِۚۛ </span>
                    <br />
                    Ukoliko se pauzira na prvom znaku, onda je na drugom
                    obavezno preći i obrnuto.
                  </td>
                </tr>
              </tbody>
            </Table>

            <br />

            <p>
              <strong>NAPOMENA</strong>: Znak{" "}
              <span className="arapski-lekcija"> قصر</span> ispod riječi je znak
              da se vokal ispod kojeg se nalazi uči <u>kratko</u>, a{" "}
              <span className="arapski-lekcija"> مد </span>je znak da se vokal
              uči <u>dugo</u>.
            </p>
	</Modal.Body>
	<Modal.Footer>
	<Button variant="secondary" onClick={handleCloseZ}>
		Zatvori
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
            <Modal.Title>LEKCIJA</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal">
            <Row>
              <Col className="opisLekcije">
                Prilikom učenja Kur'ana, učač može stati u sljedećim
                situacijama: ako je kraj ajeta, ako postoji znak za stajanje i
                kada mu ponestane daha. To čini na sljedeći način:
              </Col>
            </Row>
            <Row>
              <Col className="opisLekcije my-3">
                <strong>1.</strong> Kada riječ na kojoj staje završava{" "}
                <strong>kratkim vokalom</strong> E{" "}
                <span className="arapski-lekcija "> ــــَـــ</span> , I{" "}
                <span className="arapski-lekcija "> ــــِــ</span>, U{" "}
                <span className="arapski-lekcija "> ــــُـــ </span>ili{" "}
                <strong>tenvinom</strong> IN{" "}
                <span className="arapski-lekcija "> ــــٍــ </span>, UN{" "}
                <span className="arapski-lekcija"> ـــٌـــ</span>, stat će kao
                da je na riječi <strong>sukun</strong>{" "}
                <span className="arapski-lekcija "> ــــْـــ</span>, npr.:
              </Col>
            </Row>
            <Row className="text-center">
              <Col>{PlayerRow(data, "row1")}</Col>
            </Row>
            <Row>
              <Col className="opisLekcije my-3">
                <strong>2.</strong> Kada riječ završava{" "}
                <strong>tenvinom</strong> EN{" "}
                <span className="arapski-lekcija "> ــــًــ</span>, stat će kao
                da je <strong>dugo</strong> A{" "}
                <span className="arapski-lekcija "> ـــَـــ ا </span>, npr.:
              </Col>
            </Row>
            <Row className="text-center">
              <Col>{PlayerRow(data, "row2")}</Col>
            </Row>
            <Row>
              <Col className="opisLekcije my-3">
                <strong>3.</strong> Kada riječ završava{" "}
                <strong>dugim vokalom</strong> A{" "}
                <span className="arapski-lekcija"> ــــَـــ ا </span>,{" "}
                <strong>dugim vokalom</strong> I{" "}
                <span className="arapski-lekcija">ـــِــ ى</span> ili{" "}
                <strong>dugim vokalom</strong> U{" "}
                <span className="arapski-lekcija">ـــُــ و</span>, stat će{" "}
                <u>bez ikakve promjene</u>, npr.:
              </Col>
            </Row>
            <Row className="text-center">
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
                <strong>4.</strong> Kada riječ završava okruglim{" "}
                <strong>T</strong>{" "}
                <span className="arapski-lekcija">(ة/ـة)</span>, stat će kao da
                je napisano slovo <strong>H </strong>
                <span className="arapski-lekcija">(ه)</span>, bez obzira koji je
                vokal ili tenvin napisan na njemu, npr.:
              </Col>
            </Row>
            <Row className="text-center">
              <Col>{PlayerRow(data, "row4")}</Col>
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
        <IconContext.Provider
          value={{ size: "30px", style: { float: "right" } }}
        >
          <MdZoomOutMap
            className="zoomIcon" onClick={handleShow}></MdZoomOutMap>
        </IconContext.Provider>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <Row id="vjezba" className="text-center">
          <Col className="mobile-row">
            <span>{VjezbeRow(data, "vjezba", "red18")}</span>
            <span>{VjezbeRow(data, "vjezba", "red19")}</span>
          </Col>
        </Row>
        <Row className="text-center">
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
        <Row className="text-center">
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
        <Row className="text-center">
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
        <Row className="text-center">
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
            <Row>
              <Col>
                <br />
              </Col>
            </Row>
            <Row id="vjezba" className="text-center">
              <Col className="mobile-row">
                <span>{VjezbeRow(data, "vjezba", "red18")}</span>
                <span>{VjezbeRow(data, "vjezba", "red19")}</span>
              </Col>
            </Row>
            <Row className="text-center">
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
            <Row className="text-center">
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
            <Row className="text-center">
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
            <Row className="text-center">
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
              Zatvori
            </Button>
          </Modal.Footer>
        </Modal>

        <Footer prev="/lekcija22" next="/lekcija2" />
      </Container>
    </React.Fragment>
  );
}

export default L1;
