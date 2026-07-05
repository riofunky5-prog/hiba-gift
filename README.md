# Blooming Love — For Hiba 🌹

A cinematic, single-page love letter site built with Next.js 15, React 18,
TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js, React Three
Fiber, Drei, and Lenis smooth scroll.

The visitor's journey:

1. **Landing** — a slow-drifting starfield, a glowing moon, and "Open My
   Heart." Clicking it triggers a hyperspace-style camera flight and
   smooth-scrolls into the next scene.
2. **The Rose** — a procedurally-built 3D rose grows from the ground and
   its petals unfurl layer by layer, with golden particles and a gentle
   wind sway. Once it finishes blooming, a letter types itself out.
3. **Gallery** — glassmorphic photo cards with floating motion, hover
   zoom, and a full lightbox.
4. **Timeline** — your story's chapters, sliding in from alternating
   sides as you scroll.
5. **Love Counter** — a live days / hours / minutes / seconds counter
   since the date you set.
6. **Heart Rain** — floating hearts that respond to the mouse.
7. **Final Scene** — a night sky with rising lanterns and falling
   petals, closing on "I will always choose you." and a glowing heart
   that launches fireworks on click.

A glassmorphism music player sits in the bottom-right corner throughout,
sharing state with the landing page's ambient-music toggle.

## 1. Personalize it

Almost everything you'd want to change lives in one file:

```
src/lib/constants.ts
```

- `LOVE_START_DATE` — the date the Love Counter counts from.
- `SITE` — the hero title, subtitle lines, and button label.
- `LOVE_LETTER` — the typed letter's text.
- `FINAL_MESSAGE` — the closing line before the fireworks heart.
- `GALLERY_IMAGES` — filenames + captions for the gallery. Put the actual
  photo files in `public/images/` (see the README in that folder).
- `TIMELINE_EVENTS` — your story's chapters, dates, and icons.
- `AMBIENT_TRACK` — the music file path + display title. Put the actual
  audio file at `public/music/music.mp3` (see the README in that folder).

No stock photos or filler audio ship with this project — those two
folders are yours to fill in.

## 2. Run it locally

Requires Node.js 18.18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 3. Build for production

```bash
npm run build
npm run start
```

## 4. Deploy to Vercel (recommended)

This project is Vercel-ready out of the box — it uses Next.js's normal
server-rendering pipeline, so features like automatic image optimization
and the dynamically generated favicon work with zero extra config.

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to https://vercel.com/new and import the repository.
3. Leave the framework preset on "Next.js" and click **Deploy**.
4. Every subsequent push to your main branch redeploys automatically.

Or, from the CLI:

```bash
npm i -g vercel
vercel
```

## 5. Deploy to GitHub Pages (static export)

GitHub Pages only serves static files, so this project needs to be
exported as a static site first. A few features (automatic image
optimization, the per-request dynamic icon) fall back to simpler static
equivalents in this mode.

1. In `next.config.mjs`, add:

   ```js
   const nextConfig = {
     output: "export",
     images: { unoptimized: true },
     // ...keep the rest of the existing config
   };
   ```

2. Build the static site:

   ```bash
   npm run build
   ```

   The static site is generated into the `out/` folder.

3. Push the contents of `out/` to your repository's `gh-pages` branch
   (or configure GitHub Pages to serve from `/out` on your main branch),
   then enable GitHub Pages in the repository settings.

   A quick way to do this with the `gh-pages` package:

   ```bash
   npm i -D gh-pages
   npx gh-pages -d out
   ```

4. If you're deploying to `https://<username>.github.io/<repo>/` (a
   project page, not a user/org page), also set `basePath` and
   `assetPrefix` in `next.config.mjs` to `/<repo>`.

## Project structure

```
src/
  app/               Next.js App Router entry (layout, page, global CSS, icon)
  components/
    landing/         Scene 1 — space canvas, hero copy, warp transition
    rose/             Scene 2 — 3D rose, bloom hook consumer, typed letter
    gallery/          Glass-card gallery + lightbox
    timeline/         Alternating-side memory timeline
    counter/          Live love counter
    heart-rain/        Mouse-reactive heart particle canvas
    final/             Night sky, lanterns, falling petals, fireworks
    music/             Bottom-right player
    providers/         Audio, journey (warp transition), and smooth-scroll context
    ui/                Shared UI primitives (GlowButton)
  hooks/               useLenis, useBloomTimeline, useInViewport
  lib/                 constants.ts (your content), utils.ts, roseGeometry.ts
  types/               Shared TypeScript types
public/
  images/              Your gallery photos
  music/               Your ambient track
```

## Notes

- The site sets `robots: { index: false, follow: false }` in
  `src/app/layout.tsx` by default, since this is normally a private
  page for one specific person. Remove that block in
  `src/app/layout.tsx` if you'd like it publicly indexed.
- Animations respect `prefers-reduced-motion`.
- All scroll-triggered animations use `viewport={{ once: true }}` so
  they play once per visit rather than re-triggering on every scroll
  direction change.
