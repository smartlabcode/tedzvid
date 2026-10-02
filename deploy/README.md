# Deploy na vlastiti server (nginx + Node)

nginx servira React build iz `/var/www/html/tedzvid` i šalje `/api/` na Node
(`server/index.js`) na `127.0.0.1:3002`. Node drži systemd (`tedzvid.service`),
korisnici su u `/var/lib/tedzvid/users.json`, tajne u `/etc/tedzvid.env`.

| fajl                     | gdje završi na serveru                      |
| ------------------------ | ------------------------------------------- |
| `tedzvid.service`        | `/etc/systemd/system/tedzvid.service`        |
| `nginx-tedzvid-api.conf` | `/etc/nginx/snippets/tedzvid-api.conf`       |
| `setup-server.sh`        | jednokratno postavljanje (radi i ponovljeno) |
| `deploy.sh`              | svaki sljedeći deploy                        |

## Prvo postavljanje (kao root, repozitorij u `/root/tedzvid`)

1. Node ≥ 20 na `/usr/bin/node` (ne preko nvm-a u `/root`):

       curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && apt-get install -y nodejs

2. Grana sa serverom i postavljanje:

       cd /root/tedzvid && git fetch origin && git checkout <grana> && git reset --hard origin/<grana>
       bash deploy/setup-server.sh

   Skripta napravi korisnika `tedzvid`, `/etc/tedzvid.env` (nasumični `SESSION_SECRET`
   i lozinke admina/mualima – ispiše ih jednom), systemd servis i nginx snippet.

3. U `/etc/nginx/nginx.conf`, u `server { listen 443 ... }` bloku, umjesto
   `try_files $uri $uri/ /index.html;` staviti:

       include snippets/tedzvid-api.conf;

       location / {
           try_files $uri $uri/ /index.html;
       }

   pa `nginx -t && systemctl reload nginx`.

4. Prvi deploy (`deploy.sh` umjesto stare skripte):

       BRANCH=<grana> bash /root/tedzvid/deploy/deploy.sh

5. Provjera: `curl -s https://tedzvid.ba/api/health` → `{"ok":true}`, zatim registracija na
   `/registracija`, riješen kviz lekcije, pa `/profil` nakon osvježavanja.

## Održavanje

- logovi: `journalctl -u tedzvid -f`
- promjena lozinke admina/mualima: urediti `/etc/tedzvid.env`, pa `systemctl restart tedzvid`
- backup: `cp /var/lib/tedzvid/users.json /root/backup/users-$(date +%F).json` (npr. dnevni cron)
- `SESSION_SECRET` ne mijenjati bez potrebe – promjena odjavljuje sve korisnike
