## React Tedžvid

Osnovni repozitorij za React Tedžvid (tedzvid.ba).

### Pokretanje lokalno

```
npm install --legacy-peer-deps
npm run server   # API + posluživanje builda (port 3002)
npm start        # CRA dev server (port 3000), /api se proxy-ra na 3002
```

Produkcija (Railway): `npm run build`, zatim `npm run serve` – isti Node server poslužuje `build/` i API.

### Okvir i stil

React **19**, građeno s `react-scripts` 5 (CRA). Ulaz je `src/index.js` – montira se preko `createRoot`;
`ReactDOM.render` više ne postoji, pa se splash u mobilnoj aplikaciji gasi iz efekta, a ne iz povratnog poziva.

Izgled stoji na **Bootstrapu 4** (samo CSS, `bootstrap/dist/css/bootstrap.css`) i našem SCSS-u
(`src/theme.scss`, `src/App.scss`, `src/igra.scss`).

Paketa `react-bootstrap` **nema** – komponente koje smo koristili (`Container`, `Row`, `Col`, `Table`,
`Button`, `Modal`) stoje u **`src/ui/Bootstrap.js`**. Razlog: react-bootstrap 1.x animira modal preko
`react-transition-group`, a on zove `ReactDOM.findDOMNode` koji je u Reactu 19 uklonjen. Prelazak na
react-bootstrap 2 tražio bi Bootstrap 5 i prekrštavanje klasa kroz cijeli SCSS, pa umjesto toga ovdje
stoje iste komponente s **istim markupom i istim klasama** – zato `.modal-header .close`,
`.modal-footer .btn-secondary` i `.table-responsive` u `App.scss` rade nepromijenjeni.

Ako zatreba još neka Bootstrap komponenta, dopisuje se u taj fajl (ne vraćati react-bootstrap).

### Redizajn i odnos prema tedzvid.ba

Grana **`redesign-migration`** nosi novi izgled (došao iz `tedzvidapp`, spojen u `40a90a8`) i sav
sadržaj sa `master`-a. Objavljeni **tedzvid.ba je stari izgled (`master`, i18next) i izvor je istine
za sadržaj**: iste lekcije, isti primjeri istim redoslijedom, isto crveno označavanje, isti zvučni
zapisi i isti vezni tekst. Izgled je namjerno drugačiji; kad se nešto razlikuje u *tekstu*, ispravlja
se ovdje, a ne tamo.

Iste rute su na obje strane (`/lekcija1` … `/lekcija22`, `/lekcija14_2`). Jezik je na tedzvid.ba
`?lng=bs|en`, ovdje `?lang=bs|en|de`. Poređenje ide na lokalnom buildu:

```
npm ci && npm run build && npx serve -s build -l 5055
```

Lekcije su u septembru 2026. redom upoređene sa tedzvid.ba (bs i en, na desktopu i na 375px):
naslov i podnaslov, opis pravila s podebljanim/podvučenim dijelovima i arapskim znakovima, redovi
primjera i njihov zvuk, vježba i oba pop-upa. Tekst se poklapa, uz ove **namjerne razlike**:

- ispravke tipfelera u engleskom: L1 „ili“ → „or“, uklonjen „⦁“, „STOPPING SINGS“ → „STOPPING SIGNS“;
  L4 „sukunom“ → „sukoon“; L14_2 uklonjeno zalutalo „y“; L17 „occurs.The“ → „occurs. The“;
- vježba se na engleskom zove **EXERCISE** (`ui.js`, `vjezba`), a na tedzvid.ba „PRACTICE“ – cijeli
  repozitorij koristi *Exercise* za vježbu (`cardVjezba`, `mockVjezbe`, njemački rječnik);
- pop-up lekcije ima naslov **LESSON**; na tedzvid.ba u L1, L3 i L5 greškom piše „PRACTICE“;
- vezni tekst („čita se:“) prevodi `src/i18n/vezniTekst.js`, umjesto zasebnih `row*_en` redova u
  podacima – zato ti redovi ovdje i ne postoje;
- stari trikovi za raspored se ne koriste (vodeća „. “ ispred reda, `mobile-row`,
  `reorder-basic-display-after`, razmaci preko `<span className="tacka">`) – novi raspored to radi sam;
