'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react'
import {
  CLINIC,
  mapsDirections,
  mapsEmbed,
  telLink,
  whatsappLink,
} from '@/lib/clinic-data'
import { SectionHeading } from '@/components/section-heading'

const timings = [
  { day: 'Monday – Saturday', hours: ['10:00 AM – 2:00 PM', '4:00 PM – 7:00 PM'] },
  { day: 'Sunday', hours: ['Emergency Cases Only'], accent: true },
]

const contactItems = [
  { icon: MapPin, label: 'Visit Us', value: CLINIC.address },
  { icon: Phone, label: 'Call Us', value: CLINIC.phoneDisplay, href: telLink },
  { icon: Mail, label: 'Email Us', value: CLINIC.email, href: `mailto:${CLINIC.email}` },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Visit Bhandari Dental Clinic"
          description="We are conveniently located on Defence Bandh Road, Sirhind. Reach out to book your visit."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Contact info + timings */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <ul className="flex flex-col gap-5">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue-dark">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground transition-colors hover:text-brand-blue"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href={telLink}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal px-4 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <Phone className="size-4" />
                  Call
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Timings */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-border bg-gradient-to-br from-brand-blue-dark to-brand-blue p-6 text-white shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15">
                  <Clock className="size-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold">
                  Clinic Timings
                </h3>
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                {timings.map((t) => (
                  <li
                    key={t.day}
                    className="flex items-start justify-between gap-4 border-b border-white/15 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-semibold">{t.day}</span>
                    <span className="text-right text-sm text-white/85">
                      {t.hours.map((h) => (
                        <span key={h} className="block">
                          {h}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:col-span-2"
          >
            <div className="relative min-h-[320px] flex-1">
              <iframe
                title="Bhandari Dental Clinic location map"
                src={mapsEmbed}
                className="absolute inset-0 size-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-3 p-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-heading font-semibold text-foreground">
                  {CLINIC.name}
                </p>
                <p className="text-sm text-muted-foreground">{CLINIC.address}</p>
              </div>
              <a
                href={mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                <Navigation className="size-4" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
