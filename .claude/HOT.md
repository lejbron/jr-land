# HOT context

Fast-reference summary of key project decisions. Update this when architecture/process decisions change.

## Project
- Astro landing page, repo `lejbron/jr-land` (package name `jr-land`, matches repo).
- Brand: "Мир Шута" / product "Сказочник"; domain `башня-мастеров.рф` (punycode `xn----7sbbbir1cgntjm6e1e.xn--p1ai`).
- Docs live in `_docs/` (renamed from `docs/`). See `_docs/tech_params.yml` for tech/product spec, `_docs/docs_updates_log.md` for doc review history. `_docs/human_note.md` is marked "NOT FOR AI" — never read it for guidance.
- `_docs/daily_tail.md` is NOT just documentation — `src/components/QuoteSection.astro` reads it at build time for rotating quote content. Any future rename/move of `_docs/` must update that `readFileSync` path too.

## Local dev
- All local work happens inside the VS Code Dev Container (`.devcontainer/`) — never install packages or run node/npm on the host.
- `.devcontainer/Dockerfile` + `.devcontainer/docker-compose.yml` (non-root `node` user, `sleep infinity` so the container stays up independent of the dev server) + `.devcontainer/devcontainer.json` (installs Claude Code + Astro/Tailwind/Prettier extensions inside the container).
- To run one-off npm commands without opening VS Code: `docker compose -f .devcontainer/docker-compose.yml run --rm web <cmd>`.
- Test contour = local only: `npm run dev` for live editing, `npm run build && npm run preview` before opening a PR. No GitHub Pages / staging deploy exists.

## CI/CD
- Single workflow: `.github/workflows/deploy-production.yml` — push to `main` → build → rsync over SSH to Reg.ru. Requires secrets `REGRU_SSH_HOST`, `REGRU_SSH_USER`, `REGRU_SSH_PORT`, `REGRU_SSH_PRIVATE_KEY`, `REGRU_REMOTE_PATH` (see README "Deployment" section).
- Old GitHub Pages workflow retired (moved to `suggested_for_deletition/deploy.yml`, not deleted, per project rule).
- `astro.config.mjs`: `base: '/'`, `site` = production domain — single deploy target, no env-var branching needed.

## Repo housekeeping rules (from CLAUDE.md)
- Never delete files — move to `suggested_for_deletition/` instead.
- Never install packages on the host — use Docker.
- Plan before implementing; ask before assuming.
- Don't push until a build has been manually tested.
