import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { HiChevronLeft, HiChevronRight, HiXMark } from 'react-icons/hi2'
import type { GalleryItem } from '@/constants/content'
import { LazyImage } from '@/components/ui/LazyImage'

type Props = {
  item: GalleryItem | null
  items: GalleryItem[]
  onClose: () => void
  onNavigate: (item: GalleryItem) => void
}

export function Lightbox({ item, items, onClose, onNavigate }: Props) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, items])

  const go = (dir: number) => {
    if (!item) return
    const idx = items.findIndex((i) => i.id === item.id)
    const next = items[(idx + dir + items.length) % items.length]
    onNavigate(next)
  }

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-midnight/92 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal
          aria-label="Image viewer"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-5 right-5 glass flex h-11 w-11 items-center justify-center rounded-full"
            onClick={onClose}
          >
            <HiXMark className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Previous"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 glass flex h-11 w-11 items-center justify-center rounded-full md:left-8"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
          >
            <HiChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 glass flex h-11 w-11 items-center justify-center rounded-full md:right-8"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
          >
            <HiChevronRight className="h-5 w-5" />
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <LazyImage
              src={item.image}
              alt={item.caption}
              seed={item.id}
              className="max-h-[75vh] w-full"
            />
            <div className="glass absolute inset-x-0 bottom-0 p-5">
              <p className="font-display text-2xl text-pearl">{item.caption}</p>
              <p className="mt-1 text-sm text-champagne/70">
                {item.date}
                {item.location ? ` · ${item.location}` : ''}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
