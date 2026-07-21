import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { floatingWishes, motivationalQuotes } from '@/constants/content'

export function EasterEggToasts() {
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    const show = () => {
      const pool = [...motivationalQuotes, ...floatingWishes]
      setToast(pool[Math.floor(Math.random() * pool.length)])
      window.setTimeout(() => setToast(null), 4200)
    }
    const first = window.setTimeout(show, 12000)
    const id = window.setInterval(show, 28000)
    return () => {
      clearTimeout(first)
      clearInterval(id)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed bottom-24 left-1/2 z-[70] -translate-x-1/2 px-4">
      <AnimatePresence>
        {toast && (
          <motion.p
            key={toast}
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
            className="glass rounded-full px-5 py-2.5 text-center text-sm font-light tracking-wide text-champagne-light"
          >
            {toast}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
