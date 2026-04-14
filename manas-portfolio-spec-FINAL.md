# Portfolio Website Spec — Manas Dani (FINAL)
**AI/ML Engineer | GenAI Systems | RAG & Multi-Agent Pipelines**
**Version:** Final | **Date:** April 2026

---

## 1. Project Overview

### Purpose
A personal portfolio website for Manas Dani — AI/ML Engineer specializing in production GenAI systems. The site serves two audiences simultaneously:
- **Recruiters:** Fast, scannable, clear value proposition. Gets them to reach out in under 60 seconds.
- **Technical peers & collaborators:** Depth, credibility, real project substance.

### Goals
- **Primary:** Land interviews at AI-forward companies building serious products
- **Secondary:** Establish public presence as a GenAI thought leader through writing and open-source work

### Tone
Professional yet first-person. Warm, direct, confident — not arrogant. Reads like a senior engineer who also knows how to communicate clearly. Not a cold corporate bio, not an informal blog. Think: "I built this. Here's why it matters."

---

## 2. Tech Stack

| Concern | Decision | Rationale |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | SSR for SEO, fast page loads, React component model |
| **Styling** | Tailwind CSS + CSS custom properties | Utility-first + design token support |
| **Fonts** | Google Fonts: Playfair Display + DM Sans + JetBrains Mono | Via `next/font` for performance |
| **Icons** | Lucide React + Simple Icons | Lucide for UI, Simple Icons for brand logos |
| **Animations** | Framer Motion | Scroll animations, hover states, page transitions |
| **Hosting** | Vercel (free tier) | First-class Next.js support, instant deploys from GitHub |
| **Resume** | PDF hosted in `/public` folder | Direct download link, no external dependency |
| **Analytics** | Vercel Analytics (free, privacy-friendly) | Built into Vercel, zero config |
| **Design reference** | Claude DESIGN.md (via `npx getdesign@latest add claude`) | Exact Claude design tokens for pixel-perfect fidelity |

### Project Structure
```
manas-portfolio/
├── DESIGN.md                  # Claude design system (from getdesign CLI)
├── CLAUDE.md                  # Instructions for Claude Code
├── public/
│   └── manas-dani-resume.pdf
├── app/
│   ├── layout.tsx
│   ├── page.tsx               # Single-page, all sections
│   └── globals.css            # CSS custom properties / design tokens
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Writing.tsx
│   ├── Certifications.tsx
│   ├── Testimonials.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── data.ts                # All content as typed constants
```

---

## 3. Design System

### Aesthetic
**"Warm Editorial AI"** — Exact Claude.ai color language. Clean, trustworthy, intellectually curious. Not a dark hacker theme. Not a generic Bootstrap site. Warm cream backgrounds, terracotta accents, editorial typography. Feels like a thoughtful engineer who also cares about craft.

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--color-accent` | `#C96442` | Primary CTA buttons, active nav, highlights, timeline line |
| `--color-accent-light` | `#E8916F` | Hover states, gradient ends |
| `--color-accent-pale` | `#FDF0EB` | Section bg tints, badge fills, stat cards |
| `--color-bg` | `#FAF7F2` | Page background |
| `--color-surface` | `#FFFFFF` | Card backgrounds, nav (on scroll) |
| `--color-ink` | `#1A1614` | Primary text, headings |
| `--color-ink-muted` | `#6B5E57` | Secondary text, captions, metadata, labels |
| `--color-border` | `#EDE8E3` | Card borders, dividers, input borders |
| `--color-shadow` | `rgba(201,100,66,0.08)` | Card shadows — warm, not cold grey |

### Typography
| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero name | Playfair Display | 700 | 64px desktop / 40px mobile |
| Section headings | Playfair Display | 600 | 36px desktop / 28px mobile |
| Card headings | DM Sans | 600 | 20px |
| Body text | DM Sans | 400 | 16px / line-height 1.7 |
| Labels / nav | DM Sans | 500 | 14px, letter-spacing 0.05em |
| Section eyebrow labels | DM Sans | 600 | 11px, ALL CAPS, letter-spacing 0.12em, terracotta color |
| Tech stack tags | JetBrains Mono | 400 | 12px |
| Code snippets | JetBrains Mono | 400 | 14px |

