/*
 * Prikaz datuma po jeziku. Za bosanski se formatira ručno ("6. 9. 2026."),
 * jer preglednici često nemaju lokalizacijske podatke za "bs" i vraćaju npr. "2026 M09 06".
 */
const pad = (n) => (n < 10 ? '0' + n : String(n));

export function formatDatum(iso, lang) {
	if (!iso) return '';
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return '';
	if (lang === 'en') return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
	return d.getDate() + '. ' + (d.getMonth() + 1) + '. ' + d.getFullYear() + '.';
}

export function formatDatumVrijeme(iso, lang) {
	if (!iso) return '';
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return '';
	const vrijeme = pad(d.getHours()) + ':' + pad(d.getMinutes());
	if (lang === 'en') return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) + ', ' + vrijeme;
	return formatDatum(iso, lang) + ' u ' + vrijeme;
}
