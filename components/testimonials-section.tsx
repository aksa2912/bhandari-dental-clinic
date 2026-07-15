'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    name: 'Harpreet Kaur',
    location: 'Sirhind',
    rating: 5,
    text: 'I got my root canal done in a single visit and felt zero pain. Dr. Bhandari and the team are extremely professional and caring. Highly recommend this clinic to everyone.',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Fatehgarh Sahib',
    rating: 5,
    text: 'The clinic is very clean and modern. My whole family visits here for regular checkups. The doctors explain everything patiently and the treatment is genuinely affordable.',
  },
  {
    name: 'Simran Gill',
    location: 'Sirhind',
    rating: 5,
    text: 'Got my braces done here and the results are amazing. The staff is friendly and the environment is so comfortable. Best dental clinic in the area by far.',
  },
  {
    name: 'Amanpreet Singh',
    location: 'Bassi Pathana',
    rating: 5,
    text: 'Came in with a dental emergency and they attended to me immediately. Very experienced dentists with a gentle approach. Thank you for saving my tooth!',
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
    </section>
  )
}
