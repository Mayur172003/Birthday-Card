import { motion, AnimatePresence } from 'framer-motion'
import { useEffects } from '@/context/EffectsContext'

export function HeartBursts() {
  const { hearts } = useEffects()

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]" aria-hidden>
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.span
            key={h.id}
            className="absolute text-lg text-blush"
            initial={{ opacity: 1, scale: 0.4, x: h.x, y: h.y }}
            animate={{
              opacity: 0,
              scale: 1.4,
              y: h.y - 120 - Math.random() * 40,
              x: h.x + (Math.random() - 0.5) * 80,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            style={{ left: 0, top: 0 }}
          >
            ♥
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
