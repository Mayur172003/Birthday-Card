import { ROUTES } from '@/constants/routes'

const ORDER = [
  ROUTES.intro,
  ROUTES.messages,
  ROUTES.qualities,
  ROUTES.story,
  ROUTES.surprise,
  ROUTES.finale,
] as const

export function getNextRoute(current: string): string | null {
  const idx = ORDER.indexOf(current as (typeof ORDER)[number])
  if (idx === -1 || idx === ORDER.length - 1) return null
  return ORDER[idx + 1]
}

export function getPrevRoute(current: string): string | null {
  const idx = ORDER.indexOf(current as (typeof ORDER)[number])
  if (idx <= 0) return null
  return ORDER[idx - 1]
}
