import React from 'react';
import data from '../Data/L3Data.json';
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
		naziv: 'LAFZATULLAH',
		naslov: '3 LAFZATULLAH',
		podnaslov: (
			<React.Fragment>
				<strong>
					Izgovaranje riječi Allah <span className="arapski-lekcija"> اللّٰه </span>
				</strong>

			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Kada prije riječi Allah <span className="arapski-lekcija"> اللّٰه </span>dođe{' '}
						<strong>vokal</strong> E <span className="arapski-lekcija"> ــــَـــ </span>ili{' '}
						<strong>vokal</strong> U
						<span className="arapski-lekcija">ــــُـــ </span>, riječ Allah
						<span className="arapski-lekcija">اللّٰه </span>se uči <u>krupno</u>
						, npr.:
					</Col>
				</Row>
				<Row className="text-center  reorder-basic ">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center  ">
					<Col>{V('multirow', 'row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Kada prije riječi Allah
						<span className="arapski-lekcija"> اللّٰه</span> dođe <strong>vokal</strong> I
						<span className="arapski-lekcija"> ــــِــ</span>, riječ Allah
						<span className="arapski-lekcija"> اللّٰه</span> se uči <u>tanko</u>
						, npr.:
					</Col>
				</Row>

				<Row className="text-center  reorder-basic ">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  reorder-basic rtl">
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
						Kada prije riječi Allah <span className="arapski-lekcija"> اللّٰه </span>dođe{' '}
						<strong>vokal</strong> E <span className="arapski-lekcija"> ــــَـــ </span>ili{' '}
						<strong>vokal</strong> U
						<span className="arapski-lekcija">ــــُـــ </span>, riječ Allah
						<span className="arapski-lekcija">اللّٰه </span>se uči <u>krupno</u>
						, npr.:
					</Col>
				</Row>
				<Row className="text-center  reorder-basic ">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center  ">
					<Col>{V('multirow', 'row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Kada prije riječi Allah
						<span className="arapski-lekcija"> اللّٰه</span> dođe <strong>vokal</strong> I
						<span className="arapski-lekcija"> ــــِــ</span>, riječ Allah
						<span className="arapski-lekcija"> اللّٰه</span> se uči <u>tanko</u>
						, npr.:
					</Col>
				</Row>

				<Row className="text-center  reorder-basic ">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  reorder-basic rtl">
					<Col>{P('row4')}</Col>
				</Row>

			</React.Fragment>
		)
	},

	en: {
		naziv: 'LAFDHATULLAH',
		naslov: '3 LAFDHATULLAH',
		podnaslov: (
			<React.Fragment>
				<strong>
					Pronouncing the word Allah <span className="arapski-lekcija"> اللّٰه </span>
				</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						When the word Allah <span className="arapski-lekcija"> اللّٰه </span>is preceded by the{' '}
						<strong>vowel</strong> A <span className="arapski-lekcija"> ــــَـــ </span>or the{' '}
						<strong>vowel</strong> U
						<span className="arapski-lekcija">ــــُـــ </span>, the word Allah
						<span className="arapski-lekcija">اللّٰه </span>is recited <u>heavy</u>
						, e.g.:
					</Col>
				</Row>
				<Row className="text-center  reorder-basic ">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center  ">
					<Col>{V('multirow', 'row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						When the word Allah
						<span className="arapski-lekcija"> اللّٰه</span> is preceded by the <strong>vowel</strong> I
						<span className="arapski-lekcija"> ــــِــ</span>, the word Allah
						<span className="arapski-lekcija"> اللّٰه</span> is recited <u>light</u>
						, e.g.:
					</Col>
				</Row>

				<Row className="text-center  reorder-basic ">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  reorder-basic rtl">
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
						When the word Allah <span className="arapski-lekcija"> اللّٰه </span>is preceded by the{' '}
						<strong>vowel</strong> A <span className="arapski-lekcija"> ــــَـــ </span>or the{' '}
						<strong>vowel</strong> U
						<span className="arapski-lekcija">ــــُـــ </span>, the word Allah
						<span className="arapski-lekcija">اللّٰه </span>is recited <u>heavy</u>
						, e.g.:
					</Col>
				</Row>
				<Row className="text-center  reorder-basic ">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center  ">
					<Col>{V('multirow', 'row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						When the word Allah
						<span className="arapski-lekcija"> اللّٰه</span> is preceded by the <strong>vowel</strong> I
						<span className="arapski-lekcija"> ــــِــ</span>, the word Allah
						<span className="arapski-lekcija"> اللّٰه</span> is recited <u>light</u>
						, e.g.:
					</Col>
				</Row>

				<Row className="text-center  reorder-basic ">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  reorder-basic rtl">
					<Col>{P('row4')}</Col>
				</Row>
			</React.Fragment>
		)
	},

	de: {
		naziv: 'LAFDHATULLAH',
		naslov: '3 LAFDHATULLAH',
		podnaslov: (
			<React.Fragment>
				<strong>
					Das Wort Allah <span className="arapski-lekcija"> اللّٰه </span> aussprechen
				</strong>
			</React.Fragment>
		),
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Wenn vor dem Wort Allah <span className="arapski-lekcija"> اللّٰه </span>der{' '}
						<strong>Vokal</strong> A <span className="arapski-lekcija"> ــــَـــ </span>oder der{' '}
						<strong>Vokal</strong> U
						<span className="arapski-lekcija">ــــُـــ </span>steht, wird das Wort Allah
						<span className="arapski-lekcija">اللّٰه </span><u>dick</u> gesprochen, z. B.:
					</Col>
				</Row>
				<Row className="text-center  reorder-basic ">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center  ">
					<Col>{V('multirow', 'row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Wenn vor dem Wort Allah
						<span className="arapski-lekcija"> اللّٰه</span> der <strong>Vokal</strong> I
						<span className="arapski-lekcija"> ــــِــ</span> steht, wird das Wort Allah
						<span className="arapski-lekcija"> اللّٰه</span> <u>dünn</u> gesprochen, z. B.:
					</Col>
				</Row>

				<Row className="text-center  reorder-basic ">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  reorder-basic rtl">
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
						Wenn vor dem Wort Allah <span className="arapski-lekcija"> اللّٰه </span>der{' '}
						<strong>Vokal</strong> A <span className="arapski-lekcija"> ــــَـــ </span>oder der{' '}
						<strong>Vokal</strong> U
						<span className="arapski-lekcija">ــــُـــ </span>steht, wird das Wort Allah
						<span className="arapski-lekcija">اللّٰه </span><u>dick</u> gesprochen, z. B.:
					</Col>
				</Row>
				<Row className="text-center  reorder-basic ">
					<Col>{P('row1')}</Col>
				</Row>
				<Row className="text-center  ">
					<Col>{V('multirow', 'row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Wenn vor dem Wort Allah
						<span className="arapski-lekcija"> اللّٰه</span> der <strong>Vokal</strong> I
						<span className="arapski-lekcija"> ــــِــ</span> steht, wird das Wort Allah
						<span className="arapski-lekcija"> اللّٰه</span> <u>dünn</u> gesprochen, z. B.:
					</Col>
				</Row>

				<Row className="text-center  reorder-basic ">
					<Col>{P('row3')}</Col>
				</Row>

				<Row className="text-center  reorder-basic rtl">
					<Col>{P('row4')}</Col>
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

function L3() {
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
			<LekcijaMenu broj="3" naziv={t.naziv} />
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
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
						<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
					</Col>
				</Row>

				<Row className="text-center">
					<Col className="mobile-row">
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
				</section>
				<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.vjezba}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
							</Col>
						</Row>

						<Row className="text-center">
							<Col className="mobile-row">
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
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<LessonVideo broj="3" />
				<LessonQuiz broj="3" />
				<Footer prev="/lekcija2" next="/lekcija4" />
			</Container>
		</React.Fragment>
	);
}

export default L3;
