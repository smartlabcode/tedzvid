## React Tedžvid

Osnovni repozitorij za React Tedžvid (tedzvid.ba).

### Pokretanje lokalno

```
npm install --legacy-peer-deps
npm run server   # API + posluživanje builda (port 3002)
npm start        # CRA dev server (port 3000), /api se proxy-ra na 3002
```

Produkcija (Railway): `npm run build`, zatim `npm run serve` – isti Node server poslužuje `build/` i API.

### Korisnički računi i napredak

- Registracija (`/registracija`), prijava (`/prijava`), pregled napretka (`/profil`).
- Nakon svake lekcije je kviz od 10 pitanja (`src/Data/Quiz/L{n}.json`, bs + en). Lekcija 14 ima dva dijela; kviz je na kraju drugog dijela (`/lekcija14_2`).
- Lekcije se otključavaju redom: lekcija N+1 je otključana kad je položen kviz lekcije N (najmanje 7 od 10 tačnih). Gost vidi samo lekciju 1.
- Završni kviz (`/zavrsni-kviz`): 100 pitanja iz svih lekcija (`src/Data/Quiz/zavrsni/L{n}.json`, 5 po lekciji za lekcije 1–12, 4 za 13–22), izmiješanim redoslijedom; otključan kad su položene sve lekcije, prolaz 70/100. Započeti kviz se pamti u sessionStorage.
- Prag prolaza je `PROLAZ` u `src/auth/progress.js` (7/10, 70/100) i `PROLAZ_UDIO` u `server/index.js` – mijenjati na oba mjesta.

Server (`server/index.js`) nema vanjskih paketa. Korisnici se čuvaju u `DATA_DIR/users.json` (lozinke: scrypt), sesije su HMAC tokeni (30 dana).

Okruženje:

| varijabla        | značenje                                              | podrazumijevano |
| ---------------- | ----------------------------------------------------- | --------------- |
| `PORT`           | port servera                                          | `3002`          |
| `DATA_DIR`       | mapa s `users.json` i tajnim ključem                  | `./data`        |
| `SESSION_SECRET` | ključ za potpisivanje tokena (inače se generiše i čuva u `DATA_DIR/secret`) | – |
| `BUILD_DIR`      | mapa s buildom                                        | `./build`       |

Na Railwayu je disk privremen: da korisnici prežive novi deploy, montirati Volume i postaviti `DATA_DIR` na tu putanju (npr. `/data`), a `SESSION_SECRET` postaviti kao varijablu.
