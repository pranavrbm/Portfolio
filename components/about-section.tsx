import { BrainCircuit, Cloud, Database } from 'lucide-react'
import { Reveal } from './reveal'

const stats = [
  { label: 'ieee_publications', value: '2' },
  { label: 'internships', value: '5' },
  { label: 'reviews_automated', value: '1000+' },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6">
      <SectionHeading index="01" title="about" />
      <Reveal>
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
              I&apos;m a B.Tech graduate in Artificial Intelligence &amp; Data
              Science from NMAM Institute of Technology (2026), building
              end-to-end AI products — bridging heavy ML inference (local GPUs,
              LLM orchestration, audio processing) with seamless full-stack
              experiences.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A two-time IEEE published researcher — first author at IEEE
              DISCOVER 2024 for AI-generated text detection — I&apos;ve shipped real
              products across agriculture, healthcare, and resource management,
              from local LLM inference and vector databases to cloud-native
              deployment.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-card/50 p-4"
                >
                  <div className="font-mono text-2xl font-bold text-primary text-glow md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ul className="space-y-4 md:col-span-2">
            {[
              {
                icon: BrainCircuit,
                title: 'AI / ML & GenAI',
                body: 'ML models, RAG pipelines, and LLM orchestration with PyTorch, LangChain, Ollama & ChromaDB.',
              },
              {
                icon: Database,
                title: 'Data & Backend',
                body: 'ETL pipelines, BigQuery, and REST APIs with FastAPI, Django & Spring Boot.',
              },
              {
                icon: Cloud,
                title: 'Automation & Cloud',
                body: 'Playwright scraping, Docker, CI/CD with GitHub Actions, deployed on GCP, AWS & Linux VPS.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-lg border border-border bg-card/50 p-4 transition-colors hover:border-primary/40"
              >
                <item.icon
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="mb-10 flex items-center gap-4 font-mono">
      <span className="text-sm font-bold text-primary text-glow">{index}.</span>
      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        <span className="text-primary">{'>'}</span> {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
