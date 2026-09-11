import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaCheck, FaChevronDown, FaGlobe } from 'react-icons/fa';
import { LANGS, LANG_NAMES, useLang } from '../i18n/LanguageContext';
import { useUI } from '../i18n/ui';

/*
 * Odabir jezika (BS / EN / DE).
 * Tri i više jezika ne stanu u traku kao niz dugmadi, pa je ovo padajući izbornik:
 * u traci stoji samo globus i kratica trenutnog jezika, a popis se otvara na klik.
 * Ime svakog jezika piše na tom istom jeziku, da ga prepozna i onaj ko trenutni ne razumije.
 *
 * props.light  – varijanta za tamnu podlogu (mobilni meni)
 * props.up     – popis se otvara prema gore (kad prekidač stoji pri dnu)
 */
export default function LangSwitch({ light = false, up = false, className = '' }) {
	const { lang, setLang } = useLang();
	const ui = useUI();
	const [ open, setOpen ] = useState(false);
	const okvir = useRef(null);
	const dugme = useRef(null);
	const popis = useRef(null);

	const zatvori = useCallback((vratiFokus) => {
		setOpen(false);
		if (vratiFokus && dugme.current) dugme.current.focus();
	}, []);

	/* klik izvan izbornika i tipka Escape ga zatvaraju */
	useEffect(
		() => {
			if (!open) return undefined;
			const vani = (e) => {
				if (okvir.current && !okvir.current.contains(e.target)) setOpen(false);
			};
			const tipka = (e) => {
				if (e.key === 'Escape') zatvori(true);
			};
			document.addEventListener('pointerdown', vani);
			document.addEventListener('keydown', tipka);
			return () => {
				document.removeEventListener('pointerdown', vani);
				document.removeEventListener('keydown', tipka);
			};
		},
		[ open, zatvori ]
	);

	/* kad se popis otvori, fokus ide na trenutno odabrani jezik */
	useEffect(
		() => {
			if (!open || !popis.current) return;
			const odabrani = popis.current.querySelector('[aria-checked="true"]') || popis.current.firstChild;
			if (odabrani && odabrani.focus) odabrani.focus();
		},
		[ open ]
	);

	/* strelice šetaju kroz jezike, bez zatvaranja popisa */
	const strelice = (e) => {
		if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
		e.preventDefault();
		const stavke = Array.prototype.slice.call(popis.current.children);
		const i = stavke.indexOf(document.activeElement);
		const sljedeci = (i + (e.key === 'ArrowDown' ? 1 : stavke.length - 1) + stavke.length) % stavke.length;
		stavke[sljedeci].focus();
	};

	const odaberi = (code) => {
		setLang(code);
		zatvori(true);
	};

	return (
		<div
			ref={okvir}
			className={
				'lang-switch' +
				(light ? ' lang-switch--light' : '') +
				(up ? ' lang-switch--up' : '') +
				(open ? ' is-open' : '') +
				(className ? ' ' + className : '')
			}
		>
			<button
				ref={dugme}
				type="button"
				className="lang-switch__trigger"
				aria-haspopup="true"
				aria-expanded={open}
				aria-label={ui.langSwitch + ': ' + LANG_NAMES[lang]}
				title={ui.langSwitch}
				onClick={() => setOpen((o) => !o)}
			>
				<FaGlobe className="lang-switch__globe" />
				<span className="lang-switch__code">{lang.toUpperCase()}</span>
				<FaChevronDown className="lang-switch__caret" />
			</button>

			<ul
				ref={popis}
				className="lang-switch__menu"
				role="menu"
				aria-label={ui.langSwitch}
				aria-hidden={!open}
				onKeyDown={strelice}
			>
				{LANGS.map((code) => (
					<li key={code} role="none">
						<button
							type="button"
							role="menuitemradio"
							lang={code}
							title={(ui.langName && ui.langName[code]) || LANG_NAMES[code]}
							aria-checked={code === lang}
							className={'lang-switch__item' + (code === lang ? ' is-active' : '')}
							tabIndex={open ? 0 : -1}
							onClick={() => odaberi(code)}
						>
							<span className="lang-switch__abbr">{code.toUpperCase()}</span>
							<span className="lang-switch__name">{LANG_NAMES[code]}</span>
							{code === lang && <FaCheck className="lang-switch__check" />}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
