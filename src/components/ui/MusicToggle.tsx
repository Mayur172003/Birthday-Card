import { HiOutlineMusicalNote, HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from 'react-icons/hi2'
import { useAudio } from '@/context/AudioContext'
import { cn } from '@/utils/helpers'

export function MusicToggle({ className }: { className?: string }) {
  const { musicEnabled, sfxEnabled, toggleMusic, toggleSfx } = useAudio()

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={musicEnabled ? 'Mute music' : 'Play music'}
        className="glass flex h-10 w-10 items-center justify-center rounded-full text-champagne transition hover:bg-white/10"
      >
        {musicEnabled ? (
          <HiOutlineMusicalNote className="h-5 w-5" />
        ) : (
          <HiOutlineSpeakerXMark className="h-5 w-5 opacity-60" />
        )}
      </button>
      <button
        type="button"
        onClick={toggleSfx}
        aria-label={sfxEnabled ? 'Mute sounds' : 'Enable sounds'}
        className="glass flex h-10 w-10 items-center justify-center rounded-full text-champagne/80 transition hover:bg-white/10"
      >
        {sfxEnabled ? (
          <HiOutlineSpeakerWave className="h-5 w-5" />
        ) : (
          <HiOutlineSpeakerXMark className="h-5 w-5 opacity-50" />
        )}
      </button>
    </div>
  )
}
