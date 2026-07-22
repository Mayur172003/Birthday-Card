import { BrowserRouter } from 'react-router-dom'
import { AudioProvider } from '@/context/AudioContext'
import { EffectsProvider } from '@/context/EffectsContext'
import { AppRoutes } from '@/routes/AppRoutes'
import { Navigation } from '@/components/layout/Navigation'
import { CustomCursor } from '@/components/effects/CustomCursor'
import { HeartBursts } from '@/components/effects/HeartBursts'
import { FireworkBursts } from '@/components/effects/FireworkBursts'
import { EasterEggToasts } from '@/components/effects/EasterEggToasts'
import { HiddenMessageModal } from '@/components/layout/HiddenMessageModal'
import { GlobalInteractions } from '@/components/layout/GlobalInteractions'
import { useLenis } from '@/hooks/useLenis'

function AppShell() {
  useLenis()

  return (
    <>
      <CustomCursor />
      <Navigation />
      <AppRoutes />
      <HeartBursts />
      <FireworkBursts />
      <EasterEggToasts />
      <HiddenMessageModal />
      <GlobalInteractions />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AudioProvider>
        <EffectsProvider>
          <AppShell />
        </EffectsProvider>
      </AudioProvider>
    </BrowserRouter>
  )
}
