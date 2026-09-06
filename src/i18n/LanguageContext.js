import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

/* Podržani jezici – bosanski je podrazumijevani. */
export const LANGS = [ 'bs', 'en' ];
export const DEFAULT_LANG = 'bs';

/* novi ključ: ranije verzije su automatski odabrani jezik preglednika spremale pod 'tedzvid-lang',
   pa bi stari posjetioci ostali na engleskom; s novim ključem svi kreću od bosanskog */
const STORAGE_KEY = 'tedzvid-lang-v2';

/* Naslov i opis stranice (<title>, meta description) po jeziku */
const META = {
	bs: {
		title: 'Tedžvid.ba – Uči tedžvid jednostavno, interaktivno, korak po korak',
		description:
			'Tedzvid.ba – interaktivni priručnik za učenje tedžvidskih pravila. Jednostavno, interaktivno, korak po korak – za djecu i odrasle, početnike i naprednije učače.'
	},
	en: {
		title: 'Tedzvid.ba – Learn tajweed simply, interactively, step by step',
		description:
			'Tedzvid.ba – an interactive handbook for learning the rules of tajweed. Simple, interactive, step by step – for children and adults, beginners and advanced reciters.'
	}
};

const LanguageContext = createContext({ lang: DEFAULT_LANG, setLang: () => {} });

/* ?lang=en u URL-u ima prednost (dijeljivi linkovi), zatim jezik koji je korisnik sam odabrao (localStorage);
   inače je uvijek bosanski – jezik preglednika se ne uzima u obzir. */
function detectLang() {
	try {
		const fromQuery = new URLSearchParams(window.location.search).get('lang');
		if (fromQuery && LANGS.includes(fromQuery.toLowerCase())) return fromQuery.toLowerCase();

		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (saved && LANGS.includes(saved)) return saved;
	} catch (e) {
		/* privatni način rada / blokiran storage – tiho pada na podrazumijevani jezik */
	}
	return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
	const [ lang, setLangState ] = useState(detectLang);

	useEffect(
		() => {
			const meta = META[lang] || META[DEFAULT_LANG];
			document.documentElement.lang = lang;
			document.title = meta.title;
			const desc = document.querySelector('meta[name="description"]');
			if (desc) desc.setAttribute('content', meta.description);
			try {
				window.localStorage.setItem(STORAGE_KEY, lang);
			} catch (e) {}
		},
		[ lang ]
	);

	const setLang = useCallback((next) => {
		if (LANGS.includes(next)) setLangState(next);
	}, []);

	return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
	return useContext(LanguageContext);
}

/* Vrati varijantu iz rječnika oblika { bs: ..., en: ... } */
export function usePick(dict) {
	const { lang } = useLang();
	return dict[lang] !== undefined ? dict[lang] : dict[DEFAULT_LANG];
}

export default LanguageContext;
