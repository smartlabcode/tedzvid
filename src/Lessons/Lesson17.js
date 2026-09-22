import React from 'react';
import data from '../Data/L17Data.json';
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
		naziv: 'MEDD TABIJJ',
		naslov: '17 MEDD TABIJJ',
		podnaslov: 'Obična dužina',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije <strong>dugog vokala </strong>A <span className="arapski-lekcija">ـــَــ ا</span> ,
						I <span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> nema ni <strong>hemzeta</strong> ni{' '}
						<strong>sukuna,</strong>bit će medd tabijj.Traje 2 haraketa, npr.:{P('row1')}
					</Col>
				</Row>

				<Row className="text-center rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after ">
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
						Kada poslije <strong>dugog vokala </strong>A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> nema ni <strong>hemzeta</strong> ni{' '}
						<strong>sukuna,</strong>bit će medd tabijj.Traje 2 haraketa, npr.:{P('row1')}
					</Col>
				</Row>

				<Row className="text-center rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after ">
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
		naziv: 'AL-MADD AL-TABEE’EE',
		naslov: '17 AL-MADD AL-TABEE’EE',
		podnaslov: 'Normal extension',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the <strong>long vowel </strong>A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> does not have{' '}
						<strong>a hamzah</strong> or <strong>sukoon,</strong> al-madd
						al-ttabee’ee occurs. The reciter must extend it for 2 counts, as in:
						{P('row1')}
					</Col>
				</Row>

				<Row className="text-center rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after ">
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
						When the <strong>long vowel </strong>A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> does not have{' '}
						<strong>a hamzah</strong> or <strong>sukoon,</strong> al-madd
						al-ttabee’ee occurs. The reciter must extend it for 2 counts, as
						in: {P('row1')}
					</Col>
				</Row>

				<Row className="text-center rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after ">
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
		naziv: 'MADD TABI’I',
		naslov: '17 MADD TABI’I',
		podnaslov: 'Natürliche Dehnung',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn nach dem <strong>langen Vokal </strong>A <span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> weder eine <strong>Hamza</strong> noch ein{' '}
						<strong>Sukun</strong> folgt, ist es Madd Tabi’i. Es dauert 2 Harakat, z. B.:{P('row1')}
					</Col>
				</Row>

				<Row className="text-center rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after ">
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
						Wenn nach dem <strong>langen Vokal </strong>A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> weder eine <strong>Hamza</strong> noch ein{' '}
						<strong>Sukun</strong> folgt, ist es Madd Tabi’i. Es dauert 2 Harakat, z. B.:{P('row1')}
					</Col>
				</Row>

				<Row className="text-center rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after ">
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

function L17() {
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
			<LekcijaMenu broj="17" naziv={t.naziv} />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} alt="Group 61" />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase" id="lekcija">{t.naslov}</h2>
						</div>
						<h4 className="text-center font-weight-bold">{t.podnaslov}</h4>
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
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} </span>
						<span className="tacka">۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')}{' '}</span>

						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj19')}&nbsp;۞</span>
					</Col>
				</Row>
				</section>
				<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.vjezba}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center rtl">
							<Col>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')} </span>
								<span className="tacka">۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')}{' '}</span>

								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj19')}&nbsp;۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="17" />
				<LessonQuiz broj="17" />
				<Footer prev="/lekcija16" next="/lekcija18" />
			</Container>
		</React.Fragment>
	);
}

export default L17;
