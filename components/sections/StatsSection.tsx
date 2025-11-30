'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { number: '25+', label: 'Years of Excellence', suffix: '' },
  { number: '5000+', label: 'Students Enrolled', suffix: '' },
  { number: '200+', label: 'Expert Faculty', suffix: '' },
  { number: '95%', label: 'Success Rate', suffix: '' },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggersRef = useRef<ScrollTrigger[]>([])
  const animationsRef = useRef<gsap.core.Tween[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return
    if (!sectionRef.current) return

    // Clear previous animations
    animationsRef.current.forEach((anim) => {
      if (anim) anim.kill()
    })
    triggersRef.current.forEach((trigger) => {
      if (trigger) trigger.kill()
    })
    triggersRef.current = []
    animationsRef.current = []

    // Wait a bit for DOM to be fully ready
    const timeoutId = setTimeout(() => {
      if (!sectionRef.current) return

      const counters = sectionRef.current.querySelectorAll('.stat-number')
      
      counters.forEach((counter) => {
        const target = counter.getAttribute('data-target')
        if (!target) return

        const numTarget = parseInt(target.replace(/[^0-9]/g, ''))
        const suffix = target.replace(/[0-9]/g, '')
        const counterElement = counter as HTMLElement
        
        if (!counterElement || isNaN(numTarget)) return

        let hasAnimated = false
        
        try {
          const trigger = ScrollTrigger.create({
            trigger: counterElement,
            start: 'top 80%',
            once: true,
            onEnter: () => {
              if (hasAnimated) return
              hasAnimated = true

              try {
                const obj = { value: 0 }
                const animation = gsap.to(obj, {
                  value: numTarget,
                  duration: 2,
                  ease: 'power2.out',
                  onUpdate: function () {
                    if (counterElement && obj.value !== undefined) {
                      counterElement.textContent = Math.floor(obj.value) + suffix
                    }
                  },
                })
                animationsRef.current.push(animation)
              } catch (error) {
                console.error('Error creating animation:', error)
              }
            },
          })
          triggersRef.current.push(trigger)
        } catch (error) {
          console.error('Error creating ScrollTrigger:', error)
        }
      })
    }, 300)

    return () => {
      clearTimeout(timeoutId)
      animationsRef.current.forEach((anim) => {
        if (anim) anim.kill()
      })
      triggersRef.current.forEach((trigger) => {
        if (trigger) trigger.kill()
      })
      triggersRef.current = []
      animationsRef.current = []
    }
  }, [isMounted])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div
                  className="stat-number text-5xl md:text-6xl lg:text-7xl font-bold text-primary-600 mb-4"
                  data-target={stat.number}
                  suppressHydrationWarning
                >
                  {isMounted ? `0${stat.suffix}` : stat.number}
                </div>
                <div className="text-lg md:text-xl text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

