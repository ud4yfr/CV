# Progress

## Session 1 — 2026-03-20

### Completed
- Cloned [Renovamen/playground-macos](https://github.com/Renovamen/playground-macos) into `/Users/uday/Desktop/CV`
- Initialized fresh git repo (no upstream history)
- Rebranded all instances of "Xiaohan Zou" → "Uday" across:
  - `src/configs/user.ts` (display name)
  - `index.html` (title + meta description)
  - `public/manifest.json` (PWA name)
  - `src/components/menus/AppleMenu.tsx` (Log Out menu item)
  - `src/configs/terminal.tsx` (bio + contact info)
  - `src/configs/bear.tsx` (About Me excerpt)
  - `public/markdown/about-me.md`, `about-site.md`, `github-stats.md`
- Set dark mode as default:
  - `src/stores/slices/system.ts` → `dark: true`
  - `index.html` → `<html class="dark">`
- Updated social links to GitHub (`github.com/ud4yfr`) and LinkedIn (`linkedin.com/in/uday-patil-954854231/`) in:
  - `src/configs/websites.ts` (Safari bookmarks — removed blog, scholar, zhihu, twitter, email)
  - `src/configs/terminal.tsx` (contact section)
  - `src/configs/apps.tsx` (dock GitHub link)
  - `src/components/apps/VSCode.tsx` (iframe → `ud4yfr/CV`)
  - `public/markdown/about-me.md`, `about-site.md`, `github-stats.md`
- Fixed icon loading: Node v25 breaks `@iconify/utils` local resolution for UnoCSS preset-icons. Added `cdn: "https://esm.sh/"` fallback in `unocss.config.ts`.
- Added `.npmrc` with `shamefully-hoist=true` for pnpm compatibility.
- Verified build passes (`npx vite build`) and dev server runs with all icons rendering.

### Untouched (intentionally)
- All animations, dock magnification, window management, Spotlight, Launchpad
- Bear "Projects" section (still shows original author's projects)
- Launchpad apps (still links to original author's projects)
- Terminal `interests.txt` and `who-cares.txt` (still original content)
- Safari "Frequently Visited" sites
- Music config, wallpapers, FaceTime
