'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  invert?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
      )}
    >
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider',
          invert
            ? 'bg-white/15 text-white'
            : 'bg-brand-teal/10 text-brand-teal-dark',
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'max-w-2xl text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl',
          invert ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-pretty leading-relaxed',
            invert ? 'text-white/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
