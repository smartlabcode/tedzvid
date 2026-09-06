import React from 'react';
import data from '../Data/L10Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import LekcijaMenu from '../Body/LekcijaMenu';
import LessonVideo from '../Body/LessonVideo';
import VjezbaToolbar from '../Player/VjezbaToolbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdZoomOutMap } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

/* Tekst lekcije po jezicima. `P` pušta red primjera, `V` pojedinu riječ iz reda. */
const TXT = {
	bs: {
		naziv: 'IZHAR ŠEFEVIJJ',
		naslov: '10 IZHAR ŠEFEVIJJ',
		podnaslov: (
			<React.Fragment>
				<strong>Čisto izgovaranje harfa M (م)</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada harf <strong>M</strong> sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">مْ</span>) dođe ispred <u>bilo kojeg</u> harfa, <u>osim</u>{' '}
						harfova <strong>B</strong> (
						<span className="arapski-lekcija">ب</span>) i{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>
						, onda se harf
						<strong>
							{' '}
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>{' '}
						izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{P('row1')}
						{V('multirow', 'word1')}
					</Col>
				</Row>
				<Row className="text-center  reorder-basic rtl">
					<Col>{V('multirow', 'word2')}</Col>
				</Row>
				<Row className="text-center  rtl">
					<Col>{V('multirow', 'word3')}</Col>
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

			</React.Fragment>
		),
		lekcijaModal: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada harf <strong>M</strong> sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">مْ</span>) dođe ispred <u>bilo kojeg</u> harfa,{' '}
						<u>osim</u> harfova <strong>B</strong> (<span className="arapski-lekcija">ب</span>) i{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>
						, onda se harf
						<strong>
							{' '}
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>{' '}
						izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder rtl">
					<Col>
						{P('row1')}
						{V('multirow', 'word1')}
					</Col>
				</Row>
				<Row className="text-center reorder rtl">
					<Col>{V('multirow', 'word2')}</Col>
				</Row>
				<Row className="text-center reorder rtl">
					<Col>{V('multirow', 'word3')}</Col>
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

			</React.Fragment>
		)
	},

	en: {
		naziv: 'IDHHAR SHAFAWI',
		naslov: '10 IDHHAR SHAFAWI',
		podnaslov: (
			<React.Fragment>
				<strong>Clear pronunciation of the letter M (م)</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter <strong>M</strong> with a <strong>sukun</strong> (
						<span className="arapski-lekcija">مْ</span>) comes before <u>any</u> letter <u>except</u>{' '}
						the letters <strong>B</strong> (
						<span className="arapski-lekcija">ب</span>) and{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>
						, then the letter
						<strong>
							{' '}
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>{' '}
						is pronounced <u>clearly</u>, that is, without merging, e.g.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{P('row1')}
						{V('multirow', 'word1')}
					</Col>
				</Row>
				<Row className="text-center  reorder-basic rtl">
					<Col>{V('multirow', 'word2')}</Col>
				</Row>
				<Row className="text-center  rtl">
					<Col>{V('multirow', 'word3')}</Col>
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
			</React.Fragment>
		),
		lekcijaModal: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter <strong>M</strong> with a <strong>sukun</strong> (
						<span className="arapski-lekcija">مْ</span>) comes before <u>any</u> letter,{' '}
						<u>except</u> the letters <strong>B</strong> (<span className="arapski-lekcija">ب</span>) and{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>
						, then the letter
						<strong>
							{' '}
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>{' '}
						is pronounced <u>clearly</u>, that is, without merging, e.g.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder rtl">
					<Col>
						{P('row1')}
						{V('multirow', 'word1')}
					</Col>
				</Row>
				<Row className="text-center reorder rtl">
					<Col>{V('multirow', 'word2')}</Col>
				</Row>
				<Row className="text-center reorder rtl">
					<Col>{V('multirow', 'word3')}</Col>
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
			</React.Fragment>
		)
	}
};

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

function L10() {
	const { lang } = useLang();
	const ui = useUI();
	const t = TXT[lang] || TXT[DEFAULT_LANG];
	const R = (row) => PlayerRow(data, row);
	const W = (main, row) => VjezbeRow(data, main, row);

	const [ show, setShow ] = React.useState(false);
	const [ showL, setShowL ] = React.useState(false);

	const handleCloseL = () => setShowL(false);
	const handleShowL = () => setShowL(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
		<React.Fragment>
			<LekcijaMenu broj="10" naziv={t.naziv} />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} alt="Group 61" />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase" id="lekcija">{t.naslov}</h2>
						</div>
						<h4 className="text-center">{t.podnaslov}</h4>
						<hr />
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className="zoomIcon" onClick={handleShowL} />
				</IconContext.Provider>

				{t.lekcija(R, W)}

<Modal show={showL} onHide={handleCloseL} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.lekcija}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">{t.lekcijaModal(R, W)}</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseL}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<section className="vjezba-panel">
				<h2 className="text-center" id="vjezba">
					<strong>{ui.vjezba}</strong>
				</h2>
				<hr />
				<VjezbaToolbar />
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className="zoomIcon" onClick={handleShow} />
				</IconContext.Provider>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj6')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
					</Col>
				</Row>
				</section>
				<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.vjezba}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj6')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="10" />
				<Footer prev="/lekcija9" next="/lekcija11" />
			</Container>
		</React.Fragment>
	);
}

export default L10;
