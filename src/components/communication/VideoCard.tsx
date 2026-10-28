import { useRef, useState } from 'react'
import type { Video } from '../../data/communication'
import { focusRing } from '../Button'
import VideoModal from '../VideoModal'
import { Placeholder, PlayGlyph, claimPlayback, fr, ratioClass, useFinePointer, useReducedMotion } from './media'

export const cardFrame =
  'rounded-3xl border-[1.5px] border-purple-pale/50 bg-purple-dark/35 backdrop-blur-[20px] shadow-glass-card'

/** "Instagram" / "TikTok", read from the link itself. */
export const platformOf = (url: string) => (/tiktok\.com/i.test(url) ? 'TikTok' : 'Instagram')

function PlatformLogo({ url }: { url: string }) {
  const tiktok = platformOf(url) === 'TikTok'
  return (
    <span className="pointer-events-none absolute bottom-2.5 right-2.5 flex size-8 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-sm">
      <svg className="size-4" viewBox="0 0 24 24" fill={tiktok ? 'currentColor' : 'none'} stroke={tiktok ? 'none' : 'currentColor'} strokeWidth="2" aria-hidden>
        {tiktok ? (
          <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.4-2.46V9.69a5.68 5.68 0 0 0-.81-.06 5.68 5.68 0 0 0-5.68 5.68A5.68 5.68 0 0 0 9.86 21a5.68 5.68 0 0 0 5.68-5.68V9.01a7.33 7.33 0 0 0 4.29 1.38V7.3a4.28 4.28 0 0 1-3.23-1.48Z" />
        ) : (
          <>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </>
        )}
      </svg>
    </span>
  )
}

const playCircle =
  'pointer-events-none absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110'

function Thumb({ video, previewRef }: { video: Video; previewRef?: React.Ref<HTMLVideoElement> }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-black-soft ${ratioClass[video.format]}`}>
      {video.poster ? (
        <img
          loading="lazy"
          decoding="async"
          src={video.poster}
          alt=""
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Placeholder label={video.titre} format={video.format} className="absolute inset-0" />
      )}
      {previewRef && video.src && (
        <video
          ref={previewRef}
          src={video.src}
          poster={video.poster || undefined}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          tabIndex={-1}
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 data-[on=true]:opacity-100"
        />
      )}
      <span className={playCircle}>
        <PlayGlyph className="ml-0.5 size-5" />
      </span>
    </div>
  )
}

/** No link: hover preview on desktop, click/tap opens a modal with sound. */
function SiteVideo({ video }: { video: Video }) {
  const [open, setOpen] = useState(false)
  const previewRef = useRef<HTMLVideoElement>(null)
  const finePointer = useFinePointer()
  const reducedMotion = useReducedMotion()
  const canPreview = finePointer && !reducedMotion && Boolean(video.src)

  function startPreview() {
    const el = previewRef.current
    if (!canPreview || !el) return
    claimPlayback(el)
    el.dataset.on = 'true'
    el.play().catch(() => {})
  }
  function stopPreview() {
    const el = previewRef.current
    if (!el) return
    el.pause()
    el.currentTime = 0
    el.dataset.on = 'false'
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          stopPreview()
          setOpen(true)
        }}
        onMouseEnter={startPreview}
        onMouseLeave={stopPreview}
        onFocus={startPreview}
        onBlur={stopPreview}
        aria-label={`Lire la vidéo « ${video.titre} »`}
        className={`group relative block w-full cursor-pointer rounded-2xl ${focusRing}`}
      >
        <Thumb video={video} previewRef={canPreview ? previewRef : undefined} />
      </button>
      {open && <PlayerModal video={video} onClose={() => setOpen(false)} />}
    </>
  )
}

export function PlayerModal({ video, onClose }: { video: Video; onClose: () => void }) {
  const size =
    video.format === '16:9'
      ? 'w-[min(90vw,calc(80vh*16/9))]'
      : video.format === '9:16'
        ? 'h-[min(80vh,calc(90vw*16/9))]'
        : 'h-[min(80vh,90vw)]'
  return (
    <VideoModal onClose={onClose}>
      <div className={`overflow-hidden rounded-2xl bg-black-soft ${ratioClass[video.format]} ${size}`}>
        {video.src ? (
          <video
            ref={(el) => {
              if (el) claimPlayback(el)
            }}
            src={video.src}
            poster={video.poster || undefined}
            controls
            autoPlay
            playsInline
            preload="none"
            onPlay={(e) => claimPlayback(e.currentTarget)}
            className="size-full bg-black object-contain"
          />
        ) : (
          <Placeholder label={`${video.titre} (vidéo à venir)`} format={video.format} />
        )}
      </div>
      <p className="text-center text-sm text-white/70">{fr(video.titre)}</p>
    </VideoModal>
  )
}

/** Link: thumbnail with play icon + platform logo, opening the post in a new tab. */
function LinkVideo({ video }: { video: Video }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${video.titre} : voir sur ${platformOf(video.url)} (nouvel onglet)`}
      className={`group relative block w-full cursor-pointer rounded-2xl ${focusRing}`}
    >
      <Thumb video={video} />
      <PlatformLogo url={video.url} />
    </a>
  )
}

/** The clickable thumbnail: opens the post if there's a link, else plays on the page. */
export function VideoMedia({ video }: { video: Video }) {
  return video.url ? <LinkVideo video={video} /> : <SiteVideo video={video} />
}
