/*
 * Zamjena za react-bootstrap – samo ono što ovaj projekat stvarno koristi.
 *
 * Zašto: react-bootstrap 1.x animira modal preko react-transition-group, a on
 * zove ReactDOM.findDOMNode koji je u Reactu 19 uklonjen. Umjesto prelaska na
 * react-bootstrap 2 (koji traži Bootstrap 5 i prekrštavanje svih klasa u
 * theme.scss i App.scss), ovdje stoje iste komponente s istim markupom.
 *
 * Klase su namjerno one koje Bootstrap 4 već ima (container, row, col, table,
 * modal, close …) pa `bootstrap/dist/css/bootstrap.css` i naš SCSS rade bez
 * ijedne izmjene – vidi `.modal-header .close` i `.table-responsive` u App.scss.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/* spaja klase i preskače prazno */
const cx = (...k) => k.filter(Boolean).join(' ');

/* ---------- mreža ---------- */

export const Container = ({ fluid, className, children, ...rest }) => (
	<div className={cx(fluid ? 'container-fluid' : 'container', className)} {...rest}>
		{children}
	</div>
);

export const Row = ({ className, children, ...rest }) => (
	<div className={cx('row', className)} {...rest}>
		{children}
	</div>
);

export const Col = ({ className, children, ...rest }) => (
	<div className={cx('col', className)} {...rest}>
		{children}
	</div>
);

/* ---------- tabela ---------- */

export const Table = ({ className, striped, bordered, borderless, hover, size, responsive, children, ...rest }) => {
	const tabela = (
		<table
			className={cx(
				'table',
				className,
				striped && 'table-striped',
				bordered && 'table-bordered',
				borderless && 'table-borderless',
				hover && 'table-hover',
				size && 'table-' + size
			)}
			{...rest}
		>
			{children}
		</table>
	);

	if (!responsive) return tabela;
	/* responsive može biti true ili tačka preloma ('md' → table-responsive-md) */
	return <div className={typeof responsive === 'string' ? 'table-responsive-' + responsive : 'table-responsive'}>{tabela}</div>;
};

/* ---------- dugme ---------- */

export const Button = ({ variant = 'primary', size, type = 'button', className, children, ...rest }) => (
	<button type={type} className={cx('btn', 'btn-' + variant, size && 'btn-' + size, className)} {...rest}>
		{children}
	</button>
);

/* ---------- modal ---------- */

/* Koliko je modala trenutno otvoreno – da zadnji vrati <body> u prvobitno stanje. */
let otvorenih = 0;

function zakljucajBody() {
	if (otvorenih++ > 0) return;
	/* prostor koji oslobodi sakrivena traka za pomjeranje, da sadržaj ne poskoči */
	const traka = window.innerWidth - document.documentElement.clientWidth;
	document.body.classList.add('modal-open');
	if (traka > 0) document.body.style.paddingRight = traka + 'px';
}

function otkljucajBody() {
	if (--otvorenih > 0) return;
	otvorenih = 0;
	document.body.classList.remove('modal-open');
	document.body.style.paddingRight = '';
}

const TRAJANJE = 300; /* .modal-dialog u Bootstrapu 4: transform .3s ease-out */

/* Zaglavlju treba onHide za dugme zatvaranja – stiže kroz kontekst, kao u react-bootstrapu. */
const ModalCtx = React.createContext(null);

export function Modal({ show, onHide, backdrop = true, keyboard = true, size, centered, scrollable, className, children, ...rest }) {
	/* `montiran` drži modal u DOM-u dok traje gašenje, `vidljiv` pali klasu .show */
	const [ montiran, setMontiran ] = useState(!!show);
	const [ vidljiv, setVidljiv ] = useState(false);
	const dijalog = useRef(null);
	const fokusPrije = useRef(null);

	useEffect(() => {
		if (show) {
			setMontiran(true);
			/* .show ide tek u sljedećem kadru, inače nema prelaza */
			const id = requestAnimationFrame(() => setVidljiv(true));
			return () => cancelAnimationFrame(id);
		}
		setVidljiv(false);
		const id = setTimeout(() => setMontiran(false), TRAJANJE);
		return () => clearTimeout(id);
	}, [ show ]);

	/* zaključavanje <body>, Escape i fokus – sve dok je modal u DOM-u */
	useEffect(() => {
		if (!montiran) return undefined;

		zakljucajBody();
		fokusPrije.current = document.activeElement;
		if (dijalog.current) dijalog.current.focus();

		const naTipku = (e) => {
			if (e.key !== 'Escape' || keyboard === false) return;
			e.stopPropagation();
			if (onHide) onHide();
		};
		document.addEventListener('keydown', naTipku);

		return () => {
			document.removeEventListener('keydown', naTipku);
			otkljucajBody();
			const prije = fokusPrije.current;
			if (prije && typeof prije.focus === 'function') prije.focus();
		};
	}, [ montiran, keyboard, onHide ]);

	/* klik na zastor zatvara, osim kad je backdrop="static" */
	const naZastor = useCallback(
		(e) => {
			if (e.target !== e.currentTarget) return; /* klik unutar dijaloga */
			if (backdrop === 'static' || backdrop === false) return;
			if (onHide) onHide();
		},
		[ backdrop, onHide ]
	);

	if (!montiran) return null;

	return createPortal(
		<>
			{backdrop !== false && <div className={cx('modal-backdrop', 'fade', vidljiv && 'show')} />}
			<div
				ref={dijalog}
				role="dialog"
				aria-modal="true"
				tabIndex={-1}
				className={cx('modal', 'fade', vidljiv && 'show', className)}
				style={{ display: 'block' }}
				onClick={naZastor}
				{...rest}
			>
				<div
					className={cx(
						'modal-dialog',
						size && 'modal-' + size,
						centered && 'modal-dialog-centered',
						scrollable && 'modal-dialog-scrollable'
					)}
				>
					<div className="modal-content">
						<ModalCtx.Provider value={{ onHide }}>{children}</ModalCtx.Provider>
					</div>
				</div>
			</div>
		</>,
		document.body
	);
}

/* Podkomponente su imenovane (a ne strelice na Modal.X) da ih eslint prepozna
   kao React komponente – inače puca pravilo react-hooks/rules-of-hooks. */

function ModalHeader({ closeButton, className, children, ...rest }) {
	const ctx = React.useContext(ModalCtx);
	return (
		<div className={cx('modal-header', className)} {...rest}>
			{children}
			{closeButton && (
				<button type="button" className="close" aria-label="Close" onClick={ctx && ctx.onHide}>
					<span aria-hidden="true">&times;</span>
				</button>
			)}
		</div>
	);
}

function ModalTitle({ className, children, ...rest }) {
	return (
		<div className={cx('modal-title', 'h4', className)} {...rest}>
			{children}
		</div>
	);
}

function ModalBody({ className, children, ...rest }) {
	return (
		<div className={cx('modal-body', className)} {...rest}>
			{children}
		</div>
	);
}

function ModalFooter({ className, children, ...rest }) {
	return (
		<div className={cx('modal-footer', className)} {...rest}>
			{children}
		</div>
	);
}

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
