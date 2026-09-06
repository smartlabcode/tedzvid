import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMedal, FaUserPlus } from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import { api } from '../auth/api';
import { useAuth } from '../auth/AuthContext';
import { useLang } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';
import { formatDatum } from '../i18n/datum';

const PERIODI = [ 'sedmica', 'mjesec', 'sve' ];

/* Rang lista: najbolji ove sedmice, ovog mjeseca i ukupno (bodovi = najbolji rezultat svakog kviza u periodu) */
export default function LeaderboardPage() {
	const ui = useUI();
	const { lang } = useLang();
	const { user } = useAuth();
	const [ period, setPeriod ] = useState('sedmica');
	const [ data, setData ] = useState(null);
	const [ stanje, setStanje ] = useState('loading'); /* loading | ok | error */
	const uid = user ? user.id : null;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(
		() => {
			let alive = true;
			setStanje('loading');
			api.leaderboard(period).then(
				(d) => {
					if (!alive) return;
					setData(d);
					setStanje('ok');
				},
				() => {
					if (alive) setStanje('error');
				}
			);
			return () => {
				alive = false;
			};
		},
		[ period, uid ]
	);

	const datum = (iso) => formatDatum(iso, lang);

	const lista = (data && data.lista) || [];
	const moj = data && data.moj;
	const izvanListe = moj && (moj.rang === null || moj.rang > lista.length);

	return (
		<React.Fragment>
			<SiteNav active="rang" cta={{ to: '/lekcije', label: ui.navLekcije }} />
			<PageBand eyebrow={ui.rangEyebrow} title={ui.rangTitle} text={ui.rangText} />
			<main className="rang">
				<div className="wrap">
					<div className="rang__tabs" role="tablist">
						{PERIODI.map((p) => (
							<button
								key={p}
								type="button"
								role="tab"
								aria-selected={p === period}
								className={p === period ? 'is-active' : ''}
								onClick={() => setPeriod(p)}
							>
								{ui.rangPeriod[p]}
							</button>
						))}
					</div>

					<div className="rang__card">
						{stanje === 'ok' && period !== 'sve' && data && <p className="rang__od">{ui.rangOd(datum(data.od))}</p>}
						{stanje === 'loading' && <p className="rang__empty">{ui.rangLoading}</p>}
						{stanje === 'error' && (
							<div className="notice notice--err" role="alert">
								<span>{ui.authErrors.network}</span>
							</div>
						)}
						{stanje === 'ok' && lista.length === 0 && <p className="rang__empty">{ui.rangEmpty}</p>}
						{stanje === 'ok' && lista.length > 0 && (
							<ol className="rang__list">
								{lista.map((r) => (
									<li
										key={r.rang}
										className={'rang__row' + (r.ja ? ' is-me' : '') + (r.rang <= 3 ? ' is-top is-top-' + r.rang : '')}
									>
										<span className="rang__pos">{r.rang <= 3 ? <FaMedal /> : r.rang}</span>
										<span className="rang__name">
											{r.ime}
											{r.ja && <small>{ui.rangYou}</small>}
										</span>
										<span className="rang__passed">{ui.rangPassed(r.polozeno)}</span>
										<b className="rang__points">
											{r.bodovi} <small>{ui.rangPoints}</small>
										</b>
									</li>
								))}
							</ol>
						)}
						{stanje === 'ok' && user && izvanListe && (
							<p className="rang__me">{moj.rang ? ui.rangYourRank(moj.rang, moj.bodovi) : ui.rangNoPoints}</p>
						)}
						{!user && (
							<div className="rang__guest">
								<p>{ui.rangGuest}</p>
								<Link to={{ pathname: '/registracija', state: { from: '/rang-lista' } }} className="btn-t btn-t--gold btn-t--sm">
									<FaUserPlus /> {ui.navRegistracija}
								</Link>
							</div>
						)}
					</div>
					<p className="rang__rules">{ui.rangRules}</p>
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}
