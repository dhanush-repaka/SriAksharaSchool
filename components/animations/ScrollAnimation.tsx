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
  duration = 0.8,
  className = '',
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof window === 'undefined') return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const fromVars: gsap.TweenVars =
      animation === 'slideLeft'
        ? { opacity: 0.001, x: -40 }
        : animation === 'slideRight'
          ? { opacity: 0.001, x: 40 }
          : animation === 'fadeIn'
            ? { opacity: 0.001 }
            : animation === 'parallax'
              ? { yPercent: 8 }
              : { opacity: 0.001, y: 36 }

    const tween = gsap.from(element, {
      ...fromVars,
      duration,
      delay,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: element,
        start: 'top 92%',
        once: true,
      },
    })

    const fallback = window.setTimeout(() => {
      gsap.set(element, { clearProps: 'all' })
    }, 2500)

    return () => {
      window.clearTimeout(fallback)
      tween.scrollTrigger?.kill()
      tween.kill()
      gsap.set(element, { clearProps: 'all' })
    }
  }, [animation, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
