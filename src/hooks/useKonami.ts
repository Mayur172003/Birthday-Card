import { useCallback, useEffect, useRef } from 'react'

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonami(onUnlock: () => void) {
  const index = useRef(0)

  const reset = useCallback(() => {
    index.current = 0
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      const expected = KONAMI[index.current]
      const match =
        key === expected ||
        (expected.length === 1 && key === expected.toLowerCase())

      if (match) {
        index.current += 1
        if (index.current === KONAMI.length) {
          onUnlock()
          reset()
        }
      } else {
        index.current = key === KONAMI[0] ? 1 : 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onUnlock, reset])
}
