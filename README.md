# jr-land
Landing site made with Claude. 

## Local development

All work happens inside the VS Code Dev Container — nothing is installed on the host machine.

1. Open this folder in VS Code and run **Dev Containers: Reopen in Container**.
2. `npm run dev` — live-reloading dev server at `http://localhost:4321`.
3. `npm run build && npm run preview` — builds the production-shaped output and serves it locally. Run this before opening a PR; it's the test contour for this project (there is no separate staging/preview deployment).

## Deployment

- **Production** (`.github/workflows/deploy-production.yml`): runs automatically on every push to `main` (i.e. after a PR merge). It builds the site and syncs `dist/` to the Reg.ru host over SSH/rsync (with `--delete`, so the remote directory always mirrors the latest build — make sure `REGRU_REMOTE_PATH` points only at this site's own folder).
- There is no automatic preview/staging deploy. Test locally with `npm run build && npm run preview` inside the dev container before merging.

Required GitHub Actions secrets (Settings → Secrets and variables → Actions), names only:

| Secret | Purpose |
|---|---|
| `REGRU_SSH_HOST` | Reg.ru server hostname/IP |
| `REGRU_SSH_USER` | SSH username |
| `REGRU_SSH_PORT` | SSH port |
| `REGRU_SSH_PRIVATE_KEY` | Private key for a dedicated deploy keypair (not your personal key) |
| `REGRU_REMOTE_PATH` | Remote directory that serves the production domain |
