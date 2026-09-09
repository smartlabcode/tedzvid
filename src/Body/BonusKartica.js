import React from 'react';
import { Link } from 'react-router-dom';
import { FaMosque, FaStar, FaScroll, FaBookOpen, FaQuran } from 'react-icons/fa';
import {
	putanjaFatihe,
	putanjaKursija,
	putanjaMulka,
	putanjaBonusa,
	putanjaAmmeDzuza
} from '../auth/progress';
import vrstaTekstovi from '../Lessons/bonusVrste';
import { useUI } from '../i18n/ui';

/* Kartica bonus lekcije s kur'anskim tekstom na pregledu lekcija – otvorena je svima, kao i ostale lekcije. */
const VRSTE = {
	fatiha: { putanja: putanjaFatihe, Ikona: FaMosque },
	kursij: { putanja: putanjaKursija, Ikona: FaStar },
	mulk: { putanja: putanjaMulka, Ikona: FaScroll },
	jasin: { putanja: putanjaBonusa, Ikona: FaBookOpen },
	amme: { putanja: putanjaAmmeDzuza, Ikona: FaQuran }
};

export default function BonusKartica({ vrsta }) {
	const ui = useUI();
	const T = vrstaTekstovi(ui, vrsta);
	const { putanja, Ikona } = VRSTE[vrsta] || VRSTE.fatiha;

	return (
		<article className={'lessons__final lessons__final--bonus lessons__final--' + vrsta}>
			<div className="lessons__final-icon" aria-hidden="true">
				<Ikona />
			</div>
			<div className="lessons__final-body">
				<p className="eyebrow">{T.eyebrow}</p>
				<h3>{T.naslov}</h3>
				<p className="lessons__final-text">{T.karticaTekst}</p>
				<div className="lesson-card__actions">
					<Link to={putanja} className="btn-t btn-t--gold btn-t--sm">
						<Ikona /> {T.otvori}
					</Link>
				</div>
			</div>
		</article>
	);
}
