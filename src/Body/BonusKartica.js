import React from 'react';
import { Link } from 'react-router-dom';
import { FaMosque, FaStar, FaScroll, FaLock, FaClipboardCheck, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import { BONUS, trenutnaLekcija, putanjaKviza, putanjaFatihe, putanjaKursija, putanjaMulka } from '../auth/progress';
import vrstaTekstovi from '../Lessons/bonusVrste';
import { useUI } from '../i18n/ui';

/*
 * Kartica bonus lekcije s kraćom cjelinom (El-Fatiha, Ajetul-kursij, El-Mulk)
 * na pregledu lekcija. Sve se otključavaju istim uslovom kao i sura Jasin.
 */
const VRSTE = {
	fatiha: { putanja: putanjaFatihe, Ikona: FaMosque },
	kursij: { putanja: putanjaKursija, Ikona: FaStar },
	mulk: { putanja: putanjaMulka, Ikona: FaScroll }
};

export default function BonusKartica({ vrsta }) {
	const ui = useUI();
	const { user, loading, progress, isUnlocked } = useAuth();
	const T = vrstaTekstovi(ui, vrsta);
	const { putanja, Ikona } = VRSTE[vrsta] || VRSTE.fatiha;
	const locked = !loading && !isUnlocked(BONUS);
	const trenutna = trenutnaLekcija(progress) || 1;

	return (
		<article
			className={'lessons__final lessons__final--bonus lessons__final--' + vrsta + (locked ? ' is-locked' : '')}
		>
			<div className="lessons__final-icon" aria-hidden="true">
				{locked ? <FaLock /> : <Ikona />}
			</div>
			<div className="lessons__final-body">
				<p className="eyebrow">{T.eyebrow}</p>
				<h3>{T.naslov}</h3>
				<p className="lessons__final-text">{T.karticaTekst}</p>
				{locked && (
					<p className="lessons__final-hint">{user ? T.zakljucanKorisnik(trenutna) : ui.cardUnlockGuest}</p>
				)}
				<div className="lesson-card__actions">
					{locked ? (
						user ? (
							<Link to={putanjaKviza(trenutna)} className="btn-t btn-t--navy btn-t--sm">
								<FaClipboardCheck /> {ui.cardGoQuiz(trenutna)}
							</Link>
						) : (
							<React.Fragment>
								<Link to="/prijava" className="btn-t btn-t--navy btn-t--sm">
									<FaSignInAlt /> {ui.navPrijava}
								</Link>
								<Link to="/registracija" className="btn-t btn-t--ghost btn-t--sm">
									<FaUserPlus /> {ui.navRegistracija}
								</Link>
							</React.Fragment>
						)
					) : (
						<Link to={putanja} className="btn-t btn-t--gold btn-t--sm">
							<Ikona /> {T.otvori}
						</Link>
					)}
				</div>
			</div>
		</article>
	);
}
