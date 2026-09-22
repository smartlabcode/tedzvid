import React from 'react';
import data from '../Data/L15Data.json';
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
		naziv: 'IDGAM MUTEDŽANISEJN',
		naslov: '15 IDGAM MUTEDŽANISEJN',
		podnaslov: (
			<React.Fragment>
				<strong>Uklapanje srodnih harfova</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada dođu jedan do drugog <u>srodni</u> harfovi od kojih je prvi sa <strong>sukunom</strong>, a
						drugi sa <strong>hareketom</strong>, onda se prvi uklapa u drugi iz <u>iste grupe</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong className="">1.</strong>
						<span className="arapski-lekcija"> ط د ت </span> npr.: {P('row1')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>2.</strong> <span className="arapski-lekcija"> ظ ذ ث </span> npr.:{' '}
						{P('row3')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row4')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>3.</strong> <span className="arapski-lekcija"> ب م </span> npr.:{' '}
						{P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-center">{P('row6')}</Col>
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
						Kada dođu jedan do drugog <u>srodni</u> harfovi od kojih je prvi sa{' '}
						<strong>sukunom</strong>, a drugi sa <strong>hareketom</strong>, onda se prvi uklapa u
						drugi iz <u>iste grupe</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong className="">1.</strong>
						<span className="arapski-lekcija"> ط د ت </span> npr.: {P('row1')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>2.</strong> <span className="arapski-lekcija"> ظ ذ ث </span> npr.:{' '}
						{P('row3')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row4')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>3.</strong> <span className="arapski-lekcija"> ب م </span> npr.:{' '}
						{P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-center">{P('row6')}</Col>
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
		naziv: 'IDGHAM MUTAJAANISAYN',
		naslov: '15 IDGHAM MUTAJAANISAYN',
		podnaslov: (
			<React.Fragment>
				<strong>Assimilation of letters of the same origin</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When letters of the same origin stand next to each other, and the
						first letter has <strong>sukoon</strong> while the second has{' '}
						<strong>a short vowel/haraka</strong>, then the former assimilates
						into the latter one from the same group: <u></u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong className="">1.</strong>
						<span className="arapski-lekcija"> ط د ت </span> as in:{' '}
						{P('row1')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>2.</strong> <span className="arapski-lekcija"> ظ ذ ث </span>{' '}
						as in: {P('row3')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row4')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>3.</strong> <span className="arapski-lekcija"> ب م </span>{' '}
						as in: {P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-center">{P('row6')}</Col>
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
						When letters of the same origin stand next to each other, and
						the first letter has <strong>sukoon</strong> while the second
						has <strong>a short vowel/haraka</strong>, then the former
						assimilates into the latter one from the same group: <u></u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong className="">1.</strong>
						<span className="arapski-lekcija"> ط د ت </span> as in:{' '}
						{P('row1')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>2.</strong>{' '}
						<span className="arapski-lekcija"> ظ ذ ث </span> as in:{' '}
						{P('row3')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row4')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>3.</strong>{' '}
						<span className="arapski-lekcija"> ب م </span> as in:{' '}
						{P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-center">{P('row6')}</Col>
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
		naziv: 'IDGHAM MUTADSCHANISAIN',
		naslov: '15 IDGHAM MUTADSCHANISAIN',
		podnaslov: (
			<React.Fragment>
				<strong>Verwandte Buchstaben verschmelzen</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn zwei <u>verwandte</u> Buchstaben nebeneinander stehen und der erste ein{' '}
						<strong>Sukun</strong> trägt, der zweite ein <strong>Vokalzeichen</strong>, dann
						verschmilzt der erste in den zweiten aus <u>derselben Gruppe</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong className="">1.</strong>
						<span className="arapski-lekcija"> ط د ت </span> z. B.: {P('row1')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>2.</strong> <span className="arapski-lekcija"> ظ ذ ث </span> z. B.:{' '}
						{P('row3')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row4')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>3.</strong> <span className="arapski-lekcija"> ب م </span> z. B.:{' '}
						{P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-center">{P('row6')}</Col>
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
						Wenn zwei <u>verwandte</u> Buchstaben nebeneinander stehen und der erste ein{' '}
						<strong>Sukun</strong> trägt, der zweite ein <strong>Vokalzeichen</strong>, dann
						verschmilzt der erste in den zweiten aus <u>derselben Gruppe</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong className="">1.</strong>
						<span className="arapski-lekcija"> ط د ت </span> z. B.: {P('row1')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>2.</strong> <span className="arapski-lekcija"> ظ ذ ث </span> z. B.:{' '}
						{P('row3')}
					</Col>
				</Row>

				<Row className="text-center  rtl">
					<Col className="opisLekcije text-center">{P('row4')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-left">
						<strong>3.</strong> <span className="arapski-lekcija"> ب م </span> z. B.:{' '}
						{P('row5')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-center">{P('row6')}</Col>
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

function L15() {
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
			<LekcijaMenu broj="15" naziv={t.naziv} />
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')}&nbsp;۞</span>
					</Col>
				</Row>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col>
								<span className="tacka">۞{VjezbeRow(data, 'vjezba', 'broj14')} </span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')}&nbsp;۞</span>
							</Col>
						</Row>
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
				<LessonVideo broj="15" />
				<LessonQuiz broj="15" />
				<Footer prev="/lekcija14" next="/lekcija16" />
			</Container>
		</React.Fragment>
	);
}

export default L15;
