'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Icon from '@/components/ui/Icon'
import { images } from '@/lib/images'

export default function IndependenceDayFeature() {
  return (
    <section id="independence-day-2026" className="bg-cream-50 py-16 lg:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollAnimation animation="slideRight" className="lg:col-span-6">
            <figure>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-3 hidden border border-gold-400/40 sm:block" />
                <div className="relative aspect-square overflow-hidden bg-cream-100 shadow-soft">
                  <Image
                    src={images.independenceDay2026}
                    alt="Photo collage of students and staff at Sri Akshara School celebrating the 80th Independence Day in 2026"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <figcaption className="mt-4 font-serif italic text-sm text-ink-soft">
                80th Independence Day celebrations, 2026.
              </figcaption>
            </figure>
          </ScrollAnimation>

          <ScrollAnimation animation="slideLeft" className="lg:col-span-6">
            <p className="eyebrow mb-4">Campus news · 15 August 2026</p>
            <h2 className="font-serif text-display-sm">
              Independence Day celebrations 2026
            </h2>
            <div className="gold-rule mt-5 mb-6" />
            <p className="text-lg leading-relaxed text-ink-muted">
              Sri Akshara marked the 80th Independence Day with assembly,
              patriotic programmes, and the national flag. Students came in
              uniform and in costume—army dress, traditional attire, and the
              small flags that make a school morning feel like a country
              remembering itself.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Teachers and families stood with them. The stage carried the
              Ashoka Chakra and the colours of the tricolour. It was a day of
              salute, song, and belonging.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/independence-day-2026"
                className="inline-flex items-center gap-2 text-sm font-medium text-forest-700 hover:text-forest-900"
              >
                See the celebration
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-forest-700"
              >
                Open the gallery
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
