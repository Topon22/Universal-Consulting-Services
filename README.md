# Universal Consulting Services Group (UCSG)

A premium, fully-animated marketing website for **Universal Consulting Services Group** — a study-abroad consulting firm founded in 2022 by Joy Chowdhury (a multilingual U.S. Army veteran) that helps international students study in the USA affordably.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, **shadcn/ui**, **Framer Motion**, **Prisma**, and the **z-ai free LLM API** for the built-in AI chatbot.

---

## ✨ Features

- **Royal-blue + warm-orange brand theme** extracted directly from the UCSG logo
- **13 separate pages** via query-param routing on a single `/` route:
  - Landing page with 14 animated sections (hero, services, about, why-us, stats, process, testimonials, cases, team, CTA, contact, footer)
  - Services, About, Why Us, Process, Students, Contact overview pages
  - 6 service detail pages (Study in USA, College Transfer, Scholarships, CPT/OPT, Visa & Immigration, Pathway)
- **AI chatbot** (bottom-left floating widget) powered by the free z-ai LLM — a UCSG counselor persona that answers study-abroad questions and routes leads to consultation
- **Contact form** with Prisma persistence (SQLite locally, Postgres on Vercel) + sonner toasts
- **Dark mode default** with light-mode toggle (next-themes)
- **Heavy animations**: scroll reveals, parallax, magnetic buttons, 3D tilt cards, custom cursor, marquees, draggable case carousel, sticky process, aurora CTAs, floating contact dock
- **Fully responsive**, accessible, `prefers-reduced-motion` aware
- **SEO**: per-page metadata, OG/Twitter images, favicon set, PWA manifest

---

## 🚀 Deploy to Vercel (easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTopon22%2FUniversal-Consulting-Services&env=ZAI_BASE_URL,ZAI_API_KEY&envDescription=Z-AI%20chatbot%20credentials&project-name=ucsg&repository-name=ucsg)

### One-click deploy

1. Click the button above.
2. Vercel clones the repo and creates a new project.
3. When prompted, add these **Environment Variables** (see below).
4. Click **Deploy** — that's it. Vercel auto-detects Next.js, runs `bun install` + `postinstall` (Prisma generate) + `next build`, and ships.

### Required Environment Variables

| Variable | Required | Description |
|---|---|---|
| `ZAI_BASE_URL` | ✅ for chatbot | z-ai API base URL, e.g. `https://api.z.ai/api/v1` |
| `ZAI_API_KEY` | ✅ for chatbot | z-ai API key (e.g. `Z.ai`) |
| `ZAI_CHAT_ID` | optional | from your `.z-ai-config` |
| `ZAI_USER_ID` | optional | from your `.z-ai-config` |
| `ZAI_TOKEN` | optional | JWT token from your `.z-ai-config` |
| `DATABASE_URL` | optional | SQLite locally; Postgres on Vercel (see below) |

> **Where do I get the z-ai credentials?** They live in your local `.z-ai-config` file (project root, home dir, or `/etc/.z-ai-config`). Open it and copy `baseUrl`, `apiKey`, `chatId`, `userId`, `token` into the Vercel env vars above.

---

## 🗄️ Database setup (optional, for capturing contact-form leads)

The contact form **always returns success to the user**, but it only *persists* submissions if a working database is configured.

### Local dev (SQLite — zero config)

Already configured. `DATABASE_URL="file:./db/custom.db"` creates `db/custom.db` automatically. Run:

```bash
bun run db:push   # create tables
```

### Production on Vercel (Postgres)

Vercel's serverless filesystem is read-only, so SQLite won't persist. Use a managed Postgres:

1. Create a free Postgres DB ([Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres), [Neon](https://neon.tech), or [Supabase](https://supabase.com)).
2. In `prisma/schema.prisma`, change the provider:
   ```prisma
   datasource db {
     provider = "postgresql"   # was "sqlite"
     url      = env("DATABASE_URL")
   }
   ```
3. Set `DATABASE_URL` in Vercel env vars to your Postgres connection string.
4. Run locally to create tables: `bun run db:push`
5. Redeploy.

> Without a Postgres DB, the site still works perfectly on Vercel — the chatbot, pages, and form all function; submissions just won't be stored.

---

## 💻 Local development

```bash
# 1. Install deps
bun install

# 2. Set up the database
cp .env.example .env
bun run db:push

# 3. Start the dev server (http://localhost:3000)
bun run dev
```

The z-ai chatbot works locally out-of-the-box via the `.z-ai-config` file (no env vars needed). On Vercel, set the `ZAI_*` env vars.

---

## 🧱 Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui (New York) |
| Animation | Framer Motion |
| ORM | Prisma (SQLite locally, Postgres-ready) |
| AI chatbot | z-ai-web-dev-sdk (free LLM) |
| Icons | Lucide |
| Package manager | Bun |

---

## 📂 Project structure

```
src/
├── app/
│   ├── api/
│   │   ├── chat/route.ts        # AI chatbot endpoint (z-ai LLM)
│   │   └── contact/route.ts     # Contact form endpoint (Prisma)
│   ├── globals.css              # Brand theme (royal blue + orange)
│   ├── layout.tsx               # Root layout + metadata
│   └── page.tsx                 # ?view= router → 13 pages
├── components/
│   ├── brand/logo.tsx           # Official UCSG logo lockup
│   ├── interactive/             # Custom cursor, chat widget, contact dock, etc.
│   ├── pages/                   # Landing + 12 sub-pages + PageShell
│   ├── sections/                # 14 landing-page sections
│   └── ui/                      # shadcn/ui components
├── hooks/                       # use-magnetic, use-tilt, use-reduced-motion, etc.
└── lib/
    ├── data.ts                  # Company info, services, nav links
    ├── service-details.ts       # Rich content for 6 service detail pages
    └── db.ts                    # Prisma client
prisma/
└── schema.prisma                # ContactSubmission model
public/
├── ucs-logo-transparent.png     # Official logo (transparent bg)
├── og-image.png                 # Social share image
└── favicon*.{ico,png}           # Favicon set
```

---

## 📄 License

© 2026 Universal Consulting Services Group. All rights reserved.
