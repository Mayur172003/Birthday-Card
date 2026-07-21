import { useMemo } from 'react'
import { motion } from 'framer-motion'

export function FloatingHearts({ count = 8 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 10,
        size: 10 + Math.random() * 14,
        travel: typeof window !== 'undefined' ? window.innerHeight + 120 : 900,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((item) => (
        <motion.span
          key={item.id}
          className="absolute text-blush/40"
          style={{ left: `${item.left}%`, bottom: '-5%', fontSize: item.size }}
          animate={{ y: [0, -item.travel], opacity: [0, 0.7, 0], rotate: [0, 20, -10] }}
          transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: 'linear' }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  )
}
