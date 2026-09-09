import React from 'react';
import { Link } from 'react-router-dom';
import {
	FaBookOpen,
	FaPencilAlt,
	FaTable,
	FaListUl,
	FaPlayCircle,
	FaCheck,
	FaRedo,
	FaClipboardCheck
} from 'react-icons/fa';
import GroupQuizCard from './GroupQuizCard';
import data from '../Data/lessons.json';
import { useAuth } from '../auth/AuthContext';
import { GRUPE, UKUPNO, putanjaKviza } from '../auth/progress';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

/* Naslovi lekcija su u lessons.json po jezicima: { bs: '…', en: '…' } */
const pick = (field, lang) => (typeof field === 'string' ? field : field[lang] || field[DEFAULT_LANG]);

/* Lekcije po grupama (4+4+4+4+6); iza svake grupe stoji kartica grupnog kviza. */
function HomeFirst() {
	const { lang } = useLang();
	const ui = useUI();
	const { loading, progress } = useAuth();
	const lekcije = data['lekcije'].reduce((acc, curr) => acc.concat(curr), []);

	const kartica = (number) => {
		const lekcija = lekcije[number - 1];
		if (!lekcija) return null;
		const base = '/lekcija' + number;
		const p = progress[String(number)];
		const polozeno = !!(p && p.polozeno);
		return (
			<article className={'lesson-card' + (polozeno ? ' is-done' : '')} key={number}>
				<div className="lesson-card__num" aria-hidden="true">
					{number}
					{polozeno && (
						<span className="lesson-card__badge">
							<FaCheck />
						</span>
					)}
				</div>
				<div className="lesson-card__body">
					<h3 className="lesson-card__title">{pick(lekcija.title, lang).trim()}</h3>
					<p className="lesson-card__sub">{pick(lekcija.subtitle, lang)}</p>
					{p && (
						<div className="lesson-card__status">
							<span className={'status-pill status-pill--' + (polozeno ? 'ok' : 'partial')}>
								{polozeno ? <FaCheck /> : <FaRedo />} {polozeno ? ui.statusPolozeno : ui.statusNijePolozeno}
								{' · '}
								{p.najbolje}/{UKUPNO}
							</span>
						</div>
					)}
					<div className="lesson-card__actions">
						<Link to={base + '#lekcija'} className="btn-t btn-t--navy btn-t--sm">
							<FaBookOpen /> {ui.cardLekcija}
						</Link>
						<Link to={base + '#vjezba'} className="btn-t btn-t--ghost btn-t--sm">
							<FaPencilAlt /> {ui.cardVjezba}
						</Link>
						<Link to={base + '#video'} className="btn-t btn-t--ghost btn-t--sm">
							<FaPlayCircle /> {ui.cardVideo}
						</Link>
						{number === 1 && (
							<Link to={base + '#tabela'} className="btn-t btn-t--ghost btn-t--sm">
								<FaTable /> {ui.cardTabela}
							</Link>
						)}
						{number === 1 && (
							<Link to={base + '#znakovi'} className="btn-t btn-t--ghost btn-t--sm">
								<FaListUl /> {ui.cardZnakovi}
							</Link>
						)}
						<Link to={putanjaKviza(number)} className="btn-t btn-t--ghost btn-t--sm">
							<FaClipboardCheck /> {ui.cardKviz}
						</Link>
					</div>
				</div>
			</article>
		);
	};

	return (
		<div className={'lessons__grupe' + (loading ? ' is-loading' : '')}>
			{GRUPE.map((g) => (
				<section className="lessons__grupa" key={g.broj} id={'grupa' + g.broj}>
					<header className="lessons__grupa-head">
						<span className="lessons__grupa-oznaka">{ui.grupaEyebrow(g.broj)}</span>
						<h2>{ui.grupaNaslov(g.od, g.do)}</h2>
					</header>
					<div className="lessons__grid">{g.lekcije.map(kartica)}</div>
					<GroupQuizCard grupa={g} />
				</section>
			))}
		</div>
	);
}

export default HomeFirst;
