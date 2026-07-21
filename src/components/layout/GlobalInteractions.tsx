import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import { useKonami } from '@/hooks/useKonami'
import { useEffects } from '@/context/EffectsContext'
import { useAudio } from '@/context/AudioContext'
import { ROUTES } from '@/constants/routes'

export function GlobalInteractions() {
  const navigate = useNavigate()
  const { spawnHearts, spawnFireworks, unlockSecret, setHiddenMessageOpen } = useEffects()
  const { play } = useAudio()

  const onKonami = useCallback(() => {
    unlockSecret()
    play('confetti')
    navigate(ROUTES.secret)
  }, [unlockSecret, play, navigate])

  useKonami(onKonami)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      if (e.key === 'h' || e.key === 'H') {
        setHiddenMessageOpen(true)
      }
      if (e.code === 'Space') {
        e.preventDefault()
        spawnFireworks()
        play('confetti')
      }
    }

    const onDblClick = (e: MouseEvent) => {
      spawnHearts(e.clientX, e.clientY, 8)
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('dblclick', onDblClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('dblclick', onDblClick)
    }
  }, [spawnHearts, spawnFireworks, setHiddenMessageOpen, play])

  return null
}
