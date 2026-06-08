#!/bin/bash
apt update && apt install -y wget unzip openssl
wget https://github.com/anytls/anytls-go/releases/download/v0.0.12/anytls_0.0.12_linux_amd64.zip
unzip anytls_0.0.12_linux_amd64.zip
wget https://github.com/MetaCubeX/mihomo/releases/download/v1.19.27/mihomo-linux-amd64-v1.19.27.gz
gzip -dc mihomo-linux-amd64-v1.19.27.gz > mihomo
cp mihomo /usr/local/bin
chmod +x /usr/local/bin/mihomo
mkdir -p /etc/mihomo
cat > /etc/systemd/system/mihomo.service << EOF
[Unit]
Description=mihomo Daemon, Another Clash Kernel.
After=network.target NetworkManager.service systemd-networkd.service iwd.service

[Service]
Type=simple
LimitNPROC=500
LimitNOFILE=1000000
CapabilityBoundingSet=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH CAP_DAC_OVERRIDE
AmbientCapabilities=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH CAP_DAC_OVERRIDE
Restart=always
ExecStartPre=/usr/bin/sleep 1s
ExecStart=/usr/local/bin/mihomo -d /etc/mihomo
ExecReload=/bin/kill -HUP $MAINPID

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
openssl req -x509 -nodes -newkey ec:<(openssl ecparam -name prime256v1) -keyout /etc/mihomo/server.key -out /etc/mihomo/server.crt -subj "/CN=yunpanlive.chinaunicomvideo.cn" -days 3650
cat > /etc/mihomo/config.yaml << EOF
mixed-port: 65222
tcp-concurrent: true
allow-lan: false
ipv6: true
log-level: info

rules:
  - MATCH,DIRECT

listeners:
  - name: anytls
    type: anytls
    port: 443
    listen: "::"
    users:
      password: password
    certificate: ./server.crt
    private-key: ./server.key
EOF
systemctl enable mihomo
systemctl start mihomo
rm mihomo-linux-amd64-v1.19.27.gz
rm anytls_0.0.12_linux_amd64.zip
rm readme.md
rm mihomo
