import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaHome, FaLock } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import { kljucIzPutanje } from '../auth/progress';
import { useUI } from '../i18n/ui';

/* Navigacija između lekcija (na dnu lekcije; na mobitelu fiksirana traka) */
function Footer(props) {
	const history = useHistory();
	const ui = useUI();
	const { isUnlocked } = useAuth();

	/* sljedeća lekcija je zaključana dok se ne položi kviz ove */
	const nextLocked = !isUnlocked(kljucIzPutanje(props.next));

	useEffect(
		() => {
			const handleKeyPress = (event) => {
				if (event.target && [ 'INPUT', 'TEXTAREA', 'BUTTON' ].includes(event.target.tagName)) return;
				if (event.keyCode === 37) history.push(props.prev);
				if (event.keyCode === 39 && !nextLocked) history.push(props.next);
			};
			window.addEventListener('keydown', handleKeyPress);
			return () => window.removeEventListener('keydown', handleKeyPress);
		},
		[ history, props.prev, props.next, nextLocked ]
	);

	return (
		<footer className="lesson-nav">
			<Link to={props.prev} className="lesson-nav__btn lesson-nav__btn--prev" aria-label={ui.prethodnaAria}>
				<FaChevronLeft />
				<em>{ui.prethodna}</em>
			</Link>
			<Link to="/lekcije" className="lesson-nav__btn lesson-nav__btn--home" aria-label={ui.sveLekcije}>
				<FaHome />
				<em>{ui.sveLekcije}</em>
			</Link>
			<Link
				to={props.next}
				className={'lesson-nav__btn lesson-nav__btn--next' + (nextLocked ? ' is-locked' : '')}
				aria-label={ui.sljedecaAria + (nextLocked ? ' – ' + ui.statusZakljucano : '')}
				title={nextLocked ? ui.statusZakljucano : undefined}
			>
				<em>{ui.sljedeca}</em>
				{nextLocked ? <FaLock /> : <FaChevronRight />}
			</Link>
		</footer>
	);
}

export default Footer;
