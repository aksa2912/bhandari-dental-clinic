'use client'

import { motion } from 'framer-motion'
import {
  BadgeCheck,
  CalendarClock,
  GraduationCap,
  HeartHandshake,
  Home,
  Microscope,
  Siren,
  Sparkles,
  Timer,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const features = [
  { icon: Timer, title: '20+ Years Experience', text: 'Two decades of trusted dental care in Sirhind.' },
  { icon: GraduationCap, title: 'Experienced BDS Dentists', text: 'Qualified professionals dedicated to your smile.' },
  { icon: CalendarClock, title: 'Maximum Work, Minimum Visits', text: 'Efficient care that respects your time.' },
  { icon: Sparkles, title: 'Single Visit RCT Available', text: 'Root canals completed in one comfortable sitting.' },
  { icon: Microscope, title: 'Modern Equipment', text: 'Advanced technology for precise, gentle treatment.' },
  { icon: BadgeCheck, title: 'Advanced Sterilization', text: 'Strict hygiene protocols for your safety.' },
  { icon: Home, title: 'Family-Friendly Environment', text: 'A warm, welcoming space for all ages.' },
  { icon: HeartHandshake, title: 'Personalized Care', text: 'Treatment plans built around your needs.' },
  { icon: Siren, title: 'Emergency Dental Support', text: 'We are here when you need urgent care.' },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-teal-dark py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A dental experience built on trust"
          description="Patients across Sirhind choose us for our expertise, comfort and genuine care."
          invert
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <f.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
