import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaRedo, FaStopwatch, FaTrophy, FaCheck } from 'react-icons/fa';
import PRIMJERI from '../Data/Igra/primjeri.json';
import lessons from '../Data/lessons.json';
import Primjer from './Primjer';
import { Ornament } from '../Body/Logo';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';
import { rekord, upisiRekord, boljiPokusaj, promijesaj, nasumicno, vrijemeTekst } from './rekordi';
import { pisak } from './zvuk';

const LEKCIJE = lessons['lekcije'].reduce((acc, curr) => acc.concat(curr), []);
const TEZINE = [ { id: 'lako', parova: 6 }, { id: 'teze', parova: 8 } ];

/* na kartici je mjesta samo za kratke primjere (najviše dvije riječi) */
const KRATKI = PRIMJERI.filter((p) => p.word.trim().split(/\s+/).length <= 2);

/* po jedan primjer iz svake od N nasumično odabranih lekcija */
function podijeli(parova) {
	const poLekciji = {};
	KRATKI.forEach((p) => {
		(poLekciji[p.lekcija] = poLekciji[p.lekcija] || []).push(p);
	});
	const odabrane = promijesaj(Object.keys(poLekciji).map(Number)).slice(0, parova);
	const karte = [];
	odabrane.forEach((n, i) => {
		const primjer = nasumicno(poLekciji[n]);
		karte.push({ id: 'p' + i, par: i, vrsta: 'pravilo', lekcija: n, primjer });
		karte.push({ id: 'r' + i, par: i, vrsta: 'rijec', lekcija: n, primjer });
	});
	return promijesaj(karte);
}

