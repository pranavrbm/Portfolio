'use client'

import { useEffect, useRef, useState } from 'react'
import { Download } from 'lucide-react'
import { MatrixRain } from './matrix-rain'

type Line = {
  prompt?: string
  text: string
  output?: boolean
}

type HistoryEntry = { kind: 'cmd' | 'out'; text: string }

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

const jokes = [
  'why do programmers prefer dark mode? because light attracts bugs.',
  'there are 10 types of people: those who understand binary and those who don\'t.',
  'i would tell you a UDP joke, but you might not get it.',
  '99 little bugs in the code, 99 little bugs... patch one down, run it around — 127 little bugs in the code.',
  'my code works and i have no idea why. please don\'t ask me to explain it.',
]

const coffeeArt = [
  '    ( (',
  '     ) )',
  '  ..........',
  '  |        |]',
  "  '--------'",
  'brewing... ☕ productivity +10%, sleep -10%',
]

function toggleHacker(): boolean {
  const on = document.documentElement.classList.toggle('hacker-mode')
  try {
    localStorage.setItem('pranav-hacker', on ? '1' : '0')
  } catch {
    // private mode — no persistence
  }
  return on
}

function runCommand(raw: string): { lines: string[]; action?: () => void } {
  const cmd = raw.trim().toLowerCase()

  if (cmd === 'help') {
    return {
      lines: [
        'available commands:',
        '  whoami        who are you again?',
        '  ls            list sections',
        '  cat resume    download my CV (the cheeky way)',
        '  sudo hire-me  fast-track to my inbox',
        '  coffee        brew one',
        '  joke          developer humor, best-effort',
        '  matrix        follow the white rabbit',
        '  clear         wipe the evidence',
        '  exit          try your luck',
      ],
    }
  }
  if (cmd === 'whoami') {
    return {
      lines: [
        'pranavrbm — human, probably (confidence: 97%)',
        'occupation: turning caffeine and data into software',
      ],
    }
  }
  if (cmd === 'ls' || cmd === 'ls -la' || cmd === 'ls ./') {
    return {
      lines: ['about/  skills/  projects/  experience/  creds/  contact/'],
    }
  }
  if (cmd === 'cat resume' || cmd === 'cat resume.pdf' || cmd === 'cv') {
    return {
      lines: ['fetching pranavrbm_CV.pdf ...', 'download started ✓ (you\'re welcome)'],
      action: () => {
        const a = document.createElement('a')
        a.href = '/pranavrbm_CV.pdf'
        a.download = ''
        a.click()
      },
    }
  }
  if (cmd === 'sudo hire-me' || cmd === 'sudo hire me') {
    return {
      lines: ['[sudo] permission granted ✓', 'routing you to my inbox...'],
      action: () =>
        document
          .getElementById('contact')
          ?.scrollIntoView({ behavior: 'smooth' }),
    }
  }
  if (cmd.startsWith('sudo')) {
    return {
      lines: [
        'user is not in the sudoers file.',
        'this incident will be reported... to my inbox.',
      ],
    }
  }
  if (cmd === 'coffee' || cmd === '☕') {
    return { lines: coffeeArt }
  }
  if (cmd === 'joke' || cmd === 'jokes') {
    return { lines: [jokes[Math.floor(Math.random() * jokes.length)]] }
  }
  if (cmd === 'matrix' || cmd === 'neo' || cmd === 'red pill') {
    const on = toggleHacker()
    return {
      lines: [
        'wake up, neo...',
        on
          ? 'hacker mode: ON. welcome to the real world.'
          : 'hacker mode: OFF. back to the amber simulation.',
      ],
    }
  }
  if (cmd === 'exit' || cmd === 'quit' || cmd === 'logout') {
    return {
      lines: [
        'there is no exit. only deploy.',
        '(but seriously — check out my projects below)',
      ],
    }
  }
  if (cmd === 'rm -rf /' || cmd === 'rm -rf /*') {
    return { lines: ['nice try 😏 this portfolio is immutable.'] }
  }
  if (cmd === 'hello' || cmd === 'hi' || cmd === 'hey' || cmd === 'yo') {
    return { lines: ['hey there! type \'help\' to see my tricks.'] }
  }
  if (cmd === 'ping') {
    return { lines: ['pong. latency: one coffee. status: employable.'] }
  }
  if (cmd === 'pwd') {
    return { lines: ['/home/pranavrbm/portfolio (hire-please)'] }
  }
  return {
    lines: [`bash: ${raw.trim()}: command not found`, 'hint: type \'help\''],
  }
}

export function TerminalHero() {
  const [rendered, setRendered] = useState<Line[]>([])
  const [current, setCurrent] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      if (localStorage.getItem('pranav-hacker') === '1') {
        document.documentElement.classList.add('hacker-mode')
      }
    } catch {
      // no storage — skip
    }
  }, [])

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

  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [history, done])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim()
    if (!cmd) return
    setInput('')
    if (cmd.toLowerCase() === 'clear') {
      setHistory([])
      return
    }
    const { lines, action } = runCommand(cmd)
    setHistory((h) => [
      ...h,
      { kind: 'cmd', text: cmd },
      ...lines.map((text) => ({ kind: 'out' as const, text })),
    ])
    action?.()
  }

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
              root@dev: ~/portfolio — interactive
            </span>
          </div>

          <div
            ref={bodyRef}
            onClick={() => inputRef.current?.focus()}
            className="scroll-thin max-h-[460px] min-h-[400px] space-y-2 overflow-y-auto p-5 font-mono text-sm leading-relaxed sm:min-h-[330px] md:text-base"
          >
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
              <>
                {history.map((entry, i) =>
                  entry.kind === 'cmd' ? (
                    <p key={i} className="text-primary text-glow">
                      <span className="text-muted-foreground">$ </span>
                      {entry.text}
                    </p>
                  ) : (
                    <p key={i} className="whitespace-pre-wrap pl-4 text-foreground">
                      <span className="text-muted-foreground">{'> '}</span>
                      {entry.text}
                    </p>
                  )
                )}
                <form
                  onSubmit={onSubmit}
                  className="flex items-center gap-2 text-primary"
                >
                  <span className="shrink-0 text-muted-foreground">$</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full min-w-0 flex-1 bg-transparent text-primary caret-primary outline-none placeholder:text-muted-foreground/50"
                    placeholder="type 'help' and hit enter..."
                    spellCheck={false}
                    autoComplete="off"
                    autoCapitalize="none"
                    aria-label="Terminal input — type help for commands"
                  />
                </form>
              </>
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
