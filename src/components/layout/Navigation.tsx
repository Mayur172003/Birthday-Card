import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { NAV_LINKS } from '@/constants/content'
import { useAudio } from '@/context/AudioContext'
import { cn } from '@/utils/helpers'

export function Navigation() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const { play } = useAudio()

  if (pathname === '/') return null

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            onClick={() => play('click')}
            className="font-display text-xl tracking-wide text-champagne md:text-2xl"
          >
            For You
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.filter((l) => l.path !== '/').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => play('transition')}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs tracking-wider uppercase transition',
                  pathname === link.path
                    ? 'bg-champagne/15 text-champagne'
                    : 'text-pearl/50 hover:text-pearl',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <HiBars3 className="h-5 w-5 text-champagne" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-midnight/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end p-4">
              <button
                type="button"
                aria-label="Close menu"
                className="glass flex h-10 w-10 items-center justify-center rounded-full"
                onClick={() => setOpen(false)}
              >
                <HiXMark className="h-5 w-5 text-champagne" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-4 pt-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    play('transition')
                    setOpen(false)
                  }}
                  className="font-display text-3xl text-pearl/80 transition hover:text-champagne"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
