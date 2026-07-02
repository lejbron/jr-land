# Docs updates log

Tracks when `_docs/` was reviewed and whether anything in it needed to change as a result.

## 2026-07-02

- No log existed yet, so read the full `_docs/` folder (`brief.md`, `Wireframe.md`, `daily_tail.md`, `human_note.md`, `landing.yml`, `tech_params.yml`) per the new CLAUDE.md rule.
- `tech_params.yml` already specified the intended CI/CD setup (`hosting: "Reg.ru"`, GitHub Actions autobuild/deploy on push to `main`); implemented it as `.github/workflows/deploy-production.yml`. No content in `_docs/` itself needed changing.
- Correction to an earlier assumption: `daily_tail.md` is not documentation-only — `src/components/QuoteSection.astro` reads it at build time (`readFileSync`) to source the rotating quotes. The `docs/` → `_docs/` rename broke the production build (`ENOENT: no such file or directory, open '/app/docs/daily_tail.md'`) until the component's path was updated to `_docs/daily_tail.md`.
- `human_note.md` is marked "NOT FOR AI / PASS BY" and was not read for guidance or acted on.

## 2026-07-02 (later)

- Build-relevant files (`Wireframe.md`, `daily_tail.md`, `landing.yml`, `tech_params.yml`) moved from `_docs/` to `_build_data/`; `_docs/` now holds planning-only docs (`brief.md`, `human_note.md`, `prompt_drops.md`, this log).
- Same failure mode as the earlier `docs/` → `_docs/` rename: `src/components/QuoteSection.astro` still read `daily_tail.md` from the old path. Updated it to `_build_data/daily_tail.md`. User confirmed the site renders correctly after the fix.
- `landing.yml` and `tech_params.yml` are not read by any code (planning references only), so no other component changes were needed.

## 2026-07-02 (site update per Wireframe.md)

- Compared the live site against `_build_data/Wireframe.md`. Content already matched closely; two deviations fixed:
  - Section order in `src/pages/index.astro` had Quote and the three-photos block before Certificate; wireframe order is Hero → Character → Certificate → Quote → three-photos → Details. Reordered and corrected the misleading block-number comments.
  - `FigurineDetails.astro` subsection heading said "Процесс создания"; wireframe names it "Характеристики". Renamed to match.
- `CtaSection.astro` (waitlist/order form) is not part of the wireframe's 6 blocks and isn't included on the page; left untouched as out of scope.
