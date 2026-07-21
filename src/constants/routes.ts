export const ROUTES = {
  intro: '/',
  story: '/story',
  qualities: '/qualities',
  messages: '/messages',
  timeline: '/timeline',
  moments: '/moments',
  surprise: '/surprise',
  finale: '/finale',
  secret: '/secret',
} as const

export const JOURNEY_ORDER = [
  ROUTES.intro,
  ROUTES.story,
  ROUTES.qualities,
  ROUTES.messages,
  ROUTES.timeline,
  ROUTES.moments,
  ROUTES.surprise,
  ROUTES.finale,
] as const
