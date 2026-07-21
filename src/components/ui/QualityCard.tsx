import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Quality } from '@/constants/content'
import { cn } from '@/utils/helpers'

export function QualityCard({ quality, index }: { quality: Quality; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      className="perspective-[1200px] h-56"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setFlipped((v) => !v)
      }}
      aria-label={`${quality.title} quality card`}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(
            'absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br p-6 backface-hidden',
            quality.gradient,
          )}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgb(232_213_181_/0.15)]" />
          <p className="font-display text-3xl text-pearl md:text-4xl">{quality.title}</p>
          <p className="mt-3 text-xs tracking-[0.2em] text-pearl/50 uppercase">Hover to reveal</p>
        </div>
        <div
          className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-champagne/25 bg-ink/90 p-6 backdrop-blur-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="font-display text-2xl text-champagne">{quality.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-pearl/75">{quality.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
