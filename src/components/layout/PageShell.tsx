import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { pageTransition } from '@/animations/variants'
import { AuroraBackground } from '@/components/effects/AuroraBackground'
import { StarField } from '@/components/effects/StarField'
import { FloatingParticles } from '@/components/effects/FloatingParticles'
import { JourneyNav } from '@/components/layout/JourneyNav'
import { cn } from '@/utils/helpers'

type Props = {
  children: ReactNode
  route: string
  className?: string
  showNav?: boolean
  denseStars?: boolean
}

export function PageShell({
  children,
  route,
  className,
  showNav = true,
  denseStars = false,
}: Props) {
  return (
    <motion.main
      className={cn('page-shell relative overflow-hidden', className)}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AuroraBackground />
      <StarField count={denseStars ? 100 : 60} />
      <FloatingParticles count={20} />
      <div className="relative z-10 pt-20">{children}</div>
      {showNav && <div className="relative z-10"><JourneyNav current={route} /></div>}
    </motion.main>
  )
}
