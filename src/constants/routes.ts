export const ROUTES = {
  intro: '/',
  messages: '/messages',
  qualities: '/qualities',
  story: '/story',
  surprise: '/surprise',
  finale: '/finale',
  secret: '/secret',
} as const

export const JOURNEY_ORDER = [
  ROUTES.intro,
  ROUTES.messages,
  ROUTES.qualities,
  ROUTES.story,
  ROUTES.surprise,
  ROUTES.finale,
] as const
