import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause, FaStop, FaHeadphones, FaListUl, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import data from '../Data/YasinData.json';
import KATALOG from '../Data/YasinPravila.json';
import SiteNav from '../Body/SiteNav';
import SiteFooter from '../Body/SiteFooter';
import PageBand from '../Body/PageBand';
import * as audioBus from '../Player/audioBus';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

import '../App.scss';

/*
 * Bonus lekcija: cijela sura Jasin razložena po stranicama mushafa.
 * Svaki obojeni dio teksta je jedno tedžvidsko pravilo iz lekcija 1–22;
 * klik na njeg otvara objašnjenje zašto se tu primjenjuje.
 * Podaci se grade skriptom scripts/yasin/build.js.
 */

const PRAVILO = KATALOG.reduce((a, p) => ((a[p.id] = p), a), {});
const GRUPE = [ 'nun', 'mim', 'idgam', 'medd', 'ostalo', 'stajanje' ];
const NASLOV_GRUPE = {
	bs: {
		nun: 'N sa sukunom i tenvin',
		mim: 'M sa sukunom',
		idgam: 'Ostala uklapanja',
		medd: 'Dužine',
		ostalo: 'Pojedinačna pravila',
		stajanje: 'Stajanje i tihi harfovi'
	},
	en: {
		nun: 'N with sukun and tanween',
		mim: 'M with sukun',
		idgam: 'Other assimilations',
		medd: 'Prolongations',
		ostalo: 'Individual rules',
		stajanje: 'Stopping and silent letters'
	}
};
/* pravila koja se ponavljaju u gotovo svakoj riječi – u pogledu „manje boja” su isključena */
const CESTA = [ 'medd-tabii', 'medd-arid', 'hukmurra', 'izhar-sefevijj', 'damir', 'ne-uci-se' ];

const OWNER = 36000; /* raspon oznaka za zajednički plejer (ajet n → OWNER + n) */
const arapskiBroj = (n) => String(n).replace(/[0-9]/g, (c) => '٠١٢٣٤٥٦٧٨٩'[Number(c)]);
const naziv = (p, lang) => p[lang] || p[DEFAULT_LANG];

/* ---------- legenda ---------- */
function Legenda({ brojevi, iskljucena, prebaci, postavi }) {
	const { lang } = useLang();
	const ui = useUI();
	return (
		<section className="jasin-legenda">
			<div className="jasin-legenda__vrh">
				<h2>
					<FaListUl /> {ui.jasinLegenda}
				</h2>
				<div className="jasin-legenda__gumbi">
					<button type="button" className="btn-t btn-t--ghost btn-t--sm" onClick={() => postavi([])}>
						{ui.jasinSve}
					</button>
					<button type="button" className="btn-t btn-t--ghost btn-t--sm" onClick={() => postavi(CESTA)}>
						{ui.jasinManje}
					</button>
					<button type="button" className="btn-t btn-t--ghost btn-t--sm" onClick={() => postavi(KATALOG.map((p) => p.id))}>
						{ui.jasinNista}
					</button>
				</div>
			</div>
			{GRUPE.map((g) => (
				<div className="jasin-legenda__grupa" key={g}>
					<h3>{NASLOV_GRUPE[lang] ? NASLOV_GRUPE[lang][g] : NASLOV_GRUPE[DEFAULT_LANG][g]}</h3>
					<ul>
						{KATALOG.filter((p) => p.grupa === g).map((p) => {
							const n = brojevi[p.id] || 0;
							const off = iskljucena.indexOf(p.id) >= 0;
							return (
								<li key={p.id}>
									<button
										type="button"
										className={'jasin-cip' + (off ? ' is-off' : '') + (n ? '' : ' is-prazan')}
										style={{ '--boja': p.boja }}
										onClick={() => prebaci(p.id)}
										aria-pressed={!off}
										disabled={!n}
									>
										<span className="jasin-cip__tacka" />
										<span className="jasin-cip__ime">{naziv(p, lang)}</span>
										<span className="jasin-cip__broj">{n ? ui.jasinPuta(n) : ui.jasinNemaUSuri}</span>
									</button>
									{p.lekcija ? (
										<Link className="jasin-cip__lekcija" to={'/lekcija' + p.lekcija + '#lekcija'}>
											{ui.jasinLekcijaKratko(p.lekcija)}
										</Link>
									) : null}
								</li>
							);
						})}
					</ul>
				</div>
			))}
		</section>
	);
}

