import React from 'react';
import { Link } from 'react-router-dom';

/* Znak: luk (mihrab) s munarom i kupolom – u duhu novog vizuala tedzvid.ba */
export function LogoMark({ size = 46, light = false }) {
	const navy = light ? '#ffffff' : '#103b5c';
	const teal = light ? '#8fd3ce' : '#2a8c86';
	const gold = light ? '#ead9a6' : '#b9962f';
	const door = light ? '#103b5c' : '#f7f3ec';
	return (
		<svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
			<path
				d="M10 62V30C10 17.85 19.85 8 32 8s22 9.85 22 22v32"
				fill="none"
				stroke={navy}
				strokeWidth="4"
				strokeLinecap="round"
			/>
			<rect x="16" y="30" width="7" height="32" rx="1.5" fill={teal} />
			<path d="M16 30l3.5-8 3.5 8z" fill={teal} />
			<path d="M26 62V44c0-6.63 5.37-12 12-12s12 5.37 12 12v18z" fill={navy} />
			<path d="M34 62v-9a4 4 0 0 1 8 0v9z" fill={door} />
			<circle cx="38" cy="27" r="2.2" fill={gold} />
			<rect x="37.3" y="29" width="1.4" height="4" fill={gold} />
		</svg>
	);
}

export default function Logo({ light = false, size = 46, to = '/', tagline = true }) {
	return (
		<Link to={to} className={'logo' + (light ? ' logo--light' : '')} aria-label="Tedzvid.ba – naslovna">
			<LogoMark size={size} light={light} />
			<span className="logo__text">
				<span className="logo__word">
					TEDZVID<b>.BA</b>
				</span>
				{tagline && <span className="logo__tag">Znanje koje te približava Kur'anu</span>}
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
