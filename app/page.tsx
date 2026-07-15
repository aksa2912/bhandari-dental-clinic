import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { DentistsSection } from '@/components/dentists-section'
import { ServicesSection } from '@/components/services-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { TechnologySection } from '@/components/technology-section'
import { GallerySection } from '@/components/gallery-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { AppointmentCta } from '@/components/appointment-cta'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <DentistsSection />
        <ServicesSection />
        <WhyChooseUs />
        <TechnologySection />
        <GallerySection />
        <TestimonialsSection />
        <AppointmentCta />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  )
}
