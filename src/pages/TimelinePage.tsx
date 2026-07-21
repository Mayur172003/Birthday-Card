import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineGift,
  HiOutlineMoon,
} from 'react-icons/hi2'
import { PageShell } from '@/components/layout/PageShell'
import { TextReveal } from '@/components/ui/TextReveal'
import { SvgDivider } from '@/components/ui/SvgDivider'
import { LazyImage } from '@/components/ui/LazyImage'
import { timeline, type TimelineEvent } from '@/constants/content'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/helpers'

const icons = {
  spark: HiOutlineSparkles,
  heart: HiOutlineHeart,
  star: HiOutlineStar,
  gift: HiOutlineGift,
  moon: HiOutlineMoon,
}

export default function TimelinePage() {
  const [openId, setOpenId] = useState<string | null>(timeline[0]?.id ?? null)

  return (
    <PageShell route={ROUTES.timeline}>
      <div className="mx-auto max-w-3xl px-6 pb-8">
        <header className="mb-16 text-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-champagne/55 uppercase">Through time</p>
          <TextReveal className="font-display text-5xl text-pearl md:text-7xl" as="h1">
            Friendship Timeline
          </TextReveal>
          <SvgDivider className="mt-8" />
        </header>

        <div className="relative">
          <motion.div
            className="absolute top-0 bottom-0 left-[19px] w-px origin-top bg-gradient-to-b from-champagne/60 via-rose-gold/40 to-transparent md:left-[23px]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <ul className="space-y-6">
            {timeline.map((event, i) => (
              <TimelineCard
                key={event.id}
                event={event}
                index={i}
                open={openId === event.id}
                onToggle={() => setOpenId((id) => (id === event.id ? null : event.id))}
              />
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  )
}

function TimelineCard({
  event,
  index,
  open,
  onToggle,
}: {
  event: TimelineEvent
  index: number
  open: boolean
  onToggle: () => void
}) {
  const Icon = icons[event.icon]

  return (
    <motion.li
      initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.7 }}
      className="relative pl-14 md:pl-16"
    >
      <span
        className={cn(
          'absolute top-4 left-0 flex h-10 w-10 items-center justify-center rounded-full border md:h-12 md:w-12',
          open
            ? 'border-champagne bg-champagne/20 text-champagne'
            : 'border-white/15 bg-ink text-pearl/60',
        )}
      >
        <Icon className="h-5 w-5" />
      </span>

      <button
        type="button"
        onClick={onToggle}
        className="glass w-full rounded-2xl p-5 text-left transition hover:bg-white/10 md:p-6"
        aria-expanded={open}
      >
        <p className="text-xs tracking-[0.25em] text-champagne/55 uppercase">{event.year}</p>
        <h3 className="mt-1 font-display text-2xl text-pearl md:text-3xl">{event.title}</h3>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed text-pearl/70 md:text-base">
                {event.message}
              </p>
              <div className="mt-4 overflow-hidden rounded-xl">
                <LazyImage
                  src={event.image}
                  alt={event.title}
                  seed={event.id}
                  className="aspect-video w-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.li>
  )
}
