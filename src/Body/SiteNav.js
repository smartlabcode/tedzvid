import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowLeft, FaArrowRight, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import Logo from './Logo';
import LangSwitch from './LangSwitch';
import { useAuth } from '../auth/AuthContext';
import { useUI } from '../i18n/ui';

/**
 * Zajednička navigacija za sve stranice.
 * props.active  – ključ aktivnog linka (home | lekcije | racun | ...)
 * props.cta     – { to, label, back } dugme desno; podrazumijevano vodi na lekcije
 */
export default function SiteNav({ active, cta }) {
	const [ open, setOpen ] = useState(false);
	const location = useLocation();
	const ui = useUI();
	const { user, logout } = useAuth();

	const LINKS = [
		{ key: 'home', to: '/', label: ui.navHome },
		{ key: 'lekcije', to: '/lekcije', label: ui.navLekcije },
		{ key: 'o-nama', to: '/#o-nama', label: ui.navONama },
		{ key: 'printano', to: '/#printano', label: ui.navPrintano },
		{ key: 'kontakt', to: '/#kontakt', label: ui.navKontakt }
	];

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

	const action = cta || { to: '/lekcije', label: ui.navLekcije };
	const ime = user ? user.ime.split(' ')[0] : null;

	const renderLinks = () =>
		LINKS.map((l) => (
			<li key={l.key}>
				<Link to={l.to} className={active === l.key ? 'is-active' : ''}>
					{l.label}
				</Link>
			</li>
		));

	/* korisnik: ime → moj napredak; gost: prijava */
	const renderUser = () =>
		user ? (
			<Link
				to="/profil"
				className={'site-nav__user' + (active === 'racun' ? ' is-active' : '')}
				title={ui.navProfil}
			>
				<FaUserCircle />
				<span>{ime}</span>
			</Link>
		) : (
			<Link
				to="/prijava"
				className={'site-nav__user site-nav__user--guest' + (active === 'racun' ? ' is-active' : '')}
				title={ui.navPrijava}
			>
				<FaUserCircle />
				<span>{ui.navPrijava}</span>
			</Link>
		);

	return (
		<header className="site-nav">
			{/* blur je na unutrašnjoj traci: backdrop-filter na headeru bi "zarobio" fixed overlay */}
			<div className="site-nav__bar">
				<div className="wrap site-nav__inner">
					<Logo />
					<nav aria-label={ui.navMain}>
						<ul className="site-nav__links">{renderLinks()}</ul>
					</nav>
					<div className="site-nav__actions">
						<LangSwitch />
						{renderUser()}
						<Link to={action.to} className="btn-t btn-t--gold btn-t--sm">
							{action.back && <FaArrowLeft />}
							{action.label}
							{!action.back && <FaArrowRight />}
						</Link>
						<button
							type="button"
							className="site-nav__toggle"
							aria-label={ui.navOpen}
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
						aria-label={ui.navClose}
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
				<div className="site-nav__mobile-auth">
					{user ? (
						<React.Fragment>
							<Link to="/profil" className="btn-t btn-t--light">
								<FaUserCircle /> {ui.navProfil}
							</Link>
							<button type="button" className="btn-t btn-t--light" onClick={logout}>
								<FaSignOutAlt /> {ui.navOdjava}
							</button>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Link to="/prijava" className="btn-t btn-t--light">
								<FaUserCircle /> {ui.navPrijava}
							</Link>
							<Link to="/registracija" className="btn-t btn-t--light">
								{ui.navRegistracija}
							</Link>
						</React.Fragment>
					)}
				</div>
				<LangSwitch light className="lang-switch--mobile" />
			</div>
		</header>
	);
}
