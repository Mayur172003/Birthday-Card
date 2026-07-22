export const ROUTES = {
  intro: '/',
  messages: '/messages',
  story: '/story',
  qualities: '/qualities',
  surprise: '/surprise',
  finale: '/finale',
  secret: '/secret',
} as const

export const JOURNEY_ORDER = [
  ROUTES.intro,
  ROUTES.messages,
  ROUTES.story,
  ROUTES.qualities,
  ROUTES.surprise,
  ROUTES.finale,
] as const
