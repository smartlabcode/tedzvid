import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLock, FaCheck, FaRedo, FaClipboardCheck, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import {
	ZAVRSNI,
	UKUPNO_ZAVRSNI,
	jePolozenZavrsni,
	trenutnaLekcija,
	putanjaKviza,
	putanjaZavrsnog
} from '../auth/progress';
import { useUI } from '../i18n/ui';

/* Kartica završnog kviza na dnu pregleda lekcija */
export default function FinalQuizCard() {
	const ui = useUI();
	const { user, loading, progress, isUnlocked } = useAuth();
	const p = progress[ZAVRSNI];
	const polozen = jePolozenZavrsni(progress);
	const locked = !loading && !isUnlocked(ZAVRSNI);
	const trenutna = trenutnaLekcija(progress) || 1;

	return (
		<article className={'lessons__final' + (locked ? ' is-locked' : '') + (polozen ? ' is-done' : '')}>
			<div className="lessons__final-icon" aria-hidden="true">
				{locked ? <FaLock /> : <FaGraduationCap />}
			</div>
			<div className="lessons__final-body">
				<p className="eyebrow">{ui.zavrsniEyebrow}</p>
				<h3>{ui.zavrsniTitle}</h3>
				<p className="lessons__final-text">{ui.zavrsniCardText(UKUPNO_ZAVRSNI)}</p>
				{p && (
					<div className="lesson-card__status">
						<span className={'status-pill status-pill--' + (polozen ? 'ok' : 'partial')}>
							{polozen ? <FaCheck /> : <FaRedo />} {polozen ? ui.statusPolozeno : ui.statusNijePolozeno}
							{' · '}
							{p.najbolje}/{UKUPNO_ZAVRSNI}
						</span>
					</div>
				)}
				{locked && <p className="lessons__final-hint">{user ? ui.zavrsniLockedUser(trenutna) : ui.cardUnlockGuest}</p>}
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
						<Link to={putanjaZavrsnog} className="btn-t btn-t--gold btn-t--sm">
							<FaGraduationCap /> {ui.zavrsniOpen}
						</Link>
					)}
				</div>
			</div>
		</article>
	);
}
