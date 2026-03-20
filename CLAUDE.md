# CV Portfolio — macOS Desktop Simulation

Forked from [Renovamen/playground-macos](https://github.com/Renovamen/playground-macos). Rebranded for Uday.

## Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite 5.2
- **State:** Zustand (slices: `src/stores/slices/` — dock, system, user)
- **CSS:** UnoCSS (config: `unocss.config.ts`) with dark mode via `dark:` prefix
- **Icons:** UnoCSS preset-icons + `@iconify/json` (loaded via CDN fallback — see below)
- **Animations:** Framer Motion
- **Markdown:** React Markdown (Bear app), Milkdown (Typora app)

## Critical: Icon Loading

Node v25 breaks `@iconify/utils` local loading for UnoCSS preset-icons. The fix is `cdn: "https://esm.sh/"` in `unocss.config.ts` presetIcons config. Do NOT remove this or icons will silently fail to render (no build errors, just missing icons in the UI).

## Key Directories

- `src/configs/` — All app data, user info, social links, terminal content, wallpapers
- `src/configs/user.ts` — Display name, avatar, password
- `src/configs/terminal.tsx` — Terminal bio/contact (JSX)
- `src/configs/websites.ts` — Safari bookmarks/social links
- `src/configs/bear.tsx` — Bear notes app content (points to `public/markdown/`)
- `src/configs/apps.tsx` — Dock apps and their window configs
- `src/components/` — UI components (apps, menus, dock)
- `src/stores/slices/system.ts` — Dark mode default (`dark: true`), volume, brightness, wifi
- `public/markdown/` — Markdown files rendered in Bear app
- `public/img/` — All image assets (icons, wallpapers, site favicons)

## Commands

```bash
pnpm install          # install deps (requires .npmrc with shamefully-hoist=true)
npx vite --open       # dev server
npx vite build        # production build → dist/
```

## Conventions

- Dark mode is default. The `<html>` tag has `class="dark"` in `index.html`.
- Owner name "Uday" appears in: `user.ts`, `index.html`, `manifest.json`, `AppleMenu.tsx`, `terminal.tsx`, markdown files.
- Social links (GitHub + LinkedIn) appear in: `websites.ts`, `terminal.tsx`, `about-me.md`.
- Bear "Projects" section and Launchpad still contain original author's projects — placeholder for Uday's projects.
