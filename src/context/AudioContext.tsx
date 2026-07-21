import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { SITE } from '@/constants/content'
import { playSound } from '@/utils/audio'

type AudioContextValue = {
  musicEnabled: boolean
  sfxEnabled: boolean
  toggleMusic: () => void
  toggleSfx: () => void
  play: (name: 'click' | 'transition' | 'confetti' | 'gift' | 'whoosh') => void
}

const AudioCtx = createContext<AudioContextValue | null>(null)

export function AudioProvider({ children }: { children: ReactNode }) {
  const [musicEnabled, setMusicEnabled] = useState(false)
  const [sfxEnabled, setSfxEnabled] = useState(true)
  const [audioEl, setAudioEl] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!SITE.musicUrl) return
    const el = new Audio(SITE.musicUrl)
    el.loop = true
    el.volume = 0.35
    setAudioEl(el)
    return () => {
      el.pause()
      el.src = ''
    }
  }, [])

  useEffect(() => {
    if (!audioEl) return
    if (musicEnabled) {
      void audioEl.play().catch(() => setMusicEnabled(false))
    } else {
      audioEl.pause()
    }
  }, [musicEnabled, audioEl])

  const toggleMusic = useCallback(() => {
    if (!SITE.musicUrl) {
      // Soft ambient drone when no music file is provided
      setMusicEnabled((v) => !v)
      return
    }
    setMusicEnabled((v) => !v)
  }, [])

  const toggleSfx = useCallback(() => setSfxEnabled((v) => !v), [])

  const play = useCallback(
    (name: 'click' | 'transition' | 'confetti' | 'gift' | 'whoosh') => {
      playSound(name, sfxEnabled)
    },
    [sfxEnabled],
  )

  const value = useMemo(
    () => ({ musicEnabled, sfxEnabled, toggleMusic, toggleSfx, play }),
    [musicEnabled, sfxEnabled, toggleMusic, toggleSfx, play],
  )

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>
}

export function useAudio() {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error('useAudio must be used within AudioProvider')
  return ctx
}
