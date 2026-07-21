import { useEffect, useMemo, useState } from 'react'
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

type FloatCard = {
  id: string
  image: string
  caption: string
  top: string
  left: string
  size: string
  rotate: number
  opacity: number
  delay: number
  duration: number
  driftX: number
  driftY: number
}

/** Finale floating photos: memory-05 … memory-15 (11 images in that range) */
const FINALE_PHOTOS = gallery.filter((g) => {
  const n = Number(g.image.match(/memory-(\d+)/)?.[1] ?? 0)
  return n >= 6 && n <= 15
})

function buildFloatingCards(isMobile: boolean): FloatCard[] {
  const photos = FINALE_PHOTOS

  // Edge-biased random slots so text in the center stays readable
  const slots = isMobile
    ? [
        { top: '2%', left: '3%' },
        { top: '4%', left: '74%' },
        { top: '20%', left: '1%' },
        { top: '24%', left: '80%' },
        { top: '42%', left: '2%' },
        { top: '46%', left: '78%' },
        { top: '64%', left: '4%' },
        { top: '68%', left: '74%' },
        { top: '84%', left: '8%' },
        { top: '86%', left: '70%' },
        { top: '12%', left: '44%' },
      ]
    : [
        { top: '5%', left: '3%' },
        { top: '8%', left: '84%' },
        { top: '22%', left: '1%' },
        { top: '26%', left: '90%' },
        { top: '40%', left: '4%' },
        { top: '44%', left: '86%' },
        { top: '58%', left: '2%' },
        { top: '62%', left: '88%' },
        { top: '76%', left: '8%' },
        { top: '80%', left: '80%' },
        { top: '14%', left: '46%' },
      ]

  return photos.map((g, i) => {
    const slot = slots[i % slots.length]
    const jitterTop = (Math.random() - 0.5) * (isMobile ? 4 : 6)
    const jitterLeft = (Math.random() - 0.5) * (isMobile ? 4 : 5)
    return {
      id: g.id,
      image: g.image,
      caption: g.caption,
      top: `calc(${slot.top} + ${jitterTop}%)`,
      left: `calc(${slot.left} + ${jitterLeft}%)`,
      size: isMobile
        ? i % 2 === 0
          ? 'h-[4.75rem] w-[3.5rem]'
          : 'h-[5.25rem] w-16'
        : i % 3 === 0
          ? 'h-32 w-28'
          : 'h-28 w-24',
      rotate: (i % 2 === 0 ? -1 : 1) * (4 + Math.random() * 8),
      opacity: isMobile ? 0.72 + Math.random() * 0.18 : 0.82 + Math.random() * 0.14,
      delay: i * 0.1 + Math.random() * 0.15,
      duration: 5.5 + Math.random() * 3.5,
      driftX: (Math.random() - 0.5) * (isMobile ? 18 : 28),
      driftY: (Math.random() - 0.5) * (isMobile ? 22 : 34),
    }
  })
}

export default function FinalePage() {
  const [phase, setPhase] = useState(0)
  const { spawnFireworks } = useEffects()
  const { play } = useAudio()

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 639px)').matches : true,
  )

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 639px)')
    const onChange = () => setIsMobile(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const cards = useMemo(() => buildFloatingCards(isMobile), [isMobile])

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

      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-8 text-center sm:px-6">
        {phase >= 2 && (
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className={`absolute overflow-hidden rounded-lg border border-white/20 shadow-xl ${card.size}`}
                style={{
                  top: card.top,
                  left: card.left,
                  background: placeholderGradient(card.id),
                }}
                initial={{ opacity: 0, scale: 0.55, rotate: card.rotate - 12 }}
                animate={{
                  opacity: card.opacity,
                  scale: 1,
                  rotate: [card.rotate, card.rotate + 3, card.rotate - 2, card.rotate],
                  x: [0, card.driftX, -card.driftX * 0.6, 0],
                  y: [0, card.driftY, -card.driftY * 0.5, 0],
                }}
                transition={{
                  opacity: { delay: card.delay, duration: 0.7 },
                  scale: { delay: card.delay, duration: 0.7 },
                  rotate: {
                    delay: card.delay,
                    duration: card.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  x: {
                    delay: card.delay,
                    duration: card.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  y: {
                    delay: card.delay,
                    duration: card.duration * 1.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                {card.image && (
                  <img src={card.image} alt="" className="h-full w-full object-cover" />
                )}
              </motion.div>
            ))}
          </div>
        )}

        <div className="relative z-10 w-full max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(16px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl text-balance text-pearl sm:text-7xl md:text-8xl lg:text-9xl"
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
              className="mx-auto mt-6 max-w-2xl font-display text-xl text-champagne sm:mt-8 sm:text-2xl md:text-3xl"
            >
              {finaleLines.deserve}
            </motion.p>
          )}

          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-pearl/70 sm:mt-16 sm:text-base md:text-lg"
            >
              <p>{finaleLines.thankYou}</p>
              <p className="mt-4 font-display text-lg text-champagne/90 sm:text-xl">
                {finaleLines.tease}
              </p>
              <span className="mt-6 block font-display text-lg text-champagne sm:text-xl">
                — {SITE.yourName}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </PageShell>
  )
}
