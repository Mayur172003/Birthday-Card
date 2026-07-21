import { useMemo } from 'react'
import { motion } from 'framer-motion'

type BatConfig = {
  id: number
  left: string
  top: string
  size: number
  duration: number
  delay: number
  driftX: number
  driftY: number
  opacity: number
}

function Bat({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 40 26" fill="none" aria-hidden>
      <motion.g
        animate={{ scaleY: [1, 0.75, 1] }}
        transition={{ duration: 0.28, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '20px 13px' }}
      >
        <path
          d="M20 14 C16 14 14 12 12 10 C8 6 2 8 1 12 C4 11 7 13 10 16 C12 18 15 19 20 18 C25 19 28 18 30 16 C33 13 36 11 39 12 C38 8 32 6 28 10 C26 12 24 14 20 14 Z"
          fill="#1a1218"
        />
        <ellipse cx="20" cy="14" rx="3.2" ry="2.4" fill="#2a1a24" />
        <circle cx="18.5" cy="13.2" r="0.7" fill="#e8d5b5" />
        <circle cx="21.5" cy="13.2" r="0.7" fill="#e8d5b5" />
      </motion.g>
    </svg>
  )
}

function FloatingBats({ count = 18 }: { count?: number }) {
  const bats = useMemo<BatConfig[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${4 + Math.random() * 90}%`,
        top: `${6 + Math.random() * 80}%`,
        size: 18 + Math.random() * 28,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 3,
        driftX: (Math.random() - 0.5) * 90,
        driftY: (Math.random() - 0.5) * 70,
        opacity: 0.35 + Math.random() * 0.55,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bats.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: b.left, top: b.top, opacity: b.opacity }}
          animate={{
            x: [0, b.driftX, -b.driftX * 0.6, 0],
            y: [0, b.driftY, -b.driftY * 0.5, 0],
            rotate: [-8, 8, -4, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Bat size={b.size} />
        </motion.div>
      ))}
    </div>
  )
}

/** Playful vampire + old-lady tease animation */
export function VampireTeaseAnimation() {
  return (
    <div className="relative mx-auto flex w-full max-w-lg flex-col items-center py-4">
      <FloatingBats count={22} />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0 -z-10 rounded-full bg-blush/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <svg
          viewBox="0 0 280 320"
          className="h-64 w-64 drop-shadow-2xl sm:h-72 sm:w-72"
          role="img"
          aria-label="Animated vampire tease"
        >
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '140px 160px' }}
          >
            <path
              d="M70 150 Q40 220 55 290 L140 250 L225 290 Q240 220 210 150 Z"
              fill="#4a1c2e"
            />
            <path
              d="M90 160 Q70 230 85 275 L140 245 L195 275 Q210 230 190 160 Z"
              fill="#6b2a42"
            />
          </motion.g>

          <ellipse cx="140" cy="230" rx="48" ry="55" fill="#2a1a24" />
          <path d="M100 200 Q140 215 180 200 L175 260 Q140 275 105 260 Z" fill="#3d2433" />

          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="140" cy="78" r="22" fill="#c9b8a0" />
            <ellipse cx="140" cy="95" rx="52" ry="28" fill="#d4c4a8" />
            <path d="M88 110 Q90 70 140 68 Q190 70 192 110" fill="#e0d2ba" />
            <path d="M120 72 Q130 85 125 100" stroke="#9a8b78" strokeWidth="3" fill="none" />
            <path d="M155 70 Q160 88 162 102" stroke="#9a8b78" strokeWidth="2.5" fill="none" />

            <ellipse cx="140" cy="125" rx="42" ry="48" fill="#f2d4c8" />

            <circle cx="122" cy="120" r="14" fill="none" stroke="#e8d5b5" strokeWidth="2.5" />
            <circle cx="158" cy="120" r="14" fill="none" stroke="#e8d5b5" strokeWidth="2.5" />
            <line x1="136" y1="120" x2="144" y2="120" stroke="#e8d5b5" strokeWidth="2" />
            <line x1="108" y1="118" x2="98" y2="112" stroke="#e8d5b5" strokeWidth="2" />
            <line x1="172" y1="118" x2="182" y2="112" stroke="#e8d5b5" strokeWidth="2" />

            <motion.g
              animate={{ scaleY: [1, 0.12, 1] }}
              transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 3.2 }}
              style={{ transformOrigin: '140px 120px' }}
            >
              <ellipse cx="122" cy="120" rx="4" ry="5" fill="#1a1218" />
              <ellipse cx="158" cy="120" rx="4" ry="5" fill="#1a1218" />
              <circle cx="123.5" cy="118.5" r="1.2" fill="#fff" />
              <circle cx="159.5" cy="118.5" r="1.2" fill="#fff" />
            </motion.g>

            <path d="M112 108 Q122 104 132 108" stroke="#8a7a68" strokeWidth="2" fill="none" />
            <path d="M148 108 Q158 103 168 108" stroke="#8a7a68" strokeWidth="2" fill="none" />
            <path d="M140 125 Q144 132 140 136" stroke="#d4a59a" strokeWidth="2" fill="none" />

            <motion.g
              animate={{ scaleY: [1, 1.08, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '140px 150px' }}
            >
              <path
                d="M122 148 Q140 162 158 148"
                fill="#8b3a4a"
                stroke="#6b2a38"
                strokeWidth="1.5"
              />
              <path d="M128 150 L131 164 L134 150 Z" fill="#f7f1e8" />
              <path d="M146 150 L149 164 L152 150 Z" fill="#f7f1e8" />
            </motion.g>

            <ellipse cx="108" cy="138" rx="8" ry="5" fill="#e8a0a0" opacity="0.55" />
            <ellipse cx="172" cy="138" rx="8" ry="5" fill="#e8a0a0" opacity="0.55" />
            <path
              d="M105 142 Q112 140 118 143"
              stroke="#d4b0a4"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M162 143 Q168 140 175 142"
              stroke="#d4b0a4"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
          </motion.g>
        </svg>

        <motion.div
          className="absolute -top-2 -right-2 rounded-2xl bg-champagne/95 px-3 py-1.5 text-xs font-medium text-midnight shadow-lg sm:-right-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          Look who woke up… Vampire
        </motion.div>
        <motion.div
          className="absolute -bottom-1 -left-1 max-w-[9rem] rounded-2xl bg-blush/90 px-3 py-1.5 text-xs font-medium text-midnight shadow-lg sm:-left-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          Yes, old lady. Deal with it.
        </motion.div>
      </motion.div>
    </div>
  )
}
