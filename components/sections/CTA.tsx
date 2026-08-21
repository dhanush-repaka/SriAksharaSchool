'use client'

import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Button from '@/components/ui/Button'

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
    <section className={`relative overflow-hidden bg-forest-900 py-16 lg:py-24 ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#d4ae72_0,transparent_32%),radial-gradient(circle_at_80%_80%,#3f6b54_0,transparent_40%)]" />
      <div className="container-page relative">
        <ScrollAnimation animation="fadeUp">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-gold-300">We would be glad to meet you</p>
            <h2 className="mt-4 font-serif text-display-sm text-cream-50">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream-200/80">{description}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primaryCtaLink} variant="gold">
                {primaryCtaText}
              </Button>
              {secondaryCtaText && secondaryCtaLink && (
                <Button href={secondaryCtaLink} variant="ghost">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
