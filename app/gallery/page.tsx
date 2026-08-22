'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/sections/PageHeader'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Icon from '@/components/ui/Icon'
import { images } from '@/lib/images'

const categories = ['All', 'Events', 'Academics', 'Sports', 'Arts', 'Facilities'] as const

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('All')

  const visible = useMemo(() => {
    const items =
      active === 'All'
        ? [...images.gallery]
        : images.gallery.filter((item) => item.category === active)

    if (active === 'All' || active === 'Events') {
      return items.filter((item) => item.src !== images.independenceDay2026)
    }

    return items
  }, [active])

  return (
    <main>
      <PageHeader
        eyebrow="Gallery"
        title="The school, as it looks on an ordinary day."
        description="Assemblies, laboratories, matches, and quiet corners. These are not staged campaigns—they are the life we keep."
        image={images.studentLife}
        imageAlt="Students together on campus"
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          {(active === 'All' || active === 'Events') && (
            <ScrollAnimation animation="fadeUp">
              <Link
                href="/independence-day-2026"
                className="group mb-12 grid overflow-hidden border border-forest-100 bg-cream-50 sm:grid-cols-2"
              >
                <div className="relative aspect-square bg-cream-100 sm:aspect-auto sm:min-h-[22rem]">
                  <Image
                    src={images.independenceDay2026}
                    alt="Sri Akshara School Independence Day Celebrations 2026 — 80th Independence Day"
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <p className="eyebrow">Featured · 15 August 2026</p>
                  <h2 className="mt-4 font-serif text-3xl lg:text-4xl">
                    Independence Day celebrations 2026
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink-muted">
                    The 80th Independence Day on campus—assembly, patriotic
                    programmes, and the flag.
                  </p>
                  <p className="mt-6 text-sm font-medium text-forest-700">
                    See the celebration →
                  </p>
                </div>
              </Link>
            </ScrollAnimation>
          )}

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full px-5 py-2 text-sm transition-colors ${
                  active === category
                    ? 'bg-forest-800 text-cream-50'
                    : 'border border-forest-100 text-ink-muted hover:border-forest-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((image, index) => (
              <ScrollAnimation key={`${image.src}-${active}`} animation="fadeUp" delay={index * 0.04}>
                <figure className="group relative aspect-[4/5] overflow-hidden bg-forest-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-cream-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-serif text-lg">{image.alt}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-gold-300">{image.category}</p>
                  </figcaption>
                </figure>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Moving pictures</p>
            <h2 className="mt-4 font-serif text-display-sm">A walk through, and a night to remember.</h2>
            <div className="gold-rule mx-auto mt-6 mb-12" />
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: 'Campus morning', note: 'A quiet tour of rooms and lawns' },
                { title: 'Annual day', note: 'Music, theatre, and proud families' },
              ].map((video) => (
                <div
                  key={video.title}
                  className="flex aspect-video items-center justify-center bg-forest-900 text-cream-100"
                >
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold-300/50 text-gold-300">
                      <Icon name="play" className="h-5 w-5 ml-0.5" />
                    </div>
                    <p className="font-serif text-2xl">{video.title}</p>
                    <p className="mt-1 text-sm text-cream-200/70">{video.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
