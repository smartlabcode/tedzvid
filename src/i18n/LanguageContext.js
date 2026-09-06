import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

/* Podržani jezici – bosanski je podrazumijevani. */
export const LANGS = [ 'bs', 'en' ];
export const DEFAULT_LANG = 'bs';

const STORAGE_KEY = 'tedzvid-lang';

const LanguageContext = createContext({ lang: DEFAULT_LANG, setLang: () => {} });

/* ?lang=en u URL-u ima prednost (dijeljivi linkovi), zatim localStorage, pa jezik preglednika. */
function detectLang() {
	try {
		const fromQuery = new URLSearchParams(window.location.search).get('lang');
		if (fromQuery && LANGS.includes(fromQuery.toLowerCase())) return fromQuery.toLowerCase();

		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (saved && LANGS.includes(saved)) return saved;

		const nav = (window.navigator.language || '').toLowerCase();
		if (nav.startsWith('en')) return 'en';
	} catch (e) {
		/* privatni način rada / blokiran storage – tiho pada na podrazumijevani jezik */
	}
	return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
	const [ lang, setLangState ] = useState(detectLang);

	useEffect(
		() => {
			document.documentElement.lang = lang;
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
