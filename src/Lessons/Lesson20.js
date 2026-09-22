import React from 'react';
import data from '../Data/L20Data.json';
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
		naziv: 'MEDD LAZIM',
		naslov: '20 MEDD LAZIM',
		podnaslov: (
			<React.Fragment>
				<strong>Stalna dužina</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada poslije <strong>dugog vokala</strong> A <span className="arapski-lekcija">ـــَــ ا</span> ,
						I
						<span className="arapski-lekcija"> ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> dođe harf sa{' '}
						<strong>
							stalnim sukunom <span className="arapski-lekcija"> ـــْــ </span>
						</strong>{' '}
						<strong>
							ili tešdidom <span className="arapski-lekcija"> ـــّــ </span>
						</strong>
						, bit će medd lazim. Traje obavezno 6 hareketa, npr.:
						{P('row1')}
					</Col>
				</Row>

				<Row className="text-center  reorder">
					<Col style={{ flexWrap: 'wrap-reverse' }}>{P('row2')}</Col>
				</Row>
				<Row className="text-center  reorder-basic-display-after rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  ">
					<Col>{P('row4')}</Col>
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
						Kada poslije <strong>dugog vokala</strong> A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I
						<span className="arapski-lekcija"> ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> dođe harf sa{' '}
						<strong>
							stalnim sukunom <span className="arapski-lekcija"> ـــْــ </span>
						</strong>{' '}
						<strong>
							ili tešdidom <span className="arapski-lekcija"> ـــّــ </span>
						</strong>
						, bit će medd lazim. Traje obavezno 6 hareketa, npr.:
						{P('row1')}
					</Col>
				</Row>

				<Row className="text-center  reorder">
					<Col style={{ flexWrap: 'wrap-reverse' }}>{P('row2')}</Col>
				</Row>
				<Row className="text-center  reorder-basic-display-after rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  ">
					<Col>{P('row4')}</Col>
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
		naziv: 'AL-MADD AL-LAZIM',
		naslov: '20 AL-MADD AL-LAZIM',
		podnaslov: (
			<React.Fragment>
				<strong>Mandatory extension</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the <strong>long vowel</strong> A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I
						<span className="arapski-lekcija"> ـــِـ ى </span>, or U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> is followed by{' '}
						<strong>
							a permanent sukoon{' '}
							<span className="arapski-lekcija"> ـــْــ </span>
						</strong>{' '}
						or{' '}
						<strong>
							shaddah <span className="arapski-lekcija">ـــّــ </span>{' '}
							{/*dodo sam "alt+0160" nevidljivi znak umjesto space-a kako bi sastavilo shaddah i arapski znak, kako bi uvijek bili u istom redu */}
						</strong>
						, al-madd al-lazim occurs. The reciter must extend the word for 6
						counts, as in:<br></br>
						{P('row1')}
					</Col>
				</Row>

				<Row className="text-center  reorder">
					<Col style={{ flexWrap: 'wrap-reverse' }}>{P('row2')}</Col>
				</Row>
				<Row className="text-center  reorder-basic-display-after rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  ">
					<Col>{P('row4')}</Col>
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
						When the <strong>long vowel</strong> A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I
						<span className="arapski-lekcija"> ـــِـ ى </span>, or U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> is followed by{' '}
						<strong>
							a permanent sukoon{' '}
							<span className="arapski-lekcija"> ـــْــ </span>
						</strong>{' '}
						or{' '}
						<strong>
							shaddah <span className="arapski-lekcija">ـــّــ </span>{' '}
							{/*dodo sam "alt+0160" nevidljivi znak umjesto space-a kako bi sastavilo shaddah i arapski znak, kako bi uvijek bili u istom redu */}
						</strong>
						, al-madd al-lazim occurs. The reciter must extend the word for
						6 counts, as in:<br></br>
						{P('row1')}
					</Col>
				</Row>

				<Row className="text-center  reorder">
					<Col style={{ flexWrap: 'wrap-reverse' }}>{P('row2')}</Col>
				</Row>
				<Row className="text-center  reorder-basic-display-after rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  ">
					<Col>{P('row4')}</Col>
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
		naziv: 'MADD LAZIM',
		naslov: '20 MADD LAZIM',
		podnaslov: (
			<React.Fragment>
				<strong>Feste Dehnung</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn nach dem <strong>langen Vokal</strong> A <span className="arapski-lekcija">ـــَــ ا</span> ,
						I
						<span className="arapski-lekcija"> ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> ein Buchstabe mit{' '}
						<strong>
							festem Sukun <span className="arapski-lekcija"> ـــْــ </span>
						</strong>{' '}
						<strong>
							oder einer Schadda (Verdopplungszeichen) <span className="arapski-lekcija"> ـــّــ </span>
						</strong>
						kommt, ist es Madd Lazim. Es muss 6 Harakat dauern, z. B.:
						{P('row1')}
					</Col>
				</Row>

				<Row className="text-center  reorder">
					<Col style={{ flexWrap: 'wrap-reverse' }}>{P('row2')}</Col>
				</Row>
				<Row className="text-center  reorder-basic-display-after rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  ">
					<Col>{P('row4')}</Col>
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
						Wenn nach dem <strong>langen Vokal</strong> A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I
						<span className="arapski-lekcija"> ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> ein Buchstabe mit{' '}
						<strong>
							festem Sukun <span className="arapski-lekcija"> ـــْــ </span>
						</strong>{' '}
						<strong>
							oder einer Schadda (Verdopplungszeichen) <span className="arapski-lekcija"> ـــّــ </span>
						</strong>
						kommt, ist es Madd Lazim. Es muss 6 Harakat dauern, z. B.:
						{P('row1')}
					</Col>
				</Row>

				<Row className="text-center  reorder">
					<Col style={{ flexWrap: 'wrap-reverse' }}>{P('row2')}</Col>
				</Row>
				<Row className="text-center  reorder-basic-display-after rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  ">
					<Col>{P('row4')}</Col>
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

function L20() {
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
			<LekcijaMenu broj="20" naziv={t.naziv} />
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
					</Col>
				</Row>
				<hr />

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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')}&nbsp;۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')}&nbsp;۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')}&nbsp;۞</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col />
				</Row>
				</section>
				<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.vjezba}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')}&nbsp;۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj16')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj17')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj18')}&nbsp;۞</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col />
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="20" />
				<LessonQuiz broj="20" />
				<Footer prev="/lekcija19" next="/lekcija21" />
			</Container>
		</React.Fragment>
	);
}

export default L20;
