import React from 'react';
import data from '../Data/L14Data.json';
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
		naziv: 'HUKMURRA',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Harf<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> se uči <u>tanko</u> u sljedećim situacijama:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> kada je harf<strong> R </strong>sa <strong>vokalom</strong> I ({' '}
						{P('row9')} ), npr.: <br />
						{P('row8')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, a prije njeg
						harf sa <strong>vokalom</strong> I (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــــِـــ رْ{' '}
						</span>
						), npr.:
						<br />
						{P('row10')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, prije njeg harf
						sa <strong>sukunom</strong>, a prije toga harf sa <strong>vokalom</strong> I (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــِـ ــْـ رْ{' '}
						</span>
						), npr.:<br />
						{P('row11')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, a prije njeg
						harf <strong>J</strong> također sa <strong>sukunom</strong>, a prije toga harf sa{' '}
						<strong>vokalom</strong> E (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــــَـــ يْـــرْ{' '}
						</span>
						), npr.: {P('row12')}
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
						Harf<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> se uči <u>tanko</u> u sljedećim
						situacijama:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> kada je harf<strong> R </strong>sa <strong>vokalom</strong> I ({' '}
						{P('row9')} ), npr.: {P('row8')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, a prije
						njeg harf sa <strong>vokalom</strong> I (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــــِـــ رْ{' '}
						</span>
						), npr.:
						<br />
						{P('row10')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, prije
						njeg harf sa <strong>sukunom</strong>, a prije toga harf sa
						<strong>vokalom</strong> I (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــِـ ــْـ رْ{' '}
						</span>
						), npr.:
						{P('row11')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, a prije
						njeg harf <strong>J</strong> također sa <strong>sukunom</strong>, a prije toga harf sa{' '}
						<strong>vokalom</strong> E (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــــَـــ يْـــرْ{' '}
						</span>
						), npr.:<br /> {P('row12')}
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
		naziv: 'HUKMURRA',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						The letter<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> is recited{' '}
						<u>non-emphatically</u> in the following situations:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> When the letter<strong> R </strong>appears with
						the <strong>vowel</strong> I ( {P('row9')} ), as in:{' '}
						<br />
						{P('row8')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the letter with the{' '}
						<strong>vowel</strong> I (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــــِـــ رْ{' '}
						</span>
						), as in:
						<br />
						{P('row10')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the{' '}
						<strong>letter with sukoon</strong>, which is in turn preceded by
						the letter with the <strong>vowel</strong> I (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــِـ ــْـ رْ{' '}
						</span>
						), as in:
						<br />
						{P('row11')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the letter{' '}
						<strong>J</strong> with <strong>sukoon</strong>, which is in turn
						preceded by a letter with the <strong>vowel</strong> E (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــــَـــ يْـــرْ{' '}
						</span>
						), as in: {P('row12')}
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
						The letter<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> is recited{' '}
						<u>non-emphatically</u> in the following situations:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> When the letter<strong> R </strong>appears
						with the <strong>vowel</strong> I ( {P('row9')} ),
						as in: <br />
						{P('row8')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the letter with the{' '}
						<strong>vowel</strong> I (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــــِـــ رْ{' '}
						</span>
						), as in:
						<br />
						{P('row10')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the{' '}
						<strong>letter with sukoon</strong>, which is in turn preceded
						by the letter with the <strong>vowel</strong> I (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــِـ ــْـ رْ{' '}
						</span>
						), as in:
						<br />
						{P('row11')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the letter{' '}
						<strong>J</strong> with <strong>sukoon</strong>, which is in
						turn preceded by a letter with the <strong>vowel</strong> E (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــــَـــ يْـــرْ{' '}
						</span>
						), as in: {P('row12')}
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
		naziv: 'HUKMURRA',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Der Buchstabe<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> wird <u>nicht emphatisch</u> in folgenden Situationen
						gelesen:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> Wenn der Buchstabe<strong> R </strong>mit dem <strong>Vokal</strong> I ( {P('row9')} )
						vorkommt, z.B.: <br />
						{P('row8')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> Wenn der Buchstabe<strong> R </strong> <strong>sukun</strong> hat und ihm ein Buchstabe
						mit dem <strong>Vokal</strong> I vorausgeht (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــــِـــ رْ{' '}
						</span>
						), z.B.:
						<br />
						{P('row10')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> Wenn der Buchstabe<strong> R </strong> <strong>sukun</strong> hat und ihm ein Buchstabe
						mit <strong>sukun</strong> vorausgeht, dem wiederum ein Buchstabe mit dem <strong>Vokal</strong> I
						vorausgeht (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــِـ ــْـ رْ{' '}
						</span>
						), z.B.:
						<br />
						{P('row11')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> Wenn der Buchstabe<strong> R </strong> <strong>sukun</strong> hat und ihm der Buchstabe{' '}
						<strong>J</strong> mit <strong>sukun</strong> vorausgeht, dem wiederum ein Buchstabe mit dem{' '}
						<strong>Vokal</strong> E vorausgeht (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــــَـــ يْـــرْ{' '}
						</span>
						), zum Beispiel: {P('row12')}
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
						Der Buchstabe<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> wird <u>nicht emphatisch</u> in folgenden Situationen
						gelesen:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> Wenn der Buchstabe<strong> R </strong>mit dem <strong>Vokal</strong> I ( {P('row9')} )
						vorkommt, z.B.: <br />
						{P('row8')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> Wenn der Buchstabe<strong> R </strong> <strong>sukun</strong> hat und ihm ein Buchstabe
						mit dem <strong>Vokal</strong> I vorausgeht (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــــِـــ رْ{' '}
						</span>
						), z.B.:
						<br />
						{P('row10')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> Wenn der Buchstabe<strong> R </strong> <strong>sukun</strong> hat und ihm ein Buchstabe
						mit <strong>sukun</strong> vorausgeht, dem wiederum ein Buchstabe mit dem <strong>Vokal</strong> I
						vorausgeht (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــِـ ــْـ رْ{' '}
						</span>
						), z.B.:
						<br />
						{P('row11')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> Wenn der Buchstabe<strong> R </strong> <strong>sukun</strong> hat und ihm der Buchstabe{' '}
						<strong>J</strong> mit <strong>sukun</strong> vorausgeht, dem wiederum ein Buchstabe mit dem{' '}
						<strong>Vokal</strong> E vorausgeht (
						<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــــَـــ يْـــرْ{' '}
						</span>
						), zum Beispiel: {P('row12')}
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

function L14_2() {
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
			<LekcijaMenu broj="14.2" naziv={t.naziv} />
			<Container id="lekcija">
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj28')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj29')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj30')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj31')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj32')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj33')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj34')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj35')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj36')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj37')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj38')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj39')}&nbsp;۞</span>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj28')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj29')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj30')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj31')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj32')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj33')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj34')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj35')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj36')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj37')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj38')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj39')}&nbsp;۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="14.2" />
				<LessonQuiz broj="14" />
				<Footer prev="/lekcija14" next="/lekcija15" />
			</Container>
		</React.Fragment>
	);
}

export default L14_2;