- L1 tabela: „Boje preći“ (tipfeler na tedzvid.ba) je ovdje „Bolje preći“.

Njemački nema uzor na tedzvid.ba, pa se provjerava uz `src/i18n/njemacki-rjecnik.md`.

#### Vježba: ۞ i veličina teksta

Iza svakog ajeta u vježbi ide **`&nbsp;۞`**, a `src/Helpers/VjezbeHelper.js` u redovima vježbe
(`rowmain === 'vjezba'`) skida razmak s kraja ajeta i ne ispisuje prazan vezni tekst. Razlog:
Chrome smije prelomiti red na svakom običnom razmaku, pa je uz obični razmak ۞ ostajao sam u novom
redu (prije popravke 179 takvih mjesta kroz lekcije). **Ne vraćati obični razmak ispred ۞.** Ni
`white-space: nowrap`, ni `word-joiner`, ni `text-wrap: pretty` ne pomažu – jedino nema li razmaka
uopšte. Ako ajet nije odmah praćen sa ۞ (dva ajeta u jednom redu, ۞ u zasebnom spanu: L1, L17, L18,
L19), razmak se dopisuje ručno kao `{' '}`.

Arapski u vježbi je namjerno iste veličine kao na tedzvid.ba – **2.5rem** (desktop), **2.2rem**
(601–1000px), **1.8rem** (mobitel), u `src/App.scss` pod `.lekcija-page .mobile-row`. Veći font je
značio da u red stane samo jedan ajet, pa je vježba imala dva do tri puta više redova nego original.

#### Stranica `/lekcije`

Svaka grupa lekcija je kremasti panel sa zlatnom unutrašnjom linijom (isti okvir kao vježba u
lekciji), s krugom u kojem stoji broj grupe – ili kvačica kad je kviz grupe položen – naslovom i
karticom kviza grupe na dnu. Na dnu tamnoplave trake je traka za skok na grupu (`GrupeNav` u
`src/Body/HomeFirst.js`). Grupe nemaju naziv po temi; ako se doda, ide u `lessons.json`/`ui.js`.

### Jezici

Sajt je na **bosanskom (bs), engleskom (en) i njemačkom (de)**; bosanski je izvorni i podrazumijevani. Jezik se bira u traci navigacije (padajući izbornik `src/Body/LangSwitch.js`), pamti se u `localStorage`, a `?lang=de` u URL-u ima prednost – tako se dijeli link na određenom jeziku.

Gdje živi koji tekst:

- `src/i18n/LanguageContext.js` – popis jezika (`LANGS`), imena jezika (`LANG_NAMES`), `<title>` i meta opis po jeziku.
- `src/i18n/ui.js` – svi tekstovi zajedničkog okvira (navigacija, naslovna, kviz, igre, admin, bonus lekcije), po jednom bloku za svaki jezik s **istim ključevima istim redom**.
- `src/Lessons/Lesson{n}.js` – tekst same lekcije, u objektu `TXT` (isto: `bs`, `en`, `de`).
- `src/Data/**.json` – primjeri, napomene i pitanja: svaki prevodivi tekst je objekat `{ "bs": …, "en": …, "de": … }`.
- `src/i18n/datum.js` – format datuma po jeziku; `src/i18n/vezniTekst.js` – vezni tekst („čita se:“) koji stoji u podacima na bosanskom.

Novi jezik se dodaje tako što se doda u `LANGS` i `LANG_NAMES` i dopiše blok/ključ svugdje gore. Ako neki ključ nedostaje, prikaz tiho pada na bosanski (`usePick`, `TXT[lang] || TXT[DEFAULT_LANG]`), pa nepotpun prijevod ne ruši stranicu.

Njemačka terminologija (transkripcija arapskih pojmova, nazivi 22 pravila, stil obraćanja) drži se jednog dogovora zapisanog u **`src/i18n/njemacki-rjecnik.md`** – npr. *Tadschwid*, *Idgham Mithlain*, *Ichfa Schafawi*, *Madd Tabi’i*, *der Koran*, obraćanje na „du“. Ko dopisuje njemački tekst, prvo pročita taj fajl; bez njega isto pravilo brzo dobije dva imena.

