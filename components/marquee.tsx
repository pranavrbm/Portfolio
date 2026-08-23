const rowOne = [
  'Python',
  'PyTorch',
  'FastAPI',
  'Next.js',
  'TypeScript',
  'LangChain',
  'Docker',
  'PostgreSQL',
  'Spring Boot',
  'GCP',
]

const rowTwo = [
  'RAG',
  'LiveKit',
  'Whisper',
  'Ollama',
  'GitHub Actions',
  'Tailwind CSS',
  'BigQuery',
  'Playwright',
  'Redis',
  'Groq',
]

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max items-center gap-8 py-2.5 ${
          reverse ? 'marquee-track-reverse' : 'marquee-track'
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-sm text-muted-foreground"
          >
            {item}
            <span className="text-primary/40" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <div
      className="relative border-y border-border bg-card/30 py-2"
      aria-hidden="true"
    >
      <Row items={rowOne} />
      <Row items={rowTwo} reverse />
    </div>
  )
}
