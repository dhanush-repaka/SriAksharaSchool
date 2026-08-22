import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/sections/PageHeader'
import CTA from '@/components/sections/CTA'
import { images } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Independence Day Celebrations 2026',
  description:
    'Sri Akshara School marked the 80th Independence Day with assembly, patriotic programmes, and the national flag.',
}

export default function IndependenceDay2026() {
  return (
    <main>
      <PageHeader
        eyebrow="15 August 2026"
        title="Independence Day celebrations 2026"
        description="The 80th Independence Day at Sri Akshara School. Students, teachers, and families gathered under the tricolour for assembly, song, and a morning of belonging."
      />

      <section className="py-12 lg:py-20">
        <div className="container-page">
          <figure className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 hidden border border-gold-400/40 sm:block" />
              <div className="relative aspect-square overflow-hidden bg-cream-50 shadow-soft">
                <Image
                  src={images.independenceDay2026}
                  alt="Sri Akshara School Independence Day Celebrations 2026 — 80th Independence Day"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            </div>
            <figcaption className="mt-6 text-center font-serif italic text-ink-soft">
              80th Independence Day celebrations · Sri Akshara School
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">The morning</p>
            <h2 className="font-serif text-display-sm">A salute, a song, and the flag.</h2>
            <div className="gold-rule mt-5 mb-8" />
            <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
              <p>
                On 15 August 2026 the campus turned saffron, white, and green.
                Children arrived in school orange and in costume—military
                dress, traditional white and gold, and the figures of the
                freedom movement. Small national flags moved through the
                courtyard like a second assembly.
              </p>
              <p>
                The stage was dressed with paper flowers, the Ashoka Chakra,
                and the school name. Teachers stood with the classes. Families
                who could come, came. The programme was simple and proud:
                salute, song, and the stories we keep so that children know
                whose shoulders they stand on.
              </p>
              <p>
                It was the 80th Independence Day. At Sri Akshara it was also
                an ordinary school virtue made visible: that a child should
                feel they belong to something larger than a timetable.
              </p>
            </div>
            <p className="mt-10">
              <Link
                href="/gallery"
                className="text-sm font-medium text-forest-700 hover:text-forest-900"
              >
                More from campus in the gallery →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Come and see the school for yourself."
        description="A morning on campus tells you more than a prospectus. We would be honoured to show you around."
        primaryCtaText="Apply now"
        primaryCtaLink="/admissions"
        secondaryCtaText="Life at Akshara"
        secondaryCtaLink="/life-at-akshara"
      />
    </main>
  )
}
