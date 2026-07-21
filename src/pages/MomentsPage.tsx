import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { PageShell } from '@/components/layout/PageShell'
import { TextReveal } from '@/components/ui/TextReveal'
import { SvgDivider } from '@/components/ui/SvgDivider'
import { TiltCard } from '@/components/ui/TiltCard'
import { LazyImage } from '@/components/ui/LazyImage'
import { moments } from '@/constants/content'
import { ROUTES } from '@/constants/routes'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function MomentsPage() {
  return (
    <PageShell route={ROUTES.moments}>
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <header className="mb-14 text-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-champagne/55 uppercase">Keepsakes</p>
          <TextReveal className="font-display text-5xl text-pearl md:text-7xl" as="h1">
            Special Moments
          </TextReveal>
          <SvgDivider className="mt-8" />
        </header>

        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{ rotate: 35, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          className="!pb-14"
        >
          {moments.map((m, i) => (
            <SwiperSlide key={m.id} className="!w-[280px] sm:!w-[340px] md:!w-[400px]">
              <TiltCard>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass overflow-hidden rounded-3xl"
                >
                  <LazyImage src={m.image} alt={m.title} seed={m.id} className="aspect-[4/5] w-full" />
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-pearl">{m.title}</h3>
                    <p className="mt-2 text-sm text-pearl/60">{m.description}</p>
                  </div>
                </motion.article>
              </TiltCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PageShell>
  )
}
