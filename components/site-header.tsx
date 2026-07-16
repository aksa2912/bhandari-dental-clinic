'use client'

import { useEffect, useState } from 'react'
import Image from "next/image"
import { Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CLINIC, telLink } from '@/lib/clinic-data'


const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Dentists', href: '#dentists' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
     <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex size-8 sm:size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-teal text-primary-foreground shadow-md">
          <ToothMark />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-heading text-sm sm:text-base font-bold tracking-tight',
                scrolled ? 'text-foreground' : 'text-foreground',
              )}
            >
              Bhandari Dental Clinic, Sirhind
            </span>
            <span className="hidden sm:block text-[11px] font-medium text-brand-teal-dark">
             {CLINIC.motto}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-brand-blue/20 transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Phone className="size-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={telLink}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="size-4" />
              Call {CLINIC.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function ToothMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <path
        d="M12 3.2c-1.7-1-3.6-1.2-4.9-.3C5.4 4 4.7 6.2 5 9c.2 1.6.6 2.7.9 4.2.3 1.4.4 3 .8 4.7.3 1.3.7 2.5 1.5 2.5.9 0 1-1.4 1.3-2.9.3-1.4.6-2.4 1.5-2.4s1.2 1 1.5 2.4c.3 1.5.4 2.9 1.3 2.9.8 0 1.2-1.2 1.5-2.5.4-1.7.5-3.3.8-4.7.3-1.5.7-2.6.9-4.2.3-2.8-.4-5-2.1-6.1-1.3-.9-3.2-.7-4.9.3Z"
        fill="currentColor"
      />
    </svg>
  )
}
