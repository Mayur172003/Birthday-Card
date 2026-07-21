import { useMemo } from 'react'
import { motion } from 'framer-motion'

type Particle = { id: number; x: number; y: number; size: number; duration: number; delay: number }

export function FloatingParticles({ count = 28 }: { count?: number }) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 5,
        duration: 10 + Math.random() * 14,
        delay: Math.random() * 6,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              iColor(p.id) === 0
                ? 'rgb(232 213 181 / 0.35)'
                : iColor(p.id) === 1
                  ? 'rgb(201 160 138 / 0.3)'
                  : 'rgb(212 165 165 / 0.28)',
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 20, -10, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function iColor(id: number) {
  return id % 3
}
