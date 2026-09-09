import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { api, getToken, setToken } from './api';
import { ZAVRSNI, brojGrupe, jeKljucGrupe, jeOtkljucanaGrupa, jeOtkljucanZavrsni } from './progress';

/*
 * Prijavljeni korisnik i njegov napredak.
 *   user      – { id, ime, email, progress } ili null (gost)
 *   loading   – true dok se uz postojeći token provjerava /api/me
 *   progress  – { '1': { najbolje, zadnje, pokusaji, polozeno, datum }, ... }
 *   isAdmin   – korisnik s ulogom 'admin'
 *   isMualim  – mualim (i admin): njemu su svi kvizovi otključani i može praviti vlastite kvizove
 *   isUnlocked(key) – lekcije su otvorene svima; zaključavaju se samo kvizovi:
 *                     'g1'…'g5' (grupni kviz) i ZAVRSNI
 */
const EMPTY = {};

const AuthContext = createContext({
	user: null,
	loading: false,
	progress: EMPTY,
	isAdmin: false,
	isMualim: false,
	isUnlocked: () => true,
	login: async () => null,
	register: async () => null,
	logout: () => {},
	saveResult: async () => null
});

export function AuthProvider({ children }) {
	const [ user, setUser ] = useState(null);
	const [ loading, setLoading ] = useState(() => !!getToken());

	/* uz sačuvani token dohvati korisnika; istekao token se briše */
	useEffect(() => {
		if (!getToken()) return undefined;
		let alive = true;
		api
			.me()
			.then(
				(d) => {
					if (alive) setUser(d.user);
				},
				(e) => {
					if (e.status === 401) setToken(null);
				}
			)
			.then(() => {
				if (alive) setLoading(false);
			});
		return () => {
			alive = false;
		};
	}, []);

	const login = useCallback(async (email, lozinka) => {
		const d = await api.login({ email, lozinka });
		setToken(d.token);
		setUser(d.user);
		return d.user;
	}, []);

	const register = useCallback(async (ime, email, lozinka, korisnicko) => {
		const d = await api.register({ ime, korisnicko, email, lozinka });
		setToken(d.token);
		setUser(d.user);
		return d.user;
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUser(null);
	}, []);

	/* rezultat kviza: server vraća osvježenog korisnika (napredak) */
	const saveResult = useCallback(async (lekcija, tacno) => {
		try {
			const d = await api.progress({ lekcija, tacno });
			setUser(d.user);
			return d.user;
		} catch (e) {
			if (e.status === 401) {
				setToken(null);
				setUser(null);
			}
			throw e;
		}
	}, []);

	const progress = (user && user.progress) || EMPTY;
	const isAdmin = !!(user && user.uloga === 'admin');
	/* mualimu su svi kvizovi otključani; admin ima i mualimova prava */
	const isMualim = !!(user && (user.uloga === 'mualim' || user.uloga === 'admin'));

	const value = useMemo(
		() => ({
			user,
			loading,
			progress,
			isAdmin,
			isMualim,
			isUnlocked: (key) => {
				if (isMualim) return true;
				if (key === ZAVRSNI) return jeOtkljucanZavrsni(progress);
				if (jeKljucGrupe(key)) return jeOtkljucanaGrupa(progress, brojGrupe(key));
				return true; /* lekcije (i bonus lekcije) su otvorene svima */
			},
			login,
			register,
			logout,
			saveResult
		}),
		[ user, loading, progress, isAdmin, isMualim, login, register, logout, saveResult ]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}

export default AuthContext;
