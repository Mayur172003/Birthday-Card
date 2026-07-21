import { useMemo } from 'react'
import { motion } from 'framer-motion'

export function FloatingButterflies({ count = 5 }: { count?: number }) {
  const bugs = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        startX: Math.random() * 80,
        startY: 20 + Math.random() * 60,
        delay: Math.random() * 4,
        duration: 12 + Math.random() * 10,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bugs.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.startX}%`, top: `${b.startY}%` }}
          animate={{
            x: [0, 80, 40, 120, 0],
            y: [0, -40, 20, -60, 0],
            rotate: [0, 15, -10, 5, 0],
          }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ButterflySvg />
        </motion.div>
      ))}
    </div>
  )
}

function ButterflySvg() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="opacity-70">
      <ellipse cx="8" cy="10" rx="7" ry="5" fill="#c9a08a" opacity="0.75">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1 1;0.6 1;1 1"
          dur="0.35s"
          repeatCount="indefinite"
          additive="sum"
        />
      </ellipse>
      <ellipse cx="20" cy="10" rx="7" ry="5" fill="#d4a5a5" opacity="0.75">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1 1;0.6 1;1 1"
          dur="0.35s"
          repeatCount="indefinite"
          additive="sum"
        />
      </ellipse>
      <circle cx="14" cy="11" r="1.5" fill="#e8d5b5" />
    </svg>
  )
}
