import React from 'react';
import data from '../Data/L2Data.json';
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
		naziv: 'Damir',
		naslov: '2 Damir',
		podnaslov: (
			<React.Fragment>
				<strong>Izgovaranje zamjenice HU(</strong>هُ<strong>)</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada prije zamjenice{' '}
						<strong>
							HU (<span className="arapski-lekcija ">هُ</span>)
						</strong>{' '}
						dođe <strong>dugi vokal </strong>A <span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> ili
						<strong>
							{' '}
							sukun <span className="arapski-lekcija">ــــْـــ</span>
						</strong>{' '}
						, zamjenica{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						se uči <u>kratko</u>:
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Kada prije zamjenice{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						dođe
						<strong> kratki vokal</strong> E <span className="arapski-lekcija">ــــَـــ</span> , I{' '}
						<strong>
							<span className="arapski-lekcija">ــــِــ </span>
						</strong>
						ili U{' '}
						<strong>
							<span className="arapski-lekcija">ــــُـــ</span>
						</strong>
						, zamjenica{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						se uči <u>dugo</u>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center   reorder-basic rtl">
					<Col>{P('row4')}</Col>
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
						Kada prije zamjenice{' '}
						<strong>
							HU (<span className="arapski-lekcija "> هُ</span>)
						</strong>{' '}
						dođe <strong>dugi vokal </strong>A <span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> ili
						<strong>
							{' '}
							sukun <span className="arapski-lekcija">ــــْـــ</span>
						</strong>{' '}
						, zamjenica{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						se uči <u>kratko</u>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Kada prije zamjenice{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						dođe
						<strong> kratki vokal</strong> E <span className="arapski-lekcija">ــــَـــ</span> , I{' '}
						<strong>
							<span className="arapski-lekcija">ــــِــ </span>
						</strong>
						ili U {' '}
						<strong>
							<span className="arapski-lekcija">ــــُـــ</span>
						</strong>
						, zamjenica{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						se uči <u>dugo</u>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row4')}</Col>
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
		naziv: 'DAMIR',
		naslov: '2 Damir',
		podnaslov: (
			<React.Fragment>
				<strong>Pronouncing the pronoun HU(</strong>هُ<strong>)</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the pronoun{' '}
						<strong>
							HU (<span className="arapski-lekcija ">هُ</span>)
						</strong>{' '}
						is preceded by the <strong>long vowel </strong>A <span className="arapski-lekcija">ـــَــ ا</span>{' '}
						, I <span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> or by a
						<strong>
							{' '}
							sukun <span className="arapski-lekcija">ــــْـــ</span>
						</strong>{' '}
						, the pronoun{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						is recited <u>short</u>:
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						When the pronoun{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						is preceded by the
						<strong> short vowel</strong> A <span className="arapski-lekcija">ــــَـــ</span> , I{' '}
						<strong>
							<span className="arapski-lekcija">ــــِــ </span>
						</strong>
						or U{' '}
						<strong>
							<span className="arapski-lekcija">ــــُـــ</span>
						</strong>
						, the pronoun{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						is recited <u>long</u>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center   reorder-basic rtl">
					<Col>{P('row4')}</Col>
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
						When the pronoun{' '}
						<strong>
							HU (<span className="arapski-lekcija "> هُ</span>)
						</strong>{' '}
						is preceded by the <strong>long vowel </strong>A <span className="arapski-lekcija">ـــَــ ا</span>{' '}
						, I <span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> or by a
						<strong>
							{' '}
							sukun <span className="arapski-lekcija">ــــْـــ</span>
						</strong>{' '}
						, the pronoun{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						is recited <u>short</u>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						When the pronoun{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						is preceded by the
						<strong> short vowel</strong> A <span className="arapski-lekcija">ــــَـــ</span> , I{' '}
						<strong>
							<span className="arapski-lekcija">ــــِــ </span>
						</strong>
						or U {' '}
						<strong>
							<span className="arapski-lekcija">ــــُـــ</span>
						</strong>
						, the pronoun{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						is recited <u>long</u>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row4')}</Col>
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
		naziv: 'DAMIR',
		naslov: '2 Damir',
		podnaslov: (
			<React.Fragment>
				<strong>Das Pronomen HU(</strong>هُ<strong>) aussprechen</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kommt vor dem Pronomen{' '}
						<strong>
							HU (<span className="arapski-lekcija ">هُ</span>)
						</strong>{' '}
						ein <strong>langer Vokal </strong>A <span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> oder ein
						<strong>
							{' '}
							Sukun <span className="arapski-lekcija">ــــْـــ</span>
						</strong>{' '}
						, wird das Pronomen{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						<u>kurz</u> gesprochen:
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Kommt vor dem Pronomen{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						ein
						<strong> kurzer Vokal</strong> A <span className="arapski-lekcija">ــــَـــ</span> , I{' '}
						<strong>
							<span className="arapski-lekcija">ــــِــ </span>
						</strong>
						oder U{' '}
						<strong>
							<span className="arapski-lekcija">ــــُـــ</span>
						</strong>
						, wird das Pronomen{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						<u>lang</u> gesprochen:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center   reorder-basic rtl">
					<Col>{P('row4')}</Col>
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
						Kommt vor dem Pronomen{' '}
						<strong>
							HU (<span className="arapski-lekcija "> هُ</span>)
						</strong>{' '}
						ein <strong>langer Vokal </strong>A <span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> oder ein
						<strong>
							{' '}
							Sukun <span className="arapski-lekcija">ــــْـــ</span>
						</strong>{' '}
						, wird das Pronomen{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						<u>kurz</u> gesprochen:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Kommt vor dem Pronomen{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						ein
						<strong> kurzer Vokal</strong> A <span className="arapski-lekcija">ــــَـــ</span> , I{' '}
						<strong>
							<span className="arapski-lekcija">ــــِــ </span>
						</strong>
						oder U {' '}
						<strong>
							<span className="arapski-lekcija">ــــُـــ</span>
						</strong>
						, wird das Pronomen{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						<u>lang</u> gesprochen:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row4')}</Col>
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

function L2() {
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
			<LekcijaMenu broj="2" naziv={t.naziv} />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} alt="group 61" />
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
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
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj20')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj21')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj22')} ۞</span>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
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
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj20')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj21')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj22')} ۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>

				<LessonVideo broj="2" />
				<LessonQuiz broj="2" />
				<Footer prev="/lekcija1" next="/lekcija3" />
			</Container>
		</React.Fragment>
	);
}

export default L2;
