#!/bin/bash
apt update && apt install wget unzip
wget https://github.com/passeway/Snell/releases/download/v5.0.1/snell-server-v5.0.1-linux-amd64.zip
unzip snell-server-v5.0.1-linux-amd64.zip -d /usr/local/bin
chmod +x /usr/local/bin/snell-server
mkdir /etc/snell
cat > /etc/snell/snell-server.conf << EOF
[snell-server]
listen = 0.0.0.0:8080
psk = password
ipv6 = true
obfs = http
EOF
cat > /etc/systemd/system/snell.service << EOF
[Unit]
Description=Snell Proxy Service
After=network.target

[Service]
Type=simple
User=nobody
Group=nogroup
LimitNOFILE=32768
ExecStart=/usr/local/bin/snell-server -c /etc/snell/snell-server.conf
AmbientCapabilities=CAP_NET_BIND_SERVICE
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=snell-server

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
systemctl enable snell
systemctl start snell
rm snell-server-v5.0.1-linux-amd64.zip
