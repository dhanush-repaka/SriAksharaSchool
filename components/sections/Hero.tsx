'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Button from '@/components/ui/Button'
import Photo from '@/components/ui/Photo'
import { images } from '@/lib/images'

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-copy] > *', {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
      })
      gsap.from('[data-hero-art]', {
        opacity: 0,
        x: 30,
        duration: 1.1,
        delay: 0.2,
        ease: 'power3.out',
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="relative overflow-hidden pb-10 pt-8 lg:pb-20 lg:pt-12">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12">
        <div data-hero-copy className="lg:col-span-6 xl:col-span-6">
          <p className="eyebrow">A school for childhood, and for character</p>
          <h1 className="mt-5 font-serif text-display text-ink">
            Where children are known, challenged, and kindly held.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Sri Akshara is a warm academic community—rigorous in the classroom,
            generous on the playground, and serious about the values your child
            carries home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/admissions" variant="primary">
              Start an application
            </Button>
            <Button href="/contact" variant="secondary">
              Schedule a campus visit
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-forest-100 pt-8 max-w-lg">
            {[
              { value: '1999', label: 'Founded' },
              { value: '1 : 12', label: 'Teacher ratio' },
              { value: 'Pre-K–12', label: 'Ages served' },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-serif text-2xl text-forest-800">{item.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-soft">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-hero-art className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <Photo
              src={images.heroCampus}
              alt="Sri Akshara School campus buildings and lawns"
              className="aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] shadow-soft"
              priority
            />
            <div className="absolute -left-4 bottom-10 hidden w-44 overflow-hidden border-[6px] border-cream-100 shadow-lift sm:block lg:-left-10 lg:w-56">
              <Photo
                src={images.heroCourtyard}
                alt="A quiet courtyard on campus"
                className="aspect-[4/5]"
              />
            </div>
            <div className="absolute right-4 top-6 rounded-full bg-cream-50/95 px-5 py-3 text-center shadow-soft sm:right-8">
              <p className="font-serif text-2xl text-forest-800">25+</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                years of care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
