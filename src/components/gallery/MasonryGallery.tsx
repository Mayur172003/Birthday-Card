import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryCategories, type GalleryItem } from '@/constants/content'
import { LazyImage } from '@/components/ui/LazyImage'
import { Lightbox } from '@/components/gallery/Lightbox'
import { cn } from '@/utils/helpers'

type Props = {
  items: GalleryItem[]
}

export function MasonryGallery({ items }: Props) {
  const [filter, setFilter] = useState<string>('All')
  const [active, setActive] = useState<GalleryItem | null>(null)

  const filtered =
    filter === 'All' ? items : items.filter((item) => item.category === filter)

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-xs tracking-[0.15em] uppercase transition',
              filter === cat
                ? 'bg-champagne/20 text-champagne'
                : 'text-pearl/45 hover:text-pearl/80',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              layout
              type="button"
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl text-left"
              onClick={() => setActive(item)}
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={item.caption}
                  seed={item.id}
                  className={cn(
                    'w-full transition duration-700 group-hover:scale-110',
                    i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]',
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-xl text-pearl">{item.caption}</p>
                  <p className="mt-1 text-xs tracking-wide text-champagne/70">
                    {item.date}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox
        item={active}
        items={filtered}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </div>
  )
}
