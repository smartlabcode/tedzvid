import React, { useEffect, useRef, useState } from 'react';
import * as audioBus from './audioBus';
import { useUI } from '../i18n/ui';

let counter = 0;

/* Klikabilna riječ/ajet – zvuk ide preko zajedničkog audioBus-a */
const Player = (props) => {
	const idRef = useRef(null);
	if (idRef.current === null) idRef.current = ++counter;
	const spanRef = useRef(null);
	const ui = useUI();
	const [ status, setStatus ] = useState('idle'); // idle | playing | paused

	useEffect(
		() =>
			audioBus.subscribe((s) => {
				const active = s.ownerId === idRef.current;
				setStatus(!active ? 'idle' : s.playing ? 'playing' : 'paused');
			}),
		[]
	);

	const onClick = () => {
		const label = spanRef.current ? spanRef.current.textContent.trim() : '';
		audioBus.toggle(idRef.current, props.url, label);
	};

	const cls = status === 'playing' ? 'svira' : status === 'paused' ? 'pauzirano' : 'ne-svira';

	return (
		<span
			ref={spanRef}
			className={'rijec-audio ' + cls}
			data-audio-id={idRef.current}
			data-url={props.url}
			onClick={onClick}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					onClick();
				}
			}}
			title={ui.audioWordTitle}
		>
			{props.children}
		</span>
	);
};

export default React.memo(Player);
