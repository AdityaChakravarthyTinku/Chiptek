# Chiptek Website

A deployment-ready marketing website for Chiptek, a focused technology
solutions company covering custom software engineering, data engineering,
data science and analytics, AI/ML engineering, Python automation, and
technology talent solutions.

## Technology stack

- React 18 + Vite (JavaScript/JSX, no TypeScript)
- React Router (BrowserRouter)
- Tailwind CSS
- Framer Motion (restrained, reduced-motion aware animation)
- Lucide React (icons)
- React Helmet Async (per-route SEO metadata)

No backend server, database, or fake APIs are included. The contact form
posts directly to an endpoint you configure (see below), or explains
plainly that online submission isn't configured yet.

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

Starts a local dev server (default: http://localhost:5173).

## Production build

```bash
npm run build
```

Outputs a static, deployable site to `dist/`. Preview the production
build locally with:

```bash
npm run preview
```

## File structure

```
chiptek/
├── public/
│   ├── media/              # hero video, poster, and service images (see below)
│   ├── favicon.svg
│   ├── og-image.webp       # add before launch
│   └── .htaccess           # Apache/cPanel SPA rewrite rules
├── src/
│   ├── components/
│   │   ├── layout/         # Header, MobileNavigation, Footer, ScrollToTop, PageTransition
│   │   ├── sections/       # One component per homepage section
│   │   └── ui/             # Small reusable building blocks (Button, ServiceCard, etc.)
│   ├── content/            # company.js, services.js, roles.js, solutionPaths.js
│   ├── hooks/               # useActiveSection, useReducedMotion, useLocalTime, useScrollProgress
│   ├── pages/               # HomePage, ServiceDetailPage, PrivacyPage, TermsPage, NotFoundPage
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Content management

All editable content lives under `src/content/` as plain JavaScript
objects/arrays — no CMS, no database.

- **`company.js`** — every piece of company/contact information the site
  displays: name, primary contact, phone, email, address, address
  visibility, LinkedIn URL, site URL, contact form endpoint, time zone.
  This is the single source of truth; no component should hard-code a
  phone number, email, or address.
- **`services.js`** — the six core services, each with slug, title,
  eyebrow, summary, description, capabilities, typical engagements,
  outcomes, roles, related services, and page metadata. Both the
  homepage service cards and `ServiceDetailPage.jsx` read from this file.
- **`roles.js`** — specialist role groups (Software Engineering, Data and
  Analytics, AI and Machine Learning) shown in the Specialist
  Capabilities section.
- **`solutionPaths.js`** — the static mapping used by the "Start with the
  requirement" interactive navigator.

### Updating company details

Edit `src/content/company.js` directly, or set the matching `VITE_*`
environment variables (see below) so values differ per environment
without touching source. Fields flagged `REVIEW BEFORE LAUNCH` in that
file's comments must be filled in or confirmed before going live —
notably the primary contact's role, legal company name, and email.

### Address-visibility configuration

`company.addressVisibility` accepts:

- `"full"` — shows the complete street address, and includes it in
  Organization JSON-LD.
- `"city-only"` (default) — shows only "Cumming, Georgia, United
  States"; the full street address is never rendered or included in
  structured data.
- `"hidden"` — no location is shown anywhere on the site.

`company.showMapLink` stays `false` unless you explicitly want a map
link/embed — none is included by default.

### Replacing the hero video

Drop these files into `public/media/`:

- `chiptek-hero.mp4` — an 8–15 second seamless, muted loop, ideally a
  few megabytes, dark enough for white text overlay.
- `chiptek-hero-poster.webp` — a poster frame matching the video's first
  frame, used before the video loads and for reduced-motion users.

If either file is missing, `Hero.jsx` falls back to a CSS gradient
background rather than showing a broken video element.

### Updating services

Edit the `services` array in `src/content/services.js`. Adding a new
service automatically:

- Adds a homepage service card (`Services.jsx` maps over the array)
- Registers its detail route in `App.jsx` (which maps over `services`)
- Adds it to the footer's "Core Services" list
- Adds it as an option in the contact form's "Service of interest" field

There is only one detail-page component (`ServiceDetailPage.jsx`) — it
renders whichever service's content matches the current route's slug.

### Updating roles

Edit `src/content/roles.js`. Each group has a `group` label and a
`roles` array of `{ title, description }` objects.

### Contact-form integration

Set `VITE_CONTACT_FORM_ENDPOINT` to a real form-handling endpoint (a
serverless function, a form backend like Formspree, etc.) that accepts
a JSON POST body with the form's fields. Until this is set, the form
shows an honest "online submission isn't configured" message with the
phone number (and email, once supplied) as a fallback — it never
fakes a success state.

## Environment variables

Copy `.env.example` to `.env` and fill in real values:

```
VITE_SITE_URL=
VITE_CONTACT_FORM_ENDPOINT=
VITE_COMPANY_EMAIL=
VITE_LINKEDIN_URL=
VITE_ADDRESS_VISIBILITY=city-only
VITE_SHOW_MAP_LINK=false
```

**Every variable prefixed `VITE_` is bundled into the client-side
JavaScript and is publicly visible in the browser.** Never place a
secret API key, token, or credential in a `VITE_` variable.

## SEO configuration

Each route sets its own title, meta description, canonical URL, and
Open Graph tags via React Helmet Async. The homepage and each service
page also emit Organization JSON-LD (name and phone always; postal
address only when `addressVisibility` is `"full"`; no placeholder email
is ever included in structured data).

Before launch:

- Set `VITE_SITE_URL` to the final production domain (no trailing
  slash) so canonical URLs and JSON-LD resolve correctly.
- Add a real `og-image.webp` (1200×630) to `/public`.
- Replace `/public/favicon.svg` if you want a different mark (the
  existing one already matches the site's brand mark).

## Deployment

Build output is a static site in `dist/` — deployable to any static
host.

### Vercel / Netlify / Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- These platforms auto-detect Vite; if prompted for a SPA fallback
  rule, route all paths to `index.html` (Vercel/Cloudflare do this by
  default for Vite projects; for Netlify add a `_redirects` file to
  `public/` containing: `/*    /index.html   200`).

### Apache / cPanel

`public/.htaccess` is copied into `dist/` on build and rewrites any
request that isn't a real file or directory to `index.html`, so
React Router can handle the route client-side. Upload the contents of
`dist/` to your document root (not into a subfolder) unless you also
update the app's routing base.

### Custom domain & HTTPS

Point your domain's DNS at your host, then enable HTTPS through your
host's dashboard (most platforms above provision a free certificate
automatically). Once the domain is live, set `VITE_SITE_URL` to
`https://yourdomain.com` and rebuild.

### Testing direct routes after deployment

After deploying, manually load each of the following directly in the
browser address bar (not by clicking through the site) to confirm the
SPA fallback is working:

- `/services/software-engineering`
- `/services/data-engineering`
- `/services/data-science-analytics`
- `/services/ai-ml-engineering`
- `/services/python-automation`
- `/services/technology-talent`
- `/privacy`
- `/terms`
- A nonexistent path (e.g. `/does-not-exist`) to confirm the 404 page renders

## Accessibility

- Skip-to-content link, semantic landmarks, one `<h1>` per route
- Keyboard-accessible navigation, tabs, and mobile drawer (focus trap,
  Escape to close, focus restored to the trigger on close)
- Visible focus states throughout (never removed without a replacement)
- Form labels and errors connected via `aria-describedby`/`aria-invalid`
- `aria-current` on the active nav item and breadcrumb
- `prefers-reduced-motion` disables hero autoplay/looping and Framer
  Motion animation across the site

## Performance

- No large UI framework; dependencies are limited to what's listed above
- Hero video is skipped entirely for reduced-motion users and falls
  back to a CSS gradient if the file is missing or fails to load
- Images should be added as WebP with explicit dimensions where you
  place them (see Asset instructions)

## Media optimization

Recommended before launch:

- Compress the hero video to a few megabytes with no audio track
- Export supporting images as WebP
- Run `npm run build` and check the `dist/assets` output size

## Asset instructions

Add these files (not included, since they're binary media, not code)
before launch — see `public/media/README.md` for the full list:

- `public/media/chiptek-hero.mp4`
- `public/media/chiptek-hero-poster.webp`
- `public/media/chiptek-team.webp` (optional)
- `public/media/software-engineering.webp`, `data-engineering.webp`,
  `ai-engineering.webp` (optional supporting imagery)
- `public/og-image.webp` (1200×630 social share image)

## Production checklist

- [ ] Confirm whether the full street address is safe to publish
- [ ] Set `addressVisibility` deliberately (`full` / `city-only` / `hidden`)
- [ ] Add a real company email address
- [ ] Add Vinesh Kakarla's correct business role
- [ ] Add the real legal company name (if different from "Chiptek")
- [ ] Set the final production domain (`VITE_SITE_URL`)
- [ ] Configure `VITE_CONTACT_FORM_ENDPOINT`
- [ ] Test the telephone link and email link
- [ ] Replace hero video and poster with real media
- [ ] Add a real Open Graph image
- [ ] Review the favicon
- [ ] Review the Privacy Policy and Terms pages with a qualified professional
- [ ] Test all six direct service routes after deployment
- [ ] Test mobile navigation (drawer open/close, Escape key, focus return)
- [ ] Test keyboard-only navigation across the whole site
- [ ] Test with `prefers-reduced-motion` enabled
- [ ] Run `npm run build` and confirm it completes without errors
- [ ] Run Lighthouse and address any major flags
- [ ] Remove any unused placeholder content
- [ ] Confirm no fabricated claims (metrics, testimonials, certifications) appear anywhere
