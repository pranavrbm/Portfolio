import { ArrowUpRight, Code } from 'lucide-react'
import { SectionHeading } from './about-section'
import { Reveal } from './reveal'

const projects = [
  {
    name: 'water-crisis-platform',
    desc: 'Urban water intelligence platform predicting shortage risk across Bengaluru from climate, reservoir, and groundwater data — Python ETL pipelines, LightGBM ensemble models, secure FastAPI serving, and an RBAC-enabled Next.js (T3) dashboard.',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Prisma', 'LightGBM', 'Docker'],
    metric: '90.23% accuracy · IEEE ICIRCA 2026 · KSCST grant',
    code: 'https://github.com/AD-15-Final/water-crisis-management-system',
    paper: null,
  },
  {
    name: 'deceptive-review-detection',
    desc: 'End-to-end NLP pipeline that flags AI-generated fake reviews in large unstructured text corpora using TF-IDF feature engineering and deep learning classifiers.',
    tags: ['Python', 'TensorFlow', 'NLP', 'TF-IDF'],
    metric: '92% accuracy · IEEE DISCOVER 2024 · first author',
    code: 'https://github.com/MLProjectTeam3/Fake_Review_Prediction',
    paper: 'https://ieeexplore.ieee.org/document/10750586',
  },
  {
    name: 'ai-health-microservices',
    desc: 'Scalable microservices health platform — Spring Boot services with Keycloak OAuth2 and RabbitMQ messaging, Gemini-powered multi-turn health recommendations, and a React/Redux frontend on AWS.',
    tags: ['Spring Boot', 'Docker', 'AWS', 'Keycloak', 'RabbitMQ', 'React'],
    metric: 'Microservices · OAuth2 · async messaging',
    code: 'https://github.com/pranavrbm/Fitness-App',
    paper: null,
  },
  {
    name: 'leafcolor-crop-analyzer',
    desc: 'Computer vision application that segments agricultural leaf images to estimate nitrogen content against manual expert ratings, with automated scientific report generation.',
    tags: ['Python', 'Cython', 'Image Segmentation'],
    metric: '92% accuracy vs expert ratings',
    code: null,
    paper: null,
  },
  {
    name: 'furever-adoption',
    desc: 'Full-stack pet adoption platform with NextAuth role-based authentication, Prisma relational schema design, REST API routes, and SEO-optimized server-rendered listings.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
    metric: 'Full-stack · RBAC · SSR + SEO',
    code: 'https://github.com/pranavrbm/FurEver',
    paper: null,
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading index="03" title="projects" />
      <Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative flex flex-col rounded-lg border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:box-glow"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-mono text-lg font-bold text-foreground">
                  <span className="text-primary">~/</span>
                  {project.name}
                </h3>
                <div className="flex gap-2 text-muted-foreground">
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
                    className="rounded border border-border bg-secondary/40 px-2 py-1 font-mono text-xs text-foreground/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
