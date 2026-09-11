import React from 'react';
import data from '../Data/L9Data.json';
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
		naziv: 'IZHAR HALKIJJ',
		naslov: '9 IZHAR HALKIJJ',
		podnaslov: (
			<React.Fragment>
				<strong>Čisto izgovaranje harfa N (ن) ili tenvina</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija">نْ</span>)
						ili <strong>tenvina</strong> EN <span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> dođe jedan od šest grlenih harfova:<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							خ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							غ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ح
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ع
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ه
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							أ{' '}
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>onda se harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>)
						izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row2')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>IZHAR MUTLAK</strong> – kada poslije harfa <strong>N</strong> sa sukunom (<span className="arapski-lekcija">نْ</span>){' '}
						<u>u istoj riječi</u> dođu harf <strong>V</strong> (<span className="arapski-lekcija">و</span>)
						ili <strong>J</strong> (<span className="arapski-lekcija">ي</span>), harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>)
						se izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
					</Col>
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
		),
		lekcijaModal: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija">نْ</span>)
						ili <strong>tenvina</strong> EN <span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> dođe jedan od šest grlenih harfova:<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							خ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							غ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ح
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ع
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ه
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							أ{' '}
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>onda se harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>)
						izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
					</Col>
				</Row>

				<Row className="text-center reorder rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row2')}
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije">
						<strong>IZHAR MUTLAK</strong> – kada poslije harfa <strong>N</strong> sa sukunom (<span className="arapski-lekcija">نْ</span>){' '}
						<u>u istoj riječi</u> dođu harf <strong>V</strong> (<span className="arapski-lekcija">و</span>)
						ili <strong>J</strong> (<span className="arapski-lekcija">ي</span>), harf{' '}
						<strong>N</strong> (<span className="arapski-lekcija">ن</span>) se izgovara <u>čisto</u>,
						tj. bez uklapanja, npr.:
					</Col>
				</Row>

				<Row className="text-center">
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
		naziv: 'IDHHAR HALQI',
		naslov: '9 IDHHAR HALQI',
		podnaslov: (
			<React.Fragment>
				<strong>Clear pronunciation of the letter N (ن) or tanween</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter <strong>N</strong> with a <strong>sukun</strong> (<span className="arapski-lekcija">نْ</span>)
						or the <strong>tanween</strong> AN <span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> is followed by one of the six throat letters:<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							خ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							غ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ح
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ع
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ه
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							أ{' '}
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>then the letter <strong>N</strong> (<span className="arapski-lekcija">ن</span>)
						is pronounced <u>clearly</u>, that is, without merging, e.g.:
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row2')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>IDHHAR MUTLAQ</strong> – when the letter <strong>N</strong> with a sukun (<span className="arapski-lekcija">نْ</span>){' '}
						is followed <u>within the same word</u> by the letter <strong>W</strong> (<span className="arapski-lekcija">و</span>)
						or <strong>Y</strong> (<span className="arapski-lekcija">ي</span>), the letter <strong>N</strong> (<span className="arapski-lekcija">ن</span>)
						is pronounced <u>clearly</u>, that is, without merging, e.g.:
					</Col>
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
		),
		lekcijaModal: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter <strong>N</strong> with a <strong>sukun</strong> (<span className="arapski-lekcija">نْ</span>)
						or the <strong>tanween</strong> AN <span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> is followed by one of the six throat letters:<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							خ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							غ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ح
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ع
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ه
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							أ{' '}
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>then the letter <strong>N</strong> (<span className="arapski-lekcija">ن</span>)
						is pronounced <u>clearly</u>, that is, without merging, e.g.:
					</Col>
				</Row>

				<Row className="text-center reorder rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row2')}
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije">
						<strong>IDHHAR MUTLAQ</strong> – when the letter <strong>N</strong> with a sukun (<span className="arapski-lekcija">نْ</span>){' '}
						is followed <u>within the same word</u> by the letter <strong>W</strong> (<span className="arapski-lekcija">و</span>)
						or <strong>Y</strong> (<span className="arapski-lekcija">ي</span>), the letter{' '}
						<strong>N</strong> (<span className="arapski-lekcija">ن</span>) is pronounced <u>clearly</u>,
						that is, without merging, e.g.:
					</Col>
				</Row>

				<Row className="text-center">
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
		naziv: 'IDH-HAR HALQI',
		naslov: '9 IDH-HAR HALQI',
		podnaslov: (
			<React.Fragment>
				<strong>Das N (ن) oder das Tanwin deutlich aussprechen</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn nach dem Buchstaben <strong>N</strong> mit <strong>Sukun</strong> (<span className="arapski-lekcija">نْ</span>)
						oder nach dem <strong>Tanwin</strong> AN <span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> einer der sechs Kehlbuchstaben kommt:<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							خ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							غ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ح
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ع
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ه
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							أ{' '}
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>dann wird der Buchstabe <strong>N</strong> (<span className="arapski-lekcija">ن</span>){' '}
						<u>deutlich</u> ausgesprochen, also ohne Verschmelzung, z. B.:
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row2')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>IDH-HAR MUTLAQ</strong> – wenn nach dem Buchstaben <strong>N</strong> mit Sukun (<span className="arapski-lekcija">نْ</span>){' '}
						<u>im selben Wort</u> der Buchstabe <strong>W</strong> (<span className="arapski-lekcija">و</span>)
						oder <strong>Y</strong> (<span className="arapski-lekcija">ي</span>) kommt, wird der Buchstabe <strong>N</strong> (<span className="arapski-lekcija">ن</span>){' '}
						<u>deutlich</u> ausgesprochen, also ohne Verschmelzung, z. B.:
					</Col>
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
		),
		lekcijaModal: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn nach dem Buchstaben <strong>N</strong> mit <strong>Sukun</strong> (<span className="arapski-lekcija">نْ</span>)
						oder nach dem <strong>Tanwin</strong> AN <span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> einer der sechs Kehlbuchstaben kommt:<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							خ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							غ
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ح
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ع
						</span>
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ه
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							أ{' '}
						</span>{' '}
						<pre style={{ display: 'inline' }}> </pre>dann wird der Buchstabe <strong>N</strong> (<span className="arapski-lekcija">ن</span>){' '}
						<u>deutlich</u> ausgesprochen, also ohne Verschmelzung, z. B.:
					</Col>
				</Row>

				<Row className="text-center reorder rtl">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder rtl">
					<Col>
						{V('multirow', 'word1')}
						{P('row2')}
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije">
						<strong>IDH-HAR MUTLAQ</strong> – wenn nach dem Buchstaben <strong>N</strong> mit Sukun (<span className="arapski-lekcija">نْ</span>){' '}
						<u>im selben Wort</u> der Buchstabe <strong>W</strong> (<span className="arapski-lekcija">و</span>)
						oder <strong>Y</strong> (<span className="arapski-lekcija">ي</span>) kommt, wird der Buchstabe{' '}
						<strong>N</strong> (<span className="arapski-lekcija">ن</span>) <u>deutlich</u> ausgesprochen,
						also ohne Verschmelzung, z. B.:
					</Col>
				</Row>

				<Row className="text-center">
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

function L9() {
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
			<LekcijaMenu broj="9" naziv={t.naziv} />
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj20')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj21')} ۞</span>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj20')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj21')} ۞</span>
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
				<LessonVideo broj="9" />
				<LessonQuiz broj="9" />
				<Footer prev="/lekcija8" next="/lekcija10" />
			</Container>
		</React.Fragment>
	);
}

export default L9;
