# Portfolio — Web (React + Vite + Tailwind)

Julio Betancourt's portfolio: a scroll-timeline of career experience with a working contact form.

## Run locally

```bash
npm install
cp .env.example .env     # set VITE_API_BASE to your contact API
npm run dev              # http://localhost:5173
```

Build for production:

```bash
npm run build            # outputs to dist/
npm run preview          # serve the built site locally
```

## Project structure

```
src/
├── data/         Your CV content as plain data — edit here, never touch JSX.
│   ├── profile.js      name, title, contact, summary line
│   ├── metrics.js      the four hero stats
│   ├── roles.js        timeline entries (descending; `milestone: true` highlights a bullet)
│   ├── skills.js       technical-stack groups
│   └── languages.js
├── lib/
│   ├── icons.js        maps a string key ("server", "shield"…) to a lucide icon
│   ├── api.js          contact API client (reads VITE_API_BASE)
│   └── recaptcha.js    loads reCAPTCHA v3 and issues action-scoped tokens
├── hooks/
│   └── useReveal.js    IntersectionObserver scroll-reveal
├── components/
│   ├── layout/         Navbar, Footer
│   ├── sections/       Hero, Timeline, Skills, Contact
│   ├── timeline/       RoleCard, Bullet
│   └── ui/             Reveal, SectionHeading, ContactForm
├── App.jsx             composes the sections
├── main.jsx            entry point
└── index.css           Tailwind layers + custom bits (spine, node, reveal)
```

## Editing content

- **Add a job**: prepend an object to `src/data/roles.js` (top = most recent). Set
  `milestone: true` on the bullet you want emphasized.
- **Change the palette / fonts**: `tailwind.config.js` (`theme.extend.colors` / `fontFamily`).
- **Point at your API**: `VITE_API_BASE` in `.env`. The form posts to `${VITE_API_BASE}/api/contact`.

## reCAPTCHA

The contact form uses reCAPTCHA v3 (invisible — no checkbox). On submit it fetches a
score-scoped token and sends it to the API as `recaptchaToken` alongside the form fields.

- **Site key** (public): set `VITE_RECAPTCHA_SITE_KEY` in `.env`, from the
  [reCAPTCHA admin console](https://www.google.com/recaptcha/admin). Leave it unset in local dev
  to skip reCAPTCHA entirely — `getRecaptchaToken` returns `null` and the request goes through
  without a token.
- **Secret key** (private): this repo never sees it. The verification call to Google's
  `siteverify` endpoint, and the score-threshold decision (reject below ~0.5), belong in the
  `portfolio-api` project — the frontend only obtains and forwards the token, it can't enforce
  anything on its own.

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages, S3+CloudFront). Build command
`npm run build`, output directory `dist`. Set `VITE_API_BASE` as an environment variable in the
host so the production build points at your deployed contact API.
# portfolio-web
