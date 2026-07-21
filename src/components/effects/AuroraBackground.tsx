import { motion } from 'framer-motion'

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 aurora-bg" />
      <motion.div
        className="absolute -left-1/4 top-0 h-[70%] w-[70%] rounded-full opacity-40 blur-3xl morph-gradient"
        style={{
          background:
            'radial-gradient(circle, rgb(61 107 107 / 0.55), transparent 70%)',
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/4 h-[60%] w-[60%] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgb(139 90 107 / 0.5), transparent 70%)',
        }}
        animate={{ x: [0, -50, 20, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[50%] w-[50%] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgb(166 139 91 / 0.45), transparent 70%)',
        }}
        animate={{ x: [0, 30, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight/80" />
    </div>
  )
}
