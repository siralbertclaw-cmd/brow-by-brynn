# Brynn's Website — Florida Brow Company

## Live Site
- Production: https://florida-brow.com
- Netlify project: brow-by-brynn
- GitHub: https://github.com/siralbertclaw-cmd/brow-by-brynn

## Stack
- React 19 + Vite + Tailwind CSS
- React Router v6 (BrowserRouter)
- Deployed via Netlify CLI (`netlify deploy --prod --dir=dist`)
- GitHub auto-deploy also connected — always push to GitHub after deploying

## Start Dev Server
```
cd ~/florida-brow-site && npm run dev
```
Runs at http://localhost:5173

## Build & Deploy
```
npm run build
netlify deploy --prod --dir=dist
git add -A && git commit -m "message" && git push origin main
```

## Pages
| Route | Page | Components |
|-------|------|------------|
| `/` | Home | Hero, SocialProof, VideoSection, Testimonials, Booking |
| `/services` | Services | Services, Credentials, Booking |
| `/portfolio` | Portfolio | Portfolio, Booking |
| `/about` | About | About, Booking |
| `/faq` | FAQ | FAQ, Locations, Booking |

## Key Files
- `src/content/services.json` — service names, descriptions, images, pricing
- `src/content/testimonials.json` — reviews (name, location, text, stars)
- `src/content/about.json` — Brynn's bio, photo, credentials list
- `src/content/faq.json` — FAQ questions and answers
- `src/content/locations.json` — Boulder CO + Ormond Beach FL studio info
- `src/index.css` — Tailwind config + custom classes (btn-primary, btn-outline, section-label, etc.)
- `public/brynn-pro.jpg` — hero portrait
- `public/lash-liner.jpg` — lash line enhancement service photo
- `public/hero-video.mp4` — promo video (plays at 1.5x speed, autoplay muted loop)
- `netlify.toml` — build config + SPA redirect rule
- `public/_redirects` — fallback SPA redirect for Netlify

## Locations
- Boulder, CO — Indie Salons #29, 2660 Canyon Blvd
- Ormond Beach, FL — Phenix Salon Suites #101, 266 N Nova Rd
- Phone: (720) 507-5119

## Booking Link
https://secure.acuityscheduling.com/appointments.php

## Design Tokens (Tailwind)
- `cream` — background
- `charcoal` — primary text
- `rose` — accent color
- `blush` — soft pink borders/backgrounds
- `gold` — star ratings, stat numbers

## Notes
- No em dashes (—) anywhere in copy — use commas, periods, or colons instead
- Client count: 1,000+ everywhere (Hero + SocialProof must match)
- Python 3.9 not relevant here — this is a pure frontend project
