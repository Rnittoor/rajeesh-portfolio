# Nittoor — Design System Rules

Always-on rules for this portfolio. Follow them for every UI change.

## Type-size guardrail (hard rule)

- **Minimum font size anywhere on the site is 17px (`1.0625rem`).** Nothing goes below it — labels, eyebrows, meta, tags, nav, captions, footer, all included.
- `text-base` is redefined to **17px** in `globals.css`, so it is the smallest allowed Tailwind step.
- **Never use `text-xs` (12px) or `text-sm` (14px).** If a step below `text-base` is needed, the answer is still `text-base` (17px).
- The `.text-label` and `.eyebrow` helper classes are both 17px.
- Larger steps in ascending order: `text-lg` (18px) → `text-xl` → `text-2xl` → `--text-lead` → `--text-h2` → `--text-h1` → `--text-display`.

## Aesthetic direction

- Editorial / minimal, but warm — not stark, not "Swiss corporate".
- Calm, premium, contemporary. Generous whitespace, large typography.
- White canvas with a considered blue palette (tokens: `canvas`, `ink`, `body`, `muted`, `accent`, `blue-50…900`, `tint`).
- Visually varied sections, not a repeating card grid.
- Subtle, purposeful motion only (Lenis smooth scroll + Motion scroll reveals). Always respect `prefers-reduced-motion`.
- Headlines use the `font-display` serif (Fraunces); body/UI uses Geist sans; mono labels use Geist Mono.

## Layout

- Full-bleed sections; content constrained to ~1440px via `.container-content` with fluid gutters.
- Positioned as a design **studio** (Nittoor Freelance Studio), not a personal CV.
