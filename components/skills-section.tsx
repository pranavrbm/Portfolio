import { SectionHeading } from './about-section'
import { Reveal } from './reveal'

const groups = [
  {
    label: 'languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C++'],
  },
  {
    label: 'ai_ml',
    items: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'XGBoost',
      'CatBoost',
      'LightGBM',
      'SHAP',
      'HuggingFace',
      'Computer Vision',
    ],
  },
  {
    label: 'genai_llms',
    items: [
      'LangChain',
      'ChromaDB',
      'Ollama',
      'RAG Pipelines',
      'Llama 3.1',
      'Gemini API',
      'Whisper',
      'Pyannote',
      'Prompt Engineering',
      'Fine-tuning',
    ],
  },
  {
    label: 'automation_tooling',
    items: [
      'Playwright',
      'FFmpeg',
      'LiveKit',
      'Google Business API',
      'SMTP Automation',
      'Linux Cron',
      'Postman',
      'Claude Code',
      'GitHub Copilot',
    ],
  },
  {
    label: 'backend_apis',
    items: [
      'FastAPI',
      'Django',
      'Flask',
      'Spring Boot',
      'Node.js',
      'REST',
      'GraphQL',
      'RabbitMQ',
      'OAuth2/JWT',
      'Keycloak',
    ],
  },
  {
    label: 'data_engineering',
    items: ['ETL Pipelines', 'BigQuery', 'Pandas', 'NumPy', 'Shopify API', 'Odoo'],
  },
  {
    label: 'databases',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Prisma',
      'Supabase',
      'ChromaDB',
      'BigQuery',
    ],
  },
  {
    label: 'frontend',
    items: ['React.js', 'Next.js', 'Astro v6', 'Tailwind CSS', 'Redux'],
  },
  {
    label: 'devops_cloud',
    items: [
      'Docker Compose',
      'CI/CD',
      'GitHub Actions',
      'GCP',
      'AWS',
      'Nginx',
      'Linux VPS',
      'Monitoring',
      'Firebase',
      'Vercel',
    ],
  },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading index="02" title="skills" />
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 90 + Math.floor(i / 2) * 40}>
            <div className="h-full rounded-lg border border-border bg-card/50 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40">
              <h3 className="mb-4 font-mono text-sm font-semibold text-primary text-glow">
                <span className="text-muted-foreground">const </span>
                {group.label}
                <span className="text-muted-foreground"> = [</span>
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-border bg-secondary/40 px-3 py-1.5 font-mono text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-4 block font-mono text-sm text-muted-foreground">]</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
