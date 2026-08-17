# Nittoor Freelance Studio — Portfolio

The website for **Nittoor Freelance Studio**, the design practice of [Rajeesh Nittoor](https://www.linkedin.com/in/rajeeshnittoor/) — a freelance UX, service, and system designer based in Amsterdam.

Editorial, minimal, motion-driven. Built to showcase case studies across UX, service design, system design, and information visualization.

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router, React 19)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — design tokens in `src/app/globals.css`
- **[Motion](https://motion.dev/)** — scroll reveals and transitions
- **[Lenis](https://lenis.darkroom.engineering/)** — smooth scrolling
- **[Fraunces](https://fonts.google.com/specimen/Fraunces)** display serif + **Geist** sans/mono, via `next/font`

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Project structure

```
src/
  app/              # App Router entry, root layout, global styles
  components/
    layout/         # Header, Footer, Container, SmoothScroll
    sections/       # Homepage sections (Hero, SelectedWork, …)
    ui/             # Reusable pieces (WorkCard, Reveal, Grain, …)
  data/
    site.ts         # Brand, nav, contact, bio copy
    projects.ts     # Case-study content
```

Editing content rarely means touching components — most copy lives in `src/data/`.

## Design system

Design rules (including the type-size guardrail) live in `.kiro/steering/design-system.md`.
Key rule: the minimum font size anywhere on the site is **17px**.

## Deployment

Deployed on [Vercel](https://vercel.com/). Every push to `main` triggers an automatic deployment.

---

© Nittoor Freelance Studio · Registered in the Netherlands · KVK 94193622
