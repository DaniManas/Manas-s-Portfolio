# CLAUDE.md

Single-page portfolio for Manas Dani, AI/ML Engineer. Built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.
**Read `manas-portfolio-spec-FINAL.md` for content. Read `DESIGN.md` before touching any UI.**

---

## Architecture

```
app/
  layout.tsx          # fonts, metadata, Vercel Analytics
  page.tsx            # imports and sequences all 12 section components
  globals.css         # CSS custom properties (design tokens only)
components/           # one file per section, no shared UI primitives
lib/
  data.ts             # all content as typed exports — the only source of truth
public/
  manas-dani-resume.pdf
```

### Where things belong
| Thing | Goes in |
|---|---|
| New section content | `lib/data.ts` |
| New section UI | `components/<SectionName>.tsx` |
| Design token | `globals.css` as a CSS custom property |
| One-off Tailwind value | inline `[]` syntax, not a new token |
| Page-level metadata | `app/layout.tsx` |
| Section order | `app/page.tsx` only |

---

## Code Style

- **TypeScript strict.** No `any`. Interfaces for all `lib/data.ts` shapes.
- **Tailwind for layout and spacing.** CSS custom properties (`var(--color-accent)`) for design tokens inside Tailwind arbitrary values.
- **`'use client'` on every component** that uses Framer Motion, `useState`, or `useEffect`.
- **Named exports** from components. Default export only in `app/page.tsx` and `app/layout.tsx`.
- **No inline styles** except where a CSS custom property is the clearest option.
- Framer Motion scroll animations: `initial="hidden"` `whileInView="visible"` `viewport={{ once: true, margin: '-80px' }}`.
- Respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()` — skip or snap animations when true.

---

## Tech Constraints

| Use | Never use |
|---|---|
| `next/font` for all fonts | `<link>` Google Fonts in `<head>` |
| `next/image` for all images | `<img>` tags |
| `lib/data.ts` for all content | hardcoded strings in JSX |
| `rel="noopener noreferrer"` on every `target="_blank"` | bare `target="_blank"` |
| Lucide React for UI icons | inline SVGs or other icon libs |
| Framer Motion for all animation | CSS keyframes or other animation libs |

---

## Commands

```bash
npm install                  # install deps
npm run dev                  # dev server → localhost:3000
npm run build                # production build (must pass before deploy)
npx tsc --noEmit             # type-check without building
vercel --prod                # deploy (or push to main for auto-deploy)
```

---

## Build Sessions

Each session = one plan-mode cycle. Read `CLAUDE.md` + `DESIGN.md` + relevant spec section at the start of each. Mark status when done.

| Session | Scope | Files touched | Status |
|---|---|---|---|
| 0 — Scaffold | `globals.css` tokens, `lib/data.ts` types + data, `layout.tsx` fonts/meta, `page.tsx` shell, `tailwind.config.ts`, `next.config.js` | `app/*`, `lib/data.ts` | Done |
| 1 — Nav | `Nav.tsx` — sticky, scroll transparency, mobile hamburger, resume download | `components/Nav.tsx` | Done |
| 2 — Hero | `Hero.tsx` — full viewport, staggered entrance, status badge, social links, scroll indicator | `components/Hero.tsx` | Done |
| 3 — About | `About.tsx` — two-column layout, bio paragraphs, stats card | `components/About.tsx` | Not started |
| 4 — Experience | `Experience.tsx` — vertical timeline, 4 entries, current badge | `components/Experience.tsx` | Not started |
| 5 — Projects | `Projects.tsx` — featured card full-width, 2-col grid, 8 projects, tech tags | `components/Projects.tsx` | Not started |
| 6 — Skills | `Skills.tsx` — category rows, pill tags, muted "Familiar" row | `components/Skills.tsx` | Not started |
| 7 — Writing | `Writing.tsx` — 2-col blog cards, Medium CTA | `components/Writing.tsx` | Not started |
| 8 — Certifications | `Certifications.tsx` — cert cards, badge images, placeholder card | `components/Certifications.tsx` | Not started |
| 9 — Testimonials | `Testimonials.tsx` — quote cards, left border accent | `components/Testimonials.tsx` | Not started |
| 10 — Education | `Education.tsx` — 2 cards, GPA badges, in-progress tag | `components/Education.tsx` | Not started |
| 11 — Contact + Footer | `Contact.tsx` — centered, 2x2 link grid. `Footer.tsx` — single row | `components/Contact.tsx`, `components/Footer.tsx` | Not started |
| 12 — Polish + Deploy | Animation audit, mobile QA (375/390/414), keyboard nav, Lighthouse, Vercel deploy | all files | Not started |

Update `Not started → In progress → Done` as you go.

**DoD per component:** content from `data.ts` ✓ · design tokens match `DESIGN.md` ✓ · responsive 375/768/1280 ✓ · animations `once:true` ✓ · keyboard navigable ✓ · `tsc` clean ✓

---

## Never Do This

- Don't read the spec and start writing JSX. Write `lib/data.ts` types and data first.
- Don't add a component to `page.tsx` until it passes DoD.
- Don't create shared UI primitives (no `<Button>`, `<Card>` wrappers) — each component owns its own markup.
- Don't use `any`, `@ts-ignore`, or `as unknown as X` to silence type errors — fix them.
- Don't add dependencies without a clear reason — the stack is fixed.
- Don't put design token values (hex codes, px sizes) anywhere except `globals.css`.
- Don't skip `useReducedMotion()` — accessibility is not optional.
