'use client'

import { motion } from 'framer-motion'
import {
  Armchair,
  Camera,
  Fan,
  Gauge,
  Radiation,
  Settings,
  Waves,
  Wind,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const equipment = [
  { icon: Armchair, title: '2 Fully Equipped Dental Chairs', text: 'Modern operatories for comfortable, efficient treatment.' },
  { icon: Gauge, title: 'Air Compressor', text: 'Reliable power for precise dental instruments.' },
  { icon: Waves, title: 'Dental Suction System', text: 'Keeps the treatment area clean and comfortable.' },
  { icon: Settings, title: 'Handpieces & Motors', text: 'High-performance tools for accurate procedures.' },
  { icon: Radiation, title: 'Dental X-Ray Equipment', text: 'Clear diagnostics for accurate treatment planning.' },
  { icon: Camera, title: 'Intraoral Camera', text: 'See exactly what we see, right inside your mouth.' },
  { icon: Wrench, title: 'Autoclave Sterilization Unit', text: 'Hospital-grade sterilization of every instrument.' },
  { icon: Wind, title: 'Air Purifier', text: 'Cleaner air for a safer clinic environment.' },
  { icon: Fan, title: 'Modern Dental Instruments', text: 'A complete set of precise, up-to-date tools.' },
]

export function TechnologySection() {
  return (
    <section id="technology" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology & Equipment"
          title="Advanced tools for precise dentistry"
          description="Our clinic is equipped with modern technology to deliver accurate, safe and comfortable care."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lg"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-sm">
                <item.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
