export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t
}

export function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function formatCountdown(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const days = Math.floor(total / 86400)
  const hours = Math.floor((total % 86400) / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  return { days, hours, minutes, seconds, total }
}

export function pad2(n: number) {
  return String(n).padStart(2, '0')
}

/** Soft placeholder gradient when no image is provided */
export function placeholderGradient(seed: string) {
  const hues = [200, 340, 30, 160, 280, 45]
  let hash = 0
  for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  const h1 = hues[Math.abs(hash) % hues.length]
  const h2 = hues[Math.abs(hash >> 3) % hues.length]
  return `linear-gradient(145deg, hsl(${h1} 28% 22%), hsl(${h2} 22% 12%))`
}
