import { PageShell } from '@/components/layout/PageShell'
import { TextReveal } from '@/components/ui/TextReveal'
import { SvgDivider } from '@/components/ui/SvgDivider'
import { MasonryGallery } from '@/components/gallery/MasonryGallery'
import { gallery } from '@/constants/content'
import { ROUTES } from '@/constants/routes'

export default function GalleryPage() {
  return (
    <PageShell route={ROUTES.gallery}>
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <header className="mb-14 text-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-champagne/55 uppercase">Memories</p>
          <TextReveal className="font-display text-5xl text-pearl md:text-7xl" as="h1">
            Photo Gallery
          </TextReveal>
          <p className="mx-auto mt-4 max-w-md text-pearl/55">
            Moments frozen in light — replace the image paths in{' '}
            <code className="text-champagne/80">constants/content.ts</code>.
          </p>
          <SvgDivider className="mt-8" />
        </header>
        <MasonryGallery items={gallery} />
      </div>
    </PageShell>
  )
}
