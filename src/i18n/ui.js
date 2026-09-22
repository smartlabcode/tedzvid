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
		langName: { bs: 'Bosanski', en: 'English', de: 'Njemački' },

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
			'Dvadeset dva tedžvidska pravila, korak po korak – sve lekcije su otvorene, bez prijave. Lekcije su podijeljene u pet grupa, a iza svake grupe stoji kviz.',
		cardLekcija: 'Lekcija',
		cardVjezba: 'Vježba',
		cardVideo: 'Video',
		cardTabela: 'Tabela',
		cardZnakovi: 'Znakovi',

		/* ----- grupe lekcija i grupni kvizovi ----- */
		grupaEyebrow: (b) => `Grupa ${b}`,
		grupaNaslov: (od, doLekcije) => `Lekcije ${od}–${doLekcije}`,
		grupaKvizNaslov: (b) => `Kviz grupe ${b}`,
		grupaKvizEyebrow: (b) => `Provjera grupe ${b}`,
		grupaKarticaTekst: (n, od, doLekcije, prolaz) =>
			`${n} pitanja iz lekcija ${od}–${doLekcije}. Za prolaz treba najmanje ${prolaz} tačnih odgovora.`,
		grupaOpen: 'Otvori kviz grupe',
		grupaIntroText: (n, prolaz, od, doLekcije) =>
			`${n} pitanja iz lekcija ${od}–${doLekcije}, izmiješanim redoslijedom i drugačija svaki put. Za prolaz treba najmanje ${prolaz} tačnih odgovora.`,
		grupaLockedTitle: 'Kviz grupe je zaključan',
		grupaLockedUser: (b) => `Prvo položi kviz grupe ${b}, pa se otključava sljedeći.`,
		grupaLockedGuest:
			'Za sve kvizove je potrebna prijava. Prijavi se ili napravi besplatan račun – kvizovi grupa se onda otključavaju redom.',
		grupaUnlocked: (b) => `Otključan je kviz grupe ${b}.`,
		grupaAllDone: 'Sve grupe su položene – slijedi završni kviz iz cijelog tedžvida.',
		grupaAlreadyPassed: 'Kviz je već položen i sljedeći je otključan – vježbaj koliko želiš.',
		grupaHint:
			'Sve lekcije su otvorene svima; za kvizove je potrebna prijava. Kviz na kraju lekcije je vježba, a kviz grupe je prava provjera.',

		/* ----- mualim: kviz od kombinacije lekcija ----- */
		navMualim: 'Mualim',
		mualimEyebrow: 'Za mualime',
		mualimTitle: 'Napravi kviz',
		mualimText: 'Odaberi lekcije i broj pitanja – kviz se sastavlja iz pitanja odabranih lekcija.',
		mualimSelect: 'Lekcije',
		mualimAll: 'Sve',
		mualimNone: 'Nijedna',
		mualimCount: 'Broj pitanja',
		mualimCountAll: 'Sva',
		mualimCreate: 'Napravi kviz',
		mualimNew: 'Novi izbor',
		mualimPicked: (l, p) => `Odabranih lekcija: ${l} · pitanja u bazenu: ${p}`,
		mualimEmpty: 'Odaberi barem jednu lekciju.',
		mualimForbidden: 'Ova stranica je namijenjena mualimima.',
		mualimQuizTitle: 'Mualimov kviz',
		mualimIntroText: (n, prolaz) =>
			`${n} pitanja iz odabranih lekcija, izmiješanim redoslijedom. Za prolaz treba najmanje ${prolaz} tačnih odgovora. Rezultat se ne upisuje u napredak.`,
		mualimPassedText: 'Kviz je položen. Rezultat mualimovog kviza se ne upisuje u napredak.',

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
		loginText: 'Prijavi se da ti se napredak čuva i da otključaš sljedeće kvizove.',
		registerTitle: 'Registracija',
		registerText:
			'Napravi besplatan račun: napredak se čuva, a položen kviz grupe otključava sljedeći.',
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
			locked: 'Ovaj kviz je još zaključan.',
			server: 'Došlo je do greške. Pokušaj ponovo.'
		},

		/* ----- moj napredak ----- */
		profilEyebrow: 'Moj napredak',
		profilText: (prolaz, ukupno) =>
			`Sve lekcije su otvorene. Napredak se prati kroz kvizove grupa: za prolaz treba najmanje ${prolaz} od ${ukupno} tačnih odgovora.`,
		profilPassed: 'Položenih lekcija',
		profilGrupe: 'Položenih grupa',
		profilNext: 'Sljedeći korak',
		profilAllDone: 'Sve lekcije su položene – svaka čast!',
		statusPolozeno: 'Položeno',
		statusNijePolozeno: 'Nije položeno',
		statusOtkljucano: 'Otključano',
		statusZakljucano: 'Zaključano',

		/* ----- kartice lekcija ----- */
		cardKviz: 'Kviz',
		cardUnlockGuest: 'Prijavi se ili napravi besplatan račun da se napredak sačuva i da otključaš sljedeće kvizove.',
		cardGoQuiz: (n) => `Kviz lekcije ${n}`,

		/* ----- kviz ----- */
		kviz: 'KVIZ',
		kvizIntroTitle: 'Provjeri znanje',
		kvizIntroText: (prolaz, ukupno) =>
			`${ukupno} pitanja o ovoj lekciji – vježba prije kviza grupe. Za prolaz treba najmanje ${prolaz} tačnih odgovora.`,
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
		kvizVjezbaPassed: (b) => `Lekcija je savladana. Znanje cijele grupe provjeri na kvizu grupe ${b}.`,
		kvizNextLesson: (n) => `Lekcija ${n}`,
		kvizSaving: 'Spremanje napretka…',
		kvizSaved: 'Napredak je sačuvan.',
		kvizSaveError: 'Napredak nije sačuvan – provjeri vezu.',
		kvizRetrySave: 'Pokušaj sačuvati ponovo',
		kvizLoginTitle: 'Za kviz je potrebna prijava',
		kvizLoginText:
			'Lekcije su otvorene svima, ali svi kvizovi traže prijavu – tako se rezultat sačuva, prati se napredak i računa se na rang listi. Račun je besplatan.',
		kvizBest: (b, n) => `Najbolji rezultat: ${b} od ${n}`,
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
		zavrsniLockedUser: (b) => `Završni kviz se otključava kad položiš svih pet kvizova grupa. Trenutno si na grupi ${b}.`,
		zavrsniLockedGuest:
			'Za sve kvizove je potrebna prijava, a završni se otključava kad se polože kvizovi svih pet grupa. Prijavi se ili napravi besplatan račun.',
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
			'Šest kratkih igara za vježbanje tedžvidskih pravila: prepoznavanje pravila po zvuku, u riječi i u ajetu, povezivanje pravila s primjerom, razvrstavanje harfova i spajanje parova. Zapisi, harfovi, primjeri i ajeti dolaze iz samih lekcija.',
		igraNapomena:
			'Igre su dodatak lekcijama i ne utječu na napredak ni na rang listu – rezultati se čuvaju samo u ovom pregledniku.',
		igraBezRekorda: 'Još nema rekorda',
		igraZvukUkljucen: 'Zvuk uključen',
		igraZvukIskljucen: 'Zvuk isključen',
		igraKreni: 'Igraj',
		igraPonovo: 'Igraj ponovo',
		igraNastavi: 'Nastavi',
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
		igraUhoNaslov: 'Prepoznaj po zvuku',
		igraUhoUvod: (n) =>
			`Zapis se pusti, a riječ ostaje skrivena – pravilo treba prepoznati uhom. ${n} zapisa i tri srca.`,
		igraUhoPitanje: 'Koje pravilo čuješ?',
		igraUhoPonovo: 'Poslušaj ponovo',
		igraUhoPokazi: 'Pokaži riječ',
		igraUhoSkriveno: 'Riječ je skrivena – oslušni zapis.',
		igraUhoZavirio: 'Riječ je otkrivena, pa odgovor nosi pola bodova.',
		igraUhoNemaZapisa: 'Zapis se ne može pustiti, pa je riječ otkrivena.',
		igraUhoGotovo: 'Uho izoštreno!',
		igraUhoKraj: (t, uk) => `Tačno prepoznato: ${t} od ${uk} zapisa.`,
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
		igraKolo: (n) => `${n}. kolo`,
		igraPomoc: 'Pomoć',
		igraNadjiNaslov: 'Nađi pravilo',
		igraNadjiUvod: (n) =>
			`U ${n} ajeta treba pokazati riječ u kojoj je traženo pravilo. Tri promašaja i partija je gotova.`,
		igraNadjiPitanje: 'U kojoj je riječi ovo pravilo?',
		igraNadjiAjet: (n) => `${n}. ajet`,
		igraNadjiUToj: (imena) => `U toj riječi je: ${imena}. Traži dalje.`,
		igraNadjiNemaPravila: 'U toj riječi nema nijednog označenog pravila.',
		igraNadjiGotovo: 'Svi ajeti pređeni!',
		igraNadjiKraj: (t, uk) => `Iz prve pogođeno: ${t} od ${uk} ajeta.`,
		igraPoveziNaslov: 'Poveži pravila',
		igraPoveziUvod: (p, k) =>
			`Dodirni pravilo lijevo pa primjer desno – tačan spoj ostane vezan niti u boji pravila. ${k} kola po ${p} parova.`,
		igraPoveziPitanje: 'Poveži svako pravilo s primjerom u kojem se nalazi.',
		igraPoveziKolo: (b) => `Bodova do sada: ${b}. Sljedeće kolo donosi novih pet pravila.`,
		igraPoveziGotovo: 'Sve povezano!',
		igraPoveziKraj: (uk, g, v) => `Spojeno ${uk} parova, grešaka: ${g}, vrijeme: ${v}.`,
		igraRazvrstajNaslov: 'Prisloni harf',
		igraRazvrstajUvod: (k) =>
			`Povuci harf u kutiju pravila kojem pripada – ili ga dodirni pa dodirni kutiju. ${k} kola i tri srca.`,
		igraRazvrstajPitanje: 'Kojem pravilu pripada koji harf?',
		igraRazvrstajTacno: (naziv) => `pripada u ${naziv}.`,
		igraRazvrstajNetacno: (naziv) => `nije harf pravila ${naziv}.`,
		igraRazvrstajGotovo: 'Svi harfovi su na svom mjestu.',
		igraRazvrstajKolo: (b) => `Bodova do sada: ${b}. Sljedeće kolo donosi druga pravila.`,
		igraRazvrstajKraj: (k, uk) => `Pređeno ${k} od ${uk} kola.`,
		igre: {
			uho: {
				naslov: 'Prepoznaj po zvuku',
				opis: 'Zapis svira, riječ je skrivena – pravilo treba prepoznati uhom, kao na času učenja.',
				kako: [
					'110 zapisa iz svih lekcija, riječ se vidi tek poslije odgovora',
					'Zapis se može slušati koliko god puta treba',
					'Ko zaviri u riječ, dobija pola bodova'
				],
				uputa: 'Najbolje sa slušalicama: gunnu i uklapanje je lakše čuti nego vidjeti.'
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
			nadji: {
				naslov: 'Nađi pravilo',
				opis: 'Pravi ajet iz bonus lekcija – pokaži riječ u kojoj je traženo pravilo.',
				kako: [
					'Ajeti iz El-Fatihe, Ajetul-kursija, El-Mulka, Jasina i Amme džuza',
					'Promašaj otkriva koje pravilo je u toj riječi',
					'Svaki ajet se može i poslušati'
				],
				uputa: 'Dodirni riječ u kojoj vidiš traženo pravilo; boja i objašnjenje stižu poslije odgovora.'
			},
			povezi: {
				naslov: 'Poveži pravila',
				opis: 'Lijevo nazivi pravila, desno primjeri – povuci nit između onih koji idu zajedno.',
				kako: [ 'Tri kola po pet parova', 'Kolo bez greške nosi dodatne bodove', 'Boje niti su iste kao u bonus lekcijama' ],
				uputa: 'Dodirni jednu pa drugu stranu. Uz spojen par ide objašnjenje i zvučni zapis.'
			},
			razvrstaj: {
				naslov: 'Prisloni harf',
				opis: 'Razvrstaj harfove: svaki harf ide u kutiju pravila kojem pripada.',
				kako: [ 'Pet kola, tri do četiri kutije', 'Harf se povuče ili dodirne pa prisloni', 'Pomoć podsjeti koji harfovi idu uz koje pravilo' ],
				uputa: 'Na dodirnom ekranu je najlakše: prst na harf, pa prst na kutiju.'
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
		adminColGroups: 'grupa',
		adminColFinal: 'Završni',
		adminColAttempts: 'Pokušaji',
		adminRole: { admin: 'Admin', mualim: 'Mualim', demo: 'Demo', korisnik: 'Korisnik' },
		adminNever: 'još ništa',
		adminNoUsers: 'Nema korisnika koji odgovaraju pretrazi.',
		adminDetailHint: 'Klikni red za napredak po lekcijama i promjenu uloge.',
		adminRoleTitle: 'Uloga',
		adminRoleText:
			'Mualim ima pristup svemu osim administraciji: svi kvizovi su mu otključani i može napraviti kviz od proizvoljne kombinacije lekcija za svoj čas.',
		adminRoleLocked: 'Uloga ovog računa se ne mijenja ovdje (administrator, ugrađeni ili vlastiti račun).',
		adminMakeMualim: 'Postavi za mualima',
		adminMakeKorisnik: 'Vrati u korisnike',
		adminRoleSaving: 'Spremanje…',
		adminRoleError: 'Uloga nije promijenjena – pokušaj ponovo.',
		adminCell: (n, p) => (p ? `Lekcija ${n}: najbolje ${p.najbolje}/10, pokušaja: ${p.pokusaji}` : `Lekcija ${n}: nije rješavana`),
		adminCellGrupa: (b, p) =>
			p ? `Kviz grupe ${b}: najbolje ${p.najbolje}/20, pokušaja: ${p.pokusaji}` : `Kviz grupe ${b}: nije rješavan`,
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
				otvori: 'Otvori suru El-Fatiha'
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
				otvori: 'Otvori Ajetul-kursij'
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
				otvori: 'Otvori suru El-Mulk'
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
		langName: { bs: 'Bosnian', en: 'English', de: 'German' },

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
			'Twenty-two rules of tajweed, step by step – every lesson is open, no account needed. The lessons are split into five groups, and each group ends with a quiz.',
		cardLekcija: 'Lesson',
		cardVjezba: 'Exercise',
		cardVideo: 'Video',
		cardTabela: 'Table',
		cardZnakovi: 'Signs',

		/* ----- lesson groups and group quizzes ----- */
		grupaEyebrow: (b) => `Group ${b}`,
		grupaNaslov: (od, doLekcije) => `Lessons ${od}–${doLekcije}`,
		grupaKvizNaslov: (b) => `Group ${b} quiz`,
		grupaKvizEyebrow: (b) => `Test of group ${b}`,
		grupaKarticaTekst: (n, od, doLekcije, prolaz) =>
			`${n} questions from lessons ${od}–${doLekcije}. You need at least ${prolaz} correct answers to pass.`,
		grupaOpen: 'Open the group quiz',
		grupaIntroText: (n, prolaz, od, doLekcije) =>
			`${n} questions from lessons ${od}–${doLekcije}, in random order and different every time. You need at least ${prolaz} correct answers to pass.`,
		grupaLockedTitle: 'This group quiz is locked',
		grupaLockedUser: (b) => `Pass the group ${b} quiz first and the next one unlocks.`,
		grupaLockedGuest:
			'All quizzes require an account. Log in or create a free one – group quizzes then unlock in order.',
		grupaUnlocked: (b) => `The group ${b} quiz is now unlocked.`,
		grupaAllDone: 'Every group is passed – next up is the final quiz on the whole handbook.',
		grupaAlreadyPassed: 'You have already passed this quiz and the next one is unlocked – practise as often as you like.',
		grupaHint:
			'Every lesson is open to everyone; quizzes require an account. The quiz at the end of a lesson is practice; the group quiz is the real test.',

		/* ----- teacher: a quiz from a combination of lessons ----- */
		navMualim: 'Teacher',
		mualimEyebrow: 'For teachers',
		mualimTitle: 'Build a quiz',
		mualimText: 'Pick the lessons and the number of questions – the quiz is drawn from the questions of those lessons.',
		mualimSelect: 'Lessons',
		mualimAll: 'All',
		mualimNone: 'None',
		mualimCount: 'Questions',
		mualimCountAll: 'All',
		mualimCreate: 'Build the quiz',
		mualimNew: 'New selection',
		mualimPicked: (l, p) => `Lessons selected: ${l} · questions in the pool: ${p}`,
		mualimEmpty: 'Pick at least one lesson.',
		mualimForbidden: 'This page is meant for teachers.',
		mualimQuizTitle: 'Teacher\u2019s quiz',
		mualimIntroText: (n, prolaz) =>
			`${n} questions from the selected lessons, in random order. You need at least ${prolaz} correct answers to pass. The result is not written to your progress.`,
		mualimPassedText: 'Quiz passed. A teacher\u2019s quiz result is not written to your progress.',

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
		loginText: 'Log in so your progress is saved and the next quizzes unlock.',
		registerTitle: 'Create an account',
		registerText: 'Create a free account: your progress is saved and a passed group quiz unlocks the next one.',
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
			locked: 'This quiz is still locked.',
			server: 'Something went wrong. Please try again.'
		},

		/* ----- my progress ----- */
		profilEyebrow: 'My progress',
		profilText: (prolaz, ukupno) =>
			`Every lesson is open. Progress is tracked through the group quizzes: at least ${prolaz} of ${ukupno} correct answers to pass.`,
		profilPassed: 'Lessons passed',
		profilGrupe: 'Groups passed',
		profilNext: 'Next step',
		profilAllDone: 'All lessons passed – well done!',
		statusPolozeno: 'Passed',
		statusNijePolozeno: 'Not passed',
		statusOtkljucano: 'Unlocked',
		statusZakljucano: 'Locked',

		/* ----- lesson cards ----- */
		cardKviz: 'Quiz',
		cardUnlockGuest: 'Log in or create a free account so your progress is saved and the next quizzes unlock.',
		cardGoQuiz: (n) => `Lesson ${n} quiz`,


		/* ----- quiz ----- */
		kviz: 'QUIZ',
		kvizIntroTitle: 'Test your knowledge',
		kvizIntroText: (prolaz, ukupno) =>
			`${ukupno} questions about this lesson – practice before the group quiz. You need at least ${prolaz} correct answers to pass.`,
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
		kvizVjezbaPassed: (b) => `You have got this lesson down. Test the whole group on the group ${b} quiz.`,
		kvizNextLesson: (n) => `Lesson ${n}`,
		kvizSaving: 'Saving progress…',
		kvizSaved: 'Progress saved.',
		kvizSaveError: 'Progress was not saved – check your connection.',
		kvizRetrySave: 'Try saving again',
		kvizLoginTitle: 'Log in to take the quiz',
		kvizLoginText:
			'Every lesson is open to everyone, but all quizzes require an account – that is how your result is saved, your progress is tracked and your score counts on the leaderboard. An account is free.',
		kvizBest: (b, n) => `Best result: ${b} of ${n}`,
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
		zavrsniLockedUser: (b) =>
			`The final quiz unlocks once you have passed all five group quizzes. You are currently on group ${b}.`,
		zavrsniLockedGuest:
			'All quizzes require an account, and the final one unlocks once all five group quizzes are passed. Log in or create a free account.',
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
			'Six short games for practising the rules of tajweed: name the rule by ear, spot it in a word and in a verse, connect a rule with its example, sort the letters and match the pairs. The recordings, letters, examples and verses come from the lessons themselves.',
		igraNapomena:
			'The games are an extra to the lessons and do not affect your progress or the leaderboard – results are kept in this browser only.',
		igraBezRekorda: 'No record yet',
		igraZvukUkljucen: 'Sound on',
		igraZvukIskljucen: 'Sound off',
		igraKreni: 'Play',
		igraPonovo: 'Play again',
		igraNastavi: 'Continue',
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
		igraUhoNaslov: 'Name what you hear',
		igraUhoUvod: (n) =>
			`The recording plays while the word stays hidden – recognise the rule by ear. ${n} recordings and three lives.`,
		igraUhoPitanje: 'Which rule do you hear?',
		igraUhoPonovo: 'Play again',
		igraUhoPokazi: 'Show the word',
		igraUhoSkriveno: 'The word is hidden – listen to the recording.',
		igraUhoZavirio: 'The word is showing, so the answer scores half the points.',
		igraUhoNemaZapisa: 'The recording cannot be played, so the word is revealed.',
		igraUhoGotovo: 'A sharp ear!',
		igraUhoKraj: (t, uk) => `Recognised correctly: ${t} of ${uk} recordings.`,
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
		igraKolo: (n) => `Round ${n}`,
		igraPomoc: 'Hint',
		igraNadjiNaslov: 'Find the rule',
		igraNadjiUvod: (n) => `In ${n} verses, point to the word that contains the rule you are given. Three misses end the game.`,
		igraNadjiPitanje: 'Which word contains this rule?',
		igraNadjiAjet: (n) => `verse ${n}`,
		igraNadjiUToj: (imena) => `That word has: ${imena}. Keep looking.`,
		igraNadjiNemaPravila: 'That word has no marked rule at all.',
		igraNadjiGotovo: 'All verses done!',
		igraNadjiKraj: (t, uk) => `Found at first try: ${t} of ${uk} verses.`,
		igraPoveziNaslov: 'Connect the rules',
		igraPoveziUvod: (p, k) =>
			`Tap a rule on the left and its example on the right – a correct match stays tied with a thread in the colour of the rule. ${k} rounds of ${p} pairs.`,
		igraPoveziPitanje: 'Connect every rule with the example that contains it.',
		igraPoveziKolo: (b) => `Points so far: ${b}. The next round brings five new rules.`,
		igraPoveziGotovo: 'All connected!',
		igraPoveziKraj: (uk, g, v) => `${uk} pairs matched, mistakes: ${g}, time: ${v}.`,
		igraRazvrstajNaslov: 'Sort the letters',
		igraRazvrstajUvod: (k) =>
			`Drag a letter into the box of the rule it belongs to – or tap the letter and then the box. ${k} rounds and three lives.`,
		igraRazvrstajPitanje: 'Which letter belongs to which rule?',
		igraRazvrstajTacno: (naziv) => `belongs to ${naziv}.`,
		igraRazvrstajNetacno: (naziv) => `is not a letter of ${naziv}.`,
		igraRazvrstajGotovo: 'Every letter is in its place.',
		igraRazvrstajKolo: (b) => `Points so far: ${b}. The next round brings other rules.`,
		igraRazvrstajKraj: (k, uk) => `You cleared ${k} of ${uk} rounds.`,
		igre: {
			uho: {
				naslov: 'Name what you hear',
				opis: 'The recording plays while the word stays hidden – recognise the rule by ear, as in a recitation class.',
				kako: [
					'110 recordings from every lesson, the word appears only after your answer',
					'Play the recording as many times as you need',
					'Peeking at the word halves the points'
				],
				uputa: 'Best with headphones: ghunnah and merging are easier to hear than to see.'
			},
			trka: {
				naslov: 'Race through the rules',
				opis: 'A word from the lessons with one part highlighted – name the rule before the time runs out.',
				kako: [ '12 seconds per question', 'Examples and notes from every lesson', 'A faster answer scores more' ],
				uputa: 'After every answer you get an explanation and a link to the lesson.'
			},
			nadji: {
				naslov: 'Find the rule',
				opis: 'A real verse from the bonus lessons – point to the word that contains the rule.',
				kako: [
					'Verses from Al-Fatihah, Ayat al-Kursi, Al-Mulk, Ya-Sin and the Amma juz',
					'A miss tells you which rule that word really has',
					'Every verse can be listened to'
				],
				uputa: 'Tap the word where you see the rule; the colour and the explanation follow your answer.'
			},
			povezi: {
				naslov: 'Connect the rules',
				opis: 'Rule names on the left, examples on the right – draw a thread between the ones that belong together.',
				kako: [ 'Three rounds of five pairs', 'A round without a mistake scores a bonus', 'The threads use the colours of the bonus lessons' ],
				uputa: 'Tap one side and then the other. Every matched pair comes with an explanation and a recording.'
			},
			razvrstaj: {
				naslov: 'Sort the letters',
				opis: 'Sort the letters: each one goes into the box of the rule it belongs to.',
				kako: [ 'Five rounds, three to four boxes', 'Drag a letter, or tap it and then the box', 'The hint reminds you which letters belong to which rule' ],
				uputa: 'Easiest on a touch screen: finger on the letter, then on the box.'
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
		adminColGroups: 'groups',
		adminColFinal: 'Final',
		adminColAttempts: 'Attempts',
		adminRole: { admin: 'Admin', mualim: 'Mualim', demo: 'Demo', korisnik: 'User' },
		adminNever: 'nothing yet',
		adminNoUsers: 'No users match the search.',
		adminDetailHint: 'Click a row for progress per lesson and to change the role.',
		adminRoleTitle: 'Role',
		adminRoleText:
			'A teacher has access to everything except administration: every quiz is unlocked and they can build a quiz from any combination of lessons for their class.',
		adminRoleLocked: 'The role of this account cannot be changed here (administrator, built-in or your own account).',
		adminMakeMualim: 'Make a teacher',
		adminMakeKorisnik: 'Back to regular user',
		adminRoleSaving: 'Saving…',
		adminRoleError: 'The role was not changed – please try again.',
		adminCell: (n, p) => (p ? `Lesson ${n}: best ${p.najbolje}/10, attempts: ${p.pokusaji}` : `Lesson ${n}: not taken`),
		adminCellGrupa: (b, p) =>
			p ? `Group ${b} quiz: best ${p.najbolje}/20, attempts: ${p.pokusaji}` : `Group ${b} quiz: not taken`,
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
				otvori: 'Open Surah Al-Fatihah'
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
				otvori: 'Open Ayat al-Kursi'
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
				otvori: 'Open Surah Al-Mulk'
			}
		}
	},

	de: {
		/* ----- Logo / Allgemeines ----- */
		logoAria: 'Tedzvid.ba – Startseite',
		logoTag: 'Wissen, das dich dem Koran näherbringt',

		/* ----- Navigation ----- */
		navMain: 'Hauptnavigation',
		navOpen: 'Menü öffnen',
		navClose: 'Menü schließen',
		navHome: 'Startseite',
		navLekcije: 'Lektionen',
		navONama: 'Über uns',
		navPrintano: 'Druckausgabe',
		navKontakt: 'Kontakt',
		navNaslovna: 'Startseite',
		navSveLekcije: 'Alle Lektionen',
		langSwitch: 'Sprache wechseln',
		langName: { bs: 'Bosnisch', en: 'Englisch', de: 'Deutsch' },

		/* ----- Startseite: Hero ----- */
		heroEyebrow: 'Interaktives Tadschwid-Handbuch',
		heroTitle: (
			<React.Fragment>
				Lerne <em>Tadschwid</em>
			</React.Fragment>
		),
		heroSub: 'Einfach, interaktiv, Schritt für Schritt',
		heroLead: (
			<React.Fragment>
				<strong>Tedzvid.ba</strong> ist die moderne, interaktive, elektronische Ausgabe des Tadschwid-Handbuchs
				von Sejid Strika, M.A. – gemacht für Anfänger, für Kinder in der Koranschule, für Lehrerinnen und Lehrer
				und für alle, die den Koran lieben.
			</React.Fragment>
		),
		heroCtaStart: 'Lernen beginnen',
		heroCtaMore: 'Mehr erfahren',
		storeIntro: 'App verfügbar bei',
		storeGet: 'Jetzt bei',
		mockTitle: 'Tadschwid',
		mockSubtitle: 'Interaktives Handbuch',
		mockRules: 'Regeln',
		mockAudio: 'Audio',
		mockVideo: 'Video',
		mockVjezbe: 'Übungen',
		heroBadge: 'Für Kinder und Erwachsene, Anfänger und Fortgeschrittene',

		/* ----- Startseite: Was findest du hier ----- */
		featEyebrow: 'Inhalt',
		featTitle: 'Was findest du auf tedzvid.ba?',
		features: [
			{ title: 'Alle Regeln', text: 'übersichtlich und der Reihe nach' },
			{ title: 'Praktische Übungen', text: 'um dein Wissen zu testen' },
			{ title: 'Für den Unterricht', text: 'ideal für Koranschule und Unterricht' },
			{ title: 'Überall dabei', text: 'am Computer, Tablet und Handy' },
			{ title: 'Lernen, üben, wiederholen', text: 'jeden Tag ein Stück weiter' }
		],

		/* ----- Startseite: Über uns ----- */
		aboutEyebrow: 'Über uns',
		aboutTitle: 'Tadschwid für alle',
		aboutP1: (
			<React.Fragment>
				<strong>Tedzvid.ba</strong> ist die elektronische, interaktive Ausgabe des gedruckten Tadschwid-Handbuchs
				von Sejid ef. Strika, M.A. Es soll allen helfen, die anfangen, den Koran zu lesen – Kindern in der
				Koranschule ebenso wie Erwachsenen –, die grundlegenden Tadschwid-Regeln leichter zu lernen.
			</React.Fragment>
		),
		aboutP2:
			'Einfache Sprache und der Verzicht auf Fachwörter, so weit das möglich war, machen es für viel mehr Leserinnen und Leser zugänglich.',
		aboutP3: (
			<React.Fragment>
				Das Besondere an dieser Seite sind die <strong>interaktiven Beispiele</strong>: Ihre Aufnahme kannst du
				mit einem Klick auf das Wort anhören. Wir hoffen, dass tedzvid.ba den Muallimen (Koranlehrern) hilft, die
				Tadschwid-Regeln zu erklären – den Kindern in der Koranschule ebenso wie Erwachsenen, die gerade die
				arabische Schrift gelernt haben.
			</React.Fragment>
		),
		quoteText: '„Die Besten unter euch sind die, die den Koran lernen und ihn lehren.“',
		quoteCite: 'Al-Buchari',
		benefits: [
			{ title: 'Klare Erklärungen', text: 'der Tadschwid-Regeln, ohne komplizierte Fachwörter' },
			{ title: 'Audio-Beispiele', text: 'anhören und gleich anwenden' },
			{ title: 'Videolektionen', text: 'visuelles Lernen, das im Kopf bleibt' },
			{ title: 'Für jede Generation', text: 'nützlich für Kinder, Erwachsene und Lehrer' },
			{ title: 'Hilfe für die Praxis', text: 'Material, das Lernen, Lehren und Wiederholen leichter macht' }
		],
		aboutVideoEyebrow: 'Video',
		aboutVideoTitle: 'Sieh dir an, wie das Lernen auf tedzvid.ba aussieht',
		aboutVideoAlt: 'Tedzvid.ba – das Projekt stellt sich vor',

		/* ----- Startseite: Druckausgabe ----- */
		printEyebrow: 'Druckausgabe',
		printTitle: 'Ich möchte die Druckausgabe',
		printAlt: 'Druckausgabe des Tadschwid-Handbuchs',
		printText:
			'Tadschwid – das Handbuch für richtiges Koranlesen mit Übungen gibt es auch gedruckt. Informationen zur Druckausgabe bekommst du beim Autor:',
		author: 'Sejid ef. Strika, M.A.',

		/* ----- Startseite: Kontakt ----- */
		contactEyebrow: 'Kontakt',
		contactTitle: 'Schreib uns',
		contactText:
			'Wenn du Vorschläge, Anmerkungen oder Eindrücke hast, schreib sie uns ruhig – so können wir diese Seite besser machen.',
		fieldName: 'Vor- und Nachname',
		fieldEmail: 'E-Mail-Adresse',
		fieldPhone: 'Telefonnummer (optional)',
		fieldMessage: 'Schreib deine Nachricht',
		formOk: (
			<React.Fragment>
				Deine Nachricht wurde <strong>erfolgreich</strong> gesendet!
			</React.Fragment>
		),
		formErr: 'Beim Senden der Nachricht ist ein Fehler aufgetreten.',
		formClose: 'Schließen',
		formSend: 'Senden',

		/* ----- Fußzeile ----- */
		footVisit: 'Besuche',
		footVisitText: 'und beginne deinen Weg zu einem richtigeren Lesen von Allahs Buch.',
		footAbout:
			'Interaktives Handbuch für die Tadschwid-Regeln – einfach, Schritt für Schritt, für Kinder und Erwachsene, Anfänger und Fortgeschrittene.',
		footNav: 'Navigation',
		footPartners: 'Freunde des Projekts',
		footAuthor: 'Autor: Sejid ef. Strika, M.A.',

		/* ----- Übersicht der Lektionen ----- */
		lessonsEyebrow: 'Interaktives Handbuch',
		lessonsTitle: 'Lektionen',
		lessonsText:
			'Zweiundzwanzig Tadschwid-Regeln, Schritt für Schritt – alle Lektionen sind offen, ganz ohne Anmeldung. Die Lektionen sind in fünf Gruppen aufgeteilt, und am Ende jeder Gruppe steht ein Quiz.',
		cardLekcija: 'Lektion',
		cardVjezba: 'Übung',
		cardVideo: 'Video',
		cardTabela: 'Tabelle',
		cardZnakovi: 'Zeichen',

		/* ----- Lektionsgruppen und Gruppenquiz ----- */
		grupaEyebrow: (b) => `Gruppe ${b}`,
		grupaNaslov: (od, doLekcije) => `Lektionen ${od}–${doLekcije}`,
		grupaKvizNaslov: (b) => `Gruppenquiz ${b}`,
		grupaKvizEyebrow: (b) => `Test zu Gruppe ${b}`,
		grupaKarticaTekst: (n, od, doLekcije, prolaz) =>
			`${n} Fragen aus den Lektionen ${od}–${doLekcije}. Zum Bestehen brauchst du mindestens ${prolaz} richtige Antworten.`,
		grupaOpen: 'Gruppenquiz öffnen',
		grupaIntroText: (n, prolaz, od, doLekcije) =>
			`${n} Fragen aus den Lektionen ${od}–${doLekcije}, in gemischter Reihenfolge und jedes Mal anders. Zum Bestehen brauchst du mindestens ${prolaz} richtige Antworten.`,
		grupaLockedTitle: 'Dieses Gruppenquiz ist gesperrt',
		grupaLockedUser: (b) => `Bestehe zuerst das Gruppenquiz ${b}, dann wird das nächste freigeschaltet.`,
		grupaLockedGuest:
			'Für alle Quiz brauchst du ein Konto. Melde dich an oder erstelle ein kostenloses Konto – die Gruppenquiz werden dann der Reihe nach freigeschaltet.',
		grupaUnlocked: (b) => `Das Gruppenquiz ${b} ist jetzt freigeschaltet.`,
		grupaAllDone: 'Alle Gruppen sind bestanden – jetzt kommt das Abschlussquiz über den ganzen Tadschwid.',
		grupaAlreadyPassed: 'Das Quiz ist schon bestanden und das nächste ist freigeschaltet – üb so oft du willst.',
		grupaHint:
			'Alle Lektionen sind für alle offen; für die Quiz brauchst du ein Konto. Das Quiz am Ende einer Lektion ist eine Übung, das Gruppenquiz ist der richtige Test.',

		/* ----- Lehrer: Quiz aus mehreren Lektionen ----- */
		navMualim: 'Lehrer',
		mualimEyebrow: 'Für Lehrer',
		mualimTitle: 'Quiz erstellen',
		mualimText: 'Wähle die Lektionen und die Anzahl der Fragen – das Quiz wird aus den Fragen dieser Lektionen zusammengestellt.',
		mualimSelect: 'Lektionen',
		mualimAll: 'Alle',
		mualimNone: 'Keine',
		mualimCount: 'Anzahl der Fragen',
		mualimCountAll: 'Alle',
		mualimCreate: 'Quiz erstellen',
		mualimNew: 'Neue Auswahl',
		mualimPicked: (l, p) => `Ausgewählte Lektionen: ${l} · verfügbare Fragen: ${p}`,
		mualimEmpty: 'Wähle mindestens eine Lektion.',
		mualimForbidden: 'Diese Seite ist für Lehrerinnen und Lehrer gedacht.',
		mualimQuizTitle: 'Lehrer-Quiz',
		mualimIntroText: (n, prolaz) =>
			`${n} Fragen aus den ausgewählten Lektionen, in zufälliger Reihenfolge. Zum Bestehen brauchst du mindestens ${prolaz} richtige Antworten. Das Ergebnis wird nicht im Fortschritt gespeichert.`,
		mualimPassedText: 'Das Quiz ist bestanden. Das Ergebnis eines Lehrer-Quiz wird nicht im Fortschritt gespeichert.',

		/* ----- einzelne Lektion ----- */
		lekcijaEyebrow: 'Lektion',
		lekcija: 'LEKTION',
		vjezba: 'ÜBUNG',
		videoLekcija: 'VIDEOLEKTION',
		videoTitle: 'Videolektion',
		zatvori: 'Schließen',
		prethodna: 'Zurück',
		sljedeca: 'Weiter',
		sveLekcije: 'Alle Lektionen',
		prethodnaAria: 'Vorherige Lektion',
		sljedecaAria: 'Nächste Lektion',
		tabelaNaslov: 'Übersicht in der Tabelle:',
		napomena: 'HINWEIS',

		/* ----- Audio ----- */
		audioHint: 'Klick auf ein Wort oder einen Vers, um es zu hören. Ein neuer Klick stoppt die vorherige Aufnahme.',
		audioPlayAll: 'Alles abspielen',
		audioStopAll: 'Stoppen',
		audioWordTitle: 'Zum Anhören klicken',
		audioPlayer: 'Audioplayer',
		audioPause: 'Pause',
		audioReplay: 'Erneut abspielen',
		audioResume: 'Fortsetzen',
		audioPrevTrack: 'Vorherige Aufnahme',
		audioNextTrack: 'Nächste Aufnahme',
		audioPosition: 'Position in der Aufnahme',
		audioUnavailable: 'Diese Aufnahme ist nicht verfügbar.',
		audioStopClose: 'Stoppen und schließen',

		/* ----- Erklärungsblase beim Wort, das gerade abgespielt wird ----- */
		napomenaAria: 'Erklärung',
		napomenaPomjeri: 'Ziehen, um die Erklärung zu verschieben',
		napomenaTip: {
			dugo: 'Wird lang gesprochen',
			kratko: 'Wird kurz gesprochen',
			krupno: 'Wird dick gesprochen',
			tanko: 'Wird dünn gesprochen',
			duzina: 'Dehnung',
			stajanje: 'Anhalten',
			uklapanje: 'Verschmelzung',
			nos: 'Durch die Nase',
			odskakanje: 'Abprallen',
			pretvaranje: 'Verwandlung',
			skrivanje: 'Verstecken',
			cisto: 'Deutlich',
			napomena: 'Hinweis'
		},

		/* ----- Benutzerkonto ----- */
		navPrijava: 'Anmelden',
		navRegistracija: 'Registrieren',
		navProfil: 'Mein Fortschritt',
		navOdjava: 'Abmelden',
		authEyebrow: 'Dein Konto',
		loginTitle: 'Anmelden',
		loginText: 'Melde dich an, damit dein Fortschritt gespeichert wird und die nächsten Quiz freigeschaltet werden.',
		registerTitle: 'Konto erstellen',
		registerText:
			'Erstelle ein kostenloses Konto: Dein Fortschritt wird gespeichert, und ein bestandenes Gruppenquiz schaltet das nächste frei.',
		fieldPassword: 'Passwort',
		fieldPassword2: 'Passwort wiederholen',
		passwordHint: 'Mindestens 6 Zeichen.',
		btnLogin: 'Anmelden',
		btnRegister: 'Konto erstellen',
		btnWorking: 'Einen Moment…',
		switchToRegister: 'Noch kein Konto?',
		switchToLogin: 'Hast du schon ein Konto?',
		authErrors: {
			bad_credentials: 'E-Mail-Adresse oder Passwort ist falsch.',
			email_exists: 'Ein Konto mit dieser E-Mail-Adresse gibt es schon.',
			bad_email: 'Gib eine gültige E-Mail-Adresse ein.',
			bad_password: 'Das Passwort muss mindestens 6 Zeichen haben.',
			bad_name: 'Gib deinen Namen ein (mindestens 2 Zeichen).',
			bad_username: 'Benutzername: 3–20 Zeichen, Kleinbuchstaben, Ziffern, Punkt, Bindestrich oder Unterstrich.',
			username_exists: 'Dieser Benutzername ist vergeben – wähle einen anderen.',
			passwords_differ: 'Die Passwörter stimmen nicht überein.',
			too_many: 'Zu viele Versuche. Probier es in ein paar Minuten noch einmal.',
			network: 'Der Server ist nicht erreichbar. Prüfe deine Verbindung und probier es noch einmal.',
			unauthorized: 'Deine Sitzung ist abgelaufen – melde dich noch einmal an.',
			locked: 'Dieses Quiz ist noch gesperrt.',
			server: 'Etwas ist schiefgelaufen. Probier es noch einmal.'
		},

		/* ----- mein Fortschritt ----- */
		profilEyebrow: 'Mein Fortschritt',
		profilText: (prolaz, ukupno) =>
			`Alle Lektionen sind offen. Der Fortschritt wird über die Gruppenquiz verfolgt: Zum Bestehen brauchst du mindestens ${prolaz} von ${ukupno} richtigen Antworten.`,
		profilPassed: 'Bestandene Lektionen',
		profilGrupe: 'Bestandene Gruppen',
		profilNext: 'Nächster Schritt',
		profilAllDone: 'Alle Lektionen sind bestanden – super gemacht!',
		statusPolozeno: 'Bestanden',
		statusNijePolozeno: 'Nicht bestanden',
		statusOtkljucano: 'Freigeschaltet',
		statusZakljucano: 'Gesperrt',

		/* ----- Lektionskarten ----- */
		cardKviz: 'Quiz',
		cardUnlockGuest: 'Melde dich an oder erstelle ein kostenloses Konto, damit dein Fortschritt gespeichert wird und die nächsten Quiz freigeschaltet werden.',
		cardGoQuiz: (n) => `Quiz zu Lektion ${n}`,

		/* ----- Quiz ----- */
		kviz: 'QUIZ',
		kvizIntroTitle: 'Teste dein Wissen',
		kvizIntroText: (prolaz, ukupno) =>
			`${ukupno} Fragen zu dieser Lektion – eine Übung vor dem Gruppenquiz. Zum Bestehen brauchst du mindestens ${prolaz} richtige Antworten.`,
		kvizStart: 'Quiz starten',
		kvizRestart: 'Erneut versuchen',
		kvizQuestion: (i, n) => `Frage ${i} von ${n}`,
		kvizProgressAria: 'Fortschritt im Quiz',
		kvizAnswer: 'Antworten',
		kvizNext: 'Nächste Frage',
		kvizFinish: 'Ergebnis ansehen',
		kvizCorrect: 'Richtig!',
		kvizWrong: 'Nicht ganz.',
		kvizCorrectIs: 'Die richtige Antwort:',
		kvizScore: (t, n) => `${t} von ${n} richtig`,
		kvizPassed: 'Super gemacht, das Quiz ist bestanden!',
		kvizFailedTitle: 'Nicht bestanden',
		kvizFailed: (prolaz) =>
			`Zum Bestehen brauchst du mindestens ${prolaz} richtige Antworten. Lies die Lektion noch einmal und probier es erneut.`,
		kvizVjezbaPassed: (b) => `Die Lektion sitzt. Teste dein Wissen über die ganze Gruppe im Gruppenquiz ${b}.`,
		kvizNextLesson: (n) => `Lektion ${n}`,
		kvizSaving: 'Fortschritt wird gespeichert…',
		kvizSaved: 'Der Fortschritt ist gespeichert.',
		kvizSaveError: 'Der Fortschritt wurde nicht gespeichert – prüfe deine Verbindung.',
		kvizRetrySave: 'Noch einmal speichern',
		kvizLoginTitle: 'Für das Quiz musst du dich anmelden',
		kvizLoginText:
			'Alle Lektionen sind für alle offen, aber für jedes Quiz musst du dich anmelden – so wird dein Ergebnis gespeichert, dein Fortschritt verfolgt und deine Punkte zählen in der Bestenliste. Das Konto ist kostenlos.',
		kvizBest: (b, n) => `Bestes Ergebnis: ${b} von ${n}`,
		kvizCorrectCount: (t, n) => `Richtig: ${t} · Falsch: ${n - t}`,

		/* ----- Abschlussquiz ----- */
		zavrsniEyebrow: 'Test über den ganzen Tadschwid',
		zavrsniTitle: 'Abschlussquiz',
		zavrsniText: (n, prolaz) =>
			`${n} Fragen aus allen 22 Lektionen, in zufälliger Reihenfolge. Zum Bestehen brauchst du mindestens ${prolaz} richtige Antworten.`,
		zavrsniCardText: (n) => `${n} Fragen aus allen Lektionen – ein Test über den ganzen Tadschwid.`,
		zavrsniOpen: 'Abschlussquiz öffnen',
		zavrsniIntroText: (n, prolaz) =>
			`${n} Fragen aus allen 22 Lektionen, in zufälliger Reihenfolge. Zum Bestehen brauchst du mindestens ${prolaz} richtige Antworten. Wenn du die Seite schließt, kannst du dort weitermachen, wo du aufgehört hast, solange der Browser offen bleibt.`,
		zavrsniResume: (i, n) => `Weiter (Frage ${i} von ${n})`,
		zavrsniRestart: 'Von vorn beginnen',
		zavrsniLockedTitle: 'Das Abschlussquiz ist gesperrt',
		zavrsniLockedUser: (b) => `Das Abschlussquiz wird freigeschaltet, wenn du alle fünf Gruppenquiz bestanden hast. Gerade bist du bei Gruppe ${b}.`,
		zavrsniLockedGuest:
			'Für jedes Quiz musst du dich anmelden, und das Abschlussquiz wird freigeschaltet, wenn alle fünf Gruppenquiz bestanden sind. Melde dich an oder erstelle ein kostenloses Konto.',
		zavrsniPassed: 'Super gemacht, das Abschlussquiz ist bestanden!',
		zavrsniPassedText: 'Der ganze Tadschwid ist durchgearbeitet und geprüft – super gemacht!',
		zavrsniFailed: (prolaz) =>
			`Zum Bestehen brauchst du mindestens ${prolaz} richtige Antworten. Wiederhole die Lektionen mit Fehlern und probier es erneut.`,
		zavrsniReview: 'Empfehlung zum Wiederholen:',
		zavrsniMistakes: (n) => (n === 1 ? '1 Fehler' : `${n} Fehler`),
		profilEverything: 'Alle Lektionen und das Abschlussquiz sind bestanden – super gemacht!',
		fieldLogin: 'E-Mail-Adresse oder Benutzername',
		fieldUsername: 'Benutzername',
		usernameHint: '3–20 Zeichen: Kleinbuchstaben, Ziffern, Punkt, Bindestrich oder Unterstrich. Wird in der Bestenliste angezeigt.',

		/* ----- Bestenliste ----- */
		navRang: 'Bestenliste',
		rangEyebrow: 'Wettbewerb',
		rangTitle: 'Bestenliste',
		rangText:
			'Die besten Lernenden dieser Woche, dieses Monats und insgesamt. Punkte sind richtige Antworten: Es zählt das beste Ergebnis jedes Quiz im Zeitraum.',
		rangPeriod: { sedmica: 'Diese Woche', mjesec: 'Dieser Monat', sve: 'Insgesamt' },
		rangOd: (d) => `Seit dem ${d}`,
		rangLoading: 'Wird geladen…',
		rangEmpty: 'In diesem Zeitraum gibt es noch keine Ergebnisse. Mach ein Quiz und sei der Erste!',
		rangYou: 'du',
		rangPoints: 'Punkte',
		rangPassed: (n) => (n === 1 ? '1 bestandenes Quiz' : `${n} bestandene Quiz`),
		rangYourRank: (r, b) => `Dein Platz: Platz ${r} (${b} Punkte).`,
		rangNoPoints: 'Du hast in diesem Zeitraum noch keine Punkte – mach ein Quiz!',
		rangGuest: 'Melde dich an oder erstelle ein Konto, damit auch deine Ergebnisse auf der Liste stehen.',
		rangRules: 'Dasselbe Quiz noch einmal zu machen bringt keine zusätzlichen Punkte – es zählt nur dein bestes Ergebnis. Die Woche beginnt am Montag.',

		/* ----- Spielecke ----- */
		navIgra: 'Spiele',
		igraEyebrow: 'Spielen und lernen',
		igraNaslov: 'Spielecke',
		igraOpis:
			'Sechs kurze Spiele zum Üben der Tadschwid-Regeln: die Regel nach Gehör erkennen, sie im Wort und im Vers finden, eine Regel mit ihrem Beispiel verbinden, Buchstaben einsortieren und Paare finden. Aufnahmen, Buchstaben, Beispiele und Verse kommen aus den Lektionen selbst.',
		igraNapomena:
			'Die Spiele sind eine Ergänzung zu den Lektionen und wirken sich nicht auf deinen Fortschritt und nicht auf die Bestenliste aus – die Ergebnisse bleiben nur in diesem Browser.',
		igraBezRekorda: 'Noch kein Rekord',
		igraZvukUkljucen: 'Ton an',
		igraZvukIskljucen: 'Ton aus',
		igraKreni: 'Spielen',
		igraPonovo: 'Noch einmal',
		igraNastavi: 'Fortsetzen',
		igraDalje: 'Weiter',
		igraRezultat: 'Ergebnis',
		igraBodovi: 'Punkte',
		igraPotezi: 'Züge',
		igraSrca: (n) => `Noch ${n} Leben`,
		igraLekcija: (n) => `Lektion ${n}`,
		igraRekordBodovi: (n) => `Bestes Ergebnis: ${n} Punkte`,
		igraRekordMem: (p, v) => `Bestwert: ${p} Züge, ${v}`,
		igraKraj: 'Spiel vorbei',
		igraPobjeda: 'Super, du hast alle Stufen geschafft!',
		igraBravo: 'Richtig!',
		igraNetacno: 'Nicht ganz.',
		igraIsteklo: 'Die Zeit ist um.',
		igraTacnoJe: (naziv) => `Richtig ist: ${naziv}.`,
		igraOtvoriLekciju: (n) => `Lektion ${n} öffnen`,
		igraPoslusaj: 'Anhören',
		igraUhoNaslov: 'Erkenne, was du hörst',
		igraUhoUvod: (n) =>
			`Die Aufnahme läuft, das Wort bleibt versteckt – die Regel musst du mit dem Ohr erkennen. ${n} Aufnahmen und drei Leben.`,
		igraUhoPitanje: 'Welche Regel hörst du?',
		igraUhoPonovo: 'Noch einmal anhören',
		igraUhoPokazi: 'Wort zeigen',
		igraUhoSkriveno: 'Das Wort ist versteckt – hör dir die Aufnahme an.',
		igraUhoZavirio: 'Das Wort ist zu sehen, darum bringt die Antwort nur halbe Punkte.',
		igraUhoNemaZapisa: 'Die Aufnahme lässt sich nicht abspielen, darum ist das Wort zu sehen.',
		igraUhoGotovo: 'Gutes Gehör!',
		igraUhoKraj: (t, uk) => `Richtig erkannt: ${t} von ${uk} Aufnahmen.`,
		igraTrkaNaslov: 'Wettlauf durch die Regeln',
		igraTrkaUvod: (s) =>
			`Erkenne die Regel im hervorgehobenen Teil des Wortes. Du hast ${s} Sekunden pro Frage und drei Leben – eine schnellere Antwort bringt mehr Punkte.`,
		igraTrkaPitanje: 'Welche Regel steckt im hervorgehobenen Teil?',
		igraTrkaKraj: (t, uk, niz) => `Richtige Antworten: ${t} von ${uk}. Längste Serie: ${niz}.`,
		igraMemNaslov: 'Finde die Paare',
		igraMemUvod: 'Dreh zwei Karten um und verbinde den Namen der Regel mit einem Beispiel aus der Lektion.',
		igraMemBravo: 'Alle Paare gefunden!',
		igraMemKraj: (p) => `Du hast alle ${p} Paare gefunden.`,
		igraParova: (n) => `${n} Paare`,
		igraParovaKratko: 'Paare',
		igraTezina: 'Schwierigkeit',
		igraKarta: (n) => `Karte ${n}`,
		igraKolo: (n) => `Runde ${n}`,
		igraPomoc: 'Tipp',
		igraNadjiNaslov: 'Finde die Regel',
		igraNadjiUvod: (n) =>
			`In ${n} Versen sollst du das Wort zeigen, in dem die gesuchte Regel steckt. Nach drei Fehlern ist das Spiel vorbei.`,
		igraNadjiPitanje: 'In welchem Wort steckt diese Regel?',
		igraNadjiAjet: (n) => `Vers ${n}`,
		igraNadjiUToj: (imena) => `In diesem Wort steckt: ${imena}. Such weiter.`,
		igraNadjiNemaPravila: 'In diesem Wort ist keine einzige Regel markiert.',
		igraNadjiGotovo: 'Alle Verse geschafft!',
		igraNadjiKraj: (t, uk) => `Auf Anhieb getroffen: ${t} von ${uk} Versen.`,
		igraPoveziNaslov: 'Verbinde die Regeln',
		igraPoveziUvod: (p, k) =>
			`Tipp links auf eine Regel und rechts auf das Beispiel – ein richtiges Paar bleibt mit einem Faden in der Farbe der Regel verbunden. ${k} Runden mit je ${p} Paaren.`,
		igraPoveziPitanje: 'Verbinde jede Regel mit dem Beispiel, in dem sie steckt.',
		igraPoveziKolo: (b) => `Punkte bisher: ${b}. Die nächste Runde bringt fünf neue Regeln.`,
		igraPoveziGotovo: 'Alles verbunden!',
		igraPoveziKraj: (uk, g, v) => `${uk} Paare verbunden, Fehler: ${g}, Zeit: ${v}.`,
		igraRazvrstajNaslov: 'Buchstaben einsortieren',
		igraRazvrstajUvod: (k) =>
			`Zieh einen Buchstaben in die Kiste der Regel, zu der er gehört – oder tipp erst den Buchstaben an, dann die Kiste. ${k} Runden und drei Leben.`,
		igraRazvrstajPitanje: 'Welcher Buchstabe gehört zu welcher Regel?',
		igraRazvrstajTacno: (naziv) => `gehört zu ${naziv}.`,
		igraRazvrstajNetacno: (naziv) => `ist kein Buchstabe der Regel ${naziv}.`,
		igraRazvrstajGotovo: 'Jeder Buchstabe ist an seinem Platz.',
		igraRazvrstajKolo: (b) => `Punkte bisher: ${b}. Die nächste Runde bringt andere Regeln.`,
		igraRazvrstajKraj: (k, uk) => `Du hast ${k} von ${uk} Runden geschafft.`,
		igre: {
			uho: {
				naslov: 'Erkenne, was du hörst',
				opis: 'Die Aufnahme läuft, das Wort bleibt versteckt – die Regel musst du mit dem Ohr erkennen, wie im Unterricht.',
				kako: [
					'110 Aufnahmen aus allen Lektionen, das Wort erscheint erst nach deiner Antwort',
					'Du kannst die Aufnahme so oft anhören, wie du willst',
					'Wer beim Wort spickt, bekommt nur halbe Punkte'
				],
				uputa: 'Am besten mit Kopfhörern: Ghunna und Verschmelzung hört man leichter, als man sie sieht.'
			},
			trka: {
				naslov: 'Wettlauf durch die Regeln',
				opis: 'Ein Wort aus der Lektion mit einem hervorgehobenen Teil – erkenne die Regel, bevor die Zeit um ist.',
				kako: [
					'12 Sekunden pro Frage',
					'Beispiele und Erklärungen aus allen Lektionen',
					'Eine schnellere Antwort bringt mehr Punkte'
				],
				uputa: 'Nach jeder Antwort bekommst du eine Erklärung und einen Link zur Lektion.'
			},
			nadji: {
				naslov: 'Finde die Regel',
				opis: 'Ein echter Vers aus den Bonuslektionen – zeig das Wort, in dem die gesuchte Regel steckt.',
				kako: [
					'Verse aus Al-Fatiha, Ayat al-Kursi, Al-Mulk, Ya-Sin und dem Dschuz Amma',
					'Ein Fehler verrät dir, welche Regel in diesem Wort steckt',
					'Jeden Vers kannst du dir auch anhören'
				],
				uputa: 'Tipp das Wort an, in dem du die gesuchte Regel siehst; Farbe und Erklärung kommen nach der Antwort.'
			},
			povezi: {
				naslov: 'Verbinde die Regeln',
				opis: 'Links die Namen der Regeln, rechts die Beispiele – zieh einen Faden zwischen die, die zusammengehören.',
				kako: [ 'Drei Runden mit je fünf Paaren', 'Eine Runde ohne Fehler bringt zusätzliche Punkte', 'Die Fäden haben dieselben Farben wie in den Bonuslektionen' ],
				uputa: 'Tipp erst die eine, dann die andere Seite. Zu jedem verbundenen Paar gibt es eine Erklärung und eine Aufnahme.'
			},
			razvrstaj: {
				naslov: 'Buchstaben einsortieren',
				opis: 'Sortier die Buchstaben: Jeder Buchstabe kommt in die Kiste der Regel, zu der er gehört.',
				kako: [ 'Fünf Runden, drei bis vier Kisten', 'Den Buchstaben ziehen oder antippen und dann einsortieren', 'Der Tipp erinnert dich, welche Buchstaben zu welcher Regel gehören' ],
				uputa: 'Auf dem Touchscreen am leichtesten: Finger auf den Buchstaben, dann auf die Kiste.'
			},
			memorija: {
				naslov: 'Finde die Paare',
				opis: 'Memory: Verbinde den Namen der Regel mit einem Beispiel, in dem diese Regel steckt.',
				kako: [ '6 oder 8 Paare', 'Zu jedem Paar gibt es eine Erklärung', 'Ziel sind weniger Züge und weniger Zeit' ],
				uputa: 'Ein gutes Spiel für die Koranschule: Es geht auch am Beamer, in zwei Mannschaften.'
			}
		},

		/* ----- Verwaltung ----- */
		navAdmin: 'Admin',
		adminEyebrow: 'Verwaltung',
		adminTitle: 'Benutzer',
		adminText: 'Übersicht aller registrierten Benutzer und ihres Fortschritts.',
		adminForbidden: 'Diese Seite ist nur für den Administrator zugänglich.',
		adminLoading: 'Benutzer werden geladen…',
		adminStatUsers: 'Benutzer',
		adminStatActiveWeek: 'Diese Woche aktiv',
		adminStatFinal: 'Abschluss bestanden',
		adminStatAttempts: 'Bearbeitete Quiz',
		adminSearch: 'Nach Name oder E-Mail suchen…',
		adminShown: (n, t) => `${n} von ${t}`,
		adminColUser: 'Benutzer',
		adminColRole: 'Rolle',
		adminColCreated: 'Registriert',
		adminColLast: 'Letzte Aktivität',
		adminColLessons: 'Lektionen',
		adminColGroups: 'Gruppen',
		adminColFinal: 'Abschluss',
		adminColAttempts: 'Versuche',
		adminRole: { admin: 'Admin', mualim: 'Muallim', demo: 'Demo', korisnik: 'Benutzer' },
		adminNever: 'noch nichts',
		adminNoUsers: 'Kein Benutzer passt zur Suche.',
		adminDetailHint: 'Klick eine Zeile an: Fortschritt pro Lektion und Rolle ändern.',
		adminRoleTitle: 'Rolle',
		adminRoleText:
			'Ein Lehrer hat Zugang zu allem außer der Verwaltung: alle Quiz sind für ihn freigeschaltet und er kann für seinen Unterricht ein Quiz aus beliebigen Lektionen zusammenstellen.',
		adminRoleLocked: 'Die Rolle dieses Kontos wird hier nicht geändert (Administrator, eingebautes oder eigenes Konto).',
		adminMakeMualim: 'Als Lehrer festlegen',
		adminMakeKorisnik: 'Zurück zum Benutzer',
		adminRoleSaving: 'Wird gespeichert…',
		adminRoleError: 'Die Rolle wurde nicht geändert – probier es noch einmal.',
		adminCell: (n, p) => (p ? `Lektion ${n}: bestes Ergebnis ${p.najbolje}/10, Versuche: ${p.pokusaji}` : `Lektion ${n}: nicht bearbeitet`),
		adminCellGrupa: (b, p) =>
			p ? `Gruppenquiz ${b}: bestes Ergebnis ${p.najbolje}/20, Versuche: ${p.pokusaji}` : `Gruppenquiz ${b}: nicht bearbeitet`,
		adminCellFinal: (p) => (p ? `Abschlussquiz: bestes Ergebnis ${p.najbolje}/100, Versuche: ${p.pokusaji}` : 'Abschlussquiz: nicht bearbeitet'),
		adminLegend: { ok: 'bestanden', partial: 'nicht bestanden', none: 'nicht bearbeitet' },

		/* ----- Bonuslektion: Sure Ya-Sin ----- */
		jasinEyebrow: 'Bonuslektion',
		jasinNaslov: 'Sure Ya-Sin',
		jasinPodnaslov: 'Die ganze Sure, Seite für Seite, mit Farben und Erklärungen zu allen Tadschwid-Regeln aus den 22 Lektionen.',
		jasinUvod:
			'Jede Farbe im Text ist eine Regel. Klick auf einen farbigen Buchstaben und lies, warum die Regel dort gilt, oder öffne die Liste aller Regeln unter dem Vers. Gelesen von Mahmud Chalil al-Husari.',
		suraPrivremeniZvuk: 'Die Aufnahme kommt vorübergehend aus einer externen Quelle (everyayah.com), bis wir eine eigene aufgenommen haben.',
		jasinOSuri: (n, a, b) =>
			`Die Sure Ya-Sin ist die 36. Sure des Korans: ${n} Verse, in Mekka offenbart. Im Mus-haf umfasst sie die Seiten ${a}–${b}, und genau so ist sie hier aufgeteilt.`,
		jasinStranica: (n) => `Seite ${n}`,
		jasinStranicaMushafa: (n) => `Mus-haf-Seite ${n}`,
		jasinNemaNaStranici: 'nicht auf dieser Seite',
		jasinAjeti: (a, b) => `Verse ${a}–${b}`,
		suraLegenda: 'Regelfarben',
		suraSve: 'Alle Farben',
		suraManje: 'Weniger Farben',
		suraNista: 'Ohne Farben',
		suraPuta: (n) => `${n}×`,
		suraLekcijaKratko: (n) => `Lektion ${n}`,
		suraBezLekcije: 'behandelt in Lektion 5 und 6',
		suraPravilaBroj: (n) => (n === 1 ? '1 Regel' : `${n} Regeln`),
		suraSvaObjasnjenja: 'Erklärungen zu allen Versen',
		suraPratiRijec: 'Wort mitverfolgen',
		suraOdRijeci: 'Ab diesem Wort abspielen',
		suraPustiAjet: (n) => `Vers ${n} anhören`,
		jasinPustiStranicu: 'Ganze Seite abspielen',
		suraZaustavi: 'Stoppen',
		jasinOznaka: (n) => `Ya-Sin, Vers ${n}`,
		jasinPrethodna: 'Vorherige Seite',
		jasinSljedeca: 'Nächste Seite',
		jasinKarticaTekst: 'Die ganze Sure Ya-Sin mit Farben und Erklärungen zu allen Regeln, die du gelernt hast – als Belohnung am Ende des Kurses.',
		jasinOtvori: 'Sure Ya-Sin öffnen',

		/* ----- Bonuslektion: die Suren des Dschuz Amma ----- */
		ammeEyebrow: 'Bonuslektion',
		ammeNaslov: 'Dschuz Amma',
		ammePodnaslov: 'Der dreißigste Dschuz des Korans – die Suren, die am häufigsten auswendig gelernt werden – mit Farben und Erklärungen zu allen Tadschwid-Regeln.',
		ammeUvod:
			'Die Sure wählst du aus der Liste, zu jeder gehört die Basmala. Jede Farbe im Text ist eine Regel: klick auf einen farbigen Buchstaben und lies, warum sie dort gilt, oder öffne die Liste der Regeln unter dem Vers. Die Farben in der Legende zählen für die geöffnete Sure.',
		ammeODzuzu: (n, a, b) =>
			`Der Dschuz Amma ist der dreißigste und letzte Dschuz des Korans: ${n} Suren, von der ${a}. Sure An-Naba bis zur ${b}. Sure An-Nas. Es sind dieselben Farben und dieselben Erklärungen wie in der Bonuslektion zur Sure Ya-Sin.`,
		ammeNemaUSuri: 'nicht in dieser Sure',
		ammeAjeta: (n) => (n === 1 ? '1 Vers' : `${n} Verse`),
		ammeMekkanska: 'mekkanisch',
		ammeMedinska: 'medinensisch',
		ammeBesmela: 'Basmala',
		ammeBesmelaOznaka: 'Basmala',
		ammePustiSuru: 'Ganze Sure abspielen',
		ammePrethodna: 'Vorherige Sure',
		ammeSljedeca: 'Nächste Sure',
		ammeOznaka: (naziv, n) => `${naziv}, Vers ${n}`,
		ammeKarticaTekst: 'Der dreißigste Dschuz des Korans, Sure für Sure, mit Basmala, Farben und Erklärungen zu allen Regeln, die du gelernt hast.',
		ammeOtvori: 'Dschuz Amma öffnen',

		/* ----- Bonuslektionen mit kürzeren Abschnitten (Al-Fatiha, Ayat al-Kursi, Al-Mulk) ----- */
		bonus: {
			fatiha: {
				poStranicama: false,
				eyebrow: 'Bonuslektion',
				naslov: 'Sure Al-Fatiha',
				podnaslov:
					'Die Sure, die in jeder Gebetseinheit gelesen wird, mit Farben und Erklärungen zu allen Tadschwid-Regeln aus den 22 Lektionen.',
				uvod:
					'Jede Farbe im Text ist eine Regel. Klick auf einen farbigen Buchstaben und lies, warum die Regel dort gilt, oder öffne die Liste aller Regeln unter dem Vers. Gelesen von Mahmud Chalil al-Husari.',
				osuri: (d) =>
					`Die Sure Al-Fatiha ist die erste Sure des Korans: ${d.brojAjeta} Verse, in Mekka offenbart. Sie wird in jeder Gebetseinheit gelesen, darum lohnt es sich, sie Buchstabe für Buchstabe durchzugehen.`,
				pusti: 'Ganze Sure abspielen',
				prethodna: 'Vorheriger Teil',
				sljedeca: 'Nächster Teil',
				nema: 'nicht in dieser Sure',
				oznaka: (n) => `Al-Fatiha, Vers ${n}`,
				karticaTekst: 'Die Sure, die du in jeder Gebetseinheit liest, Buchstabe für Buchstabe, mit einer Erklärung zu jeder Regel, die du gelernt hast.',
				otvori: 'Sure Al-Fatiha öffnen'
			},
			kursij: {
				poStranicama: false,
				eyebrow: 'Bonuslektion',
				naslov: 'Ayat al-Kursi',
				podnaslov: 'Der Vers, der am häufigsten auswendig gelernt wird, Wort für Wort, mit Erklärungen zu allen Tadschwid-Regeln.',
				uvod:
					'Jede Farbe im Text ist eine Regel. Klick auf einen farbigen Buchstaben und lies, warum die Regel dort gilt, oder öffne die Liste aller Regeln unter dem Vers. Gelesen von Mahmud Chalil al-Husari.',
				osuri: () =>
					'Ayat al-Kursi ist der 255. Vers der Sure Al-Baqara und einer der Verse, die am häufigsten auswendig gelernt werden. Hier ist er in alle Regeln aus den 22 Lektionen zerlegt.',
				pusti: 'Vers abspielen',
				prethodna: 'Vorheriger Teil',
				sljedeca: 'Nächster Teil',
				nema: 'nicht in diesem Vers',
				oznaka: () => 'Ayat al-Kursi',
				karticaTekst: 'Ayat al-Kursi, Wort für Wort, mit einer Erklärung zu jeder Regel, die du gelernt hast.',
				otvori: 'Ayat al-Kursi öffnen'
			},
			mulk: {
				poStranicama: true,
				eyebrow: 'Bonuslektion',
				naslov: 'Sure Al-Mulk',
				podnaslov:
					'Die ganze Sure, Seite für Seite, mit Farben und Erklärungen zu allen Tadschwid-Regeln aus den 22 Lektionen.',
				uvod:
					'Jede Farbe im Text ist eine Regel. Klick auf einen farbigen Buchstaben und lies, warum die Regel dort gilt, oder öffne die Liste aller Regeln unter dem Vers. Gelesen von Mahmud Chalil al-Husari.',
				osuri: (d) =>
					`Die Sure Al-Mulk ist die 67. Sure des Korans: ${d.brojAjeta} Verse, in Mekka offenbart. Im Mus-haf umfasst sie die Seiten ${d
						.odjeljci[0].stranica}–${d.odjeljci[d.odjeljci.length - 1].stranica}, und genau so ist sie hier aufgeteilt.`,
				pusti: 'Ganze Seite abspielen',
				prethodna: 'Vorherige Seite',
				sljedeca: 'Nächste Seite',
				nema: 'nicht auf dieser Seite',
				oznaka: (n) => `Al-Mulk, Vers ${n}`,
				karticaTekst: 'Die ganze Sure Al-Mulk mit Farben und Erklärungen zu allen Regeln, die du gelernt hast.',
				otvori: 'Sure Al-Mulk öffnen'
			}
		}
	}
};

export function useUI() {
	return usePick(UI);
}

export default UI;
