import { useEffect, useRef, useState } from 'react'
import { cn } from '@/utils/helpers'

type Props = {
  text: string
  className?: string
  speed?: number
  onComplete?: () => void
  start?: boolean
}

export function Typewriter({ text, className, speed = 28, onComplete, start = true }: Props) {
  const [shown, setShown] = useState('')
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (!start) return
    setShown('')
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setShown(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        onCompleteRef.current?.()
      }
    }, speed)
    return () => clearInterval(id)
  }, [text, speed, start])

  return (
    <span className={cn(className)}>
      {shown}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle opacity-70" />
    </span>
  )
}
