import type { Metadata } from 'next'
import SplitSection from '@/components/sections/SplitSection'
import Cards from '@/components/sections/Cards'
import CTA from '@/components/sections/CTA'
import PageHeader from '@/components/sections/PageHeader'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { images } from '@/lib/images'
import type { IconName } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Apply to Sri Akshara School. A clear four-step process, campus tours, and a team that answers families within a school day.',
}

const steps: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Enquire',
    description:
      'Write to us or walk in. Tell us your child’s age and what you hope for. We will reply within a school day.',
    icon: 'mail',
  },
  {
    title: 'Visit & meet',
    description:
      'Tour the campus, sit with admissions, and—where helpful—let your child spend a little time in a class.',
    icon: 'home',
  },
  {
    title: 'Assess with care',
    description:
      'Age-appropriate tasks and a conversation. We look for potential and fit, not a performance for its own sake.',
    icon: 'clipboard',
  },
  {
    title: 'Enrol',
    description:
      'If we can serve your child well, we will say so plainly. Paperwork, fees, and a warm orientation follow.',
    icon: 'check',
  },
]

const requirements: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Application',
    description: 'A completed form with the details we need to know your child.',
    icon: 'clipboard',
  },
  {
    title: 'School records',
    description: 'Recent reports or transcripts, where a previous school exists.',
    icon: 'book',
  },
  {
    title: 'Identity',
    description: 'A birth certificate or equivalent document.',
    icon: 'users',
  },
  {
    title: 'Health notes',
    description: 'Immunisation records and anything our nurse should know.',
    icon: 'heart',
  },
]

export default function Admissions() {
  return (
    <main>
      <PageHeader
        eyebrow="Admissions"
        title="Begin gently. We will take it from there."
        description="We look for children who are ready to learn and families who wish to walk with us. The process is clear, personal, and never a maze."
        image={images.campusTour}
        imageAlt="Families visiting campus"
      />

      <section id="requirements" className="py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What to bring"
            title="A simple, complete file."
            description="We welcome children from many kinds of homes. The paperwork exists so we can care for your child properly—not to test your patience."
            align="center"
          />
        </div>
        <Cards cards={requirements} columns={4} className="pt-10" />
      </section>

      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="The path"
            title="Four steps, each with a person at the other end."
          />
        </div>
        <Cards cards={steps} columns={4} numbered className="pt-10 bg-cream-50" />
      </section>

      <SplitSection
        image={images.garden}
        imagePosition="left"
        eyebrow="Visit first"
        title="The campus will tell you more than this page."
        content="Walk the lawns, look into a laboratory, hear a classroom. You will meet teachers, not a sales script. Come with the questions you would ask a neighbour who already sends a child here—we will answer them."
        ctaText="Book a morning tour"
        ctaLink="/contact"
      />

      <section id="fees" className="py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl border border-forest-100 bg-cream-50 p-8 md:p-12">
            <p className="eyebrow">Tuition</p>
            <h2 className="mt-3 font-serif text-display-sm">Clear fees. Real help where it is needed.</h2>
            <div className="gold-rule mt-5 mb-6" />
            <p className="text-lg leading-relaxed text-ink-muted">
              Tuition covers teaching, technology, and the run of the campus. We
              publish figures on request so there are no surprises. Payment plans,
              and scholarships for families who qualify, are part of how we keep
              the school a community rather than a club.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Write to admissions and we will send a current schedule, explain
              what is included, and talk through aid without embarrassment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">
                Request fee information
              </Button>
              <Button href="/contact" variant="secondary">
                Ask about financial aid
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="bg-forest-800 py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-300">When you are ready</p>
            <h2 className="mt-4 font-serif text-display-sm text-cream-50">
              Start an application
            </h2>
            <p className="mt-5 text-lg text-cream-200/80">
              A short form begins a conversation. You will always know where
              things stand, and who to call if you do not.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="gold">
                Begin the application
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Questions are welcome."
        description="Admissions is a small team with time for families. Call, write, or come by the office."
        primaryCtaText="Contact admissions"
        primaryCtaLink="/contact"
        secondaryCtaText="Download a brochure"
        secondaryCtaLink="/contact"
      />
    </main>
  )
}
