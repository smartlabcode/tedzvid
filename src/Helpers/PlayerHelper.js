import React, { useState } from 'react';
import Player from '../Player/Player';
import Arabic from '../Letters/Arabic';
import vezniTekst from '../i18n/vezniTekst';
import { jezik } from '../i18n/LanguageContext';

function PRow(data, rowname) {
	const [ playing, setPlaying ] = useState(false);
	const toggle = () => setPlaying(!playing);

	const PlayerRow = (datarr, rowname) => {
		var specialCharacters = [ '؛', ';', '-' ];
		const uParu = (i) => i + 1 < datarr[rowname].length && typeof datarr[rowname][i].after === 'string' && datarr[rowname][i].after.trim().endsWith(':');
		const row = datarr[rowname].map((dat, i) => {
			let myClassName = '';
			if (!!dat.after && specialCharacters.includes(dat.after.trim())) {
				myClassName = 'after';
			}
			/* u paru "X čita se: Y" objašnjenje ima samo Y (desno); lijeva riječ svira bez oblačića */
			return (
				<span key={'key' + dat.id} onClick={toggle}>
					<Player url={dat.url} note={uParu(i) ? undefined : dat.napomena} key={'p' + dat.id} playr={playing ? true : false}>
						<Arabic arabic={dat.highlight} key={'a' + dat.id}>
							{dat.word}
						</Arabic>
					</Player>{' '}
					<span className={myClassName || undefined}> {dat.after === 'break' ? <br /> : vezniTekst(dat.after)}</span>
				</span>
			);
		});

		/* "X čita se: Y" je jedan par: prelama se u novi red kao cjelina, a ne između X i Y */
		/* na de/en je veznik predug za telefon – tamo ide ispod para (CSS .par-dug) */
		const dugVeznik = jezik() !== 'bs';
		const grupisano = [];
		for (let i = 0; i < row.length; i++) {
			const dat = datarr[rowname][i];
			if (uParu(i)) {
				grupisano.push(
					<span className={'par-primjera' + (dugVeznik ? ' par-dug' : '')} key={'par' + dat.id}>
						{row[i]}
						{row[i + 1]}
					</span>
				);
				i++;
			} else grupisano.push(row[i]);
		}

		return grupisano;
	};

	return PlayerRow(data, rowname);
}

export default PRow;
