/*
 * Sloj za mobilnu aplikaciju (Capacitor) – iOS i Android.
 *
 * Na webu je sve ovdje bez efekta: `jeNativno()` vraća false, a nijedan
 * Capacitor plugin se ne učitava (dinamički import unutar provjere), pa
 * web build ostaje isti kao i prije.
 *
 * Na uređaju: status traka, skrivanje splash ekrana kad je React spreman,
 * Android dugme "nazad" i klasa `is-native` na <html> (sigurne zone u CSS-u,
 * skrivanje poveznica na prodavnice unutar same aplikacije).
 */
import { Capacitor } from '@capacitor/core';

export const jeNativno = () => Capacitor.isNativePlatform();
export const platforma = () => Capacitor.getPlatform(); /* 'ios' | 'android' | 'web' */

/* Poziva se jednom iz index.js prije renderovanja. */
export function oznaciPlatformu() {
	if (!jeNativno()) return;
	const html = document.documentElement;
	html.classList.add('is-native', 'is-native--' + Capacitor.getPlatform());
}

/* Poziva se nakon što je React montiran (vidi src/index.js). */
export async function pokreniNativno() {
	if (!jeNativno()) return;

	/* status traka: bijela pozadina, tamne ikone – kao i traka navigacije */
	try {
		const { StatusBar, Style } = await import('@capacitor/status-bar');
		await StatusBar.setStyle({ style: Style.Light }); /* tamne ikone na svijetloj traci */
		await StatusBar.setOverlaysWebView({ overlay: false });
		await StatusBar.setBackgroundColor({ color: '#ffffff' });
	} catch (e) {
		/* plugin nije dostupan – nije kritično */
	}

	/* splash ostaje dok se prvi ekran ne iscrta */
	try {
		const { SplashScreen } = await import('@capacitor/splash-screen');
		await SplashScreen.hide({ fadeOutDuration: 250 });
	} catch (e) {}

	/* Android: dugme "nazad" ide kroz historiju, na početnoj gasi aplikaciju */
	try {
		const { App } = await import('@capacitor/app');
		App.addListener('backButton', ({ canGoBack }) => {
			/* otvoren mobilni meni se prvo zatvara */
			if (document.body.classList.contains('nav-open')) {
				document.dispatchEvent(new CustomEvent('tedzvid:zatvori-meni'));
				return;
			}
			if (canGoBack && window.history.length > 1) window.history.back();
			else App.exitApp();
		});
	} catch (e) {}

	/* tastatura ne smije gurati fiksiranu navigaciju */
	try {
		const { Keyboard } = await import('@capacitor/keyboard');
		Keyboard.addListener('keyboardWillShow', () => document.body.classList.add('tipkovnica'));
		Keyboard.addListener('keyboardWillHide', () => document.body.classList.remove('tipkovnica'));
	} catch (e) {}
}