### Spacing & Layout
- Max content width: **1100px**, centered with auto horizontal margins
- Section vertical padding: **96px top/bottom** (desktop), **64px** (mobile)
- Card border radius: **12px**
- Card padding: **28px**
- Grid gap: **24px**
- Nav height: **64px**

### Component Patterns

**Cards:**
```
background: var(--color-surface)
border: 1px solid var(--color-border)
border-radius: 12px
box-shadow: 0 2px 12px var(--color-shadow)
transition: transform 200ms ease, box-shadow 200ms ease
hover: translateY(-3px), shadow deepens slightly
```

**Primary Button (filled):**
```
background: var(--color-accent)
color: white
border-radius: 8px
padding: 12px 24px
font: DM Sans 500 15px
hover: background lightens to --color-accent-light
```

**Secondary Button (outlined):**
```
background: transparent
border: 1.5px solid var(--color-accent)
color: var(--color-accent)
border-radius: 8px
padding: 11px 24px
hover: background --color-accent-pale
```

**Tech Stack Tags:**
```
font: JetBrains Mono 12px
background: --color-accent-pale
color: --color-accent
border-radius: 4px
padding: 3px 8px
```

**Section Eyebrow:**
```
font: DM Sans 600 11px ALL CAPS
letter-spacing: 0.12em
color: --color-accent
margin-bottom: 8px
```

### Animations (Framer Motion)
- **Scroll reveal:** `fadeInUp` — `opacity: 0 → 1`, `y: 24 → 0`, `duration: 0.5s`, `delay: staggered`
- **Card hover:** `scale: 1 → 1.01`, `y: 0 → -3px`, `duration: 0.2s`
- **Nav links:** Terracotta underline grows left → right on hover (`::after` pseudo-element)
- **Status badge dot:** Pulsing scale animation, 2s loop
- **Hero entrance:** Staggered reveal — avatar → name → tagline → CTAs → social links
- **No flashy effects.** Everything is subtle, intentional, refined.

### Responsive Breakpoints
| Breakpoint | Width | Changes |
|---|---|---|
| Mobile | < 768px | Single column, reduced font sizes, hamburger nav |
| Tablet | 768px–1024px | 2-col grid adjusts to single col for some sections |
| Desktop | > 1024px | Full layout as designed |

---

## 4. Site Sections — Full Content Spec

---

### 4.1 Navigation

