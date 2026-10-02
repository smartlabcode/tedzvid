#!/bin/bash
# Jednokratno postavljanje API servera na Ubuntu (pokrenuti kao root iz kloniranog repozitorija):
#   bash deploy/setup-server.sh
# Smije se pokrenuti ponovo – ne dira postojeće korisnike ni /etc/tedzvid.env.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
API_DIR="/opt/tedzvid"
DATA_DIR="/var/lib/tedzvid"
ENV_FILE="/etc/tedzvid.env"

[ "$(id -u)" = 0 ] || { echo "Pokreni kao root."; exit 1; }

# 1) Node >= 20 na /usr/bin/node (korisnik servisa ne vidi /root/.nvm)
if [ ! -x /usr/bin/node ] || [ "$(/usr/bin/node -p 'process.versions.node.split(".")[0]')" -lt 20 ]; then
	echo "Treba Node >= 20 na /usr/bin/node. Instaliraj ga pa pokreni ponovo:"
	echo "  curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && apt-get install -y nodejs"
	exit 1
fi

# 2) korisnik i mape
id tedzvid >/dev/null 2>&1 || useradd --system --no-create-home --shell /usr/sbin/nologin tedzvid
mkdir -p "$API_DIR/server" "$DATA_DIR"
chown tedzvid: "$DATA_DIR"
chmod 700 "$DATA_DIR"
install -m 644 "$REPO_DIR/server/index.js" "$API_DIR/server/index.js"

# 3) tajne – samo prvi put; lozinke se ispišu jednom, zapiši ih
if [ ! -f "$ENV_FILE" ]; then
	ADMIN_PASS="$(openssl rand -base64 18)"
	MUALIM_PASS="$(openssl rand -base64 18)"
	umask 077
	cat > "$ENV_FILE" <<EOF
SESSION_SECRET=$(openssl rand -hex 32)
ADMIN_USER=admin
ADMIN_PASSWORD=$ADMIN_PASS
MUALIM_USER=mualim
MUALIM_PASSWORD=$MUALIM_PASS
DEMO_USER=0
EOF
	echo "Napravljen $ENV_FILE. Zapiši lozinke (vide se i u tom fajlu):"
	echo "  admin  / $ADMIN_PASS"
	echo "  mualim / $MUALIM_PASS"
fi

# 4) systemd
install -m 644 "$REPO_DIR/deploy/tedzvid.service" /etc/systemd/system/tedzvid.service
systemctl daemon-reload
systemctl enable tedzvid
systemctl restart tedzvid

# 5) nginx snippet (u nginx.conf ga treba jednom uključiti – vidi deploy/README.md)
install -m 644 "$REPO_DIR/deploy/nginx-tedzvid-api.conf" /etc/nginx/snippets/tedzvid-api.conf
if ! grep -rq "tedzvid-api.conf" /etc/nginx/nginx.conf /etc/nginx/sites-enabled/ 2>/dev/null; then
	echo
	echo "Još nije uključen u nginx: dodaj 'include snippets/tedzvid-api.conf;' u server { listen 443 ... } blok"
	echo "(i try_files prebaci u 'location / { ... }'), pa: nginx -t && systemctl reload nginx"
fi

# 6) provjera
for _ in $(seq 1 10); do
	if curl -fsS http://127.0.0.1:3002/api/health >/dev/null; then
		echo
		echo "API radi:"
		journalctl -u tedzvid -n 3 --no-pager -o cat
		exit 0
	fi
	sleep 1
done
echo "API se nije podigao:"
journalctl -u tedzvid -n 40 --no-pager
exit 1
