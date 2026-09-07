import React from 'react';
import data from '../Data/YasinData.json';
import SuraTekst from './SuraTekst';

/* Bonus lekcija: cijela sura Jasin, stranica po stranica mushafa. */
export default function Jasin() {
	return <SuraTekst data={data} vrsta="jasin" />;
}
