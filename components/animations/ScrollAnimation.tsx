'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'parallax'
  delay?: number
  duration?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  className = '',
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!ref.current) return

    const element = ref.current
    let animationConfig: gsap.core.Tween | null = null
    let scrollTrigger: ScrollTrigger | null = null

    const setupAnimation = () => {
      switch (animation) {
        case 'fadeUp':
          gsap.set(element, { opacity: 0, y: 60 })
          animationConfig = gsap.to(element, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
          scrollTrigger = animationConfig.scrollTrigger || null
          break

        case 'slideLeft':
          gsap.set(element, { opacity: 0, x: -60 })
          animationConfig = gsap.to(element, {
            opacity: 1,
            x: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
          scrollTrigger = animationConfig.scrollTrigger || null
          break

        case 'slideRight':
          gsap.set(element, { opacity: 0, x: 60 })
          animationConfig = gsap.to(element, {
            opacity: 1,
            x: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
          scrollTrigger = animationConfig.scrollTrigger || null
          break

        case 'fadeIn':
          gsap.set(element, { opacity: 0 })
          animationConfig = gsap.to(element, {
            opacity: 1,
            duration,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
          scrollTrigger = animationConfig.scrollTrigger || null
          break

        case 'parallax':
          animationConfig = gsap.to(element, {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
          scrollTrigger = animationConfig.scrollTrigger || null
          break

        default:
          break
      }
    }

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      setupAnimation()
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (scrollTrigger) {
        scrollTrigger.kill()
      }
      if (animationConfig) {
        animationConfig.kill()
      }
    }
  }, [animation, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

