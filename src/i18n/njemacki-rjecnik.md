# Terminologie-Glossar Deutsch (de) — tedzvid.ba

Izvor istine za njemački je grana `feature/deutch-lang`: ručno prevedene i provjerene lekcije
(`src/Components/LessonN_de.jsx`), `lekcije_de` u `lessons.json` i `src/Body/locales/de.json`.
Tekst lekcija je odatle prenesen doslovno (uz ispravke očitih tipfelera). Ovaj rječnik opisuje
termine iz tih tekstova, a po njemu su usklađeni i kvizovi, igre, napomene uz sure i `ui.js`.
Novi njemački tekst piši istim terminima.

## 1. Obraćanje i opći pojmovi

| Bosanski | Deutsch | Napomena |
|---|---|---|
| obraćanje korisniku | **Sie** | Kao `de.json` („Geben Sie Ihre Nachricht ein“). Tekst lekcija je bezličan („man liest“, „der Leser“). Nikad „du“. |
| tedžvid | **der Tejwid** (des Tejwid) | Kao `de.json`. Nikad „Tadschwid“. Kompozita: Tejwid-Regel, Tejwid-Handbuch. |
| Kur'an | **der Koran** | Koranschule, Koranleser, Koranrezitation. |
| printano izdanje | **die gedruckte Ausgabe** | Navigacija: „Gedruckte Ausgabe“. |
| autor | **mr. Sejid ef. Strika** | |
| lekcija / vježba | **die Lektion** / **die Übung** | Naslovi: LEKTION, ÜBUNG, VIDEO LEKTION. |
| tabelarni prikaz | **Tabellenansicht** | |
| znakovi za stajanje | **Haltezeichen** | Nikad „Pausenzeichen“. Sekta (nikad „Sakta“). |
| napomena (L1) | **WICHTIG** | |

## 2. Nazivi pravila

Stranica lekcije (`TXT.de` u `src/Lessons/LessonN.js`) i lista lekcija (`lessons.json`) na
deutch-lang koriste različite oblike, i tako je i ostalo. Kvizovi, igre i napomene uz sure
koriste nazive sa **stranice lekcije**, pisane velikim početnim slovom.

| Nr. | Stranica lekcije | Lista lekcija | U tekstu (kvizovi, sure, igre) |
|---|---|---|---|
| 1 | VAKF | WAQF | Vakf |
| 2 | Damir | DAMIR | Damir |
| 3 | LAFZATULLAH | LAFZATULLAH | Lafzatullah |
| 4 | IDGHAM MITHLAYN | IDGHAAM MITHLAYN | Idgham Mithlayn |
| 5 | IDGAM MITHLAYN MIT GHUNNAH | IDGHAM MITHLAYN MIT GHUNNAH | Idgam Mithlayn mit Ghunnah |
| 6 | IDGAM MEAL-GUNNEH | IDGHAM MIT GHUNNAH | Idgam meal-Gunneh |
| 7 | IDGAM BILA GUNNEH | IDGHAM OHNE GHUNNAH | Idgam bila Gunneh |
| 8 | IQLAB (naslov: 8 IKLAB) | IQLAAB | Iqlab |
| 9 | IZHAR HALQI | IZHAAR HALQIJJ | Izhar Halqi (i Izhar Mutlak) |
| 10 | IZHAR SHAFAWI | IZHAAR SHAFAWI | Izhar Shafawi |
| 11 | IHFA | IHFA | Ihfa |
| 12 | IHFA SHAFAWI | IKHFAA' SHAFAWI | Ihfa Shafawi |
| 13 | QALQALA | DIE QALQALAH | Qalqala |
| 14 | HUKMURRA | HUKMURRA | Hukmurra |
| 15 | IDGHAM MUTAJANISSAYN | IDGHAM MUTAJAANISAYN | Idgham Mutajanissayn |
| 16 | IDGHAM MUTAQARIBAYN | IDGHAM MUTAQAARIBAYN | Idgham Mutaqaribayn |
| 17 | MEDD TABI’I | AL-MADD AL-TABEE'EE | Medd Tabi’i |
| 18 | MEDD MUTTESIL | AL-MADD AL-MUTTASIL | Medd Muttesil |
| 19 | MEDD MUNFESIL | AL-MADD AL-MUNFASIL | Medd Munfesil |
| 20 | MEDD LAZIM | AL-MADD AL-LAZIM | Medd Lazim |
| 21 | MEDD ARID | AL-MADD AL-'AARID | Medd Arid |
| 22 | MEDD LIN | MADDU AL-LEEN | Medd Lin |

Općenito: Idgham, Izhar, Ihfa, Medd (nikad Idh-har, Ichfa, Madd).

## 3. Pojmovi u objašnjenjima

| Bosanski | Deutsch | Nikad |
|---|---|---|
| uklapanje | **die Assimilation**, **assimilieren** („wird in X assimiliert“) | verschmelzen, Verschmelzung |
| potpuno / djelimično uklapanje | **vollständige / partielle Assimilation** | |
| sa propuštanjem zraka kroz nos | **mit Nasalisierung**, **nasal ausgesprochen** | „mit Luft durch die Nase“ |
| bez propuštanja zraka kroz nos | **ohne Nasalisierung** | |
| gunne (kao pojam) | **Ghunnah** | Ghunna |
| hareket (znak) | **der Vokal** | Vokalzeichen |
| fetha / tenvin EN | **E** / **EN** („der kurze Vokal E“, „Tanwin EN“) | A / AN za kratki vokal |
| dugi vokal | **der lange Vokal A, I, U** | |
| sukun, tenvin, hemze, šedda | **Sukun, Tanwin, Hamza, Schadda** | |
| trajanje | **Harakat** („2 Harakat lang“) | |
| dužina (medd) | **die Länge / die Verlängerung**, **verlängert** | Dehnung, gedehnt |
| skrivanje (ihfa) | **verbergen**, **verborgen** | verstecken, versteckt |
| čisto izgovaranje (izhar) | **deutlich (und klar) ausgesprochen, ohne Assimilation** | |
| odskakanje (kalkala) | **kraftvoll federnd ausgesprochen**, „die kraftvoll federnde Aussprache“ | abprallen, Abprallen |
| krupno / tanko (R, lafzatullah) | **kraftvoll / weich** („kraftvolle Buchstaben“) | dick, dünn |
| harf W / J | **V (و)**, **J (ي)** | W, Y |
| vezni tekst „čita se:“ | **wird ausgesprochen:** | wird gelesen: |

## 4. Suren und Namen

Nazivi sura (`AmmeDzuzData.json`, `FatihaData.json`, …) ostaju kakvi jesu: arapski naziv u
njemačkoj transkripciji (An-Naba, Al-Burudsch, Al-Ichlas) i njemački prijevod značenja
(„Die Kunde“). Dschuz Amma, Basmala, Mus-haf, Ayat al-Kursi, Ya-Sin.
