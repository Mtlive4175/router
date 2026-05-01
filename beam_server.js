/**
 * SOVEREIGN BEAM: Manual File Transfer Socket
 * Save as: ~/Osi_vault/core/beam_server.js
 */
const net = require('net');
const fs = require('fs');
const path = require('path');

const PORT = 9999;
const SAVE_PATH = path.join(__dirname, '../vault/manual_upload.bin');

const server = net.createServer((socket) => {
    console.log(`[CONN] Device linked from ${socket.remoteAddress}`);
    
    const vaultDir = path.join(__dirname, '../vault');
    if (!fs.existsSync(vaultDir)){
        fs.mkdirSync(vaultDir, { recursive: true });
    }

    const fileStream = fs.createWriteStream(SAVE_PATH);
    socket.pipe(fileStream);

    socket.on('end', () => {
        console.log(`[DONE] Transfer finished. Saved to: ${SAVE_PATH}`);
        socket.write('ACK: TRANSFER_COMPLETE\n');
        socket.destroy();
    });

    socket.on('error', (err) => {
        console.error(`[ERR] Socket Crash: ${err.message}`);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`--- UPLOAD SOCKET OPEN ON PORT ${PORT} ---`);
    console.log(`Target: ${SAVE_PATH}`);
});
