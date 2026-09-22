/*
 * Jedan zajednički <audio> element za cijelu stranicu.
 * - puštanje nove riječi/ajeta automatski gasi prethodni
 * - stanje (šta svira, pauza, kraj) i vrijeme (pozicija, trajanje) idu pretplatnicima
 */
const stateListeners = new Set();
const timeListeners = new Set();

let audio = null;
let state = { ownerId: null, url: null, label: '', playing: false, ended: false, error: false, queue: null };
let time = { currentTime: 0, duration: 0 };
let queue = null; // { items: [{ ownerId, url, label }], index }
let queueTimer = null;

const emitState = () => stateListeners.forEach((fn) => fn(state));
const emitTime = () => timeListeners.forEach((fn) => fn(time));
const setState = (patch) => {
	state = { ...state, ...patch };
	emitState();
};
const setTime = (patch) => {
	time = { ...time, ...patch };
	emitTime();
};

function resolveUrl(url) {
	if (!url) return '';
	if (/^(https?:)?\/\//.test(url) || url.startsWith('/')) return url;
	return (process.env.PUBLIC_URL || '') + '/' + url.replace(/^\.?\//, '');
}

function getAudio() {
	if (audio) return audio;
	audio = new Audio();
	audio.preload = 'auto';
	const dur = () => setTime({ duration: isFinite(audio.duration) ? audio.duration : 0 });
	audio.addEventListener('loadedmetadata', dur);
	audio.addEventListener('durationchange', dur);
	audio.addEventListener('timeupdate', () => setTime({ currentTime: audio.currentTime }));
	audio.addEventListener('ended', () => {
		setTime({ currentTime: 0 });
		if (queue && queue.index + 1 < queue.items.length) {
			// kratka pauza pa sljedeći zapis iz reda
			setState({ playing: false, ended: false });
			queueTimer = setTimeout(() => {
				if (!queue) return;
				queue.index += 1;
				const it = queue.items[queue.index];
				startPlayback(it.ownerId, it.url, it.label);
			}, 450);
		} else {
			queue = null;
			setState({ playing: false, ended: true, queue: null });
		}
	});
	audio.addEventListener('error', () => setState({ playing: false, error: true }));
	return audio;
}

function safePlay(a) {
	const p = a.play();
	if (p && typeof p.catch === 'function') p.catch(() => setState({ playing: false, error: true }));
}

function startPlayback(ownerId, url, label) {
	const a = getAudio();
	const src = resolveUrl(url);
	if (state.ownerId !== ownerId || state.url !== src) {
		a.src = src;
		setTime({ currentTime: 0, duration: 0 });
	}
	setState({
		ownerId,
		url: src,
		label: label || '',
		playing: true,
		ended: false,
		error: false,
		queue: queue ? { index: queue.index, total: queue.items.length } : null
	});
	safePlay(a);
}

function clearQueue() {
	queue = null;
	if (queueTimer) {
		clearTimeout(queueTimer);
		queueTimer = null;
	}
}

/* pojedinačna riječ – prekida eventualno puštanje cijele vježbe */
export function play(ownerId, url, label) {
	clearQueue();
	startPlayback(ownerId, url, label);
}

/* pusti listu zapisa redom (npr. cijelu vježbu) */
export function playQueue(items) {
	const list = (items || []).filter((it) => it && it.url);
	if (!list.length) return;
	clearQueue();
	queue = { items: list, index: 0 };
	startPlayback(list[0].ownerId, list[0].url, list[0].label);
}

export function queueStep(delta) {
	if (!queue) return;
	const next = queue.index + delta;
	if (next < 0 || next >= queue.items.length) return;
	if (queueTimer) {
		clearTimeout(queueTimer);
		queueTimer = null;
	}
	queue.index = next;
	const it = queue.items[next];
	startPlayback(it.ownerId, it.url, it.label);
}

export function pause() {
	if (!audio) return;
	audio.pause();
	setState({ playing: false });
}

export function resume() {
	if (!audio || !state.ownerId) return;
	setState({ playing: true, ended: false, error: false });
	safePlay(audio);
}

/* klik na riječ: ista riječ = pauza/nastavak, druga riječ = zamijeni zapis */
export function toggle(ownerId, url, label) {
	if (state.ownerId === ownerId && state.url === resolveUrl(url)) {
		if (state.playing) pause();
		else resume();
	} else {
		play(ownerId, url, label);
	}
}

export function stop() {
	clearQueue();
	if (audio) {
		audio.pause();
		audio.removeAttribute('src');
		audio.load();
	}
	setTime({ currentTime: 0, duration: 0 });
	setState({ ownerId: null, url: null, label: '', playing: false, ended: false, error: false, queue: null });
}

export function seek(t) {
	if (!audio || !isFinite(t)) return;
	audio.currentTime = Math.max(0, Math.min(t, time.duration || t));
	setTime({ currentTime: audio.currentTime });
}

export function getState() {
	return state;
}

export function getCurrentTime() {
	return audio ? audio.currentTime : 0;
}

export function getDuration() {
	return audio && isFinite(audio.duration) ? audio.duration : 0;
}

export function subscribe(fn) {
	stateListeners.add(fn);
	fn(state);
	return () => stateListeners.delete(fn);
}

export function subscribeTime(fn) {
	timeListeners.add(fn);
	fn(time);
	return () => timeListeners.delete(fn);
}
