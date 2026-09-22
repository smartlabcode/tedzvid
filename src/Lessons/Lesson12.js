import React from 'react';
import data from '../Data/L12Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import LekcijaMenu from '../Body/LekcijaMenu';
import LessonVideo from '../Body/LessonVideo';
import LessonQuiz from '../Quiz/LessonQuiz';
import VjezbaToolbar from '../Player/VjezbaToolbar';
import { Modal, Button, Row, Col, Container } from '../ui/Bootstrap';
import { MdZoomOutMap } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

// Other
import '../App.scss';

/* Tekst lekcije po jezicima. `P` pušta red primjera, `V` pojedinu riječ iz reda. */
const TXT = {
	bs: {
		naziv: 'IHFA ŠEFEVIJJ',
		naslov: '12 IHFA ŠEFEVIJJ',
		podnaslov: (
			<React.Fragment>
				<strong>Skrivanje harfa M (م)</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije harfa <strong>M</strong> sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">مْ</span>) dođe harf <strong>B</strong> (<span className="arapski-lekcija">ب</span>),
						produžava se izgovor harfa <strong>M</strong> (
						<span className="arapski-lekcija">م</span>) u trajanju od 2 hareketa, npr.:
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic  rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row3')}</Col>
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
						Kada poslije harfa <strong>M</strong> sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">مْ</span>) dođe harf <strong>B</strong> (<span className="arapski-lekcija">ب</span>),
						produžava se izgovor harfa <strong>M</strong> (
						<span className="arapski-lekcija">م</span>) u trajanju od 2 hareketa, npr.:
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row3')}</Col>
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
		naziv: 'IKHFA SHAFAWI',
		naslov: '12 IKHFA SHAFAWI',
		podnaslov: (
			<React.Fragment>
				<strong>Concealment of M (م)</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className='opisLekcije'>
															When the letter <strong>M</strong> with <strong>sukoon</strong> (
					<span className='arapski-lekcija'>مْ</span>) is followed by the letter{' '}
					<strong>B</strong> (<span className='arapski-lekcija'>ب</span>),
					the pronunciation of <strong>M</strong> (
					<span className='arapski-lekcija'>م</span>) is prolonged for two counts, for example:
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic  rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row3')}</Col>
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
																	<Col className='opisLekcije'>
															When the letter <strong>M</strong> with <strong>sukoon</strong> (
					<span className='arapski-lekcija'>مْ</span>) is followed by the letter{' '}
					<strong>B</strong> (<span className='arapski-lekcija'>ب</span>),
					the pronunciation of <strong>M</strong> (
					<span className='arapski-lekcija'>م</span>) is prolonged for two counts, for example:
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>
			</React.Fragment>
		)
	},

	de: {
		naziv: 'ICHFA SCHAFAWI',
		naslov: '12 ICHFA SCHAFAWI',
		podnaslov: (
			<React.Fragment>
				<strong>Den Buchstaben M (م) verstecken</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn nach dem Buchstaben <strong>M</strong> mit <strong>Sukun</strong> (
						<span className="arapski-lekcija">مْ</span>) der Buchstabe <strong>B</strong> (<span className="arapski-lekcija">ب</span>) kommt,
						wird der Buchstabe <strong>M</strong> (
						<span className="arapski-lekcija">م</span>) 2 Harakat lang gesprochen, z. B.:
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic  rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row3')}</Col>
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
						Wenn nach dem Buchstaben <strong>M</strong> mit <strong>Sukun</strong> (
						<span className="arapski-lekcija">مْ</span>) der Buchstabe <strong>B</strong> (<span className="arapski-lekcija">ب</span>) kommt,
						wird der Buchstabe <strong>M</strong> (
						<span className="arapski-lekcija">م</span>) 2 Harakat lang gesprochen, z. B.:
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row3')}</Col>
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

function L12() {
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
			<LekcijaMenu broj="12" naziv={t.naziv} />
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="12" />
				<LessonQuiz broj="12" />
				<Footer prev="/lekcija11" next="/lekcija13" />
			</Container>
		</React.Fragment>
	);
}

export default L12;
