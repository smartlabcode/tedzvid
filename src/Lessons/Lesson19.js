import React from 'react';
import data from '../Data/L19Data.json';
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
		naziv: 'MEDD MUNFESIL',
		naslov: '19 MEDD MUNFESIL',
		podnaslov: (
			<React.Fragment>
				<strong>Rastavljena dužina</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije ">
						Kada poslije <strong>dugog vokala</strong> A <span className="arapski-lekcija">ـــَــ ا</span> ,
						I <span className="arapski-lekcija"> ـــِـ ى</span> , U{' '}
						<span className="arapski-lekcija" style={{ lineHeight: '1.8em' }}>
							ـــُــ و
						</span>{' '}
						dođe <strong>hemze</strong> ili <strong>elif</strong> <u>na početku sljedeće</u> riječi, bit će
						medd munfesil. Traje 4-5 hareketa,npr.:
						<span style={{ lineHeight: '1.5em' }}>{P('row1')}</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="opisLekcije text-center  reorder-basic-display-after">
					<Col>
						<pre> „turska štampa“</pre>
					</Col>
					-
					<Col>
						<pre> „medinska štampa“</pre>
					</Col>
				</Row>

				<Row className="text-center  reorder-basic-display-after">
					<Col>
						{V('rows', 'row2lijevi')}
						{V('rows', 'row2desni')}
					</Col>
				</Row>
				<Row className="text-center  reorder-basic-display-after">
					<Col>
						{V('rows', 'row3lijevi')}
						{V('rows', 'row3desni')}
					</Col>
				</Row>
				<Row className="text-center reorder-basic-display-after">
					<Col>
						{V('rows', 'row4lijevi')}
						{V('rows', 'row4desni')}
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
					<Col className="opisLekcije ">
						Kada poslije <strong>dugog vokala</strong> A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija"> ـــِـ ى</span> , U{' '}
						<span className="arapski-lekcija" style={{ lineHeight: '1.8em' }}>
							ـــُــ و
						</span>{' '}
						dođe <strong>hemze</strong> ili <strong>elif</strong> <u>na početku sljedeće</u> riječi,
						bit će medd munfesil. Traje 4-5 hareketa,npr.:
						<span style={{ lineHeight: '1.5em' }}>{P('row1')}</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="opisLekcije text-center">
					<Col>
						<pre> „turska štampa“</pre>
					</Col>
					<Col>
						<pre> „medinska štampa“</pre>
					</Col>
				</Row>

				<Row className="text-center reorder-basic">
					<Col>
						{V('rows', 'row2lijevi')}
						{V('rows', 'row2desni')}
					</Col>
				</Row>
				<Row className="text-center reorder-basic">
					<Col>
						{V('rows', 'row3lijevi')}
						{V('rows', 'row3desni')}
					</Col>
				</Row>
				<Row className="text-center reorder-basic">
					<Col>
						{V('rows', 'row4lijevi')}
						{V('rows', 'row4desni')}
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
		naziv: 'AL-MADD AL-MUNFASIL',
		naslov: '19 AL-MADD AL-MUNFASIL',
		podnaslov: (
			<React.Fragment>
				<strong>Disconnected extension</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije ">
						When the <strong>long vowel</strong> A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija"> ـــِـ ى</span> , or U{' '}
						<span className="arapski-lekcija" style={{ lineHeight: '1.8em' }}>
							ـــُــ و
						</span>{' '}
						is followed by <strong>a hamzah</strong> or <strong>elif</strong> at
						the beginning of
						<strong>
							<u> the adjacent word,</u>
						</strong>{' '}
						al-madd al-munfasil occurs. The reciter must extend the word for 4
						to 5 counts, as in:
						<span style={{ lineHeight: '1.5em' }}>
							{P('row1')}
						</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="opisLekcije text-center  reorder-basic-display-after">
					<Col>
						<pre> „Turkish print“</pre>
					</Col>
					-
					<Col>
						<pre> „Madinah print“</pre>
					</Col>
				</Row>

				<Row className="text-center  reorder-basic-display-after">
					<Col>
						{V('rows', 'row2lijevi')}
						{V('rows', 'row2desni')}
					</Col>
				</Row>
				<Row className="text-center  reorder-basic-display-after">
					<Col>
						{V('rows', 'row3lijevi')}
						{V('rows', 'row3desni')}
					</Col>
				</Row>
				<Row className="text-center reorder-basic-display-after">
					<Col>
						{V('rows', 'row4lijevi')}
						{V('rows', 'row4desni')}
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
					<Col className="opisLekcije ">
						When the <strong>long vowel</strong> A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija"> ـــِـ ى</span> or U{' '}
						<span
							className="arapski-lekcija"
							style={{ lineHeight: '1.8em' }}
						>
							ـــُــ و
						</span>{' '}
						is followed by <strong>a hamzah</strong> or{' '}
						<strong>elif</strong> at the beginning of
						<strong>
							<u> the adjacent word,</u>
						</strong>{' '}
						al-madd al-munfasil occurs. The reciter must extend the word for
						4 to 5 counts, as in:
						<span style={{ lineHeight: '1.5em' }}>
							{P('row1')}
						</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="opisLekcije text-center">
					<Col>
						<pre> „Turkish print“</pre>
					</Col>
					<Col>
						<pre> „Madinah print“</pre>
					</Col>
				</Row>

				<Row className="text-center reorder-basic">
					<Col>
						{V('rows', 'row2lijevi')}
						{V('rows', 'row2desni')}
					</Col>
				</Row>
				<Row className="text-center reorder-basic">
					<Col>
						{V('rows', 'row3lijevi')}
						{V('rows', 'row3desni')}
					</Col>
				</Row>
				<Row className="text-center reorder-basic">
					<Col>
						{V('rows', 'row4lijevi')}
						{V('rows', 'row4desni')}
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
		naziv: 'MADD MUNFASIL',
		naslov: '19 MADD MUNFASIL',
		podnaslov: (
			<React.Fragment>
				<strong>Getrennte Dehnung</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije ">
						Wenn nach dem <strong>langen Vokal</strong> A <span className="arapski-lekcija">ـــَــ ا</span> ,
						I <span className="arapski-lekcija"> ـــِـ ى</span> , U{' '}
						<span className="arapski-lekcija" style={{ lineHeight: '1.8em' }}>
							ـــُــ و
						</span>{' '}
						eine <strong>Hamza</strong> oder ein <strong>Alif</strong>{' '}
						<u>am Anfang des nächsten</u> Wortes kommt, ist es Madd Munfasil. Es dauert 4–5 Harakat, z. B.:
						<span style={{ lineHeight: '1.5em' }}>{P('row1')}</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="opisLekcije text-center  reorder-basic-display-after">
					<Col>
						<pre> „türkischer Druck“</pre>
					</Col>
					-
					<Col>
						<pre> „Medina-Druck“</pre>
					</Col>
				</Row>

				<Row className="text-center  reorder-basic-display-after">
					<Col>
						{V('rows', 'row2lijevi')}
						{V('rows', 'row2desni')}
					</Col>
				</Row>
				<Row className="text-center  reorder-basic-display-after">
					<Col>
						{V('rows', 'row3lijevi')}
						{V('rows', 'row3desni')}
					</Col>
				</Row>
				<Row className="text-center reorder-basic-display-after">
					<Col>
						{V('rows', 'row4lijevi')}
						{V('rows', 'row4desni')}
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
					<Col className="opisLekcije ">
						Wenn nach dem <strong>langen Vokal</strong> A{' '}
						<span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija"> ـــِـ ى</span> , U{' '}
						<span className="arapski-lekcija" style={{ lineHeight: '1.8em' }}>
							ـــُــ و
						</span>{' '}
						eine <strong>Hamza</strong> oder ein <strong>Alif</strong>{' '}
						<u>am Anfang des nächsten</u> Wortes kommt, ist es Madd Munfasil. Es dauert 4–5 Harakat,
						z. B.:
						<span style={{ lineHeight: '1.5em' }}>{P('row1')}</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="opisLekcije text-center">
					<Col>
						<pre> „türkischer Druck“</pre>
					</Col>
					<Col>
						<pre> „Medina-Druck“</pre>
					</Col>
				</Row>

				<Row className="text-center reorder-basic">
					<Col>
						{V('rows', 'row2lijevi')}
						{V('rows', 'row2desni')}
					</Col>
				</Row>
				<Row className="text-center reorder-basic">
					<Col>
						{V('rows', 'row3lijevi')}
						{V('rows', 'row3desni')}
					</Col>
				</Row>
				<Row className="text-center reorder-basic">
					<Col>
						{V('rows', 'row4lijevi')}
						{V('rows', 'row4desni')}
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

function L19() {
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
			<LekcijaMenu broj="19" naziv={t.naziv} />
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj5')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj6')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')}</span>
						<span className="tacka">۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} </span>
						<span className="tacka">۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row rtl">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
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
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj6')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center rtl">
							<Col>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')}</span>
								<span className="tacka">۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center rtl">
							<Col>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} </span>
								<span className="tacka">۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row rtl">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
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
				<LessonVideo broj="19" />
				<LessonQuiz broj="19" />
				<Footer prev="/lekcija18" next="/lekcija20" />
			</Container>
		</React.Fragment>
	);
}

export default L19;
