import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FaLock, FaUsers, FaBolt, FaGraduationCap, FaClipboardCheck } from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import { api } from '../auth/api';
import { useAuth } from '../auth/AuthContext';
import { BROJ_LEKCIJA, ZAVRSNI, UKUPNO, UKUPNO_ZAVRSNI, PROLAZ_ZAVRSNI } from '../auth/progress';
import { useLang } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';
import { formatDatum, formatDatumVrijeme } from '../i18n/datum';

const LEKCIJE = [];
for (let n = 1; n <= BROJ_LEKCIJA; n++) LEKCIJE.push(n);

/* Admin panel: sažetak i tabela svih korisnika; red se otvara u napredak po lekcijama */
export default function AdminPage() {
	const { user, loading } = useAuth();
	const ui = useUI();
	const { lang } = useLang();
	const [ data, setData ] = useState(null);
	const [ stanje, setStanje ] = useState('loading'); /* loading | ok | error | forbidden */
	const [ trazi, setTrazi ] = useState('');
	const [ otvoren, setOtvoren ] = useState(null);
	const jeAdmin = !!(user && user.uloga === 'admin');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(
		() => {
			if (!jeAdmin) return undefined;
			let alive = true;
			api.adminUsers().then(
				(d) => {
					if (!alive) return;
					setData(d);
					setStanje('ok');
				},
				(e) => {
					if (alive) setStanje(e.code === 'forbidden' ? 'forbidden' : 'error');
				}
			);
			return () => {
				alive = false;
			};
		},
		[ jeAdmin ]
	);

	if (!loading && !user) return <Redirect to={{ pathname: '/prijava', state: { from: '/admin' } }} />;

	const datum = (iso) => (iso ? formatDatum(iso, lang) : '–');
	const datumVrijeme = (iso) => (iso ? formatDatumVrijeme(iso, lang) : ui.adminNever);

	const q = trazi.trim().toLowerCase();
	const korisnici = data ? data.korisnici.filter((k) => !q || k.ime.toLowerCase().includes(q) || k.email.toLowerCase().includes(q)) : [];

	const statusCelije = (p, ukupno) => (!p ? 'none' : p.polozeno ? 'ok' : 'partial');

	return (
		<React.Fragment>
			<SiteNav active="admin" cta={{ to: '/lekcije', label: ui.navLekcije }} />
			<PageBand eyebrow={ui.adminEyebrow} title={ui.adminTitle} text={ui.adminText} />
			<main className="admin">
				<div className="wrap">
					{!loading && user && !jeAdmin && (
						<div className="gate__card">
							<div className="gate__icon">
								<FaLock />
							</div>
							<p>{ui.adminForbidden}</p>
						</div>
					)}
					{jeAdmin && stanje === 'loading' && <p className="rang__empty">{ui.adminLoading}</p>}
					{jeAdmin && (stanje === 'error' || stanje === 'forbidden') && (
						<div className="notice notice--err" role="alert">
							<span>{stanje === 'forbidden' ? ui.adminForbidden : ui.authErrors.network}</span>
						</div>
					)}
					{jeAdmin && stanje === 'ok' && data && (
						<React.Fragment>
							<div className="admin__stats">
								<div className="profil__stat">
									<b>{data.sazetak.ukupno}</b>
									<span>
										<FaUsers /> {ui.adminStatUsers}
									</span>
								</div>
								<div className="profil__stat">
									<b>{data.sazetak.aktivniSedmica}</b>
									<span>
										<FaBolt /> {ui.adminStatActiveWeek}
									</span>
								</div>
								<div className="profil__stat">
									<b>{data.sazetak.polozenZavrsni}</b>
									<span>
										<FaGraduationCap /> {ui.adminStatFinal}
									</span>
								</div>
								<div className="profil__stat">
									<b>{data.sazetak.pokusaji}</b>
									<span>
										<FaClipboardCheck /> {ui.adminStatAttempts}
									</span>
								</div>
							</div>

							<div className="admin__toolbar">
								<input
									className="field"
									type="search"
									placeholder={ui.adminSearch}
									value={trazi}
									onChange={(e) => setTrazi(e.target.value)}
								/>
								<span className="admin__count">{ui.adminShown(korisnici.length, data.korisnici.length)}</span>
							</div>
							<p className="admin__hint">{ui.adminDetailHint}</p>

							<div className="admin__table-wrap">
								<table className="admin__table">
									<thead>
										<tr>
											<th>{ui.adminColUser}</th>
											<th>{ui.adminColRole}</th>
											<th>{ui.adminColCreated}</th>
											<th>{ui.adminColLast}</th>
											<th>{ui.adminColLessons}</th>
											<th>{ui.adminColFinal}</th>
											<th>{ui.adminColAttempts}</th>
										</tr>
									</thead>
									<tbody>
										{korisnici.length === 0 && (
											<tr>
												<td colSpan={7} className="admin__empty">
													{ui.adminNoUsers}
												</td>
											</tr>
										)}
										{korisnici.map((k) => {
											const open = otvoren === k.id;
											return (
												<React.Fragment key={k.id}>
													<tr
														className={'admin__row' + (open ? ' is-open' : '')}
														onClick={() => setOtvoren(open ? null : k.id)}
													>
														<td>
															<b>{k.ime}</b>
															<small>{k.email}</small>
														</td>
														<td>
															<span className={'status-pill status-pill--' + (k.uloga === 'admin' ? 'ok' : k.uloga === 'demo' ? 'partial' : 'open')}>
																{ui.adminRole[k.uloga] || k.uloga}
															</span>
														</td>
														<td>{datum(k.createdAt)}</td>
														<td>{datumVrijeme(k.zadnjaAktivnost)}</td>
														<td>
															<b>{k.polozeno}</b>/{BROJ_LEKCIJA}
														</td>
														<td>
															{k.zavrsni ? (
																<span className={k.zavrsni.polozeno ? 'is-ok' : 'is-partial'}>
																	{k.zavrsni.najbolje}/{UKUPNO_ZAVRSNI}
																</span>
															) : (
																'–'
															)}
														</td>
														<td>{k.pokusaji}</td>
													</tr>
													{open && (
														<tr className="admin__detail">
															<td colSpan={7}>
																<div className="admin__cells">
																	{LEKCIJE.map((n) => {
																		const p = k.progress[String(n)];
																		return (
																			<span
																				key={n}
																				className={'admin__cell is-' + statusCelije(p, UKUPNO)}
																				title={ui.adminCell(n, p)}
																			>
																				{n}
																				{p && <small>{p.najbolje}</small>}
																			</span>
																		);
																	})}
																	<span
																		className={'admin__cell admin__cell--final is-' + statusCelije(k.progress[ZAVRSNI], PROLAZ_ZAVRSNI)}
																		title={ui.adminCellFinal(k.progress[ZAVRSNI])}
																	>
																		<FaGraduationCap />
																		{k.progress[ZAVRSNI] && <small>{k.progress[ZAVRSNI].najbolje}</small>}
																	</span>
																</div>
																<div className="admin__legend">
																	<span className="is-ok">{ui.adminLegend.ok}</span>
																	<span className="is-partial">{ui.adminLegend.partial}</span>
																	<span className="is-none">{ui.adminLegend.none}</span>
																</div>
															</td>
														</tr>
													)}
												</React.Fragment>
											);
										})}
									</tbody>
								</table>
							</div>
						</React.Fragment>
					)}
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}