export default function Memorija() {
	const { lang } = useLang();
	const ui = useUI();
	const pick = (f) => (f && (f[lang] !== undefined ? f[lang] : f[DEFAULT_LANG])) || '';
	const naziv = (n) => pick(LEKCIJE[n - 1].title).trim();

	const [ tezina, setTezina ] = useState(TEZINE[0]);
	const [ faza, setFaza ] = useState('uvod'); /* uvod | igra | kraj */
	const [ karte, setKarte ] = useState([]);
	const [ okrenute, setOkrenute ] = useState([]); /* indeksi trenutno okrenutih */
	const [ nadjeni, setNadjeni ] = useState([]); /* brojevi spojenih parova */
	const [ potezi, setPotezi ] = useState(0);
	const [ poruka, setPoruka ] = useState(null);
	const [ proteklo, setProteklo ] = useState(0);
	const [ najbolji, setNajbolji ] = useState(() => rekord('memorija-' + TEZINE[0].id));
	const pocetak = useRef(0);
	const cekanje = useRef(null);

	useEffect(
		() => {
			setNajbolji(rekord('memorija-' + tezina.id));
		},
		[ tezina ]
	);

	useEffect(
		() => {
			if (faza !== 'igra') return undefined;
			const t = setInterval(() => setProteklo(Date.now() - pocetak.current), 200);
			return () => clearInterval(t);
		},
		[ faza ]
	);

	useEffect(() => () => clearTimeout(cekanje.current), []);

	const pokreni = (t) => {
		const izabrana = t || tezina;
		setTezina(izabrana);
		setKarte(podijeli(izabrana.parova));
		setOkrenute([]);
		setNadjeni([]);
		setPotezi(0);
		setPoruka(null);
		setProteklo(0);
		pocetak.current = Date.now();
		setFaza('igra');
	};

	const okreni = (i) => {
		if (faza !== 'igra' || okrenute.length === 2) return;
		if (okrenute.indexOf(i) >= 0 || nadjeni.indexOf(karte[i].par) >= 0) return;

		const nove = okrenute.concat(i);
		setOkrenute(nove);
		if (nove.length < 2) return;

		const [ a, b ] = nove.map((k) => karte[k]);
		setPotezi(potezi + 1);

		if (a.par === b.par) {
			const spojeni = nadjeni.concat(a.par);
			pisak('par');
			setNadjeni(spojeni);
			setOkrenute([]);
			setPoruka({ lekcija: a.lekcija, tekst: pick(a.primjer.napomena) });
			if (spojeni.length === tezina.parova) {
				const vrijeme = Date.now() - pocetak.current;
				const r = upisiRekord('memorija-' + tezina.id, { potezi: potezi + 1, vrijeme, datum: Date.now() }, boljiPokusaj);
				setNajbolji(r.rekord);
				setProteklo(vrijeme);
				pisak('pobjeda');
				setFaza('kraj');
			}
		} else {
			cekanje.current = setTimeout(() => setOkrenute([]), 900);
		}
	};

	if (faza === 'uvod' || faza === 'kraj') {
		return (
			<div className="igra igra--memorija">
				<div className="igra__sloj igra__sloj--stranica">
					{faza === 'kraj' ? (
						<React.Fragment>
							<h3>{ui.igraMemBravo}</h3>
							<p className="igra__krajBodovi">
								<b>{potezi}</b> {ui.igraPotezi} · <b>{vrijemeTekst(proteklo)}</b>
							</p>
							<p>{ui.igraMemKraj(tezina.parova)}</p>
						</React.Fragment>
					) : (
						<React.Fragment>
							<h3>{ui.igraMemNaslov}</h3>
							<p>{ui.igraMemUvod}</p>
						</React.Fragment>
					)}

					<div className="igra__tezine" role="group" aria-label={ui.igraTezina}>
						{TEZINE.map((t) => (
							<button
								key={t.id}
								type="button"
								className={'igra__tezina' + (t.id === tezina.id ? ' je-izabrana' : '')}
								onClick={() => setTezina(t)}
							>
								{ui.igraParova(t.parova)}
							</button>
						))}
					</div>

					{najbolji && (
						<p className="igra__rekord">
							<FaTrophy /> {ui.igraRekordMem(najbolji.potezi, vrijemeTekst(najbolji.vrijeme))}
						</p>
					)}
					<button type="button" className="btn-t btn-t--gold" onClick={() => pokreni()}>
						{faza === 'kraj' ? <FaRedo /> : <FaPlay />} {faza === 'kraj' ? ui.igraPonovo : ui.igraKreni}
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="igra igra--memorija">
			<div className="igra__hud">
				<span className="igra__bodovi">
					<b>{nadjeni.length}</b>/{tezina.parova} {ui.igraParovaKratko}
				</span>
				<span className="igra__bodovi">
					<b>{potezi}</b> {ui.igraPotezi}
				</span>
				<span className="igra__vrijeme">
					<FaStopwatch /> {vrijemeTekst(proteklo)}
				</span>
			</div>

			<div className={'igra__mreza je-' + tezina.id}>
				{karte.map((k, i) => {
					const spojena = nadjeni.indexOf(k.par) >= 0;
					const otvorena = spojena || okrenute.indexOf(i) >= 0;
					return (
						<button
							key={k.id}
							type="button"
							className={'igra__karta-m' + (otvorena ? ' je-otvorena' : '') + (spojena ? ' je-spojena' : '')}
							onClick={() => okreni(i)}
							aria-label={otvorena ? (k.vrsta === 'pravilo' ? naziv(k.lekcija) : k.primjer.word) : ui.igraKarta(i + 1)}
						>
							<span className="igra__karta-lice igra__karta-nalicje">
								<Ornament />
							</span>
							<span className={'igra__karta-lice igra__karta-prednja je-' + k.vrsta}>
								{k.vrsta === 'pravilo' ? (
									<span className="igra__karta-naziv">{naziv(k.lekcija)}</span>
								) : (
									<span className="igra__karta-rijec">
										<Primjer word={k.primjer.word} highlight={k.primjer.highlight} />
									</span>
								)}
								{spojena && <span className="igra__karta-kvaka"><FaCheck /></span>}
							</span>
						</button>
					);
				})}
			</div>

			{poruka && (
				<p className="igra__poruka" role="status">
					<b>{naziv(poruka.lekcija)}</b> — {poruka.tekst}
				</p>
			)}
		</div>
	);
}
