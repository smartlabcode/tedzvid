import React from 'react';
import data from '../Data/AmmeDzuzData.json';
import SuraTekst from './SuraTekst';

/* Bonus lekcija: trideseti (Amme) džuz – 37 sura, sura po sura, svaka s besmelom. */
export default function AmmeDzuz() {
	return <SuraTekst data={data} vrsta="amme" />;
}
