import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Helper function to integrate Lenis with GSAP ScrollTrigger
export function lenisScrollTo(target: string | number) {
  if (typeof window !== 'undefined' && (window as any).lenis) {
    ;(window as any).lenis.scrollTo(target)
  }
}

// Common animation presets
export const animations = {
  fadeUp: {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
  },
  slideLeft: {
    from: { opacity: 0, x: -60 },
    to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
  },
  slideRight: {
    from: { opacity: 0, x: 60 },
    to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.8, ease: 'power2.out' },
  },
}

export default gsap