### Korisnički računi i napredak

- Registracija (`/registracija`: ime, korisničko ime, email, lozinka), prijava (`/prijava`, email ili korisničko ime), pregled napretka (`/profil`). Korisničko ime (3–20 znakova, jedinstveno) prikazuje se na rang listi.
- **Sve lekcije su otvorene svima, bez prijave.** Zaključavaju se samo kvizovi grupa i završni kviz (provjera i na klijentu i na serveru).
- Nakon svake lekcije je kviz od 10 pitanja (`src/Data/Quiz/L{n}.json`, bs + en) – vježba koja ništa ne otključava. Lekcija 14 ima dva dijela; kviz je na kraju drugog dijela (`/lekcija14_2`).
- Lekcije su podijeljene u pet grupa – **4 + 4 + 4 + 4 + 6** (`VELICINE_GRUPA` u `src/auth/progress.js`, `BROJ_GRUPA` u `server/index.js`) – i iza svake grupe stoji kviz grupe (`/kviz-grupa1` … `/kviz-grupa5`, ključ napretka `g1`…`g5`): 20 pitanja nasumično izvučenih iz bazena cijele grupe, prolaz 14/20. Bazen jedne lekcije je njen kviz + njen dio završnog kviza (`src/Data/Quiz/bazen.js`), pa je svaki pokušaj drugačiji. Kviz grupe N+1 otključava se položenim kvizom grupe N; prvi je otvoren svima (napredak se čuva samo prijavljenima).
- Uz svaki klikabilni primjer (riječ ili ajet) u lekcijama i vježbama stoji objašnjenje koje se dok zapis svira prikazuje kao oblačić uz istaknuti harf. Tekstovi žive u `src/Data/L{n}Data.json`, u polju `napomena` onog zapisa koji ima `url`:

```json
"napomena": [
    { "tip": "uklapanje", "bs": "...", "en": "..." }
]
```

  Oblačić nikad ne prekriva ajet koji se uči, ni kad se prelama u više redova: ide iznad ili ispod cijelog tog ajeta, na stranu koja prekriva manje ostalog teksta. Ako ni tamo ne stane, skraćuje se i u njemu se skroluje. Na ekranima do 700px oblačić se usidri pri dnu iznad plejera, a stranica dobije toliko praznog prostora da ajet koji se uči stoji iznad njega. Korisnik ga može odvući mišem ili prstom; taj pomak vrijedi do osvježavanja stranice.

  Kad grupa ima više zapisa, a samo prvi ima `url` (vježbe i `V(...)` redovi), napomena ide na taj prvi zapis i pokriva sve pojave u ajetu, redom čitanja. Dozvoljeni `tip` (određuje natpis i boju oznake, prijevodi su u `src/i18n/ui.js` pod `napomenaTip`): `dugo`, `kratko`, `krupno`, `tanko`, `duzina`, `stajanje`, `uklapanje`, `nos`, `odskakanje`, `pretvaranje`, `skrivanje`, `cisto`, `napomena`. Sam oblačić crta `src/Player/Oblak.js`.
- Završni kviz (`/zavrsni-kviz`): 100 pitanja iz svih lekcija (`src/Data/Quiz/zavrsni/L{n}.json`, 5 po lekciji za lekcije 1–12, 4 za 13–22), izmiješanim redoslijedom; otključan kad su položeni svi kvizovi grupa (stariji korisnici koji su po ranijim pravilima prešli svih 22 lekcije zadržavaju pristup), prolaz 70/100. Započeti kviz se pamti u sessionStorage.
- Rang lista (`/rang-lista`): sedmica (od ponedjeljka), mjesec i ukupno, po vremenu Europe/Sarajevo; bodovi = zbir najboljeg rezultata svakog kviza u periodu (ponavljanje ne donosi bodove). Admin i demo korisnik nisu na listi.
- **Mualim** (uloga `mualim`; admin ima ista prava): svi kvizovi su mu otključani, a na `/mualim` sastavlja kviz od proizvoljne kombinacije lekcija (izbor lekcija + 10/20/30 ili sva pitanja). Izbor stoji u adresi (`/mualim?l=1,2,5&n=20`) pa se kviz može spremiti u zabilješke; rezultat se ne upisuje u napredak.
- Ugrađeni računi (prijava korisničkim imenom): admin `admin` / `admin123!` (promijeniti preko `ADMIN_USER` / `ADMIN_PASSWORD`), mualim `mualim` / `mualim123!` (`MUALIM_USER` / `MUALIM_PASSWORD`), demo `user` / `user123!` (isključiti s `DEMO_USER=0`). Admin panel `/admin`: sažetak i napredak svih korisnika.
- Prag prolaza je `PROLAZ` / `PROLAZ_GRUPA` / `PROLAZ_ZAVRSNI` u `src/auth/progress.js` (7/10, 14/20, 70/100) i `PROLAZ_UDIO` u `server/index.js` – mijenjati na oba mjesta.

