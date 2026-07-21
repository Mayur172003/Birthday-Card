import { Link } from 'react-router-dom'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { getNextRoute, getPrevRoute } from '@/utils/navigation'
import { useAudio } from '@/context/AudioContext'

export function JourneyNav({ current }: { current: string }) {
  const next = getNextRoute(current)
  const prev = getPrevRoute(current)
  const { play } = useAudio()

  return (
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-16">
      {prev ? (
        <Link
          to={prev}
          onClick={() => play('transition')}
          className="group flex items-center gap-2 text-sm tracking-wider text-pearl/50 uppercase transition hover:text-champagne"
        >
          <HiArrowLeft className="transition group-hover:-translate-x-1" />
          Back
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={next}
          onClick={() => play('transition')}
          className="group flex items-center gap-2 text-sm tracking-wider text-champagne uppercase transition"
        >
          Continue
          <HiArrowRight className="transition group-hover:translate-x-1" />
        </Link>
      ) : (
        <span />
      )}
    </div>
  )
}
