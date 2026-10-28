import { useEffect, useRef, useState } from 'react'
import { showreel, type Video } from '../../data/communication'
import { focusRing } from '../Button'
import { H3, Body2, Micro1 } from '../Typography'
import { PlayerModal } from './VideoCard'
import { Placeholder, PlayGlyph, claimPlayback, useReducedMotion } from './media'

/** The showreel as a Video, so the full-size player modal can be reused. */
const reelVideo: Video = {
  id: 'showreel',
  titre: showreel.titre,
  ecole: showreel.duree,
  plateforme: '',
  format: '9:16',
  roles: [],
  resultat: '',
  src: showreel.src,
  poster: showreel.poster,
  url: '',
}

/**
 * First card of the /communication grid: same size as the project cards,
 * purple gradient so it stands apart. Muted loop inside the card (pause
 * button for WCAG 2.2.2); click opens the 9:16 reel full size with sound.
 */
export default function Showreel() {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(!reducedMotion)
  const [open, setOpen] = useState(false)
  const { src, poster } = showreel

  useEffect(() => {
    setPlaying(!reducedMotion)
  }, [reducedMotion])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (playing && !open) {
      claimPlayback(el)
      el.play().catch(() => setPlaying(false))
    } else el.pause()
  }, [playing, open, src])

  return (
    <div className="group relative flex flex-col gap-4 rounded-3xl border-[1.5px] border-purple-pale/60 bg-gradient-to-br from-purple-mid/55 via-purple-deep/40 to-purple-dark/60 p-3 shadow-glass-card transition-all duration-300 hover:-translate-y-1 hover:border-purple-pale/90">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Regarder le ${showreel.titre} avec le son`}
        className={`relative h-[220px] w-full cursor-pointer overflow-hidden rounded-2xl bg-black-soft ${focusRing}`}
      >
        {src ? (
          <video
            ref={ref}
            src={src}
            poster={poster || undefined}
            muted
            loop
            playsInline
            preload="metadata"
            autoPlay={!reducedMotion}
            aria-hidden
            tabIndex={-1}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Placeholder label={showreel.titre} format="9:16" className="absolute inset-0" />
        )}
        <span className="pointer-events-none absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <PlayGlyph className="ml-0.5 size-5" />
        </span>
      </button>

      {src && (
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Mettre l'aperçu en pause" : "Relancer l'aperçu"}
          className={`absolute right-5 top-5 flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 ${focusRing}`}
        >
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            {playing ? (
              <>
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </>
            ) : (
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
            )}
          </svg>
        </button>
      )}

      <div className="flex flex-col items-start gap-2 px-3 pb-3">
        <H3>{showreel.titre}</H3>
        <Micro1>
          {showreel.duree} · 9:16
        </Micro1>
        <Body2>Clique pour regarder avec le son.</Body2>
      </div>

      {open && <PlayerModal video={reelVideo} onClose={() => setOpen(false)} />}
    </div>
  )
}
