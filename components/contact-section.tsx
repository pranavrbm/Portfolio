import { AtSign, Code, Link, Mail, Phone } from 'lucide-react'
import { SectionHeading } from './about-section'
import { Reveal } from './reveal'

const socials = [
  { icon: Code, label: 'GitHub', href: 'https://github.com/pranavrbm' },
  { icon: Link, label: 'LinkedIn', href: 'https://linkedin.com/in/pranavrbm' },
  { icon: Phone, label: 'Phone', href: 'tel:+918073714200' },
  { icon: AtSign, label: 'Email', href: 'mailto:pranavrbm@gmail.com' },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading index="06" title="contact" />
      <Reveal>
        <div className="rounded-lg border border-primary/25 bg-card/50 p-8 text-center box-glow md:p-12">
          <p className="mx-auto max-w-xl font-mono text-sm text-muted-foreground">
            <span className="text-primary">$ </span>echo &quot;let&apos;s build
            something&quot;
          </p>
          <h3 className="mx-auto mt-4 max-w-2xl text-balance text-2xl font-bold text-foreground md:text-3xl">
            Got a data problem or a model to ship? Let&apos;s talk.
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-muted-foreground">
            I&apos;m open to full-time roles, research collaborations, and interesting
            ML/AI projects. Based in Mangalore / Bengaluru — my inbox is always open.
          </p>
          <a
            href="mailto:pranavrbm@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            pranavrbm@gmail.com
          </a>

          <ul className="mt-8 flex items-center justify-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  className="flex size-10 items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-4 text-center font-mono text-xs text-muted-foreground md:px-6">
        <p>
          <span className="text-primary">{'> '}</span>
          built with next.js &amp; tailwind · {new Date().getFullYear()} · all
          systems operational
          <span className="cursor-blink text-primary"> ▋</span>
        </p>
      </div>
    </footer>
  )
}
