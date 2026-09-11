import React from 'react';
import data from '../Data/L16Data.json';
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
		naziv: 'IDGAM MUTEKARIBEJN',
		naslov: '16 IDGAM MUTEKARIBEJN',
		podnaslov: (
			<React.Fragment>
				<strong>Uklapanje bliskih harfova</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada dođu jedan do drugog <u>bliski</u> harfovi, prvi sa <strong>sukunom</strong>, a drugi sa{' '}
						<strong>hareketom</strong>, onda se prvi uklapa u drugi iz <u>iste grupe</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije ">
						1. Kada poslije harfa <strong>Q</strong> sa <strong>sukunom</strong>{' '}
						<span className="arapski">(قْ)</span> dođe harf <strong>K</strong>{' '}
						<span className="arapski">(ك)</span> sa <strong>hareketom</strong>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije ">
						2. Kada poslije harfa <strong>L</strong> sa <strong>sukunom</strong>{' '}
						<span className="arapski">(لْ)</span> dođe harf <strong>R</strong>{' '}
						<span className="arapski">(ر)</span> sa <strong>hareketom</strong>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row2')}</Col>
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
						Kada dođu jedan do drugog <u>bliski</u> harfovi, prvi sa <strong>sukunom</strong>, a
						drugi sa <strong>hareketom</strong>, onda se prvi uklapa u drugi iz <u>iste grupe</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije my-3">
						1. Kada poslije harfa <strong>Q</strong> sa <strong>sukunom</strong>{' '}
						<span className="arapski">(قْ)</span> dođe harf <strong>K</strong>{' '}
						<span className="arapski">(ك)</span> sa <strong>hareketom</strong>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije my-3">
						2. Kada poslije harfa <strong>L</strong> sa <strong>sukunom</strong>{' '}
						<span className="arapski">(لْ)</span> dođe harf <strong>R</strong>{' '}
						<span className="arapski">(ر)</span> sa <strong>hareketom</strong>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row2')}</Col>
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
		naziv: 'IDGHAM MUTAQARIBAYN',
		naslov: '16 IDGHAM MUTAQARIBAYN',
		podnaslov: (
			<React.Fragment>
				<strong>Merging close letters</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When two <u>close</u> letters come next to each other, the first carrying a{' '}
						<strong>sukun</strong> and the second a <strong>haraka</strong>, the first merges into the
						second one from the <u>same group</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije ">
						1. When the letter <strong>Q</strong> with a <strong>sukun</strong>{' '}
						<span className="arapski">(قْ)</span> is followed by the letter <strong>K</strong>{' '}
						<span className="arapski">(ك)</span> with a <strong>haraka</strong>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije ">
						2. When the letter <strong>L</strong> with a <strong>sukun</strong>{' '}
						<span className="arapski">(لْ)</span> is followed by the letter <strong>R</strong>{' '}
						<span className="arapski">(ر)</span> with a <strong>haraka</strong>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row2')}</Col>
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
						When two <u>close</u> letters come next to each other, the first carrying a{' '}
						<strong>sukun</strong> and the second a <strong>haraka</strong>, the first merges into
						the second one from the <u>same group</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije my-3">
						1. When the letter <strong>Q</strong> with a <strong>sukun</strong>{' '}
						<span className="arapski">(قْ)</span> is followed by the letter <strong>K</strong>{' '}
						<span className="arapski">(ك)</span> with a <strong>haraka</strong>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije my-3">
						2. When the letter <strong>L</strong> with a <strong>sukun</strong>{' '}
						<span className="arapski">(لْ)</span> is followed by the letter <strong>R</strong>{' '}
						<span className="arapski">(ر)</span> with a <strong>haraka</strong>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row2')}</Col>
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
		naziv: 'IDGHAM MUTAQARIBAIN',
		naslov: '16 IDGHAM MUTAQARIBAIN',
		podnaslov: (
			<React.Fragment>
				<strong>Benachbarte Buchstaben verschmelzen</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn zwei <u>benachbarte</u> Buchstaben nebeneinander stehen, der erste mit{' '}
						<strong>Sukun</strong> und der zweite mit <strong>Vokalzeichen</strong>, dann verschmilzt
						der erste in den zweiten aus <u>derselben Gruppe</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije ">
						1. Wenn nach dem Buchstaben <strong>Q</strong> mit <strong>Sukun</strong>{' '}
						<span className="arapski">(قْ)</span> der Buchstabe <strong>K</strong>{' '}
						<span className="arapski">(ك)</span> mit <strong>Vokalzeichen</strong> kommt:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije ">
						2. Wenn nach dem Buchstaben <strong>L</strong> mit <strong>Sukun</strong>{' '}
						<span className="arapski">(لْ)</span> der Buchstabe <strong>R</strong>{' '}
						<span className="arapski">(ر)</span> mit <strong>Vokalzeichen</strong> kommt:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row2')}</Col>
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
						Wenn zwei <u>benachbarte</u> Buchstaben nebeneinander stehen, der erste mit{' '}
						<strong>Sukun</strong> und der zweite mit <strong>Vokalzeichen</strong>, dann
						verschmilzt der erste in den zweiten aus <u>derselben Gruppe</u>:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije my-3">
						1. Wenn nach dem Buchstaben <strong>Q</strong> mit <strong>Sukun</strong>{' '}
						<span className="arapski">(قْ)</span> der Buchstabe <strong>K</strong>{' '}
						<span className="arapski">(ك)</span> mit <strong>Vokalzeichen</strong> kommt:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row1')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije my-3">
						2. Wenn nach dem Buchstaben <strong>L</strong> mit <strong>Sukun</strong>{' '}
						<span className="arapski">(لْ)</span> der Buchstabe <strong>R</strong>{' '}
						<span className="arapski">(ر)</span> mit <strong>Vokalzeichen</strong> kommt:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{P('row2')}</Col>
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

function L16() {
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
			<LekcijaMenu broj="16" naziv={t.naziv} />
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
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj5')} ۞</span>
						{VjezbeRow(data, 'vjezba', 'broj6')}
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj5')} ۞</span>
								{VjezbeRow(data, 'vjezba', 'broj6')}
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="16" />
				<LessonQuiz broj="16" />
				<Footer prev="/lekcija15" next="/lekcija17" />
			</Container>
		</React.Fragment>
	);
}

export default L16;
