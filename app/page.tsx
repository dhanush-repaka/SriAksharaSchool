import Hero from '@/components/sections/Hero'
import SplitSection from '@/components/sections/SplitSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TestimonialSlider from '@/components/sections/TestimonialSlider'
import CTA from '@/components/sections/CTA'
import StatsSection from '@/components/sections/StatsSection'
import ParentPromise from '@/components/sections/ParentPromise'
import Cards from '@/components/sections/Cards'
import SectionHeading from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'

const programmes = [
  {
    title: 'Early Years',
    description: 'Ages 3–6. Play with purpose, gentle structure, and the first love of letters and numbers.',
    image: images.earlyYears,
    link: '/academics#early-years',
  },
  {
    title: 'Primary',
    description: 'Grades 1–5. Curiosity is protected. Foundations in language, mathematics, and kindness are laid with care.',
    image: images.primary,
    link: '/academics#primary',
  },
  {
    title: 'Middle School',
    description: 'Grades 6–8. Independence grows. Thinking becomes more rigorous; friendship and character are still the work.',
    image: images.middle,
    link: '/academics#middle',
  },
  {
    title: 'Senior School',
    description: 'Grades 9–12. University-ready scholarship, honest counselling, and room to become a particular person.',
    image: images.highSchool,
    link: '/academics#high-school',
  },
]

export default function Home() {
  return (
    <main>
      <Hero />

      <StatsSection />

      <SplitSection
        image={images.aboutSchool}
        imagePosition="left"
        eyebrow="Our school"
        title="A campus that still feels like a neighbourhood."
        content="Founded in 1999, Sri Akshara grew from a small idea: that excellent teaching and a kind community belong together. We still believe a child should be known by name, stretched by ideas, and sent home tired in the best way."
        ctaText="Read our story"
        ctaLink="/about"
        caption="Morning light on the academic lawns."
      />

      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="A path from first steps to leaving well"
            title="Programmes that grow with your child."
          />
        </div>
        <Cards cards={programmes} columns={4} className="!py-0" />
      </section>

      <WhyChooseUs />

      <ParentPromise />

      <SplitSection
        image={images.library}
        imagePosition="right"
        eyebrow="The campus"
        title="Rooms worth lingering in."
        content="Laboratories, a generous library, studios, playing fields, and quiet corners. Every space is kept so that children can work with their hands and their minds—and so that parents feel the same calm when they walk through."
        ctaText="Walk the campus"
        ctaLink="/facilities"
        caption="The library, late afternoon."
      />

      <TestimonialSlider />

      <CTA
        title="Come and see the school for yourself."
        description="A morning on campus tells you more than a prospectus. We would be honoured to show you around, introduce you to teachers, and answer the questions that matter to your family."
        primaryCtaText="Apply now"
        primaryCtaLink="/admissions"
        secondaryCtaText="Schedule a visit"
        secondaryCtaLink="/contact"
      />
    </main>
  )
}
