import { useId, useRef, useState } from 'react'
import type { Video } from '../../data/communication'
import { focusRing } from '../Button'
import { Body2, H6, Micro1 } from '../Typography'
import VideoModal from '../VideoModal'
import {
  Placeholder,
  PlayGlyph,
  RolePills,
  claimPlayback,
  ratioClass,
  useFinePointer,
  useReducedMotion,
} from './media'

export const cardFrame =
  'rounded-3xl border-[1.5px] border-purple-pale/50 bg-purple-dark/35 backdrop-blur-[20px] shadow-glass-card'

/** "Instagram" / "TikTok", read from the link itself. */
export const platformOf = (url: string) => (/tiktok\.com/i.test(url) ? 'TikTok' : 'Instagram')

/** Link the card's cover points to: its own url, else (series) the cover episode, else episode 1. */
function coverUrl(video: Video) {
  if (video.url) return video.url
  const eps = video.episodes ?? []
  return (eps.find((e) => e.titre === video.couverture) ?? eps[0])?.url ?? ''
}

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

function Thumb({ video, previewRef }: { video: Video; previewRef?: React.Ref<HTMLVideoElement> }) {
  const label = video.couverture ?? video.titre
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
        <Placeholder label={label} format={video.format} className="absolute inset-0" />
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
      {video.episodes && (
        <span className="pointer-events-none absolute left-2.5 top-2.5 whitespace-nowrap rounded-full border border-purple-pale/50 bg-purple-dark/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <span className="hidden sm:inline">Série · </span>
          {video.episodes.length} épisodes
        </span>
      )}
    </div>
  )
}

function Meta({ video, episodesOpenByDefault = false }: { video: Video; episodesOpenByDefault?: boolean }) {
  const href = coverUrl(video)
  const [episodesOpen, setEpisodesOpen] = useState(episodesOpenByDefault)
  const listId = useId()
  return (
    <div className="flex flex-1 flex-col items-start gap-2 px-1 pb-1">
      <H6 className="text-base md:text-lg">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${video.titre} : voir sur ${platformOf(href)} (nouvel onglet)`}
            className={`rounded transition-colors hover:text-purple-highlight ${focusRing}`}
          >
            {video.titre}
          </a>
        ) : (
          video.titre
        )}
      </H6>
      <Micro1>
        {video.ecole} · {video.plateforme}
      </Micro1>
      <RolePills roles={video.roles} />
      <Body2 className="!text-sm !leading-5 text-white/75">{video.resultat}</Body2>
      {video.episodes && (
        <button
          type="button"
          onClick={() => setEpisodesOpen((o) => !o)}
          aria-expanded={episodesOpen}
          aria-controls={listId}
          className={`mt-1 inline-flex min-h-9 cursor-pointer items-center gap-1 rounded-full border border-purple-pale/40 bg-purple/15 px-3 py-1 text-sm text-white/85 transition-colors hover:border-purple-pale/70 hover:text-white ${focusRing}`}
        >
          {episodesOpen ? 'Masquer les épisodes' : `Voir les ${video.episodes.length} épisodes`}
          <svg className={`size-3.5 transition-transform duration-200 ${episodesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
      {video.episodes && episodesOpen && (
        <ol id={listId} className="flex w-full flex-col gap-1 border-t border-white/10 pt-3">
          {video.episodes.map((e, i) => (
            <li key={e.titre} className="flex gap-2 text-sm leading-5">
              <span className="w-4 shrink-0 text-white/40">{i + 1}.</span>
              {e.url ? (
                <a
                  href={e.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${e.titre} (${platformOf(e.url)}, nouvel onglet)`}
                  className={`rounded text-white/75 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-purple-pale ${focusRing}`}
                >
                  {e.titre}
                  <span className="ml-1 whitespace-nowrap text-xs text-purple-pale/80">
                    {platformOf(e.url)}&nbsp;↗
                  </span>
                </a>
              ) : (
                <span className="text-white/60">{e.titre}</span>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

const playCircle =
  'pointer-events-none absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110'

const mediaWidth = (wide?: boolean) => (wide ? 'lg:w-[62%] lg:shrink-0' : '')

/** No link: hover preview on desktop, click/tap opens a modal with sound. */
function SiteVideo({ video, wide }: { video: Video; wide?: boolean }) {
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
        aria-label={`Lire la vidéo « ${video.couverture ?? video.titre} »`}
        className={`group relative block w-full cursor-pointer rounded-2xl ${focusRing} ${mediaWidth(wide)}`}
      >
        <Thumb video={video} previewRef={canPreview ? previewRef : undefined} />
        <span className={playCircle}>
          <PlayGlyph className="ml-0.5 size-5" />
        </span>
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
  const title = video.couverture ?? video.titre
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
          <Placeholder label={`${title} (vidéo à venir)`} format={video.format} />
        )}
      </div>
      <p className="text-center text-sm text-white/70">
        {title} · {video.ecole}
      </p>
    </VideoModal>
  )
}

/** Link mode: thumbnail with play icon + platform logo, opening the post in a new tab. */
function LinkVideo({ video, wide }: { video: Video; wide?: boolean }) {
  const href = coverUrl(video)
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${video.couverture ?? video.titre} : voir sur ${platformOf(href)} (nouvel onglet)`}
      className={`group relative block w-full cursor-pointer rounded-2xl ${focusRing} ${mediaWidth(wide)}`}
    >
      <Thumb video={video} />
      <span className={playCircle}>
        <PlayGlyph className="ml-0.5 size-5" />
      </span>
      <PlatformLogo url={href} />
    </a>
  )
}

/** The clickable thumbnail alone: opens the post if there's a link, else plays on the page. */
export function VideoMedia({ video, wide }: { video: Video; wide?: boolean }) {
  const Media = coverUrl(video) ? LinkVideo : SiteVideo
  return <Media video={video} wide={wide} />
}

export default function VideoCard({
  video,
  wide,
  episodesOpenByDefault,
}: {
  video: Video
  wide?: boolean
  /** Project pages show a series' episode list unfolded. */
  episodesOpenByDefault?: boolean
}) {
  return (
    <article
      id={video.id}
      className={`flex flex-col gap-3 p-2.5 sm:p-3 ${cardFrame} ${
        wide ? 'lg:flex-row lg:items-center lg:gap-8 lg:p-4' : ''
      }`}
    >
      <VideoMedia video={video} wide={wide} />
      <Meta video={video} episodesOpenByDefault={episodesOpenByDefault} />
    </article>
  )
}