Server (`server/index.js`) nema vanjskih paketa. Korisnici se čuvaju u `DATA_DIR/users.json` (lozinke: scrypt), sesije su HMAC tokeni (30 dana).

Okruženje:

| varijabla        | značenje                                              | podrazumijevano |
| ---------------- | ----------------------------------------------------- | --------------- |
| `PORT`           | port servera                                          | `3002`          |
| `DATA_DIR`       | mapa s `users.json` i tajnim ključem                  | `./data`        |
| `SESSION_SECRET` | ključ za potpisivanje tokena (inače se generiše i čuva u `DATA_DIR/secret`) | – |
| `BUILD_DIR`      | mapa s buildom                                        | `./build`       |
| `ADMIN_USER`     | korisničko ime administratora                         | `admin`         |
| `ADMIN_PASSWORD` | lozinka administratora (obavezno postaviti u produkciji) | `admin123!`   |
| `MUALIM_USER`    | korisničko ime mualima                                | `mualim`        |
| `MUALIM_PASSWORD`| lozinka mualima (obavezno postaviti u produkciji)      | `mualim123!`    |
| `DEMO_USER`      | `0` isključuje demo korisnika user / user123!          | uključen        |

Na Railwayu je disk privremen: da korisnici prežive novi deploy, montirati Volume i postaviti `DATA_DIR` na tu putanju (npr. `/data`), a `SESSION_SECRET` postaviti kao varijablu.

### Bonus lekcije: sura Jasin i Amme džuz

Bonus lekcije s kur'anskim tekstom otvorene su svima, kao i ostale lekcije:

* `/jasin` – cijela sura Jasin, razložena po stranicama mushafa (440–445),
* `/amme-dzuz` – trideseti (Amme) džuz: 37 sura (En-Nebe’ … En-Nas), sura po sura, svaka s besmelom.

U oba slučaja svaki obojeni dio teksta nosi jedno tedžvidsko pravilo iz lekcija 1–22, s
objašnjenjem zašto se baš tu primjenjuje. Prikaz je zajednički (`src/Lessons/SuraTekst.js`),
razlikuju se samo natpisi i podaci. Legenda broji pravila **za otvoreni odjeljak** – za
pojedinu suru odnosno za pojedinu stranicu mushafa – pa se vidi šta se u njoj zaista javlja.

Tekst i pravila nisu pisani rukom nego ih gradi skripta:

```bash
node scripts/sure/build.js      # → src/Data/YasinData.json, AmmeDzuzData.json, SurePravila.json
node scripts/sure/provjeri.js   # provjera izgrađenih podataka
```

Skripta spaja tri izvora (jednom ih preuzme i kešira u `scripts/sure/.cache/`):

* **api.quran.com, uthmani** – čist tekst, koji se i prikazuje,
* **api.quran.com, uthmani\_tajweed** – isti tekst s oznakama tedžvidskog mushafa (ihfa,
  iklab, uklapanja, kalkala, gunne, harfovi koji se ne uče); oznake se poravnavaju na čisti
  tekst jer se pravopis dva zapisa mjestimično razlikuje,
