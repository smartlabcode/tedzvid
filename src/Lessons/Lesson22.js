import React from 'react';
import data from '../Data/L22Data.json';
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
		naziv: 'MEDD LIN',
		naslov: '22 MEDD LIN',
		podnaslov: (
			<React.Fragment>
				<strong>Poluvokalna dužina</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada harfovi <strong>V</strong> ili <strong>J</strong> budu sa{' '}
						<strong>
							sukunom <span className="arapski-lekcija">(يْ / وْ)</span>
						</strong>
						, prije njih <strong>kratki vokal</strong> E <span className="arapski-lekcija">ـــَـــ </span> a
						poslije njih harf sa <strong>sukunom</strong>, bit će medd lin, npr.:
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after rtl">
					<Col>
						<span>
							{P('row1desni')}
							<span className="arapski">( ـــَــ يْ ـــْــ ) </span>
						</span>
						<span className="after">;</span>
						<span>
							{P('row1lijevi')}
							<span className="arapski">( ـــَــ وْ ـــْــ )</span>
						</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Ta dužina na harfu <strong>V</strong> <span className="arapski-lekcija"> (و)</span> ili{' '}
						<strong>J</strong> <span className="arapski-lekcija"> (ى)</span> traje 2-4-6 hareketa.
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl ">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center ">
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
						Kada harfovi <strong>V</strong> ili <strong>J</strong> budu sa{' '}
						<strong>
							sukunom <span className="arapski-lekcija">(يْ / وْ)</span>
						</strong>
						, prije njih <strong>kratki vokal</strong> E{' '}
						<span className="arapski-lekcija">ـــَـــ </span> a poslije njih harf sa{' '}
						<strong>sukunom</strong>, bit će medd lin, npr.:
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after rtl">
					<Col>
						<span>
							{P('row1desni')}
							<span className="arapski">( ـــَــ يْ ـــْــ ) </span>
						</span>
						<span className="after">;</span>
						<span>
							{P('row1lijevi')}
							<span className="arapski">( ـــَــ وْ ـــْــ )</span>
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Ta dužina na harfu <strong>V</strong> <span className="arapski-lekcija"> (و)</span> ili{' '}
						<strong>J</strong> <span className="arapski-lekcija"> (ى)</span> traje 2-4-6 hareketa.
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center">
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
		naziv: 'MADDU AL-LEEN',
		naslov: '22 MADDU AL-LEEN',
		podnaslov: (
			<React.Fragment>
				<strong>Semi-vocal length</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the letters <strong>W</strong> or <strong>J</strong> have{' '}
						<strong>
							sukoon <span className="arapski-lekcija">(يْ / وْ)</span>
						</strong>
						, and are preceded by <strong>a short vowel</strong> E{' '}
						<span className="arapski-lekcija">ـــَـــ </span>, and followed by
						the letter with <strong>sukoon</strong>, maddu al-leen occurs, as
						in:
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after rtl">
					<Col>
						<span>
							{P('row1desni')}
							<span className="arapski">( ـــَــ يْ ـــْــ ) </span>
						</span>
						<span className="after">;</span>
						<span>
							{P('row1lijevi')}
							<span className="arapski">( ـــَــ وْ ـــْــ )</span>
						</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						The extension on the letter <strong>W</strong>{' '}
						<span className="arapski-lekcija"> (و)</span> or <strong>J</strong>{' '}
						<span className="arapski-lekcija"> (ى)</span> lasts 2-4-6 counts.
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl ">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center ">
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
						When the letters <strong>W</strong> or <strong>J</strong> have{' '}
						<strong>
							sukoon <span className="arapski-lekcija">(يْ / وْ)</span>
						</strong>
						, and are preceded by <strong>a short vowel</strong> E{' '}
						<span className="arapski-lekcija">ـــَـــ </span>, and followed
						by the letter with <strong>sukoon</strong>, maddu al-leen
						occurs, as in:
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>
						<span>
							{P('row1desni')}
							<span className="arapski">( ـــَــ يْ ـــْــ ) </span>
						</span>
						<span className="after">;</span>
						<span>
							{P('row1lijevi')}
							<span className="arapski">( ـــَــ وْ ـــْــ )</span>
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						The extension on the letter <strong>W</strong>{' '}
						<span className="arapski-lekcija"> (و)</span> or{' '}
						<strong>J</strong> <span className="arapski-lekcija"> (ى)</span>{' '}
						lasts 2-4-6 counts.
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center">
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
		naziv: 'MADD LIN',
		naslov: '22 MADD LIN',
		podnaslov: (
			<React.Fragment>
				<strong>Dehnung des weichen Buchstabens</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn die Buchstaben <strong>W</strong> oder <strong>Y</strong> ein{' '}
						<strong>
							Sukun <span className="arapski-lekcija">(يْ / وْ)</span>
						</strong>
						, davor einen <strong>kurzen Vokal</strong> A <span className="arapski-lekcija">ـــَـــ </span> und
						danach einen Buchstaben mit <strong>Sukun</strong> haben, ist es Madd Lin, z. B.:
					</Col>
				</Row>

				<Row className="text-center reorder-basic-display-after rtl">
					<Col>
						<span>
							{P('row1desni')}
							<span className="arapski">( ـــَــ يْ ـــْــ ) </span>
						</span>
						<span className="after">;</span>
						<span>
							{P('row1lijevi')}
							<span className="arapski">( ـــَــ وْ ـــْــ )</span>
						</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Diese Dehnung auf dem Buchstaben <strong>W</strong> <span className="arapski-lekcija"> (و)</span> oder{' '}
						<strong>Y</strong> <span className="arapski-lekcija"> (ى)</span> dauert 2, 4 oder 6 Harakat.
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center reorder-basic rtl ">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center reorder-basic rtl ">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center ">
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
						Wenn die Buchstaben <strong>W</strong> oder <strong>Y</strong> ein{' '}
						<strong>
							Sukun <span className="arapski-lekcija">(يْ / وْ)</span>
						</strong>
						, davor einen <strong>kurzen Vokal</strong> A{' '}
						<span className="arapski-lekcija">ـــَـــ </span> und danach einen Buchstaben mit{' '}
						<strong>Sukun</strong> haben, ist es Madd Lin, z. B.:
					</Col>
				</Row>

				<Row className="text-center ">
					<Col>
						<span>
							<span className="arapski">( ـــَــ يْ ـــْــ ) </span>{' '}
							{P('row1desni')}
						</span>
						<span>
							<span className="arapski">( ـــَــ وْ ـــْــ )</span>{' '}
							{P('row1lijevi')}
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Diese Dehnung auf dem Buchstaben <strong>W</strong> <span className="arapski-lekcija"> (و)</span> oder{' '}
						<strong>Y</strong> <span className="arapski-lekcija"> (ى)</span> dauert 2, 4 oder 6 Harakat.
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row2')}</Col>
				</Row>

				<Row className="text-center rtl">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center">
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

function L22() {
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
			<LekcijaMenu broj="22" naziv={t.naziv} />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} alt="Group 61" />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase" id="lekcija">{t.naslov}</h2>
						</div>
						<h4 className="text-center font-weight-bold ">{t.podnaslov}</h4>
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
						<span className="tacka">
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')}&nbsp;۞</span>
						</span>
						<span className="tacka">
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')}&nbsp;۞</span>
						</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')}&nbsp;۞</span>
						</span>
						<span className="tacka">
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
						</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
						</span>
						<span className="tacka">
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
						</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')}&nbsp;۞</span>
						</span>
						<span className="tacka">
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')}&nbsp;۞</span>
						</span>
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
								<span className="tacka">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')}&nbsp;۞</span>
								</span>
								<span className="tacka">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')}&nbsp;۞</span>
								</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')}&nbsp;۞</span>
								</span>
								<span className="tacka">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')}&nbsp;۞</span>
								</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')}&nbsp;۞</span>
								</span>
								<span className="tacka">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')}&nbsp;۞</span>
								</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj14')}&nbsp;۞</span>
								</span>
								<span className="tacka">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj15')}&nbsp;۞</span>
								</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="22" />
				<LessonQuiz broj="22" />
				<Footer prev="/lekcija21" next="/lekcija1" />
			</Container>
		</React.Fragment>
	);
}

export default L22;
