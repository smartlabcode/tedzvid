import React from 'react';
import { Ornament } from './Logo';

/* Tamnoplava traka s naslovom stranice (lekcije, pojedina lekcija, obavijest) */
export default function PageBand({ eyebrow, title, text, children }) {
	return (
		<section className="page-band">
			<div className="wrap">
				{eyebrow && <p className="eyebrow">{eyebrow}</p>}
				<h1 className="h-section">{title}</h1>
				<Ornament light />
				{text && <p>{text}</p>}
				{children}
			</div>
		</section>
	);
}
