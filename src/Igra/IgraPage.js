import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGamepad, FaHandPaper, FaBolt, FaClone, FaTrophy, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import SiteNav from '../Body/SiteNav';
import SiteFooter from '../Body/SiteFooter';
import PageBand from '../Body/PageBand';
import UhvatiHarf from './UhvatiHarf';
import Trka from './Trka';
import Memorija from './Memorija';
import { rekord, vrijemeTekst } from './rekordi';
import { zvukUkljucen, postaviZvuk } from './zvuk';
import { useUI } from '../i18n/ui';
import '../igra.scss';

export const IGRE = [
	{ id: 'harfovi', putanja: '/igra/harfovi', ikona: FaHandPaper, komponenta: UhvatiHarf },
	{ id: 'trka', putanja: '/igra/trka', ikona: FaBolt, komponenta: Trka },
	{ id: 'memorija', putanja: '/igra/memorija', ikona: FaClone, komponenta: Memorija }
];

/* kratak zapis rekorda ispod kartice igre */
function Rekord({ id, ui }) {
	const r = rekord(id === 'memorija' ? 'memorija-lako' : id);
	if (!r) return <span className="igra-kartica__rekord je-prazan">{ui.igraBezRekorda}</span>;
	return (
		<span className="igra-kartica__rekord">
			<FaTrophy />{' '}
			{id === 'memorija' ? ui.igraRekordMem(r.potezi, vrijemeTekst(r.vrijeme)) : ui.igraRekordBodovi(r.bodovi)}
		</span>
	);
}

function Zvuk({ ui }) {
	const [ on, setOn ] = React.useState(zvukUkljucen);
	const prebaci = () => {
		postaviZvuk(!on);
		setOn(!on);
	};
	return (
		<button type="button" className="igra-zvuk" onClick={prebaci} aria-pressed={on}>
			{on ? <FaVolumeUp /> : <FaVolumeMute />} <span>{on ? ui.igraZvukUkljucen : ui.igraZvukIskljucen}</span>
		</button>
	);
}

/* props.igra – id mini-igre; bez njega se prikazuje igraonica (izbor igara) */
export default function IgraPage({ igra }) {
	const ui = useUI();
	const stavka = IGRE.find((i) => i.id === igra);

	useEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ igra ]
	);

	if (stavka) {
		const Igra = stavka.komponenta;
		return (
			<React.Fragment>
				<SiteNav active="igra" cta={{ to: '/igra', label: ui.igraNaslov, back: true }} />
				<main className="igra-strana igra-strana--jedna">
					<div className="wrap">
						<div className="igra-vrh">
							<Link to="/igra" className="igra-nazad">
								<FaArrowLeft /> {ui.igraNaslov}
							</Link>
							<h1>{ui.igre[stavka.id].naslov}</h1>
							<Zvuk ui={ui} />
						</div>
						<Igra />
						<p className="igra-uputa">{ui.igre[stavka.id].uputa}</p>
					</div>
				</main>
				<SiteFooter />
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<SiteNav active="igra" cta={{ to: '/lekcije', label: ui.navLekcije }} />
			<PageBand eyebrow={ui.igraEyebrow} title={ui.igraNaslov} text={ui.igraOpis} />
			<main className="igra-strana">
				<div className="wrap">
					<div className="igra-mreza">
						{IGRE.map((i) => {
							const Ikona = i.ikona;
							const t = ui.igre[i.id];
							return (
								<article className={'igra-kartica igra-kartica--' + i.id} key={i.id}>
									<div className="igra-kartica__ikona">
										<Ikona />
									</div>
									<h2>{t.naslov}</h2>
									<p className="igra-kartica__opis">{t.opis}</p>
									<ul className="igra-kartica__kako">
										{t.kako.map((k, n) => <li key={n}>{k}</li>)}
									</ul>
									<Rekord id={i.id} ui={ui} />
									<Link to={i.putanja} className="btn-t btn-t--gold btn-t--sm">
										<FaGamepad /> {ui.igraKreni}
									</Link>
								</article>
							);
						})}
					</div>
					<p className="igra-napomena">{ui.igraNapomena}</p>
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}
