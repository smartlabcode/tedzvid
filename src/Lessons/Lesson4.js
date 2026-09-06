import React from 'react';
import data from '../Data/L4Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
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
		naziv: 'IDGAM MISLEJN',
		naslov: '4 IDGAM MISLEJN',
		podnaslov: (
			<React.Fragment>
				<strong>Uklapanje istih harfova</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije bilo kojeg harfa sa{' '}
						<strong>
							sukunom <span className="arapski-lekcija">ـــْــ</span>
						</strong>{' '}
						dođe <u>isti</u> harf sa <strong>hareketom</strong>, dolazi do <u>potpunog</u> uklapanja, tj.
						prvi harf se ne uči, a drugi se uči sa <strong>tešdidom</strong>, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>,
				</Row>

				<Row className="text-center mobile-row rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center mobile-row  rtl">
					<Col>{P('row3')}</Col>
				</Row>

			</React.Fragment>
		),
		lekcijaModal: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije bilo kojeg harfa sa{' '}
						<strong>
							sukunom <span className="arapski-lekcija">ـــْــ</span>
						</strong>{' '}
						dođe <u>isti</u> harf sa <strong>hareketom</strong>, dolazi do <u>potpunog</u>{' '}
						uklapanja, tj. prvi harf se ne uči, a drugi se uči sa <strong>tešdidom</strong>, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>,
				</Row>

				<Row className="text-center">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row3')}</Col>
				</Row>

			</React.Fragment>
		)
	},

	en: {
		naziv: 'IDGHAM MITHLAYN',
		naslov: '4 IDGHAM MITHLAYN',
		podnaslov: (
			<React.Fragment>
				<strong>Merging identical letters</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When any letter carrying a{' '}
						<strong>
							sukun <span className="arapski-lekcija">ـــْــ</span>
						</strong>{' '}
						is followed by <u>the same</u> letter carrying a <strong>haraka</strong>, a <u>complete</u>{' '}
						merging takes place: the first letter is not pronounced, and the second is recited with a{' '}
						<strong>tashdeed</strong>, e.g.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>,
				</Row>

				<Row className="text-center mobile-row rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center mobile-row  rtl">
					<Col>{P('row3')}</Col>
				</Row>
			</React.Fragment>
		),
		lekcijaModal: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When any letter carrying a{' '}
						<strong>
							sukun <span className="arapski-lekcija">ـــْــ</span>
						</strong>{' '}
						is followed by <u>the same</u> letter carrying a <strong>haraka</strong>, a <u>complete</u>{' '}
						merging takes place: the first letter is not pronounced, and the second is recited with a{' '}
						<strong>tashdeed</strong>, e.g.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>,
				</Row>

				<Row className="text-center">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row3')}</Col>
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

function L4() {
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
			<LekcijaMenu broj="4" naziv={t.naziv} />
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
				<Row>
					<Col>
						<br />
					</Col>
				</Row>

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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj19')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col />
				</Row>
				</section>
				<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.vjezba}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj19')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col />
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="4" />
				<LessonQuiz broj="4" />
				<Footer prev="/lekcija3" next="/lekcija5" />
			</Container>
		</React.Fragment>
	);
}

export default L4;
