'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { telLink, whatsappLink } from '@/lib/clinic-data'

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={telLink}
        aria-label="Call the clinic"
        className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-lg shadow-brand-blue/30 transition-transform hover:scale-110"
      >
        <Phone className="size-6" />
      </a>
    </div>
  )
}
