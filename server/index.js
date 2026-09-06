/*
 * Tedzvid.ba – mali poslužitelj: API za korisničke račune i napredak kroz lekcije
 * + posluživanje produkcijskog builda (build/). Bez vanjskih paketa – samo Node.
 *
 * Okruženje:
 *   PORT            – port (Railway ga postavlja sam; lokalno 3002)
 *   DATA_DIR        – mapa za users.json i tajni ključ (podrazumijevano ./data)
 *   SESSION_SECRET  – ključ za potpisivanje tokena (ako nije zadan, generiše se i čuva u DATA_DIR/secret)
 *   BUILD_DIR       – mapa s buildom (podrazumijevano ./build)
 *
 * API (JSON):
 *   POST /api/register  { ime, email, lozinka }  → { token, user }
 *   POST /api/login     { email, lozinka }       → { token, user }
 *   GET  /api/me        (Authorization: Bearer)  → { user }
 *   POST /api/progress  { lekcija, tacno }       → { user }   (lekcija: 1–22 ili 'zavrsni')
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
const findById = (id) => users.find((u) => u.id === id);

/* Ono što klijent smije vidjeti (bez lozinke) */
function publicUser(u) {
	return { id: u.id, ime: u.ime, email: u.email, progress: u.progress || {} };
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
const normEmail = (v) => String(v || '').trim().toLowerCase();
const normIme = (v) => String(v || '').trim().replace(/\s+/g, ' ');

function jePolozena(user, key) {
	const p = user.progress && user.progress[String(key)];
	return !!(p && p.polozeno);
}

/* Lekcija N je otključana ako je prva ili ako je položen kviz lekcije N-1;
   završni kviz kad je položena posljednja lekcija. */
function jeOtkljucana(user, key) {
	if (key === ZAVRSNI) return jePolozena(user, BROJ_LEKCIJA);
	if (key <= 1) return true;
	return jePolozena(user, key - 1);
}

/* ---------- API ---------- */
async function handleApi(req, res, url) {
	const route = req.method + ' ' + url.pathname;

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
			if (ime.length < 2 || ime.length > 60) return json(res, 400, { error: 'bad_name' });
			if (!EMAIL_RE.test(email) || email.length > 120) return json(res, 400, { error: 'bad_email' });
			if (lozinka.length < 6 || lozinka.length > 200) return json(res, 400, { error: 'bad_password' });
			if (findByEmail(email)) return json(res, 409, { error: 'email_exists' });
			const salt = crypto.randomBytes(16).toString('hex');
			const user = {
				id: crypto.randomUUID(),
				ime,
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

		const user = findByEmail(email);
		if (!user || !provjeriLozinku(lozinka, user)) return json(res, 401, { error: 'bad_credentials' });
		return json(res, 200, { token: izdajToken(user), user: publicUser(user) });
	}

	const user = korisnikIzZahtjeva(req);

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
		user.progress[key] = {
			najbolje: Math.max(prev.najbolje || 0, tacno),
			zadnje: tacno,
			pokusaji: (prev.pokusaji || 0) + 1,
			polozeno: !!prev.polozeno || tacno >= Math.ceil(ukupno * PROLAZ_UDIO),
			datum: new Date().toISOString()
		};
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

server.listen(PORT, () => {
	console.log('tedzvid server na http://localhost:' + PORT);
	console.log('  build: ' + BUILD_DIR + (fs.existsSync(path.join(BUILD_DIR, 'index.html')) ? '' : ' (nema builda – samo API)'));
	console.log('  data:  ' + DATA_DIR + ' (' + users.length + ' korisnika)');
});
