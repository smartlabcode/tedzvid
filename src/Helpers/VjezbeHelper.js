import React from 'react';
import Player from '../Player/Player';
import Arabic from '../Letters/Arabic';
import vezniTekst from '../i18n/vezniTekst';

function Vjezbe(data, mainrow, rows) {
	const VjezbeRow = (dat, rowmain, rows) => {
		const data = dat[rowmain][rows];
		let ar = [];
		var specialCharacters = [ '؛', ';', '-' ];
		let myClassName = '';
		if (!!data[0].after && specialCharacters.includes(data[0].after.trim())) {
			myClassName = 'after';
		}

		/* U vježbi iza ajeta u lekciji ide `&nbsp;۞`. Običan razmak na kraju ajeta (u podacima ili
		   prazan vezni tekst) bi pregledniku dao mjesto za prelom, pa bi ۞ ostajao sam u novom redu. */
		const vjezba = rowmain === 'vjezba';
		const bezRazmaka = (s) => (vjezba && typeof s === 'string' ? s.replace(/\s+$/, '') : s);
		const word = bezRazmaka(data[0].word);
		const highlight = bezRazmaka(data[0].highlight);
		const imaVezni = !!data[0].after && data[0].after.trim() !== '';

		for (let ind = 1; ind < data.length; ind++) {
			ar.push(
				<Arabic arabic={data[ind].highlight} key={'a' + data[ind].id}>
					{data[ind].word}
				</Arabic>
			);
		}
		// data.forEach((el, ind) => {
		//     ar.push(<Arabic
		//         arabic={el.highlight}
		//         key={'a' + el.id}
		//     >{el.word}</Arabic>);
		// });

		return (
			<span key={'key' + data[0].id}>
				<Player url={data[0].url} note={data[0].napomena} key={'p' + data[0].id}>
					{
						<Arabic arabic={highlight} key={'a' + data[0].id}>
							{ar}
							{word}
						</Arabic>
					}
				</Player>
				{(!vjezba || imaVezni) && (
					<React.Fragment>
						{' '}
						<span className={myClassName}> {data[0].after === 'break' ? <br /> : vezniTekst(data[0].after)}</span>
					</React.Fragment>
				)}
			</span>
		);
	};

	return VjezbeRow(data, mainrow, rows);
}

export default Vjezbe;
