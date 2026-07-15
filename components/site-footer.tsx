import { AtSign, Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CLINIC, telLink, whatsappLink } from '@/lib/clinic-data'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Dentists', href: '#dentists' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Single Visit RCT',
  'Dental Implants',
  'Braces & Aligners',
  'Smile Designing',
  'Teeth Whitening',
  'Emergency Care',
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-white/15">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                <path
                  d="M12 3.2c-1.7-1-3.6-1.2-4.9-.3C5.4 4 4.7 6.2 5 9c.2 1.6.6 2.7.9 4.2.3 1.4.4 3 .8 4.7.3 1.3.7 2.5 1.5 2.5.9 0 1-1.4 1.3-2.9.3-1.4.6-2.4 1.5-2.4s1.2 1 1.5 2.4c.3 1.5.4 2.9 1.3 2.9.8 0 1.2-1.2 1.5-2.5.4-1.7.5-3.3.8-4.7.3-1.5.7-2.6.9-4.2.3-2.8-.4-5-2.1-6.1-1.3-.9-3.2-.7-4.9.3Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="font-heading text-lg font-bold">
              Bhandari Dental
            </span>
          </div>
          <p className="mt-4 text-sm font-medium text-brand-teal">
            {CLINIC.motto}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Providing advanced, family-focused dental care in Sirhind with over
            20 years of trusted experience.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25"
            >
              <MessageCircle className="size-4" />
            </a>
            <a
              href={`mailto:${CLINIC.email}`}
              aria-label="Email"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25"
            >
              <AtSign className="size-4" />
            </a>
            <a
              href="#home"
              aria-label="Website"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25"
            >
              <Globe className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
            Services
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-3.5">
            <li className="flex gap-3 text-sm text-white/70">
              <MapPin className="size-4 shrink-0 text-brand-teal" />
              {CLINIC.address}
            </li>
            <li>
              <a
                href={telLink}
                className="flex gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-brand-teal" />
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CLINIC.email}`}
                className="flex gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-brand-teal" />
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-white/60 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Bhandari Dental Clinic. All rights
            reserved.
          </p>
          <p>Dr. Upinder Bhandari (BDS) &middot; Dr. Kimmy Bhandari (BDS)</p>
        </div>
      </div>
    </footer>
  )
}
