/* Uvećani prikaz (pop-up lekcije, vježbe, tabele) mora izgledati kao stranica, samo veći:
   isti prelomi redova i isti redoslijed. Zato unutrašnja širina pop-upa postaje jednaka
   širini sadržaja na stranici, a zoom se računa tako da taj sadržaj ispuni pop-up.
   Pop-upovi se iscrtavaju u <body> (izvan .lekcija-page), pa ih pratimo globalno. */

const MAX_ZOOM = 1.6;

/* odakle se uzima širina: vježba je na stranici u uokvirenom panelu, sve ostalo u kartici */
const uzorZa = (body) =>
	document.querySelector(
		body.classList.contains('custom-modal--vjezba') ? '.lekcija-page .vjezba-panel' : '.lekcija-page .container'
	);

const sirinaSadrzaja = (el) => {
	const cs = getComputedStyle(el);
	return el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
};

function uskladi(body) {
	const uzor = uzorZa(body);
	if (!uzor) return;

	body.style.zoom = '1';
	body.style.paddingLeft = '';
	body.style.paddingRight = '';

	const cs = getComputedStyle(body);
	const lijevo = parseFloat(cs.paddingLeft);
	const desno = parseFloat(cs.paddingRight);
	const dostupno = body.getBoundingClientRect().width;
	const cilj = sirinaSadrzaja(uzor);
	if (!dostupno || !cilj) return;

	const zoom = Math.min(dostupno / (cilj + lijevo + desno), MAX_ZOOM);
	/* kad je zoom ograničen, višak širine ide u padding, da red ostane iste širine kao na stranici */
	const visak = Math.max(0, dostupno / zoom - lijevo - desno - cilj) / 2;

	body.style.zoom = String(zoom);
	body.style.paddingLeft = lijevo + visak + 'px';
	body.style.paddingRight = desno + visak + 'px';
}

/* pop-up se doda prije nego što dobije širinu (fade animacija), pa ponovi i u sljedećem frameu */
const uskladiUskoro = (body) => {
	uskladi(body);
	requestAnimationFrame(() => uskladi(body));
};

const uskladiSve = () => document.querySelectorAll('.modal-body.custom-modal').forEach(uskladi);

let pokrenuto = false;

export function pratiUvecaniPrikaz() {
	if (pokrenuto || typeof window === 'undefined' || typeof MutationObserver === 'undefined') return;
	pokrenuto = true;

	new MutationObserver((promjene) => {
		for (const p of promjene) {
			for (const cvor of p.addedNodes) {
				if (cvor.nodeType !== 1) continue;
				if (cvor.matches('.modal-body.custom-modal')) uskladiUskoro(cvor);
				cvor.querySelectorAll('.modal-body.custom-modal').forEach(uskladiUskoro);
			}
		}
	}).observe(document.body, { childList: true, subtree: true });

	window.addEventListener('resize', uskladiSve);
}
