import Hero from '@/components/sections/Hero'
import SplitSection from '@/components/sections/SplitSection'
import Cards from '@/components/sections/Cards'
import CTA from '@/components/sections/CTA'

export default function Admissions() {
  const steps = [
    {
      title: '1. Inquiry & Application',
      description:
        'Submit an online inquiry form or visit our campus. Complete the application form with required documents.',
      icon: '📝',
    },
    {
      title: '2. Assessment & Interview',
      description:
        'Students participate in age-appropriate assessments. Parents meet with the admissions team.',
      icon: '📋',
    },
    {
      title: '3. Review & Decision',
      description:
        'Our admissions committee reviews each application holistically and makes admission decisions.',
      icon: '✅',
    },
    {
      title: '4. Enrollment',
      description:
        'Accepted students complete enrollment forms, submit fees, and prepare for orientation.',
      icon: '🎓',
    },
  ]

  const requirements = [
    {
      title: 'Application Form',
      description: 'Completed application form with all required information.',
      icon: '📄',
    },
    {
      title: 'Academic Records',
      description: 'Previous school transcripts and report cards (if applicable).',
      icon: '📊',
    },
    {
      title: 'Birth Certificate',
      description: 'Copy of birth certificate or valid identification document.',
      icon: '🆔',
    },
    {
      title: 'Health Records',
      description: 'Medical records and immunization certificates.',
      icon: '🏥',
    },
  ]

  return (
    <main>
      <Hero
        title="Admissions"
        subtitle="Begin Your Journey"
        description="Join a community dedicated to excellence and holistic development"
        ctaText="Apply Now"
        ctaLink="#apply"
        backgroundImage="/images/admissions-hero.png"
      />

      <section id="requirements" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Admission Requirements
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We welcome students from diverse backgrounds who are eager to learn
              and grow. Our admissions process is designed to understand each
              student's potential and ensure they will thrive in our learning
              environment.
            </p>
          </div>
          <Cards cards={requirements} columns={4} />
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Admission Process
          </h2>
          <Cards cards={steps} columns={2} />
        </div>
      </section>

      <SplitSection
        image="/images/campus-tour.png"
        imagePosition="left"
        title="Schedule a Campus Tour"
        content="We encourage prospective families to visit our campus and experience our learning environment firsthand. During your visit, you'll tour our facilities, meet with faculty members, and learn more about our programs. Our admissions team is available to answer all your questions and help you understand what makes Sri Akshara School special."
        ctaText="Book a Tour"
        ctaLink="/contact"
      />

      <section id="fees" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Tuition & Fees
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in making quality education accessible. Our fee
                structure is transparent and includes tuition, technology fees,
                and access to all school facilities. Financial aid and
                scholarships are available for eligible students.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                For detailed information about tuition fees, payment plans, and
                financial assistance options, please contact our admissions
                office. We're here to help make education affordable for your
                family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors text-center"
                >
                  Request Fee Information
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-transparent border-2 border-primary-600 text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors text-center"
                >
                  Apply for Financial Aid
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 lg:py-32 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Start your application today and take the first step toward an
              exceptional educational experience.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <p className="mb-6">
                Our online application portal makes it easy to submit your
                application and track its status.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Application
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Questions About Admissions?"
        description="Our admissions team is here to help. Contact us for personalized assistance."
        primaryCtaText="Contact Us"
        primaryCtaLink="/contact"
        secondaryCtaText="Download Brochure"
        secondaryCtaLink="/contact"
      />
    </main>
  )
}

