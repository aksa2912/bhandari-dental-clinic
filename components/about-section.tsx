'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: HeartHandshake,
    title: 'Family Dental Care',
    text: 'Gentle, personalized treatment for every member of your family, from children to seniors.',
  },
  {
    icon: Clock,
    title: 'Maximum Work, Minimum Visits',
    text: 'Efficient treatment planning so you spend less time in the chair and more time smiling.',
  },
  {
    icon: Sparkles,
    title: 'Single Visit Root Canals',
    text: 'Advanced RCT completed in a single sitting wherever clinically suitable.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Sterilized',
    text: 'Modern equipment and strict sterilization protocols for a worry-free experience.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/clinic/surgery2.jpeg"
              alt="Dentist at Bhandari Dental Clinic treating a patient with assistant support"
              width={720}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-border bg-background/95 p-5 shadow-xl backdrop-blur sm:block">
            <p className="font-heading text-4xl font-extrabold text-gradient-brand">
              20+
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              Years of trusted
              <br />
              dental care
            </p>
          </div>
          <div className="absolute -left-4 top-8 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur lg:block">
            <p className="text-sm font-semibold text-foreground">
              Sirhind, Punjab
            </p>
            <p className="text-xs text-muted-foreground">Defence Bandh Road</p>
          </div>
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal-dark"
          >
            About Our Clinic
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Compassionate, modern dentistry the whole family can trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-pretty leading-relaxed text-muted-foreground"
          >
            For over two decades, Bhandari Dental Clinic has been Sirhind&apos;s
            destination for reliable, gentle and advanced dental care. Led by
            Dr. Upinder Bhandari and Dr. Kimmy Bhandari, we combine years of
            clinical expertise with modern equipment to deliver comfortable
            treatments and lasting results, all in a warm, welcoming
            environment.
          </motion.p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lg"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-sm">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
