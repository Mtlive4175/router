# Sovereign Mesh Manual Upload Manifest

### Core Files for Manual GitHub Upload:
- [ ] `/router/builder/` -> Full OpenWrt Image Builder source.
- [ ] `/core/beam_server.js` -> The Socket Object for binary transfers.
- [ ] `/vault/Sovereign_Mesh.gns3` -> The GNS3 Topology file.
- [ ] `/vault/master_router.img.gz` -> The baked firmware image.

### Procedures:
1. Start `beam_server.js` on port 9999.
2. Pipe local .img or .tar files via 'nc'.
3. Move files from `/vault/manual_upload.bin` to target directories.
