# Terrence — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

**Live:** [terrence-builds.vercel.app](https://terrence-builds.vercel.app)

## Features

- Home, About, Work (with individual case-study pages + image galleries), Services, Contact, and Privacy Policy pages
- Dark/light theme toggle, defaulting to dark
- Real contact form backed by a Next.js API route + [Resend](https://resend.com)
- Animated hero, scroll-linked project stack, tech-stack carousel
- Branded 404 page and dynamically generated Open Graph image
- Fully responsive, verified across mobile/tablet/desktop breakpoints

## Tech Stack

Next.js · TypeScript · Tailwind CSS · Framer Motion · Resend · Vercel Analytics

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Environment Variables

Create a `.env.local` file with:

```bash
RESEND_API_KEY=your_resend_api_key
```

Required for the contact form to send email. Get a key at [resend.com](https://resend.com).

## Project Structure

- `src/app/` — routes (App Router)
- `src/components/` — UI components
- `src/data/content.ts` — all site copy, project/service data in one place
- `public/images/case-studies/` — project screenshots and gallery images

## Deployment

Deployed on Vercel, auto-deploying on every push to `main`.
