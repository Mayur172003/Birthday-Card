import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type HeartBurst = { id: number; x: number; y: number }
export type FireworkBurst = { id: number; x: number; y: number }

type EffectsContextValue = {
  hearts: HeartBurst[]
  fireworks: FireworkBurst[]
  spawnHearts: (x: number, y: number, count?: number) => void
  spawnFireworks: (x?: number, y?: number) => void
  secretUnlocked: boolean
  unlockSecret: () => void
  hiddenMessageOpen: boolean
  setHiddenMessageOpen: (open: boolean) => void
}

const EffectsCtx = createContext<EffectsContextValue | null>(null)

export function EffectsProvider({ children }: { children: ReactNode }) {
  const [hearts, setHearts] = useState<HeartBurst[]>([])
  const [fireworks, setFireworks] = useState<FireworkBurst[]>([])
  const [secretUnlocked, setSecretUnlocked] = useState(false)
  const [hiddenMessageOpen, setHiddenMessageOpen] = useState(false)

  const spawnHearts = useCallback((x: number, y: number, count = 6) => {
    const batch: HeartBurst[] = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i + Math.random(),
      x: x + (Math.random() - 0.5) * 40,
      y: y + (Math.random() - 0.5) * 40,
    }))
    setHearts((prev) => [...prev, ...batch])
    window.setTimeout(() => {
      setHearts((prev) => prev.filter((h) => !batch.find((b) => b.id === h.id)))
    }, 2200)
  }, [])

  const spawnFireworks = useCallback((x?: number, y?: number) => {
    const burst: FireworkBurst = {
      id: Date.now() + Math.random(),
      x: x ?? window.innerWidth * (0.2 + Math.random() * 0.6),
      y: y ?? window.innerHeight * (0.15 + Math.random() * 0.4),
    }
    setFireworks((prev) => [...prev, burst])
    window.setTimeout(() => {
      setFireworks((prev) => prev.filter((f) => f.id !== burst.id))
    }, 1800)
  }, [])

  const unlockSecret = useCallback(() => setSecretUnlocked(true), [])

  const value = useMemo(
    () => ({
      hearts,
      fireworks,
      spawnHearts,
      spawnFireworks,
      secretUnlocked,
      unlockSecret,
      hiddenMessageOpen,
      setHiddenMessageOpen,
    }),
    [
      hearts,
      fireworks,
      spawnHearts,
      spawnFireworks,
      secretUnlocked,
      unlockSecret,
      hiddenMessageOpen,
    ],
  )

  return <EffectsCtx.Provider value={value}>{children}</EffectsCtx.Provider>
}

export function useEffects() {
  const ctx = useContext(EffectsCtx)
  if (!ctx) throw new Error('useEffects must be used within EffectsProvider')
  return ctx
}
