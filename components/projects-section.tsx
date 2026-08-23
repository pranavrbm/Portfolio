'use client'

import { useRef } from 'react'
import { ArrowUpRight, Code, FileText } from 'lucide-react'
import { SectionHeading } from './about-section'
import { Reveal } from './reveal'

const projects = [
  {
    name: 'water-crisis-platform',
    desc: 'Urban water intelligence platform predicting shortage risk across Bengaluru from climate, reservoir, and groundwater data — Python ETL pipelines, LightGBM ensemble models, secure FastAPI serving, and an RBAC-enabled Next.js (T3) dashboard.',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Prisma', 'LightGBM', 'Docker'],
    metric: '90.23% accuracy · IEEE ICIRCA 2026 · KSCST grant',
    ieee: true,
    code: 'https://github.com/AD-15-Final/water-crisis-management-system',
    paper: null,
  },
  {
    name: 'deceptive-review-detection',
    desc: 'End-to-end NLP pipeline that flags AI-generated fake reviews in large unstructured text corpora using TF-IDF feature engineering and deep learning classifiers.',
    tags: ['Python', 'TensorFlow', 'NLP', 'TF-IDF'],
    metric: '92% accuracy · IEEE DISCOVER 2024 · first author',
    ieee: true,
    code: 'https://github.com/MLProjectTeam3/Fake_Review_Prediction',
    paper: 'https://ieeexplore.ieee.org/document/10750586',
  },
  {
    name: 'ai-health-microservices',
    desc: 'Scalable microservices health platform — Spring Boot services with Keycloak OAuth2 and RabbitMQ messaging, Gemini-powered multi-turn health recommendations, and a React/Redux frontend on AWS.',
    tags: ['Spring Boot', 'Docker', 'AWS', 'Keycloak', 'RabbitMQ', 'React'],
    metric: 'Microservices · OAuth2 · async messaging',
    ieee: false,
    code: 'https://github.com/pranavrbm/Fitness-App',
    paper: null,
  },
  {
    name: 'furever-adoption',
    desc: 'Full-stack pet adoption platform with NextAuth role-based authentication, Prisma relational schema design, REST API routes, and SEO-optimized server-rendered listings.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
    metric: 'Full-stack · RBAC · SSR + SEO',
    ieee: false,
    code: 'https://github.com/pranavrbm/FurEver',
    paper: null,
  },
]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      className="spotlight-card group relative flex h-full flex-col rounded-lg border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:box-glow"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-mono text-lg font-bold text-foreground">
            <span className="text-primary">~/</span>
            {project.name}
          </h3>
          {project.ieee && (
            <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-primary">
              <FileText className="size-3" aria-hidden="true" />
              IEEE published
            </span>
          )}
        </div>
        <div className="flex gap-3 text-muted-foreground">
          {project.code ? (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code`}
              className="transition-colors hover:text-primary"
            >
              <Code className="size-4" aria-hidden="true" />
            </a>
          ) : null}
          {project.paper ? (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} IEEE paper`}
              className="transition-colors hover:text-primary"
            >
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
        {project.desc}
      </p>
      <p className="mt-4 font-mono text-xs text-primary/90">
        <span className="text-muted-foreground">{'// '}</span>
        {project.metric}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded border border-border bg-secondary/40 px-2 py-1 font-mono text-xs text-foreground/80 transition-colors group-hover:border-primary/25"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading index="03" title="projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
