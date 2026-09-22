/*
 * Kratki zvučni signali igre – bez ijednog audio zapisa, sve se sintetizira (WebAudio).
 * Isključivanje se pamti u pregledniku.
 */
const KLJUC = 'tedzvid-igra-zvuk';
let ctx = null;

export function zvukUkljucen() {
	try {
		return window.localStorage.getItem(KLJUC) !== 'off';
	} catch (e) {
		return true;
	}
}

export function postaviZvuk(on) {
	try {
		window.localStorage.setItem(KLJUC, on ? 'on' : 'off');
	} catch (e) {}
}

function context() {
	if (ctx) return ctx;
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return null;
	ctx = new AC();
	return ctx;
}

/* jedan ton: frekvencija (Hz), trajanje (s), oblik */
function ton(f, t, oblik, kada, jacina) {
	const c = context();
	if (!c) return;
	const osc = c.createOscillator();
	const gain = c.createGain();
	osc.type = oblik || 'sine';
	osc.frequency.setValueAtTime(f, c.currentTime + kada);
	gain.gain.setValueAtTime(0.0001, c.currentTime + kada);
	gain.gain.exponentialRampToValueAtTime(jacina || 0.12, c.currentTime + kada + 0.01);
	gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + kada + t);
	osc.connect(gain).connect(c.destination);
	osc.start(c.currentTime + kada);
	osc.stop(c.currentTime + kada + t + 0.02);
}

export function pisak(vrsta) {
	if (!zvukUkljucen()) return;
	try {
		const c = context();
		if (!c) return;
		if (c.state === 'suspended') c.resume();
		if (vrsta === 'dobro') ton(660, 0.12, 'triangle', 0);
		else if (vrsta === 'nizak') ton(180, 0.22, 'sawtooth', 0, 0.09);
		else if (vrsta === 'nivo') [ 523, 659, 784 ].forEach((f, i) => ton(f, 0.16, 'triangle', i * 0.09));
		else if (vrsta === 'kraj') [ 392, 330, 262 ].forEach((f, i) => ton(f, 0.24, 'sine', i * 0.14, 0.1));
		else if (vrsta === 'pobjeda') [ 523, 659, 784, 1047 ].forEach((f, i) => ton(f, 0.2, 'triangle', i * 0.11));
		else if (vrsta === 'par') [ 587, 880 ].forEach((f, i) => ton(f, 0.12, 'triangle', i * 0.07));
	} catch (e) {}
}
