import { ArrowUpRight, Award, FileText, GraduationCap, ScrollText, Users } from 'lucide-react'
import { SectionHeading } from './about-section'
import { Reveal } from './reveal'

const publications = [
  {
    title:
      'Probabilistic Multi-Horizon Urban Water Crisis Prediction using Ensemble ML',
    meta: 'Co-Author · IEEE ICIRCA 2026 (7th ICRICA), Coimbatore · IEEE SMC Society · ISBN 979-8-3315-5939-7',
    date: 'Jun 2026',
    href: null,
  },
  {
    title: 'Identifying Deceptive AI Reviews: A Machine Learning Approach',
    meta: 'First Author · IEEE DISCOVER 2024, St Joseph Engineering College, Mangaluru · IEEE Xplore',
    date: 'Oct 2024',
    href: 'https://ieeexplore.ieee.org/document/10750586',
  },
]

const awards = [
  {
    title: 'Research Project Grant — KSCST, Government of Karnataka',
    meta: 'Competitive government grant for the AI-powered urban water crisis forecasting project.',
    date: '2026',
  },
  {
    title: 'Commendation Prize 1 — WENAMITAA, EXPRO 2025-26',
    meta: 'Top project at the Dept. of AI & DS annual exposition, NMAMIT.',
    date: '2026',
  },
  {
    title: 'Certificate of Presentation — IEEE ICIRCA 2026',
    meta: 'IEEE Systems, Man, and Cybernetics Society · probabilistic urban water crisis prediction.',
    date: 'Jun 2026',
  },
]

const affiliations = [
  'Student Member — IEEE Computer Society',
  'Member — ACM India Chapter',
]

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Kannada', level: 'Native' },
  { name: 'Hindi', level: 'Intermediate' },
  { name: 'Japanese', level: 'Learning' },
]

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof FileText
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="h-full rounded-lg border border-border bg-card/50 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40">
      <h3 className="mb-5 flex items-center gap-2 font-mono text-sm font-semibold text-primary text-glow">
        <Icon className="size-4" aria-hidden="true" />
        {title}
      </h3>
      {children}
    </div>
  )
}

export function CredentialsSection() {
  return (
    <section
      id="creds"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading index="05" title="creds" />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal delay={0}>
          <Card icon={FileText} title="publications">
            <ul className="space-y-5">
              {publications.map((item) => (
                <li key={item.title}>
                  <div className="flex items-baseline justify-between gap-3">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {item.title}
                      </p>
                    )}
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">
                    {item.meta}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={90}>
          <Card icon={Award} title="awards">
            <ul className="space-y-5">
              {awards.map((item) => (
                <li key={item.title}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.meta}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={0}>
          <Card icon={GraduationCap} title="education">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-foreground">
                B.Tech, Artificial Intelligence &amp; Data Science
              </p>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                2022 — 2026
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              NMAM Institute of Technology, Nitte — Karkala, Karnataka · CGPA:
              7.19. Coursework: ML, Deep Learning, NLP, DBMS, DSA, Cloud
              Computing.
            </p>
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-foreground">
                Pre-University (PCMC)
              </p>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                2020 — 2022
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Alva&apos;s Pre-University College, Moodubidri — 90%.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={90}>
          <Card icon={ScrollText} title="certification">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-foreground">
                Machine Learning Specialization
              </p>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                Sep 2025
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Stanford Online &amp; DeepLearning.AI — Supervised/Unsupervised
              Learning, Advanced Algorithms, Reinforcement Learning.
            </p>
            <a
              href="https://coursera.org/verify/specialization/B207U213G589"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 font-mono text-xs font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-opacity hover:opacity-80"
            >
              verify credential
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          </Card>
        </Reveal>

        <Reveal delay={140} className="md:col-span-2">
          <Card icon={Users} title="affiliations_languages">
            <div className="grid gap-8 md:grid-cols-2">
              <ul className="space-y-2">
                {affiliations.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="text-primary" aria-hidden="true">
                      ▹
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="rounded border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {lang.name}{' '}
                    <span className="text-muted-foreground">· {lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
