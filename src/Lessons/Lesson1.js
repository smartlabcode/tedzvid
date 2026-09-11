import React from 'react';
import data from '../Data/L1Data.json';
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
import { Row, Col, Table, Container } from 'react-bootstrap';

// Other
import '../App.scss';

/* kratica za arapski isječak unutar teksta lekcije */
const A = ({ children }) => <span className="arapski-lekcija">{children}</span>;

/* Tekst lekcije po jezicima. `P` pušta red primjera, `V` pojedinu riječ iz reda. */
const TXT = {
	bs: {
		naziv: 'VAKF',
		naslov: '1 Vakf',
		podnaslov: 'Stajanje prilikom učenja',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Prilikom učenja Kur'ana, učač može stati u sljedećim situacijama: ako je kraj ajeta, ako postoji
						znak za stajanje i kada mu ponestane daha. To čini na sljedeći način:
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>1.</strong> Kada riječ na kojoj staje završava <strong>kratkim vokalom</strong> E{' '}
						<A> ــــَـــ</A> , I <A> ــــِــ</A> , U <A> ــــُـــ </A>ili <strong>tenvinom</strong> IN{' '}
						<A> ــــٍــ </A> , UN <A> ـــٌـــ</A> , stat će kao da je na riječi <strong>sukun</strong>{' '}
						<A> ــــْـــ</A> , npr.:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>2.</strong> Kada riječ završava <strong>tenvinom</strong> EN <A> ــــًــ</A> , stat će
						kao da je <strong>dugo</strong> A <A> ـــَـــ ا </A> , npr.:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row2')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>3.</strong> Kada riječ završava <strong>dugim vokalom</strong> A <A> ــــَـــ ا </A> ,{' '}
						<strong>dugim vokalom</strong> I <A>ـــِــ ى</A> ili <strong>dugim vokalom</strong> U{' '}
						<A>ـــُــ و</A> , stat će <u>bez ikakve promjene</u> , npr.:
					</Col>
				</Row>
				<Row className="text-center ">
					<Col>
						{V('row3', 'broj1')}
						{V('row3', 'broj2')}
						{V('row3', 'broj3')}
						{V('row3', 'broj4')}
						{V('row3', 'broj5')}
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>4.</strong> Kada riječ završava okruglim <strong>T</strong> <A>(ة/ـة)</A> , stat će kao
						da je napisano slovo <strong>H </strong>
						<A>(ه)</A> , bez obzira koji je vokal ili tenvin napisan na njemu, npr.:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row4')}</Col>
				</Row>
			</React.Fragment>
		),
		tabela: (
			<Table className="tabela-opis text-center" bordered hover responsive>
				<thead className="text-danger text-uppercase">
					<tr>
						<th>Kada riječ završava na</th>
						<th>Stajemo</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							E <A>ــــَـــ</A> , I <A> ــــِــ</A> , U <A> ــــُـــ</A> , IN <A> ـــٍـــ </A> , UN{' '}
							<A> ـــٌــ</A>
						</td>
						<td>
							kao da je sukun <A> ـــْــ</A>
						</td>
					</tr>
					<tr>
						<td>
							EN <A> ـــًــ</A>
						</td>
						<td>
							kao da je dugo A
							<br />
							<A> ــَــ ا</A>
						</td>
					</tr>
					<tr>
						<td>
							dugo A <A>ـــَــ ا</A> , dugo I <A>ـــِـ ى</A> , dugo U <A>ـــُــ و</A>
						</td>
						<td>bez ikakve promjene</td>
					</tr>
					<tr>
						<td>
							okruglo T <A> (ة/ـة)</A>
						</td>
						<td>
							kao da je H <A> (ه)</A>
						</td>
					</tr>
				</tbody>
			</Table>
		),
		znakoviNaslov: 'Znakovi za stajanje:',
		znakovi: (
			<React.Fragment>
				<p>
					Iznad nekih riječi u Kur'anu nalaze se <strong>znakovi</strong> koji označavaju da li se na toj
					riječi mora stati ili se ne smije, da li je bolje stati ili je bolje preći. Ti znakovi su:
				</p>
				<br />
				<Table className="tabela-opis text-center" bordered hover responsive>
					<thead className="text-uppercase">
						<tr>
							<th className="text-danger">Mora stati</th>
							<th>Bolje stati</th>
							<th>Bolje preći</th>
							<th className="text-danger">Ne smije se stati</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<A>م</A>
							</td>
							<td>
								<A> قف ؛ قلي ؛ ج ؛ ط</A>
							</td>
							<td>
								<A> صلي ؛ ق ؛ ص ؛ ز</A>
							</td>
							<td>
								<A> لا</A>
							</td>
						</tr>
					</tbody>
				</Table>

				<br />

				<Table className="tabela-opis text-center" bordered hover responsive>
					<thead className="text-uppercase">
						<tr>
							<th>Sekta</th>
							<th>Tri tačkice</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<A> سكتة ؛ س</A>
								<br />
								Pauzira se bez prekidanja daha.
							</td>
							<td>
								<A> رَيْبَۚۛ ف۪يهِۚۛ </A>
								<br />
								Ukoliko se pauzira na prvom znaku, onda je na drugom obavezno preći i obrnuto.
							</td>
						</tr>
					</tbody>
				</Table>

				<br />

				<p>
					<strong>NAPOMENA</strong>: Znak <A> قصر</A> ispod riječi je znak da se vokal ispod kojeg se nalazi
					uči <u>kratko</u> , a <A> مد </A>je znak da se vokal uči <u>dugo</u>.
				</p>
			</React.Fragment>
		)
	},

	en: {
		naziv: 'WAQF',
		naslov: '1 Waqf',
		podnaslov: 'Stopping during recitation',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						While reciting the Qur'an, the reciter may stop in the following situations: at the end of a
						verse, where there is a sign for stopping, and when they run out of breath. This is done as
						follows:
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>1.</strong> When the word on which the reciter stops ends in the{' '}
						<strong>short vowel</strong> A <A> ــــَـــ</A> , I <A> ــــِــ</A> , U <A> ــــُـــ </A>or in
						the <strong>tanween</strong> IN <A> ــــٍــ </A> , UN <A> ـــٌـــ</A> , they stop as if the word
						carried a <strong>sukun</strong> <A> ــــْـــ</A> , e.g.:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>2.</strong> When the word ends in the <strong>tanween</strong> AN <A> ــــًــ</A> , they
						stop as if it were a <strong>long</strong> A <A> ـــَـــ ا </A> , e.g.:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row2')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>3.</strong> When the word ends in the <strong>long vowel</strong> A <A> ــــَـــ ا </A>{' '}
						, the <strong>long vowel</strong> I <A>ـــِــ ى</A> or the <strong>long vowel</strong> U{' '}
						<A>ـــُــ و</A> , they stop <u>without any change</u> , e.g.:
					</Col>
				</Row>
				<Row className="text-center ">
					<Col>
						{V('row3', 'broj1')}
						{V('row3', 'broj2')}
						{V('row3', 'broj3')}
						{V('row3', 'broj4')}
						{V('row3', 'broj5')}
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>4.</strong> When the word ends in the round <strong>T</strong> <A>(ة/ـة)</A> , they stop
						as if the letter <strong>H </strong>
						<A>(ه)</A> were written , no matter which vowel or tanween is written on it, e.g.:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row4')}</Col>
				</Row>
			</React.Fragment>
		),
		tabela: (
			<Table className="tabela-opis text-center" bordered hover responsive>
				<thead className="text-danger text-uppercase">
					<tr>
						<th>When the word ends in</th>
						<th>We stop</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							A <A>ــــَـــ</A> , I <A> ــــِــ</A> , U <A> ــــُـــ</A> , IN <A> ـــٍـــ </A> , UN{' '}
							<A> ـــٌــ</A>
						</td>
						<td>
							as if there were a sukun <A> ـــْــ</A>
						</td>
					</tr>
					<tr>
						<td>
							AN <A> ـــًــ</A>
						</td>
						<td>
							as if it were a long A
							<br />
							<A> ــَــ ا</A>
						</td>
					</tr>
					<tr>
						<td>
							long A <A>ـــَــ ا</A> , long I <A>ـــِـ ى</A> , long U <A>ـــُــ و</A>
						</td>
						<td>with no change at all</td>
					</tr>
					<tr>
						<td>
							round T <A> (ة/ـة)</A>
						</td>
						<td>
							as if it were H <A> (ه)</A>
						</td>
					</tr>
				</tbody>
			</Table>
		),
		znakoviNaslov: 'Signs for stopping:',
		znakovi: (
			<React.Fragment>
				<p>
					Above some words in the Qur'an there are <strong>signs</strong> which show whether one must stop on
					that word or must not, whether it is better to stop or better to continue. These signs are:
				</p>
				<br />
				<Table className="tabela-opis text-center" bordered hover responsive>
					<thead className="text-uppercase">
						<tr>
							<th className="text-danger">Must stop</th>
							<th>Better to stop</th>
							<th>Better to continue</th>
							<th className="text-danger">Must not stop</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<A>م</A>
							</td>
							<td>
								<A> قف ؛ قلي ؛ ج ؛ ط</A>
							</td>
							<td>
								<A> صلي ؛ ق ؛ ص ؛ ز</A>
							</td>
							<td>
								<A> لا</A>
							</td>
						</tr>
					</tbody>
				</Table>

				<br />

				<Table className="tabela-opis text-center" bordered hover responsive>
					<thead className="text-uppercase">
						<tr>
							<th>Saktah</th>
							<th>Three dots</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<A> سكتة ؛ س</A>
								<br />
								One pauses without breaking the breath.
							</td>
							<td>
								<A> رَيْبَۚۛ ف۪يهِۚۛ </A>
								<br />
								If you pause at the first sign, then at the second one you must continue, and vice versa.
							</td>
						</tr>
					</tbody>
				</Table>

				<br />

				<p>
					<strong>NOTE</strong>: The sign <A> قصر</A> beneath a word means that the vowel it stands under is
					recited <u>short</u> , while <A> مد </A>means that the vowel is recited <u>long</u>.
				</p>
			</React.Fragment>
		)
	},

	de: {
		naziv: 'WAQF',
		naslov: '1 Waqf',
		podnaslov: 'Anhalten beim Lesen',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Beim Koranlesen darfst du in diesen Fällen anhalten: am Ende eines Verses, wo ein
						Pausenzeichen steht, und wenn dir die Luft ausgeht. So machst du es:
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>1.</strong> Endet das Wort, bei dem du anhältst, auf den{' '}
						<strong>kurzen Vokal</strong> A <A> ــــَـــ</A> , I <A> ــــِــ</A> , U <A> ــــُـــ </A>oder auf
						das <strong>Tanwin</strong> IN <A> ــــٍــ </A> , UN <A> ـــٌـــ</A> , hältst du an, als stünde
						auf dem Wort ein <strong>Sukun</strong> <A> ــــْـــ</A> , z. B.:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>2.</strong> Endet das Wort auf das <strong>Tanwin</strong> AN <A> ــــًــ</A> , hältst
						du an, als wäre dort ein <strong>langes</strong> A <A> ـــَـــ ا </A> , z. B.:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row2')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>3.</strong> Endet das Wort auf den <strong>langen Vokal</strong> A <A> ــــَـــ ا </A>{' '}
						, den <strong>langen Vokal</strong> I <A>ـــِــ ى</A> oder den <strong>langen Vokal</strong> U{' '}
						<A>ـــُــ و</A> , hältst du an, <u>ohne etwas zu ändern</u>, z. B.:
					</Col>
				</Row>
				<Row className="text-center ">
					<Col>
						{V('row3', 'broj1')}
						{V('row3', 'broj2')}
						{V('row3', 'broj3')}
						{V('row3', 'broj4')}
						{V('row3', 'broj5')}
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>4.</strong> Endet das Wort auf das runde <strong>T</strong> <A>(ة/ـة)</A> , hältst du an,
						als stünde dort der Buchstabe <strong>H </strong>
						<A>(ه)</A> , ganz gleich, welcher Vokal oder welches Tanwin darauf steht, z. B.:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row4')}</Col>
				</Row>
			</React.Fragment>
		),
		tabela: (
			<Table className="tabela-opis text-center" bordered hover responsive>
				<thead className="text-danger text-uppercase">
					<tr>
						<th>Das Wort endet auf</th>
						<th>Wir halten an</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							A <A>ــــَـــ</A> , I <A> ــــِــ</A> , U <A> ــــُـــ</A> , IN <A> ـــٍـــ </A> , UN{' '}
							<A> ـــٌــ</A>
						</td>
						<td>
							als wäre dort ein Sukun <A> ـــْــ</A>
						</td>
					</tr>
					<tr>
						<td>
							AN <A> ـــًــ</A>
						</td>
						<td>
							als wäre dort ein langes A
							<br />
							<A> ــَــ ا</A>
						</td>
					</tr>
					<tr>
						<td>
							langes A <A>ـــَــ ا</A> , langes I <A>ـــِـ ى</A> , langes U <A>ـــُــ و</A>
						</td>
						<td>ohne jede Änderung</td>
					</tr>
					<tr>
						<td>
							rundes T <A> (ة/ـة)</A>
						</td>
						<td>
							als wäre dort ein H <A> (ه)</A>
						</td>
					</tr>
				</tbody>
			</Table>
		),
		znakoviNaslov: 'Pausenzeichen:',
		znakovi: (
			<React.Fragment>
				<p>
					Über manchen Wörtern im Koran stehen <strong>Zeichen</strong>. Sie sagen dir, ob du bei diesem
					Wort anhalten musst oder nicht anhalten darfst, ob du besser anhältst oder besser weiterliest.
					Das sind die Zeichen:
				</p>
				<br />
				<Table className="tabela-opis text-center" bordered hover responsive>
					<thead className="text-uppercase">
						<tr>
							<th className="text-danger">Muss anhalten</th>
							<th>Besser anhalten</th>
							<th>Besser weiterlesen</th>
							<th className="text-danger">Darf nicht anhalten</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<A>م</A>
							</td>
							<td>
								<A> قف ؛ قلي ؛ ج ؛ ط</A>
							</td>
							<td>
								<A> صلي ؛ ق ؛ ص ؛ ز</A>
							</td>
							<td>
								<A> لا</A>
							</td>
						</tr>
					</tbody>
				</Table>

				<br />

				<Table className="tabela-opis text-center" bordered hover responsive>
					<thead className="text-uppercase">
						<tr>
							<th>Sakta</th>
							<th>Drei Punkte</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<A> سكتة ؛ س</A>
								<br />
								Hier machst du eine kurze Pause, ohne Luft zu holen.
							</td>
							<td>
								<A> رَيْبَۚۛ ف۪يهِۚۛ </A>
								<br />
								Hältst du beim ersten Zeichen an, musst du beim zweiten weiterlesen – und umgekehrt.
							</td>
						</tr>
					</tbody>
				</Table>

				<br />

				<p>
					<strong>HINWEIS</strong>: Das Zeichen <A> قصر</A> unter einem Wort bedeutet, dass der Vokal
					darüber <u>kurz</u> gesprochen wird, und <A> مد </A>bedeutet, dass der Vokal <u>lang</u>{' '}
					gesprochen wird.
				</p>
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

function L1() {
	const { lang } = useLang();
	const ui = useUI();
	const t = TXT[lang] || TXT[DEFAULT_LANG];

	const [ show, setShow ] = React.useState(false);
	const [ showT, setShowT ] = React.useState(false);
	const [ showZ, setShowZ ] = React.useState(false);
	const [ showL, setShowL ] = React.useState(false);

	const handleCloseL = () => setShowL(false);
	const handleShowL = () => setShowL(true);

	const handleCloseT = () => setShowT(false);
	const handleShowT = () => setShowT(true);

	const handleCloseZ = () => setShowZ(false);
	const handleShowZ = () => setShowZ(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	React.useEffect(() => {
		scrollToHash();
	}, []);

	/* isti sadržaj lekcije se prikazuje na stranici i u uvećanom prikazu */
	const lekcija = t.lekcija((row) => PlayerRow(data, row), (main, row) => VjezbeRow(data, main, row));

	return (
		<React.Fragment>
			<LekcijaMenu broj="1" naziv={t.naziv} />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} alt="Group 61" />
							</center>

							<h2 className="text-center font-weight-bold text-uppercase">{t.naslov}</h2>
						</div>

						<h4 className="text-center" id="lekcija">
							<strong>{t.podnaslov}</strong>
						</h4>
						<hr />
					</Col>
				</Row>
				<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className="zoomIcon" onClick={handleShowL} />
				</IconContext.Provider>

				{lekcija}

				<Row>
					<Col className="opisLekcije my-3" id="tabela">
						<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
							<MdZoomOutMap className="zoomIcon" onClick={handleShowT} />
						</IconContext.Provider>
						<h3>{ui.tabelaNaslov}</h3>
						{t.tabela}
					</Col>
				</Row>
				<Modal show={showT} onHide={handleCloseT} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.tabelaNaslov}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">{t.tabela}</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseT}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<Row>
					<Col className="opisLekcije my-3" id="znakovi">
						<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
							<MdZoomOutMap className="zoomIcon" onClick={handleShowZ} />
						</IconContext.Provider>
						<h3>
							<strong>{t.znakoviNaslov}</strong>
						</h3>
						<br />
						{t.znakovi}
					</Col>
				</Row>
				<Modal show={showZ} onHide={handleCloseZ} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{t.znakoviNaslov}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">{t.znakovi}</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseZ}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<Modal show={showL} onHide={handleCloseL} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.lekcija}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">{lekcija}</Modal.Body>
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
					<IconContext.Provider value={{ size: '30px', style: { float: 'right' } }}>
						<MdZoomOutMap className="zoomIcon" onClick={handleShow} />
					</IconContext.Provider>
					<Row>
						<Col>
							<br />
						</Col>
					</Row>
					<Row id="vjezba" className="text-center">
						<Col className="mobile-row rtl">
							<span style={{ marginLeft: '25px' }}> {VjezbeRow(data, 'vjezba', 'red18')}</span>
							<span>{VjezbeRow(data, 'vjezba', 'red19')}</span>
						</Col>
					</Row>
					<Row className="text-center">
						<Col className="mobile-row">
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red20')} ۞</span>
							</span>
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red21')} ۞</span>
							</span>
						</Col>
					</Row>
					<Row className="text-center">
						<Col className="mobile-row">
							<span className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red22')} ۞</span>
							</span>
							<span className="mobile-row">{VjezbeRow(data, 'vjezba', 'red23')}</span>
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red24')} ۞</span>
							</span>
						</Col>
					</Row>
					<Row className="text-center">
						<Col className="mobile-row">
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red25')} ۞</span>
							</span>
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red26')} ۞</span>
							</span>
						</Col>
					</Row>
					<Row className="text-center">
						<Col className="mobile-row">
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red28')} ۞</span>
							</span>
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red29')} ۞</span>
							</span>
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'red30')} ۞</span>
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'red31')} ۞</span>
						</Col>
					</Row>
				</section>
				<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>{ui.vjezba}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal">
						<Row>
							<Col>
								<br />
							</Col>
						</Row>
						<Row id="vjezba" className="text-center">
							<Col className="mobile-row rtl">
								<span style={{ marginLeft: '50px' }}> {VjezbeRow(data, 'vjezba', 'red18')}</span>
								<span>{VjezbeRow(data, 'vjezba', 'red19')}</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red20')} ۞</span>
								</span>
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red21')} ۞</span>
								</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="mobile-row">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red22')} ۞</span>
								</span>
								<span className="mobile-row">{VjezbeRow(data, 'vjezba', 'red23')}</span>
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red24')} ۞</span>
								</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red25')} ۞</span>
								</span>
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red26')} ۞</span>
								</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red28')} ۞</span>
								</span>
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red29')} ۞</span>
								</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red30')} ۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red31')} ۞</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{ui.zatvori}
						</Button>
					</Modal.Footer>
				</Modal>

				<LessonVideo broj="1" />
				<LessonQuiz broj="1" />
				<Footer prev="/lekcija22" next="/lekcija2" />
			</Container>
		</React.Fragment>
	);
}
export default L1;
