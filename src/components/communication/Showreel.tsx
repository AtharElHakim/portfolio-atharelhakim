import { useEffect, useRef, useState } from 'react'
import { showreel } from '../../data/communication'
import { focusRing } from '../Button'
import { Micro1 } from '../Typography'
import { Placeholder, claimPlayback, useReducedMotion } from './media'

const ctrl = `flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 ${focusRing}`

/** 9:16 on every screen. Muted autoplay loop + pause & sound buttons. */
export default function Showreel() {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(!reducedMotion)
  const [muted, setMuted] = useState(true)

  const { src, poster } = showreel

  useEffect(() => {
    setPlaying(!reducedMotion)
  }, [reducedMotion])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (playing) {
      claimPlayback(el)
      el.play().catch(() => setPlaying(false))
    } else el.pause()
  }, [playing, src])

  return (
    <figure className="flex w-full flex-col items-center gap-3">
      <div
        className="relative aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-3xl border-[1.5px] border-purple-pale/50 shadow-glass-card md:max-w-[360px]"
      >
        {src ? (
          <video
            key={src}
            ref={ref}
            src={src}
            poster={poster || undefined}
            muted={muted}
            loop
            playsInline
            preload="none"
            autoPlay={!reducedMotion}
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <Placeholder label={showreel.titre} format="9:16" className="absolute inset-0 !rounded-3xl" />
        )}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            type="button"
            className={ctrl}
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Mettre en pause' : 'Lire'}
          >
            {playing ? (
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className={ctrl}
            onClick={() => {
              setMuted((m) => !m)
              if (ref.current) claimPlayback(ref.current)
            }}
            aria-label={muted ? 'Activer le son' : 'Couper le son'}
            aria-pressed={!muted}
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
              {muted ? (
                <path d="m17 9 5 6M22 9l-5 6" />
              ) : (
                <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <figcaption>
        <Micro1>
          {showreel.titre} · {showreel.duree}
        </Micro1>
      </figcaption>
    </figure>
  )
}
