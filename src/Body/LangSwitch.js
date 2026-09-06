import React from 'react';
import { LANGS, useLang } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

/* Prekidač jezika (BS / EN) – u traci navigacije i u mobilnom meniju */
export default function LangSwitch({ light = false, className = '' }) {
	const { lang, setLang } = useLang();
	const ui = useUI();

	return (
		<div
			className={'lang-switch' + (light ? ' lang-switch--light' : '') + (className ? ' ' + className : '')}
			role="group"
			aria-label={ui.langSwitch}
		>
			{LANGS.map((code) => (
				<button
					key={code}
					type="button"
					lang={code}
					title={ui.langName[code]}
					aria-pressed={code === lang}
					className={code === lang ? 'is-active' : ''}
					onClick={() => setLang(code)}
				>
					{code.toUpperCase()}
				</button>
			))}
		</div>
	);
}
