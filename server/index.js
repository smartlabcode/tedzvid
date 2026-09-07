/*
 * Tedzvid.ba – mali poslužitelj: API za korisničke račune i napredak kroz lekcije
 * + posluživanje produkcijskog builda (build/). Bez vanjskih paketa – samo Node.
 *
 * Okruženje:
 *   PORT            – port (Railway ga postavlja sam; lokalno 3002)
 *   DATA_DIR        – mapa za users.json i tajni ključ (podrazumijevano ./data)
 *   SESSION_SECRET  – ključ za potpisivanje tokena (ako nije zadan, generiše se i čuva u DATA_DIR/secret)
 *   BUILD_DIR       – mapa s buildom (podrazumijevano ./build)
 *   CORS_ORIGINS    – dodatni izvori za CORS, odvojeni zarezom (mobilna aplikacija
 *                     s capacitor://localhost i https://localhost je već dozvoljena)
 *
 * API (JSON):
 *   POST /api/register  { ime, korisnicko, email, lozinka } → { token, user }
 *   POST /api/login     { email, lozinka }       → { token, user }   (email ili korisničko ime)
 *   GET  /api/me        (Authorization: Bearer)  → { user }
 *   POST /api/progress  { lekcija, tacno }       → { user }   (lekcija: 1–22 ili 'zavrsni')
 *   GET  /api/leaderboard?period=sedmica|mjesec|sve → { period, od, lista, moj }
 *   GET  /api/admin/users (samo admin)          → { sazetak, korisnici }
 *
 * Ugrađeni računi (prijava korisničkim imenom umjesto emaila):
 *   admin  – ADMIN_USER / ADMIN_PASSWORD (podrazumijevano admin / admin123! – promijeniti u produkciji);
 *            adminu su sve lekcije i završni kviz uvijek otključani
 *   user   – demo korisnik user / user123! (isključiti s DEMO_USER=0)
 *   GET  /api/health                             → { ok: true }
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');

const ROOT = path.join(__dirname, '..');
const PORT = parseInt(process.env.PORT, 10) || 3002;
const BUILD_DIR = path.resolve(process.env.BUILD_DIR || path.join(ROOT, 'build'));
const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(ROOT, 'data'));
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const SECRET_FILE = path.join(DATA_DIR, 'secret');

const TOKEN_TRAJANJE = 30 * 24 * 60 * 60 * 1000; /* 30 dana */
const BROJ_LEKCIJA = 22;
const UKUPNO_PITANJA = 10;
const PROLAZ_UDIO = 0.7; /* udio tačnih odgovora za prolaz (7/10 po lekciji, 70/100 na završnom) */
const ZAVRSNI = 'zavrsni'; /* ključ završnog kviza u napretku */
const UKUPNO_ZAVRSNI = 100;
const MAX_BODY = 64 * 1024;
const TZ = 'Europe/Sarajevo'; /* sedmica/mjesec na rang listi računaju se po lokalnom vremenu */
const RANG_LIMIT = 25;
const ADMIN_USER = String(process.env.ADMIN_USER || 'admin').trim().toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123!';
const DEMO_USER = 'user';
const DEMO_PASSWORD = 'user123!';
const SEED_DEMO = process.env.DEMO_USER !== '0';

