import Hero from '@/components/sections/Hero'
import SplitSection from '@/components/sections/SplitSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TestimonialSlider from '@/components/sections/TestimonialSlider'
import CTA from '@/components/sections/CTA'
import StatsSection from '@/components/sections/StatsSection'

export default function Home() {
  return (
    <main>
      <Hero
        title="Welcome to Sri Akshara School"
        subtitle="Nurturing Excellence, Shaping Futures"
        description="Where academic rigor meets holistic development, creating leaders of tomorrow."
        ctaText="Explore Our Programs"
        ctaLink="/academics"
        backgroundImage="/images/hero-school.png"
      />
      
      <SplitSection
        image="/images/about-school.png"
        imagePosition="left"
        title="About Sri Akshara"
        content="Founded with a vision to provide world-class education, Sri Akshara School has been at the forefront of academic excellence for over two decades. We believe in nurturing each child's unique potential through innovative teaching methods and a supportive learning environment."
        ctaText="Learn More"
        ctaLink="/about"
      />

      <WhyChooseUs />

      <StatsSection />

      <SplitSection
        image="/images/facilities.png"
        imagePosition="right"
        title="State-of-the-Art Facilities"
        content="Our campus features modern classrooms, science laboratories, computer labs, libraries, sports facilities, and creative arts spaces. Every facility is designed to enhance the learning experience and support our students' growth."
        ctaText="View Facilities"
        ctaLink="/facilities"
      />

      <TestimonialSlider />

      <CTA
        title="Ready to Begin Your Journey?"
        description="Join the Sri Akshara School family and discover a world of opportunities."
        primaryCtaText="Apply Now"
        primaryCtaLink="/admissions"
        secondaryCtaText="Schedule a Visit"
        secondaryCtaLink="/contact"
      />
    </main>
  )
}

