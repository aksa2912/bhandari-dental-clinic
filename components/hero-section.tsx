  'use client'

  import { useCallback, useEffect, useRef, useState } from 'react'
  import Image from 'next/image'
  import { AnimatePresence, motion } from 'framer-motion'
  import {
    Calendar,
    ChevronLeft,
    ChevronRight,
    Clock,
    MessageCircle,
    Phone,
    ShieldCheck,
    Sparkles,
    Stethoscope,
    Timer,
  } from 'lucide-react'
  import { CLINIC, heroSlides, telLink, whatsappLink } from '@/lib/clinic-data'

  const badges = [
    { icon: Timer, label: '20+ Years Experience' },
    { icon: Sparkles, label: 'Single Visit RCT' },
    { icon: Clock, label: 'Timings : 10AM to 2PM and  4PM to 7PM' },
    { icon: Calendar, label: 'Available: Monday to Saturday' },
  ]

  const AUTOPLAY = 4500

  export function HeroSection() {
    const [index, setIndex] = useState(0)
    const timer = useRef<ReturnType<typeof setInterval> | null>(null)

    const goTo = useCallback((i: number) => {
      setIndex((prev) => (i + heroSlides.length) % heroSlides.length)
    }, [])

    const next = useCallback(() => goTo(index + 1), [goTo, index])
    const prev = useCallback(() => goTo(index - 1), [goTo, index])

    useEffect(() => {
      timer.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % heroSlides.length)
      }, AUTOPLAY)
      return () => {
        if (timer.current) clearInterval(timer.current)
      }
    }, [index])

    return (
      <section id="home" className="relative min-h-screen w-full overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {heroSlides[index].type === 'video' ? (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source
        src={heroSlides[index].src}
        type="video/mp4"
      />
    </video>
  ) : (
    <Image
      src={heroSlides[index].src}
      alt={heroSlides[index].alt}
      fill
      priority={index === 0}
      sizes="100vw"
      className="object-cover"
    />
  )}
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-brand-blue-dark/70 to-brand-teal-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm"
          >
            <span className="size-2 animate-pulse rounded-full bg-brand-teal" />
            Trusted Family Dental Care in Sirhind, Punjab
          </motion.span>
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="mb-8"
  >
    
  </motion.div>
        <div className="flex flex-col items-center text-center gap-4 lg:flex-row lg:items-center lg:text-left lg:gap-10">
    {/* Logo */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="shrink-0"
    >
      <Image
        src="/clinic/logo2.png"
        alt="Bhandari Dental Clinic Logo"
        width={350}
        height={300}
        priority
      className="h-auto w-60 sm:w-60 md:w-60 lg:w-80"    />
    </motion.div>

    {/* Text Content */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="max-w-3xl font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Advanced Dental Care in Sirhind
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-3 max-w-3xl font-heading text-lg font-semibold text-white/90 sm:text-2xl md:text-3xl"
      >
       
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg"
      >
        

      </motion.p>
    </div>
  </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3"
          >
          <a
    href="https://forms.gle/syvtA4mbWB3xguFt5"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue-dark shadow-lg transition-transform hover:scale-[1.03]"
  >
    <Calendar className="size-4" />
    Book Appointment
  </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Phone className="size-4" />
              Call Now
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex flex-col items-start gap-2 rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md"
              >
                <b.icon className="size-5 text-brand-teal" />
                <span className="text-xs font-semibold leading-snug text-white">
                  {b.label}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white/25 sm:flex"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white/25 sm:flex"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Dots */}
        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>
    )
  }
