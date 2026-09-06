import React, { useEffect, useRef, useState } from 'react';
import { FaHeadphones, FaPlay, FaStop } from 'react-icons/fa';
import * as audioBus from './audioBus';
import { useUI } from '../i18n/ui';

/* Traka iznad vježbe: uputa + "Pusti sve redom" (pušta sve zapise iz panela u kojem se nalazi) */
export default function VjezbaToolbar() {
	const ref = useRef(null);
	const ui = useUI();
	const [ s, setS ] = useState(audioBus.getState());
	useEffect(() => audioBus.subscribe(setS), []);

	const collect = () => {
		const panel = ref.current && ref.current.closest('.vjezba-panel');
		if (!panel) return [];
		return Array.from(panel.querySelectorAll('.rijec-audio')).map((el) => ({
			ownerId: Number(el.getAttribute('data-audio-id')),
			url: el.getAttribute('data-url'),
			label: el.textContent.trim()
		}));
	};

	const running = !!s.queue;

	return (
		<div className="vjezba-toolbar" ref={ref}>
			<p className="vjezba-toolbar__hint">
				<FaHeadphones /> {ui.audioHint}
			</p>
			<button
				type="button"
				className={'btn-t btn-t--sm ' + (running ? 'btn-t--outline' : 'btn-t--gold')}
				onClick={() => (running ? audioBus.stop() : audioBus.playQueue(collect()))}
			>
				{running ? <FaStop /> : <FaPlay />}
				{running ? ui.audioStopAll : ui.audioPlayAll}
			</button>
		</div>
	);
}
