# Doodle Bouquet

A romantic Next.js landing page with neon doodle florals, glassmorphism, Framer Motion, and particle effects.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

This project is configured for [Vercel](https://vercel.com) via [`vercel.json`](./vercel.json).

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/doodle-bouquet)

Replace `YOUR_USERNAME` with your GitHub username after pushing the repo.

### Deploy from the CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts for production:

```bash
vercel --prod
```

### Vercel project settings (Dashboard)

| Setting | Value |
|--------|--------|
| **Framework Preset** | Next.js |
| **Root Directory** | `.` (repo root — use `doodle-bouquet` if this app lives in a monorepo subfolder) |
| **Build Command** | `npm run build` |
| **Install Command** | `npm install` |
| **Output Directory** | *(leave default — Vercel sets this for Next.js)* |
| **Node.js Version** | 20.x or later |

No environment variables are required for the current static site. See [`.env.example`](./.env.example) for optional placeholders.

### Monorepo note

If Vercel picks the wrong workspace root because of another `package-lock.json` in a parent folder, set **Root Directory** to `doodle-bouquet` in the Vercel project settings.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- tsParticles
