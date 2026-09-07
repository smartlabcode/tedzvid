import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaLock, FaClipboardCheck, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import { BONUS, trenutnaLekcija, putanjaKviza, putanjaBonusa } from '../auth/progress';
import { useUI } from '../i18n/ui';

/* Kartica bonus lekcije (sura Jasin) na dnu pregleda lekcija, ispod završnog kviza */
export default function BonusCard() {
	const ui = useUI();
	const { user, loading, progress, isUnlocked } = useAuth();
	const locked = !loading && !isUnlocked(BONUS);
	const trenutna = trenutnaLekcija(progress) || 1;

	return (
		<article className={'lessons__final lessons__final--bonus' + (locked ? ' is-locked' : '')}>
			<div className="lessons__final-icon" aria-hidden="true">
				{locked ? <FaLock /> : <FaBookOpen />}
			</div>
			<div className="lessons__final-body">
				<p className="eyebrow">{ui.jasinEyebrow}</p>
				<h3>{ui.jasinNaslov}</h3>
				<p className="lessons__final-text">{ui.jasinKarticaTekst}</p>
				{locked && (
					<p className="lessons__final-hint">{user ? ui.jasinZakljucanKorisnik(trenutna) : ui.cardUnlockGuest}</p>
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
						<Link to={putanjaBonusa} className="btn-t btn-t--gold btn-t--sm">
							<FaBookOpen /> {ui.jasinOtvori}
						</Link>
					)}
				</div>
			</div>
		</article>
	);
}
