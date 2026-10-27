import React from 'react';
import data from '../Data/BekaraData.json';
import SuraTekst from './SuraTekst';

/* Bonus lekcija: sura El-Bekare, prvih dvadeset stranica mushafa (2–21). */
export default function Bekara() {
	return <SuraTekst data={data} vrsta="bekara" />;
}
