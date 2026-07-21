import { ROUTES } from '@/constants/routes'

export function getNextRoute(current: string): string | null {
  const order = [
    ROUTES.intro,
    ROUTES.story,
    ROUTES.qualities,
    ROUTES.messages,
    ROUTES.timeline,
    ROUTES.moments,
    ROUTES.surprise,
    ROUTES.finale,
  ]
  const idx = order.indexOf(current as (typeof order)[number])
  if (idx === -1 || idx === order.length - 1) return null
  return order[idx + 1]
}

export function getPrevRoute(current: string): string | null {
  const order = [
    ROUTES.intro,
    ROUTES.story,
    ROUTES.qualities,
    ROUTES.messages,
    ROUTES.timeline,
    ROUTES.moments,
    ROUTES.surprise,
    ROUTES.finale,
  ]
  const idx = order.indexOf(current as (typeof order)[number])
  if (idx <= 0) return null
  return order[idx - 1]
}
