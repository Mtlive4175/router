#!/bin/bash
# Move to builder directory
cd ~/Osi_vault/router/builder || { echo "Builder not found! Run arm_builder.sh first."; exit 1; }

# Full Function Package List
PACKAGES="luci luci-ssl luci-app-firewall tcpdump bmon htop screen curl usbutils pciutils"

echo "[NEXUS] Assembling Full-Function Image..."
make image PROFILE=generic PACKAGES="$PACKAGES"

# Move result to Vault
mkdir -p ~/Osi_vault/vault
mv bin/targets/x86/64/*.img.gz ~/Osi_vault/vault/master_router.img.gz
echo "[NEXUS] Success: Master Image is in ~/Osi_vault/vault/"
