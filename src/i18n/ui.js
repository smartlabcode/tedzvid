import React from 'react';
import { usePick } from './LanguageContext';

/*
 * Svi tekstovi zajedničkog okvira sajta (navigacija, podnožje, naslovna, pregled lekcija).
 * Tekstovi pojedinih lekcija žive uz same lekcije (Lessons/LessonN.js).
 */
const UI = {
	bs: {
		/* ----- logo / opšte ----- */
		logoAria: 'Tedzvid.ba – naslovna',
		logoTag: 'Znanje koje te približava Kur’anu',

		/* ----- navigacija ----- */
		navMain: 'Glavna navigacija',
		navOpen: 'Otvori meni',
		navClose: 'Zatvori meni',
		navHome: 'Početna',
		navLekcije: 'Lekcije',
		navONama: 'O nama',
		navPrintano: 'Printano izdanje',
		navKontakt: 'Kontakt',
		navNaslovna: 'Naslovna',
		navSveLekcije: 'Sve lekcije',
		langSwitch: 'Promijeni jezik',
		langName: { bs: 'Bosanski', en: 'English' },

		/* ----- naslovna: hero ----- */
		heroEyebrow: 'Interaktivni priručnik za tedžvid',
		heroTitle: (
			<React.Fragment>
				Uči <em>tedžvid</em>
			</React.Fragment>
		),
		heroSub: 'Jednostavno, interaktivno, korak po korak',
		heroLead: (
			<React.Fragment>
				<strong>Tedzvid.ba</strong> je moderna, interaktivna i elektronska verzija tedžvida autora mr. Sejida
				Strike – stvorena da pomogne početnicima, polaznicima mektepske nastave, mu'allimima i svim ljubiteljima
				Kur'ana.
			</React.Fragment>
		),
		heroCtaStart: 'Počni učiti',
		heroCtaMore: 'Saznaj više',
		storeIntro: 'Aplikacija dostupna na',
		mockTitle: 'Tedžvid',
		mockSubtitle: 'Interaktivni priručnik',
		mockRules: 'Pravila',
		mockAudio: 'Audio',
		mockVideo: 'Video',
		mockVjezbe: 'Vježbe',
		heroBadge: 'Za djecu i odrasle, početnike i naprednije učače',

		/* ----- naslovna: šta ćete pronaći ----- */
		featEyebrow: 'Sadržaj',
		featTitle: 'Šta ćete pronaći na tedzvid.ba?',
		features: [
			{ title: 'Sva pravila', text: 'pregledno i sistematično' },
			{ title: 'Praktične vježbe', text: 'za provjeru znanja' },
			{ title: 'Prilagođeno nastavi', text: 'idealno za mektebe i časove' },
			{ title: 'Dostupno svuda', text: 'na računaru, tabletu i telefonu' },
			{ title: 'Uči, vježbaj, ponavljaj', text: 'napreduj svaki dan' }
		],

		/* ----- naslovna: o nama ----- */
		aboutEyebrow: 'O nama',
		aboutTitle: 'Tedžvid dostupan svima',
		aboutP1: (
			<React.Fragment>
				<strong>Tedzvid.ba</strong> je elektronska, interaktivna verzija printanog tedžvida autora mr. Sejida ef.
				Strike. Ovaj tedžvid ima za cilj da pomogne novim učačima Kur'ana, kako polaznicima mektepske nastave
				tako i odraslima, u lakšem savladavanju osnovnih tedžvidskih pravila.
			</React.Fragment>
		),
		aboutP2:
			'Jednostavan rječnik i izbjegavanje stručnih termina, koliko je to bilo moguće, čine ga pristupačnijim široj čitalačkoj populaciji.',
		aboutP3: (
			<React.Fragment>
				Posebnost stranice su <strong>interaktivni primjeri</strong> čiji audio zapis možete preslušati klikom na
				riječ. Nadamo se da će tedzvid.ba pomoći mu'allimima pri objašnjavanju tedžvidskih pravila, kako djeci u
				mektebu tako i odraslima nakon završetka sufare.
			</React.Fragment>
		),
		quoteText: '„Najbolji među vama su oni koji uče Kur’an i podučavaju ga.“',
		quoteCite: 'Buharija',
		benefits: [
			{ title: 'Jasna objašnjenja', text: 'tedžvidskih pravila bez komplikovanih izraza' },
			{ title: 'Audio primjeri', text: 'poslušaj i odmah primijeni' },
			{ title: 'Video lekcije', text: 'vizuelno učenje koje ostaje u pamćenju' },
			{ title: 'Za sve generacije', text: 'koristan sadržaj za djecu, odrasle i nastavnike' },
			{ title: 'Pomoć u praksi', text: 'materijal koji olakšava učenje, podučavanje i ponavljanje' }
		],
		aboutVideoEyebrow: 'Video',
		aboutVideoTitle: 'Pogledajte kako izgleda učenje na tedzvid.ba',
		aboutVideoAlt: 'Tedzvid.ba – predstavljanje projekta',

		/* ----- naslovna: printano izdanje ----- */
		printEyebrow: 'Printano izdanje',
		printTitle: 'Želim printano izdanje',
		printAlt: 'Printano izdanje tedžvida',
		printText:
			'Tedžvid – priručnik za pravilno učenje Kur’ana sa vježbama dostupan je i u štampanom obliku. Informacije vezane za printano izdanje možete dobiti kod autora:',
		author: 'mr. Sejid ef. Strika',

		/* ----- naslovna: kontakt ----- */
		contactEyebrow: 'Kontakt',
		contactTitle: 'Pišite nam',
		contactText:
			'Ukoliko imate sugestije, zapažanja ili impresije, budite slobodni da ih napišete kako bismo unaprijedili ovu stranicu.',
		fieldName: 'Ime i prezime',
		fieldEmail: 'Email',
		fieldPhone: 'Broj telefona (opcionalno)',
		fieldMessage: 'Unesite sadržaj poruke',
		formOk: (
			<React.Fragment>
				<strong>Uspješno</strong> ste poslali vašu poruku!
			</React.Fragment>
		),
		formErr: 'Došlo je do greške prilikom slanja poruke!',
		formClose: 'Zatvori',
		formSend: 'Pošalji',

		/* ----- podnožje ----- */
		footVisit: 'Posjeti',
		footVisitText: 'i započni svoje putovanje ka pravilnijem učenju Allahove knjige.',
		footAbout:
			'Interaktivni priručnik za učenje tedžvidskih pravila – jednostavno, korak po korak, za djecu i odrasle, početnike i naprednije učače.',
		footNav: 'Navigacija',
		footPartners: 'Prijatelji projekta',
		footAuthor: 'Autor: mr. Sejid ef. Strika',

		/* ----- pregled lekcija ----- */
		lessonsEyebrow: 'Interaktivni priručnik',
		lessonsTitle: 'Lekcije',
		lessonsText:
			'Dvadeset dva tedžvidska pravila, korak po korak. Svaka lekcija donosi objašnjenje, zvučne primjere i vježbu.',
		cardLekcija: 'Lekcija',
		cardVjezba: 'Vježba',
		cardVideo: 'Video',
		cardTabela: 'Tabela',
		cardZnakovi: 'Znakovi',

		/* ----- pojedina lekcija ----- */
		lekcijaEyebrow: 'Lekcija',
		lekcija: 'LEKCIJA',
		vjezba: 'VJEŽBA',
		videoLekcija: 'VIDEO LEKCIJA',
		videoTitle: 'Video lekcija',
		zatvori: 'Zatvori',
		prethodna: 'Prethodna',
		sljedeca: 'Sljedeća',
		sveLekcije: 'Sve lekcije',
		prethodnaAria: 'Prethodna lekcija',
		sljedecaAria: 'Sljedeća lekcija',
		tabelaNaslov: 'Pregled u tabeli:',
		napomena: 'NAPOMENA',

		/* ----- audio ----- */
		audioHint: 'Klikni na riječ ili ajet da ga poslušaš. Novi klik gasi prethodni zapis.',
		audioPlayAll: 'Pusti sve redom',
		audioStopAll: 'Zaustavi',
		audioWordTitle: 'Klikni za slušanje',
		audioPlayer: 'Audio plejer',
		audioPause: 'Pauza',
		audioReplay: 'Pusti ponovo',
		audioResume: 'Nastavi',
		audioPrevTrack: 'Prethodni zapis',
		audioNextTrack: 'Sljedeći zapis',
		audioPosition: 'Pozicija u zapisu',
		audioUnavailable: 'Audio zapis nije dostupan.',
		audioStopClose: 'Zaustavi i zatvori'
	},

	en: {
		/* ----- logo / general ----- */
		logoAria: 'Tedzvid.ba – home',
		logoTag: 'Knowledge that brings you closer to the Qur’an',

		/* ----- navigation ----- */
		navMain: 'Main navigation',
		navOpen: 'Open menu',
		navClose: 'Close menu',
		navHome: 'Home',
		navLekcije: 'Lessons',
		navONama: 'About us',
		navPrintano: 'Printed edition',
		navKontakt: 'Contact',
		navNaslovna: 'Home',
		navSveLekcije: 'All lessons',
		langSwitch: 'Change language',
		langName: { bs: 'Bosnian', en: 'English' },

		/* ----- home: hero ----- */
		heroEyebrow: 'Interactive tajweed handbook',
		heroTitle: (
			<React.Fragment>
				Learn <em>tajweed</em>
			</React.Fragment>
		),
		heroSub: 'Simple, interactive, step by step',
		heroLead: (
			<React.Fragment>
				<strong>Tedzvid.ba</strong> is a modern, interactive, electronic edition of the tajweed handbook by Sejid
				Strika, M.A. – created to help beginners, maktab students, mu'allims and everyone who loves the Qur'an.
			</React.Fragment>
		),
		heroCtaStart: 'Start learning',
		heroCtaMore: 'Learn more',
		storeIntro: 'App available on',
		mockTitle: 'Tajweed',
		mockSubtitle: 'Interactive handbook',
		mockRules: 'Rules',
		mockAudio: 'Audio',
		mockVideo: 'Video',
		mockVjezbe: 'Exercises',
		heroBadge: 'For children and adults, beginners and advanced reciters',

		/* ----- home: what you will find ----- */
		featEyebrow: 'Contents',
		featTitle: 'What will you find on tedzvid.ba?',
		features: [
			{ title: 'All the rules', text: 'clearly and systematically' },
			{ title: 'Practical exercises', text: 'to test your knowledge' },
			{ title: 'Made for teaching', text: 'ideal for maktabs and classes' },
			{ title: 'Available everywhere', text: 'on computer, tablet and phone' },
			{ title: 'Learn, practise, repeat', text: 'progress every day' }
		],

		/* ----- home: about ----- */
		aboutEyebrow: 'About us',
		aboutTitle: 'Tajweed available to everyone',
		aboutP1: (
			<React.Fragment>
				<strong>Tedzvid.ba</strong> is the electronic, interactive edition of the printed tajweed handbook by
				Sejid ef. Strika, M.A. Its aim is to help new reciters of the Qur'an – maktab students and adults alike –
				to master the basic rules of tajweed more easily.
			</React.Fragment>
		),
		aboutP2:
			'Simple language and the avoidance of technical terms, wherever that was possible, make it accessible to a much wider readership.',
		aboutP3: (
			<React.Fragment>
				The special feature of this site are the <strong>interactive examples</strong>, whose audio recording you
				can play by clicking on a word. We hope tedzvid.ba will help mu'allims explain the rules of tajweed, both
				to children in the maktab and to adults who have finished the sufara.
			</React.Fragment>
		),
		quoteText: '“The best among you are those who learn the Qur’an and teach it.”',
		quoteCite: 'Al-Bukhari',
		benefits: [
			{ title: 'Clear explanations', text: 'of the rules of tajweed, without complicated terminology' },
			{ title: 'Audio examples', text: 'listen and apply straight away' },
			{ title: 'Video lessons', text: 'visual learning that stays with you' },
			{ title: 'For every generation', text: 'useful content for children, adults and teachers' },
			{ title: 'Help in practice', text: 'material that makes learning, teaching and revising easier' }
		],
		aboutVideoEyebrow: 'Video',
		aboutVideoTitle: 'See what learning on tedzvid.ba looks like',
		aboutVideoAlt: 'Tedzvid.ba – introducing the project',

		/* ----- home: printed edition ----- */
		printEyebrow: 'Printed edition',
		printTitle: 'I want the printed edition',
		printAlt: 'Printed edition of the tajweed handbook',
		printText:
			'Tajweed – a handbook for the correct recitation of the Qur’an, with exercises, is also available in print. You can get information about the printed edition from the author:',
		author: 'Sejid ef. Strika, M.A.',

		/* ----- home: contact ----- */
		contactEyebrow: 'Contact',
		contactTitle: 'Write to us',
		contactText:
			'If you have any suggestions, remarks or impressions, feel free to write them down so we can improve this site.',
		fieldName: 'Full name',
		fieldEmail: 'Email',
		fieldPhone: 'Phone number (optional)',
		fieldMessage: 'Type your message',
		formOk: (
			<React.Fragment>
				Your message was sent <strong>successfully</strong>!
			</React.Fragment>
		),
		formErr: 'An error occurred while sending your message!',
		formClose: 'Close',
		formSend: 'Send',

		/* ----- footer ----- */
		footVisit: 'Visit',
		footVisitText: 'and begin your journey towards a more correct recitation of Allah’s book.',
		footAbout:
			'An interactive handbook for learning the rules of tajweed – simple, step by step, for children and adults, beginners and advanced reciters.',
		footNav: 'Navigation',
		footPartners: 'Friends of the project',
		footAuthor: 'Author: Sejid ef. Strika, M.A.',

		/* ----- lessons overview ----- */
		lessonsEyebrow: 'Interactive handbook',
		lessonsTitle: 'Lessons',
		lessonsText:
			'Twenty-two rules of tajweed, step by step. Every lesson brings an explanation, audio examples and an exercise.',
		cardLekcija: 'Lesson',
		cardVjezba: 'Exercise',
		cardVideo: 'Video',
		cardTabela: 'Table',
		cardZnakovi: 'Signs',

		/* ----- single lesson ----- */
		lekcijaEyebrow: 'Lesson',
		lekcija: 'LESSON',
		vjezba: 'EXERCISE',
		videoLekcija: 'VIDEO LESSON',
		videoTitle: 'Video lesson',
		zatvori: 'Close',
		prethodna: 'Previous',
		sljedeca: 'Next',
		sveLekcije: 'All lessons',
		prethodnaAria: 'Previous lesson',
		sljedecaAria: 'Next lesson',
		tabelaNaslov: 'Overview in a table:',
		napomena: 'NOTE',

		/* ----- audio ----- */
		audioHint: 'Click a word or a verse to listen to it. A new click stops the previous recording.',
		audioPlayAll: 'Play all in order',
		audioStopAll: 'Stop',
		audioWordTitle: 'Click to listen',
		audioPlayer: 'Audio player',
		audioPause: 'Pause',
		audioReplay: 'Play again',
		audioResume: 'Resume',
		audioPrevTrack: 'Previous recording',
		audioNextTrack: 'Next recording',
		audioPosition: 'Position in the recording',
		audioUnavailable: 'This audio recording is not available.',
		audioStopClose: 'Stop and close'
	}
};

export function useUI() {
	return usePick(UI);
}

export default UI;
