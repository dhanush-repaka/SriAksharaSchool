'use client'

import Button from '@/components/ui/Button'
import LaunchButton from '@/components/ui/LaunchButton'
import Photo from '@/components/ui/Photo'
import { images } from '@/lib/images'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-8 lg:pb-20 lg:pt-12">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6 xl:col-span-6">
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
            <LaunchButton />
            <Button href="/admissions" variant="primary">
              Start an application
            </Button>
            <Button href="/contact" variant="secondary">
              Schedule a campus visit
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-forest-100 pt-8">
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

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <Photo
              src={images.heroCampus}
              alt="Sri Akshara School campus buildings and lawns"
              className="aspect-[4/5] shadow-soft sm:aspect-[5/6] lg:aspect-[4/5]"
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
