import { useMemo } from 'react'
import { motion } from 'framer-motion'

type Piece = { id: number; x: number; color: string; delay: number; rot: number }

export function Confetti({ active, count = 80 }: { active: boolean; count?: number }) {
  const height = typeof window !== 'undefined' ? window.innerHeight + 40 : 900
  const pieces = useMemo<Piece[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: ['#e8d5b5', '#c9a08a', '#d4a5a5', '#f0ebe3', '#a68b5b', '#8b5a6b'][i % 6],
        delay: Math.random() * 0.8,
        rot: Math.random() * 360,
      })),
    [count],
  )

  if (!active) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-0 h-2 w-3 rounded-sm"
          style={{ left: `${p.x}%`, background: p.color }}
          initial={{ y: -20, opacity: 1, rotate: p.rot }}
          animate={{
            y: height,
            opacity: [1, 1, 0],
            rotate: p.rot + 720,
            x: [0, 40, -30],
          }}
          transition={{ duration: 2.8 + Math.random(), delay: p.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  )
}
