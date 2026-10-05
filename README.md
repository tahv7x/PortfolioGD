# Graphic Design Portfolio

A dark, editorial portfolio for a graphic and UI/UX designer. The site combines a premium Behance-inspired presentation with responsive layouts, project filtering, smooth motion, and a central content file that is easy to customise.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Local Manrope and Bodoni Moda variable fonts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customising the portfolio

Start with [`data/portfolio.ts`](data/portfolio.ts). It contains the editable profile information, navigation, statistics, projects, services, filters, and social links.

Replace the placeholder project artwork inside `public/projects/` while keeping the paths in `data/portfolio.ts` in sync.

The main visual tokens and global effects live in `app/globals.css`. Tailwind colours and typography are configured in `tailwind.config.ts`.

## Project structure

```text
app/
  globals.css       Global theme, effects, and responsive typography
  layout.tsx        Root metadata, fonts, and document layout
  page.tsx          Homepage section assembly
  projects/[slug]/  Dynamic project case-study pages
components/
  About.tsx
  Contact.tsx
  Hero.tsx
  Navbar.tsx
  Projects.tsx
  SectionHeading.tsx
  Skills.tsx
data/
  portfolio.ts      All editable portfolio content
lib/
  utils.ts          Shared class-name utility
public/
  brand/            Personal logo and brand assets
  projects/         Project covers, galleries, and artwork
```

## Quality checks

```bash
npm run lint
npm run build
```

Both commands should pass before pushing changes or deploying.

## Deployment

The project can be deployed directly to Vercel or any platform that supports a standard Next.js build:

```bash
npm run build
npm start
```
