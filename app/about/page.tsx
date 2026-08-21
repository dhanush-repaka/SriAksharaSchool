import type { Metadata } from 'next'
import SplitSection from '@/components/sections/SplitSection'
import Cards from '@/components/sections/Cards'
import CTA from '@/components/sections/CTA'
import PageHeader from '@/components/sections/PageHeader'
import SectionHeading from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import type { IconName } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Sri Akshara School has educated children with warmth and academic seriousness since 1999. Meet our mission, values, and leadership.',
}

const values: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Excellence',
    description: 'High standards, patiently taught. We ask children to do their best work, and we show them how.',
    icon: 'spark',
  },
  {
    title: 'Integrity',
    description: 'Honesty in the classroom, the corridor, and the report. Trust is the first thing we owe a parent.',
    icon: 'shield',
  },
  {
    title: 'Wonder',
    description: 'New ideas are welcome. We want children who still look up, and teachers who still look forward.',
    icon: 'sun',
  },
  {
    title: 'Belonging',
    description: 'A school is a village. Students, parents, and teachers share the same work: raising good people.',
    icon: 'users',
  },
]

export default function About() {
  return (
    <main>
      <PageHeader
        eyebrow="About the school"
        title="A quiet kind of ambition."
        description="Sri Akshara has spent more than two decades proving that warmth and academic seriousness are not opposites. They are the point."
        image={images.campus}
        imageAlt="The Sri Akshara campus"
      />

      <SplitSection
        image={images.history}
        imagePosition="left"
        eyebrow="Since 1999"
        title="We began with a handful of classrooms and a clear idea."
        content="Founded in 1999, Sri Akshara School set out to offer an education that combined academic depth with the formation of character. We have grown, but we have not outgrown the habit of knowing each child. Families stay because the school still feels personal—and because the work in the classroom is real."
        caption="The first buildings still sit at the heart of campus."
      />

      <section id="mission" className="bg-cream-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we are for"
            title="Mission & vision"
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="border border-forest-100 bg-cream-100 p-8 lg:p-10">
              <p className="eyebrow">Mission</p>
              <h3 className="mt-3 font-serif text-3xl">To educate with mind and manner.</h3>
              <p className="mt-4 leading-relaxed text-ink-muted">
                We give children a transformative education: academic excellence,
                clear thinking, and the moral habits of people who can be trusted
                with a community.
              </p>
            </article>
            <article className="bg-forest-900 p-8 text-cream-100 lg:p-10">
              <p className="eyebrow text-gold-300">Vision</p>
              <h3 className="mt-3 font-serif text-3xl text-cream-50">
                Thinkers who are also neighbours.
              </h3>
              <p className="mt-4 leading-relaxed text-cream-200/75">
                To be known as a school that raises inventive minds, kind leaders,
                and lifelong learners who leave a place better than they found it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container-page pt-8">
          <SectionHeading
            eyebrow="How we behave"
            title="The values children meet every day."
          />
        </div>
        <Cards cards={values} columns={4} />
      </section>

      <SplitSection
        image={images.leadership}
        imagePosition="right"
        eyebrow="Leadership"
        title="Guided by people who still love classrooms."
        content="Our leadership team brings decades of teaching, pastoral care, and school-building. Principals, heads of department, and coordinators work as one so that no child is lost between good intentions. We improve slowly, on purpose."
        ctaText="Meet the people who lead"
        ctaLink="/about#leadership"
      />

      <section id="leadership" className="sr-only" aria-hidden />

      <CTA
        title="Come and sit with us."
        description="A conversation, a tour, a morning in a classroom—this is how families decide. We will make time."
        primaryCtaText="Schedule a visit"
        primaryCtaLink="/contact"
        secondaryCtaText="View admissions"
        secondaryCtaLink="/admissions"
      />
    </main>
  )
}