**Behavior:**
- Fixed/sticky at top, z-index above all content
- On hero: background transparent, text ink color
- On scroll past hero: background `--color-surface` (#fff), subtle bottom border + warm shadow
- Smooth transition between states

**Left side:** `MD` monogram (24px circle, terracotta bg, white text, DM Sans 600) + `Manas Dani` (DM Sans 500 16px, ink)

**Center links (desktop):** `About` · `Experience` · `Projects` · `Contact`
- Active state: terracotta color + underline
- Hover: terracotta color, underline animates in

**Right side:** `Download Resume` — outlined terracotta button, downloads `/public/manas-dani-resume.pdf`

**Mobile:**
- Hamburger icon (right side)
- Full-screen overlay menu, cream background
- Links stacked vertically, large font
- Resume download button at bottom of overlay

---

### 4.2 Hero Section

**Layout:** Full viewport height (`100vh`), content vertically and horizontally centered
**Background:** `--color-bg` (#FAF7F2) + subtle noise/grain texture overlay (5% opacity SVG filter) + very faint dot grid pattern

**Content (staggered Framer Motion entrance, top to bottom):**

1. **Avatar** — 120px circle
   - Background: `--color-accent` terracotta
   - Text: `MD` in Playfair Display 32px white
   - Subtle warm shadow
   - *Placeholder for headshot photo — same dimensions, swap with `<Image>` when ready*

2. **Name:** `Manas Dani`
   - Playfair Display 700, 64px desktop / 40px mobile
   - Color: `--color-ink`

3. **Tagline:** `AI/ML Engineer building production GenAI systems`
   - DM Sans 400, 22px desktop / 18px mobile
   - Color: `--color-ink-muted`

4. **Specializations:** `RAG Pipelines · Multi-Agent Orchestration · LLM Applications`
   - DM Sans 500, 15px
   - Color: `--color-accent`
   - Dots as separators

5. **Status badge:** `● Open to Full-Time Roles`
   - Pill shape, `--color-accent-pale` background, `--color-accent` text
   - Dot pulses with CSS scale animation (2s infinite)

6. **CTA buttons (horizontal pair):**
   - `View My Work` → smooth scroll to #projects (primary filled button)
   - `Read My Writing →` → opens `https://medium.com/@manasdani999` in new tab (secondary outlined button)

7. **Social links row** (small icons, muted, spaced evenly):
   - GitHub → `https://github.com/DaniManas`
   - LinkedIn → `https://linkedin.com/in/manasdani`
   - Medium → `https://medium.com/@manasdani999`
   - Email → `mailto:manasdani999@gmail.com`

**Scroll indicator:** Small animated chevron/arrow at bottom center, fades out on scroll

---

### 4.3 About Section

**ID:** `#about`
**Layout:** Two columns, 60/40 split (prose left, stats card right). Stacks on mobile.
**Background:** `--color-bg`

**Section eyebrow:** `ABOUT`
**Section heading:** `Building AI that actually works in production`

**Left column — Bio (first-person, professional):**

> I'm an AI/ML Engineer specializing in production GenAI systems — RAG pipelines, multi-agent orchestration, and fine-tuning workflows. My background spans intelligent document processing at enterprise scale at Cognizant (British Airways project) to shipping LLM applications with LangChain, LangGraph, FastAPI, Docker, and AWS.
>
> What drives me is the gap between impressive demos and systems that actually hold up in production. I care deeply about evaluation frameworks, observability, and building AI that non-technical stakeholders can understand, trust, and use effectively.
>
> I'm currently pursuing my Masters in Data Science at Indiana University Bloomington (GPA: 3.82/4.0), working as a Research Assistant at the Kelley School of Business on AI Visibility and Answer Engine Optimization, while exploring the intersection of LLMs and biomedical data science.

**Right column — Stats card** (`--color-accent-pale` background, 12px radius):

| Icon | Stat |
|---|---|
| 🎓 | MS Data Science @ IU Bloomington (2026) |
| 📊 | GPA: 3.82 / 4.0 |
| 💼 | 3+ years across research & industry |
| 🔬 | Research Assistant, Kelley School of Business |
| 🏥 | Biomedical Data Science @ IU |
| ✍️ | GenAI writer on Medium |
| 📍 | Bloomington, IN · Open to relocation |

---

### 4.4 Experience Section

**ID:** `#experience`
**Layout:** Vertical timeline
- Terracotta vertical line on the left (2px, `--color-accent`)
- Terracotta filled circle dot at each entry point (10px circle)
- Cards offset to the right of the line
- Cards animate in on scroll (fadeInUp with stagger)

**Section eyebrow:** `EXPERIENCE`
**Section heading:** `Where I've Worked`

---

**Entry 1 — Current**
- **Role:** Research Assistant – AI Visibility & Answer Engine Optimization
- **Company:** Indiana University Kelley School of Business
- **Duration:** January 2026 – Present
- **Location:** Bloomington, IN
- **Badge:** `Current` — small terracotta pill
- **Bullets:**
  - Developed an AEO platform processing 100+ websites weekly into LLM-ready structured artifacts — web crawl, content extraction, chunking, JSON-LD schema generation — achieving 95%+ extraction accuracy across 15+ content quality metrics.
  - Tracked brand visibility and citation rankings for 50+ brands daily across 4 LLM platforms (ChatGPT, Perplexity, Gemini, Claude); delivered weekly insights to research leadership used in active academic research.

---

**Entry 2**
- **Role:** Research Assistant – Social Media User Representation Learning
- **Company:** Indiana University Bloomington
- **Duration:** August 2025 – December 2025
- **Location:** Bloomington, IN
- **Bullets:**
  - Fine-tuned Sentence-BERT with contrastive learning (triplet loss) on a 26M+ user Bluesky dataset; outperformed baseline pretrained model across 3 similarity benchmarks and top-k retrieval metrics.
  - Engineered a distributed data pipeline on JetStream — compressed JSON to Parquet, FAISS similarity search, UMAP visualization — processing multi-TB datasets for large-scale social network clustering research.

---

**Entry 3**
- **Role:** AI Developer Intern
- **Company:** Ohacks / Heritage Square Foundation
- **Duration:** June 2025 – August 2025
- **Location:** Remote
- **Bullets:**
  - Shipped Archyx AI, a production RAG system (LangChain + ChromaDB) supporting 10K+ document chunks across 3 LLM providers (OpenAI, Groq, OpenRouter), reducing manual archival curation time by 40%.
  - Implemented evaluation suite (unit tests + cross-provider consistency checks) and integrated API-level cost tracking per provider; documented pipeline end-to-end enabling non-technical stakeholders to operate independently.
- **Link:** `github.com/DaniManas/Archyx-Ai`

---

**Entry 4**
- **Role:** Programmer Analyst – SAP VIM (British Airways Project)
- **Company:** Cognizant
- **Duration:** February 2022 – July 2024
- **Location:** Pune, India
- **Bullets:**
  - Supported OCR-driven invoice automation processing 10,000+ invoices/month for British Airways — diagnosed extraction failures, tuned exception-handling workflows, and validated document capture accuracy across multi-vendor invoice formats.
  - Coordinated fixes across Finance, IT, and Procurement via Jira; conducted training sessions for 20+ users, developing sharp instincts for data quality, failure modes, and cross-functional communication.

---

### 4.5 Projects Section

**ID:** `#projects`
**Section eyebrow:** `PROJECTS`
**Section heading:** `Things I've Built`
**Sub-heading:** `From multi-agent systems to production ML APIs — built to ship, not just demo.`

**Layout:**
- **Row 1:** One full-width featured card (BlogGenie)
- **Row 2+:** 2-column card grid
- Each card: title, date badge, description, tech stack tags, GitHub link button
- Featured card also has a subtle terracotta left border accent (4px) and slightly richer description

---

**FEATURED — BlogGenie — Multi-Agent Blog Writing System**
- **Date:** March 2026
- **Category tag:** `GenAI · Agents`
- **Description:** Architected a 7-node LangGraph multi-agent pipeline with 3 routing modes, parallel Send-API fanout, and stateful agent memory managing short-term context across nodes. An AI planner reasons through structure, research needs, and section dependencies before any content is written — then delegates to specialized writer agents per section. Deployed via FastAPI + Streamlit with Tavily web retrieval and JSON-fallback handling.
- **Stack tags:** `LangGraph` `LangChain` `OpenAI` `Tavily` `FastAPI` `Streamlit`
- **Link:** `github.com/DaniManas/BlogGenie`

---

**ChurnPilot AI — Churn Prediction Platform**
- **Date:** February 2026
- **Category tag:** `ML · MLOps`
- **Description:** Production churn prediction API deployed on AWS EC2. ROC-AUC 0.8428, recall 0.74, 41/41 pytest passing. Built with real-time and async batch inference, PSI drift monitoring, API-key authentication, multi-stage Docker builds, and environment-based secrets management.
- **Stack tags:** `Python` `FastAPI` `scikit-learn` `Docker` `AWS EC2`
- **Link:** `github.com/DaniManas/churnpilot-ai`

---

**ResearchMCP — Production MCP Server**
- **Date:** October 2025
- **Category tag:** `Open Source · Agents`
- **Description:** Open-source MCP server for academic literature discovery. 5 pydantic-typed tools — search papers, fetch abstracts, extract claims, compare papers, find research gaps — giving any MCP client live query access to the OpenAlex corpus. Supports chained multi-step agentic research workflows (search → compare → find gaps) in a single session without a separate RAG pipeline.
- **Stack tags:** `Python` `FastMCP` `Pydantic` `OpenAlex API`
- **Link:** `github.com/DaniManas/ResearchMCP`

---

**MindBridge — Mental Health AI Companion** *(Claude Hackathon)*
- **Date:** 2025
- **Category tag:** `GenAI · Hackathon`
- **Description:** A calm mental-health companion built for people navigating stressful job search phases. Features Sage AI (Claude-powered streaming chat with journal-aware personalization and crisis keyword detection), anonymous peer community rooms, wellbeing tools (box breathing, grounding exercises, rejection reframe), and private journaling with mood tagging. Built end-to-end in a hackathon sprint.
- **Stack tags:** `Anthropic Claude` `FastAPI` `ChromaDB` `React` `SQLite`
- **Link:** `github.com/DaniManas/Mind-Bridge`

---

**Archyx AI — Production RAG System**
- **Date:** Summer 2025
- **Category tag:** `GenAI · RAG`
- **Description:** Production RAG system supporting 10K+ document chunks across 3 LLM providers (OpenAI, Groq, OpenRouter). Reduced manual archival curation time by 40%. Includes cross-provider evaluation suite, API-level cost tracking, and full documentation enabling non-technical operators to run it independently. Built and shipped during internship at Ohacks / Heritage Square Foundation.
- **Stack tags:** `LangChain` `ChromaDB` `OpenAI` `Groq` `OpenRouter` `FastAPI`
- **Link:** `github.com/DaniManas/Archyx-Ai`

---

**HTN Prediction — LLM Medication Embeddings** *(Research)*
- **Date:** April 2026
- **Category tag:** `Research · Biomedical`
- **Description:** Investigated whether GatorTron LLM-based medication embeddings outperform conventional drug features for hypertension prediction on 208,952 patients from the NIH All of Us Research Program dataset. Built 3 model pipelines — clinical baseline, traditional drug features, and GatorTron embeddings — with ablation studies across embedding dimensions (8/32/64) and pooling strategies. Primary metric: AUROC.
- **Stack tags:** `GatorTron` `XGBoost` `Logistic Regression` `BigQuery` `OMOP CDM` `Python`
- **Note:** Research project (IU INFO/SICE 590) — no public repo. Team: Manas Dani, Sreeram Tirumala, Madhumitha Gannavaram, Virija Nandamudi.

---

**LLM Marketplace Platform** *(Active Research — In Progress)*
- **Date:** 2026
- **Category tag:** `Research · GenAI`
- **Description:** A novel multi-sided LLM marketplace platform architected from the ground up — no existing precedent to emulate. Includes local content extraction, files-to-LLM conversion, local fine-tuning workflows, and integration with foundational models. Currently designing revenue stream architecture and payment transaction layer. Active research collaboration with Indiana University faculty.
- **Stack tags:** `LLM Fine-tuning` `Vector Embeddings` `FastAPI` `Python`
- **Note:** Active research — in progress. No public repo yet.

---

**AEO Platform — Brand Visibility Tracker** *(Research)*
- **Date:** January 2026 – Present
- **Category tag:** `Research · AI`
- **Description:** Processes 100+ websites weekly into LLM-ready structured artifacts using web crawling, content extraction, chunking, and JSON-LD schema generation. Tracks citation and brand visibility rankings for 50+ brands daily across ChatGPT, Perplexity, Gemini, and Claude. Powers active academic research at the Kelley School of Business on Answer Engine Optimization.
- **Stack tags:** `Web Crawling` `JSON-LD` `LLM APIs` `Python` `NLP`
- **Note:** Research project — no public repo.

---

### 4.6 Skills Section

**ID:** `#skills`
**Layout:** Category rows, each with a label and a wrapping row of pill tags
**Background:** Subtle `--color-accent-pale` tint
**Section eyebrow:** `SKILLS`
**Section heading:** `Technical Toolkit`

| Category | Skills |
|---|---|
| **AI/ML & GenAI** | PyTorch · Scikit-learn · Hugging Face · LangChain · LangGraph · LlamaIndex · LangSmith · OpenAI API · Claude API · Fine-tuning · RAG · NLP · Contrastive Learning · RLHF |
| **AI Coding Tools** | Claude Code · Codex |
| **Data & Evaluation** | Pandas · NumPy · XGBoost · PySpark · FAISS · ChromaDB · Pinecone · Milvus · Pydantic · Pytest · Benchmark Design |
| **Engineering & MLOps** | Python · JavaScript · FastAPI · Flask · Streamlit · REST APIs · MCP · Docker · MLFlow · CI/CD · Git · AWS |
| **Databases** | PostgreSQL · MongoDB · Neo4j · Supabase · SQL |
| **Familiar** | TensorFlow · Power BI · ReactJS · Anthropic SDK |

**Tag styling:**
- Primary skills: `--color-accent-pale` bg, `--color-accent` text, JetBrains Mono 12px
- "Familiar" category: muted border, `--color-ink-muted` text, slightly lighter style

---

### 4.7 Writing Section

**ID:** `#writing`
**Layout:** 2-column card grid (stacks to 1-col on mobile)
**Section eyebrow:** `WRITING`
**Section heading:** `Thinking Out Loud`
**Sub-heading:** *"Writing about Agentic AI, LLMs, and building things that actually work in production."*

**Blog Card design:**
- White card, border, warm shadow
- Top: terracotta category tag pill
- Title: DM Sans 600, 18px
- Date + read time estimate (muted)
- 1-line description
- `Read on Medium →` link in terracotta

---

**Post 1:**
- **Title:** Why LangChain Isn't Enough: 5 Surprising Truths About Building Real-World AI Agents with LangGraph
- **Published:** January 27, 2025
- **Tags:** `#LangGraph` `#AgentArchitecture`
- **Description:** Most AI systems fail quietly — not because the models are bad, but because the orchestration layer can't handle real-world complexity.
- **Link:** `https://medium.com/@manasdani999/why-langchain-isnt-enough-5-surprising-truths-about-building-real-world-ai-agents-with-langgraph-7b97460c0882`

**Post 2:**
- **Title:** Beyond Answering Questions: How Agentic AI Is Redefining How We Work
- **Published:** January 5, 2025
- **Tags:** `#AgenticAI` `#FutureOfWork`
- **Description:** How AI moves from assistant to autonomous partner — and what that shift means for how we build and work.
- **Link:** `https://medium.com/@manasdani999/beyond-answering-questions-how-agentic-ai-is-redefining-how-we-work-3d5c651a8fa4`

**Section footer CTA:** `View all posts on Medium →` → `https://medium.com/@manasdani999` (opens new tab)

---

### 4.8 Certifications Section

**ID:** `#certifications`
**Layout:** 2-column card grid (stacks on mobile) + placeholder card for future
**Section eyebrow:** `CERTIFICATIONS`
**Section heading:** `Credentials`

---

**Cert 1:**
- **Name:** Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
- **Issuer:** Oracle
- **Issued:** October 31, 2025
- **Expires:** October 31, 2027
- **Badge image:** `https://brm-workforce.oracle.com/pdf/certview/images/OCI25GAIOCP.png`
- **Skills tags:** `LLMs` `OCI GenAI Service` `RAG` `Semantic Search` `Vector Databases` `LangChain`
- **Verify link:** Oracle CertView (opens in new tab)
- **Link:** `https://catalog-education.oracle.com/ords/certview/sharebadge?id=B3A4FC90CCFB0400C8AE3C438E616FAF49973CCE34E5707642C5398FE544E5E1`

---

**Cert 2:**
- **Name:** Oracle AI Vector Search Certified Professional
- **Issuer:** Oracle
- **Issued:** October 31, 2025
- **Expires:** October 31, 2027
- **Badge image:** `https://brm-workforce.oracle.com/pdf/certview/images/DB23AIOCP.png`
- **Skills tags:** `Vector Search` `Vector Indexes` `Similarity Search` `Embeddings` `RAG Applications` `Oracle AI DB`
- **Verify link:** Oracle CertView (opens in new tab)
- **Link:** `https://catalog-education.oracle.com/ords/certview/sharebadge?id=07255230807F71F3C421542A7537EB325FFD127008FB71AD9026481DF43D0AB5`

---

**Placeholder card (dashed border, muted):**
- Text: `More certifications coming soon`
- Style: dashed `--color-border` border, muted text, center-aligned

---

### 4.9 Testimonials Section

**ID:** `#testimonials`
**Layout:** 2-column quote cards (stacks on mobile)
**Section eyebrow:** `WHAT PEOPLE SAY`
**Section heading:** `Trusted by Mentors & Leaders`
**Background:** Subtle `--color-accent-pale` tint

**Card design:**
- White card, 12px radius, warm shadow
- 4px terracotta left border accent
- Large open-quote mark (`"`) in terracotta, decorative, top-left
- Quote text in DM Sans 400 italic, 16px, ink-muted
- Attribution: Name in DM Sans 600, Title + Organization in DM Sans 400 muted

---

**Testimonial 1:**
> *"Manas is a person who can unlock breakthrough innovations in the AI/LLM space, given his meticulousness and acumen to perform tasks with surgical precision."*

— **Nicholas J. Brown**, Research Supervisor · Indiana University Kelley School of Business

---

**Testimonial 2:**
> *"One of his unique strengths is direct client interaction — he has effectively resolved client issues, exuding strong problem-solving abilities with a client-focused approach."*

— **Amitabh Lenka**, Senior Service Delivery Manager · Cognizant

---

### 4.10 Education Section

**ID:** `#education`
**Layout:** 2-column card grid (stacks on mobile)
**Section eyebrow:** `EDUCATION`
**Section heading:** `Academic Background`

---

**Card 1:**
- **Degree:** Master of Science in Data Science
- **Institution:** Indiana University Bloomington
- **Duration:** August 2024 – May 2026
- **Location:** Bloomington, Indiana
- **GPA:** 3.82 / 4.0
- **Highlight tag:** `In Progress`

---

**Card 2:**
- **Degree:** Bachelor of Technology — Instrumentation and Control Engineering
- **Institution:** Vishwakarma Institute of Technology
- **Duration:** August 2018 – July 2022
- **Location:** Pune, India
- **GPA:** 8.78 / 10

---

### 4.11 Contact Section

**ID:** `#contact`
**Layout:** Centered, single column, generous whitespace
**Background:** `--color-bg`
**Section eyebrow:** `GET IN TOUCH`
**Section heading:** `Let's Build Something Together`

**Sub-text:**
> I'm open to full-time AI/ML engineering roles. Always happy to talk about RAG pipelines, agent architectures, research collaborations, or your hard problem.

**Contact links (icon + text, stacked or 2x2 grid on desktop):**
- ✉️ `manasdani999@gmail.com` → `mailto:manasdani999@gmail.com`
- 💼 `linkedin.com/in/manasdani` → `https://linkedin.com/in/manasdani` (new tab)
- 🐙 `github.com/DaniManas` → `https://github.com/DaniManas` (new tab)
- ✍️ `medium.com/@manasdani999` → `https://medium.com/@manasdani999` (new tab)

**Style:** Each link is a card-like row with icon, text, and a subtle arrow. Hover: terracotta accent, slight lift.

---

### 4.12 Footer

**Layout:** Single row (stacks on mobile)
**Background:** Slightly darker than page bg — `#F0EBE4`
**Content:**
- Left: `© 2026 Manas Dani`
- Center: Nav links — `About · Experience · Projects · Contact`
- Right: `Built with Next.js & ☕`

---

## 5. Page-Level Details

### Section Order (top to bottom)
1. Navigation (sticky)
2. Hero
3. About
4. Experience
5. Projects
6. Skills
7. Writing
8. Certifications
9. Testimonials
10. Education
11. Contact
12. Footer

### SEO & Meta
```
title: "Manas Dani — AI/ML Engineer"
description: "AI/ML Engineer specializing in production GenAI systems — RAG pipelines, multi-agent orchestration, and LLM applications. MS Data Science @ Indiana University."
og:image: /og-image.png (1200x630, generate from hero design)
canonical: https://manasdani.dev (or .com — TBD)
```

### Performance
- `next/font` for zero layout shift on font load
- `next/image` for all images (lazy load, optimized)
- No heavy JS bundles — Framer Motion tree-shaken
- Vercel Edge Network for global CDN

### Accessibility
- All interactive elements keyboard navigable
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images/icons
- ARIA labels on icon-only buttons
- Focus ring styling matches terracotta accent

---

## 6. Content Data File (`lib/data.ts`)

All content lives in a single typed data file — not hardcoded in components. This makes future updates (new projects, new jobs) a single-file edit.

```typescript
// Structure outline
export const meta = { name, tagline, email, github, linkedin, medium }
export const experience: Experience[] = [...]
export const projects: Project[] = [...]
export const skills: SkillCategory[] = [...]
export const posts: BlogPost[] = [...]
export const certifications: Certification[] = [...]
export const testimonials: Testimonial[] = [...]
export const education: Education[] = [...]
```

---

## 7. Open Items (Minor — Non-blocking)

| # | Item | Status |
|---|---|---|
| 1 | Headshot photo | Using initials `MD` for now — swap later |
| 2 | Resume PDF file | Add to `/public` before first deploy |
| 3 | Domain name | TBD — manasdani.dev or manasdani.com |
| 4 | Additional projects | Add to `lib/data.ts` when ready |
| 5 | OG image | Generate from hero design after build |

Add both sections after Section 7 (Open Items) and before Section 8 (Build Phases).

7.5 Error Handling & Edge Cases

Resume PDF missing — Download button shows a graceful toast notification ("Resume coming soon!") instead of a broken link. Never a 404.
External links — All GitHub, Medium, LinkedIn, and Oracle cert links must use target="_blank" rel="noopener noreferrer" without exception.
Oracle badge images failing — If badge image URLs from Oracle's CDN break, fall back to a styled text badge showing the cert name instead of a broken image.
Mobile nav — Overlay menu must trap focus when open, close on Escape key, and close on outside click.
Framer Motion + reduced motion — All animations must respect prefers-reduced-motion OS setting. Wrap in a custom useReducedMotion hook and disable all transitions when active.
Card layout overflow — Project descriptions and skill tags must never break card layouts at any viewport width. Use line-clamp for descriptions where needed.
Contact email link — Use mailto: so it opens the native mail app on mobile, not just desktop.
No public repo projects — Research projects without a GitHub link should show a muted "Research Project · No public repo" label instead of a broken or missing button.


7.6 Definition of Done
The site is considered complete and ready to deploy when all of the following are true:
CriteriaTargetLighthouse Performance≥ 90Lighthouse Accessibility≥ 95Lighthouse SEO≥ 95Mobile responsivenessWorks correctly from 375px (iPhone SE) and upAll external linksOpen in new tab, no broken URLsResume downloadWorks on first click, correct file servedImage fallbacksAll images load or degrade gracefullyReduced motionAnimations fully disabled when OS setting is activeConsole errorsZero errors on production build (next build)No broken layoutsEvery section renders correctly at 375px, 768px, 1024px, 1440px

---

## 8. Build Phases (Claude Code)

| Phase | Scope | Output |
|---|---|---|
| **Setup** | Init Next.js, install deps, run `npx getdesign@latest add claude`, create CLAUDE.md, set up `globals.css` with design tokens, create `lib/data.ts` with all content | Project scaffold ready |
| **Phase 1** | Nav + Hero + About + Experience | Core identity sections live |
| **Phase 2** | Projects + Skills | Technical credibility sections live |
| **Phase 3** | Writing + Certifications + Testimonials | Thought leadership + social proof live |
| **Phase 4** | Education + Contact + Footer | Full site complete |
| **Phase 5** | Animations, mobile QA, SEO meta, deploy to Vercel | Production-ready |
