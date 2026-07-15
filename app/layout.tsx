import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bhandari Dental Clinic | Your Family\'s Smile Destination in Sirhind',
  description:
    'Bhandari Dental Clinic in Sirhind, Punjab offers advanced family dental care with 20+ years of experience. Single visit RCT, implants, braces, aligners, smile designing and emergency dental care by Dr. Upinder Bhandari & Dr. Kimmy Bhandari (BDS).',
  keywords: [
    'dentist Sirhind',
    'dental clinic Sirhind',
    'Bhandari Dental Clinic',
    'root canal Sirhind',
    'dental implants Punjab',
    'braces Sirhind',
    'family dentist Punjab',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Bhandari Dental Clinic | Your Family\'s Smile Destination',
    description:
      'Advanced dental care in Sirhind, Punjab with over 20 years of trusted experience.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1d5fb0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${poppins.variable}`}>
      <body className="bg-background antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
