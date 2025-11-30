'use client'

import Link from 'next/link'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

interface CTAProps {
  title: string
  description: string
  primaryCtaText: string
  primaryCtaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  className?: string
}

export default function CTA({
  title,
  description,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  className = '',
}: CTAProps) {
  return (
    <section className={`py-20 lg:py-32 bg-primary-600 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-10">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryCtaLink}
                className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {primaryCtaText}
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

