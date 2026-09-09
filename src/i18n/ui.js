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

		/* ----- oblačić s objašnjenjem uz riječ koja svira ----- */
		napomenaAria: 'Objašnjenje',
		napomenaPomjeri: 'Povuci da pomjeriš objašnjenje',
		napomenaTip: {
			dugo: 'Uči se dugo',
			kratko: 'Uči se kratko',
			krupno: 'Uči se krupno',
			tanko: 'Uči se tanko',
			duzina: 'Dužina',
			stajanje: 'Stajanje',
			uklapanje: 'Uklapanje',
			nos: 'Kroz nos',
			odskakanje: 'Odskakanje',
			pretvaranje: 'Pretvaranje',
			skrivanje: 'Skrivanje',
			cisto: 'Čisto',
			napomena: 'Napomena'
		},

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
			bad_username: 'Korisničko ime: 3–20 znakova, mala slova, brojevi, tačka, crtica ili donja crta.',
			username_exists: 'Korisničko ime je zauzeto – odaberi drugo.',
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
		fieldUsername: 'Korisničko ime',
		usernameHint: '3–20 znakova: mala slova, brojevi, tačka, crtica ili donja crta. Prikazuje se na rang listi.',

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

		/* ----- igraonica ----- */
		navIgra: 'Igra',
		igraEyebrow: 'Igraj i uči',
		igraNaslov: 'Igraonica',
		igraOpis:
			'Tri kratke igre za vježbanje tedžvidskih pravila: uhvati harfove pravila, prepoznaj pravilo u riječi i spoji parove. Harfovi i primjeri dolaze iz samih lekcija.',
		igraNapomena:
			'Igre su dodatak lekcijama i ne utječu na napredak ni na rang listu – rezultati se čuvaju samo u ovom pregledniku.',
		igraBezRekorda: 'Još nema rekorda',
		igraZvukUkljucen: 'Zvuk uključen',
		igraZvukIskljucen: 'Zvuk isključen',
		igraKreni: 'Igraj',
		igraPonovo: 'Igraj ponovo',
		igraNastavi: 'Nastavi',
		igraPauza: 'Pauza',
		igraDalje: 'Dalje',
		igraRezultat: 'Rezultat',
		igraBodovi: 'bodova',
		igraPotezi: 'poteza',
		igraSrca: (n) => `Preostalo srca: ${n}`,
		igraLekcija: (n) => `lekcija ${n}`,
		igraRekordBodovi: (n) => `Najbolji rezultat: ${n} bodova`,
		igraRekordMem: (p, v) => `Najbolje: ${p} poteza, ${v}`,
		igraKraj: 'Kraj igre',
		igraPobjeda: 'Bravo, prošao si sve nivoe!',
		igraBravo: 'Tačno!',
		igraNetacno: 'Netačno.',
		igraIsteklo: 'Isteklo je vrijeme.',
		igraTacnoJe: (naziv) => `Tačno je: ${naziv}.`,
		igraOtvoriLekciju: (n) => `Otvori lekciju ${n}`,
		igraPoslusaj: 'Poslušaj',
		igraUhvati: 'Hvataj harfove pravila',
		igraHarfNaslov: 'Uhvati harf',
		igraHarfUvod:
			'Harfovi padaju odozgo. Hvataj samo one koji pripadaju traženom pravilu, a ostale pusti da prođu.',
		igraKontrole: 'Pomjeraj korpu prstom, mišem ili strelicama ← →. Razmak pauzira igru.',
		igraNivo: (n) => `Nivo ${n}`,
		igraNapredakNivoa: (a, b, uk) => `Uhvaćeno ${a}/${b} do sljedećeg nivoa · ukupno ${uk} nivoa`,
		igraHarfPobjeda: 'Prešao si sva pravila – harfovi ti više nisu strani!',
		igraHarfKraj: (n) => `Stigao si do ${n}. nivoa. Ponovi harfove i pokušaj opet.`,
		igraTrkaNaslov: 'Trka kroz pravila',
		igraTrkaUvod: (s) =>
			`Prepoznaj pravilo u istaknutom dijelu riječi. Imaš ${s} sekundi po pitanju i tri srca – brži odgovor nosi više bodova.`,
		igraTrkaPitanje: 'Koje je pravilo u istaknutom dijelu?',
		igraTrkaKraj: (t, uk, niz) => `Tačnih odgovora: ${t} od ${uk}. Najduži niz: ${niz}.`,
		igraMemNaslov: 'Spoji parove',
		igraMemUvod: 'Okreni dvije kartice i spoji naziv pravila s primjerom iz lekcije.',
		igraMemBravo: 'Svi parovi spojeni!',
		igraMemKraj: (p) => `Spojio si svih ${p} parova.`,
		igraParova: (n) => `${n} parova`,
		igraParovaKratko: 'parova',
		igraTezina: 'Težina',
		igraKarta: (n) => `Kartica ${n}`,
		igre: {
			harfovi: {
				naslov: 'Uhvati harf',
				opis: 'Arkada: hvataj harfove koji pripadaju traženom pravilu, a ostale pusti da prođu.',
				kako: [
					'Šest nivoa: idgam, iklab, izhar, kalkala i ihfa',
					'Pogrešan harf oduzima srce, novi nivo vraća jedno',
					'Niz pogodaka množi bodove'
				],
				uputa: 'Pomjeraj korpu prstom, mišem ili strelicama ← →. Razmak pauzira igru.'
			},
			trka: {
				naslov: 'Trka kroz pravila',
				opis: 'Riječ iz lekcije s istaknutim dijelom – pogodi koje je pravilo prije nego istekne vrijeme.',
				kako: [
					'12 sekundi po pitanju',
					'Primjeri i objašnjenja iz svih lekcija',
					'Brži odgovor nosi više bodova'
				],
				uputa: 'Poslije svakog odgovora dobiješ objašnjenje i link na lekciju.'
			},
			memorija: {
				naslov: 'Spoji parove',
				opis: 'Memorija: spoji naziv pravila s primjerom u kojem se to pravilo nalazi.',
				kako: [ '6 ili 8 parova', 'Svaki par nosi objašnjenje', 'Cilj je manje poteza i kraće vrijeme' ],
				uputa: 'Odlična igra za mekteb: može se igrati i na projektoru, u dvije ekipe.'
			}
		},

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
		adminLegend: { ok: 'položeno', partial: 'nije položeno', none: 'nije rješavano' },

		/* ----- bonus lekcija: sura Jasin ----- */
		jasinEyebrow: 'Bonus lekcija',
		jasinNaslov: 'Sura Jasin',
		jasinPodnaslov: 'Cijela sura, stranica po stranicu, s bojama i objašnjenjima za sva tedžvidska pravila iz 22 lekcije.',
		jasinUvod:
			'Svaka boja u tekstu je jedno pravilo. Klikni na obojeni harf i pročitaj zašto se tu primjenjuje to pravilo, ili otvori spisak svih pravila ispod ajeta. Zvučni zapis uči Mahmud Halil el-Husari.',
		suraPrivremeniZvuk: 'Zvučni zapis je privremeno preuzet s vanjskog izvora (everyayah.com) dok se ne snime vlastiti.',
		jasinOSuri: (n, a, b) =>
			`Sura Jasin je 36. sura u Kur’anu: ${n} ajeta, objavljena u Mekki. U mushafu zauzima stranice ${a}–${b}, a ovdje je podijeljena upravo tako.`,
		jasinStranica: (n) => `Stranica ${n}`,
		jasinStranicaMushafa: (n) => `Stranica ${n} mushafa`,
		jasinNemaNaStranici: 'nema na ovoj stranici',
		jasinAjeti: (a, b) => `ajeti ${a}–${b}`,
		suraLegenda: 'Boje pravila',
		suraSve: 'Sve boje',
		suraManje: 'Manje boja',
		suraNista: 'Bez boja',
		suraPuta: (n) => `${n}×`,
		suraLekcijaKratko: (n) => `lekcija ${n}`,
		suraBezLekcije: 'obrađeno uz 5. i 6. lekciju',
		suraPravilaBroj: (n) => (n === 1 ? '1 pravilo' : n < 5 ? `${n} pravila` : `${n} pravila`),
		suraSvaObjasnjenja: 'Objašnjenja uz sve ajete',
		suraPratiRijec: 'Prati riječ uz zvuk',
		suraOdRijeci: 'Pusti od ove riječi',
		suraPustiAjet: (n) => `Poslušaj ${n}. ajet`,
		jasinPustiStranicu: 'Pusti cijelu stranicu',
		suraZaustavi: 'Zaustavi',
		jasinOznaka: (n) => `Jasin, ${n}. ajet`,
		jasinPrethodna: 'Prethodna stranica',
		jasinSljedeca: 'Sljedeća stranica',
		jasinZakljucanNaslov: 'Bonus lekcija je još zaključana',
		jasinZakljucanKorisnik: (n) =>
			`Sura Jasin se otključava kad položiš kvizove svih 22 lekcije. Nastavi s ${n}. lekcijom.`,
		jasinZakljucanGost: 'Prijavi se i pređi svih 22 lekcije da otključaš bonus lekciju sa surom Jasin.',
		jasinKarticaTekst: 'Cijela sura Jasin s bojama i objašnjenjima svih pravila koja si prešao – kao nagrada na kraju kursa.',
		jasinOtvori: 'Otvori suru Jasin',

		/* ----- bonus lekcija: amme sure ----- */
		ammeEyebrow: 'Bonus lekcija',
		ammeNaslov: 'Amme džuz',
		ammePodnaslov: 'Trideseti džuz Kur’ana – sure koje se najčešće uče napamet – s bojama i objašnjenjima svih tedžvidskih pravila.',
		ammeUvod:
			'Sura se bira iz spiska, a uz svaku ide i besmela. Svaka boja u tekstu je jedno pravilo: klikni na obojeni harf i pročitaj zašto se tu primjenjuje, ili otvori spisak pravila ispod ajeta. Boje u legendi broje se za suru koja je otvorena.',
		ammeODzuzu: (n, a, b) =>
			`Amme džuz je trideseti i posljednji džuz Kur’ana: ${n} sura, od ${a}. sure En-Nebe’ do ${b}. sure En-Nas. Iste su boje i ista objašnjenja kao u bonus lekciji sa surom Jasin.`,
		ammeNemaUSuri: 'nema u ovoj suri',
		ammeAjeta: (n) => (n === 1 ? '1 ajet' : n < 5 ? `${n} ajeta` : `${n} ajeta`),
		ammeMekkanska: 'mekkanska',
		ammeMedinska: 'medinska',
		ammeBesmela: 'Besmela',
		ammeBesmelaOznaka: 'Besmela',
		ammePustiSuru: 'Pusti cijelu suru',
		ammePrethodna: 'Prethodna sura',
		ammeSljedeca: 'Sljedeća sura',
		ammeOznaka: (naziv, n) => `${naziv}, ${n}. ajet`,
		ammeZakljucanNaslov: 'Bonus lekcija je još zaključana',
		ammeZakljucanKorisnik: (n) =>
			`Amme džuz se otključava kad položiš kvizove svih 22 lekcije. Nastavi s ${n}. lekcijom.`,
		ammeZakljucanGost: 'Prijavi se i pređi svih 22 lekcije da otključaš bonus lekciju s Amme džuzom.',
		ammeKarticaTekst: 'Trideseti džuz Kur’ana, sura po sura, s besmelom, bojama i objašnjenjima svih pravila koja si prešao.',
		ammeOtvori: 'Otvori Amme džuz',

		/* ----- bonus lekcije s kraćim cjelinama (El-Fatiha, Ajetul-kursij, El-Mulk) ----- */
		bonus: {
			fatiha: {
				poStranicama: false,
				eyebrow: 'Bonus lekcija',
				naslov: 'Sura El-Fatiha',
				podnaslov:
					'Sura koja se uči na svakom rekatu, s bojama i objašnjenjima za sva tedžvidska pravila iz 22 lekcije.',
				uvod:
					'Svaka boja u tekstu je jedno pravilo. Klikni na obojeni harf i pročitaj zašto se tu primjenjuje to pravilo, ili otvori spisak svih pravila ispod ajeta. Zvučni zapis uči Mahmud Halil el-Husari.',
				osuri: (d) =>
					`Sura El-Fatiha je prva sura u Kur’anu: ${d.brojAjeta} ajeta, objavljena u Mekki. Uči se na svakom rekatu namaza, pa je vrijedi proći harf po harf.`,
				pusti: 'Pusti cijelu suru',
				prethodna: 'Prethodni dio',
				sljedeca: 'Sljedeći dio',
				nema: 'nema u ovoj suri',
				oznaka: (n) => `El-Fatiha, ${n}. ajet`,
				karticaTekst: 'Sura koju učiš na svakom rekatu, harf po harf, s objašnjenjem svakog pravila koje si prešao.',
				otvori: 'Otvori suru El-Fatiha',
				zakljucanNaslov: 'Bonus lekcija je još zaključana',
				zakljucanKorisnik: (n) =>
					`Sura El-Fatiha se otključava kad položiš kvizove svih 22 lekcije. Nastavi s ${n}. lekcijom.`,
				zakljucanGost: 'Prijavi se i pređi svih 22 lekcije da otključaš bonus lekciju sa surom El-Fatiha.'
			},
			kursij: {
				poStranicama: false,
				eyebrow: 'Bonus lekcija',
				naslov: 'Ajetul-kursij',
				podnaslov: 'Ajet koji se najčešće uči napamet, riječ po riječ, s objašnjenjima svih tedžvidskih pravila.',
				uvod:
					'Svaka boja u tekstu je jedno pravilo. Klikni na obojeni harf i pročitaj zašto se tu primjenjuje to pravilo, ili otvori spisak svih pravila ispod ajeta. Zvučni zapis uči Mahmud Halil el-Husari.',
				osuri: () =>
					'Ajetul-kursij je 255. ajet sure El-Bekare i jedan je od ajeta koji se najčešće uče napamet. Ovdje je razložen na sva pravila iz 22 lekcije.',
				pusti: 'Pusti ajet',
				prethodna: 'Prethodni dio',
				sljedeca: 'Sljedeći dio',
				nema: 'nema u ovom ajetu',
				oznaka: () => 'Ajetul-kursij',
				karticaTekst: 'Ajetul-kursij, riječ po riječ, s objašnjenjem svakog pravila koje si prešao.',
				otvori: 'Otvori Ajetul-kursij',
				zakljucanNaslov: 'Bonus lekcija je još zaključana',
				zakljucanKorisnik: (n) =>
					`Ajetul-kursij se otključava kad položiš kvizove svih 22 lekcije. Nastavi s ${n}. lekcijom.`,
				zakljucanGost: 'Prijavi se i pređi svih 22 lekcije da otključaš bonus lekciju s Ajetul-kursijom.'
			},
			mulk: {
				poStranicama: true,
				eyebrow: 'Bonus lekcija',
				naslov: 'Sura El-Mulk',
				podnaslov:
					'Cijela sura, stranica po stranicu, s bojama i objašnjenjima za sva tedžvidska pravila iz 22 lekcije.',
				uvod:
					'Svaka boja u tekstu je jedno pravilo. Klikni na obojeni harf i pročitaj zašto se tu primjenjuje to pravilo, ili otvori spisak svih pravila ispod ajeta. Zvučni zapis uči Mahmud Halil el-Husari.',
				osuri: (d) =>
					`Sura El-Mulk je 67. sura u Kur’anu: ${d.brojAjeta} ajeta, objavljena u Mekki. U mushafu zauzima stranice ${d
						.odjeljci[0].stranica}–${d.odjeljci[d.odjeljci.length - 1].stranica}, a ovdje je podijeljena upravo tako.`,
				pusti: 'Pusti cijelu stranicu',
				prethodna: 'Prethodna stranica',
				sljedeca: 'Sljedeća stranica',
				nema: 'nema na ovoj stranici',
				oznaka: (n) => `El-Mulk, ${n}. ajet`,
				karticaTekst: 'Cijela sura El-Mulk s bojama i objašnjenjima svih pravila koja si prešao.',
				otvori: 'Otvori suru El-Mulk',
				zakljucanNaslov: 'Bonus lekcija je još zaključana',
				zakljucanKorisnik: (n) =>
					`Sura El-Mulk se otključava kad položiš kvizove svih 22 lekcije. Nastavi s ${n}. lekcijom.`,
				zakljucanGost: 'Prijavi se i pređi svih 22 lekcije da otključaš bonus lekciju sa surom El-Mulk.'
			}
		}
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

		/* ----- explanation bubble next to the playing word ----- */
		napomenaAria: 'Explanation',
		napomenaPomjeri: 'Drag to move the explanation',
		napomenaTip: {
			dugo: 'Recited long',
			kratko: 'Recited short',
			krupno: 'Recited heavy',
			tanko: 'Recited light',
			duzina: 'Prolongation',
			stajanje: 'Stopping',
			uklapanje: 'Merging',
			nos: 'Through the nose',
			odskakanje: 'Bouncing',
			pretvaranje: 'Conversion',
			skrivanje: 'Hiding',
			cisto: 'Clear',
			napomena: 'Note'
		},

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
			bad_username: 'Username: 3–20 characters, lowercase letters, digits, dot, dash or underscore.',
			username_exists: 'That username is taken – choose another one.',
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
		fieldUsername: 'Username',
		usernameHint: '3–20 characters: lowercase letters, digits, dot, dash or underscore. Shown on the leaderboard.',

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

		/* ----- games ----- */
		navIgra: 'Game',
		igraEyebrow: 'Play and learn',
		igraNaslov: 'Game room',
		igraOpis:
			'Three short games for practising the rules of tajweed: catch the letters of a rule, spot the rule in a word, and match the pairs. The letters and examples come from the lessons themselves.',
		igraNapomena:
			'The games are an extra to the lessons and do not affect your progress or the leaderboard – results are kept in this browser only.',
		igraBezRekorda: 'No record yet',
		igraZvukUkljucen: 'Sound on',
		igraZvukIskljucen: 'Sound off',
		igraKreni: 'Play',
		igraPonovo: 'Play again',
		igraNastavi: 'Continue',
		igraPauza: 'Paused',
		igraDalje: 'Next',
		igraRezultat: 'Result',
		igraBodovi: 'points',
		igraPotezi: 'moves',
		igraSrca: (n) => `Lives left: ${n}`,
		igraLekcija: (n) => `lesson ${n}`,
		igraRekordBodovi: (n) => `Best score: ${n} points`,
		igraRekordMem: (p, v) => `Best: ${p} moves, ${v}`,
		igraKraj: 'Game over',
		igraPobjeda: 'Well done, you cleared every level!',
		igraBravo: 'Correct!',
		igraNetacno: 'Not quite.',
		igraIsteklo: 'Time is up.',
		igraTacnoJe: (naziv) => `The answer is: ${naziv}.`,
		igraOtvoriLekciju: (n) => `Open lesson ${n}`,
		igraPoslusaj: 'Listen',
		igraUhvati: 'Catch the letters of',
		igraHarfNaslov: 'Catch the letter',
		igraHarfUvod: 'Letters fall from the top. Catch only those that belong to the rule shown, and let the others pass.',
		igraKontrole: 'Move the basket with your finger, the mouse or the ← → keys. Space pauses the game.',
		igraNivo: (n) => `Level ${n}`,
		igraNapredakNivoa: (a, b, uk) => `Caught ${a}/${b} to the next level · ${uk} levels in total`,
		igraHarfPobjeda: 'You cleared every rule – these letters hold no secrets for you!',
		igraHarfKraj: (n) => `You reached level ${n}. Revise the letters and try again.`,
		igraTrkaNaslov: 'Race through the rules',
		igraTrkaUvod: (s) =>
			`Spot the rule in the highlighted part of the word. You have ${s} seconds per question and three lives – a faster answer scores more.`,
		igraTrkaPitanje: 'Which rule is in the highlighted part?',
		igraTrkaKraj: (t, uk, niz) => `Correct answers: ${t} of ${uk}. Longest streak: ${niz}.`,
		igraMemNaslov: 'Match the pairs',
		igraMemUvod: 'Turn over two cards and match the name of a rule with an example from the lesson.',
		igraMemBravo: 'All pairs matched!',
		igraMemKraj: (p) => `You matched all ${p} pairs.`,
		igraParova: (n) => `${n} pairs`,
		igraParovaKratko: 'pairs',
		igraTezina: 'Difficulty',
		igraKarta: (n) => `Card ${n}`,
		igre: {
			harfovi: {
				naslov: 'Catch the letter',
				opis: 'An arcade game: catch the letters that belong to the rule shown and let the rest fall.',
				kako: [
					'Six levels: idgham, iqlab, idhhar, qalqalah and ikhfa',
					'A wrong letter costs a life, a new level gives one back',
					'A streak multiplies your points'
				],
				uputa: 'Move the basket with your finger, the mouse or the ← → keys. Space pauses the game.'
			},
			trka: {
				naslov: 'Race through the rules',
				opis: 'A word from the lessons with one part highlighted – name the rule before the time runs out.',
				kako: [ '12 seconds per question', 'Examples and notes from every lesson', 'A faster answer scores more' ],
				uputa: 'After every answer you get an explanation and a link to the lesson.'
			},
			memorija: {
				naslov: 'Match the pairs',
				opis: 'A memory game: match the name of a rule with an example that contains it.',
				kako: [ '6 or 8 pairs', 'Every pair comes with an explanation', 'Aim for fewer moves and less time' ],
				uputa: 'A good game for the mekteb: it works on a projector, with two teams.'
			}
		},

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
		adminLegend: { ok: 'passed', partial: 'not passed', none: 'not taken' },

		/* ----- bonus lesson: Surah Ya-Sin ----- */
		jasinEyebrow: 'Bonus lesson',
		jasinNaslov: 'Surah Ya-Sin',
		jasinPodnaslov: 'The whole surah, page by page, colour-coded and explained with every tajweed rule from the 22 lessons.',
		jasinUvod:
			'Every colour in the text is one rule. Tap a coloured letter to read why the rule applies there, or open the list of all rules under a verse. The recitation is by Mahmoud Khalil Al-Husary.',
		suraPrivremeniZvuk: 'The recitation is temporarily served from an external source (everyayah.com) until our own is recorded.',
		jasinOSuri: (n, a, b) =>
			`Surah Ya-Sin is the 36th surah of the Qur’an: ${n} verses, revealed in Mecca. In the mushaf it spans pages ${a}–${b}, and it is divided here in exactly the same way.`,
		jasinStranica: (n) => `Page ${n}`,
		jasinStranicaMushafa: (n) => `Mushaf page ${n}`,
		jasinNemaNaStranici: 'not on this page',
		jasinAjeti: (a, b) => `verses ${a}–${b}`,
		suraLegenda: 'Rule colours',
		suraSve: 'All colours',
		suraManje: 'Fewer colours',
		suraNista: 'No colours',
		suraPuta: (n) => `${n}×`,
		suraLekcijaKratko: (n) => `lesson ${n}`,
		suraBezLekcije: 'covered in lessons 5 and 6',
		suraPravilaBroj: (n) => (n === 1 ? '1 rule' : `${n} rules`),
		suraSvaObjasnjenja: 'Explanations under every verse',
		suraPratiRijec: 'Follow the word with the audio',
		suraOdRijeci: 'Play from this word',
		suraPustiAjet: (n) => `Listen to verse ${n}`,
		jasinPustiStranicu: 'Play the whole page',
		suraZaustavi: 'Stop',
		jasinOznaka: (n) => `Ya-Sin, verse ${n}`,
		jasinPrethodna: 'Previous page',
		jasinSljedeca: 'Next page',
		jasinZakljucanNaslov: 'The bonus lesson is still locked',
		jasinZakljucanKorisnik: (n) =>
			`Surah Ya-Sin unlocks once you pass the quizzes of all 22 lessons. Continue with lesson ${n}.`,
		jasinZakljucanGost: 'Log in and complete all 22 lessons to unlock the bonus lesson with Surah Ya-Sin.',
		jasinKarticaTekst: 'The whole of Surah Ya-Sin, colour-coded and explained with every rule you have learned – a reward at the end of the course.',
		jasinOtvori: 'Open Surah Ya-Sin',

		/* ----- bonus lesson: short surahs ----- */
		ammeEyebrow: 'Bonus lesson',
		ammeNaslov: 'Juz Amma',
		ammePodnaslov: 'The thirtieth juz of the Qur’an – the surahs most often memorised – colour-coded and explained with every tajweed rule.',
		ammeUvod:
			'Pick a surah from the list; each one comes with the Basmala. Every colour in the text is one rule: tap a coloured letter to read why it applies there, or open the list of rules under a verse. The legend counts the rules of the open surah.',
		ammeODzuzu: (n, a, b) =>
			`Juz Amma is the thirtieth and last juz of the Qur’an: ${n} surahs, from surah ${a} (An-Naba) to surah ${b} (An-Nas). The colours and explanations are the same as in the Surah Ya-Sin bonus lesson.`,
		ammeNemaUSuri: 'not in this surah',
		ammeAjeta: (n) => (n === 1 ? '1 verse' : `${n} verses`),
		ammeMekkanska: 'Meccan',
		ammeMedinska: 'Medinan',
		ammeBesmela: 'Basmala',
		ammeBesmelaOznaka: 'Basmala',
		ammePustiSuru: 'Play the whole surah',
		ammePrethodna: 'Previous surah',
		ammeSljedeca: 'Next surah',
		ammeOznaka: (naziv, n) => `${naziv}, verse ${n}`,
		ammeZakljucanNaslov: 'The bonus lesson is still locked',
		ammeZakljucanKorisnik: (n) =>
			`Juz Amma unlocks once you pass the quizzes of all 22 lessons. Continue with lesson ${n}.`,
		ammeZakljucanGost: 'Log in and complete all 22 lessons to unlock the Juz Amma bonus lesson.',
		ammeKarticaTekst: 'The thirtieth juz of the Qur’an, surah by surah, with the Basmala, colour-coded and explained with every rule you have learned.',
		ammeOtvori: 'Open Juz Amma',

		/* ----- bonus lessons with shorter passages (Al-Fatihah, Ayat al-Kursi, Al-Mulk) ----- */
		bonus: {
			fatiha: {
				poStranicama: false,
				eyebrow: 'Bonus lesson',
				naslov: 'Surah Al-Fatihah',
				podnaslov:
					'The surah recited in every unit of prayer, colour-coded and explained with every tajweed rule from the 22 lessons.',
				uvod:
					'Every colour in the text is one rule. Tap a coloured letter to read why the rule applies there, or open the list of all rules under a verse. The recitation is by Mahmoud Khalil Al-Husary.',
				osuri: (d) =>
					`Surah Al-Fatihah is the first surah of the Qur’an: ${d.brojAjeta} verses, revealed in Mecca. It is recited in every unit of prayer, so it is worth going through letter by letter.`,
				pusti: 'Play the whole surah',
				prethodna: 'Previous part',
				sljedeca: 'Next part',
				nema: 'not in this surah',
				oznaka: (n) => `Al-Fatihah, verse ${n}`,
				karticaTekst:
					'The surah you recite in every prayer, letter by letter, with every rule you have learned explained.',
				otvori: 'Open Surah Al-Fatihah',
				zakljucanNaslov: 'This bonus lesson is still locked',
				zakljucanKorisnik: (n) =>
					`Surah Al-Fatihah unlocks once you pass the quizzes of all 22 lessons. Carry on with lesson ${n}.`,
				zakljucanGost: 'Sign in and work through all 22 lessons to unlock the bonus lesson with Surah Al-Fatihah.'
			},
			kursij: {
				poStranicama: false,
				eyebrow: 'Bonus lesson',
				naslov: 'Ayat al-Kursi',
				podnaslov: 'One of the most memorised verses, word by word, with every tajweed rule explained.',
				uvod:
					'Every colour in the text is one rule. Tap a coloured letter to read why the rule applies there, or open the list of all rules under a verse. The recitation is by Mahmoud Khalil Al-Husary.',
				osuri: () =>
					'Ayat al-Kursi is verse 255 of Surah Al-Baqarah and one of the most memorised verses of the Qur’an. Here it is broken down into every rule from the 22 lessons.',
				pusti: 'Play the verse',
				prethodna: 'Previous part',
				sljedeca: 'Next part',
				nema: 'not in this verse',
				oznaka: () => 'Ayat al-Kursi',
				karticaTekst: 'Ayat al-Kursi, word by word, with every rule you have learned explained.',
				otvori: 'Open Ayat al-Kursi',
				zakljucanNaslov: 'This bonus lesson is still locked',
				zakljucanKorisnik: (n) =>
					`Ayat al-Kursi unlocks once you pass the quizzes of all 22 lessons. Carry on with lesson ${n}.`,
				zakljucanGost: 'Sign in and work through all 22 lessons to unlock the bonus lesson with Ayat al-Kursi.'
			},
			mulk: {
				poStranicama: true,
				eyebrow: 'Bonus lesson',
				naslov: 'Surah Al-Mulk',
				podnaslov:
					'The whole surah, page by page, colour-coded and explained with every tajweed rule from the 22 lessons.',
				uvod:
					'Every colour in the text is one rule. Tap a coloured letter to read why the rule applies there, or open the list of all rules under a verse. The recitation is by Mahmoud Khalil Al-Husary.',
				osuri: (d) =>
					`Surah Al-Mulk is the 67th surah of the Qur’an: ${d.brojAjeta} verses, revealed in Mecca. In the mushaf it spans pages ${d
						.odjeljci[0].stranica}–${d.odjeljci[d.odjeljci.length - 1].stranica}, and it is divided here in exactly the same way.`,
				pusti: 'Play the whole page',
				prethodna: 'Previous page',
				sljedeca: 'Next page',
				nema: 'not on this page',
				oznaka: (n) => `Al-Mulk, verse ${n}`,
				karticaTekst: 'The whole of Surah Al-Mulk, colour-coded and explained with every rule you have learned.',
				otvori: 'Open Surah Al-Mulk',
				zakljucanNaslov: 'This bonus lesson is still locked',
				zakljucanKorisnik: (n) =>
					`Surah Al-Mulk unlocks once you pass the quizzes of all 22 lessons. Carry on with lesson ${n}.`,
				zakljucanGost: 'Sign in and work through all 22 lessons to unlock the bonus lesson with Surah Al-Mulk.'
			}
		}
	}
};

export function useUI() {
	return usePick(UI);
}

export default UI;
