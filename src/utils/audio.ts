/** Lightweight synthesized UI sounds via Web Audio API */

type SoundName = 'click' | 'transition' | 'confetti' | 'gift' | 'whoosh'

let ctx: AudioContext | null = null

function getCtx() {
  if (typeof window === 'undefined') return null
  if (!ctx) ctx = new AudioContext()
  return ctx
}

export function playSound(name: SoundName, enabled = true) {
  if (!enabled) return
  const audio = getCtx()
  if (!audio) return
  if (audio.state === 'suspended') void audio.resume()

  const now = audio.currentTime
  const master = audio.createGain()
  master.connect(audio.destination)
  master.gain.value = 0.12

  const tone = (freq: number, start: number, dur: number, type: OscillatorType = 'sine', vol = 1) => {
    const osc = audio.createOscillator()
    const gain = audio.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, now + start)
    gain.gain.setValueAtTime(0.0001, now + start)
    gain.gain.exponentialRampToValueAtTime(0.2 * vol, now + start + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + start + dur)
    osc.connect(gain)
    gain.connect(master)
    osc.start(now + start)
    osc.stop(now + start + dur + 0.05)
  }

  switch (name) {
    case 'click':
      tone(880, 0, 0.08, 'triangle', 0.7)
      tone(1320, 0.02, 0.06, 'sine', 0.4)
      break
    case 'transition':
      tone(220, 0, 0.25, 'sine', 0.5)
      tone(330, 0.08, 0.3, 'triangle', 0.35)
      break
    case 'confetti':
      tone(523, 0, 0.12, 'square', 0.3)
      tone(659, 0.05, 0.12, 'square', 0.25)
      tone(784, 0.1, 0.15, 'triangle', 0.3)
      tone(1046, 0.18, 0.2, 'sine', 0.35)
      break
    case 'gift':
      tone(392, 0, 0.2, 'triangle', 0.5)
      tone(523, 0.12, 0.25, 'sine', 0.45)
      tone(659, 0.28, 0.35, 'sine', 0.4)
      break
    case 'whoosh':
      tone(180, 0, 0.35, 'sawtooth', 0.15)
      break
  }
}