/* ---------- jedan ajet ---------- */
function Ajet({ ajet, objasnjenja, iskljucena, svaOtvorena, svira, pusti }) {
	const { lang } = useLang();
	const ui = useUI();
	const [ otvoren, setOtvoren ] = React.useState(false);
	const [ izabrano, setIzabrano ] = React.useState(-1);
	const vidljiva = ajet.pravila.map((p, i) => (iskljucena.indexOf(p.id) < 0 ? i : -1)).filter((i) => i >= 0);
	const prikaziSpisak = otvoren || svaOtvorena;

	const klik = (i) => {
		setIzabrano(i === izabrano ? -1 : i);
		setOtvoren(true);
	};

	return (
		<article className={'jasin-ajet' + (svira ? ' je-svira' : '')} id={'ajet' + ajet.n}>
			<div className="jasin-ajet__alat">
				<button
					type="button"
					className={'jasin-ajet__pusti' + (svira ? ' je-svira' : '')}
					onClick={pusti}
					aria-label={ui.jasinPustiAjet(ajet.n)}
					title={ui.jasinPustiAjet(ajet.n)}
				>
					{svira ? <FaPause /> : <FaPlay />}
					<span className="jasin-ajet__broj">{ajet.n}</span>
				</button>
				{vidljiva.length > 0 && (
					<button
						type="button"
						className={'jasin-ajet__spisak-gumb' + (prikaziSpisak ? ' je-otvoren' : '')}
						onClick={() => setOtvoren(!prikaziSpisak)}
					>
						{ui.jasinPravilaBroj(vidljiva.length)}
					</button>
				)}
			</div>

			<p className="jasin-ajet__tekst" lang="ar" dir="rtl">
				{ajet.dijelovi.map((d, k) => {
					const p = d.i === undefined ? null : ajet.pravila[d.i];
					const skriveno = !p || iskljucena.indexOf(p.id) >= 0;
					if (skriveno) return <span key={k}>{d.t}</span>;
					return (
						<span
							key={k}
							className={'jasin-h' + (izabrano === d.i ? ' je-izabran' : '')}
							style={{ '--boja': PRAVILO[p.id].boja }}
							role="button"
							tabIndex={0}
							title={naziv(PRAVILO[p.id], lang)}
							onClick={() => klik(d.i)}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									klik(d.i);
								}
							}}
						>
							{d.t}
						</span>
					);
				})}
				<span className="jasin-ajet__kraj">{arapskiBroj(ajet.n)}</span>
			</p>

			{prikaziSpisak &&
			vidljiva.length > 0 && (
				<ol className="jasin-pravila">
					{vidljiva.map((i) => {
						const p = ajet.pravila[i];
						const k = PRAVILO[p.id];
						return (
							<li
								key={i}
								className={'jasin-pravila__stavka' + (izabrano === i ? ' je-izabran' : '')}
								style={{ '--boja': k.boja }}
								onClick={() => setIzabrano(i === izabrano ? -1 : i)}
							>
								<span className="jasin-pravila__rijec" lang="ar" dir="rtl">
									{p.rijec}
								</span>
								<span className="jasin-pravila__opis">
									<strong>{naziv(k, lang)}</strong>
									{k.lekcija ? (
										<Link to={'/lekcija' + k.lekcija + '#lekcija'} className="jasin-pravila__lekcija">
											{ui.jasinLekcijaKratko(k.lekcija)}
										</Link>
									) : (
										<span className="jasin-pravila__lekcija jasin-pravila__lekcija--bez">{ui.jasinBezLekcije}</span>
									)}
									<span className="jasin-pravila__tekst">{objasnjenja[p.t]}</span>
								</span>
							</li>
						);
					})}
				</ol>
			)}
		</article>
	);
}

