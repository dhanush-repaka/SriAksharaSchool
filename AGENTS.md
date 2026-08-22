# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 14 (App Router)** static-export frontend for the Sri Akshara School website (TypeScript + Tailwind CSS). Content is hardcoded in `app/**` page components; there is no backend to run. The WordPress/GraphQL env vars mentioned in `README.md`/`SETUP.md` are optional and unused by the shipped pages, so no `.env.local` is required to develop or build.

Package manager is **npm** (`package-lock.json`). The update script already runs `npm install`, so dependencies are ready when an agent starts.

### Run / build / test commands
- Dev server: `npm run dev` (serves at http://localhost:3000). Standard command from `package.json`.
- Build: `npm run build` — this repo sets `output: 'export'` in `next.config.js`, so the build also produces a static site in `out/`. The build step also runs TypeScript type-checking, so a green build means types are valid. There is no separate `npm start` for the exported site (it's static HTML).
- There are no automated tests in this repo.

### Lint caveat (non-obvious)
`npm run lint` (`next lint`) is **not configured** — ESLint has no config file, so running it triggers an interactive "How would you like to configure ESLint?" prompt and will hang in a non-interactive shell. CI (`.github/workflows/deploy.yml`) only runs `npm run build`, not lint. Don't run `npm run lint` expecting a clean non-interactive check unless you first add an ESLint config.
