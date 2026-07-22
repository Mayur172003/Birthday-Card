import { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AuroraBackground } from '@/components/effects/AuroraBackground'
import { StarField } from '@/components/effects/StarField'
import { FloatingParticles } from '@/components/effects/FloatingParticles'
import { FloatingButterflies } from '@/components/effects/FloatingButterflies'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { MusicToggle } from '@/components/ui/MusicToggle'
import { SITE } from '@/constants/content'
import { ROUTES } from '@/constants/routes'
import { useAudio } from '@/context/AudioContext'
import { pageTransition } from '@/animations/variants'

const Scene3D = lazy(() =>
  import('@/components/effects/Scene3D').then((m) => ({ default: m.Scene3D })),
)

export default function IntroPage() {
  const navigate = useNavigate()
  const { play } = useAudio()

  return (
    <motion.section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AuroraBackground />
      <StarField count={110} />
      <FloatingParticles count={36} />
      <FloatingButterflies count={4} />
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <div className="absolute top-6 right-6 z-20">
        <MusicToggle />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 text-xs tracking-[0.4em] text-champagne/60 uppercase"
        >
          For you — happiness, teasing & truth
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl leading-tight text-balance text-pearl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {SITE.tagline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14"
        >
          <MagneticButton
            className="animate-pulse-glow px-10 py-4 text-base"
            onClick={() => {
              play('whoosh')
              navigate(ROUTES.messages)
            }}
          >
            Begin the Journey
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-10 text-xs tracking-wide text-pearl/35"
        >
          Double-click for hearts · Space for fireworks · Press H for a secret
        </motion.p>
      </div>
    </motion.section>
  )
}
