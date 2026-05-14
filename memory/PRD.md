# Johnvekser.org — Landing Page (PRD)

## Original Problem Statement
Rebuild the Johnvekser.org homepage as a single, long-scrolling landing page. Enterprise-grade, minimal, futuristic, clean, and trustworthy. White background, all-black accents, fonts inspired by assembly.com (Cabinet Grotesk + Instrument Serif italic accents), premium UI similar to aofund.org. Real human entrepreneur images from Unsplash. All images in organic non-square shapes. Featured-in section with Forbes, Inc. 5000, HuffPost. 10 narrative slides converted to scroll sections.

## User Choices
- Single long-scroll page (not carousel)
- Static CTAs only (no backend form)
- Logo images from web for "Featured in"
- Accent color: black on white only

## Architecture
- React 19 + craco + Tailwind + shadcn/ui (light theme)
- Animation: framer-motion (entrance, scroll parallax, marquee)
- Fonts (Fontshare): Cabinet Grotesk (display) + Satoshi (body); Instrument Serif italic for accents
- No backend changes — fully static frontend

## What's been implemented (2025-12)
- Glass nav with JV mark + smooth in-page anchors
- Hero (Slide 1) — split layout, organic-shape image, floating "Cohort 07" card, trust stats
- Community (Slide 2) — circular framed image with Lima / Tamil Nadu pin badges
- Redefining (Slide 3) — 8-card bento grid with hover lift
- Shape (Slide 4) — huge display type + interactive tag chips
- Pillars (Slides 5–7) — Leadership / Strategize / Growth staggered 3-column
- Global (Slide 8) — orbital city ring visualization + office cards
- Featured (Slide 9) — animated marquee with Forbes / Inc / HuffPost / TechCrunch / CNN + 3 press quotes
- Final CTA (Slide 10) — large display type + dual CTAs
- Dark footer with site map + contact

## File Map
- `/app/frontend/src/App.js` — routes to Landing
- `/app/frontend/src/pages/Landing.jsx` — all section components
- `/app/frontend/src/index.css` — fonts, mesh/dot grid, marquee keyframes
- `/app/frontend/public/index.html` — Fontshare + Google Fonts links

## Backlog (P1)
- Functional "Apply for Funding" form (multistep + MongoDB submission)
- Founder spotlight section with real bios + portrait gallery
- Newsletter signup + Resend/Mailchimp integration
- Add localization (EN / ES / PT) for global offices
- Dedicated /press, /about, /apply routes

## Next Tasks
- Awaiting user direction. Suggested: enable the apply form and pipe submissions to admin inbox.
