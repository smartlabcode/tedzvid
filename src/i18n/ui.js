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
		storeGet: 'Preuzmi na',
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
		audioStopClose: 'Zaustavi i zatvori',

		/* ----- korisnički račun ----- */
		navPrijava: 'Prijava',
		navRegistracija: 'Registracija',
		navProfil: 'Moj napredak',
		navOdjava: 'Odjava',
		authEyebrow: 'Korisnički račun',
		loginTitle: 'Prijava',
		loginText: 'Prijavi se da nastaviš učenje i otključaš sljedeće lekcije.',
		registerTitle: 'Registracija',
		registerText:
			'Napravi besplatan račun: napredak se čuva, a svaki položeni kviz otključava sljedeću lekciju.',
		fieldPassword: 'Lozinka',
		fieldPassword2: 'Ponovi lozinku',
		passwordHint: 'Najmanje 6 znakova.',
		btnLogin: 'Prijavi se',
		btnRegister: 'Napravi račun',
		btnWorking: 'Trenutak…',
		switchToRegister: 'Nemaš račun?',
		switchToLogin: 'Već imaš račun?',
		authErrors: {
			bad_credentials: 'Pogrešan email ili lozinka.',
			email_exists: 'Račun s ovom email adresom već postoji.',
			bad_email: 'Unesi ispravnu email adresu.',
			bad_password: 'Lozinka mora imati najmanje 6 znakova.',
			bad_name: 'Unesi ime (najmanje 2 znaka).',
			passwords_differ: 'Lozinke se ne podudaraju.',
			too_many: 'Previše pokušaja. Pokušaj ponovo za nekoliko minuta.',
			network: 'Server nije dostupan. Provjeri vezu i pokušaj ponovo.',
			unauthorized: 'Sesija je istekla – prijavi se ponovo.',
			locked: 'Ova lekcija je još zaključana.',
			server: 'Došlo je do greške. Pokušaj ponovo.'
		},

		/* ----- moj napredak ----- */
		profilEyebrow: 'Moj napredak',
		profilText: (prolaz, ukupno) =>
			`Lekcije se otključavaju redom: položen kviz (najmanje ${prolaz} od ${ukupno} tačnih) otključava sljedeću lekciju.`,
		profilPassed: 'Položenih lekcija',
		profilUnlocked: 'Otključanih lekcija',
		profilNext: 'Sljedeći korak',
		profilAllDone: 'Sve lekcije su položene – svaka čast!',
		statusPolozeno: 'Položeno',
		statusNijePolozeno: 'Nije položeno',
		statusOtkljucano: 'Otključano',
		statusZakljucano: 'Zaključano',

		/* ----- kartice lekcija: zaključavanje ----- */
		cardKviz: 'Kviz',
		cardUnlockHint: (n) => `Lekcije se otključavaju redom – položi kviz lekcije ${n} da nastaviš dalje.`,
		cardUnlockGuest: 'Prijavi se ili napravi besplatan račun da otključaš lekcije i sačuvaš napredak.',
		cardGoQuiz: (n) => `Kviz lekcije ${n}`,

		/* ----- zaključana lekcija ----- */
		gateTitle: 'Lekcija je zaključana',
		gateTextUser: (n, prolaz, ukupno) =>
			`Da otključaš ovu lekciju, položi kviz na kraju lekcije ${n} (najmanje ${prolaz} od ${ukupno} tačnih odgovora).`,
		gateTextGuest:
			'Lekcije se otključavaju redom: nakon svake lekcije slijedi kratki kviz, a položen kviz otključava sljedeću lekciju. Prijavi se ili napravi besplatan račun da bi se tvoj napredak sačuvao.',

		/* ----- kviz ----- */
		kviz: 'KVIZ',
		kvizIntroTitle: 'Provjeri znanje',
		kvizIntroText: (prolaz, ukupno) =>
			`${ukupno} pitanja o ovoj lekciji. Za prolaz treba najmanje ${prolaz} tačnih odgovora – položen kviz otključava sljedeću lekciju.`,
		kvizStart: 'Započni kviz',
		kvizRestart: 'Pokušaj ponovo',
		kvizQuestion: (i, n) => `Pitanje ${i} od ${n}`,
		kvizProgressAria: 'Napredak kroz kviz',
		kvizAnswer: 'Odgovori',
		kvizNext: 'Sljedeće pitanje',
		kvizFinish: 'Pogledaj rezultat',
		kvizCorrect: 'Tačno!',
		kvizWrong: 'Netačno.',
		kvizCorrectIs: 'Tačan odgovor:',
		kvizScore: (t, n) => `${t} od ${n} tačnih`,
		kvizPassed: 'Bravo, kviz je položen!',
		kvizFailedTitle: 'Nije položeno',
		kvizFailed: (prolaz) =>
			`Za prolaz treba najmanje ${prolaz} tačnih odgovora. Pročitaj lekciju još jednom i pokušaj ponovo.`,
		kvizUnlocked: (n) => `Otključana je lekcija ${n}.`,
		kvizAllDone: 'Ovo je bila posljednja lekcija – sve lekcije su pređene. Slijedi završni kviz iz cijelog tedžvida.',
		kvizNextLesson: (n) => `Lekcija ${n}`,
		kvizSaving: 'Spremanje napretka…',
		kvizSaved: 'Napredak je sačuvan.',
		kvizSaveError: 'Napredak nije sačuvan – provjeri vezu.',
		kvizRetrySave: 'Pokušaj sačuvati ponovo',
		kvizGuest: 'Prijavi se ili napravi račun da se rezultat sačuva i otključa sljedeća lekcija.',
		kvizBest: (b, n) => `Najbolji rezultat: ${b} od ${n}`,
		kvizAlreadyPassed: 'Kviz je već položen i sljedeća lekcija je otključana – vježbaj koliko želiš.',
		kvizCorrectCount: (t, n) => `Tačnih: ${t} · Netačnih: ${n - t}`,

		/* ----- završni kviz ----- */
		zavrsniEyebrow: 'Provjera cijelog tedžvida',
		zavrsniTitle: 'Završni kviz',
		zavrsniText: (n, prolaz) =>
			`${n} pitanja iz svih 22 lekcije, izmiješanim redoslijedom. Za prolaz treba najmanje ${prolaz} tačnih odgovora.`,
		zavrsniCardText: (n) => `${n} pitanja iz svih lekcija – provjera znanja iz cijelog tedžvida.`,
		zavrsniOpen: 'Otvori završni kviz',
		zavrsniIntroText: (n, prolaz) =>
			`${n} pitanja iz svih 22 lekcije, izmiješanim redoslijedom. Za prolaz treba najmanje ${prolaz} tačnih odgovora. Ako zatvoriš stranicu, možeš nastaviti gdje si stao dok je preglednik otvoren.`,
		zavrsniResume: (i, n) => `Nastavi (pitanje ${i} od ${n})`,
		zavrsniRestart: 'Počni ispočetka',
		zavrsniLockedTitle: 'Završni kviz je zaključan',
		zavrsniLockedUser: (n) =>
			`Završni kviz se otključava kad položiš kvizove svih 22 lekcije. Trenutno si na lekciji ${n}.`,
		zavrsniLockedGuest:
			'Završni kviz se otključava kad se polože kvizovi svih 22 lekcije. Prijavi se ili napravi besplatan račun da bi se tvoj napredak sačuvao.',
		zavrsniPassed: 'Bravo, završni kviz je položen!',
		zavrsniPassedText: 'Cijeli tedžvid je pređen i provjeren – svaka čast!',
		zavrsniFailed: (prolaz) =>
			`Za prolaz treba najmanje ${prolaz} tačnih odgovora. Ponovi lekcije u kojima je bilo grešaka i pokušaj ponovo.`,
		zavrsniReview: 'Preporuka za ponavljanje:',
		zavrsniMistakes: (n) => (n === 1 ? '1 greška' : n < 5 ? `${n} greške` : `${n} grešaka`),
		profilEverything: 'Sve lekcije i završni kviz su položeni – svaka čast!',
		fieldLogin: 'Email ili korisničko ime',

		/* ----- rang lista ----- */
		navRang: 'Rang lista',
		rangEyebrow: 'Takmičenje',
		rangTitle: 'Rang lista',
		rangText:
			'Najbolji učenici ove sedmice, ovog mjeseca i ukupno. Bodovi su tačni odgovori: računa se najbolji rezultat svakog kviza u periodu.',
		rangPeriod: { sedmica: 'Ova sedmica', mjesec: 'Ovaj mjesec', sve: 'Ukupno' },
		rangOd: (d) => `Od ${d}`,
		rangLoading: 'Učitavanje…',
		rangEmpty: 'Još nema rezultata u ovom periodu. Riješi kviz i budi prvi!',
		rangYou: 'ti',
		rangPoints: 'bodova',
		rangPassed: (n) => (n === 1 ? '1 položen kviz' : n >= 2 && n <= 4 ? `${n} položena kviza` : `${n} položenih kvizova`),
		rangYourRank: (r, b) => `Tvoja pozicija: ${r}. mjesto (${b} bodova).`,
		rangNoPoints: 'Još nemaš bodova u ovom periodu – riješi neki kviz!',
		rangGuest: 'Prijavi se ili napravi račun da se i tvoji rezultati nađu na listi.',
		rangRules: 'Ponavljanje istog kviza ne donosi dodatne bodove – računa se samo najbolji rezultat. Sedmica počinje ponedjeljkom.',

		/* ----- admin ----- */
		navAdmin: 'Admin',
		adminEyebrow: 'Administracija',
		adminTitle: 'Korisnici',
		adminText: 'Pregled svih registrovanih korisnika i njihovog napretka.',
		adminForbidden: 'Ova stranica je dostupna samo administratoru.',
		adminLoading: 'Učitavanje korisnika…',
		adminStatUsers: 'Korisnika',
		adminStatActiveWeek: 'Aktivnih ove sedmice',
		adminStatFinal: 'Položen završni',
		adminStatAttempts: 'Riješenih kvizova',
		adminSearch: 'Pretraži po imenu ili emailu…',
		adminShown: (n, t) => `${n} od ${t}`,
		adminColUser: 'Korisnik',
		adminColRole: 'Uloga',
		adminColCreated: 'Registrovan',
		adminColLast: 'Zadnja aktivnost',
		adminColLessons: 'Lekcije',
		adminColFinal: 'Završni',
		adminColAttempts: 'Pokušaji',
		adminRole: { admin: 'Admin', demo: 'Demo', korisnik: 'Korisnik' },
		adminNever: 'još ništa',
		adminNoUsers: 'Nema korisnika koji odgovaraju pretrazi.',
		adminDetailHint: 'Klikni red za napredak po lekcijama.',
		adminCell: (n, p) => (p ? `Lekcija ${n}: najbolje ${p.najbolje}/10, pokušaja: ${p.pokusaji}` : `Lekcija ${n}: nije rješavana`),
		adminCellFinal: (p) => (p ? `Završni kviz: najbolje ${p.najbolje}/100, pokušaja: ${p.pokusaji}` : 'Završni kviz: nije rješavan'),
		adminLegend: { ok: 'položeno', partial: 'nije položeno', none: 'nije rješavano' }
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
		storeGet: 'Get it on',
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
		audioStopClose: 'Stop and close',

		/* ----- account ----- */
		navPrijava: 'Log in',
		navRegistracija: 'Sign up',
		navProfil: 'My progress',
		navOdjava: 'Log out',
		authEyebrow: 'Your account',
		loginTitle: 'Log in',
		loginText: 'Log in to continue learning and unlock the next lessons.',
		registerTitle: 'Create an account',
		registerText: 'Create a free account: your progress is saved and every passed quiz unlocks the next lesson.',
		fieldPassword: 'Password',
		fieldPassword2: 'Repeat password',
		passwordHint: 'At least 6 characters.',
		btnLogin: 'Log in',
		btnRegister: 'Create account',
		btnWorking: 'One moment…',
		switchToRegister: 'No account yet?',
		switchToLogin: 'Already have an account?',
		authErrors: {
			bad_credentials: 'Wrong email or password.',
			email_exists: 'An account with this email address already exists.',
			bad_email: 'Enter a valid email address.',
			bad_password: 'The password must be at least 6 characters long.',
			bad_name: 'Enter your name (at least 2 characters).',
			passwords_differ: 'The passwords do not match.',
			too_many: 'Too many attempts. Try again in a few minutes.',
			network: 'The server is not reachable. Check your connection and try again.',
			unauthorized: 'Your session has expired – please log in again.',
			locked: 'This lesson is still locked.',
			server: 'Something went wrong. Please try again.'
		},

		/* ----- my progress ----- */
		profilEyebrow: 'My progress',
		profilText: (prolaz, ukupno) =>
			`Lessons unlock in order: a passed quiz (at least ${prolaz} of ${ukupno} correct) unlocks the next lesson.`,
		profilPassed: 'Lessons passed',
		profilUnlocked: 'Lessons unlocked',
		profilNext: 'Next step',
		profilAllDone: 'All lessons passed – well done!',
		statusPolozeno: 'Passed',
		statusNijePolozeno: 'Not passed',
		statusOtkljucano: 'Unlocked',
		statusZakljucano: 'Locked',

		/* ----- lesson cards: locking ----- */
		cardKviz: 'Quiz',
		cardUnlockHint: (n) => `Lessons unlock in order – pass the lesson ${n} quiz to continue.`,
		cardUnlockGuest: 'Log in or create a free account to unlock lessons and save your progress.',
		cardGoQuiz: (n) => `Lesson ${n} quiz`,

		/* ----- locked lesson ----- */
		gateTitle: 'This lesson is locked',
		gateTextUser: (n, prolaz, ukupno) =>
			`To unlock this lesson, pass the quiz at the end of lesson ${n} (at least ${prolaz} of ${ukupno} correct answers).`,
		gateTextGuest:
			'Lessons unlock in order: every lesson ends with a short quiz, and a passed quiz unlocks the next lesson. Log in or create a free account so your progress is saved.',

		/* ----- quiz ----- */
		kviz: 'QUIZ',
		kvizIntroTitle: 'Test your knowledge',
		kvizIntroText: (prolaz, ukupno) =>
			`${ukupno} questions about this lesson. You need at least ${prolaz} correct answers to pass – a passed quiz unlocks the next lesson.`,
		kvizStart: 'Start the quiz',
		kvizRestart: 'Try again',
		kvizQuestion: (i, n) => `Question ${i} of ${n}`,
		kvizProgressAria: 'Quiz progress',
		kvizAnswer: 'Answer',
		kvizNext: 'Next question',
		kvizFinish: 'See the result',
		kvizCorrect: 'Correct!',
		kvizWrong: 'Not quite.',
		kvizCorrectIs: 'The correct answer is:',
		kvizScore: (t, n) => `${t} of ${n} correct`,
		kvizPassed: 'Well done, you passed!',
		kvizFailedTitle: 'Not passed',
		kvizFailed: (prolaz) => `You need at least ${prolaz} correct answers to pass. Read the lesson once more and try again.`,
		kvizUnlocked: (n) => `Lesson ${n} is now unlocked.`,
		kvizAllDone: 'That was the last lesson – you have gone through every lesson. Next up is the final quiz on the whole handbook.',
		kvizNextLesson: (n) => `Lesson ${n}`,
		kvizSaving: 'Saving progress…',
		kvizSaved: 'Progress saved.',
		kvizSaveError: 'Progress was not saved – check your connection.',
		kvizRetrySave: 'Try saving again',
		kvizGuest: 'Log in or create an account so your result is saved and the next lesson unlocks.',
		kvizBest: (b, n) => `Best result: ${b} of ${n}`,
		kvizAlreadyPassed: 'You have already passed this quiz and the next lesson is unlocked – practise as often as you like.',
		kvizCorrectCount: (t, n) => `Correct: ${t} · Wrong: ${n - t}`,

		/* ----- final quiz ----- */
		zavrsniEyebrow: 'Test of the whole handbook',
		zavrsniTitle: 'Final quiz',
		zavrsniText: (n, prolaz) =>
			`${n} questions from all 22 lessons, in random order. You need at least ${prolaz} correct answers to pass.`,
		zavrsniCardText: (n) => `${n} questions from every lesson – a test of the whole handbook.`,
		zavrsniOpen: 'Open the final quiz',
		zavrsniIntroText: (n, prolaz) =>
			`${n} questions from all 22 lessons, in random order. You need at least ${prolaz} correct answers to pass. If you close the page you can continue where you left off while the browser stays open.`,
		zavrsniResume: (i, n) => `Continue (question ${i} of ${n})`,
		zavrsniRestart: 'Start over',
		zavrsniLockedTitle: 'The final quiz is locked',
		zavrsniLockedUser: (n) =>
			`The final quiz unlocks once you have passed the quizzes of all 22 lessons. You are currently on lesson ${n}.`,
		zavrsniLockedGuest:
			'The final quiz unlocks once the quizzes of all 22 lessons are passed. Log in or create a free account so your progress is saved.',
		zavrsniPassed: 'Well done, you passed the final quiz!',
		zavrsniPassedText: 'You have gone through and tested the whole handbook – well done!',
		zavrsniFailed: (prolaz) =>
			`You need at least ${prolaz} correct answers to pass. Revise the lessons where you made mistakes and try again.`,
		zavrsniReview: 'Recommended for revision:',
		zavrsniMistakes: (n) => (n === 1 ? '1 mistake' : `${n} mistakes`),
		profilEverything: 'All lessons and the final quiz passed – well done!',
		fieldLogin: 'Email or username',

		/* ----- leaderboard ----- */
		navRang: 'Leaderboard',
		rangEyebrow: 'Competition',
		rangTitle: 'Leaderboard',
		rangText:
			'The best learners this week, this month and overall. Points are correct answers: the best result of each quiz within the period counts.',
		rangPeriod: { sedmica: 'This week', mjesec: 'This month', sve: 'All time' },
		rangOd: (d) => `Since ${d}`,
		rangLoading: 'Loading…',
		rangEmpty: 'No results in this period yet. Take a quiz and be the first!',
		rangYou: 'you',
		rangPoints: 'points',
		rangPassed: (n) => (n === 1 ? '1 quiz passed' : `${n} quizzes passed`),
		rangYourRank: (r, b) => `Your position: #${r} (${b} points).`,
		rangNoPoints: 'You have no points in this period yet – take a quiz!',
		rangGuest: 'Log in or create an account so your results appear on the list too.',
		rangRules: 'Repeating the same quiz does not add points – only your best result counts. The week starts on Monday.',

		/* ----- admin ----- */
		navAdmin: 'Admin',
		adminEyebrow: 'Administration',
		adminTitle: 'Users',
		adminText: 'An overview of all registered users and their progress.',
		adminForbidden: 'This page is available to the administrator only.',
		adminLoading: 'Loading users…',
		adminStatUsers: 'Users',
		adminStatActiveWeek: 'Active this week',
		adminStatFinal: 'Passed the final',
		adminStatAttempts: 'Quizzes taken',
		adminSearch: 'Search by name or email…',
		adminShown: (n, t) => `${n} of ${t}`,
		adminColUser: 'User',
		adminColRole: 'Role',
		adminColCreated: 'Registered',
		adminColLast: 'Last activity',
		adminColLessons: 'Lessons',
		adminColFinal: 'Final',
		adminColAttempts: 'Attempts',
		adminRole: { admin: 'Admin', demo: 'Demo', korisnik: 'User' },
		adminNever: 'nothing yet',
		adminNoUsers: 'No users match the search.',
		adminDetailHint: 'Click a row for progress per lesson.',
		adminCell: (n, p) => (p ? `Lesson ${n}: best ${p.najbolje}/10, attempts: ${p.pokusaji}` : `Lesson ${n}: not taken`),
		adminCellFinal: (p) => (p ? `Final quiz: best ${p.najbolje}/100, attempts: ${p.pokusaji}` : 'Final quiz: not taken'),
		adminLegend: { ok: 'passed', partial: 'not passed', none: 'not taken' }
	}
};

export function useUI() {
	return usePick(UI);
}

export default UI;
