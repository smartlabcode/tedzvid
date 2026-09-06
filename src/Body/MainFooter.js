import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaHome } from 'react-icons/fa';

/* Navigacija između lekcija (na dnu lekcije; na mobitelu fiksirana traka) */
function Footer(props) {
	const history = useHistory();

	useEffect(() => {
		const handleKeyPress = (event) => {
			if (event.target && [ 'INPUT', 'TEXTAREA' ].includes(event.target.tagName)) return;
			if (event.keyCode === 37) history.push(props.prev);
			if (event.keyCode === 39) history.push(props.next);
		};
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [ history, props.prev, props.next ]);

	return (
		<footer className="lesson-nav">
			<Link to={props.prev} className="lesson-nav__btn lesson-nav__btn--prev" aria-label="Prethodna lekcija">
				<FaChevronLeft />
				<em>Prethodna</em>
			</Link>
			<Link to="/lekcije" className="lesson-nav__btn lesson-nav__btn--home" aria-label="Sve lekcije">
				<FaHome />
				<em>Sve lekcije</em>
			</Link>
			<Link to={props.next} className="lesson-nav__btn lesson-nav__btn--next" aria-label="Sljedeća lekcija">
				<em>Sljedeća</em>
				<FaChevronRight />
			</Link>
		</footer>
	);
}

export default Footer;
