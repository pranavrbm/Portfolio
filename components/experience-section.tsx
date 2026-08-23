import { SectionHeading } from './about-section'
import { Reveal } from './reveal'

const roles = [
  {
    role: 'AI & Web Development Intern',
    company: 'Organic Mandya',
    period: 'Mar 2026 — May 2026',
    points: [
      'Built an end-to-end AI review-reply system (Playwright + Google Business API) generating brand-authentic responses for 22 store locations (1,000+ reviews) using Llama 3.1 via Ollama with ChromaDB-backed RAG over the company website.',
      'Migrated the ETL infrastructure — 15+ BigQuery tables and 10\u201315 cron jobs across Shopify API & Odoo — to an in-house Linux VPS, validated end-to-end and version-controlled with Git.',
      'Designed, built, and deployed know.organicmandya.com (Astro v6, Tailwind CSS v4): 15+ content categories, full-text search, SEO, dark mode, and an accessibility pass — live in production.',
      'Prototyped the Suggi farmer/consumer mobile app (Figma MCP + React) and onboarded teammates on Claude Code, Git workflows, and AI-assisted development.',
    ],
  },
  {
    role: 'DevOps Engineer Intern',
    company: 'UK Software Pvt. Ltd. (TheDayHR)',
    period: 'Dec 2025 — Feb 2026',
    points: [
      'Sole DevOps engineer: stood up the initial deployment architecture with frontend on Cloudflare, backend on Render, and database on Supabase.',
      'Migrated the full stack onto a single GCP Compute Engine instance running Docker-based containers, consolidating infrastructure.',
      'Built and maintained GitHub Actions CI/CD pipelines, replacing manual deployment steps end-to-end.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Personifwy (via 1stop)',
    period: 'Jul 2025 — Sep 2025',
    points: [
      'Built an end-to-end hate-speech text classification pipeline with TF-IDF, word embeddings, SVM, and Logistic Regression.',
      'Developed a heart-failure mortality predictor using XGBoost, CatBoost, Random Forest, SHAP explainability, SMOTE class-imbalance handling, and rigorous cross-validation.',
      'Ran deep-dive EDA on the Home Credit Default Risk dataset (300K+ rows), translating statistical anomalies into actionable business insights.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Krishitantra',
    period: 'Jun 2024 — Aug 2024',
    points: [
      'Engineered Python image-processing pipelines estimating crop nitrogen levels from leaf imagery with 92% accuracy vs manual expert ratings.',
      'Built and deployed a Django REST API backend serving real-time computer vision inference to a React crop-analysis frontend.',
      'Automated scientific report generation for precision agriculture, improving usability for end-users.',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading index="04" title="experience" />
      <Reveal>
        <ol className="relative border-l border-border pl-6 md:pl-8">
          {roles.map((role) => (
            <li key={role.company} className="mb-10 last:mb-0">
              <span
                className="absolute -left-[7px] mt-1.5 size-3 rounded-full border-2 border-background bg-primary box-glow"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-bold text-foreground">
                  {role.role}
                  <span className="font-mono text-primary"> @ {role.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="text-primary" aria-hidden="true">
                      ▹
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
