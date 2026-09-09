import React, { useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import {
	FaCheck,
	FaLock,
	FaLockOpen,
	FaRedo,
	FaSignOutAlt,
	FaArrowRight,
	FaChalkboardTeacher,
	FaClipboardCheck,
	FaGraduationCap,
	FaLayerGroup,
	FaTrophy,
	FaUserShield
} from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import data from '../Data/lessons.json';
import { useAuth } from '../auth/AuthContext';
import {
	PROLAZ_GRUPA,
	UKUPNO,
	UKUPNO_GRUPA,
	UKUPNO_ZAVRSNI,
	BROJ_LEKCIJA,
	BROJ_GRUPA,
	GRUPE,
	ZAVRSNI,
	jePolozenZavrsni,
	jePolozenaGrupa,
	kljucGrupe,
	trenutnaGrupa,
	putanjaGrupnog,
	putanjaKviza,
	putanjaMualima,
	putanjaZavrsnog
} from '../auth/progress';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

const pick = (field, lang) => (typeof field === 'string' ? field : field[lang] || field[DEFAULT_LANG]);

/* Moj napredak: sažetak + status lekcija, kvizova grupa i završnog kviza + odjava */
export default function ProfilePage() {
	const { user, loading, progress, isAdmin, isMualim, isUnlocked, logout } = useAuth();
	const { lang } = useLang();
	const ui = useUI();
	const history = useHistory();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!loading && !user) return <Redirect to={{ pathname: '/prijava', state: { from: '/profil' } }} />;

	const lekcije = data['lekcije'].reduce((acc, curr) => acc.concat(curr), []);
	const polozenih = lekcije.filter((_, i) => progress[String(i + 1)] && progress[String(i + 1)].polozeno).length;
	const polozenihGrupa = GRUPE.filter((g) => jePolozenaGrupa(progress, g.broj)).length;
	const trenutna = trenutnaGrupa(progress);
	const zavrsniOtkljucan = isUnlocked(ZAVRSNI);
	const zavrsniPolozen = jePolozenZavrsni(progress);
	const pz = progress[ZAVRSNI];

	const LABEL = {
		ok: ui.statusPolozeno,
		partial: ui.statusNijePolozeno,
		open: ui.statusOtkljucano,
		locked: ui.statusZakljucano
	};
	const ICON = { ok: FaCheck, partial: FaRedo, open: FaLockOpen, locked: FaLock };
	const statusZa = (p, otkljucano) => (p && p.polozeno ? 'ok' : otkljucano ? (p ? 'partial' : 'open') : 'locked');

	const odjava = () => {
		logout();
		history.push('/');
	};

	const renderRow = (key, broj, naslov, podnaslov, status, p, ukupno, kvizPutanja, Broj) => {
		const Icon = ICON[status];
		return (
			<li key={key} className={'profil__row is-' + status}>
				<span className="profil__num">{Broj || broj}</span>
				<div className="profil__name">
					<b>{naslov}</b>
					<small>{podnaslov}</small>
				</div>
				<span className={'status-pill status-pill--' + status}>
					<Icon /> {LABEL[status]}
					{p && ` · ${p.najbolje}/${ukupno}`}
				</span>
				{status !== 'locked' && (
					<Link to={kvizPutanja} className="btn-t btn-t--ghost btn-t--sm profil__kviz">
						<FaClipboardCheck /> {ui.cardKviz}
					</Link>
				)}
			</li>
		);
	};

	return (
		<React.Fragment>
			<SiteNav active="racun" cta={{ to: '/lekcije', label: ui.navSveLekcije, back: true }} />
			<PageBand
				eyebrow={ui.profilEyebrow + (user && user.korisnicko ? ' · @' + user.korisnicko : '')}
				title={user ? user.ime : '…'}
				text={ui.profilText(PROLAZ_GRUPA, UKUPNO_GRUPA)}
			/>
			<main className="profil">
				<div className="wrap">
					{user && (
						<React.Fragment>
							<div className="profil__summary">
								<div className="profil__stat">
									<b>
										{polozenih}
										<small>/{BROJ_LEKCIJA}</small>
									</b>
									<span>{ui.profilPassed}</span>
								</div>
								<div className="profil__stat">
									<b>
										{polozenihGrupa}
										<small>/{BROJ_GRUPA}</small>
									</b>
									<span>{ui.profilGrupe}</span>
								</div>
								<div className="profil__stat profil__stat--next">
									<span>{ui.profilNext}</span>
									{trenutna ? (
										<Link to={putanjaGrupnog(trenutna)} className="btn-t btn-t--gold btn-t--sm">
											<FaLayerGroup /> {ui.grupaKvizNaslov(trenutna)}
											<FaArrowRight />
										</Link>
									) : !zavrsniPolozen ? (
										<Link to={putanjaZavrsnog} className="btn-t btn-t--gold btn-t--sm">
											<FaGraduationCap /> {ui.zavrsniTitle}
											<FaArrowRight />
										</Link>
									) : (
										<b className="profil__done">{ui.profilEverything}</b>
									)}
								</div>
							</div>

							<ol className="profil__list">
								{GRUPE.map((g) => (
									<React.Fragment key={'g' + g.broj}>
										{g.lekcije.map((n) => {
											const lekcija = lekcije[n - 1];
											const p = progress[String(n)];
											return renderRow(
												n,
												n,
												pick(lekcija.title, lang).trim(),
												pick(lekcija.subtitle, lang),
												statusZa(p, true),
												p,
												UKUPNO,
												putanjaKviza(n)
											);
										})}
										{renderRow(
											kljucGrupe(g.broj),
											null,
											ui.grupaKvizNaslov(g.broj),
											ui.grupaNaslov(g.od, g.do),
											statusZa(progress[kljucGrupe(g.broj)], isUnlocked(kljucGrupe(g.broj))),
											progress[kljucGrupe(g.broj)],
											UKUPNO_GRUPA,
											putanjaGrupnog(g.broj),
											<FaLayerGroup />
										)}
									</React.Fragment>
								))}
								{renderRow(
									ZAVRSNI,
									null,
									ui.zavrsniTitle,
									ui.zavrsniCardText(UKUPNO_ZAVRSNI),
									statusZa(pz, zavrsniOtkljucan),
									pz,
									UKUPNO_ZAVRSNI,
									putanjaZavrsnog,
									<FaGraduationCap />
								)}
							</ol>

							<div className="profil__foot">
								<Link to="/rang-lista" className="btn-t btn-t--gold">
									<FaTrophy /> {ui.navRang}
								</Link>
								{isMualim && (
									<Link to={putanjaMualima} className="btn-t btn-t--navy">
										<FaChalkboardTeacher /> {ui.navMualim}
									</Link>
								)}
								{isAdmin && (
									<Link to="/admin" className="btn-t btn-t--navy">
										<FaUserShield /> {ui.navAdmin}
									</Link>
								)}
								<button type="button" className="btn-t btn-t--outline" onClick={odjava}>
									<FaSignOutAlt /> {ui.navOdjava}
								</button>
							</div>
						</React.Fragment>
					)}
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}
