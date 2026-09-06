import React from 'react';
import data from '../Data/L5Data.json';
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
		naziv: 'IDGAM MISLEJN MEAL-GUNNEH',
		naslov: '5 IDGAM MISLEJN MEAL-GUNNEH',
		podnaslov: (
			<React.Fragment>
				<strong>Uklapanje istih harfova sa propuštanjem zraka kroz nos</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije harfa <strong>M</strong> <span className="arapski-lekcija">(م)</span> sa{' '}
						<strong>sukunom</strong> dođe harf <strong>M</strong>
						<span className="arapski-lekcija"> (م) </span>sa <strong>hareketom</strong>, dolazi do{' '}
						<u>uklapanja</u> harfa <strong>M</strong>
						<span className="arapski-lekcija"> (م)</span> sa <strong>sukunom</strong> u harf{' '}
						<strong>M</strong>
						<span className="arapski-lekcija"> (م)</span> sa <strong>hareketom</strong>, uz propuštanje
						zraka kroz nos u trajanju od 2 hareketa, npr.:
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl">
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
						Kada poslije harfa <strong>M</strong> <span className="arapski-lekcija">(م)</span> sa{' '}
						<strong>sukunom</strong> dođe harf <strong>M</strong>
						<span className="arapski-lekcija"> (م) </span>sa <strong>hareketom</strong>, dolazi do{' '}
						<u>uklapanja</u> harfa <strong>M</strong>
						<span className="arapski-lekcija"> (م)</span> sa <strong>sukunom</strong> u harf{' '}
						<strong>M</strong>
						<span className="arapski-lekcija"> (م)</span> sa <strong>hareketom</strong>, uz
						propuštanje zraka kroz nos u trajanju od 2 hareketa, npr.:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center rtl">
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
		naziv: "IDGHAM MITHLAYN MA'AL-GHUNNAH",
		naslov: "5 IDGHAM MITHLAYN MA'AL-GHUNNAH",
		podnaslov: (
			<React.Fragment>
				<strong>Merging identical letters with nasalisation</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter <strong>M</strong> <span className="arapski-lekcija">(م)</span> carrying a{' '}
						<strong>sukun</strong> is followed by the letter <strong>M</strong>
						<span className="arapski-lekcija"> (م) </span>carrying a <strong>haraka</strong>, the letter{' '}
						<strong>M</strong>
						<span className="arapski-lekcija"> (م)</span> with the <strong>sukun</strong> <u>merges</u> into
						the letter <strong>M</strong>
						<span className="arapski-lekcija"> (م)</span> with the <strong>haraka</strong>, while letting air
						pass through the nose for the length of 2 harakas, e.g.:
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl">
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
						When the letter <strong>M</strong> <span className="arapski-lekcija">(م)</span> carrying a{' '}
						<strong>sukun</strong> is followed by the letter <strong>M</strong>
						<span className="arapski-lekcija"> (م) </span>carrying a <strong>haraka</strong>, the letter{' '}
						<strong>M</strong>
						<span className="arapski-lekcija"> (م)</span> with the <strong>sukun</strong> <u>merges</u> into
						the letter <strong>M</strong>
						<span className="arapski-lekcija"> (م)</span> with the <strong>haraka</strong>, while letting
						air pass through the nose for the length of 2 harakas, e.g.:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center rtl">
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

function L5() {
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
			<LekcijaMenu broj="5" naziv={t.naziv} />

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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
					</Col>
				</Row>

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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
							</Col>
						</Row>

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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
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

				<LessonVideo broj="5" />
				<LessonQuiz broj="5" />
				<Footer prev="/lekcija4" next="/lekcija6" />
			</Container>
		</React.Fragment>
	);
}

export default L5;
