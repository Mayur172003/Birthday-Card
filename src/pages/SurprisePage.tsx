import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Confetti } from '@/components/effects/Confetti'
import { FloatingBalloons } from '@/components/effects/FloatingBalloons'
import { FloatingHearts } from '@/components/effects/FloatingHearts'
import { SITE, gallery, surpriseCopy } from '@/constants/content'
import { ROUTES } from '@/constants/routes'
import { useCountdown } from '@/hooks/useCountdown'
import { pad2, placeholderGradient } from '@/utils/helpers'
import { useAudio } from '@/context/AudioContext'
import { useEffects } from '@/context/EffectsContext'

export default function SurprisePage() {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(SITE.birthdayDate)
  const [opened, setOpened] = useState(false)
  const [showGift, setShowGift] = useState(false)
  const { play } = useAudio()
  const { spawnFireworks } = useEffects()
  const navigate = useNavigate()

  // Show gift when countdown done OR user skips
  const giftReady = isComplete || showGift

  const openGift = () => {
    setOpened(true)
    play('gift')
    play('confetti')
    for (let i = 0; i < 5; i++) {
      window.setTimeout(() => spawnFireworks(), i * 280)
    }
  }

  return (
    <PageShell route={ROUTES.surprise} showNav={!opened}>
      <Confetti active={opened} count={100} />
      {opened && (
        <>
          <FloatingBalloons count={8} />
          <FloatingHearts count={10} />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-8 text-center">
        <header className="mb-12">
          <p className="mb-3 text-xs tracking-[0.35em] text-champagne/55 uppercase">The moment</p>
          <TextReveal className="font-display text-5xl text-pearl md:text-7xl" as="h1">
            Birthday Surprise
          </TextReveal>
        </header>

        {!giftReady && (
          <>
            <div className="mx-auto grid max-w-xl grid-cols-4 gap-3 md:gap-5">
              {[
                { label: 'Days', value: days },
                { label: 'Hours', value: hours },
                { label: 'Mins', value: minutes },
                { label: 'Secs', value: seconds },
              ].map((unit) => (
                <div key={unit.label} className="glass rounded-2xl px-2 py-5 md:py-7">
                  <p className="font-display text-3xl text-champagne md:text-5xl">
                    {pad2(unit.value)}
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.2em] text-pearl/45 uppercase">
                    {unit.label}
                  </p>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-10 text-xs tracking-wider text-pearl/40 underline-offset-4 hover:text-champagne hover:underline"
              onClick={() => setShowGift(true)}
            >
              Skip countdown · Open gift early
            </button>
          </>
        )}

        {giftReady && !opened && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4"
          >
            <p className="mb-8 font-display text-2xl text-pearl/80">{surpriseCopy.giftReady}</p>
            <button
              type="button"
              onClick={openGift}
              className="group mx-auto block focus:outline-none"
              aria-label="Open gift"
            >
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto h-40 w-40 md:h-48 md:w-48"
              >
                <div className="absolute inset-x-6 top-10 bottom-0 rounded-lg bg-gradient-to-br from-rose-gold to-[#6b3d3d] shadow-2xl" />
                <div className="absolute inset-x-0 top-6 h-10 rounded-md bg-gradient-to-r from-champagne via-blush to-champagne shadow-lg" />
                <div className="absolute top-6 bottom-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-b from-champagne to-rose-gold" />
                <div className="absolute top-2 left-1/2 h-8 w-12 -translate-x-1/2 rounded-full bg-champagne/80 blur-[1px] transition group-hover:scale-110" />
              </motion.div>
              <p className="mt-6 text-sm tracking-[0.2em] text-champagne uppercase">Tap to open</p>
            </button>
          </motion.div>
        )}

        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6"
            >
              <h2 className="font-display text-4xl text-gradient md:text-6xl">
                Happy Birthday, {SITE.herName}!
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pearl/70">
                {surpriseCopy.afterOpen}
              </p>

              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3">
                {gallery.slice(0, 6).map((g) => (
                  <motion.div
                    key={g.id}
                    initial={{ opacity: 0, y: 40, rotate: -6 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ delay: 0.2 + Number(g.id) * 0.05 }}
                    className="aspect-square overflow-hidden rounded-xl border border-white/10"
                    style={{ background: placeholderGradient(g.id) }}
                  >
                    {g.image ? (
                      <img src={g.image} alt={g.caption} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center p-2 text-center text-[10px] text-pearl/40">
                        {g.caption}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <MagneticButton onClick={() => navigate(ROUTES.finale)}>
                  Continue to Finale
                </MagneticButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageShell>
  )
}