/* ---------- stranica ---------- */
function Jasin() {
	const { lang } = useLang();
	const ui = useUI();
	const [ str, setStr ] = React.useState(0);
	const [ iskljucena, setIskljucena ] = React.useState([]);
	const [ svaOtvorena, setSvaOtvorena ] = React.useState(false);
	const [ zvuk, setZvuk ] = React.useState(audioBus.getState());

	React.useEffect(() => audioBus.subscribe(setZvuk), []);
	/* napuštanje bonus lekcije gasi zvuk */
	React.useEffect(() => () => audioBus.stop(), []);
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const objasnjenja = data.objasnjenja[lang] || data.objasnjenja[DEFAULT_LANG];
	const stranica = data.stranice[str];

	/* koliko puta se koje pravilo javlja u cijeloj suri */
	const brojevi = React.useMemo(() => {
		const b = {};
		data.stranice.forEach((s) => s.ajeti.forEach((a) => a.pravila.forEach((p) => (b[p.id] = (b[p.id] || 0) + 1))));
		return b;
	}, []);

	const zapis = (a) => ({ ownerId: OWNER + a.n, url: data.audio.baza + a.audio, label: ui.jasinOznaka(a.n) });
	const pustiStranicu = () => audioBus.playQueue(stranica.ajeti.map(zapis));
	const redSvira = !!zvuk.queue;

	const naStranicu = (i) => {
		setStr(i);
		audioBus.stop();
		const vrh = document.getElementById('jasin-stranica');
		if (vrh) vrh.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand eyebrow={ui.jasinEyebrow} title={ui.jasinNaslov} text={ui.jasinPodnaslov} />
			<main className="jasin">
				<div className="wrap">
					<p className="jasin__uvod">{ui.jasinUvod}</p>

					<Legenda
						brojevi={brojevi}
						iskljucena={iskljucena}
						prebaci={(id) =>
							setIskljucena((p) => (p.indexOf(id) >= 0 ? p.filter((x) => x !== id) : p.concat(id)))}
						postavi={setIskljucena}
					/>

					<nav className="jasin-stranice" aria-label={ui.jasinLegenda} id="jasin-stranica">
						{data.stranice.map((s, i) => (
							<button
								type="button"
								key={s.broj}
								className={'jasin-stranice__gumb' + (i === str ? ' je-aktivan' : '')}
								onClick={() => naStranicu(i)}
							>
								<strong>{ui.jasinStranica(s.broj)}</strong>
								<span>{ui.jasinAjeti(s.od, s.do)}</span>
							</button>
						))}
					</nav>

					<div className="jasin-traka">
						<p className="jasin-traka__uputa">
							<FaHeadphones /> {ui.jasinPrivremeniZvuk}
						</p>
						<div className="jasin-traka__gumbi">
							<label className="jasin-prekidac">
								<input
									type="checkbox"
									checked={svaOtvorena}
									onChange={(e) => setSvaOtvorena(e.target.checked)}
								/>
								<span>{ui.jasinSvaObjasnjenja}</span>
							</label>
							<button
								type="button"
								className={'btn-t btn-t--sm ' + (redSvira ? 'btn-t--outline' : 'btn-t--gold')}
								onClick={() => (redSvira ? audioBus.stop() : pustiStranicu())}
							>
								{redSvira ? <FaStop /> : <FaPlay />}
								{redSvira ? ui.jasinZaustavi : ui.jasinPustiStranicu}
							</button>
						</div>
					</div>

					<section className="jasin-stranica">
						<h2 className="jasin-stranica__naslov">
							{ui.jasinStranicaMushafa(stranica.broj)} <span>{ui.jasinAjeti(stranica.od, stranica.do)}</span>
						</h2>
						{stranica.ajeti.map((a) => (
							<Ajet
								key={a.n}
								ajet={a}
								objasnjenja={objasnjenja}
								iskljucena={iskljucena}
								svaOtvorena={svaOtvorena}
								svira={zvuk.ownerId === OWNER + a.n && zvuk.playing}
								pusti={() => audioBus.toggle(OWNER + a.n, data.audio.baza + a.audio, ui.jasinOznaka(a.n))}
							/>
						))}
					</section>

					<nav className="jasin-kraj">
						<button
							type="button"
							className="btn-t btn-t--ghost"
							disabled={str === 0}
							onClick={() => naStranicu(str - 1)}
						>
							<FaAngleRight /> {ui.jasinPrethodna}
						</button>
						<button
							type="button"
							className="btn-t btn-t--navy"
							disabled={str === data.stranice.length - 1}
							onClick={() => naStranicu(str + 1)}
						>
							{ui.jasinSljedeca} <FaAngleLeft />
						</button>
					</nav>
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}

export default Jasin;
