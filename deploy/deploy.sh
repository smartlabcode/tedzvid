#!/bin/bash
# Deploy: React build -> nginx, server/index.js -> /opt/tedzvid + restart API.
#   bash /root/tedzvid/deploy/deploy.sh            (grana master)
#   BRANCH=redesign-migration bash .../deploy.sh
set -euo pipefail

BRANCH="${BRANCH:-master}"
REPO_DIR="/root/tedzvid"
NGINX_DIR="/var/www/html/tedzvid"
API_DIR="/opt/tedzvid"

cd "$REPO_DIR"
git fetch origin
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

npm ci
# bez REACT_APP_API_URL: frontend zove /api na istom domenu, nginx ga šalje Nodeu
npm run build

mkdir -p "$NGINX_DIR"
rm -rf "${NGINX_DIR:?}"/*
cp -r build/* "$NGINX_DIR"

# korisnici su u /var/lib/tedzvid – deploy ih ne dira
install -D -m 644 server/index.js "$API_DIR/server/index.js"
systemctl restart tedzvid

for _ in $(seq 1 15); do
	if curl -fsS http://127.0.0.1:3002/api/health >/dev/null; then
		echo "Deploy ($BRANCH) završen, API radi."
		exit 0
	fi
	sleep 1
done
echo "API se nije podigao:"
journalctl -u tedzvid -n 40 --no-pager
exit 1
