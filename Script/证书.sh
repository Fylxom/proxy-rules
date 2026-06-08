apt install socat
apt update
apt install cron -y
systemctl enable cron
systemctl start cron
curl https://get.acme.sh | sh
ln -s  /root/.acme.sh/acme.sh /usr/local/bin/acme.sh
acme.sh --register-account -m 邮箱@gmail.com
acme.sh  --issue -d 域名.com  --standalone -k ec-256
acme.sh --installcert -d 域名.com --ecc  --key-file   /etc/mihomo/server.key   --fullchain-file /etc/mihomo/server.crt 
