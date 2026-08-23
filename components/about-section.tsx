import { Reveal } from './reveal'
import { CountUp } from './count-up'
import { IstClock } from './ist-clock'

const stats = [
  { label: 'ieee_publications', value: 2, suffix: '' },
  { label: 'internships', value: 5, suffix: '' },
  { label: 'reviews_automated', value: 1000, suffix: '+' },
]

const domains = ['AI/ML & GenAI', 'Data Engineering', 'Full-Stack', 'DevOps & Cloud']

const now = [
  'HireGuard — AI interview analytics @ Unique Hire',
  'Multi-tenant HRMS platform @ TheDayHR',
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6">
      <SectionHeading index="01" title="about" />
      <div className="grid gap-5 md:grid-cols-6">
        <Reveal className="md:col-span-4">
          <div className="bento-card h-full p-7">
            <p className="mb-4 font-mono text-xs text-primary">
              <span className="text-muted-foreground">$ </span>cat about.md
            </p>
            <p className="text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
              I specialize in bridging the gap between heavy machine-learning
              inference — local GPUs, LLM orchestration, audio processing — and
              seamless full-stack user experiences.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Two-time IEEE published researcher (first author, IEEE DISCOVER
              2024) shipping production systems across HR-tech, agri-tech, and
              health-tech — from Whisper transcription pipelines and RAG-powered
              automation to multi-tenant SaaS backends and cloud-native
              deployment.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {domains.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90} className="md:col-span-2">
          <div className="bento-card flex h-full flex-col justify-center gap-7 p-7">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-gradient text-3xl font-bold md:text-4xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-3">
          <div className="bento-card h-full p-7">
            <p className="mb-4 font-mono text-xs text-primary">
              <span className="text-muted-foreground">$ </span>./status --now
            </p>
            <ul className="space-y-3">
              {now.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="pulse-dot mt-1.5 size-2 shrink-0 rounded-full bg-green-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90} className="md:col-span-3">
          <div className="bento-card flex h-full flex-col justify-between gap-6 p-7">
            <p className="font-mono text-xs text-primary">
              <span className="text-muted-foreground">$ </span>locate --me
            </p>
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">
                Mangalore / Bengaluru
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                Karnataka, India · UTC+5:30
              </p>
            </div>
            <IstClock className="font-mono text-2xl tabular-nums text-primary text-glow" />
          </div>
        </Reveal>
      </div>
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
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        <span className="text-primary">{'>'}</span> {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
