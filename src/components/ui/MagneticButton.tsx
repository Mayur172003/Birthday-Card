import { useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useMagnetic } from '@/hooks/useMagnetic'
import { useAudio } from '@/context/AudioContext'
import { cn } from '@/utils/helpers'

type Props = {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'glass'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  'aria-label'?: string
}

export function MagneticButton({
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}: Props) {
  const magRef = useMagnetic(0.32)
  const rippleRef = useRef<HTMLSpanElement>(null)
  const { play } = useAudio()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    play('click')
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const ripple = rippleRef.current
    if (ripple) {
      const size = Math.max(rect.width, rect.height) * 2
      ripple.style.width = `${size}px`
      ripple.style.height = `${size}px`
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`
      ripple.animate(
        [
          { transform: 'scale(0)', opacity: 0.45 },
          { transform: 'scale(1)', opacity: 0 },
        ],
        { duration: 600, easing: 'ease-out' },
      )
    }
    onClick?.()
  }

  const styles =
    variant === 'primary'
      ? 'bg-champagne/90 text-midnight hover:bg-champagne-light shadow-[0_0_40px_rgb(232_213_181_/0.25)]'
      : variant === 'glass'
        ? 'glass text-pearl hover:bg-white/10'
        : 'border border-champagne/30 text-champagne hover:bg-champagne/10'

  return (
    <motion.button
      ref={(node) => {
        magRef.current = node
      }}
      type={type}
      aria-label={ariaLabel}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300',
        styles,
        className,
      )}
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
      <span
        ref={rippleRef}
        className="pointer-events-none absolute rounded-full bg-white/40"
        style={{ transform: 'scale(0)' }}
      />
    </motion.button>
  )
}
