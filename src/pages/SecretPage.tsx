import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { ROUTES } from '@/constants/routes'
import { SITE, secretMessage } from '@/constants/content'
import { pageTransition } from '@/animations/variants'

export default function SecretPage() {
  return (
    <PageShell route={ROUTES.secret} showNav={false}>
      <motion.div
        className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center"
        variants={pageTransition}
        initial="initial"
        animate="animate"
      >
        <p className="mb-4 text-xs tracking-[0.4em] text-champagne/50 uppercase">Konami unlocked</p>
        <h1 className="font-display text-4xl text-pearl md:text-6xl">The Secret Garden</h1>
        <p className="mt-8 font-display text-xl leading-relaxed text-pearl/75 md:text-2xl">
          Of course you found this — you’re nosy in the cutest way. Between us:{' '}
          {SITE.yourName} is endlessly lucky to know you… and a little sorry for every storm that
          ever had your name on it because of me.
        </p>
        <p className="mt-6 text-pearl/60">{secretMessage}</p>
        <p className="mt-4 text-sm text-champagne/70">
          Now go be happy. That’s non-negotiable birthday law.
        </p>
        <Link
          to={ROUTES.finale}
          className="mt-12 rounded-full border border-champagne/40 px-8 py-3 text-sm tracking-wider text-champagne uppercase"
        >
          Return to Finale
        </Link>
      </motion.div>
    </PageShell>
  )
}
