import React from 'react';
import data from '../Data/L14Data.json';
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
		naziv: 'HUKMURRA',
		naslov: '14 HUKMURRA',
		podnaslov: (
			<React.Fragment>
				<strong>
					Izgovor harfa R <span className="arapski-lekcija">(ر)</span>
				</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Harf<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> se uči <u>krupno</u> u sljedećim situacijama:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> kada je harf<strong> R </strong>sa <strong>vokalom</strong> E ({' '}
						{P('row1')}) ili <strong>vokalom</strong> U ( {P('row2')}), npr.:{' '}
						<br />
						{P('row3')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, a prije njeg
						harf sa <strong>vokalom</strong> E (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ رْ{' '}
						</span>
						) ili U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــُـ رْ
						</span>
						), npr.:
						<br />
						{P('row4')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> kada je harf
						<strong>
							<strong> R </strong>
						</strong>
						sa <strong>sukunom</strong>, prije njeg harf sa <strong>sukunom</strong>, a prije toga harf sa{' '} 
						<strong>vokalom</strong> E (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ ــْـ رْ{' '}
						</span>
						) ili U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــُـ ــْـ رْ{' '}
						</span>
						), npr.:<br /> {P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong> (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						), a prije njeg glas sa nestalnom kesrom, npr.: <br />
						{P('row6')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>5.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong> (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						), a poslije njeg jedan od krupnih harfova, npr.:<br /> {P('row7')}
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
						Harf<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> se uči <u>krupno</u> u sljedećim
						situacijama:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> kada je harf<strong> R </strong>sa <strong>vokalom</strong> E ({' '}
						{P('row1')}) ili <strong>vokalom</strong> U ( {P('row2')}),
						npr.: <br />
						{P('row3')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, a prije
						njeg harf sa <strong>vokalom</strong> E (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ رْ{' '}
						</span>
						) ili U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــُـ رْ
						</span>
						), npr.:
						<br />
						{P('row4')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> kada je harf
						<strong>
							<strong> R </strong>
						</strong>
						sa <strong>sukunom</strong>, prije njeg harf sa <strong>sukunom</strong>, a prije toga
						harf sa{' '} 
						<strong>vokalom</strong> E (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ ــْـ رْ{' '}
						</span>
						) ili U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــُـ ــْـ رْ{' '}
						</span>
						), npr.:<br /> {P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong> (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						), a prije njeg glas sa nestalnom kesrom, npr.: <br />
						{P('row6')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>5.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong> (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						), a poslije njeg jedan od krupnih harfova, npr.:<br /> {P('row7')}
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
		naziv: 'HUKM AR-RA',
		naslov: '14 HUKM AR-RA',
		podnaslov: (
			<React.Fragment>
				<strong>
					Pronouncing the letter R <span className="arapski-lekcija">(ر)</span>
				</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						The letter<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> is recited <u>heavy</u> in the following
						situations:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> when the letter<strong> R </strong>carries the <strong>vowel</strong> A ({' '}
						{P('row1')}) or the <strong>vowel</strong> U ( {P('row2')}), e.g.:{' '}
						<br />
						{P('row3')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> when the letter<strong> R </strong>carries a <strong>sukun</strong> and is
						preceded by a letter with the <strong>vowel</strong> A (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ رْ{' '}
						</span>
						) or U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــُـ رْ
						</span>
						), e.g.:
						<br />
						{P('row4')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> when the letter
						<strong>
							<strong> R </strong>
						</strong>
						carries a <strong>sukun</strong>, is preceded by a letter with a <strong>sukun</strong>, and
						before that comes a letter with the <strong>vowel</strong> A (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ ــْـ رْ{' '}
						</span>
						) or U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــُـ ــْـ رْ{' '}
						</span>
						), e.g.:<br /> {P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> when the letter<strong> R </strong>carries a <strong>sukun</strong> (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						) and is preceded by a sound with a temporary kasra, e.g.: <br />
						{P('row6')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>5.</strong> when the letter<strong> R </strong>carries a <strong>sukun</strong> (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						) and is followed by one of the heavy letters, e.g.:<br /> {P('row7')}
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
						The letter<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> is recited <u>heavy</u> in the following
						situations:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> when the letter<strong> R </strong>carries the <strong>vowel</strong> A ({' '}
						{P('row1')}) or the <strong>vowel</strong> U ( {P('row2')}),
						e.g.: <br />
						{P('row3')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> when the letter<strong> R </strong>carries a <strong>sukun</strong> and is
						preceded by a letter with the <strong>vowel</strong> A (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ رْ{' '}
						</span>
						) or U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــُـ رْ
						</span>
						), e.g.:
						<br />
						{P('row4')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> when the letter
						<strong>
							<strong> R </strong>
						</strong>
						carries a <strong>sukun</strong>, is preceded by a letter with a <strong>sukun</strong>,
						and before that comes a letter with the{' '}
						<strong>vowel</strong> A (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ ــْـ رْ{' '}
						</span>
						) or U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــُـ ــْـ رْ{' '}
						</span>
						), e.g.:<br /> {P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> when the letter<strong> R </strong>carries a <strong>sukun</strong> (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						) and is preceded by a sound with a temporary kasra, e.g.: <br />
						{P('row6')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>5.</strong> when the letter<strong> R </strong>carries a <strong>sukun</strong> (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						) and is followed by one of the heavy letters, e.g.:<br /> {P('row7')}
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
		naziv: 'HUKM AR-RA',
		naslov: '14 HUKM AR-RA',
		podnaslov: (
			<React.Fragment>
				<strong>
					Den Buchstaben R <span className="arapski-lekcija">(ر)</span> aussprechen
				</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Der Buchstabe<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> wird in diesen Fällen <u>dick</u> gesprochen:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> wenn der Buchstabe<strong> R </strong>den <strong>Vokal</strong> A trägt ({' '}
						{P('row1')}) oder den <strong>Vokal</strong> U ( {P('row2')}), z. B.:{' '}
						<br />
						{P('row3')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> wenn der Buchstabe<strong> R </strong>ein <strong>Sukun</strong> trägt und davor
						ein Buchstabe mit dem <strong>Vokal</strong> A steht (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ رْ{' '}
						</span>
						) oder U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــُـ رْ
						</span>
						), z. B.:
						<br />
						{P('row4')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> wenn der Buchstabe
						<strong>
							<strong> R </strong>
						</strong>
						ein <strong>Sukun</strong> trägt, davor ein Buchstabe mit <strong>Sukun</strong> steht und davor ein Buchstabe mit dem{' '} 
						<strong>Vokal</strong> A (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ ــْـ رْ{' '}
						</span>
						) oder U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــُـ ــْـ رْ{' '}
						</span>
						), z. B.:<br /> {P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> wenn der Buchstabe<strong> R </strong>ein <strong>Sukun</strong> trägt (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						) und davor ein Laut mit vorübergehender Kasra steht, z. B.: <br />
						{P('row6')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>5.</strong> wenn der Buchstabe<strong> R </strong>ein <strong>Sukun</strong> trägt (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						) und danach einer der dicken Buchstaben kommt, z. B.:<br /> {P('row7')}
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
						Der Buchstabe<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> wird in diesen Fällen <u>dick</u>
						gesprochen:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> wenn der Buchstabe<strong> R </strong>den <strong>Vokal</strong> A trägt ({' '}
						{P('row1')}) oder den <strong>Vokal</strong> U ( {P('row2')}),
						z. B.: <br />
						{P('row3')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> wenn der Buchstabe<strong> R </strong>ein <strong>Sukun</strong> trägt und
						davor ein Buchstabe mit dem <strong>Vokal</strong> A steht (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ رْ{' '}
						</span>
						) oder U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــُـ رْ
						</span>
						), z. B.:
						<br />
						{P('row4')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> wenn der Buchstabe
						<strong>
							<strong> R </strong>
						</strong>
						ein <strong>Sukun</strong> trägt, davor ein Buchstabe mit <strong>Sukun</strong> steht und
						davor ein Buchstabe mit dem{' '} 
						<strong>Vokal</strong> A (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــَـ ــْـ رْ{' '}
						</span>
						) oder U (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــُـ ــْـ رْ{' '}
						</span>
						), z. B.:<br /> {P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> wenn der Buchstabe<strong> R </strong>ein <strong>Sukun</strong> trägt (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						) und davor ein Laut mit vorübergehender Kasra steht, z. B.: <br />
						{P('row6')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>5.</strong> wenn der Buchstabe<strong> R </strong>ein <strong>Sukun</strong> trägt (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							رْ
						</span>
						) und danach einer der dicken Buchstaben kommt, z. B.:<br /> {P('row7')}
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

function L14() {
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
			<LekcijaMenu broj="14" naziv={t.naziv} />
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
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
				<LessonVideo broj="14" />
				<Footer prev="/lekcija13" next="/lekcija14_2" />
			</Container>
		</React.Fragment>
	);
}

export default L14;