* **api.alquran.cloud** – stranica mushafa za svaki ajet i podaci o suri,
* **api.quran.com, vrijeme riječi** – početak i kraj svake riječi u Husarijevom zapisu
  (`/api/v4/recitations/6/by_chapter/N?fields=segments`). Taj zapis je isti onaj s
  everyayah.com koji stranica pušta, samo u drugoj gustini (64 naspram 128 kb/s), pa
  vremena vrijede jedan na jedan.

Pravila koja mushaf ne boji (izhar hallkijj i šefevijj, lafzatullah, damir, hukmurra, sve
dužine, znakovi za vakf) prepoznaje sama skripta prema definicijama iz lekcija. Boje i veza
pravila s lekcijom su u `scripts/sure/pravila.js`, a nazivi i značenja sura u `build.js`.

Gradnja sama provjerava da se izgrađeni tekst znak po znak poklapa s čistim uthmani
zapisom; `provjeri.js` uz to provjerava da svako objašnjenje odgovara harfovima u ajetu
(npr. da ihfa zaista stoji ispred jednog od svojih 15 harfova) i da uz svaki ajet ima
tačno onoliko vremena koliko ajet ima riječi.

#### Praćenje učenja u tekstu

Uz svaki ajet ide `vrijeme`: po jedan zapis `[početak, kraj]` u milisekundama za svaku
riječ. Dok ajet svira, u tekstu se ističe riječ koja se upravo uči, pređene nose tanku
liniju, a klik na riječ premota zapis na nju (prekidač „Prati riječ uz zvuk” to gasi).
Riječi se broje kao i u zapisu – znakovi za vakf (ۖ ۗ ۚ …) stoje sami i ne broje se – a
grupisanje radi `src/Lessons/suraRijeci.js`, koji koriste i prikaz i `provjeri.js`.

U lekcijama 1–22 jedan zapis pokriva jednu riječ ili kratku frazu, pa se tamo riječ dok
svira puni zdesna nalijevo prema napretku zapisa (`--napredak` u `src/Player/Player.js`).

Zvučni zapisi su privremeno s `everyayah.com` (Husari). Kad se snime vlastiti, promijeniti
`AUDIO.baza` u `scripts/sure/build.js` (npr. na `./assets/audio/sure/`) i ponovo pokrenuti
skriptu. Vrijeme riječi vrijedi samo za Husarijev zapis, pa uz vlastite snimke treba i novi
izvor vremena; dok ga nema, ajet bez `vrijeme` se i dalje normalno sluša, samo bez
isticanja riječi (gradnja takve ajete popiše na kraju).

### Mobilne aplikacije (iOS i Android)

