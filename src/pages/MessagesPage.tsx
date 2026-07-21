import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageShell } from '@/components/layout/PageShell'
import { TextReveal } from '@/components/ui/TextReveal'
import { Typewriter } from '@/components/ui/Typewriter'
import { letterContent, messages } from '@/constants/content'
import { ROUTES } from '@/constants/routes'
import { letterUnfold } from '@/animations/variants'
import { MusicToggle } from '@/components/ui/MusicToggle'

export default function MessagesPage() {
  const [started, setStarted] = useState(false)
  const [paraIndex, setParaIndex] = useState(0)

  return (
    <PageShell route={ROUTES.messages}>
      <div className="mx-auto max-w-3xl px-6 pb-8">
        <header className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-champagne/55 uppercase">
            Happy · sorry · yours
          </p>
          <TextReveal className="font-display text-5xl text-pearl md:text-7xl" as="h1">
            A Letter For You
          </TextReveal>
          <p className="mx-auto mt-4 max-w-md text-sm text-pearl/50">
            Part celebration, part tease, part apology — written so your heart feels held.
          </p>
          <div className="mt-6 flex justify-center">
            <MusicToggle />
          </div>
        </header>

        <div className="perspective-[1400px]">
          <motion.article
            className="letter-paper relative mx-auto overflow-hidden rounded-sm px-8 py-12 text-ink md:px-14 md:py-16"
            variants={letterUnfold}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ transformStyle: 'preserve-3d' }}
            onAnimationComplete={() => setStarted(true)}
          >
            <svg
              className="pointer-events-none absolute top-6 right-8 h-16 w-24 text-rose-gold/40"
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
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>

            <p className="font-display text-2xl italic text-ink/80 md:text-3xl">
              {letterContent.greeting}
            </p>

            <div className="mt-8 space-y-5 font-display text-lg leading-relaxed text-ink/85 md:text-xl">
              {letterContent.paragraphs.map((p, i) => {
                if (i > paraIndex) return null
                return (
                  <p key={i}>
                    {i < paraIndex ? (
                      p
                    ) : (
                      <Typewriter
                        text={p}
                        start={started}
                        speed={18}
                        onComplete={() =>
                          setParaIndex((v) => Math.min(v + 1, letterContent.paragraphs.length))
                        }
                      />
                    )}
                  </p>
                )
              })}
            </div>

            <div className="mt-10">
              <p className="font-display text-xl italic text-ink/70">{letterContent.closing}</p>
              <p className="mt-2 font-display text-2xl text-ink">{letterContent.signature}</p>
            </div>
          </motion.article>
        </div>

        <div className="mt-16 space-y-4">
          {messages.map((m, i) => (
            <motion.blockquote
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
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
