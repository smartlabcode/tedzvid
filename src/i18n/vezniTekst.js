import { jezik } from './LanguageContext';

/*
 * Vezni tekst između primjera u lekcijama (polje `after` u L*Data.json) je u podacima
 * zapisan na bosanskom – npr. "مَاخَلَقَ čita se: مَاخَلَقْ". Sve ostalo su interpunkcijski
 * znakovi koji su isti u svim jezicima, pa se ovdje prevode samo riječi.
 */
const VEZNICI = {
	'čita se:': { en: 'is recited as:', de: 'wird gelesen:' }
};

export default function vezniTekst(after) {
	if (!after || typeof after !== 'string') return after;

	const jez = jezik();
	const kljuc = after.trim();
	const prijevod = VEZNICI[kljuc] && VEZNICI[kljuc][jez];
	if (!prijevod) return after;

	/* razmaci oko veznika drže razmak između arapskih riječi – ostaju kakvi jesu */
	return after.replace(kljuc, prijevod);
}
