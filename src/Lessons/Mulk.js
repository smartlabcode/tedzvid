import React from 'react';
import data from '../Data/MulkData.json';
import SuraTekst from './SuraTekst';

/* Bonus lekcija: sura El-Mulk, stranica po stranica mushafa. */
export default function Mulk() {
	return <SuraTekst data={data} vrsta="mulk" />;
}
