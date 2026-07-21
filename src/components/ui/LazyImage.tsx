import { useEffect, useState } from 'react'
import { cn, placeholderGradient } from '@/utils/helpers'

type Props = {
  src: string
  alt: string
  className?: string
  seed?: string
}

export function LazyImage({ src, alt, className, seed = alt }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const hasSrc = Boolean(src)

  useEffect(() => {
    setLoaded(false)
    setError(false)
  }, [src])

  return (
    <div className={cn('relative overflow-hidden bg-slate-deep', className)}>
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-700',
          loaded && hasSrc && !error ? 'opacity-0' : 'opacity-100',
        )}
        style={{ background: placeholderGradient(seed) }}
      />
      {!loaded && hasSrc && (
        <div className="absolute inset-0 animate-pulse bg-white/5 backdrop-blur-md" />
      )}
      {hasSrc && !error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            'h-full w-full object-cover transition-all duration-700',
            loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md',
          )}
        />
      ) : (
        <div className="flex h-full min-h-[160px] w-full items-center justify-center p-6 text-center">
          <p className="font-display text-lg italic text-pearl/40">Add your photo</p>
        </div>
      )}
    </div>
  )
}
