'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

interface SplitSectionProps {
  image: string
  imagePosition: 'left' | 'right'
  title: string
  content: string
  ctaText?: string
  ctaLink?: string
  className?: string
}

export default function SplitSection({
  image,
  imagePosition,
  title,
  content,
  ctaText,
  ctaLink,
  className = '',
}: SplitSectionProps) {
  const isLeft = imagePosition === 'left'

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            !isLeft ? 'lg:grid-flow-dense' : ''
          }`}
        >
          {/* Image */}
          <ScrollAnimation
            animation={isLeft ? 'slideRight' : 'slideLeft'}
            className={!isLeft ? 'lg:col-start-2' : ''}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation
            animation={isLeft ? 'slideLeft' : 'slideRight'}
            className={!isLeft ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{content}</p>
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="inline-block mt-4 px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
                >
                  {ctaText} →
                </Link>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

