'use client'

import { useEffect, useState } from 'react'

export function IstClock({ className = '' }: { className?: string }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={className}>
      {time ? `${time} IST` : 'IST'}
    </span>
  )
}
