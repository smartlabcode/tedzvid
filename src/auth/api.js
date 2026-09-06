/* Pozivi prema API-ju (server/index.js). Token se čuva u localStorage. */
const BASE = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');
const TOKEN_KEY = 'tedzvid-token';

export function getToken() {
	try {
		return window.localStorage.getItem(TOKEN_KEY);
	} catch (e) {
		return null;
	}
}

export function setToken(token) {
	try {
		if (token) window.localStorage.setItem(TOKEN_KEY, token);
		else window.localStorage.removeItem(TOKEN_KEY);
	} catch (e) {
		/* privatni način rada / blokiran storage */
	}
}

/* Greška s kodom koji se prevodi u ui.authErrors */
function apiError(code, status) {
	const err = new Error(code);
	err.code = code;
	err.status = status;
	return err;
}

async function request(method, path, body) {
	const headers = { Accept: 'application/json' };
	if (body) headers['Content-Type'] = 'application/json';
	const token = getToken();
	if (token) headers.Authorization = 'Bearer ' + token;

	let res;
	try {
		res = await fetch(BASE + path, { method, headers, body: body ? JSON.stringify(body) : undefined });
	} catch (e) {
		throw apiError('network', 0);
	}
	let data = null;
	try {
		data = await res.json();
	} catch (e) {
		data = null;
	}
	if (!res.ok) throw apiError((data && data.error) || 'server', res.status);
	return data || {};
}

export const api = {
	register: (podaci) => request('POST', '/api/register', podaci),
	login: (podaci) => request('POST', '/api/login', podaci),
	me: () => request('GET', '/api/me'),
	progress: (podaci) => request('POST', '/api/progress', podaci)
};
