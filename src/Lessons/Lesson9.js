import React from 'react';
import data from '../Data/L9Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import Arabic from '../Letters/Arabic';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

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

function L9() {
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
        <LekcijaMenu broj="9" naziv="IZHAR HALKIJJ"></LekcijaMenu>
        <Container>
        <Row>
          <Col>
            <div className="mobileTop">
              <center>
                <img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
              </center>
              <h2 className="text-center font-weight-bold text-uppercase" id="lekcija">IZHAR HALKIJJ</h2>
            </div>
            <h4 className="text-center"><strong>čisto izgovaranje harfa N (ن) ili tenvina</strong></h4>
            <hr/>
          </Col>
        </Row>

        <Row>
				<Col>
					<br />
				</Col>
			</Row>
      <IconContext.Provider value={{ size: "30px", style: { float: 'right' } }}>
	<MdZoomOutMap className="zoomIcon" onClick={handleShowL}></MdZoomOutMap>
</IconContext.Provider>
        <Row>
          <Col className="opisLekcije">
          Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija" >نْ</span>) ili <strong>tenvina</strong> EN <span className="arapski-lekcija" >ـــًـــ</span> , IN <span className="arapski-lekcija">ـــٍــ</span>  , UN <span className="arapski-lekcija" >ــٌــ</span> dođe jedan od šest grlenih harfova:<pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   خ</span><pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   غ</span><pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   ح</span><pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   ع</span><pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   ه</span> <pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   أ  </span>        <pre style={{display:"inline"}}> </pre>onda se harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>) izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row1') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row2') }
            { VjezbeRow(data, 'multirow', 'word1') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
          <strong>IZHAR MUTLAK</strong> – kada poslije harfa <strong>N</strong> sa sukunom (<span className="arapski-lekcija">نْ</span>) <u>u istoj riječi</u> dođu harf <strong>V</strong> (<span className="arapski-lekcija">و</span>) ili <strong>J</strong> (<span className="arapski-lekcija">ي</span>), harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>) se izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row3') }
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
          Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija" >نْ</span>) ili <strong>tenvina</strong> EN <span className="arapski-lekcija" >ـــًـــ</span> , IN <span className="arapski-lekcija">ـــٍــ</span>  , UN <span className="arapski-lekcija" >ــٌــ</span> dođe jedan od šest grlenih harfova:<pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   خ</span><pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   غ</span><pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   ح</span><pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   ع</span><pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   ه</span> <pre style={{display:"inline"}}> </pre><span className="arapski-lekcija" style={{color:"red"}} >   أ  </span>        <pre style={{display:"inline"}}> </pre>onda se harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>) izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row1') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row2') }
            { VjezbeRow(data, 'multirow', 'word1') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
          <strong>IZHAR MUTLAK</strong> – kada poslije harfa <strong>N</strong> sa sukunom (<span className="arapski-lekcija">نْ</span>) <u>u istoj riječi</u> dođu harf <strong>V</strong> (<span className="arapski-lekcija">و</span>) ili <strong>J</strong> (<span className="arapski-lekcija">ي</span>), harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>) se izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row3') }
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
        <h2 className="text-center" id="vjezba" ><strong>VJEŽBA</strong></h2>
        <hr/>
        <Row>
				<Col>
					<br />
				</Col>
			</Row>
      <IconContext.Provider value={{ size: "30px", style: { float: 'right' } }}>
	<MdZoomOutMap className="zoomIcon" onClick={handleShow}></MdZoomOutMap>
</IconContext.Provider>
			<Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
				</Col>
			</Row>
      <Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj19')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj20')} ۞</span>
				</Col>
			</Row>
      <Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj21')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj22')} ۞</span>
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
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
				</Col>
			</Row>
      <Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj19')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj20')} ۞</span>
				</Col>
			</Row>
      <Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj21')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj22')} ۞</span>
				</Col>
			</Row>
	</Modal.Body>
	<Modal.Footer>
	<Button variant="secondary" onClick={handleClose}>
		Zatvori
	</Button>
	</Modal.Footer>
</Modal>
        <Footer prev="/lekcija8" next="/lekcija10" />
        </Container>
        </React.Fragment>
    );
  }

  export default L9;