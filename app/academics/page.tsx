import Hero from '@/components/sections/Hero'
import SplitSection from '@/components/sections/SplitSection'
import Cards from '@/components/sections/Cards'
import CTA from '@/components/sections/CTA'

export default function Academics() {
  const programs = [
    {
      title: 'Early Years',
      description:
        'A nurturing environment for ages 3-6, focusing on play-based learning, social skills, and foundational literacy.',
      image: '/images/early-years.png',
      link: '/academics#early-years',
      icon: '🎨',
    },
    {
      title: 'Primary School',
      description:
        'Grades 1-5 with a balanced curriculum emphasizing core subjects, arts, and physical education.',
      image: '/images/primary.png',
      link: '/academics#primary',
      icon: '📚',
    },
    {
      title: 'Middle School',
      description:
        'Grades 6-8 preparing students for higher education with advanced coursework and critical thinking.',
      image: '/images/middle-school.png',
      link: '/academics#middle',
      icon: '🔬',
    },
    {
      title: 'High School',
      description:
        'Grades 9-12 with college-preparatory programs, AP courses, and career guidance.',
      image: '/images/high-school.png',
      link: '/academics#high-school',
      icon: '🎓',
    },
  ]

  const subjects = [
    {
      title: 'STEM Programs',
      description:
        'Advanced science, technology, engineering, and mathematics courses with hands-on laboratories.',
      icon: '🔬',
    },
    {
      title: 'Arts & Humanities',
      description:
        'Comprehensive programs in literature, history, languages, and creative arts.',
      icon: '🎭',
    },
    {
      title: 'Physical Education',
      description:
        'Sports programs, fitness training, and wellness education for holistic development.',
      icon: '⚽',
    },
    {
      title: 'Technology Integration',
      description:
        'Modern computer labs, coding classes, and digital literacy programs.',
      icon: '💻',
    },
  ]

  return (
    <main>
      <Hero
        title="Academics"
        subtitle="Excellence in Learning"
        description="A comprehensive curriculum designed to inspire, challenge, and prepare students for success"
        backgroundImage="/images/academics-hero.png"
      />

      <section id="curriculum" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Curriculum
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our curriculum is designed to meet international standards while
              maintaining cultural relevance. We focus on developing critical
              thinking, creativity, and problem-solving skills through
              inquiry-based learning and hands-on experiences.
            </p>
          </div>
        </div>
      </section>

      <Cards cards={programs} columns={2} className="bg-gray-50" />

      <SplitSection
        image="/images/teaching-method.png"
        imagePosition="left"
        title="Innovative Teaching Methods"
        content="Our faculty employs a variety of teaching methodologies including project-based learning, collaborative activities, and technology-enhanced instruction. We believe in differentiated instruction that caters to diverse learning styles, ensuring every student can thrive. Regular assessments and feedback help students track their progress and set goals for improvement."
      />

      <section id="programs" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Academic Programs
          </h2>
          <Cards cards={subjects} columns={4} />
        </div>
      </section>

      <SplitSection
        image="/images/faculty.png"
        imagePosition="right"
        title="Expert Faculty"
        content="Our teachers are highly qualified professionals with advanced degrees and years of experience. They participate in continuous professional development to stay current with educational best practices. Our low student-teacher ratio ensures personalized attention and support for each student's learning journey."
        ctaText="Meet Our Faculty"
        ctaLink="/academics#faculty"
      />

      <CTA
        title="Ready to Start Your Academic Journey?"
        description="Learn more about our programs and admission process."
        primaryCtaText="Apply Now"
        primaryCtaLink="/admissions"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />
    </main>
  )
}

