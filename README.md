# All AI

Marketing landing site for **All AI** — property maintenance powered by AI. React + Vite SPA with an in-browser CMS at `/admin` for editing landing copy.

## Tech stack

- React 19 + TypeScript
- Vite 6
- Static assets in `public/`

## Local development

For the recommended **non-iCloud** setup (`~/Projects/allai`, two-Mac workflow), see [docs/LOCAL_DEV.md](docs/LOCAL_DEV.md).

Quick start:

```bash
cd ~/Projects/allai
npm install
npm run dev
```

Open http://localhost:5173 (landing) and http://localhost:5173/admin (CMS).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server (port 5173) |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Serve production build locally |

## License

See [LICENSE](LICENSE).
