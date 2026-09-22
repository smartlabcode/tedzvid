import React, { useEffect, useState } from 'react';
import { FaPlay, FaPause, FaTimes, FaRedo, FaStepBackward, FaStepForward } from 'react-icons/fa';
import * as audioBus from './audioBus';
import { useUI } from '../i18n/ui';

const fmt = (s) => {
	if (!isFinite(s) || s < 0) return '0:00';
	const m = Math.floor(s / 60);
	const r = Math.floor(s % 60);
	return `${m}:${String(r).padStart(2, '0')}`;
};

/* Plutajući plejer: šta svira, napredak, pauza/nastavak, premotavanje, zaustavljanje */
export default function NowPlayingBar() {
	const ui = useUI();
	const [ s, setS ] = useState(audioBus.getState());
	const [ t, setT ] = useState({ currentTime: 0, duration: 0 });

	useEffect(() => audioBus.subscribe(setS), []);
	useEffect(() => audioBus.subscribeTime(setT), []);
	// napuštanje lekcije gasi zvuk
	useEffect(() => () => audioBus.stop(), []);

	// glatki napredak dok svira
	useEffect(
		() => {
			if (!s.playing) return undefined;
			let raf;
			const tick = () => {
				setT((prev) => ({ ...prev, currentTime: audioBus.getCurrentTime() }));
				raf = requestAnimationFrame(tick);
			};
			raf = requestAnimationFrame(tick);
			return () => cancelAnimationFrame(raf);
		},
		[ s.playing ]
	);

	const active = !!s.ownerId;
	useEffect(
		() => {
			document.body.classList.toggle('has-player', active);
			return () => document.body.classList.remove('has-player');
		},
		[ active ]
	);

	if (!active) return null;

	const duration = t.duration || 0;
	const current = Math.min(t.currentTime || 0, duration || t.currentTime || 0);
	const pct = duration ? (current / duration) * 100 : 0;

	return (
		<div className="now-playing" role="region" aria-label={ui.audioPlayer}>
			<button
				type="button"
				className="now-playing__btn now-playing__btn--main"
				onClick={() => (s.playing ? audioBus.pause() : audioBus.resume())}
				aria-label={s.playing ? ui.audioPause : s.ended ? ui.audioReplay : ui.audioResume}
			>
				{s.playing ? <FaPause /> : s.ended ? <FaRedo /> : <FaPlay />}
			</button>
			<div className="now-playing__body">
				<div className="now-playing__top">
					<div className="now-playing__label" lang="ar" dir="rtl" title={s.label}>
						{s.label}
					</div>
					{s.queue && (
						<div className="now-playing__queue">
							<button
								type="button"
								onClick={() => audioBus.queueStep(-1)}
								disabled={s.queue.index === 0}
								aria-label={ui.audioPrevTrack}
							>
								<FaStepBackward />
							</button>
							<b>
								{s.queue.index + 1} / {s.queue.total}
							</b>
							<button
								type="button"
								onClick={() => audioBus.queueStep(1)}
								disabled={s.queue.index + 1 >= s.queue.total}
								aria-label={ui.audioNextTrack}
							>
								<FaStepForward />
							</button>
						</div>
					)}
				</div>
				<div className="now-playing__row">
					<b className="now-playing__time">{fmt(current)}</b>
					<input
						className="now-playing__range"
						type="range"
						min="0"
						max={duration || 0}
						step="0.01"
						value={current}
						disabled={!duration}
						onChange={(e) => audioBus.seek(parseFloat(e.target.value))}
						aria-label={ui.audioPosition}
						style={{ '--pct': pct + '%' }}
					/>
					<b className="now-playing__time">{fmt(duration)}</b>
				</div>
				{s.error && <div className="now-playing__err">{ui.audioUnavailable}</div>}
			</div>
			<button
				type="button"
				className="now-playing__btn now-playing__btn--close"
				onClick={() => audioBus.stop()}
				aria-label={ui.audioStopClose}
			>
				<FaTimes />
			</button>
		</div>
	);
}
