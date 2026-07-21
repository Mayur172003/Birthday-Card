import { AnimatePresence, motion } from 'framer-motion'
import { useEffects } from '@/context/EffectsContext'

export function FireworkBursts() {
  const { fireworks } = useEffects()

  return (
    <div className="pointer-events-none fixed inset-0 z-[85]" aria-hidden>
      <AnimatePresence>
        {fireworks.map((fw) => (
          <span key={fw.id} className="absolute" style={{ left: fw.x, top: fw.y }}>
            {Array.from({ length: 18 }).map((_, i) => {
              const angle = (i / 18) * Math.PI * 2
              const dist = 60 + Math.random() * 50
              const colors = ['#e8d5b5', '#c9a08a', '#d4a5a5', '#f0ebe3', '#a68b5b']
              return (
                <motion.span
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full"
                  style={{ background: colors[i % colors.length] }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    opacity: 0,
                    scale: 0.3,
                  }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                />
              )
            })}
          </span>
        ))}
      </AnimatePresence>
    </div>
  )
}
