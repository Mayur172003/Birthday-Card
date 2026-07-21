import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PageShell } from '@/components/layout/PageShell'
import { FloatingHearts } from '@/components/effects/FloatingHearts'
import { FloatingBalloons } from '@/components/effects/FloatingBalloons'
import { Confetti } from '@/components/effects/Confetti'
import { finaleLines, gallery, SITE } from '@/constants/content'
import { ROUTES } from '@/constants/routes'
import { useEffects } from '@/context/EffectsContext'
import { useAudio } from '@/context/AudioContext'
import { placeholderGradient } from '@/utils/helpers'

export default function FinalePage() {
  const [phase, setPhase] = useState(0)
  const { spawnFireworks } = useEffects()
  const { play } = useAudio()

  useEffect(() => {
    play('confetti')
    const timers = [
      window.setTimeout(() => setPhase(1), 1600),
      window.setTimeout(() => setPhase(2), 3400),
      window.setTimeout(() => setPhase(3), 5200),
    ]
    const fw = window.setInterval(() => spawnFireworks(), 900)
    return () => {
      timers.forEach(clearTimeout)
      clearInterval(fw)
    }
  }, [play, spawnFireworks])

  return (
    <PageShell route={ROUTES.finale} showNav={false} denseStars>
      <Confetti active count={60} />
      <FloatingHearts count={12} />
      <FloatingBalloons count={5} />

      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl text-balance text-pearl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          {finaleLines.headline}{' '}
          <span className="text-blush" aria-hidden>
            ♥
          </span>
        </motion.h1>

        {phase >= 1 && (
          <motion.p
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
            className="mt-8 max-w-2xl font-display text-2xl text-champagne md:text-3xl"
          >
            {finaleLines.deserve}
          </motion.p>
        )}

        {phase >= 2 && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {gallery.slice(0, 8).map((g, i) => {
              const positions = [
                { top: '12%', left: '6%' },
                { top: '18%', right: '8%' },
                { top: '55%', left: '4%' },
                { top: '60%', right: '6%' },
                { bottom: '12%', left: '18%' },
                { bottom: '10%', right: '16%' },
                { top: '35%', left: '2%' },
                { top: '40%', right: '3%' },
              ]
              const pos = positions[i % positions.length]
              return (
                <motion.div
                  key={g.id}
                  initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                  animate={{ opacity: 0.85, scale: 1, rotate: (i % 2 === 0 ? -6 : 6) }}
                  transition={{ delay: i * 0.12, duration: 0.8 }}
                  className="absolute hidden h-24 w-20 overflow-hidden rounded-lg border border-white/15 shadow-xl sm:block md:h-32 md:w-28"
                  style={{ ...pos, background: placeholderGradient(g.id) }}
                >
                  {g.image && (
                    <img src={g.image} alt="" className="h-full w-full object-cover" />
                  )}
                </motion.div>
              )
            })}
          </div>
        )}

        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="relative z-10 mt-16 max-w-xl text-base leading-relaxed text-pearl/70 md:text-lg"
          >
            <p>{finaleLines.thankYou}</p>
            <p className="mt-4 font-display text-xl text-champagne/90">{finaleLines.tease}</p>
            <span className="mt-6 block font-display text-xl text-champagne">
              — {SITE.yourName}
            </span>
          </motion.div>
        )}
      </div>
    </PageShell>
  )
}
