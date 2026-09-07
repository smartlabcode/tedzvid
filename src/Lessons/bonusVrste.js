/*
 * Natpisi bonus lekcija s kur'anskim tekstom, po vrsti.
 * Jasin i Amme džuz koriste nizove koji već postoje u ui.js, a kraće cjeline
 * (El-Fatiha, Ajetul-kursij, El-Mulk) svoje pod ui.bonus.
 *
 * `poStranicama` kaže je li odjeljak stranica mushafa ili cijela sura/cjelina.
 * `oznaka(n, ime)` je natpis zapisa u plejeru, `osuri(data)` uvodna rečenica.
 */
export default function vrstaTekstovi(ui, vrsta) {
	const iz = (ui.bonus || {})[vrsta];
	if (iz) return iz;

	if (vrsta === 'jasin') {
		return {
			poStranicama: true,
			eyebrow: ui.jasinEyebrow,
			naslov: ui.jasinNaslov,
			podnaslov: ui.jasinPodnaslov,
			uvod: ui.jasinUvod,
			osuri: (d) => ui.jasinOSuri(d.brojAjeta, d.odjeljci[0].stranica, d.odjeljci[d.odjeljci.length - 1].stranica),
			pusti: ui.jasinPustiStranicu,
			prethodna: ui.jasinPrethodna,
			sljedeca: ui.jasinSljedeca,
			nema: ui.jasinNemaNaStranici,
			oznaka: (n) => ui.jasinOznaka(n),
			karticaTekst: ui.jasinKarticaTekst,
			otvori: ui.jasinOtvori,
			zakljucanNaslov: ui.jasinZakljucanNaslov,
			zakljucanKorisnik: ui.jasinZakljucanKorisnik,
			zakljucanGost: ui.jasinZakljucanGost
		};
	}

	return {
		poStranicama: false,
		eyebrow: ui.ammeEyebrow,
		naslov: ui.ammeNaslov,
		podnaslov: ui.ammePodnaslov,
		uvod: ui.ammeUvod,
		osuri: (d) => ui.ammeODzuzu(d.odjeljci.length, d.odjeljci[0].sura, d.odjeljci[d.odjeljci.length - 1].sura),
		pusti: ui.ammePustiSuru,
		prethodna: ui.ammePrethodna,
		sljedeca: ui.ammeSljedeca,
		nema: ui.ammeNemaUSuri,
		oznaka: (n, ime) => ui.ammeOznaka(ime, n),
		karticaTekst: ui.ammeKarticaTekst,
		otvori: ui.ammeOtvori,
		zakljucanNaslov: ui.ammeZakljucanNaslov,
		zakljucanKorisnik: ui.ammeZakljucanKorisnik,
		zakljucanGost: ui.ammeZakljucanGost
	};
}
