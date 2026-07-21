import { PageShell } from '@/components/layout/PageShell'
import { TextReveal } from '@/components/ui/TextReveal'
import { SvgDivider } from '@/components/ui/SvgDivider'
import { QualityCard } from '@/components/ui/QualityCard'
import { qualities } from '@/constants/content'
import { ROUTES } from '@/constants/routes'

export default function QualitiesPage() {
  return (
    <PageShell route={ROUTES.qualities}>
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <header className="mb-16 text-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-champagne/55 uppercase">Portrait of you</p>
          <TextReveal className="font-display text-5xl text-pearl md:text-7xl" as="h1">
            Things That Make You Amazing
          </TextReveal>
          <SvgDivider className="mt-8" />
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((q, i) => (
            <QualityCard key={q.id} quality={q} index={i} />
          ))}
        </div>
      </div>
    </PageShell>
  )
}
