import React from 'react';
import data from '../Data/FatihaData.json';
import SuraTekst from './SuraTekst';

/* Bonus lekcija: sura El-Fatiha, sedam ajeta u jednom dijelu. */
export default function Fatiha() {
	return <SuraTekst data={data} vrsta="fatiha" />;
}
