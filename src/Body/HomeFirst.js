import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaPencilAlt, FaTable, FaListUl, FaPlayCircle } from 'react-icons/fa';
import data from '../Data/lessons.json';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

/* Naslovi lekcija su u lessons.json po jezicima: { bs: '…', en: '…' } */
const pick = (field, lang) => (typeof field === 'string' ? field : field[lang] || field[DEFAULT_LANG]);

function HomeFirst(props) {
	const { lang } = useLang();
	const ui = useUI();
	const lekcije = data['lekcije'].reduce((acc, curr) => acc.concat(curr), []);

	return (
		<div className="lessons__grid">
			{lekcije.map((lekcija, index) => {
				const number = props.start + index + 1;
				const base = '/lekcija' + number;
				return (
					<article className="lesson-card" key={index}>
						<div className="lesson-card__num" aria-hidden="true">
							{number}
						</div>
						<div className="lesson-card__body">
							<h3 className="lesson-card__title">{pick(lekcija.title, lang).trim()}</h3>
							<p className="lesson-card__sub">{pick(lekcija.subtitle, lang)}</p>
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
								{index === 0 && (
									<Link to={base + '#tabela'} className="btn-t btn-t--ghost btn-t--sm">
										<FaTable /> {ui.cardTabela}
									</Link>
								)}
								{index === 0 && (
									<Link to={base + '#znakovi'} className="btn-t btn-t--ghost btn-t--sm">
										<FaListUl /> {ui.cardZnakovi}
									</Link>
								)}
							</div>
						</div>
					</article>
				);
			})}
		</div>
	);
}

export default HomeFirst;
