'use client'

import { Check, Copy, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import { GitHubIcon, LinkedInIcon } from './icons'
import { IstClock } from './ist-clock'
import { SectionHeading } from './about-section'
import { Reveal } from './reveal'

const EMAIL = 'pranavrbm@gmail.com'

const socials = [
  { label: 'GitHub', href: 'https://github.com/pranavrbm', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pranavrbm', Icon: LinkedInIcon },
  { label: 'Phone', href: 'tel:+918073714200', Icon: Phone },
  { label: 'Email', href: `mailto:${EMAIL}`, Icon: Mail },
]

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — no-op
    }
  }

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
          <h3 className="font-display mx-auto mt-4 max-w-2xl text-balance text-2xl font-bold text-foreground md:text-4xl">
            Got a data problem or a model to ship?{' '}
            <span className="text-gradient">Let&apos;s talk.</span>
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-muted-foreground">
            I&apos;m open to full-time roles, research collaborations, and interesting
            ML/AI projects. Based in Mangalore / Bengaluru — my inbox is always open.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:box-glow"
            >
              <Mail className="size-4" aria-hidden="true" />
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center gap-1.5 rounded border border-border px-4 py-3 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-green-400" aria-hidden="true" />
                  copied!
                </>
              ) : (
                <>
                  <Copy className="size-3.5" aria-hidden="true" />
                  copy
                </>
              )}
            </button>
          </div>

          <ul className="mt-8 flex items-center justify-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  className="flex size-10 items-center justify-center rounded border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
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
    <footer className="relative overflow-hidden border-t border-border">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-primary/5 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 text-center md:px-6">
        <p className="mb-4 font-mono text-xs text-muted-foreground">
          <span className="text-primary">$ </span>echo &quot;let&apos;s talk&quot;
        </p>
        <a
          href="mailto:pranavrbm@gmail.com"
          aria-label="Email Pranav R Bhat"
          className="ghost-text font-display block text-6xl font-bold tracking-tight md:text-8xl"
        >
          LET&apos;S TALK
        </a>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
          <p>
            <span className="text-primary">{'> '}</span>© {new Date().getFullYear()}{' '}
            pranavrbm · built with next.js
          </p>
          <IstClock />
          <a href="#top" className="transition-colors hover:text-primary">
            back_to_top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
