'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Phone } from 'lucide-react'
import { CLINIC, telLink, whatsappLink } from '@/lib/clinic-data'

export function AppointmentCta() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-teal-dark px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
              Book Your Dental Appointment Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/85">
              Give your family the smile they deserve. Reach out to Bhandari
              Dental Clinic and our team will be happy to help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue-dark shadow-lg transition-transform hover:scale-[1.03]"
              >
                <Phone className="size-4" />
                Call Now
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="size-4" />
                WhatsApp Us
              </a>
             <a
  href="https://forms.gle/syvtA4mbWB3xguFt5"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue-dark shadow-lg transition-transform hover:scale-[1.03]"
>
  <Calendar className="size-4" />
  Book Appointment
</a>
            </div>
            <p className="mt-6 text-sm text-white/70">{CLINIC.phoneDisplay}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
