import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Logo from './Logo';

const LINKS = [
	{ key: 'home', to: '/', label: 'Početna' },
	{ key: 'lekcije', to: '/lekcije', label: 'Lekcije' },
	{ key: 'o-nama', to: '/#o-nama', label: 'O nama' },
	{ key: 'printano', to: '/#printano', label: 'Printano izdanje' },
	{ key: 'kontakt', to: '/#kontakt', label: 'Kontakt' }
];

/**
 * Zajednička navigacija za sve stranice.
 * props.active  – ključ aktivnog linka (home | lekcije | ...)
 * props.cta     – { to, label, back } dugme desno; podrazumijevano vodi na lekcije
 */
export default function SiteNav({ active, cta }) {
	const [ open, setOpen ] = useState(false);
	const location = useLocation();

	useEffect(
		() => {
			setOpen(false);
		},
		[ location.pathname, location.hash ]
	);

	useEffect(
		() => {
			document.body.classList.toggle('nav-open', open);
			return () => document.body.classList.remove('nav-open');
		},
		[ open ]
	);

	const action = cta || { to: '/lekcije', label: 'Lekcije' };

	const renderLinks = () =>
		LINKS.map((l) => (
			<li key={l.key}>
				<Link to={l.to} className={active === l.key ? 'is-active' : ''}>
					{l.label}
				</Link>
			</li>
		));

	return (
		<header className="site-nav">
			{/* blur je na unutrašnjoj traci: backdrop-filter na headeru bi "zarobio" fixed overlay */}
			<div className="site-nav__bar">
				<div className="wrap site-nav__inner">
					<Logo />
					<nav aria-label="Glavna navigacija">
						<ul className="site-nav__links">{renderLinks()}</ul>
					</nav>
					<div className="site-nav__actions">
						<Link to={action.to} className="btn-t btn-t--gold btn-t--sm">
							{action.back && <FaArrowLeft />}
							{action.label}
							{!action.back && <FaArrowRight />}
						</Link>
						<button
							type="button"
							className="site-nav__toggle"
							aria-label="Otvori meni"
							aria-expanded={open}
							onClick={() => setOpen(true)}
						>
							<FaBars />
						</button>
					</div>
				</div>
			</div>

			<div className={'site-nav__mobile' + (open ? ' is-open' : '')} aria-hidden={!open}>
				<div className="site-nav__mobile-head">
					<Logo light tagline={false} />
					<button
						type="button"
						className="site-nav__mobile-close"
						aria-label="Zatvori meni"
						onClick={() => setOpen(false)}
					>
						<FaTimes />
					</button>
				</div>
				<ul>{renderLinks()}</ul>
				<Link to={action.to} className="btn-t btn-t--gold">
					{action.back && <FaArrowLeft />}
					{action.label}
					{!action.back && <FaArrowRight />}
				</Link>
			</div>
		</header>
	);
}
