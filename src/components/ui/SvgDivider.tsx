import { motion } from 'framer-motion'

export function SvgDivider({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 40"
      className={`mx-auto h-8 w-full max-w-md text-champagne/50 ${className}`}
      initial={{ opacity: 0, pathLength: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      aria-hidden
    >
      <motion.path
        d="M0 20 Q100 0 200 20 T400 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
      <circle cx="200" cy="20" r="3" fill="currentColor" opacity="0.7" />
    </motion.svg>
  )
}
