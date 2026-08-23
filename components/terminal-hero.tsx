'use client'

import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { MatrixRain } from './matrix-rain'

type Line = {
  prompt?: string
  text: string
  output?: boolean
}

const script: Line[] = [
  { prompt: '$', text: 'whoami' },
  { text: 'Pranav R Bhat — AI & Data Science Engineer', output: true },
  { prompt: '$', text: 'cat role.txt' },
  {
    text: 'I build end-to-end AI products: RAG systems, LLM pipelines, and full-stack apps.',
    output: true,
  },
  { prompt: '$', text: 'ls ./stack' },
  {
    text: 'python  pytorch  langchain  fastapi  next.js  docker  gcp',
    output: true,
  },
  { prompt: '$', text: 'cat ./highlights' },
  {
    text: 'IEEE first-author · KSCST research grant · IEEE CS + ACM member',
    output: true,
  },
  { prompt: '$', text: './status --now' },
  { text: '[ ONLINE ] open to new opportunities', output: true },
]

export function TerminalHero() {
  const [rendered, setRendered] = useState<Line[]>([])
  const [current, setCurrent] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setRendered(script)
      setDone(true)
      return
    }

    if (lineIdx >= script.length) {
      setDone(true)
      return
    }
    const line = script[lineIdx]

    // output lines appear quickly; commands type char-by-char
    if (line.output) {
      const t = setTimeout(() => {
        setRendered((prev) => [...prev, line])
        setLineIdx((i) => i + 1)
      }, 260)
      return () => clearTimeout(t)
    }

    if (charIdx < line.text.length) {
      const t = setTimeout(() => {
        setCurrent(line.text.slice(0, charIdx + 1))
        setCharIdx((c) => c + 1)
      }, 55)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setRendered((prev) => [...prev, line])
      setCurrent('')
      setCharIdx(0)
      setLineIdx((i) => i + 1)
    }, 400)
    return () => clearTimeout(t)
  }, [lineIdx, charIdx])

  const typingLine = lineIdx < script.length ? script[lineIdx] : null
  const showTypingCommand = typingLine && !typingLine.output

  return (
    <section
      id="top"
      className="scanlines relative flex min-h-screen items-center overflow-hidden grid-bg"
    >
      <h1 className="sr-only">
        Pranav R Bhat — AI &amp; Data Science Engineer, IEEE published researcher
      </h1>

      {/* ambient glow */}
      <div
        className="orb animate-float left-[-10%] top-[15%] size-[420px] bg-primary/20"
        aria-hidden="true"
      />
      <div
        className="orb animate-float-delayed bottom-[5%] right-[-8%] size-[380px] bg-chart-2/15"
        aria-hidden="true"
      />
      <MatrixRain />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-28 md:px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          hello world, i am
        </p>
        <h2
          aria-hidden="true"
          className="font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl"
        >
          {'PRANAV R BHAT'.split('').map((ch, i) => (
            <span
              key={i}
              className="hero-letter"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </h2>
        <div className="mb-6 mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
          <p className="font-display text-lg text-muted-foreground md:text-2xl">
            AI &amp; <span className="text-gradient font-semibold">Data Science</span>{' '}
            Engineer
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 font-mono text-xs text-green-300">
            <span className="pulse-dot size-2 rounded-full bg-green-400" aria-hidden="true" />
            open to work
          </span>
        </div>
        <div className="overflow-hidden rounded-lg border border-primary/25 bg-card/70 backdrop-blur-sm box-glow">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
            <span className="size-3 rounded-full bg-destructive/80" aria-hidden="true" />
            <span className="size-3 rounded-full bg-chart-3/80" aria-hidden="true" />
            <span className="size-3 rounded-full bg-primary/80" aria-hidden="true" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              root@dev: ~/portfolio
            </span>
          </div>

          <div className="min-h-[400px] space-y-2 p-5 font-mono text-sm leading-relaxed sm:min-h-[330px] md:text-base">
            {rendered.map((line, i) =>
              line.output ? (
                <p key={i} className="pl-4 text-foreground">
                  <span className="text-muted-foreground">{'> '}</span>
                  {line.text}
                </p>
              ) : (
                <p key={i} className="text-primary text-glow">
                  <span className="text-muted-foreground">{line.prompt} </span>
                  {line.text}
                </p>
              ),
            )}

            {showTypingCommand && (
              <p className="text-primary text-glow">
                <span className="text-muted-foreground">{typingLine?.prompt} </span>
                {current}
                <span className="cursor-blink">▋</span>
              </p>
            )}

            {done && (
              <p className="text-primary text-glow">
                <span className="text-muted-foreground">$ </span>
                <span className="cursor-blink">▋</span>
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 font-mono sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#projects"
            className="rounded border border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 hover:box-glow"
          >
            view_projects()
          </a>
          <a
            href="/pranavrbm_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:bg-accent"
          >
            <Download className="size-4" aria-hidden="true" />
            download_cv()
          </a>
          <a
            href="#contact"
            className="rounded border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:bg-accent"
          >
            get_in_touch()
          </a>
        </div>
      </div>
    </section>
  )
}
