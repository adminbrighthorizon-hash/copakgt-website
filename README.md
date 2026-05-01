# COPAK GT Website (Astro)

## GitHub Pages Rendering Issue: Problem Statement and Resolution

### Overview
The Astro website renders correctly in the local development environment but can display incorrectly when deployed to GitHub Pages.

Common symptoms in production:
- Missing or broken styling (CSS not applied)
- Images not loading
- Navigation links not functioning correctly

### Context
- Local: `http://localhost:4321/` (works as expected)
- GitHub Pages: `https://adminbrighthorizon-hash.github.io/copakgt-website/` (can appear visually broken if paths are not base-aware)

### Root Cause
GitHub Pages serves the site from a subdirectory:

`/copakgt-website/`

If the app uses absolute root paths like `/image.png`, `/styles.css`, or `/about`, those paths resolve from `/` instead of the project subdirectory, causing failed asset and route resolution.

### Resolution
Use base-aware paths via:

`import.meta.env.BASE_URL`

This project is configured for GitHub Pages in `astro.config.mjs`:
- `site: 'https://adminbrighthorizon-hash.github.io'`
- `base: '/copakgt-website'`

## Step-by-step Fix Pattern

### 1) Define base in Astro files
```astro
---
const base = import.meta.env.BASE_URL;
---
```

### 2) Update image references
Before:
```astro
<img src="/logo.png" />
```

After:
```astro
<img src={`${base}logo.png`} />
```

### 3) Update favicon reference
Before:
```astro
<link rel="icon" href="/favicon.svg" />
```

After:
```astro
<link rel="icon" href={`${base}favicon.svg`} />
```

### 4) Update navigation links
Before:
```astro
<a href="/about">About</a>
```

After:
```astro
<a href={`${base}about`}>About</a>
```

### 5) Update CSS/static references
Before:
```astro
<link rel="stylesheet" href="/styles.css" />
```

After:
```astro
<link rel="stylesheet" href={`${base}styles.css`} />
```

### 6) Project-wide checks
Search for:
- `src="/`
- `href="/`

Replace with base-aware paths using `import.meta.env.BASE_URL`.

### 7) Validate locally (production simulation)
```bash
npm run build
npm run preview
```

Open:

`http://localhost:4321/copakgt-website/`

Confirm:
- Styling is applied
- Images load correctly
- Navigation works

### 8) Redeploy to GitHub Pages
```bash
npm run deploy
```

### 9) Verify production deployment
Open:

`https://adminbrighthorizon-hash.github.io/copakgt-website/`

Confirm:
- Layout is correct
- Assets load properly
- Links function as expected

## Best Practice
- Avoid hardcoded root paths (`/`)
- Always use `import.meta.env.BASE_URL` for internal assets/routes
- Centralize base-path handling in layouts/components where possible

## Local Testing (Before Pushing)

### 1. UI / layout testing
```bash
npm run dev
```
Open **http://localhost:4321** in your browser.  
Base URL is `/` locally — no subdirectory prefix — so all links and assets resolve normally.

> **Contact form** — the `/api/contact` endpoint is a Cloudflare Pages Function and will **not** run in `npm run dev`. For form testing, use the Wrangler method below.

### 2. Production simulation (GitHub Pages)
Simulates the `/copakgt-website/` base path used on GitHub Pages:
```bash
npm run build
npm run preview
```
Open **http://localhost:4321/copakgt-website/** and confirm:
- Styling is applied
- Images load correctly
- Navigation links work

### 3. Full Cloudflare simulation (includes contact form)
Builds and serves the site exactly as Cloudflare Pages would, including the `/api/contact` edge function:
```bash
npm run build
npx wrangler pages dev dist --compatibility-date=2024-01-01
```
Pass environment variables if testing the contact form:
```bash
npx wrangler pages dev dist --compatibility-date=2024-01-01 --binding RESEND_API_KEY=your_key_here
```
Open **http://localhost:8788**.

---

## GitHub Actions CI/CD

### Branch behaviour

| Branch | Workflow file | What happens |
|---|---|---|
| `dev` | `deploy-github-pages.yml` | Builds site and deploys to GitHub Pages (`gh-pages` branch) |
| `main` | `deploy-cloudflare.yml` | Builds site and deploys to Cloudflare Pages |

### Required GitHub secrets
Add these under **Settings → Secrets and variables → Actions**:

| Secret | Description |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with **Cloudflare Pages: Edit** permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

### GitHub Pages setting required
In your GitHub repository:
- Go to **Settings → Pages**
- Set **Source** to **GitHub Actions**

## Cloudflare Pages

- **Deployed via:** `deploy-cloudflare.yml` on push to `main`
- **Project name:** `copakgt-website`
- **Production URL:** https://copakgt-website.pages.dev
- Build uses `CF_PAGES=1` env var so `astro.config.mjs` sets base to `/` (no subdirectory)

## Contact Form Server Email Delivery

The contact form posts to `/api/contact` when a backend endpoint is available and falls back to opening the visitor's email client on static hosts like GitHub Pages.

### Required Cloudflare environment variables (Pages project)
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (optional, defaults to `info@copak.com`)

### Notes
- No SMTP credentials are exposed in browser code.
- Current sender is `onboarding@resend.dev` for initial setup.
- For production branding, verify your domain in Resend and replace the sender in `functions/api/contact.ts`.
