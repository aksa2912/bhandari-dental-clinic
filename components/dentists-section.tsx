'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const dentists = [
  {
    name: 'Dr. Upinder Bhandari',
    qualification: 'BDS',
    image: '/clinic/dr-upinder.png',
    tagline: 'Founder & Senior Dental Surgeon',
  },
  {
    name: 'Dr. Kimmy Bhandari',
    qualification: 'BDS',
    image: '/clinic/dr-kimmy.png',
    tagline: 'Dental Surgeon & Smile Specialist',
  },
]

export function DentistsSection() {
  return (
    <section id="dentists" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet Our Dentists"
          title="Experienced hands, caring hearts"
          description="Our qualified BDS dentists bring decades of combined experience to every smile they treat."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-8">
          {dentists.map((doc, i) => (
            <motion.article
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={doc.image || '/placeholder.svg'}
                  alt={`Portrait of ${doc.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {doc.name}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-semibold text-brand-blue-dark">
                  <Award className="size-4" />
                  {doc.qualification}
                </span>
                <p className="mt-3 text-sm text-muted-foreground">
                  {doc.tagline}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
