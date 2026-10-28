import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { story } from '../../data/communication'
import { focusRing } from '../Button'
import { H6 } from '../Typography'
import { Placeholder, RolePills, claimPlayback, useReducedMotion } from './media'

const HOLD_MS = 220

/**
 * Behaves like an Instagram story: progress bars, auto-advance (≈5 s per
 * image, real length for a video), tap right = next, tap left = back,
 * press-and-hold = pause. Arrow keys / Space work once it has focus, and
 * it pauses itself while scrolled out of view.
 */
function Player() {
  const screens = story.ecrans
  const reducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [userPaused, setUserPaused] = useState(reducedMotion)
  const [holding, setHolding] = useState(false)
  const [visible, setVisible] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const pressStart = useRef(0)

  const paused = userPaused || holding || !visible
  const screen = screens[index]

  const go = (i: number) => {
    setIndex((i + screens.length) % screens.length)
    setProgress(0)
  }

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Image screens: drive progress with rAF. Video screens: follow the video.
  useEffect(() => {
    if (paused) {
      videoRef.current?.pause()
      return
    }
    if (screen.type === 'video' && screen.src && videoRef.current) {
      const v = videoRef.current
      claimPlayback(v)
      v.play().catch(() => {})
      const onTime = () => setProgress(v.duration ? v.currentTime / v.duration : 0)
      const onEnd = () => go(index + 1)
      v.addEventListener('timeupdate', onTime)
      v.addEventListener('ended', onEnd)
      return () => {
        v.removeEventListener('timeupdate', onTime)
        v.removeEventListener('ended', onEnd)
      }
    }
    const total = story.dureeImage * 1000
    const start = performance.now() - progress * total
    let raf = 0
    const tick = (now: number) => {
      const p = (now - start) / total
      if (p >= 1) {
        go(index + 1)
        return
      }
      setProgress(p)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // progress is read only to resume where we paused
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused])

  function onPointerDown() {
    pressStart.current = performance.now()
    setHolding(true)
  }
  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    setHolding(false)
    if (performance.now() - pressStart.current > HOLD_MS) return
    const rect = e.currentTarget.getBoundingClientRect()
    if (e.clientX - rect.left < rect.width / 3) go(index - 1)
    else go(index + 1)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={rootRef}
        tabIndex={0}
        role="region"
        aria-roledescription="story"
        aria-label={`${story.titre}, écran ${index + 1} sur ${screens.length}. Flèches pour naviguer, Espace pour mettre en pause.`}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') go(index + 1)
          else if (e.key === 'ArrowLeft') go(index - 1)
          else if (e.key === ' ') {
            e.preventDefault()
            setUserPaused((p) => !p)
          }
        }}
        className={`relative aspect-[9/16] w-[260px] select-none overflow-hidden rounded-[2.5rem] border-[6px] border-black-elevated bg-black shadow-glass-card sm:w-[300px] ${focusRing}`}
      >
        <div
          className="absolute inset-0 touch-manipulation"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => setHolding(false)}
          onPointerCancel={() => setHolding(false)}
          onContextMenu={(e) => e.preventDefault()}
        >
          {screen.src ? (
            screen.type === 'video' ? (
              <video
                key={screen.src}
                ref={videoRef}
                src={screen.src}
                playsInline
                muted
                preload="none"
                className="size-full object-cover"
              />
            ) : (
              <img src={screen.src} alt={screen.label} draggable={false} className="size-full object-cover" />
            )
          ) : (
            <Placeholder label={screen.label} format="9:16" className="!rounded-none !border-0" />
          )}
        </div>
        <div className="pointer-events-none absolute inset-x-3 top-3 flex gap-1" aria-hidden>
          {screens.map((s, i) => (
            <span key={s.label} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30">
              <span
                className="block h-full bg-white"
                style={{ width: `${i < index ? 100 : i === index ? progress * 100 : 0}%` }}
              />
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {[
          { label: 'Écran précédent', onClick: () => go(index - 1), d: 'M15 6l-6 6 6 6' },
          {
            label: userPaused ? 'Reprendre la story' : 'Mettre la story en pause',
            onClick: () => setUserPaused((p) => !p),
            d: userPaused ? 'M8 5.5v13l10.5-6.5Z' : 'M8 5v14M16 5v14',
          },
          { label: 'Écran suivant', onClick: () => go(index + 1), d: 'M9 6l6 6-6 6' },
        ].map((b) => (
          <button
            key={b.label}
            type="button"
            onClick={b.onClick}
            aria-label={b.label}
            className={`flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 ${focusRing}`}
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d={b.d} />
            </svg>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function StoryPlayer() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Player />
      <div className="flex flex-col items-center gap-2 text-center">
        <H6 className="text-base md:text-lg">{story.titre}</H6>
        <RolePills roles={story.roles} />
        {story.url && (
          <a
            href={story.url}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex min-h-11 items-center rounded text-sm text-purple-highlight underline decoration-purple-pale/40 underline-offset-4 transition-colors hover:text-white ${focusRing}`}
          >
            ▶ Voir sur Instagram ↗
          </a>
        )}
      </div>
    </div>
  )
}
