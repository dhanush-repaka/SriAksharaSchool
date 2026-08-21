'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { number: '25+', label: 'Years of steady care' },
  { number: '5000+', label: 'Students who have called this home' },
  { number: '200+', label: 'Teachers and staff' },
  { number: '95%', label: 'Families who would recommend us' },
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
    if (!isMounted || !sectionRef.current) return

    animationsRef.current.forEach((anim) => anim.kill())
    triggersRef.current.forEach((trigger) => trigger.kill())
    triggersRef.current = []
    animationsRef.current = []

    const timeoutId = setTimeout(() => {
      if (!sectionRef.current) return
      const counters = sectionRef.current.querySelectorAll('.stat-number')

      counters.forEach((counter) => {
        const target = counter.getAttribute('data-target')
        if (!target) return
        const numTarget = parseInt(target.replace(/[^0-9]/g, ''), 10)
        const suffix = target.replace(/[0-9]/g, '')
        const counterElement = counter as HTMLElement
        if (!counterElement || isNaN(numTarget)) return

        let hasAnimated = false
        const trigger = ScrollTrigger.create({
          trigger: counterElement,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            if (hasAnimated) return
            hasAnimated = true
            const obj = { value: 0 }
            const animation = gsap.to(obj, {
              value: numTarget,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => {
                counterElement.textContent = Math.floor(obj.value) + suffix
              },
            })
            animationsRef.current.push(animation)
          },
        })
        triggersRef.current.push(trigger)
      })
    }, 300)

    return () => {
      clearTimeout(timeoutId)
      animationsRef.current.forEach((anim) => anim.kill())
      triggersRef.current.forEach((trigger) => trigger.kill())
    }
  }, [isMounted])

  return (
    <section ref={sectionRef} className="border-y border-forest-100 bg-forest-800 py-14 lg:py-16">
      <div className="container-page">
        <ScrollAnimation animation="fadeUp">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div
                  className="stat-number font-serif text-4xl md:text-5xl text-gold-300"
                  data-target={stat.number}
                  suppressHydrationWarning
                >
                  {isMounted ? '0' : stat.number}
                </div>
                <div className="mt-2 text-sm text-cream-200/75">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
