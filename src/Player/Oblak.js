import React, { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

/*
 * Oblačić s objašnjenjem uz riječ/ajet koji trenutno svira.
 * Kači se uz prvi istaknuti (crveni) dio riječi – ako ga nema, uz cijelu riječ.
 * Nikad ne prekriva ajet koji se trenutno uči, ni kad se prelama u više redova:
 * ide iznad ili ispod cijelog tog ajeta, na stranu koja pokriva manje ostalog teksta.
 * Korisnik ga može odvući mišem ili prstom; taj pomak se pamti do kraja posjete,
 * pa se i sljedeći oblačići pojave tamo gdje mu ne smetaju.
 * Na uskom ekranu pluta preko premalo prostora, pa se usidri pri dnu iznad plejera,
 * a stranica dobije toliko praznog prostora da tekst vježbe može doći iznad njega.
 * Napomena: [{ tip: 'dugo' | 'kratko' | 'napomena', bs: '...', en: '...' }]
 */

/* arapske dionice u tekstu napomene dobiju mushaf font; sadržaj zagrada, npr. "(دَ)", ostaje u jednom redu */
const AR_RUN = /([؀-ۿ‍]+)/;
const ZAGRADA = /(\([^()]*\))/;
const arRun = (text, key) =>
	String(text)
		.split(AR_RUN)
		.map((dio, i) => (i % 2 ? <span key={key + '-' + i} lang="ar" dir="rtl" className="oblak__ar">{dio}</span> : dio));
function arabize(text) {
	return String(text)
		.split(ZAGRADA)
		.map((dio, i) => (i % 2 ? <span key={i} className="oblak__grupa">{arRun(dio, i)}</span> : arRun(dio, i)));
}

const GAP = 26; // razmak između oblačića i ajeta koji se uči
const MARGIN = 8; // najmanji razmak od ruba ekrana
const USKO = 700; // do ove širine ekrana oblačić se sidri pri dnu

/* koliko je korisnik zadnji put odvukao oblačić (traje do osvježavanja stranice) */
const pomak = { dx: 0, dy: 0 };

export default function Oblak({ anchorRef, notes }) {
	const { lang } = useLang();
	const ui = useUI();
	const ref = useRef(null);
	const vuceRef = useRef(false);
	const pomjerenoRef = useRef(0);
	const [ pos, setPos ] = useState({
		left: 0,
		top: 0,
		strelica: 0,
		mjesto: 'above',
		vidljiv: false,
		uzHarf: true,
		dokiran: false
	});

	useLayoutEffect(
		() => {
			let raf = null;
			const izracunaj = () => {
				raf = null;
				const host = anchorRef.current;
				const box = ref.current;
				if (!host || !box) return;

				/* prvi istaknuti dio koji se zaista vidi – u ligaturi (npr. اللّٰهُ) istaknuti harf može imati nultu širinu */
				const target =
					Array.prototype.find.call(host.querySelectorAll('.oznaceno'), (el) => el.getBoundingClientRect().width > 0) ||
					host;
				const r = target.getBoundingClientRect();
				/* cijeli aktivni ajet (može se prelamati u više redova) – preko njega se ne smije */
				const rh = host.getBoundingClientRect();
				const w = box.offsetWidth;
				let h = box.offsetHeight;
				const vw = window.innerWidth;
				const vh = window.innerHeight;

				const nav = document.querySelector('.site-nav');
				const gornjaGranica = nav ? nav.getBoundingClientRect().bottom : 0;
				/* plutajući plejer je iznad oblačića, pa oblačić ne smije ispod njegove gornje ivice */
				const plejer = document.querySelector('.now-playing');
				const donjaGranica = plejer ? plejer.getBoundingClientRect().top : vh;

				const cx = r.left + r.width / 2;
				const cy = r.top + r.height / 2;


				/* harf mora biti u vidnom polju i nepokriven (modal, plejer...) */
				let vidljiv = r.width > 0 && cx >= 0 && cx <= vw && cy >= gornjaGranica && cy <= vh;
				if (vidljiv && document.elementFromPoint) {
					/* sam oblačić se ne računa kao prepreka, samo modal, plejer i slično */
					const ispod = document.elementsFromPoint
						? Array.prototype.find.call(document.elementsFromPoint(cx, cy), (el) => el !== box && !box.contains(el))
						: document.elementFromPoint(cx, cy);
					vidljiv = !!ispod && host.contains(ispod);
				}
				/* ---- uski ekran: oblačić se sidri pri dnu, iznad plejera ---- */
				if (vw <= USKO) {
					box.style.maxHeight = '';
					box.classList.remove('oblak--skrolabilan');
					const visina = box.offsetHeight;
					document.body.style.setProperty('--oblak-visina', visina + 'px');
					document.body.style.setProperty('--oblak-dno', vh - donjaGranica + GAP + 'px');
					document.body.classList.add('ima-oblak');
					/* ako ajet ostane iza oblačića, stranica se pomjeri da ajet bude iznad njega;
					   visina oblačića se zna tek nakon iscrtavanja, pa je dozvoljeno par ispravki */
					const vrh = donjaGranica - GAP - visina;
					const manjak = rh.bottom + MARGIN - vrh;
					if (manjak > 1 && pomjerenoRef.current < 4) {
						pomjerenoRef.current += 1;
						window.scrollBy(0, Math.ceil(manjak + GAP));
					}
					setPos((p) => (p.dokiran && p.vidljiv === vidljiv ? p : { ...p, dokiran: true, vidljiv, uzHarf: false }));
					return;
				}
				document.body.classList.remove('ima-oblak');

				let left = cx - w / 2;
				left = Math.max(MARGIN, Math.min(left + pomak.dx, vw - MARGIN - w));

				/* koliko klikabilnih riječi bi oblačić prekrio na datoj visini */
				const rijeci = Array.prototype.slice.call(document.querySelectorAll('.rijec-audio'));
				const pokriva = (t) => {
					let n = 0;
					for (let i = 0; i < rijeci.length; i++) {
						const el = rijeci[i];
						if (el === host || host.contains(el) || el.contains(host)) continue;
						const q = el.getBoundingClientRect();
						if (q.bottom < gornjaGranica || q.top > donjaGranica || q.width === 0) continue;
						if (q.left < left + w && q.right > left && q.top < t + h && q.bottom > t) n++;
					}
					return n;
				};
				const uOkvir = (t) => Math.max(gornjaGranica + MARGIN, Math.min(t, donjaGranica - MARGIN - h));

				const gore = rh.top - GAP - (gornjaGranica + MARGIN);
				const dolje = donjaGranica - MARGIN - (rh.bottom + GAP);
				/* na višu stranu mora stati cijeli; samo ako ni tamo ne stane, skraćuje se i skroluje */
				box.style.maxHeight = '';
				h = box.offsetHeight;
				const najvisa = Math.max(120, Math.max(gore, dolje));
				const stisnut = h > najvisa;
				box.classList.toggle('oblak--skrolabilan', stisnut);
				if (stisnut) {
					box.style.maxHeight = najvisa + 'px';
					h = box.offsetHeight;
				}
				const iznad = uOkvir(rh.top - GAP - h);
				const ispod = uOkvir(rh.bottom + GAP);
				let mjesto;
				if (h > gore && h > dolje) mjesto = gore >= dolje ? 'above' : 'below';
				else if (h > gore) mjesto = 'below';
				else if (h > dolje) mjesto = 'above';
				else mjesto = pokriva(ispod) < pokriva(iznad) ? 'below' : 'above'; // manje prekrivenog teksta

				let top = uOkvir((mjesto === 'above' ? iznad : ispod) + pomak.dy);
				/* strelica pokazuje na harf; kad je oblačić odvučen ustranu, nema je */
				const uzHarf = cx > left + 18 && cx < left + w - 18 && (mjesto === 'above' ? top + h <= rh.top : top >= rh.bottom);
				const strelica = Math.max(18, Math.min(cx - left, w - 18));

				setPos((p) =>
					p.left === left && p.top === top && p.strelica === strelica && p.mjesto === mjesto && p.vidljiv === vidljiv && p.uzHarf === uzHarf && !p.dokiran
						? p
						: { left, top, strelica, mjesto, vidljiv, uzHarf, dokiran: false }
				);
			};
			const zakazi = () => {
				if (vuceRef.current) return; // dok korisnik vuče oblačić, položaj se ne preračunava
				if (raf === null) raf = window.requestAnimationFrame(izracunaj);
			};

			if (!vuceRef.current) izracunaj();
			/* fontovi / animacije mogu naknadno pomjeriti raspored */
			const t1 = setTimeout(izracunaj, 60);
			const t2 = setTimeout(izracunaj, 400);

			window.addEventListener('scroll', zakazi, true);
			window.addEventListener('resize', zakazi);
			let ro = null;
			if (typeof window.ResizeObserver === 'function') {
				ro = new window.ResizeObserver(zakazi);
				ro.observe(document.body);
				if (anchorRef.current) ro.observe(anchorRef.current);
			}

			/* otvaranje modala / pojava plejera ne mijenja veličinu stranice, pa pratimo i promjene u <body> */
			let mo = null;
			if (typeof window.MutationObserver === 'function') {
				mo = new window.MutationObserver(zakazi);
				mo.observe(document.body, { childList: true, attributes: true, attributeFilter: [ 'class', 'style' ] });
			}

			return () => {
				document.body.classList.remove('ima-oblak');
				document.body.style.removeProperty('--oblak-visina');
				document.body.style.removeProperty('--oblak-dno');
				clearTimeout(t1);
				clearTimeout(t2);
				if (raf !== null) window.cancelAnimationFrame(raf);
				window.removeEventListener('scroll', zakazi, true);
				window.removeEventListener('resize', zakazi);
				if (ro) ro.disconnect();
				if (mo) mo.disconnect();
			};
		},
		[ anchorRef, notes, lang ]
	);

	/* vučenje: pamti se razlika u odnosu na sam izračunati položaj */
	const pocniVucu = (e) => {
		const box = ref.current;
		if (!box || (e.button !== undefined && e.button !== 0)) return;
		if (box.classList.contains('oblak--dokiran')) return; /* usidren se ne vuče */
		/* prstom se skraćeni oblačić skroluje, ne vuče */
		if (e.touches && box.classList.contains('oblak--skrolabilan')) return;
		const t = e.touches ? e.touches[0] : e;
		const start = { x: t.clientX, y: t.clientY, dx: pomak.dx, dy: pomak.dy, left: box.offsetLeft, top: box.offsetTop };
		vuceRef.current = true;
		box.classList.add('oblak--vuce');
		const pomjeri = (ev) => {
			const p = ev.touches ? ev.touches[0] : ev;
			const w = box.offsetWidth;
			const h = box.offsetHeight;
			const dx = p.clientX - start.x;
			const dy = p.clientY - start.y;
			pomak.dx = start.dx + dx;
			pomak.dy = start.dy + dy;
			box.style.left = Math.max(MARGIN, Math.min(start.left + dx, window.innerWidth - MARGIN - w)) + 'px';
			box.style.top = Math.max(MARGIN, Math.min(start.top + dy, window.innerHeight - MARGIN - h)) + 'px';
			if (ev.cancelable) ev.preventDefault();
		};
		const kraj = () => {
			vuceRef.current = false;
			box.classList.remove('oblak--vuce');
			document.removeEventListener('mousemove', pomjeri);
			document.removeEventListener('mouseup', kraj);
			document.removeEventListener('touchmove', pomjeri);
			document.removeEventListener('touchend', kraj);
		};
		document.addEventListener('mousemove', pomjeri);
		document.addEventListener('mouseup', kraj);
		document.addEventListener('touchmove', pomjeri, { passive: false });
		document.addEventListener('touchend', kraj);
		if (e.cancelable) e.preventDefault();
	};

	const oznaka = ui.napomenaTip || {};

	return createPortal(
		<div
			ref={ref}
			className={
				'oblak oblak--' +
				pos.mjesto +
				(pos.vidljiv ? '' : ' oblak--skriven') +
				(pos.uzHarf ? '' : ' oblak--bez-strelice') +
				(pos.dokiran ? ' oblak--dokiran' : '')
			}
			style={pos.dokiran ? {} : { left: pos.left, top: pos.top, '--strelica': pos.strelica + 'px' }}
			role="note"
			aria-label={ui.napomenaAria}
			title={ui.napomenaPomjeri}
			onMouseDown={pocniVucu}
			onTouchStart={pocniVucu}
		>
			{notes.map((n, i) => (
				<div className="oblak__stavka" key={i}>
					{oznaka[n.tip] && <span className={'oblak__tip oblak__tip--' + n.tip}>{oznaka[n.tip]}</span>}
					<span className="oblak__tekst">{arabize(n[lang] !== undefined ? n[lang] : n[DEFAULT_LANG])}</span>
				</div>
			))}
		</div>,
		document.body
	);
}
