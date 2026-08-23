'use client'

import { useEffect, useRef } from 'react'

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const chars =
      'アカサタナハマヤラワ0123456789ABCDEF{}[]<>=+-*/λΣΔΦπ01'.split('')
    const fontSize = 14
    let columns = 0
    let drops: number[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      columns = Math.floor(canvas.width / fontSize)
      drops = Array(columns).fill(1)
    }
    resize()

    let frame = 0
    let raf = 0
    const draw = () => {
      raf = requestAnimationFrame(draw)
      // throttle to ~20fps for a calmer, more readable rain
      frame++
      if (frame % 3 !== 0) return

      ctx.fillStyle = 'rgba(10, 15, 10, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // leading char is brighter
        ctx.fillStyle =
          Math.random() > 0.975 ? 'rgba(180, 255, 190, 0.9)' : 'rgba(0, 220, 90, 0.55)'
        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
    />
  )
}
