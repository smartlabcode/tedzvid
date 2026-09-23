import React from 'react';
import data from '../Data/L11Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import Arabic from '../Letters/Arabic';
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
		naziv: 'IHFA',
		naslov: '11 IHFA',
		podnaslov: (
			<React.Fragment>
				<strong>Skrivanje harfa N (ن)</strong>

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
						<span className="arapski-lekcija">ــٌــ</span> dođe jedan od 15 harfova:{' '}
						<span style={{ display: 'inline-flex' }}>
							<Arabic arabic="ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق " key="arL11">
								{' '}
								ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق ,
							</Arabic>
						</span>{' '}
						onda se harf <strong>N</strong> (
						<span className="arapski-lekcija">ن</span>) uči kroz nos u trajanju od 2 hareketa, s tim da
						jezik ne dotakne nepce, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row3')}
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
						<span className="arapski-lekcija">ــٌــ</span> dođe jedan od 15 harfova:{' '}
						<span style={{ display: 'inline-flex' }}>
							<Arabic arabic="ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق " key="arL11">
								{' '}
								ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق ,
							</Arabic>
						</span>{' '}
						onda se harf <strong>N</strong> (
						<span className="arapski-lekcija">ن</span>) uči kroz nos u trajanju od 2 hareketa, s tim
						da jezik ne dotakne nepce, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row3')}
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

			</React.Fragment>
		)
	},

	en: {
		naziv: 'IHFA',
		naslov: '11 IKHFAA',
		podnaslov: (
			<React.Fragment>
				<strong>Concealment of N (ن)</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter <strong>N</strong> with <strong>sukoon</strong> (
						<span className="arapski-lekcija">نْ</span>) or{' '}
						<strong>nunation/tanwin</strong> EN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> is following by one
						of the 15 letters:{' '}
						<span style={{ display: 'inline-flex' }}>
							<Arabic arabic="ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق" key="arL11">
								{' '}
								<span style={{ color: 'red', fontSize: '2.5rem' }}>
									ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق
								</span>
								{" ,"}
							</Arabic>
						</span>{' '}
						then a two-beat <strong>N</strong> (
						<span className="arapski-lekcija">ن</span>) is pronounced{' '}
						<u>through nose</u>, without the tongue touching the palate, for
						example:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row3')}
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
			</React.Fragment>
		),
		lekcijaModal: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter <strong>N</strong> with <strong>sukoon</strong>{' '}
						(<span className="arapski-lekcija">نْ</span>) or{' '}
						<strong>nunation/tanwin</strong> EN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> is following by
						one of the 15 letters:{' '}
						<span style={{ display: 'inline-flex' }}>
							<Arabic arabic="ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق" key="arL11">
								{' '}
								<span style={{ color: 'red', fontSize: '2.5rem' }}>
									ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق
								</span>
								{" ,"}
							</Arabic>
						</span>{' '}
						then a two-beat <strong>N</strong> (
						<span className="arapski-lekcija">ن</span>) is pronounced{' '}
						<u>through nose</u>, without the tongue touching the palate, for
						example:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row3')}
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
			</React.Fragment>
		)
	},

	de: {
		naziv: 'IHFA',
		naslov: '11 IHFA',
		podnaslov: (
			<React.Fragment>
				<strong>Verbergen des Buchstabens N (ن)</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn nach dem Buchstaben <strong>N</strong> mit <strong>sukun</strong> (
						<span className="arapski-lekcija">نْ</span>) oder <strong>tanwin</strong> EN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , oder UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> einer der 15 Buchstaben folgt:{' '}
						<span style={{ display: 'inline-flex' }}>
							<Arabic arabic="ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق " key="arL11">
								{' '}
								ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق ,
							</Arabic>
						</span>{' '}
						dann wird <strong>N</strong> (<span className="arapski-lekcija">ن</span>) oder <strong>tanwin</strong>{' '}
						EN <span className="arapski-lekcija">ـــًـــ</span> , in oder un nasal ausgesprochen. Zum Beispiel:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row3')}
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
			</React.Fragment>
		),
		lekcijaModal: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn nach dem Buchstaben <strong>N</strong> mit <strong>sukun</strong> (
						<span className="arapski-lekcija">نْ</span>) oder <strong>tanwin</strong> EN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , oder UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> einer der 15 Buchstaben folgt:{' '}
						<span style={{ display: 'inline-flex' }}>
							<Arabic arabic="ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق " key="arL11">
								{' '}
								ك ت ث ج د ذ ز س ش ص ض ط ظ ف ق ,
							</Arabic>
						</span>{' '}
						dann wird <strong>N</strong> (<span className="arapski-lekcija">ن</span>) oder <strong>tanwin</strong>{' '}
						EN <span className="arapski-lekcija">ـــًـــ</span> , in oder un nasal ausgesprochen. Zum Beispiel:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row3')}
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

function L11() {
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
			<LekcijaMenu broj="11" naziv={t.naziv} />
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
				<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className="zoomIcon" onClick={handleShow} />
				</IconContext.Provider>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} </span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
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
				</section>
				<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.vjezba}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} </span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
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
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="11" />
				<LessonQuiz broj="11" />
				<Footer prev="/lekcija10" next="/lekcija12" />
			</Container>
		</React.Fragment>
	);
}

export default L11;
