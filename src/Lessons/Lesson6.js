import React from 'react';
import data from '../Data/L6Data.json';
import Footer from '../Body/MainFooter';
import VjezbeRow from '../Helpers/VjezbeHelper';
import PlayerRow from '../Helpers/PlayerHelper';
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
import Arabic from '../Letters/Arabic';
import Player from '../Player/Player';

/* Tekst lekcije po jezicima. `P` pušta red primjera, `V` pojedinu riječ iz reda. */
const TXT = {
	bs: {
		naziv: 'IDGAM MEAL-GUNNEH',
		naslov: '6 IDGAM MEAL-GUNNEH',
		podnaslov: (
			<React.Fragment>
				<strong>Uklapanje sa propuštanjem zraka kroz nos</strong>

			</React.Fragment>
		),
		lekcija: (P, V, r3) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">نْ</span>) ili <strong>tenvina</strong> EN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> dođe jedan od četiri harfa:&nbsp;
						<span
							className="arapski-lekcija"
							style={{ color: 'red', fontSize: '3rem', whiteSpace: 'nowrap' }}
						>
							و ن م ي
						</span>{' '}
						(sadržana u riječi <strong>jemnu</strong> –
						<span className="arapski-lekcija">يَمْنُو</span>), dolazi do uklapanja harfa <strong>N</strong>(
						<span className="arapski-lekcija">ن</span>) u jedan od spomenuta četiri harfa, propuštajući zrak
						kroz nos u trajanju od 2 hareketa, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic ">
					<Col>
						<span key={'key' + data.row3[2].id}>
							<Player url={data.row3[2].url} key={'p' + data.row3[2].id}>
								{r3}
							</Player>
						</span>{' '}
						{data.row3[0].after}
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
		lekcijaModal: (P, V, r3) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (
						<span className="arapski-lekcija">نْ</span>) ili <strong>tenvina</strong> EN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> dođe jedan od četiri harfa:{' '}
						<span
							className="arapski-lekcija"
							style={{ color: 'red', fontSize: '3rem', whiteSpace: 'nowrap' }}
						>
							و ن م ي
						</span>{' '}
						(sadržana u riječi <strong>jemnu</strong> –
						<span className="arapski-lekcija">يَمْنُو</span>), dolazi do uklapanja harfa{' '}
						<strong>N</strong>(
						<span className="arapski-lekcija">ن</span>) u jedan od spomenuta četiri harfa,
						propuštajući zrak kroz nos u trajanju od 2 hareketa, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center ">
					<Col>
						<span key={'key' + data.row3[2].id}>
							<Player url={data.row3[2].url} key={'p' + data.row3[2].id}>
								{r3}
							</Player>
						</span>{' '}
						{data.row3[0].after}
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
		naziv: "IDGHAM MA'AL-GHUNNAH",
		naslov: "6 IDGHAM MA'AL-GHUNNAH",
		podnaslov: (
			<React.Fragment>
				<strong>Merging with nasalisation</strong>
			</React.Fragment>
		),
		lekcija: (P, V, r3) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter <strong>N</strong> with a <strong>sukun</strong> (
						<span className="arapski-lekcija">نْ</span>) or the <strong>tanween</strong> AN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> is followed by one of these four letters:&nbsp;
						<span
							className="arapski-lekcija"
							style={{ color: 'red', fontSize: '3rem', whiteSpace: 'nowrap' }}
						>
							و ن م ي
						</span>{' '}
						(contained in the word <strong>yamnu</strong> –
						<span className="arapski-lekcija">يَمْنُو</span>), the letter <strong>N</strong>(
						<span className="arapski-lekcija">ن</span>) merges into one of those four letters, while letting
						air pass through the nose for the length of 2 harakas, e.g.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic ">
					<Col>
						<span key={'key' + data.row3[2].id}>
							<Player url={data.row3[2].url} key={'p' + data.row3[2].id}>
								{r3}
							</Player>
						</span>{' '}
						{data.row3[0].after}
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
		lekcijaModal: (P, V, r3) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letter <strong>N</strong> with a <strong>sukun</strong> (
						<span className="arapski-lekcija">نْ</span>) or the <strong>tanween</strong> AN{' '}
						<span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> is followed by one of these four letters:{' '}
						<span
							className="arapski-lekcija"
							style={{ color: 'red', fontSize: '3rem', whiteSpace: 'nowrap' }}
						>
							و ن م ي
						</span>{' '}
						(contained in the word <strong>yamnu</strong> –
						<span className="arapski-lekcija">يَمْنُو</span>), the letter{' '}
						<strong>N</strong>(
						<span className="arapski-lekcija">ن</span>) merges into one of those four letters,
						while letting air pass through the nose for the length of 2 harakas, e.g.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center ">
					<Col>
						<span key={'key' + data.row3[2].id}>
							<Player url={data.row3[2].url} key={'p' + data.row3[2].id}>
								{r3}
							</Player>
						</span>{' '}
						{data.row3[0].after}
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

function L6() {
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

	// const r1 = data.row1.map((dat) => {
	//   return (
	//     <span key={"key" + dat.id}>
	//       <Player url={dat.url} key={"p" + dat.id}>
	//         <Arabic arabic={dat.highlight} key={"a" + dat.id}>
	//           {dat.word}
	//         </Arabic>
	//       </Player>{" "}
	//       {dat.after === "break" ? <br /> : dat.after}
	//     </span>
	//   );
	// });

	// const r2 = data.row2.map((dat) => {
	//   return (
	//     <span key={"key" + dat.id}>
	//       <Player url={dat.url} key={"p" + dat.id}>
	//         <Arabic arabic={dat.highlight} key={"a" + dat.id}>
	//           {dat.word}
	//         </Arabic>
	//       </Player>{" "}
	//       {dat.after === "break" ? <br /> : dat.after}
	//     </span>
	//   );
	// });

	const r3 = data.row3.map((dat, ind) => {
		return (
			<Arabic arabic={dat.highlight} key={'a' + dat.id}>
				{dat.word}
			</Arabic>
		);
	});

	return (
		<React.Fragment>
			<LekcijaMenu broj="6" naziv={t.naziv} />
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

				{t.lekcija(R, W, r3)}

<Modal show={showL} onHide={handleCloseL} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.lekcija}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">{t.lekcijaModal(R, W, r3)}</Modal.Body>
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

				<Row className="text-center ">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞ </span>
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
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
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞ </span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞ </span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
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
				<LessonVideo broj="6" />
				<LessonQuiz broj="6" />
				<Footer prev="/lekcija5" next="/lekcija7" />
			</Container>
		</React.Fragment>
	);
}

export default L6;
