# VaultLib — Demo / Portfolio

A browser-based demo of [VaultLib](https://github.com/yourname/vaultlib), a local media library app built with Tauri + React.

This demo runs entirely in the browser with in-memory mock data. No backend, no file system, no install required.

**Live demo:** https://yourname.github.io/vaultlib-demo

---

## What works in the demo

- ✅ Browse 20 pre-loaded items (games, movies, books, TV, music, anime, apps)
- ✅ Filter by category and status
- ✅ Search across titles, tags, genre, notes
- ✅ Sort by date added, title, rating, year
- ✅ Smart views: Recently Added, Recently Launched, Top Rated
- ✅ Add, edit, delete items (resets on refresh)
- ✅ Manage library types (add custom categories with emoji)
- ✅ Manage statuses (add custom statuses with color)
- ✅ Tags with autocomplete
- ✅ Privacy lock (PIN: **1234**)
- ✅ Launch button (shows toast instead of opening a real file)
- ✅ Cover art via URL

## What's disabled

- ❌ Local file images (no file system access in browser)
- ❌ File picker for launch path / cover art
- ❌ Data persistence (resets on refresh — in the real app data is saved to a local JSON file)

---

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
npm run build
# then push the dist/ folder to your gh-pages branch
# or use the gh-pages package:
npx gh-pages -d dist
```

## Deploy to Netlify / Vercel

Just connect the repo — both auto-detect Vite and run `npm run build` with `dist/` as output.

---

## The real app

VaultLib is a native desktop app (Windows, Linux, macOS) with:
- Persistent local JSON database
- Native file picker for cover art and launch paths
- Launch any exe, shortcut, or file directly from the card
- Local image support for cover art
- Privacy lock that hides items completely

→ [VaultLib repo](https://github.com/yourname/vaultlib)
