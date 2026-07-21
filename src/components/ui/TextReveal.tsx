import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'

type Props = {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
}

export function TextReveal({ children, className, as: Tag = 'h2', delay = 0 }: Props) {
  return (
    <Tag className={cn('overflow-hidden', className)}>
      <motion.span
        className="block"
        initial={{ y: '110%', opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </Tag>
  )
}
