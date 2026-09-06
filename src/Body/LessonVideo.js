import React from 'react';
import videos from '../Data/videos.json';

/* Responzivni YouTube embed (16:9) */
export function VideoEmbed({ video, title }) {
	const params = new URLSearchParams({ rel: '0' });
	if (video.list) params.set('list', videos.playlist);
	const src = `https://www.youtube.com/embed/${video.id}?${params.toString()}`;
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
	const list = videos.lekcije[String(broj)];
	if (!list || !list.length) return null;
	return (
		<section className="lesson-video" id="video">
			<h2 className="text-center">
				<strong>VIDEO LEKCIJA</strong>
			</h2>
			<hr />
			<div className={'lesson-video__grid' + (list.length > 1 ? ' lesson-video__grid--two' : '')}>
				{list.map((v, i) => (
					<VideoEmbed key={v.id} video={v} title={`Video lekcija ${broj}${list.length > 1 ? ' – ' + (i + 1) : ''}`} />
				))}
			</div>
		</section>
	);
}
