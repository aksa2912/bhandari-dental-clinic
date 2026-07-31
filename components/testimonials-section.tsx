'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    name: 'Loveleen Chandok',
    rating: 5,
    text: 'Got my front teeth chiped after sliping. Dr. Upender did the procedure and now, my teeth looks like same as it was earlier. Also, i would like to mention here that clinic is well maintained from safety concern and all safety gadets are being used by doctors from Covid point of vew. Thanku doc for the service and I highly recommend him for any kind of dental issues',
  },
  {
    name: 'Barinder Singh',
    rating: 5,
    text: 'Totally happy with my new denture which Dr Bhandari made for me. Good skills, efficinet , quick in treatment, as well as not costly at all. Saved me a lot of money as well as a lot of time. Thank you Doctor.',
  },
  {
    name: 'Arman Virk',
    rating: 5,
    text: 'Great experience indulging with Dr. Bhandari & his wife, superb dentists, good advisors, painless procedures.#bestintown i must say🤞🏻',
  },
  {
    name: 'Rajwinder farmer',
    rating: 5,
    text: 'Bht vdya nature de ne sir and bht vdya way nal kam krde ne ..mainu feel v ni hunda ki mere RCT krke caping hoyi aa ..Thanku for your services ...',
  },
]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  const move = useCallback(
    (dir: number) =>
      setIndex((c) => (c + dir + testimonials.length) % testimonials.length),
    [],
  )

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((c) => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(t)
  }, [index])

  const current = testimonials[index]

  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Smiles that speak for us"
          description="Real experiences from the families we care for every day."
        />

        <div className="relative mt-14">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-12">
            <Quote className="size-10 text-brand-teal/40" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground">
                  &ldquo;{current.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal font-heading text-lg font-bold text-white">
                    {current.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {current.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {current.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-brand-blue hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-7 bg-brand-blue'
                      : 'w-2 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-brand-blue hover:text-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
            <a
              href="PASTE_YOUR_GOOGLE_REVIEW_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue to-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
            >
              ⭐ View All Google Reviews
            </a>
          </div>
    </section>
  )
}