Aplikacije su [Capacitor](https://capacitorjs.com) omotač oko istog CRA builda – nema
odvojenog koda, sve lekcije, kvizovi, zvuk i grafika idu u paket aplikacije (radi bez
interneta), a samo `/api` pozivi idu na `https://tedzvidapp.up.railway.app`.

```
npm run app:sync        # build za aplikaciju + prenos u ios/ i android/
npm run app:ios         # isto + otvara Xcode
npm run app:android     # isto + otvara Android Studio
npm run app:run:ios     # pokreće na simulatoru / uređaju
npm run app:run:android
npm run app:assets      # regeneriše ikone i splash iz resources/
```

`npm run build:app` pravi build s `REACT_APP_API_URL=https://tedzvidapp.up.railway.app`. Za rad prema
lokalnom serveru: `TEDZVID_API=http://192.168.x.x:3002 npm run app:sync` (adresa mašine u
lokalnoj mreži, ne `localhost` – to je u aplikaciji sama aplikacija).

**Preduslovi:** iOS – Xcode 15+ (ovisnosti idu preko Swift Package Managera).
Android – Android Studio i JDK 21 (`brew install --cask android-studio temurin@21`).

**Identifikatori** (isti kao postojeći listinzi u prodavnicama, da ovo budu ažuriranja, a
ne nove aplikacije):

| | vrijednost | gdje se mijenja |
| --- | --- | --- |
| appId / bundle ID | `com.tedzvidba.app` | `capacitor.config.json`, `android/app/build.gradle`, Xcode |
| naziv | `Tedžvid.ba` | `capacitor.config.json` → `cap sync` |
| verzija | `2.0.0` (Android `versionCode 200`, iOS build `200`) | `android/app/build.gradle`, `MARKETING_VERSION`/`CURRENT_PROJECT_VERSION` u Xcodeu |

Verziju treba podići prije svakog slanja – Google Play traži veći `versionCode`, App Store
Connect veći build broj od već objavljenog.

**Nativne izmjene u web kodu:** `src/native/` (status traka, splash, Android dugme "nazad",
klasa `is-native` na `<html>`), sigurne zone i skrivanje poveznica na prodavnice na dnu
`src/App.scss`. Na webu ništa od toga nema efekta.

**Server:** API šalje CORS zaglavlja za izvore koje Capacitor koristi
(`capacitor://localhost`, `https://localhost`); dodatni izvori se navode u `CORS_ORIGINS`.

**Build iz terminala** (bez Xcodea / Android Studija):

```
# iOS – zastavice sprječavaju da xcodebuild zapne na razrješavanju SPM paketa
cd ios/App && xcodebuild -scheme App -configuration Debug \
  -destination "platform=iOS Simulator,name=iPhone 17 Pro" \
  -disableAutomaticPackageResolution -onlyUsePackageVersionsFromResolvedFile build

# Android
export JAVA_HOME=$(brew --prefix openjdk@21)/libexec/openjdk.jdk/Contents/Home
export ANDROID_HOME=$(brew --prefix)/share/android-commandlinetools
cd android && ./gradlew assembleDebug
```

**Veličina:** aplikacija nosi cijeli `public/assets` (≈110 MB zvuka), pa je paket
≈116 MB (Android APK) / ≈121 MB (iOS). Unutar je oba ograničenja prodavnica, ali
prekodiranje zvuka (`.wav` na 192 kHz i `.mp3` na 256 kbps → 64–96 kbps mono) spustilo
bi to na ≈25 MB, i ubrzalo web.

**Objava:**

- iOS: `npm run app:ios` → u Xcodeu Product → Archive → Distribute App.
  Iz terminala (tim `D6T287Z6N5`, automatsko potpisivanje):

  ```
  cd ios/App
  # arhiv se pravi nepotpisan – potpisivanje pri archive traži razvojni profil,
  # a njemu treba bar jedan registrovan uređaj na nalogu
  xcodebuild -scheme App -configuration Release -destination "generic/platform=iOS" \
    -archivePath /tmp/Tedzvid.xcarchive -disableAutomaticPackageResolution \
    -onlyUsePackageVersionsFromResolvedFile \
    CODE_SIGNING_ALLOWED=NO CODE_SIGNING_REQUIRED=NO CODE_SIGN_IDENTITY="" archive

  # potpisivanje ide pri exportu – distribucijskom profilu uređaji ne trebaju
  xcodebuild -exportArchive -archivePath /tmp/Tedzvid.xcarchive \
    -exportPath /tmp/export -exportOptionsPlist ExportOptions.plist -allowProvisioningUpdates
  ```

  `ExportOptions.plist`: `method=app-store-connect`, `teamID=D6T287Z6N5`, `signingStyle=automatic`.
  Gotov `.ipa` se šalje kroz Xcode Organizer ili `xcrun altool`/`notarytool`.

- Android: keystore se ne čuva u repozitoriju. Napraviti `android/keystore.properties`
  (`storeFile`, `storePassword`, `keyAlias`, `keyPassword`) s **postojećim upload ključem**
  aplikacije `com.tedzvidba.app`, pa `cd android && ./gradlew bundleRelease`. Bez tog fajla
  release se gradi nepotpisan i Play Console ga odbija. Ako je ključ izgubljen, u Play
  Consoleu se traži reset upload ključa (moguće samo uz uključen Play App Signing).

Mape `ios/` i `android/` su u repozitoriju, ali kopirani web sadržaj
(`ios/App/App/public`, `android/app/src/main/assets/public`) nije – dobija se sa `cap sync`.

> **Prije prve objave aplikacija na produkciju mora otići CORS iz `server/index.js`** –
> bez toga prijava, rang lista i napredak u aplikaciji vraćaju grešku mreže.
