import React from 'react';
import data from '../Data/L13Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import Arabic from '../Letters/Arabic';
import LekcijaMenu from '../Body/LekcijaMenu';
import LessonVideo from '../Body/LessonVideo';
import LessonQuiz from '../Quiz/LessonQuiz';
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
		naziv: 'KALKALA',
		naslov: '13 KALKALA',
		podnaslov: (
			<React.Fragment>
				<strong>Odskakanje harfova</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">ـــْـــ</span>) dođe jedan od pet harfova:{' '}
						<Arabic key="ar1l13" arabic="د ج ب ط ق">
							د ج ب ط ق
						</Arabic>{' '}
						(sadržanih u izrazu <strong>kutbu džeddin</strong> -{' '}
						<span className="arapski-lekcija" style={{ fontSize: '1.675em' }}>
							قُطْبُ جَدٍّ
						</span>{' '}
						), dolazi do <u>odskakanja</u> navedenih harfova, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl">
					<Col>
						{V('multirow', 'row2')}
						{P('row2')}
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>{V('multirow', 'row3')}</Col>
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
						Kada sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">ـــْـــ</span>) dođe jedan od pet harfova:{' '}
						<Arabic key="ar1l13" arabic="د ج ب ط ق">
							د ج ب ط ق
						</Arabic>{' '}
						(sadržanih u izrazu <strong>kutbu džeddin</strong> -{' '}
						<span className="arapski-lekcija" style={{ fontSize: '1.675em' }}>
							قُطْبُ جَدٍّ
						</span>{' '}
						), dolazi do <u>odskakanja</u> navedenih harfova, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'row2')}
						{P('row2')}
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>{V('multirow', 'row3')}</Col>
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
		naziv: 'QALQALAH',
		naslov: '13 QALQALAH',
		podnaslov: (
			<React.Fragment>
				<strong>Bouncing of the letters</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When one of these five letters carries a <strong>sukun</strong> (
						<span className="arapski-lekcija">ـــْـــ</span>):{' '}
						<Arabic key="ar1l13" arabic="د ج ب ط ق">
							د ج ب ط ق
						</Arabic>{' '}
						(contained in the phrase <strong>qutbu jaddin</strong> -{' '}
						<span className="arapski-lekcija" style={{ fontSize: '1.675em' }}>
							قُطْبُ جَدٍّ
						</span>{' '}
						), those letters <u>bounce</u>, e.g.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl">
					<Col>
						{V('multirow', 'row2')}
						{P('row2')}
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>{V('multirow', 'row3')}</Col>
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
						When one of these five letters carries a <strong>sukun</strong> (
						<span className="arapski-lekcija">ـــْـــ</span>):{' '}
						<Arabic key="ar1l13" arabic="د ج ب ط ق">
							د ج ب ط ق
						</Arabic>{' '}
						(contained in the phrase <strong>qutbu jaddin</strong> -{' '}
						<span className="arapski-lekcija" style={{ fontSize: '1.675em' }}>
							قُطْبُ جَدٍّ
						</span>{' '}
						), those letters <u>bounce</u>, e.g.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'row2')}
						{P('row2')}
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>{V('multirow', 'row3')}</Col>
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
		naziv: 'QALQALA',
		naslov: '13 QALQALA',
		podnaslov: (
			<React.Fragment>
				<strong>Abprallen der Buchstaben</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn einer dieser fünf Buchstaben ein <strong>Sukun</strong> (
						<span className="arapski-lekcija">ـــْـــ</span>) trägt:{' '}
						<Arabic key="ar1l13" arabic="د ج ب ط ق">
							د ج ب ط ق
						</Arabic>{' '}
						(enthalten im Ausdruck <strong>qutbu dschaddin</strong> -{' '}
						<span className="arapski-lekcija" style={{ fontSize: '1.675em' }}>
							قُطْبُ جَدٍّ
						</span>{' '}
						), kommt es zum <u>Abprallen</u> dieser Buchstaben, z. B.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl">
					<Col>
						{V('multirow', 'row2')}
						{P('row2')}
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>{V('multirow', 'row3')}</Col>
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
						Wenn einer dieser fünf Buchstaben ein <strong>Sukun</strong> (
						<span className="arapski-lekcija">ـــْـــ</span>) trägt:{' '}
						<Arabic key="ar1l13" arabic="د ج ب ط ق">
							د ج ب ط ق
						</Arabic>{' '}
						(enthalten im Ausdruck <strong>qutbu dschaddin</strong> -{' '}
						<span className="arapski-lekcija" style={{ fontSize: '1.675em' }}>
							قُطْبُ جَدٍّ
						</span>{' '}
						), kommt es zum <u>Abprallen</u> dieser Buchstaben, z. B.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'row2')}
						{P('row2')}
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>{V('multirow', 'row3')}</Col>
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

function L13() {
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
			<LekcijaMenu broj="13" naziv={t.naziv} />
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>

				<LessonVideo broj="13" />
				<LessonQuiz broj="13" />
				<Footer prev="/lekcija12" next="/lekcija14" />
			</Container>
		</React.Fragment>
	);
}

export default L13;
