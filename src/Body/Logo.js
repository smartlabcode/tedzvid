import React from 'react';
import { Link } from 'react-router-dom';
import { useUI } from '../i18n/ui';

/* Znak: logotip tedzvid.ba – Kur'an na rahli */
export const LOGO_SRC = process.env.PUBLIC_URL + '/assets/logo.png';

/* izvorne mjere znaka: 320 × 301 */
const MARK_RATIO = 301 / 320;

export function LogoMark({ size = 46, className = '' }) {
	return (
		<img
			src={LOGO_SRC}
			className={'logo__mark' + (className ? ' ' + className : '')}
			width={size}
			height={Math.round(size * MARK_RATIO)}
			alt=""
			aria-hidden="true"
		/>
	);
}

export default function Logo({ light = false, size = 46, to = '/', tagline = true }) {
	const ui = useUI();
	return (
		<Link to={to} className={'logo' + (light ? ' logo--light' : '')} aria-label={ui.logoAria}>
			<LogoMark size={size} />
			<span className="logo__text">
				<span className="logo__word">
					TEDZVID<b>.BA</b>
				</span>
				{tagline && <span className="logo__tag">{ui.logoTag}</span>}
			</span>
		</Link>
	);
}

/* Zlatna rozeta – ukras između linija */
export function Rosette({ size = 22, color = '#b9962f', center = '#f7f3ec' }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
			{[ 0, 45, 90, 135 ].map((a) => (
				<ellipse key={a} cx="12" cy="12" rx="3" ry="10.5" fill={color} transform={`rotate(${a} 12 12)`} />
			))}
			<circle cx="12" cy="12" r="3.2" fill={center} />
		</svg>
	);
}

export function Ornament({ className = '', light = false }) {
	return (
		<div className={'ornament ' + className} aria-hidden="true">
			<Rosette color={light ? '#ead9a6' : '#b9962f'} center={light ? '#103b5c' : '#f7f3ec'} />
		</div>
	);
}
