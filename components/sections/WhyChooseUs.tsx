'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  {
    title: 'Academic Excellence',
    description:
      'Rigorous curriculum designed to challenge and inspire students to reach their full potential.',
    icon: '🎓',
  },
  {
    title: 'Holistic Development',
    description:
      'Focus on intellectual, emotional, physical, and social growth of every student.',
    icon: '🌟',
  },
  {
    title: 'Experienced Faculty',
    description:
      'Dedicated teachers with years of experience and passion for education.',
    icon: '👨‍🏫',
  },
  {
    title: 'Modern Facilities',
    description:
      'State-of-the-art infrastructure supporting innovative learning experiences.',
    icon: '🏫',
  },
  {
    title: 'Global Perspective',
    description:
      'International programs and partnerships preparing students for a globalized world.',
    icon: '🌍',
  },
  {
    title: 'Strong Community',
    description:
      'A supportive network of students, parents, and educators working together.',
    icon: '🤝',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!sectionRef.current || !stickyRef.current || !contentRef.current) return

    const section = sectionRef.current
    const sticky = stickyRef.current
    const content = contentRef.current

    const triggers: ScrollTrigger[] = []

    // Sticky pin animation
    const stickyTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=300%',
      pin: sticky,
      scrub: 1,
    })
    triggers.push(stickyTrigger)

    // Card animations
    const cards = content.querySelectorAll('.feature-card')
    cards.forEach((card) => {
      const cardTrigger = ScrollTrigger.create({
        trigger: card as Element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
        animation: gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
          }
        ),
      })
      triggers.push(cardTrigger)
    })

    return () => {
      triggers.forEach((trigger) => {
        if (trigger) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Sticky Title Section */}
          <div ref={stickyRef} className="lg:sticky lg:top-24 h-fit">
            <ScrollAnimation animation="fadeUp">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Why Choose
                <br />
                <span className="text-primary-600">Sri Akshara?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to providing an exceptional educational
                experience that prepares students for success in an ever-changing
                world.
              </p>
            </ScrollAnimation>
          </div>

          {/* Scrollable Content */}
          <div ref={contentRef} className="space-y-8">
            {features.map((feature, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeUp"
                delay={index * 0.1}
                className="feature-card"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

