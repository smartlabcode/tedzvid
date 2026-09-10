#!/usr/bin/env node
/*
 * Popravlja Android adaptivnu ikonu poslije `capacitor-assets generate`.
 *
 * capacitor-assets ostavlja dvije stvari koje kvare izgled ikone:
 *
 *   1. Slojeve (`ic_launcher_foreground/background`) generiše u veličinama
 *      stare, kvadratne ikone (48–192 px). Sloj adaptivne ikone je 108 dp,
 *      pa ih sistem razvlači – na xxxhdpi 192 px se rasteže na 432 px i logo
 *      postane mutan.
 *
 *   2. U `mipmap-anydpi-v26/ic_launcher*.xml` oba sloja umotava u
 *      `<inset android:inset="16.7%">`. Za pozadinu je to pogrešno – ona mora
 *      pokrivati cijelo platno, inače oko nje ostane prozirno i launcher je
 *      popuni svojom bojom (tamnoplavi kvadrat se smanji na dvije trećine).
 *      Za znak je inset nepotreban jer `resources/icon-foreground.png` već
 *      ima ugrađenu marginu: sadržaj seže do 64 % poluprečnika, a sigurna
 *      zona je 66,7 %. S insetom se logo bespotrebno smanji još jednom.
 *
 * Zato se slojevi ovdje ponovo prave iz `resources/` u ispravnim veličinama,
 * a XML se piše bez inseta. Pokreće se iz `npm run app:assets`.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const KORIJEN = path.join(__dirname, '..', '..');
const RES = path.join(KORIJEN, 'android', 'app', 'src', 'main', 'res');
const IZVORI = path.join(KORIJEN, 'resources');

/* sloj adaptivne ikone je 108 dp; ovo su pikseli po gustini */
const GUSTINE = { ldpi: 81, mdpi: 108, hdpi: 162, xhdpi: 216, xxhdpi: 324, xxxhdpi: 432 };

const SLOJEVI = [
	{ izvor: 'icon-foreground.png', ime: 'ic_launcher_foreground.png' },
	{ izvor: 'icon-background.png', ime: 'ic_launcher_background.png' },
];

const XML = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@mipmap/ic_launcher_background" />
    <foreground android:drawable="@mipmap/ic_launcher_foreground" />
</adaptive-icon>
`;

async function main() {
	for (const sloj of SLOJEVI) {
		const izvor = path.join(IZVORI, sloj.izvor);
		if (!fs.existsSync(izvor)) {
			console.error('nedostaje ' + path.relative(KORIJEN, izvor));
			process.exitCode = 1;
			return;
		}
		for (const [gustina, px] of Object.entries(GUSTINE)) {
			const mapa = path.join(RES, 'mipmap-' + gustina);
			if (!fs.existsSync(mapa)) continue;
			const cilj = path.join(mapa, sloj.ime);
			await sharp(izvor)
				.resize(px, px, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
				/* paleta drži veličinu na uzdi – logo je detaljna ilustracija */
				.png({ palette: true, quality: 90 })
				.toFile(cilj + '.tmp');
			fs.renameSync(cilj + '.tmp', cilj);
		}
	}

	const anydpi = path.join(RES, 'mipmap-anydpi-v26');
	for (const ime of [ 'ic_launcher.xml', 'ic_launcher_round.xml' ]) {
		fs.writeFileSync(path.join(anydpi, ime), XML);
	}

	console.log('adaptivna ikona: slojevi na 108 dp, XML bez inseta');
}

main().catch((e) => {
	console.error(e);
	process.exitCode = 1;
});
