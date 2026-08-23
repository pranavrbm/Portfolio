'use client'

import { useEffect, useRef, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed inset-x-0 top-0 z-[70] h-0.5"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 10px var(--glow-45)',
        }}
      />
    </div>
  )
}

export function EasterEggs() {
  useEffect(() => {
    // playful tab title when the visitor switches away
    const original = document.title
    const onVisibility = () => {
      document.title = document.hidden
        ? '⌨️ come back, the terminal misses you...'
        : original
    }
    document.addEventListener('visibilitychange', onVisibility)

    // devtools greeting
    try {
      console.log(
        '%c~/pranavrbm%c v2.6 — you opened the devtools. curiosity: +10. hiring prospects: also +10.',
        'color:#fbbf24;font-size:18px;font-weight:bold;font-family:monospace',
        'color:#9c9484;font-family:monospace'
      )
      console.log(
        '%cpsst: the hero terminal accepts input. try \'help\'. or \'matrix\'. or \'sudo hire-me\'.',
        'color:#9c9484;font-family:monospace'
      )
    } catch {
      // console blocked — skip
    }

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      document.title = original
    }
  }, [])

  return null
}

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = ref.current
    if (!el) return

    let raf = 0
    let tx = -600
    let ty = -600
    let cx = -600
    let cy = -600

    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }
    const loop = () => {
      cx += (tx - cx) * 0.1
      cy += (ty - cy) * 0.1
      el.style.transform = `translate3d(${cx - 260}px, ${cy - 260}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 size-[520px] rounded-full bg-primary opacity-[0.06] blur-[110px]"
    />
  )
}

export function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />
}
