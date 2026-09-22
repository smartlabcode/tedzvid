import React from 'react';
import data from '../Data/L8Data.json';
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
		naziv: 'IKLAB',
		naslov: '8 IKLAB',
		podnaslov: (
			<React.Fragment>
				<strong>Pretvaranje harfa N (ن) u harf M (م)</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">نْ</span>) ili <strong>tenvina</strong> EN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> dođe harf <strong>B</strong> (<span className="arapski-lekcija">ب</span>),
						onda se harf <strong>N</strong> (
						<span className="arapski-lekcija">ن</span>) <u>pretvara</u> u harf{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>
						u trajanju od 2 hareketa:
					</Col>
				</Row>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center  reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>
				<Row className="text-center reorder-basic ">
					<Col>{P('row3')}</Col>
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
						Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">نْ</span>) ili <strong>tenvina</strong> EN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> dođe harf <strong>B</strong> (<span className="arapski-lekcija">ب</span>),
						onda se harf <strong>N</strong> (
						<span className="arapski-lekcija">ن</span>) <u>pretvara</u> u harf{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>
						u trajanju od 2 hareketa:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center reorder rtl">
					<Col>{P('row2')}</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row3')}</Col>
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
		naziv: 'IQLAAB',
		naslov: '8 IQLAAB',
		podnaslov: (
			<React.Fragment>
				<strong>Converting the letter N (ن) into M (م)</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter N with <strong>sukoon</strong> (
						<span className="arapski-lekcija">نْ</span>) or nunation/
						<strong>tanwin</strong> EN (
						<span className="arapski-lekcija">ـــًـــ</span>), IN (
						<span className="arapski-lekcija">ـــٍــ</span>), UN (
						<span className="arapski-lekcija">ــٌــ</span>) is followed by the
						letter <strong>B</strong> (
						<span className="arapski-lekcija">ب</span>), then the letter{' '}
						<strong>N</strong> (<span className="arapski-lekcija">ن</span>) is{' '}
						<u>converted</u> into the letter <strong>M</strong> (
						<span className="arapski-lekcija">م</span>) lasting for two counts.
					</Col>
				</Row>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center  reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>
				<Row className="text-center reorder-basic ">
					<Col>{P('row3')}</Col>
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
						When the letter N with <strong>sukoon</strong> (
						<span className="arapski-lekcija">نْ</span>) or nunation/
						<strong>tanwin</strong> EN (
						<span className="arapski-lekcija">ـــًـــ</span>), IN (
						<span className="arapski-lekcija">ـــٍــ</span>), UN (
						<span className="arapski-lekcija">ــٌــ</span>) is followed by
						the letter <strong>B</strong> (
						<span className="arapski-lekcija">ب</span>), then the letter{' '}
						<strong>N</strong> (<span className="arapski-lekcija">ن</span>)
						is <u>converted</u> into the letter <strong>M</strong> (
						<span className="arapski-lekcija">م</span>) lasting for two
						counts.
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center reorder rtl">
					<Col>{P('row2')}</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row3')}</Col>
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

	de: {
		naziv: 'IQLAB',
		naslov: '8 IQLAB',
		podnaslov: (
			<React.Fragment>
				<strong>Den Buchstaben N (ن) in M (م) verwandeln</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn nach dem Buchstaben <strong>N</strong> mit <strong>Sukun</strong> (
						<span className="arapski-lekcija">نْ</span>) oder nach dem <strong>Tanwin</strong> AN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> der Buchstabe <strong>B</strong> (<span className="arapski-lekcija">ب</span>) kommt,
						dann gilt: Der Buchstabe <strong>N</strong> (
						<span className="arapski-lekcija">ن</span>) <u>verwandelt</u> sich in den Buchstaben{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>
						für die Dauer von 2 Harakat:
					</Col>
				</Row>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center  reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>
				<Row className="text-center reorder-basic ">
					<Col>{P('row3')}</Col>
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
						Wenn nach dem Buchstaben <strong>N</strong> mit <strong>Sukun</strong> (
						<span className="arapski-lekcija">نْ</span>) oder nach dem <strong>Tanwin</strong> AN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> der Buchstabe <strong>B</strong> (<span className="arapski-lekcija">ب</span>) kommt,
						dann gilt: Der Buchstabe <strong>N</strong> (
						<span className="arapski-lekcija">ن</span>) <u>verwandelt</u> sich in den Buchstaben{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>
						für die Dauer von 2 Harakat:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center reorder rtl">
					<Col>{P('row2')}</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row3')}</Col>
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

function L8() {
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
			<LekcijaMenu broj="8" naziv={t.naziv} />
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')}&nbsp;۞</span>
					</Col>
				</Row>{' '}
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')}&nbsp;۞</span>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')}&nbsp;۞</span>
							</Col>
						</Row>{' '}
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')}&nbsp;۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="8" />
				<LessonQuiz broj="8" />
				<Footer prev="/lekcija7" next="/lekcija9" />
			</Container>
		</React.Fragment>
	);
}

export default L8;
