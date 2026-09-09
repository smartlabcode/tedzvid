import React from 'react';
import myReactStringReplace from '../Helpers/Streplace';

/*
 * Arapski primjer s istaknutim dijelom, u vlastitim klasama igre.
 * (Ne koristi .arapski/.oznaceno iz lekcija jer ta pravila imaju !important veličine.)
 */
export default function Primjer({ word, highlight }) {
	const sadrzaj = highlight
		? myReactStringReplace(word, highlight, (m, i) => (
				<span key={'o' + i} className="igra__ozn">
					{m}
				</span>
			))
		: word;

	return (
		<span className="igra__ar" lang="ar" dir="rtl">
			{sadrzaj}
		</span>
	);
}
