# Local development (recommended setup)

Use a **local clone** under `~/Projects/allai`, not iCloud Drive. Sync code with **Git only**; do not sync `node_modules/`, `dist/`, or `.env` files via iCloud.

## Project summary

| Item | Value |
|------|-------|
| GitHub | `https://github.com/omaromran/allai` |
| App root | `./` (repo root) |
| Stack | React 19 + TypeScript + Vite 6 |
| Node.js | 20.x or 22.x (`node -v`) |
| Local database | None |
| Env files | None required (static landing site + in-browser CMS) |
| Dev server | `npm run dev` → http://localhost:5173 |
| Old iCloud path | `~/Documents/GitHub/allai` (retire after verifying this setup) |

## Prerequisites

| Tool | Version / notes |
|------|-----------------|
| Node.js | 20.x or 22.x |
| npm | Bundled with Node |
| Git | Clone from `https://github.com/omaromran/allai` |

Apple Silicon: if you use Homebrew Node, ensure it is first in PATH:

```bash
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
```

## First-time setup (this Mac)

```bash
mkdir -p ~/Projects
cd ~/Projects
git clone https://github.com/omaromran/allai.git
cd allai
npm install
npm run dev
```

1. Open **http://localhost:5173** — landing page (HTTP 200).
2. Open **http://localhost:5173/admin** — landing copy CMS (HTTP 200).
3. In Cursor: **File → Open Folder → `~/Projects/allai`**.

No `.env.local`, Docker, or database setup is required for this project.

## Daily workflow

```bash
cd ~/Projects/allai
git pull
npm install          # only if package-lock.json changed
npm run dev
```

Before leaving: `git add … && git commit -m "…" && git push`

## Build preview (optional)

```bash
npm run build        # output in dist/
npm run preview      # serves dist/ locally
```

## What never goes in Git or iCloud

- `node_modules/`
- `dist/`
- `.env.local` / `.env` (if you add any later)
- `secrets/` and service account keys (if you add any later)
- `*.tsbuildinfo`

## Second Mac

Use the **same path** on both machines:

```bash
git clone https://github.com/omaromran/allai.git ~/Projects/allai
cd ~/Projects/allai
npm install
npm run dev
```

No secrets or env files to copy today. If you later add API keys or deploy config, copy `.env.local` via 1Password or USB and fix any absolute paths per machine.

**Data strategy:** not applicable — there is no backend database. Landing CMS edits in `/admin` are stored in the browser (localStorage) unless you export JSON from the CMS UI.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Slow installs / weird Vite errors after iCloud | Fresh clone under `~/Projects/allai`; never copy `node_modules/` |
| Port 5173 in use | Stop the other Vite process or run `npx vite --port 5174` |
| Blank page after pull | Hard refresh; check browser console for import errors |
| Wrong workspace in Cursor | Open `~/Projects/allai`, not `~/Documents/GitHub/allai` |

## Retiring an iCloud copy

After validating `~/Projects/allai`:

1. Confirm `git push` from the new path works and the dev server runs.
2. Rename the old folder: `~/Documents/GitHub/allai` → `allai-icloud-archive`.
3. Delete the archive when you no longer need it.

Do **not** delete the iCloud copy until you have confirmed the new setup on this Mac.
