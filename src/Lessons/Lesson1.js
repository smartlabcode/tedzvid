import React from 'react';
import data from '../Data/L1Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import LekcijaMenu from '../Body/LekcijaMenu';
import LessonVideo from '../Body/LessonVideo';
import LessonQuiz from '../Quiz/LessonQuiz';
import VjezbaToolbar from '../Player/VjezbaToolbar';
import { Modal, Button, Row, Col, Table, Container } from '../ui/Bootstrap';
import { MdZoomOutMap } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

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
		naslov: '1 WAQF',
		podnaslov: "WAQF – stopping during the recitation of the Qur'an",
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						During the recitation of the Qur'an, the reader can stop in the
						following situations: at the end of the verse, if there is a
						stopping sign and when he is out of breath. It can be done the
						following way:
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>1.</strong> When the word (at which he stops) ends{' '}
						<strong>in the short vowel</strong> E{' '}
						<A> ــــَـــ</A> , I{' '}
						<A> ــــِــ</A> , U{' '}
						<A> ــــُـــ </A>or{' '}
						<strong>nunation/tanwin</strong> IN{' '}
						<A> ــــٍــ </A> , UN{' '}
						<A> ـــٌـــ</A> , he will stop as
						if the word ends in <strong>sukoon</strong>{' '}
						<A> ــــْـــ</A> , for example:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>2.</strong> When the word ends in <strong>tanwin</strong> EN{' '}
						<A> ــــًــ</A> , he will stop as
						if it ends in <strong>the long vowel</strong> A{' '}
						<A> ـــَـــ ا </A> , for example:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row2')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>3.</strong> When the word ends in{' '}
						<strong>the long vowel</strong> A{' '}
						<A> ــــَـــ ا </A> ,{' '}
						<strong>the long vowel </strong> I{' '}
						<A>ـــِــ ى</A> or{' '}
						<strong>the long vowel </strong> U{' '}
						<A>ـــُــ و</A> , he will stop
						without making any change, for example:
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
						<strong>4.</strong> When the word ends in round <strong>T</strong>{' '}
						<A>(ة/ـة)</A> , he will stop as if
						the letter <strong>H </strong>
						<A>(ه)</A> , were written
						regardless of which vowel or tanwin is written on it, for example:
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
						<th>WHEN THE WORD ENDS IN</th>
						<th>WE SHOULD STOP</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							E <A>ــــَـــ</A> , I{' '}
							<A> ــــِــ</A> , U{' '}
							<A> ــــُـــ</A> , IN{' '}
							<A> ـــٍـــ </A> , UN{' '}
							<A> ـــٌــ</A>
						</td>
						<td>
							as if it ends in{' '}
							<A> ـــْــ</A>
						</td>
					</tr>
					<tr>
						<td>
							EN <A> ـــًــ</A>
						</td>
						<td>
							as if it ends in long A
							<br />
							<A> ــَــ ا</A>
						</td>
					</tr>
					<tr>
						<td>
							long A <A>ـــَــ ا</A> ,
							long I <A>ـــِـ ى</A> ,
							long U <A>ـــُــ و</A>
						</td>
						<td>without any change</td>
					</tr>
					<tr>
						<td>
							round T <A> (ة/ـة)</A>
						</td>
						<td>
							as if it ends in H{' '}
							<A> (ه)</A>
						</td>
					</tr>
				</tbody>
			</Table>
		),
		znakoviNaslov: 'STOPPING SIGNS:',
		znakovi: (
			<React.Fragment>
				<p>
					Some <strong>signs</strong> are placed above certain words in the
					Qur'an to indicate whether the reader must or must not stop at
					that word, or whether it is better to stop or to continue reading.
					Those signs are:
				</p>
				<br />
				<Table className="tabela-opis text-center" bordered hover responsive>
					<thead className="text-uppercase">
						<tr>
							<th className="text-danger">MUST STOP</th>
							<th>IT IS BETTER TO STOP</th>
							<th>IT IS BETTER TO CONTINUE</th>
							<th className="text-danger">MUSTN'T STOP</th>
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
							<th>THE SAKT</th>
							<th>THREE DOTS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<A> سكتة ؛ س</A>
								<br />
								Pause without taking a new breath when reciting.
							</td>
							<td>
								<A> رَيْبَۚۛ ف۪يهِۚۛ </A>
								<br />
								If the reciter stops at the first sign, then he must
								continue without stopping at the second sign.
							</td>
						</tr>
					</tbody>
				</Table>
				<br />
				<p>
					<strong>NOTE</strong>: The sign{' '}
					<A> قصر</A> below the word
					indicates that the vowel under which it is written is <u>short</u>{' '}
					, and <A> مد </A>is a sign that
					the vowel is recited as a <u>long</u> vowel.
				</p>
			</React.Fragment>
		)
	},

	de: {
		naziv: 'VAKF',
		naslov: '1 Vakf',
		podnaslov: 'Das Anhalten',
		lekcija: (P, V) => (
			<React.Fragment>
				<Row>
					<Col className="opisLekcije">
						Während der Koranrezitation ist es in folgenden Situationen erlaubt anzuhalten: am Ende des
						Verses, beim Haltezeichen, und wenn der Leser Luft holen muss. In diesen Fällen muss der
						Koranleser wie folgt anhalten:
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>1.</strong> Wenn das Wort, bei dem er anhält, mit E <A> ــــَـــ</A> , I <A> ــــِــ</A> , U{' '}
						<A> ــــُـــ </A>oder <strong>tanwin</strong> IN <A> ــــٍــ </A> , UN <A> ـــٌـــ</A> endet, dann
						liest er das Wort mit <strong>sukun</strong> <A> ــــْـــ</A> , zum Beispiel:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row1')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>2.</strong> Wenn das Wort mit <strong>tanwin</strong> EN <A> ــــًــ</A> endet, dann hält
						der Leser an, als wäre es ein <strong>langes</strong> A <A> ـــَـــ ا </A> , zum Beispiel:
					</Col>
				</Row>
				<Row className="text-center reorder">
					<Col>{P('row2')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>3.</strong> Wenn das Wort mit <strong>langem Vokal</strong> A <A> ــــَـــ ا </A> , I{' '}
						<A>ـــِــ ى</A> oder U <A>ـــُــ و</A> endet, dann bleibt das Wortende <u>unverändert</u>, zum
						Beispiel:
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
						<strong>4.</strong> Wenn das Wort mit rundem <strong>T</strong> <A>(ة/ـة)</A> endet, dann liest
						man es mit dem <strong>H </strong>
						<A>(ه)</A> am Ende, unabhängig davon, ob es mit einem Vokal oder tanwin endet, zum Beispiel:
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
						<th>Wenn das Wort mit … endet</th>
						<th>Dann halten wir …</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							E <A>ــــَـــ</A> , I <A> ــــِــ</A> , U <A> ــــُـــ</A> , IN <A> ـــٍـــ </A> , oder UN{' '}
							<A> ـــٌــ</A>
						</td>
						<td>
							als wäre es ein sukun <A> ـــْــ</A>
						</td>
					</tr>
					<tr>
						<td>
							EN <A> ـــًــ</A>
						</td>
						<td>
							als wäre es ein A <A> ــَــ ا</A>
						</td>
					</tr>
					<tr>
						<td>
							langem A <A>ـــَــ ا</A> , I <A>ـــِـ ى</A> , oder U <A>ـــُــ و</A>
						</td>
						<td>ohne Veränderung</td>
					</tr>
					<tr>
						<td>
							rundem T <A> (ة/ـة)</A>
						</td>
						<td>
							als wäre es ein H <A> (ه)</A>
						</td>
					</tr>
				</tbody>
			</Table>
		),
		znakoviNaslov: 'Haltezeichen:',
		znakovi: (
			<React.Fragment>
				<p>
					Über manchen Wörtern im Koran stehen <strong>Haltezeichen</strong>, die darauf hinweisen, ob man
					bei diesem Wort halten muss oder nicht, oder ob es vorteilhafter wäre anzuhalten oder
					weiterzulesen. Diese Haltezeichen sind:
				</p>
				<br />
				<Table className="tabela-opis text-center" bordered hover responsive>
					<thead className="text-uppercase">
						<tr>
							<th className="text-danger">Haltepflicht</th>
							<th>es ist besser anzuhalten</th>
							<th>es ist besser weiterzulesen</th>
							<th className="text-danger">Halteverbot</th>
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
							<th>Drei Punkte</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<A> سكتة ؛ س</A>
								<br />
								Atempause.
							</td>
							<td>
								<A> رَيْبَۚۛ ف۪يهِۚۛ </A>
								<br />
								Anhalten an einem der zwei Wörter mit den drei Punkten ∴ und verpflichtendes Weiterlesen
								beim zweiten.
							</td>
						</tr>
					</tbody>
				</Table>

				<br />

				<p>
					<strong>WICHTIG</strong>: Wenn sich das Zeichen kurz <A> قصر</A> unter einem Wort befindet, dann
					liest man es <u>kurz</u>. Wenn sich dieses Zeichen lang <A> مد </A> unter einem Wort befindet,
					dann liest man es <u>lang</u>.
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
							<span style={{ marginLeft: '25px' }}> {VjezbeRow(data, 'vjezba', 'red18')}{' '}</span>
							<span>{VjezbeRow(data, 'vjezba', 'red19')}{' '}</span>
						</Col>
					</Row>
					<Row className="text-center">
						<Col className="mobile-row">
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red20')}&nbsp;۞</span>
							</span>
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red21')}&nbsp;۞</span>
							</span>
						</Col>
					</Row>
					<Row className="text-center">
						<Col className="mobile-row">
							<span className="mobile-row">
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red22')}&nbsp;۞</span>
							</span>
							<span className="mobile-row">{VjezbeRow(data, 'vjezba', 'red23')}{' '}</span>
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red24')}&nbsp;۞</span>
							</span>
						</Col>
					</Row>
					<Row className="text-center">
						<Col className="mobile-row">
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red25')}&nbsp;۞</span>
							</span>
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red26')}&nbsp;۞</span>
							</span>
						</Col>
					</Row>
					<Row className="text-center">
						<Col className="mobile-row">
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red28')}&nbsp;۞</span>
							</span>
							<span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red29')}&nbsp;۞</span>
							</span>
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'red30')}&nbsp;۞</span>
							<span className="tacka">{VjezbeRow(data, 'vjezba', 'red31')}&nbsp;۞</span>
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
								<span style={{ marginLeft: '50px' }}> {VjezbeRow(data, 'vjezba', 'red18')}{' '}</span>
								<span>{VjezbeRow(data, 'vjezba', 'red19')}{' '}</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red20')}&nbsp;۞</span>
								</span>
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red21')}&nbsp;۞</span>
								</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span className="mobile-row">
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red22')}&nbsp;۞</span>
								</span>
								<span className="mobile-row">{VjezbeRow(data, 'vjezba', 'red23')}{' '}</span>
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red24')}&nbsp;۞</span>
								</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red25')}&nbsp;۞</span>
								</span>
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red26')}&nbsp;۞</span>
								</span>
							</Col>
						</Row>
						<Row className="text-center">
							<Col className="mobile-row">
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red28')}&nbsp;۞</span>
								</span>
								<span>
									<span className="tacka">{VjezbeRow(data, 'vjezba', 'red29')}&nbsp;۞</span>
								</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red30')}&nbsp;۞</span>
								<span className="tacka">{VjezbeRow(data, 'vjezba', 'red31')}&nbsp;۞</span>
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
