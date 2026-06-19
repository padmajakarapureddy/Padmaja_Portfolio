// Central data file for all portfolio content

export const personalInfo = {
  name: "Padmaja Karapureddy",
  title: "Software Engineer & AI Engineer",
  tagline: "Building scalable AI-driven systems,\nnot just websites.",
  subTagline:
    "Final-year MSIT @ IIIT-H · Backend Engineering · LLM Pipelines · Cloud Deployment",
  location: "Hyderabad, India",
  email: "padmaja.karapureddy@research.iiit.ac.in",
  github: "https://github.com/karapureddypadmaja",
  linkedin: "https://www.linkedin.com/in/karapureddypadmaja",
  cgpa: "9.1",
  university: "IIIT Hyderabad",
  degree: "M.Tech — Information Technology",
};

export const skills = {
  languages: [
    { name: "Python", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "SQL", level: 80 },
    { name: "Bash / Shell", level: 72 },
  ],
  frameworks: [
    { name: "Next.js (App Router)", level: 85 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 84 },
    { name: "FastAPI / Flask", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Framer Motion", level: 75 },
  ],
  databases: [
    { name: "MongoDB Atlas", level: 85 },
    { name: "PostgreSQL + pgvector", level: 78 },
    { name: "Redis", level: 65 },
  ],
  cloud: [
    { name: "Google Cloud Run", level: 82 },
    { name: "Docker", level: 85 },
    { name: "Vercel", level: 88 },
    { name: "GitHub Actions", level: 75 },
  ],
  ai: [
    { name: "Ollama (Qwen, LLaMA)", level: 85 },
    { name: "Prompt Engineering", level: 88 },
    { name: "Pydantic Schema Validation", level: 82 },
    { name: "LangChain / RAG", level: 72 },
    { name: "Firecrawl", level: 80 },
  ],
};

export const projectMetrics = [
  { value: "8,000+", label: "Dishes catalogued", icon: "🍛" },
  { value: "28", label: "Indian states covered", icon: "🗺️" },
  { value: "~80%", label: "Faster API response", icon: "⚡" },
  { value: "3-stage", label: "ETL pipeline", icon: "🔄" },
  { value: "0%", label: "Schema validation failures", icon: "✅" },
  { value: "Docker → GCR", label: "Production deployment", icon: "🚀" },
];

export const etlSteps = [
  {
    id: "search",
    label: "Search",
    description: "DuckDuckGo + Firecrawl query construction per dish+state",
    color: "#3b82f6",
    icon: "🔍",
  },
  {
    id: "scrape",
    label: "Scrape",
    description: "Firecrawl headless browser scraping → structured Markdown",
    color: "#8b5cf6",
    icon: "🕷️",
  },
  {
    id: "structure",
    label: "Structure",
    description: "Qwen LLM (via Ollama) extracts JSON schema from raw text",
    color: "#06b6d4",
    icon: "🧠",
  },
  {
    id: "validate",
    label: "Validate",
    description: "Pydantic models enforce schema + Levenshtein deduplication",
    color: "#10b981",
    icon: "✅",
  },
  {
    id: "stage",
    label: "Stage",
    description: "MongoDB staging collection — human review + QA",
    color: "#f59e0b",
    icon: "📦",
  },
  {
    id: "publish",
    label: "Publish",
    description: "Promote to production collection after approval pipeline",
    color: "#ef4444",
    icon: "🚀",
  },
];

export const challenges = [
  {
    problem: "Loading 8,000+ dishes tanked performance",
    solution:
      "Implemented lazy loading + state-scoped APIs. Only load dishes for the active state on-demand.",
    impact: "~80% reduction in initial load time",
    category: "Performance",
    icon: "⚡",
  },
  {
    problem: "Inconsistent data formats from 50+ scraped sources",
    solution:
      "LLM-driven normalization (Qwen via Ollama) with strict Pydantic output schemas. Zero unstructured data enters the DB.",
    impact: "100% schema compliance post-validation",
    category: "Data Quality",
    icon: "🎯",
  },
  {
    problem: "Near-duplicate dish entries across regions",
    solution:
      "Levenshtein distance algorithm for fuzzy name matching before upsert. Configurable similarity threshold.",
    impact: "Eliminated ~23% duplicate entries",
    category: "Deduplication",
    icon: "🔁",
  },
  {
    problem: "Heavy client-side filtering degraded UX",
    solution:
      "Moved all filtering logic to MongoDB aggregation pipelines + API-based filters. Client receives pre-filtered data.",
    impact: "Eliminated client-side render blocking",
    category: "Architecture",
    icon: "🏗️",
  },
];

export const secondaryProjects = [
  {
    title: "Smart Site Search Engine",
    description:
      "AI-enhanced full-text search with NLP ranking, keyword highlighting, and query expansion for internal portals.",
    stack: ["NLP", "ElasticSearch", "Node.js", "React"],
    category: "AI / Search",
    status: "Completed",
  },
  {
    title: "Online Admissions Platform",
    description:
      "Full-stack React + Node platform with real-time AI-powered search, PDF parsing, and role-based access control.",
    stack: ["React", "Node.js", "ElasticSearch", "MongoDB"],
    category: "Full-Stack",
    status: "Completed",
  },
  {
    title: "Eye State DNN (Drowsiness Detector)",
    description:
      "Binary CNN classifier using OpenCV + Keras to detect eye open/closed state in real-time video feeds.",
    stack: ["Keras", "OpenCV", "Python", "CNN"],
    category: "Computer Vision",
    status: "Completed",
  },
];
