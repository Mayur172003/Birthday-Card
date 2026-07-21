import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function CustomCursor() {
  const { x, y } = useMousePosition(400, 35)
  const isFine = useMediaQuery('(pointer: fine)')
  const [trail, setTrail] = useState<{ id: number; x: number; y: number }[]>([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isFine) return
    document.body.classList.add('custom-cursor-active')
    return () => document.body.classList.remove('custom-cursor-active')
  }, [isFine])

  useEffect(() => {
    if (!isFine) return
    let last = 0
    const unsubX = x.on('change', (vx) => {
      const vy = y.get()
      const now = Date.now()
      if (now - last < 40) return
      last = now
      setVisible(true)
      const spark = { id: now + Math.random(), x: vx, y: vy }
      setTrail((prev) => [...prev.slice(-12), spark])
      window.setTimeout(() => {
        setTrail((prev) => prev.filter((p) => p.id !== spark.id))
      }, 500)
    })
    return () => unsubX()
  }, [x, y, isFine])

  if (!isFine) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      {trail.map((t) => (
        <span
          key={t.id}
          className="absolute h-1 w-1 rounded-full bg-champagne/70"
          style={{
            left: t.x,
            top: t.y,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 8px rgb(232 213 181 / 0.8)',
          }}
        />
      ))}
      <motion.div
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne"
        style={{
          left: x,
          top: y,
          opacity: visible ? 1 : 0,
          boxShadow: '0 0 20px 4px rgb(232 213 181 / 0.55)',
        }}
      />
      <motion.div
        className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/40"
        style={{ left: x, top: y, opacity: visible ? 1 : 0 }}
      />
    </div>
  )
}
