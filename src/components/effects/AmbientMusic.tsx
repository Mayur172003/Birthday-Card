import { useEffect, useRef } from 'react'
import { useAudio } from '@/context/AudioContext'
import { SITE } from '@/constants/content'

/**
 * Soft ambient pad when no musicUrl is configured.
 * Replace SITE.musicUrl with a real mp3 for custom tracks.
 */
export function AmbientMusic() {
  const { musicEnabled } = useAudio()
  const nodes = useRef<{ ctx: AudioContext; gain: GainNode; oscs: OscillatorNode[] } | null>(null)

  useEffect(() => {
    if (SITE.musicUrl) return

    if (!musicEnabled) {
      if (nodes.current) {
        nodes.current.gain.gain.exponentialRampToValueAtTime(0.0001, nodes.current.ctx.currentTime + 0.4)
        window.setTimeout(() => {
          nodes.current?.oscs.forEach((o) => {
            try {
              o.stop()
            } catch {
              /* already stopped */
            }
          })
          void nodes.current?.ctx.close()
          nodes.current = null
        }, 500)
      }
      return
    }

    const ctx = new AudioContext()
    const gain = ctx.createGain()
    gain.gain.value = 0.0001
    gain.connect(ctx.destination)
    gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.5)

    const freqs = [110, 164.81, 220]
    const oscs = freqs.map((f, i) => {
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      osc.type = i === 0 ? 'sine' : 'triangle'
      osc.frequency.value = f
      g.gain.value = 0.3 - i * 0.08
      osc.connect(g)
      g.connect(gain)
      osc.start()
      return osc
    })

    nodes.current = { ctx, gain, oscs }

    return () => {
      oscs.forEach((o) => {
        try {
          o.stop()
        } catch {
          /* noop */
        }
      })
      void ctx.close()
      nodes.current = null
    }
  }, [musicEnabled])

  return null
}
