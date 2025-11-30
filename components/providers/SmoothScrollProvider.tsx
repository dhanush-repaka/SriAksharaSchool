'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  // Make lenis available globally for GSAP integration
  ;(window as any).lenis = null
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Make lenis available globally
    ;(window as any).lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Integrate with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      if (typeof window !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.update()
      }
    })

    // Update ScrollTrigger on resize
    const handleResize = () => {
      if (typeof window !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.refresh()
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      lenis.destroy()
      window.removeEventListener('resize', handleResize)
      ;(window as any).lenis = null
    }
  }, [])

  return <>{children}</>
}

