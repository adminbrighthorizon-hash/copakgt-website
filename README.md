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

## GitHub Actions CI/CD

### Branch behavior
- Push to `dev` runs CI build automatically via `.github/workflows/dev-ci.yml`
- Push to `dev` deploys to GitHub Pages via `.github/workflows/deploy-github-pages.yml`

## Cloudflare Deployment (Simplified)

Cloudflare deployment is handled only by **Cloudflare Pages Git integration**.

### Source of truth
- Branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

### Important
- Use the Pages URL (for example `https://copakgt-website.pages.dev`) for validation.
- Do not use a Workers URL (`*.workers.dev`) for this static Astro site.
- No GitHub Action is needed for Cloudflare deployment.

### GitHub Pages setting required
In your GitHub repository:
- Go to **Settings → Pages**
- Set **Source** to **GitHub Actions**

## Contact Form Server Email Delivery

The contact form posts to `/api/contact` when a backend endpoint is available and falls back to opening the visitor's email client on static hosts like GitHub Pages.

### Required Cloudflare environment variables (Pages project)
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (optional, defaults to `info@copak.com`)

### Notes
- No SMTP credentials are exposed in browser code.
- Current sender is `onboarding@resend.dev` for initial setup.
- For production branding, verify your domain in Resend and replace the sender in `functions/api/contact.ts`.
