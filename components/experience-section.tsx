import { SectionHeading } from './about-section'
import { Reveal } from './reveal'

const roles = [
  {
    role: 'Software Architect / Full-Stack Lead',
    company: 'UK Software Pvt. Ltd. (TheDayHR)',
    period: 'Jun 2026 — Present',
    points: [
      'Architecting a secure, multi-tenant HRMS (Java, Spring Boot) isolating corporate client data with granular role-based access control.',
      'Engineered fully automated CI/CD pipelines (GitHub Actions) pushing production builds to Linux/Nginx servers via SSH.',
      'Designed a state-driven React frontend orchestrating complex multi-step workflows — client onboarding and subscription management.',
      'Built resilient REST APIs optimized for partial updates and strict data integrity, with JWT authentication and DLT-compliant SMS/email engines for alerts and OTPs.',
    ],
  },
  {
    role: 'Software Engineering Intern (AI & Full-Stack)',
    company: 'Unique Hire',
    period: 'Mar 2026 — Present',
    points: [
      'Engineering HireGuard — an end-to-end interview capture and analysis platform built on Next.js, FastAPI, and Supabase.',
      'Integrated LiveKit real-time video rooms and egress, using FFmpeg to extract audio automatically for downstream ML analysis.',
      'Built a dual-path transcription pipeline with local GPU-accelerated models (Whisper Large v3 Turbo, Pyannote 3.1) and Groq cloud APIs for speaker-aware transcripts.',
      'Designed strict JSON-enforced LLM prompting pipelines (Groq LLaMA) evaluating candidate credibility, generating performance metrics, and flagging behavioral signals.',
    ],
  },
  {
    role: 'AI & Automation Engineer Intern',
    company: 'Organic Mandya',
    period: 'Mar 2026 — May 2026',
    points: [
      'Audited and fully migrated the production ETL infrastructure (BigQuery, Shopify API, Odoo, cron jobs) to an in-house Linux VPS, validated end-to-end with Git-based version control.',
      'Built a REST-integrated review management system (Google Business API + Playwright) automating brand-authentic replies via RAG — Llama 3.1:8b served through Ollama with a ChromaDB vector store — plus SMTP escalation for flagged reviews.',
      'Designed and deployed know.organicmandya.com (Astro v6, Tailwind CSS v4): 15+ content categories, full-text search, SEO, dark mode, and UTM analytics tracking.',
      'Onboarded two team members on Git workflows, Claude Code, and AI-assisted development practices.',
    ],
  },
  {
    role: 'DevOps Engineer Intern',
    company: 'UK Software Pvt. Ltd. (TheDayHR)',
    period: 'Dec 2025 — Feb 2026',
    points: [
      'Built GitHub Actions workflows automating build, test, and deployment steps, reducing manual release effort for the engineering team.',
      'Deployed and managed Docker-based application environments on cloud infrastructure, handling environment configuration and server administration.',
      'Set up application monitoring to track uptime and proactively surface issues across day-to-day operations.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Personifwy (via 1stop)',
    period: 'Jul 2025 — Sep 2025',
    points: [
      'Built an end-to-end hate-speech text classification pipeline covering tokenization, TF-IDF, word embeddings, SVM, and Logistic Regression on real-world social media data.',
      'Developed a heart-failure mortality predictor using XGBoost, CatBoost, SHAP explainability, SMOTE class-imbalance handling, and rigorous cross-validation.',
      'Ran deep-dive EDA on the Home Credit Default Risk dataset (300K+ rows), performing statistical anomaly detection and translating findings into business risk insights.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Krishitantra',
    period: 'Jun 2024 — Aug 2024',
    points: [
      'Designed and built a Django REST API backend for a crop-analysis platform, integrating real-time computer vision inference endpoints serving a React frontend.',
      'Engineered Python image-processing pipelines estimating agricultural leaf nitrogen with 92% accuracy, and automated scientific report generation from the results.',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <div className="grid gap-12 md:grid-cols-[300px_1fr]">
        <div className="self-start md:sticky md:top-28">
          <SectionHeading index="04" title="experience" />
          <p className="text-sm leading-relaxed text-muted-foreground md:mt-[-2rem]">
            <span className="font-mono text-primary">$ </span>5 internships →
            full-stack lead. Shipping across HR-tech, agri-tech, food-tech &amp;
            health-tech.
          </p>
        </div>
        <Reveal>
          <ol className="relative border-l border-border pl-6 md:pl-8">
          {roles.map((role) => (
            <li key={`${role.company}-${role.period}`} className="mb-10 last:mb-0">
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
      </div>
    </section>
  )
}