/* ---------- pohrana korisnika (JSON datoteka) ---------- */
function ensureDataDir() {
	fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadUsers() {
	try {
		const parsed = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
		return Array.isArray(parsed) ? parsed : [];
	} catch (e) {
		return [];
	}
}

const users = loadUsers();

function saveUsers() {
	ensureDataDir();
	const tmp = USERS_FILE + '.tmp';
	fs.writeFileSync(tmp, JSON.stringify(users, null, 2));
	fs.renameSync(tmp, USERS_FILE);
}

const findByEmail = (email) => users.find((u) => u.email === email);
/* prijava: email ili korisničko ime (ugrađeni računi imaju oba jednaka) */
const findByLogin = (v) => users.find((u) => u.email === v || u.korisnicko === v);
const findById = (id) => users.find((u) => u.id === id);

/* Ono što klijent smije vidjeti (bez lozinke) */
function publicUser(u) {
	return {
		id: u.id,
		ime: u.ime,
		korisnicko: u.korisnicko || null,
		email: u.email,
		uloga: u.uloga || 'korisnik',
		progress: u.progress || {}
	};
}

/* ---------- tajni ključ i tokeni (HMAC-SHA256) ---------- */
function loadSecret() {
	if (process.env.SESSION_SECRET) return process.env.SESSION_SECRET;
	try {
		const s = fs.readFileSync(SECRET_FILE, 'utf8').trim();
		if (s) return s;
	} catch (e) {}
	const s = crypto.randomBytes(32).toString('hex');
	ensureDataDir();
	fs.writeFileSync(SECRET_FILE, s, { mode: 0o600 });
	return s;
}

const SECRET = loadSecret();

const hmac = (body) => crypto.createHmac('sha256', SECRET).update(body).digest('base64url');

function izdajToken(user) {
	const body = Buffer.from(JSON.stringify({ uid: user.id, exp: Date.now() + TOKEN_TRAJANJE })).toString('base64url');
	return body + '.' + hmac(body);
}

function provjeriToken(token) {
	if (!token || typeof token !== 'string') return null;
	const dot = token.indexOf('.');
	if (dot < 1) return null;
	const body = token.slice(0, dot);
	const sig = token.slice(dot + 1);
	const expected = hmac(body);
	if (sig.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
	try {
		const p = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
		if (!p || !p.uid || !p.exp || p.exp < Date.now()) return null;
		return p;
	} catch (e) {
		return null;
	}
}

/* ---------- lozinke (scrypt) ---------- */
const hashLozinke = (lozinka, salt) => crypto.scryptSync(lozinka, salt, 64).toString('hex');

function provjeriLozinku(lozinka, user) {
	const a = Buffer.from(hashLozinke(lozinka, user.salt), 'hex');
	const b = Buffer.from(user.hash, 'hex');
	return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/* ---------- ograničenje pokušaja prijave/registracije po IP adresi ---------- */
const pokusaji = new Map();
const LIMIT_BROJ = 30;
const LIMIT_PROZOR = 15 * 60 * 1000;

function prekoracenLimit(ip) {
	const now = Date.now();
	if (pokusaji.size > 5000) {
		for (const [ k, v ] of pokusaji) if (v.reset < now) pokusaji.delete(k);
	}
	let e = pokusaji.get(ip);
	if (!e || e.reset < now) {
		e = { count: 0, reset: now + LIMIT_PROZOR };
		pokusaji.set(ip, e);
	}
	e.count += 1;
	return e.count > LIMIT_BROJ;
}

/* ---------- CORS (mobilna aplikacija) ----------
 * Mobilna aplikacija (Capacitor) učitava se s lokalnog izvora u WebViewu i
 * poziva ovaj API preko mreže, pa joj treba CORS. Dozvoljeni su samo izvori
 * koje Capacitor koristi (iOS: capacitor://localhost, Android: http://localhost)
 * plus ono što je navedeno u CORS_ORIGINS (npr. za lokalni razvoj aplikacije).
 */
const CORS_IZVORI = new Set(
	[ 'capacitor://localhost', 'ionic://localhost', 'http://localhost', 'https://localhost' ]
		.concat(String(process.env.CORS_ORIGINS || '').split(',').map((v) => v.trim()).filter(Boolean))
);

/* vraća true ako je zahtjev s dozvoljenog izvora (i postavlja zaglavlja) */
function cors(req, res) {
	const origin = req.headers.origin;
	if (!origin) return true; /* isti izvor / bez preglednika */
	let dozvoljen = CORS_IZVORI.has(origin);
	if (!dozvoljen) {
		/* Android WebView na nekim verzijama dodaje port */
		try {
			const u = new URL(origin);
			dozvoljen = (u.hostname === 'localhost' || u.hostname === '127.0.0.1') && u.protocol !== 'file:';
		} catch (e) {
			dozvoljen = false;
		}
	}
	if (!dozvoljen) return false;
	res.setHeader('Access-Control-Allow-Origin', origin);
	res.setHeader('Vary', 'Origin');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.setHeader('Access-Control-Max-Age', '86400');
	return true;
}

/* ---------- pomoćne ---------- */
function json(res, status, data) {
	const body = JSON.stringify(data);
	res.writeHead(status, {
		'Content-Type': 'application/json; charset=utf-8',
		'Cache-Control': 'no-store',
		'Content-Length': Buffer.byteLength(body)
	});
	res.end(body);
}

function readBody(req) {
	return new Promise((resolve, reject) => {
		let size = 0;
		const chunks = [];
		req.on('data', (c) => {
			size += c.length;
			if (size > MAX_BODY) {
				reject(new Error('too_large'));
				req.destroy();
				return;
			}
			chunks.push(c);
		});
		req.on('end', () => {
			if (!chunks.length) return resolve({});
			try {
				const parsed = JSON.parse(Buffer.concat(chunks).toString('utf8'));
				resolve(parsed && typeof parsed === 'object' ? parsed : {});
			} catch (e) {
				reject(new Error('bad_json'));
			}
		});
		req.on('error', reject);
	});
}

function clientIp(req) {
	const fwd = req.headers['x-forwarded-for'];
	if (fwd) return String(fwd).split(',')[0].trim();
	return req.socket.remoteAddress || '';
}

function korisnikIzZahtjeva(req) {
	const h = req.headers.authorization || '';
	if (!h.startsWith('Bearer ')) return null;
	const p = provjeriToken(h.slice(7).trim());
	return p ? findById(p.uid) || null : null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/* korisničko ime: 3–20 znakova, mala slova, brojevi, tačka, crtica, donja crta; počinje slovom ili brojem */
const USERNAME_RE = /^[a-z0-9][a-z0-9._-]{2,19}$/;
const normKorisnicko = (v) => String(v || '').trim().toLowerCase();
const normEmail = (v) => String(v || '').trim().toLowerCase();
const normIme = (v) => String(v || '').trim().replace(/\s+/g, ' ');

function jePolozena(user, key) {
	const p = user.progress && user.progress[String(key)];
	return !!(p && p.polozeno);
}

/* Lekcija N je otključana ako je prva ili ako je položen kviz lekcije N-1;
   završni kviz kad je položena posljednja lekcija. Adminu je sve uvijek otključano. */
function jeOtkljucana(user, key) {
	if (user.uloga === 'admin') return true;
	if (key === ZAVRSNI) return jePolozena(user, BROJ_LEKCIJA);
	if (key <= 1) return true;
	return jePolozena(user, key - 1);
}

/* ---------- rang lista ---------- */
/* dijelovi datuma u lokalnoj zoni */
function dijeloviUZoni(date) {
	const f = new Intl.DateTimeFormat('en-CA', {
		timeZone: TZ,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hourCycle: 'h23',
		weekday: 'short'
	});
	const p = {};
	f.formatToParts(date).forEach((x) => {
		p[x.type] = x.value;
	});
	return p;
}

/* pomak zone (ms) u datom trenutku */
function pomakZone(date) {
	const p = dijeloviUZoni(date);
	const kaoUtc = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
	return kaoUtc - Math.floor(date.getTime() / 1000) * 1000;
}

/* UTC trenutak lokalne ponoći za (godina, mjesec 0-11, dan) */
function lokalnaPonoc(y, m, d) {
	const pretpostavka = Date.UTC(y, m, d);
	let t = pretpostavka - pomakZone(new Date(pretpostavka));
	const pomak2 = pomakZone(new Date(t));
	if (pretpostavka - pomak2 !== t) t = pretpostavka - pomak2;
	return t;
}

/* početak tekućeg perioda: sedmica (ponedjeljak), mjesec (1.), sve (0) */
function pocetakPerioda(period, now) {
	if (period === 'sve') return 0;
	const p = dijeloviUZoni(now);
	const y = +p.year;
	const m = +p.month - 1;
	const d = +p.day;
	if (period === 'mjesec') return lokalnaPonoc(y, m, 1);
	const wd = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ].indexOf(p.weekday);
	return lokalnaPonoc(y, m, d - ((wd + 6) % 7));
}

/* javno ime na rang listi: ime + inicijal prezimena */
function javnoIme(ime) {
	const dijelovi = String(ime || '').trim().split(' ');
	if (dijelovi.length < 2) return dijelovi[0] || '';
	return dijelovi[0] + ' ' + dijelovi[dijelovi.length - 1].charAt(0).toUpperCase() + '.';
}

/* događaji korisnika; stariji korisnici bez zapisa dobivaju po jedan iz sažetka napretka */
function dogadjajiKorisnika(u) {
	if (Array.isArray(u.dogadjaji) && u.dogadjaji.length) return u.dogadjaji;
	return Object.keys(u.progress || {}).map((k) => {
		const p = u.progress[k];
		return { k, t: p.najbolje || 0, u: k === ZAVRSNI ? UKUPNO_ZAVRSNI : UKUPNO_PITANJA, d: p.datum };
	});
}

/*
 * Bodovi u periodu = zbir najboljeg rezultata svakog kviza (lekcije 1–22 i završni) unutar perioda.
 * Ponavljanje istog kviza ne donosi dodatne bodove; polozeno = kvizovi s prolaznim rezultatom u periodu.
 */
function bodoviKorisnika(u, od) {
	const najbolje = {};
	for (const e of dogadjajiKorisnika(u)) {
		const t = Date.parse(e.d);
		if (!(t >= od)) continue;
		if (!najbolje[e.k] || e.t > najbolje[e.k].t) najbolje[e.k] = { t: e.t, u: e.u, d: t };
	}
	let bodovi = 0;
	let polozeno = 0;
	let zadnji = 0;
	for (const k of Object.keys(najbolje)) {
		const b = najbolje[k];
		bodovi += b.t;
		if (b.t >= Math.ceil(b.u * PROLAZ_UDIO)) polozeno += 1;
		if (b.d > zadnji) zadnji = b.d;
	}
	return { bodovi, polozeno, zadnji };
}

function rangLista(period, ja) {
	const od = pocetakPerioda(period, new Date());
	const svi = users
		.filter((u) => !u.uloga || u.uloga === 'korisnik')
		.map((u) => Object.assign({ id: u.id, ime: u.korisnicko || javnoIme(u.ime) }, bodoviKorisnika(u, od)))
		.filter((r) => r.bodovi > 0)
		/* više bodova, pa više položenih, pa ko je rezultat postigao ranije */
		.sort((a, b) => b.bodovi - a.bodovi || b.polozeno - a.polozeno || a.zadnji - b.zadnji);
	const lista = svi.slice(0, RANG_LIMIT).map((r, i) => ({
		rang: i + 1,
		ime: r.ime,
		bodovi: r.bodovi,
		polozeno: r.polozeno,
		ja: !!(ja && r.id === ja.id)
	}));
	let moj = null;
	if (ja) {
		const i = svi.findIndex((r) => r.id === ja.id);
		moj = i >= 0 ? { rang: i + 1, bodovi: svi[i].bodovi, polozeno: svi[i].polozeno } : { rang: null, bodovi: 0, polozeno: 0 };
	}
	return { period, od: new Date(od).toISOString(), ukupnoKorisnika: svi.length, lista, moj };
}

/* ---------- API ---------- */
async function handleApi(req, res, url) {
	const route = req.method + ' ' + url.pathname;

	if (!cors(req, res)) return json(res, 403, { error: 'forbidden_origin' });
	if (req.method === 'OPTIONS') {
		res.writeHead(204);
		return res.end();
	}

	if (route === 'GET /api/health') return json(res, 200, { ok: true });

	if (route === 'POST /api/register' || route === 'POST /api/login') {
		if (prekoracenLimit(clientIp(req))) return json(res, 429, { error: 'too_many' });
		let body;
		try {
			body = await readBody(req);
		} catch (e) {
			return json(res, 400, { error: 'bad_request' });
		}
		const email = normEmail(body.email);
		const lozinka = typeof body.lozinka === 'string' ? body.lozinka : '';

		if (route === 'POST /api/register') {
			const ime = normIme(body.ime);
			const korisnicko = normKorisnicko(body.korisnicko);
			if (ime.length < 2 || ime.length > 60) return json(res, 400, { error: 'bad_name' });
			if (!USERNAME_RE.test(korisnicko)) return json(res, 400, { error: 'bad_username' });
			if (!EMAIL_RE.test(email) || email.length > 120) return json(res, 400, { error: 'bad_email' });
			if (lozinka.length < 6 || lozinka.length > 200) return json(res, 400, { error: 'bad_password' });
			if (findByEmail(email)) return json(res, 409, { error: 'email_exists' });
			if (findByLogin(korisnicko)) return json(res, 409, { error: 'username_exists' });
			const salt = crypto.randomBytes(16).toString('hex');
			const user = {
				id: crypto.randomUUID(),
				ime,
				korisnicko,
				email,
				salt,
				hash: hashLozinke(lozinka, salt),
				createdAt: new Date().toISOString(),
				progress: {}
			};
			users.push(user);
			saveUsers();
			return json(res, 201, { token: izdajToken(user), user: publicUser(user) });
		}

		const user = findByLogin(email);
		if (!user || !provjeriLozinku(lozinka, user)) return json(res, 401, { error: 'bad_credentials' });
		return json(res, 200, { token: izdajToken(user), user: publicUser(user) });
	}

	const user = korisnikIzZahtjeva(req);

	if (route === 'GET /api/leaderboard') {
		const trazeni = url.searchParams.get('period');
		const period = [ 'sedmica', 'mjesec', 'sve' ].includes(trazeni) ? trazeni : 'sedmica';
		return json(res, 200, rangLista(period, user));
	}

	if (route === 'GET /api/admin/users') {
		if (!user) return json(res, 401, { error: 'unauthorized' });
		if (user.uloga !== 'admin') return json(res, 403, { error: 'forbidden' });
		return json(res, 200, pregledKorisnika());
	}

	if (route === 'GET /api/me') {
		if (!user) return json(res, 401, { error: 'unauthorized' });
		return json(res, 200, { user: publicUser(user) });
	}

	if (route === 'POST /api/progress') {
		if (!user) return json(res, 401, { error: 'unauthorized' });
		let body;
		try {
			body = await readBody(req);
		} catch (e) {
			return json(res, 400, { error: 'bad_request' });
		}
		const jeZavrsni = body.lekcija === ZAVRSNI;
		const n = jeZavrsni ? ZAVRSNI : parseInt(body.lekcija, 10);
		const tacno = parseInt(body.tacno, 10);
		const ukupno = jeZavrsni ? UKUPNO_ZAVRSNI : UKUPNO_PITANJA;
		if (!jeZavrsni && !(n >= 1 && n <= BROJ_LEKCIJA)) return json(res, 400, { error: 'bad_lesson' });
		if (!(tacno >= 0 && tacno <= ukupno)) return json(res, 400, { error: 'bad_score' });
		if (!jeOtkljucana(user, n)) return json(res, 403, { error: 'locked' });

		const key = String(n);
		user.progress = user.progress || {};
		const prev = user.progress[key] || {};
		const sada = new Date().toISOString();
		user.progress[key] = {
			najbolje: Math.max(prev.najbolje || 0, tacno),
			zadnje: tacno,
			pokusaji: (prev.pokusaji || 0) + 1,
			polozeno: !!prev.polozeno || tacno >= Math.ceil(ukupno * PROLAZ_UDIO),
			datum: sada
		};
		/* svaki pokušaj s datumom – osnova za sedmičnu/mjesečnu rang listu */
		user.dogadjaji = user.dogadjaji || [];
		user.dogadjaji.push({ k: key, t: tacno, u: ukupno, d: sada });
		saveUsers();
		return json(res, 200, { user: publicUser(user) });
	}

	return json(res, 404, { error: 'not_found' });
}

/* ---------- statičke datoteke (build/) ---------- */
const MIME = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.map': 'application/json',
	'.txt': 'text/plain; charset=utf-8',
	'.webmanifest': 'application/manifest+json',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.webp': 'image/webp',
	'.svg': 'image/svg+xml',
	'.ico': 'image/x-icon',
	'.mp3': 'audio/mpeg',
	'.ogg': 'audio/ogg',
	'.wav': 'audio/wav',
	'.m4a': 'audio/mp4',
	'.mp4': 'video/mp4',
	'.pdf': 'application/pdf',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.ttf': 'font/ttf',
	'.eot': 'application/vnd.ms-fontobject'
};
const COMPRESS = new Set([ '.html', '.js', '.css', '.json', '.svg', '.txt', '.map', '.webmanifest' ]);

function notFound(res) {
	res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
	res.end('Not found');
}

function serveFile(req, res, file, cacheControl) {
	fs.stat(file, (err, st) => {
		if (err || !st.isFile()) return notFound(res);
		const ext = path.extname(file).toLowerCase();
		const headers = {
			'Content-Type': MIME[ext] || 'application/octet-stream',
			'Cache-Control': cacheControl,
			'Accept-Ranges': 'bytes'
		};

		/* djelimični zahtjevi (audio/video premotavanje) */
		const range = req.headers.range;
		if (range && !COMPRESS.has(ext)) {
			const m = /^bytes=(\d*)-(\d*)$/.exec(range);
			if (m && (m[1] !== '' || m[2] !== '')) {
				const start = m[1] === '' ? Math.max(0, st.size - parseInt(m[2], 10)) : parseInt(m[1], 10);
				const end = m[1] === '' || m[2] === '' ? st.size - 1 : Math.min(parseInt(m[2], 10), st.size - 1);
				if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= st.size) {
					res.writeHead(416, { 'Content-Range': 'bytes */' + st.size });
					return res.end();
				}
				headers['Content-Range'] = 'bytes ' + start + '-' + end + '/' + st.size;
				headers['Content-Length'] = end - start + 1;
				res.writeHead(206, headers);
				if (req.method === 'HEAD') return res.end();
				const part = fs.createReadStream(file, { start, end });
				part.on('error', () => res.destroy());
				return part.pipe(res);
			}
		}

		const gzip = COMPRESS.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
		if (gzip) {
			headers['Content-Encoding'] = 'gzip';
			headers['Vary'] = 'Accept-Encoding';
		} else {
			headers['Content-Length'] = st.size;
		}
		res.writeHead(200, headers);
		if (req.method === 'HEAD') return res.end();
		const stream = fs.createReadStream(file);
		stream.on('error', () => res.destroy());
		if (gzip) stream.pipe(zlib.createGzip()).pipe(res);
		else stream.pipe(res);
	});
}

function serveStatic(req, res, url) {
	if (req.method !== 'GET' && req.method !== 'HEAD') {
		res.writeHead(405, { Allow: 'GET, HEAD' });
		return res.end();
	}
	let p;
	try {
		p = decodeURIComponent(url.pathname);
	} catch (e) {
		p = '/';
	}
	const file = path.normalize(path.join(BUILD_DIR, p));
	if (file !== BUILD_DIR && !file.startsWith(BUILD_DIR + path.sep)) return notFound(res);

	fs.stat(file, (err, st) => {
		if (!err && st.isFile()) {
			/* CRA-ovi bundlovi imaju hash u imenu → smiju se keširati "zauvijek" */
			const cache = p.startsWith('/static/') ? 'public, max-age=31536000, immutable' : 'public, max-age=3600';
			return serveFile(req, res, file, cache);
		}
		/* nepostojeća datoteka s ekstenzijom → 404; sve ostale rute (SPA) → index.html */
		if (path.extname(p) && !p.endsWith('.html')) return notFound(res);
		serveFile(req, res, path.join(BUILD_DIR, 'index.html'), 'no-cache');
	});
}

/* ---------- admin: pregled svih korisnika ---------- */
function pregledKorisnika() {
	const sedmica = pocetakPerioda('sedmica', new Date());
	const korisnici = users
		.map((u) => {
			const dog = dogadjajiKorisnika(u);
			let zadnja = 0;
			for (const e of dog) {
				const t = Date.parse(e.d);
				if (t > zadnja) zadnja = t;
			}
			const progress = u.progress || {};
			const polozeno = Object.keys(progress).filter((k) => k !== ZAVRSNI && progress[k].polozeno).length;
			const z = progress[ZAVRSNI];
			return {
				id: u.id,
				ime: u.ime,
				korisnicko: u.korisnicko || null,
				email: u.email,
				uloga: u.uloga || 'korisnik',
				createdAt: u.createdAt,
				zadnjaAktivnost: zadnja ? new Date(zadnja).toISOString() : null,
				pokusaji: dog.length,
				polozeno,
				zavrsni: z ? { najbolje: z.najbolje, polozeno: !!z.polozeno } : null,
				progress
			};
		})
		.sort(
			(a, b) =>
				(Date.parse(b.zadnjaAktivnost || b.createdAt) || 0) - (Date.parse(a.zadnjaAktivnost || a.createdAt) || 0)
		);
	const sazetak = {
		ukupno: users.length,
		aktivniSedmica: korisnici.filter((k) => k.zadnjaAktivnost && Date.parse(k.zadnjaAktivnost) >= sedmica).length,
		polozenZavrsni: korisnici.filter((k) => k.zavrsni && k.zavrsni.polozeno).length,
		pokusaji: korisnici.reduce((sum, k) => sum + k.pokusaji, 0)
	};
	return { sazetak, korisnici };
}

/* ---------- ugrađeni računi: admin i demo korisnik ---------- */
function osigurajRacun(email, ime, lozinka, uloga, azurirajLozinku) {
	let u = findByEmail(email);
	if (!u) {
		const salt = crypto.randomBytes(16).toString('hex');
		u = {
			id: crypto.randomUUID(),
			ime,
			korisnicko: email,
			email,
			salt,
			hash: hashLozinke(lozinka, salt),
			uloga,
			createdAt: new Date().toISOString(),
			progress: {}
		};
		users.push(u);
		return true;
	}
	let changed = false;
	if (u.uloga !== uloga) {
		u.uloga = uloga;
		changed = true;
	}
	if (!u.korisnicko) {
		u.korisnicko = email;
		changed = true;
	}
	/* lozinka iz okruženja ima prednost nad sačuvanom */
	if (azurirajLozinku && !provjeriLozinku(lozinka, u)) {
		u.salt = crypto.randomBytes(16).toString('hex');
		u.hash = hashLozinke(lozinka, u.salt);
		changed = true;
	}
	return changed;
}

function seedRacuni() {
	let changed = osigurajRacun(ADMIN_USER, 'Administrator', ADMIN_PASSWORD, 'admin', !!process.env.ADMIN_PASSWORD);
	if (SEED_DEMO) changed = osigurajRacun(DEMO_USER, 'Demo Korisnik', DEMO_PASSWORD, 'demo', false) || changed;
	if (changed) saveUsers();
	if (!process.env.ADMIN_PASSWORD) {
		console.warn('UPOZORENJE: admin (' + ADMIN_USER + ') koristi podrazumijevanu lozinku – postavi ADMIN_PASSWORD.');
	}
}

/* ---------- server ---------- */
const server = http.createServer((req, res) => {
	let url;
	try {
		url = new URL(req.url, 'http://localhost');
	} catch (e) {
		res.writeHead(400);
		return res.end();
	}
	if (url.pathname === '/api' || url.pathname.startsWith('/api/')) {
		handleApi(req, res, url).catch((e) => {
			console.error(e);
			if (!res.headersSent) json(res, 500, { error: 'server' });
			else res.destroy();
		});
		return;
	}
	serveStatic(req, res, url);
});

seedRacuni();

server.listen(PORT, () => {
	console.log('tedzvid server na http://localhost:' + PORT);
	console.log('  build: ' + BUILD_DIR + (fs.existsSync(path.join(BUILD_DIR, 'index.html')) ? '' : ' (nema builda – samo API)'));
	console.log('  data:  ' + DATA_DIR + ' (' + users.length + ' korisnika)');
});
