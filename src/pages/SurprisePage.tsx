import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Confetti } from '@/components/effects/Confetti'
import { FloatingBalloons } from '@/components/effects/FloatingBalloons'
import { FloatingHearts } from '@/components/effects/FloatingHearts'
import { VampireTeaseAnimation } from '@/components/effects/VampireTeaseAnimation'
import { SITE, surpriseCopy } from '@/constants/content'
import { ROUTES } from '@/constants/routes'
import { useCountdown } from '@/hooks/useCountdown'
import { pad2 } from '@/utils/helpers'
import { useAudio } from '@/context/AudioContext'
import { useEffects } from '@/context/EffectsContext'

export default function SurprisePage() {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(SITE.birthdayDate)
  const [opened, setOpened] = useState(false)
  const [showGift, setShowGift] = useState(false)
  const { play } = useAudio()
  const { spawnFireworks } = useEffects()
  const navigate = useNavigate()

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
          <p className="mb-3 text-xs font-bold tracking-[0.35em] text-champagne/55 uppercase">
            For my Vampire
          </p>
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
            <p className="mt-6 text-sm text-pearl/45">
              Waiting for the Vampire to show up (slowly, like an old lady)…
            </p>
            <button
              type="button"
              className="mt-6 text-xs tracking-wider text-pearl/40 underline-offset-4 hover:text-champagne hover:underline"
              onClick={() => setShowGift(true)}
            >
              Skip · Vampire got impatient
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
              <p className="mt-6 text-sm tracking-[0.2em] text-champagne uppercase">
                Tap to release the vampire
              </p>
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
              <h2 className="font-display text-3xl text-gradient md:text-5xl">
                {surpriseCopy.afterOpenTitle}
              </h2>
              <p className="mx-auto mt-2 text-sm tracking-wide text-champagne/70">
                Official titles: Vampire · Old Lady · Always right (according to her)
              </p>

              <div className="relative mt-8 min-h-[20rem]">
                <VampireTeaseAnimation />
              </div>

              <p className="mx-auto mt-8 max-w-lg font-display text-xl text-pearl/85 md:text-2xl">
                {surpriseCopy.afterOpen}
              </p>

              <ul className="mx-auto mt-8 flex max-w-lg flex-col gap-3">
                {surpriseCopy.teases.map((line, i) => (
                  <motion.li
                    key={line}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className="glass rounded-2xl px-5 py-3 text-left text-sm text-pearl/75 md:text-base"
                  >
                    {line}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12">
                <MagneticButton onClick={() => navigate(ROUTES.finale)}>
                  Okay Vampire, finale time
                </MagneticButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageShell>
  )
}
