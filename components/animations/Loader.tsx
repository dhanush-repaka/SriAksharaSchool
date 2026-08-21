'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-cream-100"
        >
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold-400 text-forest-800">
              <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" aria-hidden>
                <path
                  d="M20 7c.4 4.2 2.4 7.4 6.2 9.6C22.4 18.8 20.4 22 20 26.2 19.6 22 17.6 18.8 13.8 16.6 17.6 14.4 19.6 11.2 20 7Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </div>
            <p className="font-serif text-2xl text-ink">Sri Akshara</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-gold-600">School</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
