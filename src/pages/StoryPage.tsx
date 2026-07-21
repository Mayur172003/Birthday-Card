import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PageShell } from '@/components/layout/PageShell'
import { TextReveal } from '@/components/ui/TextReveal'
import { SvgDivider } from '@/components/ui/SvgDivider'
import { LazyImage } from '@/components/ui/LazyImage'
import { storySections } from '@/constants/content'
import { ROUTES } from '@/constants/routes'
import { gsap } from '@/animations/gsap'
import { cn } from '@/utils/helpers'

export default function StoryPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.story-block').forEach((el, i) => {
        gsap.from(el.querySelector('.story-copy'), {
          opacity: 0,
          y: 50,
          filter: 'blur(8px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        })
        gsap.from(el.querySelector('.story-media'), {
          opacity: 0,
          x: i % 2 === 0 ? 60 : -60,
          scale: 0.95,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 70%' },
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <PageShell route={ROUTES.story}>
      <div ref={containerRef} className="mx-auto max-w-6xl px-6 pb-8">
        <header className="mb-20 text-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-champagne/55 uppercase">
            Laughter · apologies · forever
          </p>
          <TextReveal className="font-display text-5xl text-pearl md:text-7xl" as="h1">
            Our Story
          </TextReveal>
          <p className="mx-auto mt-4 max-w-lg text-pearl/55">
            The happy parts, the teasing parts, and the honest sorry — all of it is ours.
          </p>
          <SvgDivider className="mt-8" />
        </header>

        <div className="space-y-28 md:space-y-36">
          {storySections.map((section, index) => (
            <StoryBlock key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>
    </PageShell>
  )
}

function StoryBlock({
  section,
  index,
}: {
  section: (typeof storySections)[number]
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  const reverse = section.alignment === 'right'

  return (
    <section ref={ref} className="story-block relative">
      <div
        className={cn(
          'absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br opacity-40 blur-2xl',
          section.accent,
        )}
      />
      <div
        className={cn(
          'grid items-center gap-10 md:grid-cols-2 md:gap-16',
          reverse && 'md:[&>*:first-child]:order-2',
        )}
      >
        <div className="story-copy">
          <p className="mb-2 text-xs tracking-[0.3em] text-champagne/50 uppercase">
            {String(index + 1).padStart(2, '0')} · {section.subtitle}
          </p>
          <h2 className="font-display text-4xl text-pearl md:text-5xl">{section.title}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-pearl/70 md:text-lg">
            {section.body}
          </p>
        </div>
        <motion.div className="story-media" style={{ y }}>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <LazyImage
              src={section.image}
              alt={section.title}
              seed={section.id}
              className="aspect-[4/5] w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
