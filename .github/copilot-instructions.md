# Copilot instructions — Rizurin App

> Quick, focused guidance for AI coding agents working on this repository.

- Purpose: single-page React app bootstrapped with Create React App. Main entry: [src/index.js](src/index.js#L1).
- Primary UI pieces live in `src/pages` and `src/components` (e.g. [src/pages/home/Banner.jsx](src/pages/home/Banner.jsx#L1), [src/components/Frame.jsx](src/components/Frame.jsx#L1)).

Architecture / big picture
- SPA (Create React App) using client-side rendering. `src/App.js` composes major sections: parallax banner, profiles, footer.
- Visual layout is implemented with presentational components under `src/components` and page-level compositions under `src/pages`.
- Effects & animation: `react-scroll-parallax` is used (see [src/pages/home/Banner.jsx](src/pages/home/Banner.jsx#L1)). Particle effects come from `tsparticles` / `react-tsparticles` in `src/components/Particles.jsx`.

Dev workflows (what to run)
- Start development server (hot reload):
```bash
npm install
npm start
```
- Run tests (CRA test runner):
```bash
npm test
```
- Build production bundle (outputs to `build/`):
```bash
npm run build
```

Project-specific patterns & conventions
- Bootstrapped with CRA: follow existing conventions (no custom webpack). Avoid ejecting unless necessary.
- Styling: global CSS files under `src/` and `src/styles` (example: [src/styles/profile-cards.css](src/styles/profile-cards.css#L1)). Many components import CSS globally rather than CSS modules.
- Component structure: small, focused presentational components. Example: `Frame.jsx` receives `rotation` and `image` props and is used by `Banner.jsx`.
- Images referenced at runtime using `/images/...` paths; expect them in `public/images` or bundled asset path. Example usage in [src/pages/home/Banner.jsx](src/pages/home/Banner.jsx#L1).

Integration points & dependencies
- Network / API: `axios` is listed as a dependency but there are no centralized API services in `src/` — search for `axios` usage before adding new data-fetching patterns.
- Third-party libs used: `react-scroll-parallax`, `tsparticles` / `react-tsparticles`, `react-bootstrap`, `bootstrap`, `react-icons`.

Editing guidance for AI agents
- Preserve CRA scripts in `package.json` — use `npm start` / `npm run build` / `npm test`.
- Keep changes focused: modify or add components under `src/components` and page compositions under `src/pages`.
- When adding styles, follow the existing pattern (global CSS under `src/styles` or component-level CSS imports). Avoid introducing CSS modules unless converting files consistently.
- Use runtime-safe image references: prefer `/images/...` (as used in `Banner.jsx`) or import images from `src` only when bundling is intended.

Where to look first (quick map)
- App entry: [src/index.js](src/index.js#L1) and [src/App.js](src/App.js#L1)
- Pages: [src/pages](src/pages)
- Reusable UI: [src/components](src/components)
- Styles: [src/styles](src/styles)
- Build output (read-only): `build/` — useful for inspecting deployed assets.

If anything is unclear, ask for the exact goal (bugfix, new feature, refactor), then confirm which page/component should change before editing.

-- End of file
