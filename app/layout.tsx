import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/animations/PageTransition'
import Loader from '@/components/animations/Loader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sri Akshara School - Excellence in Education',
  description: 'Sri Akshara School provides world-class education with a focus on holistic development and academic excellence.',
  keywords: 'school, education, Sri Akshara, academics, admissions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Loader />
        <SmoothScrollProvider>
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

