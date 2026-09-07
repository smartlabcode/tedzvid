import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause, FaStop, FaHeadphones, FaListUl, FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import KATALOG from '../Data/SurePravila.json';
import SiteNav from '../Body/SiteNav';
import SiteFooter from '../Body/SiteFooter';
import PageBand from '../Body/PageBand';
import * as audioBus from '../Player/audioBus';
import vrstaTekstovi from './bonusVrste';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

import '../App.scss';

/*
 * Zajednički prikaz kur'anskog teksta u bonus lekcijama (sura Jasin i Amme džuz).
 * Tekst je razložen na dijelove; svaki obojeni dio je jedno tedžvidsko pravilo iz
 * lekcija 1–22, a klik na njeg otvara objašnjenje zašto se baš tu primjenjuje.
 * Podatke gradi skripta scripts/sure/build.js.
 *
 * Odjeljak je stranica mushafa (Jasin) ili cijela sura (Amme džuz) – razlikuju se
 * samo natpisi, a sve ostalo je isto. Boje u legendi broje se za otvoreni odjeljak.
 */

const PRAVILO = {};
KATALOG.forEach((p) => {
	PRAVILO[p.id] = p;
});
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

/* oznaka zapisa za zajednički plejer: sura i redni broj ajeta u jednom broju */
const oznakaZapisa = (sura, n) => 100000 + sura * 1000 + n;
const arapskiBroj = (n) => String(n).replace(/[0-9]/g, (c) => '٠١٢٣٤٥٦٧٨٩'[Number(c)]);
const naziv = (p, lang) => p[lang] || p[DEFAULT_LANG];

