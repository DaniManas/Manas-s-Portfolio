// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface StatItem {
  icon: string;
  text: string;
}

export interface Meta {
  name: string;
  tagline: string;
  specializations: string[];
  statusBadge: string;
  email: string;
  github: string;
  linkedin: string;
  medium: string;
  bio: string[];
  stats: StatItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide icon name
}

export interface ContactLink {
  icon: string; // lucide icon name
  label: string;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
  current?: boolean;
  link?: string;
}

export interface Project {
  title: string;
  date: string;
  category: string;
  description: string;
  stack: string[];
  link?: string;
  featured?: boolean;
  note?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  muted?: boolean;
}

export interface BlogPost {
  title: string;
  published: string;
  tags: string[];
  description: string;
  link: string;
  readTime?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  expires: string;
  badgeUrl: string;
  skills: string[];
  verifyLink: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa: string;
  inProgress?: boolean;
}

// ─── Meta & Navigation ────────────────────────────────────────────────────────

export const meta: Meta = {
  name: "Manas Dani",
  tagline: "AI/ML Engineer building production GenAI systems",
  specializations: [
    "RAG Pipelines",
    "Multi-Agent Orchestration",
    "LLM Applications",
  ],
  statusBadge: "Open to Full-Time Roles",
  email: "manasdani999@gmail.com",
  github: "https://github.com/DaniManas",
  linkedin: "https://linkedin.com/in/manasdani",
  medium: "https://medium.com/@manasdani999",
  bio: [
    "I'm an AI/ML Engineer specializing in production GenAI systems — RAG pipelines, multi-agent orchestration, and fine-tuning workflows. My background spans intelligent document processing at enterprise scale at Cognizant (British Airways project) to shipping LLM applications with LangChain, LangGraph, FastAPI, Docker, and AWS.",
    "What drives me is the gap between impressive demos and systems that actually hold up in production. I care deeply about evaluation frameworks, observability, and building AI that non-technical stakeholders can understand, trust, and use effectively.",
    "I'm currently pursuing my Masters in Data Science at Indiana University Bloomington (GPA: 3.82/4.0), working as a Research Assistant at the Kelley School of Business on AI Visibility and Answer Engine Optimization, while exploring the intersection of LLMs and biomedical data science.",
  ],
  stats: [
    { icon: "GraduationCap", text: "MS Data Science @ IU Bloomington (2026)" },
    { icon: "BarChart2", text: "GPA: 3.82 / 4.0" },
    { icon: "Briefcase", text: "3+ years across research & industry" },
    { icon: "FlaskConical", text: "Research Assistant, Kelley School of Business" },
    { icon: "HeartPulse", text: "Biomedical Data Science @ IU" },
    { icon: "PenLine", text: "GenAI writer on Medium" },
    { icon: "MapPin", text: "Bloomington, IN · Open to relocation" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/DaniManas", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/manasdani", icon: "Linkedin" },
  { platform: "Medium", url: "https://medium.com/@manasdani999", icon: "BookOpen" },
  { platform: "Email", url: "mailto:manasdani999@gmail.com", icon: "Mail" },
];

export const contactLinks: ContactLink[] = [
  { icon: "Mail", label: "manasdani999@gmail.com", url: "mailto:manasdani999@gmail.com" },
  { icon: "Linkedin", label: "linkedin.com/in/manasdani", url: "https://linkedin.com/in/manasdani" },
  { icon: "Github", label: "github.com/DaniManas", url: "https://github.com/DaniManas" },
  { icon: "BookOpen", label: "medium.com/@manasdani999", url: "https://medium.com/@manasdani999" },
];

export const footerLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const contactSection = {
  eyebrow: "GET IN TOUCH",
  heading: "Let's Build Something Together",
  subtext:
    "I'm open to full-time AI/ML engineering roles. Always happy to talk about RAG pipelines, agent architectures, research collaborations, or your hard problem.",
};

export const footerTagline = "Built with Next.js & ☕";

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Research Assistant – AI Visibility & Answer Engine Optimization",
    company: "Indiana University Kelley School of Business",
    duration: "January 2026 – Present",
    location: "Bloomington, IN",
    current: true,
    bullets: [
      "Developed an AEO platform processing 100+ websites weekly into LLM-ready structured artifacts — web crawl, content extraction, chunking, JSON-LD schema generation — achieving 95%+ extraction accuracy across 15+ content quality metrics.",
      "Tracked brand visibility and citation rankings for 50+ brands daily across 4 LLM platforms (ChatGPT, Perplexity, Gemini, Claude); delivered weekly insights to research leadership used in active academic research.",
    ],
  },
  {
    role: "Research Assistant – Social Media User Representation Learning",
    company: "Indiana University Bloomington",
    duration: "August 2025 – December 2025",
    location: "Bloomington, IN",
    bullets: [
      "Fine-tuned Sentence-BERT with contrastive learning (triplet loss) on a 26M+ user Bluesky dataset; outperformed baseline pretrained model across 3 similarity benchmarks and top-k retrieval metrics.",
      "Engineered a distributed data pipeline on JetStream — compressed JSON to Parquet, FAISS similarity search, UMAP visualization — processing multi-TB datasets for large-scale social network clustering research.",
    ],
  },
  {
    role: "AI Developer Intern",
    company: "Ohacks / Heritage Square Foundation",
    duration: "June 2025 – August 2025",
    location: "Remote",
    link: "https://github.com/DaniManas/Archyx-Ai",
    bullets: [
      "Shipped Archyx AI, a production RAG system (LangChain + ChromaDB) supporting 10K+ document chunks across 3 LLM providers (OpenAI, Groq, OpenRouter), reducing manual archival curation time by 40%.",
      "Implemented evaluation suite (unit tests + cross-provider consistency checks) and integrated API-level cost tracking per provider; documented pipeline end-to-end enabling non-technical stakeholders to operate independently.",
    ],
  },
  {
    role: "Programmer Analyst – SAP VIM (British Airways Project)",
    company: "Cognizant",
    duration: "February 2022 – July 2024",
    location: "Pune, India",
    bullets: [
      "Supported OCR-driven invoice automation processing 10,000+ invoices/month for British Airways — diagnosed extraction failures, tuned exception-handling workflows, and validated document capture accuracy across multi-vendor invoice formats.",
      "Coordinated fixes across Finance, IT, and Procurement via Jira; conducted training sessions for 20+ users, developing sharp instincts for data quality, failure modes, and cross-functional communication.",
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "BlogGenie — Multi-Agent Blog Writing System",
    date: "March 2026",
    category: "GenAI · Agents",
    description:
      "Architected a 7-node LangGraph multi-agent pipeline with 3 routing modes, parallel Send-API fanout, and stateful agent memory managing short-term context across nodes. An AI planner reasons through structure, research needs, and section dependencies before any content is written — then delegates to specialized writer agents per section. Deployed via FastAPI + Streamlit with Tavily web retrieval and JSON-fallback handling.",
    stack: ["LangGraph", "LangChain", "OpenAI", "Tavily", "FastAPI", "Streamlit"],
    link: "https://github.com/DaniManas/BlogGenie",
    featured: true,
  },
  {
    title: "ChurnPilot AI — Churn Prediction Platform",
    date: "February 2026",
    category: "ML · MLOps",
    description:
      "Production churn prediction API deployed on AWS EC2. ROC-AUC 0.8428, recall 0.74, 41/41 pytest passing. Built with real-time and async batch inference, PSI drift monitoring, API-key authentication, multi-stage Docker builds, and environment-based secrets management.",
    stack: ["Python", "FastAPI", "scikit-learn", "Docker", "AWS EC2"],
    link: "https://github.com/DaniManas/churnpilot-ai",
  },
  {
    title: "ResearchMCP — Production MCP Server",
    date: "October 2025",
    category: "Open Source · Agents",
    description:
      "Open-source MCP server for academic literature discovery. 5 pydantic-typed tools — search papers, fetch abstracts, extract claims, compare papers, find research gaps — giving any MCP client live query access to the OpenAlex corpus. Supports chained multi-step agentic research workflows (search → compare → find gaps) in a single session without a separate RAG pipeline.",
    stack: ["Python", "FastMCP", "Pydantic", "OpenAlex API"],
    link: "https://github.com/DaniManas/ResearchMCP",
  },
  {
    title: "MindBridge — Mental Health AI Companion",
    date: "2025",
    category: "GenAI · Conversational AI",
    description:
      "A calm mental-health companion built for people navigating stressful job search phases. Features Sage AI (Claude-powered streaming chat with journal-aware personalization and crisis keyword detection), anonymous peer community rooms, wellbeing tools (box breathing, grounding exercises, rejection reframe), and private journaling with mood tagging. Built end-to-end in a hackathon sprint.",
    stack: ["Anthropic Claude", "FastAPI", "ChromaDB", "React", "SQLite"],
    link: "https://github.com/DaniManas/Mind-Bridge",
  },
  {
    title: "Archyx AI — Production RAG System",
    date: "Summer 2025",
    category: "GenAI · RAG",
    description:
      "Production RAG system supporting 10K+ document chunks across 3 LLM providers (OpenAI, Groq, OpenRouter). Reduced manual archival curation time by 40%. Includes cross-provider evaluation suite, API-level cost tracking, and full documentation enabling non-technical operators to run it independently. Built and shipped during internship at Ohacks / Heritage Square Foundation.",
    stack: ["LangChain", "ChromaDB", "OpenAI", "Groq", "OpenRouter", "FastAPI"],
    link: "https://github.com/DaniManas/Archyx-Ai",
  },
  {
    title: "HTN Prediction — LLM Medication Embeddings",
    date: "April 2026",
    category: "Research · Biomedical",
    description:
      "Investigated whether GatorTron LLM-based medication embeddings outperform conventional drug features for hypertension prediction on 208,952 patients from the NIH All of Us Research Program dataset. Built 3 model pipelines — clinical baseline, traditional drug features, and GatorTron embeddings — with ablation studies across embedding dimensions (8/32/64) and pooling strategies. Primary metric: AUROC.",
    stack: ["GatorTron", "XGBoost", "Logistic Regression", "BigQuery", "OMOP CDM", "Python"],
    note: "Research project (IU INFO/SICE 590) — no public repo. Team: Manas Dani, Sreeram Tirumala, Madhumitha Gannavaram, Virija Nandamudi.",
  },
  {
    title: "LLM Marketplace Platform",
    date: "2026",
    category: "Research · GenAI",
    description:
      "A novel multi-sided LLM marketplace platform architected from the ground up — no existing precedent to emulate. Includes local content extraction, files-to-LLM conversion, local fine-tuning workflows, and integration with foundational models. Currently designing revenue stream architecture and payment transaction layer. Active research collaboration with Indiana University faculty.",
    stack: ["LLM Fine-tuning", "Vector Embeddings", "FastAPI", "Python"],
    note: "Active research — in progress. No public repo yet.",
  },
  {
    title: "AEO Platform — Brand Visibility Tracker",
    date: "January 2026 – Present",
    category: "Research · AI",
    description:
      "Processes 100+ websites weekly into LLM-ready structured artifacts using web crawling, content extraction, chunking, and JSON-LD schema generation. Tracks citation and brand visibility rankings for 50+ brands daily across ChatGPT, Perplexity, Gemini, and Claude. Powers active academic research at the Kelley School of Business on Answer Engine Optimization.",
    stack: ["Web Crawling", "JSON-LD", "LLM APIs", "Python", "NLP"],
    note: "Research project — no public repo.",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: SkillCategory[] = [
  {
    category: "AI/ML & GenAI",
    skills: [
      "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "LangGraph",
      "LlamaIndex", "LangSmith", "OpenAI API", "Claude API", "Fine-tuning",
      "RAG", "NLP", "Contrastive Learning", "RLHF",
    ],
  },
  {
    category: "AI Coding Tools",
    skills: ["Claude Code", "Codex"],
  },
  {
    category: "Data & Evaluation",
    skills: [
      "Pandas", "NumPy", "XGBoost", "PySpark", "FAISS", "ChromaDB",
      "Pinecone", "Milvus", "Pydantic", "Pytest", "Benchmark Design",
    ],
  },
  {
    category: "Engineering & MLOps",
    skills: [
      "Python", "JavaScript", "FastAPI", "Flask", "Streamlit", "REST APIs",
      "MCP", "Docker", "MLFlow", "CI/CD", "Git", "AWS",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Neo4j", "Supabase", "SQL"],
  },
  {
    category: "Familiar",
    skills: ["TensorFlow", "Power BI", "ReactJS", "Anthropic SDK"],
    muted: true,
  },
];

// ─── Writing ──────────────────────────────────────────────────────────────────

export const posts: BlogPost[] = [
  {
    title: "Why LangChain Isn't Enough: 5 Surprising Truths About Building Real-World AI Agents with LangGraph",
    published: "January 27, 2025",
    tags: ["#LangGraph", "#AgentArchitecture"],
    description:
      "Most AI systems fail quietly — not because the models are bad, but because the orchestration layer can't handle real-world complexity.",
    link: "https://medium.com/@manasdani999/why-langchain-isnt-enough-5-surprising-truths-about-building-real-world-ai-agents-with-langgraph-7b97460c0882",
    readTime: "5 min read",
  },
  {
    title: "Beyond Answering Questions: How Agentic AI Is Redefining How We Work",
    published: "January 5, 2025",
    tags: ["#AgenticAI", "#FutureOfWork"],
    description:
      "How AI moves from assistant to autonomous partner — and what that shift means for how we build and work.",
    link: "https://medium.com/@manasdani999/beyond-answering-questions-how-agentic-ai-is-redefining-how-we-work-3d5c651a8fa4",
    readTime: "4 min read",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    issued: "October 31, 2025",
    expires: "October 31, 2027",
    badgeUrl: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25GAIOCP.png",
    skills: ["LLMs", "OCI GenAI Service", "RAG", "Semantic Search", "Vector Databases", "LangChain"],
    verifyLink:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B3A4FC90CCFB0400C8AE3C438E616FAF49973CCE34E5707642C5398FE544E5E1",
  },
  {
    name: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    issued: "October 31, 2025",
    expires: "October 31, 2027",
    badgeUrl: "https://brm-workforce.oracle.com/pdf/certview/images/DB23AIOCP.png",
    skills: ["Vector Search", "Vector Indexes", "Similarity Search", "Embeddings", "RAG Applications", "Oracle AI DB"],
    verifyLink:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=07255230807F71F3C421542A7537EB325FFD127008FB71AD9026481DF43D0AB5",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote:
      "Manas is a person who can unlock breakthrough innovations in the AI/LLM space, given his meticulousness and acumen to perform tasks with surgical precision.",
    name: "Nicholas J. Brown",
    title: "Research Supervisor · Indiana University Kelley School of Business",
  },
  {
    quote:
      "One of his unique strengths is direct client interaction — he has effectively resolved client issues, exuding strong problem-solving abilities with a client-focused approach.",
    name: "Amitabh Lenka",
    title: "Senior Service Delivery Manager · Cognizant",
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: "Master of Science in Data Science",
    institution: "Indiana University Bloomington",
    duration: "August 2024 – May 2026",
    location: "Bloomington, Indiana",
    gpa: "3.82 / 4.0",
    inProgress: true,
  },
  {
    degree: "Bachelor of Technology — Instrumentation and Control Engineering",
    institution: "Vishwakarma Institute of Technology",
    duration: "August 2018 – July 2022",
    location: "Pune, India",
    gpa: "8.78 / 10",
  },
];
