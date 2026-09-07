import React, { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLang, DEFAULT_LANG } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

/*
 * Oblačić s objašnjenjem uz riječ/ajet koji trenutno svira.
 * Kači se uz prvi istaknuti (crveni) dio riječi – ako ga nema, uz cijelu riječ.
 * Prikazuje se iznad harfa (strelica dolje); ako gore nema mjesta (sticky navigacija), ide ispod.
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

const GAP = 12; // razmak između oblačića i harfa
const MARGIN = 8; // najmanji razmak od ruba ekrana

export default function Oblak({ anchorRef, notes }) {
	const { lang } = useLang();
	const ui = useUI();
	const ref = useRef(null);
	const [ pos, setPos ] = useState({ left: 0, top: 0, strelica: 0, mjesto: 'above', vidljiv: false });

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
				const w = box.offsetWidth;
				const h = box.offsetHeight;
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
					const el = document.elementFromPoint(cx, cy);
					vidljiv = !!el && host.contains(el);
				}

				/* oblačić ide iznad harfa; ako gore nema mjesta, ide ispod, a ako ni tamo ne stane,
				   bira se strana s više prostora i položaj se stisne u vidljivi dio ekrana */
				const gore = r.top - GAP - (gornjaGranica + MARGIN);
				const dolje = donjaGranica - MARGIN - (r.bottom + GAP);
				let mjesto = h <= gore ? 'above' : h <= dolje ? 'below' : gore >= dolje ? 'above' : 'below';
				let top = mjesto === 'above' ? r.top - GAP - h : r.bottom + GAP;
				top = Math.max(gornjaGranica + MARGIN, Math.min(top, donjaGranica - MARGIN - h));

				let left = cx - w / 2;
				left = Math.max(MARGIN, Math.min(left, vw - MARGIN - w));
				const strelica = Math.max(18, Math.min(cx - left, w - 18));

				setPos((p) =>
					p.left === left && p.top === top && p.strelica === strelica && p.mjesto === mjesto && p.vidljiv === vidljiv
						? p
						: { left, top, strelica, mjesto, vidljiv }
				);
			};
			const zakazi = () => {
				if (raf === null) raf = window.requestAnimationFrame(izracunaj);
			};

			izracunaj();
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

	const oznaka = ui.napomenaTip || {};

	return createPortal(
		<div
			ref={ref}
			className={'oblak oblak--' + pos.mjesto + (pos.vidljiv ? '' : ' oblak--skriven')}
			style={{ left: pos.left, top: pos.top, '--strelica': pos.strelica + 'px' }}
			role="note"
			aria-label={ui.napomenaAria}
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
