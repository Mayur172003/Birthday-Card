import { useMemo } from 'react'
import { motion } from 'framer-motion'

export function FloatingBalloons({ count = 6 }: { count?: number }) {
  const travel = typeof window !== 'undefined' ? window.innerHeight + 160 : 1000
  const balloons = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: 8 + (i / count) * 84 + Math.random() * 4,
        delay: i * 0.8,
        color: ['#c9a08a', '#d4a5a5', '#e8d5b5', '#8b5a6b', '#3d6b6b', '#a68b5b'][i % 6],
        duration: 16 + Math.random() * 8,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.left}%`, bottom: '-12%' }}
          animate={{
            y: [0, -travel],
            x: [0, 30, -20, 10],
            rotate: [-6, 6, -4],
          }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div
            className="h-14 w-10 rounded-full shadow-lg md:h-16 md:w-12"
            style={{
              background: `radial-gradient(circle at 30% 30%, #fff8, ${b.color})`,
            }}
          />
          <div className="mx-auto h-10 w-px bg-pearl/30" />
        </motion.div>
      ))}
    </div>
  )
}
