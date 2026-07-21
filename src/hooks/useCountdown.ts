import { useEffect, useState } from 'react'
import { formatCountdown } from '@/utils/helpers'

export function useCountdown(targetIso: string) {
  const [remaining, setRemaining] = useState(() => {
    const target = new Date(targetIso).getTime()
    return Math.max(0, target - Date.now())
  })

  useEffect(() => {
    const target = new Date(targetIso).getTime()
    const tick = () => setRemaining(Math.max(0, target - Date.now()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetIso])

  const parts = formatCountdown(remaining)
  return { ...parts, remaining, isComplete: remaining <= 0 }
}
