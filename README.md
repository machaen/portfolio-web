# Portfolio — Web (React + Vite + Tailwind)

Julio Betancourt's portfolio: a scroll-timeline of career experience with a working contact form.
The contact form is self-contained — `api/contact.js` is a Vercel serverless function that
verifies reCAPTCHA and sends the email directly via SMTP. No separate backend to host.

## Run locally

```bash
npm install
cp .env.example .env     # fill in the values — see "Configuration" below
npm run dev              # http://localhost:5173 — UI only, /api/contact isn't served
```

`npm run dev` is plain Vite — it doesn't run serverless functions, so the contact form will fail
to reach `/api/contact`. To test the form itself, run it through the Vercel CLI instead, which
serves the frontend and `api/contact.js` together on one origin:

```bash
npx vercel dev             # first run will ask you to log in and link the project
```

Build for production:

```bash
npm run build            # outputs to dist/
npm run preview          # serve the built site locally (UI only, same caveat as npm run dev)
```

## Project structure

```
api/
└── contact.js    Vercel serverless function — validates input, verifies reCAPTCHA,
                   sends the email via SMTP (nodemailer). Runs server-side only.
src/
├── data/         Your CV content as plain data — edit here, never touch JSX.
│   ├── profile.js      name, title, contact, summary line
│   ├── metrics.js      the four hero stats
│   ├── roles.js        timeline entries (descending; `milestone: true` highlights a bullet)
│   ├── skills.js       technical-stack groups
│   └── languages.js
├── lib/
│   ├── icons.js        maps a string key ("server", "shield"…) to a lucide icon
│   ├── api.js          posts to /api/contact (same-origin, no base URL needed)
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

## Configuration (`.env`)

| Variable                 | Where it's used      | What it is                                                          |
|---------------------------|----------------------|----------------------------------------------------------------------|
| `VITE_RECAPTCHA_SITE_KEY` | browser (frontend)    | reCAPTCHA v3 site key (public). Unset skips reCAPTCHA in dev.       |
| `RECAPTCHA_SECRET_KEY`    | `api/contact.js`      | Matching secret key (private). Unset disables verification.         |
| `RECAPTCHA_MIN_SCORE`     | `api/contact.js`      | Minimum v3 score to accept, default `0.5`.                          |
| `SMTP_HOST` / `SMTP_PORT` | `api/contact.js`      | Your SMTP server. `SMTP_SECURE=true` only for port 465.             |
| `SMTP_USER` / `SMTP_PASS` | `api/contact.js`      | SMTP credentials.                                                    |
| `MAIL_FROM`               | `api/contact.js`      | The visible "From". Must be an address you're allowed to send as.   |
| `CONTACT_TO`               | `api/contact.js`      | Where messages land (your inbox).                                    |

Only `VITE_`-prefixed variables reach the browser bundle — everything else stays server-side
inside the function, so your SMTP credentials and reCAPTCHA secret are never exposed to the client.

### Email provider notes

Any SMTP provider works:

- **Amazon SES**, **Resend / SendGrid / Mailgun / Postmark** — best deliverability, generous free tiers.
- **Gmail** — works for low volume with an **App Password** (not your normal password),
  `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`.

The reply-to on every email is set to the sender, so you can reply straight from your inbox.

## reCAPTCHA

The contact form uses reCAPTCHA v3 (invisible — no checkbox). On submit it fetches a
score-scoped token and sends it to `/api/contact` as `recaptchaToken` alongside the form fields.
The function verifies it against Google's `siteverify` endpoint and rejects anything below
`RECAPTCHA_MIN_SCORE` or with a mismatched action, before ever attempting to send mail.

There's also a honeypot (`company`) field, checked first since it's free — an obvious bot never
costs a `siteverify` call.

**Note:** there's no per-IP rate limiting here (the previous NestJS backend had one, but in-memory
throttling doesn't carry over meaningfully to a serverless function that may run on a fresh
instance per request). reCAPTCHA's score threshold and the honeypot are the spam defenses. If
abuse becomes a real problem, add a shared store (e.g. Upstash Redis) for rate limiting.

## Deploy

Deploys as a single Vercel project — framework preset **Vite**, build command `npm run build`,
output directory `dist`. Vercel auto-detects `api/contact.js` as a serverless function; no
extra config needed. Set all the variables from the table above in
**Project Settings → Environment Variables**.
