import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaQuran, FaLock, FaClipboardCheck, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import { BONUS, trenutnaLekcija, putanjaKviza, putanjaBonusa, putanjaAmmeDzuza } from '../auth/progress';
import { useUI } from '../i18n/ui';

/*
 * Kartica bonus lekcije na dnu pregleda lekcija, ispod završnog kviza.
 * `vrsta` bira između sure Jasin i kratkih sura – obje se otključavaju istim uslovom.
 */
export default function BonusCard({ vrsta }) {
	const jasin = vrsta !== 'amme';
	const ui = useUI();
	const { user, loading, progress, isUnlocked } = useAuth();
	const locked = !loading && !isUnlocked(BONUS);
	const trenutna = trenutnaLekcija(progress) || 1;

	return (
		<article className={'lessons__final lessons__final--bonus lessons__final--' + (jasin ? 'jasin' : 'amme') + (locked ? ' is-locked' : '')}>
			<div className="lessons__final-icon" aria-hidden="true">
				{locked ? <FaLock /> : jasin ? <FaBookOpen /> : <FaQuran />}
			</div>
			<div className="lessons__final-body">
				<p className="eyebrow">{jasin ? ui.jasinEyebrow : ui.ammeEyebrow}</p>
				<h3>{jasin ? ui.jasinNaslov : ui.ammeNaslov}</h3>
				<p className="lessons__final-text">{jasin ? ui.jasinKarticaTekst : ui.ammeKarticaTekst}</p>
				{locked && (
					<p className="lessons__final-hint">{user ? (jasin ? ui.jasinZakljucanKorisnik(trenutna) : ui.ammeZakljucanKorisnik(trenutna)) : ui.cardUnlockGuest}</p>
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
						<Link to={jasin ? putanjaBonusa : putanjaAmmeDzuza} className="btn-t btn-t--gold btn-t--sm">
							{jasin ? <FaBookOpen /> : <FaQuran />} {jasin ? ui.jasinOtvori : ui.ammeOtvori}
						</Link>
					)}
				</div>
			</div>
		</article>
	);
}
