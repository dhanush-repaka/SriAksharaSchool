'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import LaunchButton from '@/components/ui/LaunchButton'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Campus', href: '/facilities' },
  { name: 'Life', href: '/life-at-akshara' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-cream-50/95 backdrop-blur-md border-b border-forest-100 shadow-soft'
          : 'bg-cream-100/80 border-b border-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between py-3.5">
          <Logo compact />

          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const active =
                pathname === item.href || pathname?.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[13px] tracking-wide transition-colors ${
                    active
                      ? 'text-forest-700'
                      : 'text-ink-muted hover:text-forest-700'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold-400" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/admissions" variant="secondary" className="px-5 py-2.5">
              Apply
            </Button>
            <LaunchButton className="px-5 py-2.5" />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ink"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-3 rounded-lg text-base ${
                  pathname === item.href
                    ? 'bg-forest-50 text-forest-800'
                    : 'text-ink-muted hover:bg-cream-200/60'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <LaunchButton />
              <Button href="/admissions" variant="secondary">
                Apply now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
