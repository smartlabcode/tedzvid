import React, { useEffect, useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import PageBand from './PageBand';
import { useAuth } from '../auth/AuthContext';
import { useUI } from '../i18n/ui';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/* isto pravilo kao na serveru: 3–20 znakova, mala slova, brojevi, . _ - */
const USERNAME_RE = /^[a-z0-9][a-z0-9._-]{2,19}$/;

/* Prijava (mode="login") i registracija (mode="register") – ista stranica, različita polja */
export default function AuthPage({ mode }) {
	const isLogin = mode === 'login';
	const { user, loading, login, register } = useAuth();
	const ui = useUI();
	const location = useLocation();

	const [ ime, setIme ] = useState('');
	const [ korisnicko, setKorisnicko ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ lozinka, setLozinka ] = useState('');
	const [ lozinka2, setLozinka2 ] = useState('');
	const [ err, setErr ] = useState(null);
	const [ busy, setBusy ] = useState(false);

	/* kuda nakon uspjeha: stranica s koje je korisnik došao (zaključana lekcija, kviz) ili pregled lekcija */
	const from = (location.state && location.state.from) || '/lekcije';

	useEffect(
		() => {
			window.scrollTo(0, 0);
			setErr(null);
		},
		[ mode ]
	);

	if (!loading && user) return <Redirect to={from} />;

	const submit = async (e) => {
		e.preventDefault();
		setErr(null);
		if (!isLogin && ime.trim().length < 2) return setErr('bad_name');
		if (!isLogin && !USERNAME_RE.test(korisnicko.trim().toLowerCase())) return setErr('bad_username');
		if (isLogin ? !email.trim() : !EMAIL_RE.test(email.trim())) return setErr('bad_email');
		if (lozinka.length < 6) return setErr('bad_password');
		if (!isLogin && lozinka !== lozinka2) return setErr('passwords_differ');
		setBusy(true);
		try {
			if (isLogin) await login(email, lozinka);
			else await register(ime, email, lozinka, korisnicko.trim().toLowerCase());
			/* uspjeh: gornji <Redirect> preuzima čim se korisnik postavi */
		} catch (ex) {
			setErr(ex.code || 'server');
			setBusy(false);
		}
	};

	return (
		<React.Fragment>
			<SiteNav active="racun" cta={{ to: '/lekcije', label: ui.navLekcije }} />
			<PageBand
				eyebrow={ui.authEyebrow}
				title={isLogin ? ui.loginTitle : ui.registerTitle}
				text={isLogin ? ui.loginText : ui.registerText}
			/>
			<main className="auth">
				<div className="wrap">
					<div className="auth__card">
						<form className="auth__form" onSubmit={submit} noValidate>
							{!isLogin && (
								<label className="auth__label">
									<span>{ui.fieldName}</span>
									<input
										className="field"
										type="text"
										name="ime"
										autoComplete="name"
										value={ime}
										onChange={(e) => setIme(e.target.value)}
										required
									/>
								</label>
							)}
							{!isLogin && (
								<label className="auth__label">
									<span>{ui.fieldUsername}</span>
									<input
										className="field"
										type="text"
										name="korisnicko"
										autoComplete="username"
										autoCapitalize="none"
										spellCheck={false}
										maxLength={20}
										value={korisnicko}
										onChange={(e) => setKorisnicko(e.target.value)}
										required
									/>
									<small>{ui.usernameHint}</small>
								</label>
							)}
							<label className="auth__label">
								<span>{isLogin ? ui.fieldLogin : ui.fieldEmail}</span>
								<input
									className="field"
									type={isLogin ? 'text' : 'email'}
									name="email"
									autoComplete={isLogin ? 'username' : 'email'}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</label>
							<label className="auth__label">
								<span>{ui.fieldPassword}</span>
								<input
									className="field"
									type="password"
									name="lozinka"
									autoComplete={isLogin ? 'current-password' : 'new-password'}
									value={lozinka}
									onChange={(e) => setLozinka(e.target.value)}
									required
								/>
								{!isLogin && <small>{ui.passwordHint}</small>}
							</label>
							{!isLogin && (
								<label className="auth__label">
									<span>{ui.fieldPassword2}</span>
									<input
										className="field"
										type="password"
										name="lozinka2"
										autoComplete="new-password"
										value={lozinka2}
										onChange={(e) => setLozinka2(e.target.value)}
										required
									/>
								</label>
							)}
							{err && (
								<div className="notice notice--err" role="alert">
									<span>{ui.authErrors[err] || ui.authErrors.server}</span>
								</div>
							)}
							<button type="submit" className="btn-t btn-t--gold" disabled={busy}>
								{isLogin ? <FaSignInAlt /> : <FaUserPlus />}
								{busy ? ui.btnWorking : isLogin ? ui.btnLogin : ui.btnRegister}
							</button>
						</form>
						<p className="auth__switch">
							{isLogin ? ui.switchToRegister : ui.switchToLogin}{' '}
							<Link to={{ pathname: isLogin ? '/registracija' : '/prijava', state: location.state }}>
								{isLogin ? ui.navRegistracija : ui.navPrijava}
							</Link>
						</p>
					</div>
				</div>
			</main>
			<SiteFooter />
		</React.Fragment>
	);
}
