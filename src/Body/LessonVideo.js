import React from 'react';
import videos from '../Data/videos.json';
import { useUI } from '../i18n/ui';
import { platforma } from '../native';

/* Na iOS-u stranica ide s izvora `capacitor://localhost`, a WKWebView za takvu
   shemu ne šalje Referer – YouTube tada odbije player s greškom 153. Zato se
   tamo ugrađuje public/video.html s vlastitog https izvora, pa on ugrađuje
   YouTube. Web i Android imaju http(s) izvor i idu ravno na YouTube. */
const POSREDNIK = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');

function izvorVidea(video) {
	const params = new URLSearchParams({ rel: '0' });
	if (video.list) params.set('list', videos.playlist);

	if (platforma() === 'ios' && POSREDNIK) {
		params.set('id', video.id);
		return `${POSREDNIK}/video.html?${params.toString()}`;
	}
	return `https://www.youtube.com/embed/${video.id}?${params.toString()}`;
}

/* Responzivni YouTube embed (16:9) */
export function VideoEmbed({ video, title }) {
	const src = izvorVidea(video);
	return (
		<div className="video-embed">
			<iframe
				src={src}
				title={title || 'YouTube video'}
				loading="lazy"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				referrerPolicy="strict-origin-when-cross-origin"
			/>
		</div>
	);
}

/* Sekcija "Video lekcija" na dnu svake lekcije (sidro #video) */
export default function LessonVideo({ broj }) {
	const ui = useUI();
	const list = videos.lekcije[String(broj)];
	if (!list || !list.length) return null;
	return (
		<section className="lesson-video" id="video">
			<h2 className="text-center">
				<strong>{ui.videoLekcija}</strong>
			</h2>
			<hr />
			<div className={'lesson-video__grid' + (list.length > 1 ? ' lesson-video__grid--two' : '')}>
				{list.map((v, i) => (
					<VideoEmbed
						key={v.id}
						video={v}
						title={`${ui.videoTitle} ${broj}${list.length > 1 ? ' – ' + (i + 1) : ''}`}
					/>
				))}
			</div>
		</section>
	);
}
