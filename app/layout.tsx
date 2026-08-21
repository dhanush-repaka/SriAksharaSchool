import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/animations/PageTransition'
import Loader from '@/components/animations/Loader'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sriakshara.com'),
  title: {
    default: 'Sri Akshara School | A thoughtful education, since 1999',
    template: '%s | Sri Akshara School',
  },
  description:
    'Sri Akshara School is a warm, academically strong community where children are known, challenged, and cared for. Visit campus, apply, or launch Learning Buddy.',
  keywords:
    'Sri Akshara School, sriakshara.com, Learning Buddy, admissions, holistic education, parent school, campus tour',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body>
        <Loader />
        <SmoothScrollProvider>
          <AnnouncementBar />
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
