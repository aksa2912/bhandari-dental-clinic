'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  AlignHorizontalDistributeCenter,
  Baby,
  Bone,
  Brush,
  CircleDot,
  Droplets,
  Layers,
  Scissors,
  ShieldPlus,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Wrench,
  Zap,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  { icon: Stethoscope, name: 'Routine Checkups & Cleanings' },
  { icon: Droplets, name: 'Fluoride Treatments' },
  { icon: Brush, name: 'Dental Fillings' },
  { icon: Zap, name: 'Root Canal Therapy' },
  { icon: Sparkles, name: 'Single Visit Root Canal' },
  { icon: CircleDot, name: 'Dental Crowns' },
  { icon: Layers, name: 'Bridges & Dentures' },
  { icon: AlignHorizontalDistributeCenter, name: 'Traditional Braces' },
  { icon: Smile, name: 'Clear Aligners' },
  { icon: ShieldPlus, name: 'Teeth Retainers' },
  { icon: Scissors, name: 'Tooth Extraction' },
  { icon: Bone, name: 'Wisdom Tooth Removal' },
  { icon: Syringe, name: 'Dental Implants' },
  { icon: Sparkles, name: 'Teeth Whitening' },
  { icon: Smile, name: 'Smile Designing' },
  { icon: Baby, name: 'Pediatric Dentistry' },
  { icon: Activity, name: 'Gum Treatments' },
  { icon: ShieldPlus, name: 'Emergency Dental Care' },
  { icon: Wrench, name: 'Full Mouth Rehabilitation' },
  { icon: Stethoscope, name: 'All Types of Dental Surgeries' },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete dental care under one roof"
          description="From routine cleanings to advanced surgeries, we offer a full range of treatments tailored to every patient."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-dark transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-teal group-hover:text-white">
                <service.icon className="size-5" />
              </span>
              <h3 className="text-sm font-semibold leading-snug text-foreground">
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
