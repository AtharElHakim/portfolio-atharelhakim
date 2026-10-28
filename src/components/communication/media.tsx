import { useEffect, useState } from 'react'
import type { Ratio } from '../../data/communication'

export const ratioClass: Record<Ratio, string> = {
  '9:16': 'aspect-[9/16]',
  '16:9': 'aspect-video',
  '4:5': 'aspect-[4/5]',
  '1:1': 'aspect-square',
}

/** Grey rounded block standing in for media that hasn't been supplied yet. */
export function Placeholder({
  label,
  format,
  className = '',
}: {
  label: string
  format: Ratio
  className?: string
}) {
  return (
    <div
      className={`flex size-full flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-center ${className}`}
    >
      <span className="text-sm font-medium leading-5 text-white/70">{label}</span>
      <span className="text-xs text-white/45">{format}</span>
    </div>
  )
}

/** Image if `src` is set, otherwise a placeholder, always at the right ratio. */
export function MediaImage({
  src,
  label,
  format,
  className = '',
}: {
  src: string
  label: string
  format: Ratio
  className?: string
}) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${ratioClass[format]} ${className}`}>
      {src ? (
        <img
          loading="lazy"
          decoding="async"
          src={src}
          alt={label}
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <Placeholder label={label} format={format} className="absolute inset-0" />
      )}
    </div>
  )
}

/* ---------------- Playback manager: one video at a time ---------------- */

let current: HTMLVideoElement | null = null

/** Call right before playing `el`; pauses whichever video was playing. */
export function claimPlayback(el: HTMLVideoElement) {
  if (current && current !== el && !current.paused) current.pause()
  current = el
}

/* ---------------- Media-query hooks ---------------- */

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])
  return matches
}

export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')
/** True on devices with a real mouse (hover previews only make sense there). */
export const useFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)')

/* ---------------- Small shared bits ---------------- */

export function RolePills({ roles, className = '' }: { roles: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {roles.map((r) => (
        <li
          key={r}
          className="rounded-full border border-purple-pale/30 bg-purple/15 px-2.5 py-0.5 text-xs leading-5 text-purple-highlight"
        >
          {r}
        </li>
      ))}
    </ul>
  )
}

export function PlayGlyph({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
    </svg>
  )
}

/** French typography: a non-breaking space before « : », « ? », « ! » and « ; »,
 *  so the punctuation never wraps onto its own line. */
export const fr = (text: string) => text.replace(/ ([:?!;])/g, ' $1')
