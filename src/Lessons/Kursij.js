import React from 'react';
import data from '../Data/KursijData.json';
import SuraTekst from './SuraTekst';

/* Bonus lekcija: Ajetul-kursij, 255. ajet sure El-Bekare. */
export default function Kursij() {
	return <SuraTekst data={data} vrsta="kursij" />;
}
