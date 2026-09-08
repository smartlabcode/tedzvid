import React, { useEffect, useRef, useState } from 'react';
import * as audioBus from './audioBus';
import { useUI } from '../i18n/ui';
import Oblak from './Oblak';

let counter = 0;

/* Klikabilna riječ/ajet – zvuk ide preko zajedničkog audioBus-a.
   `note` (napomena iz podataka lekcije) se dok zapis svira/pauziran je prikazuje kao oblačić uz istaknuti harf.
   Dok zapis ide, riječ se puni zdesna nalijevo (`--napredak`) da se u tekstu vidi dokle se stiglo. */
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

	/* napredak se upisuje pravo u stil elementa – tako kadar po kadar ne ruši prikaz */
	useEffect(
		() => {
			const el = spanRef.current;
			if (!el) return undefined;
			if (status === 'idle') {
				el.style.removeProperty('--napredak');
				return undefined;
			}
			const osvjezi = () => {
				const trajanje = audioBus.getDuration();
				const dio = trajanje ? Math.min(1, Math.max(0, audioBus.getCurrentTime() / trajanje)) : 0;
				el.style.setProperty('--napredak', (dio * 100).toFixed(1) + '%');
			};
			osvjezi();
			if (status !== 'playing') return audioBus.subscribeTime(osvjezi);
			let kadar;
			const korak = () => {
				osvjezi();
				kadar = requestAnimationFrame(korak);
			};
			kadar = requestAnimationFrame(korak);
			return () => cancelAnimationFrame(kadar);
		},
		[ status ]
	);

	const onClick = () => {
		const label = spanRef.current ? spanRef.current.textContent.trim() : '';
		audioBus.toggle(idRef.current, props.url, label);
	};

	const cls = status === 'playing' ? 'svira' : status === 'paused' ? 'pauzirano' : 'ne-svira';
	const notes = Array.isArray(props.note) ? props.note : props.note ? [ props.note ] : [];
	const oblak = status !== 'idle' && notes.length > 0;

	return (
		<React.Fragment>
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
		{oblak && <Oblak anchorRef={spanRef} notes={notes} />}
		</React.Fragment>
	);
};

export default React.memo(Player);
