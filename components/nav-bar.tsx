'use client'

import { useEffect, useState } from 'react'
import { Menu, Terminal, X } from 'lucide-react'

const links = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'creds', label: 'creds' },
  { id: 'contact', label: 'contact' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    links.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 font-mono md:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-primary text-glow"
          aria-label="Home"
          onClick={() => setOpen(false)}
        >
          <Terminal className="size-5" aria-hidden="true" />
          <span className="text-sm font-bold tracking-tight">~/pranavrbm</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`rounded px-3 py-2 text-sm transition-colors hover:text-glow ${
                  active === link.id
                    ? 'text-primary text-glow'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <span
                  className={active === link.id ? 'text-primary' : 'text-primary/70'}
                >
                  ${' '}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded border border-primary/40 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:block"
          >
            ./connect
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded border border-border p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary md:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full border-b border-border bg-background/95 backdrop-blur-md md:hidden">
            <ul className="space-y-1 px-4 py-4">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded px-3 py-2.5 text-sm transition-colors ${
                      active === link.id
                        ? 'bg-accent text-primary text-glow'
                        : 'text-muted-foreground hover:bg-secondary hover:text-primary'
                    }`}
                  >
                    <span className="text-primary/70">$ </span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 sm:hidden">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded border border-primary/40 px-3 py-2.5 text-center text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  ./connect
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
