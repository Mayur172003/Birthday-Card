import { AnimatePresence, motion } from 'framer-motion'
import { secretMessage } from '@/constants/content'
import { useEffects } from '@/context/EffectsContext'

export function HiddenMessageModal() {
  const { hiddenMessageOpen, setHiddenMessageOpen } = useEffects()

  return (
    <AnimatePresence>
      {hiddenMessageOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/80 px-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setHiddenMessageOpen(false)}
          role="dialog"
          aria-modal
          aria-label="Hidden message"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="glass max-w-lg rounded-3xl p-8 text-center md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-2 text-xs tracking-[0.3em] text-champagne/60 uppercase">Hidden note</p>
            <p className="font-display text-2xl leading-relaxed text-pearl md:text-3xl">
              {secretMessage}
            </p>
            <button
              type="button"
              className="mt-8 text-sm tracking-wider text-champagne/70 uppercase"
              onClick={() => setHiddenMessageOpen(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
