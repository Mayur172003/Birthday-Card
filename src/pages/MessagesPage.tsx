import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageShell } from '@/components/layout/PageShell'
import { TextReveal } from '@/components/ui/TextReveal'
import { Typewriter } from '@/components/ui/Typewriter'
import { letterContent, messages, type LetterLine } from '@/constants/content'
import { ROUTES } from '@/constants/routes'
import { letterUnfold } from '@/animations/variants'
import { MusicToggle } from '@/components/ui/MusicToggle'
import { cn } from '@/utils/helpers'

const vibeStyles: Record<NonNullable<LetterLine['vibe']>, string> = {
  normal: 'text-ink/85',
  tease: 'text-[#6b3d2e]',
  sorry: 'text-[#4a5a4a]',
  fun: 'text-[#3d4a6b]',
}

export default function MessagesPage() {
  const [started, setStarted] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)

  return (
    <PageShell route={ROUTES.messages}>
      <div className="mx-auto max-w-3xl px-6 pb-8">
        <header className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.35em] text-champagne/55 uppercase">
            A real letter · mostly jokes
          </p>
          <TextReveal className="font-display text-5xl text-pearl md:text-7xl" as="h1">
            A Letter For You
          </TextReveal>
          <div className="mt-6 flex justify-center">
            <MusicToggle />
          </div>
        </header>

        <div className="perspective-[1400px]">
          <motion.article
            className="letter-paper relative mx-auto overflow-hidden rounded-sm px-8 py-12 text-ink shadow-2xl md:px-14 md:py-16"
            variants={letterUnfold}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ transformStyle: 'preserve-3d' }}
            onAnimationComplete={() => setStarted(true)}
          >
            {/* Soft letter decorations */}
            <motion.span
              className="pointer-events-none absolute top-6 right-7 text-2xl opacity-80"
              animate={{ y: [0, -4, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              🦇
            </motion.span>

            <svg
              className="pointer-events-none absolute top-8 right-16 h-14 w-20 text-rose-gold/35"
              viewBox="0 0 100 40"
              aria-hidden
            >
              <motion.path
                d="M5 30 C 25 5, 45 35, 65 12 S 95 28, 95 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={started ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 0.4 }}
              />
            </svg>

            <motion.p
              className="font-display text-2xl italic text-ink/80 md:text-3xl"
              initial={{ opacity: 0, y: 10 }}
              animate={started ? { opacity: 1, y: 0 } : {}}
            >
              {letterContent.greeting}
            </motion.p>

            <div className="mt-8 space-y-7">
              <AnimatePresence>
                {letterContent.lines.map((line, i) => {
                  if (i > lineIndex) return null
                  const done = i < lineIndex

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex items-start gap-3">
                        {line.emoji && (
                          <motion.span
                            className="mt-0.5 shrink-0 text-xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 16 }}
                          >
                            {line.emoji}
                          </motion.span>
                        )}
                        <p
                          className={cn(
                            'font-display text-lg leading-relaxed md:text-xl',
                            vibeStyles[line.vibe ?? 'normal'],
                          )}
                        >
                          {done ? (
                            line.text
                          ) : (
                            <Typewriter
                              text={line.text}
                              start={started}
                              speed={17}
                              onComplete={() =>
                                setLineIndex((v) =>
                                  Math.min(v + 1, letterContent.lines.length),
                                )
                              }
                            />
                          )}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {lineIndex >= letterContent.lines.length && (
              <motion.div
                className="mt-12 border-t border-ink/10 pt-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-display text-xl italic text-ink/70">
                  {letterContent.closing}
                </p>
                <p className="mt-2 font-display text-2xl text-ink">
                  {letterContent.signature}
                </p>
                <motion.p
                  className="mt-6 font-display text-base text-ink/55"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  P.S. I hate you. 💀
                </motion.p>
              </motion.div>
            )}
          </motion.article>
        </div>

        <div className="mt-16 space-y-4">
          {messages.map((m, i) => (
            <motion.blockquote
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <p className="font-display text-xl text-pearl/90">“{m.text}”</p>
              <footer className="mt-3 text-xs tracking-wider text-champagne/60 uppercase">
                — {m.from}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
