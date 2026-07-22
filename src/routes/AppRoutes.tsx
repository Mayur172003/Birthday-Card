import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ROUTES } from '@/constants/routes'

const IntroPage = lazy(() => import('@/pages/IntroPage'))
const StoryPage = lazy(() => import('@/pages/StoryPage'))
const QualitiesPage = lazy(() => import('@/pages/QualitiesPage'))
const MessagesPage = lazy(() => import('@/pages/MessagesPage'))
const SurprisePage = lazy(() => import('@/pages/SurprisePage'))
const FinalePage = lazy(() => import('@/pages/FinalePage'))
const SecretPage = lazy(() => import('@/pages/SecretPage'))

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-midnight">
      <div className="h-8 w-8 animate-pulse rounded-full bg-champagne/40 shadow-[0_0_30px_rgb(232_213_181_/0.5)]" />
    </div>
  )
}

export function AppRoutes() {
  const location = useLocation()

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.intro} element={<IntroPage />} />
          <Route path={ROUTES.messages} element={<MessagesPage />} />
          <Route path={ROUTES.story} element={<StoryPage />} />
          <Route path={ROUTES.qualities} element={<QualitiesPage />} />
          <Route path={ROUTES.surprise} element={<SurprisePage />} />
          <Route path={ROUTES.finale} element={<FinalePage />} />
          <Route path={ROUTES.secret} element={<SecretPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}
