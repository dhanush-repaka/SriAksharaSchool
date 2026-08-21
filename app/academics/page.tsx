import type { Metadata } from 'next'
import SplitSection from '@/components/sections/SplitSection'
import Cards from '@/components/sections/Cards'
import CTA from '@/components/sections/CTA'
import PageHeader from '@/components/sections/PageHeader'
import SectionHeading from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import type { IconName } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'From early years through senior school, Sri Akshara offers a humane, rigorous curriculum and teachers who know each child.',
}

const programs: {
  title: string
  description: string
  image: string
  link: string
  icon: IconName
}[] = [
  {
    title: 'Early Years',
    description:
      'Ages 3–6. Play-based days, social grace, and the first sure steps into literacy and number.',
    image: images.earlyYears,
    link: '/academics#early-years',
    icon: 'sun',
  },
  {
    title: 'Primary School',
    description:
      'Grades 1–5. A balanced day of core subjects, arts, and outdoor play, with teachers who still sit on the carpet.',
    image: images.primary,
    link: '/academics#primary',
    icon: 'book',
  },
  {
    title: 'Middle School',
    description:
      'Grades 6–8. Harder questions, more independence, and adults who stay close while children try on bigger ideas.',
    image: images.middle,
    link: '/academics#middle',
    icon: 'flask',
  },
  {
    title: 'Senior School',
    description:
      'Grades 9–12. University-preparatory study, honest counselling, and the space to become a particular person.',
    image: images.highSchool,
    link: '/academics#high-school',
    icon: 'graduation',
  },
]

const subjects: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'STEM',
    description: 'Laboratories, coding, and mathematics taught as crafts—not as hurries toward a mark.',
    icon: 'flask',
  },
  {
    title: 'Arts & letters',
    description: 'Literature, history, languages, music, and making. Beauty is part of a serious education.',
    icon: 'palette',
  },
  {
    title: 'Sport & wellbeing',
    description: 'Fields, courts, and the habits of a healthy body. Every child plays; some compete.',
    icon: 'trophy',
  },
  {
    title: 'Digital fluency',
    description: 'Tools used with judgement. Children learn to make with machines, not merely to consume them.',
    icon: 'compass',
  },
]

export default function Academics() {
  return (
    <main>
      <PageHeader
        eyebrow="Academics"
        title="Learning that is both demanding and humane."
        description="A curriculum with international reach and local roots—designed to stretch the mind without hurrying childhood away."
        image={images.classroom}
        imageAlt="A bright classroom at Sri Akshara"
      />

      <section id="curriculum" className="py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="The work of the day"
            title="Our curriculum"
            description="We teach for understanding. Inquiry, conversation, and practice sit together so that children can explain what they know—and remain curious about what they do not."
            align="center"
          />
        </div>
      </section>

      <div id="early-years" />
      <div id="primary" />
      <div id="middle" />
      <div id="high-school" />
      <Cards cards={programs} columns={2} className="bg-cream-50 pt-0" />

      <SplitSection
        image={images.teaching}
        imagePosition="left"
        eyebrow="How we teach"
        title="Method in the service of the child."
        content="Project work, collaboration, and quiet independent study all have a place. We differentiate because children are not identical. Regular, humane assessment helps a student see the next step—not merely the last mark."
      />

      <section id="programs" className="py-8">
        <div className="container-page pt-8">
          <SectionHeading
            eyebrow="Breadth with purpose"
            title="Academic programmes"
          />
        </div>
        <Cards cards={subjects} columns={4} />
      </section>

      <SplitSection
        image={images.faculty}
        imagePosition="right"
        eyebrow="Faculty"
        title="Teachers who chose this work."
        content="Our faculty hold advanced degrees and, more importantly, a vocation. Continuous professional learning keeps practice fresh. A low student–teacher ratio means a child is not a number on a register."
        ctaText="Ask about our faculty"
        ctaLink="/contact"
      />
      <section id="faculty" className="sr-only" aria-hidden />

      <CTA
        title="See a class in session."
        description="The best way to understand our academics is to sit at the back of a room for twenty minutes. We can arrange that."
        primaryCtaText="Apply now"
        primaryCtaLink="/admissions"
        secondaryCtaText="Write to us"
        secondaryCtaLink="/contact"
      />
    </main>
  )
}
