import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaPencilAlt, FaTable, FaListUl } from 'react-icons/fa';
import data from '../Data/lessons.json';

function HomeFirst(props) {
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
							<h3 className="lesson-card__title">{lekcija.title.trim()}</h3>
							<p className="lesson-card__sub">{lekcija.subtitle}</p>
							<div className="lesson-card__actions">
								<Link to={base + '#lekcija'} className="btn-t btn-t--navy btn-t--sm">
									<FaBookOpen /> Lekcija
								</Link>
								<Link to={base + '#vjezba'} className="btn-t btn-t--ghost btn-t--sm">
									<FaPencilAlt /> Vježba
								</Link>
								{index === 0 && (
									<Link to={base + '#tabela'} className="btn-t btn-t--ghost btn-t--sm">
										<FaTable /> Tabela
									</Link>
								)}
								{index === 0 && (
									<Link to={base + '#znakovi'} className="btn-t btn-t--ghost btn-t--sm">
										<FaListUl /> Znakovi
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
