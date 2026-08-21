'use client'

import Link from 'next/link'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Photo from '@/components/ui/Photo'
import Icon from '@/components/ui/Icon'

interface SplitSectionProps {
  image: string
  imagePosition: 'left' | 'right'
  eyebrow?: string
  title: string
  content: string
  ctaText?: string
  ctaLink?: string
  className?: string
  caption?: string
}

export default function SplitSection({
  image,
  imagePosition,
  eyebrow,
  title,
  content,
  ctaText,
  ctaLink,
  className = '',
  caption,
}: SplitSectionProps) {
  const isLeft = imagePosition === 'left'

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container-page">
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            !isLeft ? 'lg:grid-flow-dense' : ''
          }`}
        >
          <ScrollAnimation
            animation={isLeft ? 'slideRight' : 'slideLeft'}
            className={!isLeft ? 'lg:col-start-2' : ''}
          >
            <figure>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-3 hidden border border-gold-400/40 sm:block" />
                <Photo src={image} alt={title} className="aspect-[4/3] shadow-soft" />
              </div>
              {caption && (
                <figcaption className="mt-4 font-serif italic text-sm text-ink-soft">
                  {caption}
                </figcaption>
              )}
            </figure>
          </ScrollAnimation>

          <ScrollAnimation
            animation={isLeft ? 'slideLeft' : 'slideRight'}
            className={!isLeft ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <div>
              {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
              <h2 className="font-serif text-display-sm">{title}</h2>
              <div className="gold-rule mt-5 mb-6" />
              <p className="text-lg leading-relaxed text-ink-muted">{content}</p>
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest-700 hover:text-forest-900"
                >
                  {ctaText}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
