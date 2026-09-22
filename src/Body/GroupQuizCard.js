import React from 'react';
import { Link } from 'react-router-dom';
import { FaLayerGroup, FaLock, FaCheck, FaRedo, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import {
	UKUPNO_GRUPA,
	PROLAZ_GRUPA,
	kljucGrupe,
	jePolozenaGrupa,
	putanjaGrupnog
} from '../auth/progress';
import { useUI } from '../i18n/ui';

/* Kartica grupnog kviza na dnu svake grupe lekcija */
export default function GroupQuizCard({ grupa }) {
	const ui = useUI();
	const { user, loading, progress, isUnlocked } = useAuth();
	const kljuc = kljucGrupe(grupa.broj);
	const p = progress[kljuc];
	const polozen = jePolozenaGrupa(progress, grupa.broj);
	const locked = !loading && !isUnlocked(kljuc);

	return (
		<article className={'lessons__final lessons__final--grupa' + (locked ? ' is-locked' : '') + (polozen ? ' is-done' : '')}>
			<div className="lessons__final-icon" aria-hidden="true">
				{locked ? <FaLock /> : <FaLayerGroup />}
			</div>
			<div className="lessons__final-body">
				<p className="eyebrow">{ui.grupaKvizEyebrow(grupa.broj)}</p>
				<h3>{ui.grupaKvizNaslov(grupa.broj)}</h3>
				<p className="lessons__final-text">
					{ui.grupaKarticaTekst(UKUPNO_GRUPA, grupa.od, grupa.do, PROLAZ_GRUPA)}
				</p>
				{p && (
					<div className="lesson-card__status">
						<span className={'status-pill status-pill--' + (polozen ? 'ok' : 'partial')}>
							{polozen ? <FaCheck /> : <FaRedo />} {polozen ? ui.statusPolozeno : ui.statusNijePolozeno}
							{' · '}
							{p.najbolje}/{UKUPNO_GRUPA}
						</span>
					</div>
				)}
				{locked && (
					<p className="lessons__final-hint">
						{user ? ui.grupaLockedUser(grupa.broj - 1) : ui.grupaLockedGuest}
					</p>
				)}
				<div className="lesson-card__actions">
					{locked ? (
						user ? (
							<Link to={putanjaGrupnog(grupa.broj - 1)} className="btn-t btn-t--navy btn-t--sm">
								<FaLayerGroup /> {ui.grupaKvizNaslov(grupa.broj - 1)}
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
						<Link to={putanjaGrupnog(grupa.broj)} className="btn-t btn-t--gold btn-t--sm">
							<FaLayerGroup /> {ui.grupaOpen}
						</Link>
					)}
				</div>
			</div>
		</article>
	);
}