/* ---------- legenda (podrazumijevano skupljena, klik na naslov je otvara) ---------- */
function Legenda({ brojevi, iskljucena, prebaci, postavi, odjeljak, nema }) {
	const { lang } = useLang();
	const ui = useUI();
	const [ otvorena, setOtvorena ] = React.useState(false);
	return (
		<section className={'sura-legenda' + (otvorena ? ' je-otvorena' : '')}>
			<div className="sura-legenda__vrh">
				<h2>
					<button
						type="button"
						className="sura-legenda__prekidac"
						onClick={() => setOtvorena((v) => !v)}
						aria-expanded={otvorena}
						aria-controls="sura-legenda-sadrzaj"
					>
						<FaListUl /> {ui.suraLegenda}
						{/* brojevi u legendi vrijede za otvorenu suru odnosno stranicu */}
						<em>{odjeljak}</em>
						<FaChevronDown className="sura-legenda__strelica" />
					</button>
				</h2>
				<div className="sura-legenda__gumbi">
					<button type="button" className="btn-t btn-t--ghost btn-t--sm" onClick={() => postavi([])}>
						{ui.suraSve}
					</button>
					<button type="button" className="btn-t btn-t--ghost btn-t--sm" onClick={() => postavi(CESTA)}>
						{ui.suraManje}
					</button>
					<button type="button" className="btn-t btn-t--ghost btn-t--sm" onClick={() => postavi(KATALOG.map((p) => p.id))}>
						{ui.suraNista}
					</button>
				</div>
			</div>
			{otvorena &&
				GRUPE.map((g) => (
					<div className="sura-legenda__grupa" key={g}>
						<h3>{NASLOV_GRUPE[lang] ? NASLOV_GRUPE[lang][g] : NASLOV_GRUPE[DEFAULT_LANG][g]}</h3>
						<ul>
							{KATALOG.filter((p) => p.grupa === g).map((p) => {
								const n = brojevi[p.id] || 0;
								const off = iskljucena.indexOf(p.id) >= 0;
								return (
									<li key={p.id}>
										<button
											type="button"
											className={'sura-cip' + (off ? ' is-off' : '') + (n ? '' : ' is-prazan')}
											style={{ '--boja': p.boja }}
											onClick={() => prebaci(p.id)}
											aria-pressed={!off}
											disabled={!n}
										>
											<span className="sura-cip__tacka" />
											<span className="sura-cip__ime">{naziv(p, lang)}</span>
											<span className="sura-cip__broj">{n ? ui.suraPuta(n) : nema}</span>
										</button>
										{p.lekcija ? (
											<Link className="sura-cip__lekcija" to={'/lekcija' + p.lekcija + '#lekcija'}>
												{ui.suraLekcijaKratko(p.lekcija)}
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
	const oznaka = ajet.besmela ? ui.ammeBesmela : String(ajet.n);

	const klik = (i) => {
		setIzabrano(i === izabrano ? -1 : i);
		setOtvoren(true);
	};

	return (
		<article
			className={'sura-ajet' + (svira ? ' je-svira' : '') + (ajet.besmela ? ' je-besmela' : '')}
			id={'ajet' + ajet.n}
		>
			<div className="sura-ajet__alat">
				<button
					type="button"
					className={'sura-ajet__pusti' + (svira ? ' je-svira' : '')}
					onClick={pusti}
					aria-label={ui.suraPustiAjet(oznaka)}
					title={ui.suraPustiAjet(oznaka)}
				>
					{svira ? <FaPause /> : <FaPlay />}
					<span className="sura-ajet__broj">{oznaka}</span>
				</button>
				{vidljiva.length > 0 && (
					<button
						type="button"
						className={'sura-ajet__spisak-gumb' + (prikaziSpisak ? ' je-otvoren' : '')}
						onClick={() => setOtvoren(!prikaziSpisak)}
					>
						{ui.suraPravilaBroj(vidljiva.length)}
					</button>
				)}
			</div>

			<p className="sura-ajet__tekst" lang="ar" dir="rtl">
				{ajet.dijelovi.map((d, k) => {
					const p = d.i === undefined ? null : ajet.pravila[d.i];
					const skriveno = !p || iskljucena.indexOf(p.id) >= 0;
					if (skriveno) return <span key={k}>{d.t}</span>;
					return (
						<span
							key={k}
							className={'sura-h' + (izabrano === d.i ? ' je-izabran' : '')}
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
				{!ajet.besmela && <span className="sura-ajet__kraj">{arapskiBroj(ajet.n)}</span>}
			</p>

			{prikaziSpisak &&
			vidljiva.length > 0 && (
				<ol className="sura-pravila">
					{vidljiva.map((i) => {
						const p = ajet.pravila[i];
						const k = PRAVILO[p.id];
						return (
							<li
								key={i}
								className={'sura-pravila__stavka' + (izabrano === i ? ' je-izabran' : '')}
								style={{ '--boja': k.boja }}
								onClick={() => setIzabrano(i === izabrano ? -1 : i)}
							>
								<span className="sura-pravila__rijec" lang="ar" dir="rtl">
									{p.rijec}
								</span>
								<span className="sura-pravila__opis">
									<strong>{naziv(k, lang)}</strong>
									{k.lekcija ? (
										<Link to={'/lekcija' + k.lekcija + '#lekcija'} className="sura-pravila__lekcija">
											{ui.suraLekcijaKratko(k.lekcija)}
										</Link>
									) : (
										<span className="sura-pravila__lekcija sura-pravila__lekcija--bez">{ui.suraBezLekcije}</span>
									)}
									<span className="sura-pravila__tekst">{objasnjenja[p.t]}</span>
								</span>
							</li>
						);
					})}
				</ol>
			)}
		</article>
	);
}

/* ---------- cijela lekcija ---------- */
export default function SuraTekst({ data, vrsta }) {
	const { lang } = useLang();
	const ui = useUI();
	const T = vrstaTekstovi(ui, vrsta);
	const poStr = !!T.poStranicama; /* odjeljak je stranica mushafa, a ne cijela sura */
	const jedanOdjeljak = data.odjeljci.length === 1;
	const [ izabran, setIzabran ] = React.useState(0);
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
	const odjeljak = data.odjeljci[izabran];
	/* besmela je ista pred svakom surom, pa se u podacima čuva jednom */
	const ajeti = React.useMemo(() => (data.besmela ? [ data.besmela ].concat(odjeljak.ajeti) : odjeljak.ajeti), [
		data,
		odjeljak
	]);

	/* koliko puta se koje pravilo javlja u otvorenom odjeljku (suri odnosno stranici) */
	const brojevi = React.useMemo(
		() => {
			const b = {};
			ajeti.forEach((a) => a.pravila.forEach((p) => (b[p.id] = (b[p.id] || 0) + 1)));
			return b;
		},
		[ ajeti ]
	);

	const imeOdjeljka = (o) => (poStr ? '' : naziv(o.naziv, lang));
	/* cjelina koja ne počinje prvim ajetom (npr. Ajetul-kursij) ne dobija redni broj sure */
	const naslovOdjeljka = (o) => (o.od === 1 ? o.sura + '. ' : '') + imeOdjeljka(o);
	const oznakaAjeta = (o, a) => (a.besmela ? ui.ammeBesmelaOznaka : T.oznaka(a.n, imeOdjeljka(o)));
	const zapis = (o, a) => ({
		ownerId: oznakaZapisa(a.besmela ? 1 : o.sura, a.n),
		url: data.audio.baza + a.audio,
		label: oznakaAjeta(o, a)
	});
	const redSvira = !!zvuk.queue;

	const naOdjeljak = (i) => {
		setIzabran(i);
		audioBus.stop();
		const vrh = document.getElementById('sura-izbor');
		if (vrh) vrh.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<React.Fragment>
			<SiteNav active="lekcije" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand eyebrow={T.eyebrow} title={T.naslov} text={T.podnaslov} />
			<main className="sura">
				<div className="wrap">
					<p className="sura__uvod">{T.uvod}</p>
					<p className="sura__osuri">{T.osuri(data)}</p>

					<Legenda
						brojevi={brojevi}
						odjeljak={poStr ? ui.jasinStranica(odjeljak.stranica) : naslovOdjeljka(odjeljak)}
						nema={T.nema}
						iskljucena={iskljucena}
						prebaci={(id) =>
							setIskljucena((p) => (p.indexOf(id) >= 0 ? p.filter((x) => x !== id) : p.concat(id)))}
						postavi={setIskljucena}
					/>

					{!jedanOdjeljak && (
						<nav
							className={'sura-izbor' + (poStr ? '' : ' sura-izbor--sure')}
							aria-label={T.naslov}
							id="sura-izbor"
						>
							{data.odjeljci.map((o, i) => (
								<button
									type="button"
									key={o.kljuc}
									className={'sura-izbor__gumb' + (i === izabran ? ' je-aktivan' : '')}
									onClick={() => naOdjeljak(i)}
								>
									<strong>{poStr ? ui.jasinStranica(o.stranica) : naslovOdjeljka(o)}</strong>
									<span>{poStr ? ui.jasinAjeti(o.od, o.do) : ui.ammeAjeta(o.brojAjeta)}</span>
								</button>
							))}
						</nav>
					)}

					<div className="sura-traka">
						<p className="sura-traka__uputa">
							<FaHeadphones /> {ui.suraPrivremeniZvuk}
						</p>
						<div className="sura-traka__gumbi">
							<label className="sura-prekidac">
								<input type="checkbox" checked={svaOtvorena} onChange={(e) => setSvaOtvorena(e.target.checked)} />
								<span>{ui.suraSvaObjasnjenja}</span>
							</label>
							<button
								type="button"
								className={'btn-t btn-t--sm ' + (redSvira ? 'btn-t--outline' : 'btn-t--gold')}
								onClick={() =>
									redSvira ? audioBus.stop() : audioBus.playQueue(ajeti.map((a) => zapis(odjeljak, a)))}
							>
								{redSvira ? <FaStop /> : <FaPlay />}
								{redSvira ? ui.suraZaustavi : T.pusti}
							</button>
						</div>
					</div>

					<section className="sura-odjeljak">
						<h2 className="sura-odjeljak__naslov">
							{poStr ? (
								ui.jasinStranicaMushafa(odjeljak.stranica)
							) : (
								<React.Fragment>
									{naslovOdjeljka(odjeljak)}
									<em lang="ar" dir="rtl">
										{odjeljak.naziv.ar}
									</em>
								</React.Fragment>
							)}
							<span>
								{poStr ? (
									ui.jasinAjeti(odjeljak.od, odjeljak.do)
								) : (
									naziv(odjeljak.znacenje, lang) +
									' · ' +
									(odjeljak.mekkanska ? ui.ammeMekkanska : ui.ammeMedinska) +
									' · ' +
									ui.ammeAjeta(odjeljak.brojAjeta)
								)}
							</span>
						</h2>
						{ajeti.map((a) => {
							const id = oznakaZapisa(a.besmela ? 1 : odjeljak.sura, a.n);
							return (
								<Ajet
									key={odjeljak.kljuc + '-' + a.n}
									ajet={a}
									objasnjenja={objasnjenja}
									iskljucena={iskljucena}
									svaOtvorena={svaOtvorena}
									svira={zvuk.ownerId === id && zvuk.playing}
									pusti={() => audioBus.toggle(id, data.audio.baza + a.audio, oznakaAjeta(odjeljak, a))}
								/>
							);
						})}
					</section>

					{!jedanOdjeljak && (
						<nav className="sura-kraj">
							<button
								type="button"
								className="btn-t btn-t--ghost"
								disabled={izabran === 0}
								onClick={() => naOdjeljak(izabran - 1)}
							>
								<FaChevronLeft /> {T.prethodna}
							</button>
							<button
								type="button"
								className="btn-t btn-t--navy"
								disabled={izabran === data.odjeljci.length - 1}
								onClick={() => naOdjeljak(izabran + 1)}
							>
								{T.sljedeca} <FaChevronRight />
							</button>
						</nav>
					)}
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}
