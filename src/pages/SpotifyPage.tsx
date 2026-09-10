import { useRef, useState, type CSSProperties, type ReactNode } from 'react'
import Contact from '../components/Contact'
import CaseStudyNav from '../components/CaseStudyNav'
import Button, { focusRing } from '../components/Button'
import Lightbox from '../components/Lightbox'
import Seo from '../components/Seo'
import { H1, H2 as SectionTitle, H3, H4, H5, H6, Body1, Body2, Micro1 } from '../components/Typography'
import TagRow from '../components/TagRow'

import heroImg from '../assets/spotify/hero.webp'
import spotifyLogo from '../assets/spotify/spotify-logo.svg'
import radarChart from '../assets/spotify/radar-chart.png'
import roadmapMonthBar from '../assets/spotify/roadmap-month-bar.jpg'
import roadmapTimeline from '../assets/spotify/roadmap-timeline.jpg'
import personaLucas from '../assets/spotify/persona-lucas.png'
import sidebarOld from '../assets/spotify/feature-sidebar-old.jpg'
import sidebarNewDefault from '../assets/spotify/feature-sidebar-new-default.jpg'
import sidebarNewPodcasts from '../assets/spotify/feature-sidebar-new-podcasts.jpg'
import sidebarNewAudiobooks from '../assets/spotify/feature-sidebar-new-audiobooks.jpg'
import filtresOld from '../assets/spotify/feature-filtres-old.jpg'
import filtresNewDefault from '../assets/spotify/feature-filtres-new-default.jpg'
import filtresNewReordered from '../assets/spotify/feature-filtres-new-reordered.jpg'
import homeOld from '../assets/spotify/feature-home-old.jpg'
import homeNew from '../assets/spotify/feature-home-new.jpg'
import deeplinkOldStart from '../assets/spotify/feature-deeplink-old-start.jpg'
import deeplinkOldEnd from '../assets/spotify/feature-deeplink-old-end.jpg'
import deeplinkNewStart from '../assets/spotify/feature-deeplink-new-start.jpg'
import deeplinkNewEnd from '../assets/spotify/feature-deeplink-new-end.jpg'
import onboarding1 from '../assets/spotify/feature-onboarding-1.jpg'
import onboarding2 from '../assets/spotify/feature-onboarding-2.jpg'
import onboarding3 from '../assets/spotify/feature-onboarding-3.jpg'
import logoAppleMusic from '../assets/spotify/logo-apple-music.svg'
import logoAudible from '../assets/spotify/logo-audible.svg'
import logoBooking from '../assets/spotify/logo-booking.svg'
import logoFnac from '../assets/spotify/logo-fnac.svg'
import logoHeadspace from '../assets/spotify/logo-headspace.svg'
import logoVinted from '../assets/spotify/logo-vinted.svg'

const PROTOTYPE_URL = '/spotify-prototype/index.html'

/* ---------- Local helpers (mirrors the small per-page components already
   established in FinelinePage/OrealPage/AngryBirdsPage — each case study
   defines its own copies rather than sharing a file). ---------- */

function ArrowRightIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Non-compact bullet (title + supporting line), the exact pattern shared by
 *  Fineline/Oreal's local `BulletPoint`. */
function BulletPoint({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex w-full items-start gap-4 border-l-2 border-white/15 pl-4">
      <p className="flex-1">
        <span className="block text-xl leading-7 text-white/85">{title}</span>
        <span className="block text-lg leading-7 text-white/70">{body}</span>
      </p>
    </div>
  )
}

/** Plain left-border list — the treatment already used for AngryBirds'
 *  roadmap rows / Fineline's hypotheses, reused verbatim wherever the spec
 *  calls for a "plain left-border list". */
function LeftBorderList({ items }: { items: string[] }) {
  return (
    <ul className="flex w-full flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="border-l-2 border-white/15 py-1 pl-4 text-white/80">
          {item}
        </li>
      ))}
    </ul>
  )
}

/** The exact success/danger glass-card recipe from FinelinePage's Audit
 *  section, minus the image-gallery row (no strength/weakness crops exist
 *  for Spotify) — header + bullet list only. */
function StrengthWeaknessCard({
  tone,
  title,
  items,
}: {
  tone: 'success' | 'danger'
  title: string
  items: { title: string; body: string }[]
}) {
  const isSuccess = tone === 'success'
  const colorVar = isSuccess ? 'success' : 'danger'
  return (
    <div
      className={`flex w-full flex-col items-start gap-6 rounded-3xl border-[1.5px] p-6 backdrop-blur-[20px] shadow-glass-card transition-all duration-300 ${
        isSuccess ? 'border-success/50' : 'border-danger/50'
      }`}
      style={
        {
          background: `color-mix(in oklab, var(--color-${colorVar}) 35%, transparent)`,
          '--glass-tint': `var(--color-${colorVar})`,
          '--glass-edge': `var(--color-${colorVar}-bg)`,
          '--glass-edge-opacity': '40%',
          '--glass-edge-space': 'srgb',
        } as CSSProperties
      }
    >
      <H4 className={`flex items-center justify-center gap-2 ${isSuccess ? '!text-success-bg' : '!text-danger-bg'}`}>
        {isSuccess ? <CheckIcon className="size-5" /> : <XIcon className="size-5" />}
        {title}
      </H4>
      <div
        className="flex w-full flex-col gap-4 rounded-lg border p-4"
        style={{
          borderColor: `color-mix(in oklab, var(--color-${colorVar}) 40%, transparent)`,
          background: `color-mix(in oklab, var(--color-${colorVar}) 25%, transparent)`,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {items.map((item) => (
          <BulletPoint key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
    </div>
  )
}

function LogoCard({ src, name, isOwn }: { src: string; name: string; isOwn?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 text-center backdrop-blur-sm ${
        isOwn ? 'border-purple-pale/50 bg-purple-dark/25' : 'border-white/15 bg-white/5'
      }`}
    >
      <img src={src} alt={name} className="h-9 w-auto max-w-[120px] object-contain" />
      <Body2 className={isOwn ? '!text-purple-pale' : undefined}>
        {name}
        {isOwn ? ' · Notre marque' : ''}
      </Body2>
    </div>
  )
}

/** New pattern (none of the three existing case studies has a data table) —
 *  built from the same tokens as everything else (white/10-15 borders,
 *  purple-pale kicker, Body2 cell text) so it reads as part of the system.
 *  Flagged in DESIGN_SYSTEM.md. */
function ComparisonTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-white/15">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-white/15 bg-white/5">
            {columns.map((col) => (
              <th
                key={col}
                className="whitespace-nowrap px-4 py-3 text-sm font-semibold uppercase tracking-widest text-purple-pale/70"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/10 last:border-b-0 even:bg-white/[0.03]">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 align-top text-base leading-6 ${
                    j === 0 ? 'font-medium text-white' : 'text-white/70'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** The exact "insight callout" treatment from OrealPage's Processus section
 *  (border-purple-pale/40, bg-purple-dark/25). */
function CalloutBox({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded-2xl border border-purple-pale/40 bg-purple-dark/25 p-6 backdrop-blur-sm">
      <Body1 className="font-light">{children}</Body1>
    </div>
  )
}

function StatCard({ headline, detail }: { headline: string; detail?: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <p className="font-syne text-2xl text-white md:text-3xl">{headline}</p>
      {detail && <Body2>{detail}</Body2>}
    </div>
  )
}

function ProfileCard({
  name,
  description,
  plan,
  usage,
  connaissance,
  donnees,
  insight,
}: {
  name: string
  description: string
  plan: string
  usage: string
  connaissance: string
  donnees: string[]
  insight: string
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <H3 className="!text-xl !leading-normal">{name}</H3>
      <Body2>{description}</Body2>
      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
        <div className="flex flex-col gap-1">
          <H5>Plan</H5>
          <Micro1 className="!text-white/70">{plan}</Micro1>
        </div>
        <div className="flex flex-col gap-1">
          <H5>Usage</H5>
          <Micro1 className="!text-white/70">{usage}</Micro1>
        </div>
        <div className="flex flex-col gap-1">
          <H5>Connaissance</H5>
          <Micro1 className="!text-white/70">{connaissance}</Micro1>
        </div>
      </div>
      <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
        {donnees.map((d) => (
          <Micro1 key={d} className="!text-white/70">
            {d}
          </Micro1>
        ))}
      </div>
      <p className="border-t border-white/10 pt-4 text-base italic leading-6 text-purple-pale/85">
        « {insight} »
      </p>
    </div>
  )
}

function ReasonCard({ text, source }: { text: string; source: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <Body2>{text}</Body2>
      <Micro1 className="border-t border-white/10 pt-3">Source : {source}</Micro1>
    </div>
  )
}

const numberBadgeGlowStyle = {
  '--glow-color': 'var(--color-purple-light)',
  '--glow-opacity': '45%',
} as CSSProperties

function FeatureBlock({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-purple-pale/50 bg-purple-dark/70 shadow-glow md:size-12"
          style={numberBadgeGlowStyle}
        >
          <span className="font-syne text-lg text-purple-pale md:text-xl">{number}</span>
        </div>
        <H3 className="w-auto text-left !text-white">{title}</H3>
      </div>
      {children}
    </div>
  )
}

function NumberedPoint({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="flex w-full items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
      <span className="font-syne text-2xl text-purple-pale/70">{n}</span>
      <div className="flex flex-col gap-1">
        <H6>{title}</H6>
        <Body2>{body}</Body2>
      </div>
    </div>
  )
}

function ParcoursTrail({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <H5 className="!text-purple-pale/70">{label}</H5>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80">
              {step}
            </span>
            {i < steps.length - 1 && <ArrowRightIcon className="size-4 shrink-0 text-white/40" />}
          </div>
        ))}
      </div>
    </div>
  )
}

/** A single vertical parcours column: purple kicker title + muted subtitle,
 *  then content-hugging pills stacked with a downward arrow between them.
 *  Two of these sit in a 2-up grid (see Feature 02). */
function ParcoursColumn({
  title,
  subtitle,
  steps,
}: {
  title: string
  subtitle: string
  steps: string[]
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <H5 className="!text-purple-pale/70 text-center">{title}</H5>
      <Micro1 className="text-center">{subtitle}</Micro1>
      <div className="mt-3 flex w-full flex-col items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex w-full flex-col items-center gap-2">
            <span className="w-fit max-w-full rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-center text-sm text-white/80">
              {step}
            </span>
            {i < steps.length - 1 && (
              <ArrowRightIcon className="size-4 shrink-0 rotate-90 text-white/40" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* Device chrome geometry, lifted 1:1 from the provided
   iphone_393x852_status_bar_fixed_margins.svg reference (viewBox 0 0 401 860:
   bezel at 2,2 389x848 rx60; screen at 14,14 365x824 rx48; status-bar band
   14,14 to 379,73; content area 14,73 365x765; home indicator 150,825
   93x5 rx2.5). Percentages below are each measurement divided by its own
   parent box so the frame stays a true (not stretched) circle-cornered
   device at any render width, since the outer wrapper is pinned to the
   same 401/860 aspect ratio. */
/* Rounds all four corners to the screen's curve. `borderRadius` +
   `overflow` alone left a hairline seam on some GPUs where the source
   screenshot's own (sometimes white) corner pixels bled past the clip;
   `clipPath` with the identical radius is a hard geometric mask that
   removes that seam for both the static and the scrolling frames. */
const PHONE_CONTENT_RADIUS = '13.151% / 6.275%'
const PHONE_CONTENT_STYLE: CSSProperties = {
  left: '3.491%',
  top: '8.488%',
  width: '91.022%',
  height: '88.953%',
  borderRadius: PHONE_CONTENT_RADIUS,
  clipPath: `inset(0 round ${PHONE_CONTENT_RADIUS})`,
}

type LightboxImage = { src: string; alt: string }

/** Wraps a mockup so it opens in the shared Lightbox on click. With no
 *  `onZoom` it renders its child untouched (static). Reuses the site-wide
 *  `focusRing`; the Lightbox itself brings the focus-trap + scroll-lock. */
function Zoomable({ onZoom, children }: { onZoom?: () => void; children: ReactNode }) {
  if (!onZoom) return <>{children}</>
  return (
    <button
      type="button"
      onClick={onZoom}
      className={`block w-full cursor-zoom-in transition-opacity duration-300 hover:opacity-90 ${focusRing}`}
    >
      {children}
    </button>
  )
}

/** Reusable iPhone frame: draws the bezel/status-bar/home-indicator chrome
 *  around a real screenshot. `scrollable` lets a screenshot taller than the
 *  frame's own screen ratio (~2.096 height/width) scroll inside the frame
 *  instead of being squashed or cropped. The bezel, status bar and home
 *  indicator are separate `absolute` layers over a stable, non-scrolling box,
 *  so only the screenshot moves. `onZoom` makes the frame open in the Lightbox. */
function PhoneFrame({
  src,
  alt,
  scrollable = false,
  className = '',
  onZoom,
}: {
  src: string
  alt: string
  scrollable?: boolean
  className?: string
  onZoom?: () => void
}) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <Zoomable onZoom={onZoom}>
      <div className="relative w-full" style={{ aspectRatio: '401 / 860' }}>
        <svg viewBox="0 0 401 860" className="pointer-events-none absolute inset-0 z-0 h-full w-full" aria-hidden="true">
          <rect x="2" y="2" width="389" height="848" rx="60" fill="#1c1c1e" />
          <rect x="14" y="14" width="365" height="824" rx="48" fill="#0b0b0c" />
        </svg>

        <div
          className={`absolute z-10 ${scrollable ? 'hide-scrollbar overflow-y-auto' : 'overflow-hidden'}`}
          style={PHONE_CONTENT_STYLE}
        >
          <img loading="lazy" decoding="async" src={src} alt={alt} className="block w-full" />
        </div>

        <svg viewBox="0 0 401 860" className="pointer-events-none absolute inset-0 z-20 h-full w-full" aria-hidden="true">
          {/* Status bar: Dynamic Island pill + clock and signal/wifi/battery glyphs. */}
          <rect x="133.5" y="25" width="126" height="37" rx="18.5" fill="#000" />
          <circle cx="234" cy="43.5" r="4" fill="#1a2a4a" />
          <text x="40" y="49" fontSize="15" fontWeight="500" fill="#f5f5f5">
            9:41
          </text>
          <g transform="translate(287,34)">
            <rect x="0" y="8" width="4" height="8" rx="1" fill="#f5f5f5" />
            <rect x="6" y="5" width="4" height="11" rx="1" fill="#f5f5f5" />
            <rect x="12" y="2" width="4" height="14" rx="1" fill="#f5f5f5" />
            <rect x="18" y="0" width="4" height="16" rx="1" fill="#f5f5f5" />
          </g>
          <g transform="translate(315,36)">
            <path d="M0 4 A9 9 0 0 1 12 4" stroke="#f5f5f5" strokeWidth="1.6" fill="none" />
            <path d="M2.5 6.5 A6 6 0 0 1 9.5 6.5" stroke="#f5f5f5" strokeWidth="1.6" fill="none" />
            <circle cx="6" cy="9.5" r="1.4" fill="#f5f5f5" />
          </g>
          <g transform="translate(336,35)">
            <rect x="0" y="0" width="25" height="13" rx="3.5" fill="none" stroke="#f5f5f5" strokeWidth="1.4" />
            <rect x="26" y="4" width="2" height="5" rx="1" fill="#f5f5f5" />
            <rect x="2" y="2" width="19" height="9" rx="2" fill="#f5f5f5" />
          </g>
          <rect x="150" y="825" width="93" height="5" rx="2.5" fill="#5a5a5c" />
        </svg>
      </div>
      </Zoomable>
    </div>
  )
}

function ScreenCard({
  src,
  label,
  phone = false,
  scrollable = false,
  onZoom,
}: {
  src: string
  label: string
  phone?: boolean
  scrollable?: boolean
  onZoom?: () => void
}) {
  // A device frame is its own rounded chrome; a card behind it only shows a
  // second, mismatched corner curve through the frame's transparent corners
  // (see DESIGN_SYSTEM « Phone-mockup wrappers »). So framed shots get a plain
  // layout wrapper; only frameless screenshots keep the card recipe.
  if (phone) {
    return (
      <div className="flex flex-col items-center gap-3">
        <PhoneFrame src={src} alt={label} scrollable={scrollable} onZoom={onZoom} className="max-w-[220px]" />
        <Micro1 className="text-center">{label}</Micro1>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-3">
      <Zoomable onZoom={onZoom}>
        <img loading="lazy" decoding="async" src={src} alt={label} className="block w-full rounded-xl" />
      </Zoomable>
      <Micro1 className="text-center">{label}</Micro1>
    </div>
  )
}

type Shot = { src: string; label?: string; scrollable?: boolean; phone?: boolean }

/** Ancien / Nouveau comparison: exactly two cards — one "Ancien" box and one
 *  "Nouveau" box — with the group label sitting above each card (not inside),
 *  and every screenshot keeping its own sub-label underneath. */
function AncienNouveauCompare({
  ancien,
  nouveaux,
  nouveauCols,
  phone = false,
  shotClassName = '',
  onZoom,
}: {
  ancien: Shot
  nouveaux: (Shot & { label: string })[]
  nouveauCols: string
  phone?: boolean
  /** extra classes on the frameless `<img>` shots (e.g. a `max-w-*` cap for
   *  tall phone-screenshot comparisons that aren't in a device frame) */
  shotClassName?: string
  onZoom?: (images: LightboxImage[], index: number) => void
}) {
  const ancienAlt = ancien.label ? `Ancien · ${ancien.label}` : 'Ancien'
  const images: LightboxImage[] = [
    { src: ancien.src, alt: ancienAlt },
    ...nouveaux.map((n) => ({ src: n.src, alt: `Nouveau · ${n.label}` })),
  ]

  const shot = (item: Shot, alt: string, index: number) => {
    const inner =
      (item.phone ?? phone) ? (
        <PhoneFrame src={item.src} alt={alt} scrollable={item.scrollable} className="max-w-[220px]" />
      ) : (
        <img
          loading="lazy"
          decoding="async"
          src={item.src}
          alt={alt}
          className={`block w-full rounded-xl ${shotClassName}`}
        />
      )
    return onZoom ? <Zoomable onZoom={() => onZoom(images, index)}>{inner}</Zoomable> : inner
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      <div className="flex flex-col items-center gap-2">
        <H5 className="!text-purple-pale/70">Ancien</H5>
        <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-3">
          {shot(ancien, ancienAlt, 0)}
          {ancien.label && <Micro1 className="text-center">{ancien.label}</Micro1>}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <H5 className="!text-purple-pale/70">Nouveau</H5>
        <div className="w-full rounded-2xl border border-white/15 bg-white/5 p-3">
          <div className={`grid grid-cols-1 gap-4 ${nouveauCols}`}>
            {nouveaux.map((n, i) => (
              <div key={n.src} className="flex flex-col items-center gap-2">
                {shot(n, `Nouveau · ${n.label}`, i + 1)}
                <Micro1 className="text-center">{n.label}</Micro1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FlowPair({
  label,
  start,
  end,
  scrollable = false,
  onZoom,
}: {
  label: string
  start: string
  end: string
  scrollable?: boolean
  onZoom?: (images: LightboxImage[], index: number) => void
}) {
  const images: LightboxImage[] = [
    { src: start, alt: `${label} · écran 1` },
    { src: end, alt: `${label} · écran 2` },
  ]
  return (
    <div className="flex flex-col items-center gap-3">
      <H5 className="!text-purple-pale/70">{label}</H5>
      {/* No card behind the frames — it would show a second corner curve
          through the phone frame's transparent corners. */}
      <div className="flex items-center gap-3">
        <PhoneFrame
          src={start}
          alt={images[0].alt}
          scrollable={scrollable}
          onZoom={onZoom ? () => onZoom(images, 0) : undefined}
          className="w-32 sm:w-40"
        />
        <ArrowRightIcon className="size-6 shrink-0 text-white/40" />
        <PhoneFrame
          src={end}
          alt={images[1].alt}
          scrollable={scrollable}
          onZoom={onZoom ? () => onZoom(images, 1) : undefined}
          className="w-32 sm:w-40"
        />
      </div>
    </div>
  )
}

function RoleCard({ role, description, tags }: { role: string; description: string; tags: string[] }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <H3 className="!text-xl !leading-normal">{role}</H3>
      <Body2>{description}</Body2>
      <TagRow tags={tags} className="mt-auto pt-2" />
    </div>
  )
}

function OrphanCentered({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full md:w-[calc((100%-3rem)/3)]">{children}</div>
    </div>
  )
}

/** New pattern (none of the three existing case studies has a card with a
 *  divided header bar) — built from the same card recipe (rounded-2xl,
 *  border-white/15, bg-white/5) with a bg-black-soft header split off by a
 *  border, reused for Équipe's Chapters, the Méthodologie sprint cards, and
 *  the KPI dimension cards. Flagged in DESIGN_SYSTEM.md. */
function DarkHeaderCard({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm">
      <div className="border-b border-white/10 bg-black-soft px-6 py-4">
        <H3 className="!text-xl !text-white !leading-normal">{title}</H3>
        {subtitle && <Body2 className="mt-1">{subtitle}</Body2>}
      </div>
      {children && <div className="flex flex-1 flex-col gap-4 p-6">{children}</div>}
    </div>
  )
}

function TjmCard({ role, rate, description }: { role: string; rate: string; description: string }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-purple-pale/70" />
        <H4 className="w-auto text-left !text-white">{role}</H4>
      </div>
      <Body2>{description}</Body2>
      <Micro1 className="!text-white/70 mt-auto border-t border-white/10 pt-4">
        <span className="font-semibold text-white">{rate}</span> / jour
      </Micro1>
    </div>
  )
}

/* ---------- Content data ---------- */

const homeCompareImages: LightboxImage[] = [
  { src: homeOld, alt: 'Home « All » · Ancien' },
  { src: homeNew, alt: 'Home « All » · Nouveau' },
]

const onboardingImages: LightboxImage[] = [
  { src: onboarding1, alt: 'Onboarding · Écran 1/3' },
  { src: onboarding2, alt: 'Onboarding · Écran 2/3' },
  { src: onboarding3, alt: 'Onboarding · Écran 3/3' },
]

const strengths = [
  {
    title: "Forte contribution à l'économie musicale",
    body: 'les artistes peuvent générer des revenus via la plateforme',
  },
  {
    title: 'Investissement dans les artistes et les marchés locaux',
    body: 'soutien à la découverte de nouveaux talents',
  },
  {
    title: 'Expérience de découverte performante',
    body: 'accès facile à de nouveaux contenus',
  },
  {
    title: 'Plateforme à portée internationale',
    body: 'audience mondiale pour les artistes',
  },
  {
    title: 'Innovation continue',
    body: 'évolution régulière des fonctionnalités',
  },
]

const weaknesses = [
  {
    title: 'Dépendance aux artistes',
    body: 'le modèle repose sur la création de contenu',
  },
  {
    title: "Besoin d'investissements constants",
    body: 'nécessaire pour rester compétitif',
  },
  {
    title: 'Offre complexe',
    body: 'diversité des contenus parfois difficile à comprendre',
  },
  {
    title: 'Concurrence élevée',
    body: 'nécessité d\'améliorer en continu les recommandations',
  },
]

const audioAppsRows = [
  ['Spotify', '~761M utilisateurs (MAU)', 'Freemium/Premium', 'Musique, podcasts, audiobooks', '1 app', 'Multi'],
  ['Apple', '~94M abonnés (estimé)', 'Premium uniquement', 'Musique, podcasts, audiobooks', 'Plusieurs apps', 'Mono'],
  ['Audible', 'Plusieurs dizaines de millions (estimé)', 'Abonnement/crédits', 'Audiobooks', '1 app dédiée', 'Mono'],
  ['Headspace', '~2M abonnés (estimé)', 'Freemium/Premium', 'Méditation, bien-être audio', '1 app dédiée', 'Mono'],
]

const multiServiceRows = [
  [
    'Spotify',
    'Musique, podcasts, audiobooks',
    'App/site multi-services intégrés',
    'Moyenne',
    'Recommandations performantes (Taste Profile) ; surcharge de contenu ; navigation principale efficace ; sous-niveaux encombrés ; incohérences mobile/desktop',
  ],
  [
    'Booking.com',
    'Hôtels, vols, activités',
    'App/site organisés par parcours',
    'Élevée',
    'Navigation claire ; recherche unifiée ; filtres cohérents ; homepage dense ; navigation mobile parfois confuse',
  ],
  [
    'Vinted',
    'Achat/vente',
    'App/site structuré par rôles',
    'Élevée',
    'Navigation claire par catégories ; recherche puissante ; parcours fluide ; trop de filtres ; onglets mêlant fonctions',
  ],
  [
    'Fnac',
    'Produits, billetterie, services',
    'App/site organisé par catégories',
    'Élevée',
    'Organisation claire ; parcours omnicanal ; recherche efficace ; interface surchargée ; mobile moins fluide',
  ],
]

const syntheseStats: { headline: string; detail?: string }[] = [
  { headline: '751M utilisateurs actifs mensuels (MAU)', detail: '~281M abonnés Premium, soit environ 39% payants' },
  { headline: '180+ pays', detail: '31,7% de parts de marché mondial, #1 du streaming audio' },
  { headline: "114 min d'écoute par jour", detail: 'en moyenne par utilisateur' },
  { headline: '44% écoutent quotidien­nement', detail: "33% des utilisateurs génèrent 60% des streams" },
  { headline: 'Auditeurs très engagés : 2%', detail: 'génèrent 18% des streams, 9x plus susceptibles de partager' },
  { headline: '100M titres, 7M podcasts, 350K audiobooks' },
  { headline: '68% utilisent Spotify uniquement pour la musique' },
  {
    headline: "+36% d'auditeurs d'audiobooks en un an",
    detail: 'les podcasts représentent 19% des nouvelles souscriptions Premium',
  },
]

const profiles = [
  {
    name: 'Auditeur passif',
    description:
      "Consomme du contenu via les recommandations, sans intention active. Dépend fortement de l'algorithme.",
    plan: 'Gratuit (non abonné)',
    usage: 'Mono (musique)',
    connaissance: 'Faible',
    donnees: [
      "N'a pas streamé activement depuis au moins 2 ans",
      '≈36% du temps d\'écoute vient des playlists',
    ],
    insight: "L'utilisateur délègue toute décision d'écoute à l'algorithme sans interagir activement",
  },
  {
    name: 'Auditeur actif',
    description:
      'Interagit avec la plateforme en recherchant du contenu, en likant des morceaux et en créant des playlists.',
    plan: 'Gratuit ou Premium',
    usage: 'Principalement mono',
    connaissance: 'Moyenne',
    donnees: ['33% de l\'audience génère 60% des streams', '68% utilisent Spotify uniquement pour la musique'],
    insight: "L'engagement actif ne conduit pas automatiquement à une exploration plus large de l'offre",
  },
  {
    name: 'Auditeur intensif',
    description:
      'Utilise Spotify de manière intensive. Explore différents contenus, suit des artistes, crée des playlists.',
    plan: 'Premium',
    usage: 'Multi (musique, podcasts, audiobooks)',
    connaissance: 'Élevée',
    donnees: ['15 fois ou plus au cours des 28 derniers jours', '2% des auditeurs mais 18% des streams'],
    insight: "L'engagement massif repose sur une minorité d'utilisateurs qui maîtrisent pleinement la plateforme",
  },
  {
    name: 'Auditeur inactif',
    description: 'Utilisateur ayant réduit ou arrêté son usage de la plateforme.',
    plan: 'Variable',
    usage: 'Réduit, inexistant',
    connaissance: 'Faible',
    donnees: ['Churn annuel ≈30,9%', '≈70% reviennent dans les 45 jours'],
    insight:
      'Le désengagement est souvent déclenché par une expérience trop complexe où la superposition des contenus brouille la navigation',
  },
]

const equipeRoles = [
  {
    role: 'Product Manager',
    description: 'Pilote la vision produit, priorise le MVP et coordonne les parties prenantes.',
    tags: ['Roadmap produit', 'Priorisation MVP', 'Arbitrage business/UX', 'Coordination'],
  },
  {
    role: 'Lead UX/UI Designer',
    description: 'Porte la conception de la solution du brief stratégique jusqu\'au prototype interactif.',
    tags: ["Architecture d'information", 'User flows', 'Prototype interactif', 'Design system'],
  },
  {
    role: 'UX Researcher',
    description: 'Valide les hypothèses et nourrit les itérations grâce à la recherche utilisateur.',
    tags: ['Protocoles de tests', 'Analyse comportements', 'Synthèse insights', 'Recommandations UX'],
  },
  {
    role: 'Front-End Engineer',
    description: 'Traduit le prototype en expérience fonctionnelle et implémente les interactions.',
    tags: ['Adaptive tabs', 'Deep linking', 'Navigation multi-service', 'Intégration front MVP'],
  },
  {
    role: 'Back-End Engineer',
    description: "Développe l'infrastructure et les logiques techniques supportant la personnalisation.",
    tags: ['Données utilisateur', 'Connexions API', 'Système adaptatif', 'Intégration back MVP'],
  },
  {
    role: 'ML/Personalization Engineer',
    description: "Développe la logique de personnalisation de l'ordre adaptatif des contenus.",
    tags: ['Logique de personnalisation', 'Ordre adaptatif', 'Recommandations'],
  },
  {
    role: 'Product Data Analyst',
    description: "Accompagne le suivi de performance du produit et l'analyse des usages.",
    tags: ['Dashboards', "Analyse d'adoption", 'Suivi performances'],
  },
]

const chapters = [
  {
    title: 'Design System · Spotify Encore',
    subtitle: 'Alignement avec les standards visuels Spotify.',
    bullets: ['Cohérence des composants', 'Intégration des interactions', "Continuité de l'écosystème"],
  },
  {
    title: 'Content Strategy',
    subtitle: 'Visibilité des univers podcasts et audiobooks.',
    bullets: ['Structuration des contenus', 'Valorisation des services', 'Cohérence éditoriale'],
  },
  {
    title: 'Growth Team',
    subtitle: 'Adoption produit et lancement du MVP.',
    bullets: [
      "Stratégie d'activation utilisateur",
      'Accompagnement du déploiement',
      "Soutien à l'adoption",
    ],
  },
  {
    title: 'Privacy & Legal',
    subtitle: 'Conformité et encadrement des données.',
    bullets: ['Validation conformité', "Encadrement de l'usage des données", 'Questions de privacy'],
  },
]

const sprintCards = [
  {
    title: 'Sprint 1 · Discovery & Framing',
    objectif: 'Cadrer le problème, valider les hypothèses et définir le périmètre du MVP.',
    actions: [
      "Consolider les insights issus de l'audit et de la recherche",
      'Prioriser les fonctionnalités proposées',
      'Définir le périmètre du MVP',
      'Construire le product backlog',
    ],
    livrables: ['Opportunity map', 'Product backlog priorisé', 'Périmètre MVP validé'],
  },
  {
    title: "Sprint 2 · Architecture de l'information",
    objectif: "Structurer la nouvelle architecture de l'expérience multi-service.",
    actions: [
      "Refonte de l'arborescence",
      'Construction des user flows',
      'Définition des logiques de navigation',
      'Priorisation des parcours clés',
    ],
    livrables: ["Architecture d'information", 'Parcours utilisateurs', 'Modèle de navigation'],
  },
  {
    title: 'Sprint 3 · Wireframing & Tests de concept',
    objectif: 'Explorer les premières solutions et valider les concepts auprès des utilisateurs.',
    actions: [
      'Production de wireframes',
      "Création d'un prototype initial",
      'Premiers tests utilisateurs',
      'Ajustements selon les retours',
    ],
    livrables: ['Wireframes', 'Prototype V1', 'Synthèse des tests'],
  },
  {
    title: 'Sprint 4 · Itérations & Raffinement',
    objectif: 'Faire évoluer le prototype et consolider les interactions proposées.',
    actions: [
      'Itérations sur les fonctionnalités',
      'Raffinement des interactions',
      'Nouvelle vague de tests utilisateurs',
      'Validation UX',
    ],
    livrables: ['Prototype V2', 'Flows optimisés', "Recommandations d'amélioration"],
  },
  {
    title: 'Sprint 5 · Définition MVP & Handoff technique',
    objectif: 'Préparer la faisabilité et le passage vers le MVP.',
    actions: [
      'Arbitrage des fonctionnalités du MVP',
      'Rédaction des spécifications fonctionnelles',
      'Handoff design/développement',
      'Préparation du pilote',
    ],
    livrables: ['Spécifications fonctionnelles', 'MVP défini', 'Documentation handoff'],
  },
  {
    title: 'Sprint 6 · Préparation & Lancement beta',
    objectif: "Préparer puis lancer une beta fermée pour tester le MVP auprès d'un premier segment.",
    actions: [
      'Mise en place du plan de beta test',
      "Préparation de l'A/B testing",
      'Mise en place du monitoring produit',
      'Lancement de la beta fermée',
    ],
    livrables: ['Protocole beta test', 'Plan de lancement', 'Cadre de suivi', 'MVP lancé en beta'],
  },
]

const rituels = [
  {
    title: 'Sprint Planning',
    body: 'Session en début de sprint pour définir les priorités et répartir les tâches.',
  },
  {
    title: 'Weekly Stand-ups',
    body: "Points courts et réguliers pour suivre l'avancement et lever les blocages.",
  },
  {
    title: 'Sprint Reviews',
    body: 'Revues avec les parties prenantes pour présenter les avancées et recueillir du feedback.',
  },
  {
    title: 'Rétrospectives',
    body: "Temps dédié à l'amélioration continue du fonctionnement d'équipe après chaque sprint.",
  },
]


const tjmCards = [
  { role: 'Product Manager', rate: '500€', description: 'Vision produit, priorisation et pilotage global du projet.' },
  {
    role: 'Lead Product Designer (UX/UI)',
    rate: '450€',
    description: "Conception de l'expérience, parcours utilisateurs et prototype.",
  },
  { role: 'UX Researcher', rate: '450€', description: 'Recherche utilisateur, tests et analyse des comportements.' },
  { role: 'Front-End Engineer', rate: '500€', description: 'Intégration des interfaces et des interactions.' },
  { role: 'Back-End Engineer', rate: '550€', description: 'Logique technique, données et infrastructure.' },
  {
    role: 'ML/Personalization Engineer',
    rate: '550€',
    description: 'Mécanismes de personnalisation et adaptation des contenus.',
  },
  {
    role: 'Product Data Analyst',
    rate: '500€',
    description: 'Suivi des performances et analyse des usages produit.',
  },
]

const budgetLivrables = [
  { phase: 'Phase 1 Recherche', items: ['Synthèse de recherche utilisateur', 'Opportunity map', 'Définition du MVP'] },
  { phase: 'Phase 2 Conception', items: ['Wireframes', 'Prototype fonctionnel', 'Parcours utilisateurs'] },
  {
    phase: 'Phase 3 Développement',
    items: ['MVP fonctionnel', 'Intégration des interfaces', 'Mise en place des logiques adaptatives'],
  },
  { phase: 'Phase 4 Beta Testing', items: ['Version beta testée', 'Feedback utilisateurs', 'Ajustements produit'] },
  { phase: 'Phase 5 Déploiement', items: ['Mise en ligne progressive', 'Optimisations post-lancement'] },
]

const kpiDimensions = [
  {
    title: '1 · Découvrabilité de l\'offre',
    objectif: "Évaluer si la refonte rend l'offre multi-service plus visible et compréhensible.",
    indicateurs: [
      'Identification facile de musique, podcasts et audiobooks',
      'Augmentation du taux de découverte des services',
      'Réduction des difficultés de repérage observées',
    ],
    taches: ['Trouver un podcast', 'Accéder à un audiobook', 'Naviguer entre services'],
  },
  {
    title: '2 · Usabilité des parcours',
    objectif: 'Mesurer si les parcours proposés sont plus simples et plus fluides.',
    indicateurs: [
      'Amélioration du Task Success Rate',
      'Réduction du Time on Task',
      'Diminution des erreurs, hésitations ou blocages',
    ],
  },
  {
    title: '3 · Utilité des fonctionnalités',
    objectif: 'Vérifier la pertinence des fonctionnalités conçues.',
    indicateurs: [
      'Compréhension et intérêt perçu des fonctionnalités',
      'Validation du deep linking, des filtres adaptatifs et de la Home restructurée',
      'Valeur ajoutée exprimée par les utilisateurs',
    ],
  },
  {
    title: '4 · Satisfaction utilisateur',
    objectif: 'Mesurer la perception globale de la nouvelle expérience.',
    indicateurs: [
      'Niveau de satisfaction recueilli lors des tests utilisateurs',
      "Perception d'une interface plus claire et plus simple",
      'Amélioration du score SUS',
    ],
  },
  {
    title: '5 · Adéquation problème-solution',
    objectif: 'Vérifier si la proposition répond à la problématique initiale.',
    indicateurs: [
      "Réduction des frictions identifiées dans l'audit",
      'Validation des hypothèses formulées au départ',
      'Cohérence perçue entre besoins utilisateurs et solution proposée',
    ],
  },
]

const kpiChecklist = [
  "Meilleure visibilité de l'offre multi-service",
  'Parcours plus fluides et intuitifs',
  'Satisfaction utilisateur renforcée',
  'Fonctionnalités jugées utiles',
  'Réponse cohérente à la problématique initiale',
]

const conclusionLevers = [
  { n: '01', label: 'Navigation' },
  { n: '02', label: 'Visibilité' },
  { n: '03', label: 'Personnalisation' },
  { n: '04', label: 'Accompagnement' },
]

export default function SpotifyPage() {
  const roadmapScrollRef = useRef<HTMLDivElement>(null)
  const [roadmapScroll, setRoadmapScroll] = useState(0)
  const [roadmapThumbRatio, setRoadmapThumbRatio] = useState(1)
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null)
  const openLightbox = (images: LightboxImage[], index: number) => setLightbox({ images, index })

  function updateRoadmapScrollState() {
    const el = roadmapScrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setRoadmapScroll(maxScroll > 0 ? el.scrollLeft / maxScroll : 0)
    setRoadmapThumbRatio(el.clientWidth / el.scrollWidth)
  }

  function handleRoadmapTrackPointerDown(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    const track = event.currentTarget
    const scrollEl = roadmapScrollRef.current
    if (!scrollEl) return
    const trackRect = track.getBoundingClientRect()
    const thumbWidth = trackRect.width * roadmapThumbRatio

    function scrollToClientX(clientX: number) {
      const usable = trackRect.width - thumbWidth
      const ratio =
        usable > 0
          ? Math.min(
              Math.max((clientX - trackRect.left - thumbWidth / 2) / usable, 0),
              1,
            )
          : 0
      scrollEl!.scrollLeft = ratio * (scrollEl!.scrollWidth - scrollEl!.clientWidth)
    }

    scrollToClientX(event.clientX)

    function onMove(moveEvent: PointerEvent) {
      scrollToClientX(moveEvent.clientX)
    }
    function onUp() {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
  }

  return (
    <div className="relative isolate">
      <Seo
        title="Spotify — Étude de cas UX/UI"
        description="Redesign de l'expérience multi-service de Spotify : audit de marque, benchmark, recherche utilisateur et recommandation, du brief au prototype."
        path="/projects/spotify"
      />
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'Overview' },
          { id: 'brief', label: 'Le Brief' },
          { id: 'marque', label: 'Marque' },
          { id: 'audit', label: 'Audit' },
          { id: 'benchmark', label: 'Benchmark' },
          { id: 'synthese', label: 'Synthèse' },
          { id: 'cible', label: 'Cible' },
          { id: 'probleme', label: 'Problème' },
          { id: 'recommandation', label: 'Recommandation' },
          { id: 'prototype', label: 'Prototype' },
          { id: 'impact', label: 'Impact par profil' },
          { id: 'equipe', label: 'Équipe projet' },
          { id: 'methodologie', label: 'Méthodologie gestion de projet' },
          { id: 'roadmap', label: 'Roadmap' },
          { id: 'budget', label: 'Budget' },
          { id: 'kpis', label: 'KPIs' },
          { id: 'conclusion', label: 'Conclusion' },
        ]}
      />

      {/* Header / Overview */}
      <div id="overview" className="flex flex-col items-center gap-6 px-8 pb-8 pt-4 md:pb-16 md:pt-10 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <img loading="lazy" decoding="async" src={spotifyLogo} alt="Spotify" className="h-9" />
          <H1 className="md:!text-5xl md:!leading-[52.8px]">Spotify</H1>
          <Body1 className="!text-white/70 font-light">Redesign de l'expérience multi-service</Body1>

          <div className="group/hero relative mx-auto w-full max-w-[820px] overflow-hidden rounded-2xl border border-white/15 bg-black-soft shadow-lift">
            <img loading="lazy" decoding="async" src={heroImg} alt="Recommandation Spotify Multi : la Home « All » redessinée" className="block w-full" fetchPriority="high" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/hero:bg-black/50">
              <Button
                href={PROTOTYPE_URL}
                className="pointer-events-auto opacity-80 transition-opacity duration-300 group-hover/hero:opacity-100"
              >
                Voir le Prototype
              </Button>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-8 border-t border-white/10 pt-8 text-center">
            <div className="flex w-full flex-col items-center gap-2">
              <H5 className="!text-lg">Overview</H5>
              <Body1 className="w-full text-center !text-white font-light">
                Projet réalisé seul dans le cadre du Processus Créatif, un projet de mon master UX/UI Lead
                Design à Sup de Pub. De l'audit de marque à la recommandation finale, j'ai mené l'intégralité
                d'une démarche stratégique et créative sur Spotify, jusqu'à une proposition de redesign pour
                mettre en avant son expérience multi-service.
              </Body1>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <H5 className="!text-lg !text-purple-pale/70">Mon Rôle</H5>
                <ul className="mx-auto list-outside list-disc space-y-1.5 pl-5 text-left font-light text-lg leading-7 text-white marker:text-xs marker:text-white [&>li]:pl-2 md:text-xl">
                  <li>Recherche &amp; analyse de données</li>
                  <li>Segmentation cible</li>
                  <li>Définition de la problématique</li>
                  <li>Conception de la recommandation UX/UI</li>
                  <li>Prototypage sur Figma</li>
                  <li>Gestion de projet (équipe, méthodologie, budget)</li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-2">
                <H5 className="!text-lg !text-purple-pale/70">Outils</H5>
                <ul className="list-none text-center font-light text-lg leading-7 text-white md:text-xl">
                  <li>Figma</li>
                  <li>Google Workspace</li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-2">
                <H5 className="!text-lg !text-purple-pale/70">Année</H5>
                <Body1 className="!text-white font-light">2026</Body1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Le Brief */}
      <div id="brief" className="relative flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Le Brief</SectionTitle>
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <Body1 className="text-center font-light">
            Ce projet, réalisé seul dans le cadre du Processus Créatif (Bloc 5 Lead Design à Sup de Pub),
            m'a permis de choisir librement la marque sur laquelle travailler parmi plusieurs propositions :
            Hachette, Fnac, Playmobil, Lush, National Geographic, ou Spotify. J'ai choisi Spotify, une
            application que j'utilise tous les jours, parce que je voulais creuser un vrai problème produit :
            pourquoi la plupart des utilisateurs, moi y compris, n'exploitent presque jamais tout ce que la
            plateforme propose au-delà de la musique.
          </Body1>
        </div>
      </div>

      {/* Marque */}
      <div id="marque" className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-6">
          <img loading="lazy" decoding="async" src={spotifyLogo} alt="Spotify" className="h-7" />
          <SectionTitle>Marque</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Spotify est une plateforme de streaming audio créée en 2008, leader mondial du secteur avec
            761M d'utilisateurs actifs et 293M d'abonnés payants, présente dans plus de 180 marchés.
          </Body1>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Secteur</H5>
            <Body2>Streaming audio (musique, podcasts, livres audio) · Technologie &amp; divertissement</Body2>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Envergure</H5>
            <Body2>293M abonnés payants · Présent dans plus de 180 marchés · Leader mondial du streaming</Body2>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Services</H5>
            <Body2>
              Streaming de musique, podcasts et livres audio · Recommandations IA · Playlists · Outils
              créateurs · Publicité ciblée
            </Body2>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Cible Principale · Les Écouteurs</H5>
            <Body1 className="!text-white/70 font-light">
              Jeunes adultes (18-34 ans) qui écoutent de la musique et des contenus audio quotidiennement
              via mobile.
            </Body1>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Cible Secondaire · Les Acteurs Économiques</H5>
            <Body1 className="!text-white/70 font-light">
              Créateurs (artistes, podcasters) et annonceurs (marques) qui utilisent la plateforme à des
              fins économiques.
            </Body1>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-3 text-center">
          <Body1>
            <span className="font-semibold text-white">Positionnement : </span>
            <span className="text-white/70">Connecter les artistes et les auditeurs à grande échelle</span>
          </Body1>
          <Body1>
            <span className="font-semibold text-white">Mission : </span>
            <span className="text-white/70">
              Délivrer la créativité au monde, une note, une voix, une idée à la fois
            </span>
          </Body1>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H5 className="!text-purple-pale/70">ADN</H5>
          <TagRow
            tags={['Technologique & Innovante (AI)', 'Culturelle (musique, podcasts)', "Axée sur l'expérience utilisateur", 'Vision long terme']}
            className="justify-center"
          />
        </div>
      </div>

      {/* Audit */}
      <div id="audit" className="flex flex-col items-center gap-14 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-8">
          <H4>Recherche Secondaire</H4>
          <SectionTitle>Audit</SectionTitle>
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2">
          <StrengthWeaknessCard tone="success" title="Point Forts" items={strengths} />
          <StrengthWeaknessCard tone="danger" title="Point Faible" items={weaknesses} />
        </div>
      </div>

      {/* Benchmark */}
      <div id="benchmark" className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Benchmark</SectionTitle>

        <div className="flex w-full flex-col gap-6">
          <H3 className="w-full text-center">1. Applications audio</H3>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
            <LogoCard src={spotifyLogo} name="Spotify" isOwn />
            <LogoCard src={logoAppleMusic} name="Apple Music" />
            <LogoCard src={logoAudible} name="Audible" />
            <LogoCard src={logoHeadspace} name="Headspace" />
          </div>
          <ComparisonTable
            columns={['Plateforme', 'Utilisateurs', 'Abonnement', 'Services', 'Apps', 'Usage']}
            rows={audioAppsRows}
          />
          <CalloutBox>
            Par rapport aux services de consommation audio, Spotify est la seule plateforme à regrouper
            plusieurs services au sein d'une seule application.
          </CalloutBox>
        </div>

        <div className="flex w-full flex-col gap-6">
          <H3 className="w-full text-center">2. Plateformes multi-services</H3>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
            <LogoCard src={spotifyLogo} name="Spotify" isOwn />
            <LogoCard src={logoBooking} name="Booking.com" />
            <LogoCard src={logoVinted} name="Vinted" />
            <LogoCard src={logoFnac} name="Fnac" />
          </div>
          <ComparisonTable
            columns={['Plateforme', 'Services proposés', 'Structure', 'Clarté arbo.', 'Insight UX']}
            rows={multiServiceRows}
          />
          <CalloutBox>
            Une application multi-services est rendue possible par une arborescence claire. Ces deux
            constats soulèvent un enjeu central pour Spotify : si la plateforme est la seule à proposer une
            offre multi-service complète, son arborescence moyenne freine la découverte de ces services par
            ses utilisateurs.
          </CalloutBox>
        </div>
      </div>

      {/* Synthèse */}
      <div id="synthese" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Synthèse</SectionTitle>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {syntheseStats.map((s) => (
            <StatCard key={s.headline} headline={s.headline} detail={s.detail} />
          ))}
        </div>
      </div>

      {/* Cible */}
      <div id="cible" className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-2">
          <SectionTitle>Analyse · Cible</SectionTitle>
          <H5 className="!text-purple-pale/70">Segmentation comportementale</H5>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {profiles.map((p) => (
            <ProfileCard key={p.name} {...p} />
          ))}
        </div>

        <img
          loading="lazy"
          decoding="async"
          src={radarChart}
          alt="Radar de comparaison des profils d'auditeurs"
          className="w-full max-w-[640px] rounded-xl"
        />

        <div className="flex w-full flex-col gap-4">
          <H3 className="w-full text-center">Synthèse</H3>
          <LeftBorderList
            items={[
              "La majorité des utilisateurs reste cantonnée à un usage musical",
              "Seul l'auditeur intensif explore l'offre complète (2% de l'audience)",
              "La complexité de l'interface multi-service freine la découverte",
              "Le désengagement est souvent lié à un manque de visibilité sur l'offre",
            ]}
          />
        </div>

        {/* Persona — reuses Fineline's Persona card layout (photo + fields, H5 kickers, list-disc lists) */}
        <div className="flex w-full max-w-[1000px] flex-col gap-8 rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
          <H3 className="w-full text-center">Persona</H3>
          <div className="flex w-full flex-wrap gap-10">
            <img
              loading="lazy"
              decoding="async"
              src={personaLucas}
              alt="Lucas Martin"
              className="h-[240px] w-[240px] shrink-0 rounded-xl object-cover object-top"
            />
            <div className="flex flex-1 min-w-[280px] flex-col gap-6">
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-2">
                  <H5>Prénom</H5>
                  <Body2 className="!text-white font-light">Lucas Martin</Body2>
                </div>
                <div className="flex flex-col gap-2">
                  <H5>Âge</H5>
                  <Body2 className="!text-white font-light">24 ans</Body2>
                </div>
                <div className="flex flex-col gap-2">
                  <H5>Profil</H5>
                  <Body2 className="!text-white font-light">Étudiant en master, Paris</Body2>
                </div>
              </div>
              <p className="font-syne text-xl font-medium text-purple-pale md:text-2xl">
                « Une bonne playlist peut changer toute ma journée. »
              </p>
              <Body2>Français, urbain, génération Z</Body2>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Bio</H5>
              <Body2>
                Lucas a grandi à Lyon avant de monter à Paris pour ses études. Il partage un appartement
                avec deux colocataires dans le 11ème. Sa journée commence toujours avec un café et ses
                écouteurs dans les oreilles. Le soir, il traîne dans les bars avec ses amis ou regarde des
                séries. C'est le genre de personne qui a toujours une recommandation musicale à faire.
              </Body2>
            </div>
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Spotify</H5>
              <Body2>
                Utilisateur Premium depuis 2 ans. Il crée ses playlists, like des morceaux et suit ses
                artistes favoris. Il sait que Spotify propose des podcasts mais utilise d'autres applications
                pour ça sans réaliser que Spotify pourrait tout centraliser. Il n'a jamais ouvert l'onglet
                Audiobooks.
              </Body2>
            </div>
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Personnalité</H5>
              <Body2>
                Lucas est curieux et ouvert mais a ses habitudes, il revient toujours à ses routines et ses
                cercles d'amis. Il aime découvrir de nouvelles choses mais seulement quand quelqu'un lui
                montre le chemin. Il est sociable, un peu procrastinateur, et valorise le confort et la
                simplicité dans son quotidien.
              </Body2>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 border-t border-white/10 pt-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <H5>Motivations</H5>
              <ul className="list-disc pl-6 text-base leading-6 text-white font-light">
                <li>Profiter pleinement de chaque moment de sa journée</li>
                <li>S'enrichir culturellement sans trop d'effort</li>
                <li>Simplifier sa vie pour avoir plus de temps pour ce qui compte vraiment</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <H5>Frustrations</H5>
              <ul className="list-disc pl-6 text-base leading-6 text-white font-light">
                <li>A l'impression de manquer des choses intéressantes sans le savoir</li>
                <li>Manque souvent de temps pour explorer de nouvelles découvertes</li>
                <li>
                  Se sent parfois dépassé par la quantité d'informations et la rapidité du monde
                  d'aujourd'hui
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Problème */}
      <div id="probleme" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <p className="mx-auto max-w-[900px] text-center font-syne text-3xl leading-snug text-white md:text-4xl">
          Comment mettre en avant l'offre multi-service de Spotify pour engager au-delà de ses auditeurs
          musicaux ?
        </p>
      </div>

      {/* Recommandation */}
      <div id="recommandation" className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Recommandation</SectionTitle>
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <H5 className="!text-purple-pale/70">Spotify Multi</H5>
          <H3>Redesign de l'expérience multi-service</H3>
          <Body1 className="w-full text-center font-light">
            Spotify propose musique, podcasts et audiobooks au sein d'une seule application mais la majorité
            de ses utilisateurs ne le sait pas ou ne l'explore pas. Ma recommandation restructure l'interface
            pour que chaque service soit visible, accessible et personnalisé selon le profil de chaque
            utilisateur.
          </Body1>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Pourquoi cette solution</H3>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            <ReasonCard
              text="68% des utilisateurs n'utilisent Spotify que pour la musique malgré la présence de podcasts et d'audiobooks"
              source="Android Authority survey"
            />
            <ReasonCard
              text="Spotify est la seule plateforme à tout regrouper en une app sans interface claire pour le mettre en avant"
              source="Benchmark Applications audio"
            />
            <ReasonCard
              text="Spotify veut « posséder chaque moment d'écoute de la journée ». Cette solution aligne l'interface avec cette ambition"
              source="Spotify Mission Statement 2026"
            />
          </div>
        </div>

        {/* Feature 1 — Sidebar */}
        <FeatureBlock number="01" title="Sidebar">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Objectif</H5>
              <Body1 className="font-light">
                Offrir un point d'accès permanent et structuré aux trois univers de Spotify : Musique,
                Podcasts et Audiobooks, pour simplifier la navigation et réduire la charge cognitive liée à
                l'arborescence actuelle.
              </Body1>
            </div>
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Comment ça marche</H5>
              <Body1 className="font-light">
                Le redesign introduit un menu latéral accessible via l'icône de profil ou par un swipe vers
                la droite depuis le bord gauche de l'écran. Ce menu intègre les trois services comme
                entrées principales avec des icônes distinctes, permettant de basculer instantanément d'un
                univers à l'autre. L'utilisateur peut également personnaliser l'ordre des services en
                faisant glisser les éléments.
              </Body1>
            </div>
          </div>
          <ParcoursTrail
            label="Parcours"
            steps={["Ouvre l'app", 'Swipe gauche ou icône profil', 'Sélectionne un service', "Bascule dans l'univers dédié"]}
          />
          <AncienNouveauCompare
            onZoom={openLightbox}
            shotClassName="mx-auto max-w-[200px]"
            ancien={{ src: sidebarOld }}
            nouveaux={[
              { src: sidebarNewDefault, label: 'Ordre par défaut' },
              { src: sidebarNewPodcasts, label: 'Podcasts en priorité' },
              { src: sidebarNewAudiobooks, label: 'Audiobooks en priorité' },
            ]}
            nouveauCols="sm:grid-cols-3"
          />
        </FeatureBlock>

        {/* Feature 2 — Filtres */}
        <FeatureBlock number="02" title="Barre de filtres & Ordre adaptatif">
          <div className="flex flex-col gap-2">
            <H5 className="!text-purple-pale/70">Objectif</H5>
            <Body1 className="font-light">
              Améliorer la visibilité immédiate des services tout en personnalisant l'interface selon les
              habitudes réelles d'écoute de l'utilisateur.
            </Body1>
          </div>
          <div className="flex flex-col gap-4">
            <NumberedPoint
              n="1"
              title="Redesign de la barre de filtres"
              body="Les boutons de type « pill » de l'interface actuelle sont remplacés par un système d'underline : un soulignement vert sous le texte en gras indique le service actif."
            />
            <NumberedPoint
              n="2"
              title="Ordre adaptatif"
              body="L'ordre des onglets n'est plus statique. Il peut être modifié manuellement (glisser-déposer) ou automatiquement selon les habitudes d'écoute réelles. « All » reste en première position comme point d'ancrage."
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ParcoursColumn
              title="Parcours 1"
              subtitle="Manuel"
              steps={['Consomme majoritairement des Podcasts', "Fait glisser l'onglet", "L'ordre est mis à jour instantanément"]}
            />
            <ParcoursColumn
              title="Parcours 2"
              subtitle="Automatique"
              steps={[
                'Consomme majoritairement des Podcasts',
                "L'algorithme détecte l'habitude",
                'La barre devient All · Podcasts · Music · Audiobooks',
              ]}
            />
          </div>
          <AncienNouveauCompare
            onZoom={openLightbox}
            ancien={{ src: filtresOld, label: 'Style pill' }}
            nouveaux={[
              { src: filtresNewDefault, label: 'Underline, ordre par défaut' },
              { src: filtresNewReordered, label: 'Réordonnancement adaptatif' },
            ]}
            nouveauCols="sm:grid-cols-2"
          />
        </FeatureBlock>

        {/* Feature 3 — Home + Deep linking */}
        <FeatureBlock number="03" title={'Home « All » restructurée & Deep linking'}>
          <div className="flex flex-col gap-2">
            <H5 className="!text-purple-pale/70">Objectif</H5>
            <Body1 className="font-light">
              Transformer la page d'accueil générale en un hub équilibré qui sert de pont naturel vers les
              univers spécialisés, évitant que la musique n'écrase les autres services.
            </Body1>
          </div>
          <NumberedPoint
            n="1"
            title={'Home « All » restructurée'}
            body="La nouvelle Home propose une approche rééquilibrée : elle est structurée en trois sections distinctes, une pour chaque service. L'ordre reste adaptatif selon les usages, mais chaque univers conserve une visibilité équivalente."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ScreenCard src={homeOld} label="Ancien" phone onZoom={() => openLightbox(homeCompareImages, 0)} />
            <ScreenCard src={homeNew} label="Nouveau" phone scrollable onZoom={() => openLightbox(homeCompareImages, 1)} />
          </div>
          <NumberedPoint
            n="2"
            title="Deep linking"
            body={'Depuis la Home « All », l\'utilisateur peut cliquer sur « Voir plus » associé à un contenu, ce qui le redirige vers l\'onglet dédié au service correspondant. Le retour en arrière redirige vers la section explorée plutôt que vers la Home, maintenant la continuité de navigation.'}
          />
          <div className="flex w-full flex-wrap items-start justify-center gap-8">
            <FlowPair label="Ancien" start={deeplinkOldStart} end={deeplinkOldEnd} onZoom={openLightbox} />
            <FlowPair label="Nouveau" start={deeplinkNewStart} end={deeplinkNewEnd} scrollable onZoom={openLightbox} />
          </div>
          <ParcoursTrail
            label="Parcours"
            steps={['Ouvre la Home « All »', 'Voit une section Podcasts équilibrée', 'Clique sur un épisode', 'Est redirigé vers l\'onglet dédié « Podcasts »']}
          />
        </FeatureBlock>

        {/* Feature 4 — Onboarding */}
        <FeatureBlock number="04" title="Onboarding adaptatif">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Objectif</H5>
              <Body1 className="font-light">
                Mettre en avant le positionnement multi-service de Spotify, encore sous-perçu par les
                utilisateurs, et révéler dès le premier contact l'étendue de l'offre. Permettre en parallèle
                une personnalisation immédiate de l'interface selon les usages principaux.
              </Body1>
            </div>
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Comment ça marche</H5>
              <Body1 className="font-light">
                Onboarding en 3 écrans mettant en avant les nouvelles features. Il apparaît au premier
                lancement après mise à jour pour les utilisateurs existants (une seule fois) et à la fin de
                l'inscription pour les nouveaux utilisateurs.
              </Body1>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ScreenCard src={onboarding1} label="Écran 1/3" phone onZoom={() => openLightbox(onboardingImages, 0)} />
            <ScreenCard src={onboarding2} label="Écran 2/3" phone onZoom={() => openLightbox(onboardingImages, 1)} />
            <ScreenCard src={onboarding3} label="Écran 3/3" phone onZoom={() => openLightbox(onboardingImages, 2)} />
          </div>
        </FeatureBlock>
      </div>

      {/* Prototype — reuses Fineline's Prototype CTA section pattern */}
      <div id="prototype" className="flex flex-col items-center gap-6 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Prototype</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Après la présentation des fonctionnalités, découvrez leur mise en situation dans le prototype
          interactif. Naviguez dans l'interface et explorez les 4 leviers de la recommandation.
        </Body1>
        <Button href={PROTOTYPE_URL}>Lien vers le Prototype</Button>
      </div>

      {/* Impact par profil */}
      <div id="impact" className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Impact par profil</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Démontrer comment les 4 fonctionnalités clés répondent aux points de friction des différents
          profils utilisateurs, avec un focus particulier sur l'auditeur actif, cible principale du projet.
        </Body1>

        <div className="flex w-full flex-col gap-6 rounded-2xl border border-purple-pale/50 bg-purple-dark/35 p-8 backdrop-blur-sm">
          <H3 className="w-full text-center">Auditeur actif (Cible principale) · Lucas Martin</H3>
          <Body1 className="w-full text-center font-light">
            Engagé mais limité à ses habitudes musicales, sans explorer pleinement les autres services
            proposés par Spotify. Les 4 fonctionnalités ont été conçues prioritairement pour ce profil.
          </Body1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <BulletPoint title="F1 Sidebar" body="Structure clairement les univers et facilite la navigation entre services." />
            <BulletPoint
              title="F2 Filtres adaptatifs"
              body="Met en avant les contenus les plus pertinents selon ses habitudes d'écoute."
            />
            <BulletPoint
              title={'F3 Home « All » restructurée'}
              body="Favorise la découverte en guidant naturellement vers d'autres univers via le deep linking."
            />
            <BulletPoint
              title="F4 Onboarding adaptatif"
              body="Accompagne la personnalisation dès le départ et révèle les services disponibles."
            />
          </div>
          <Body1 className="w-full border-t border-white/10 pt-6 text-center font-light">
            Ensemble, ces éléments permettent de transformer un usage mono-service en une expérience
            multi-service fluide et progressive.
          </Body1>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H3 className="!text-xl !leading-normal">Auditeur passif</H3>
            <Body2>Délègue ses décisions à l'algorithme et ignore souvent la diversité de l'offre Spotify.</Body2>
            <BulletPoint
              title="F4 Onboarding adaptatif"
              body="Révèle immédiatement l'existence des différents services dès l'arrivée."
            />
            <BulletPoint
              title={'F3 Home « All » restructurée'}
              body="Propose une diversité de contenus dès l'accueil, favorisant une découverte sans effort."
            />
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H3 className="!text-xl !leading-normal">Auditeur intensif</H3>
            <Body2>Super Listener, maîtrise déjà l'offre multi-service mais a besoin d'une navigation plus performante.</Body2>
            <BulletPoint
              title="F1 Sidebar"
              body="Offre un accès rapide aux différents univers, optimisant l'efficacité de navigation."
            />
            <BulletPoint
              title="F2 Ordre adaptatif"
              body="Garantit une interface alignée avec ses habitudes, optimisant l'efficacité d'usage."
            />
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H3 className="!text-xl !leading-normal">Auditeur inactif</H3>
            <Body2>A réduit son usage en raison d'une interface jugée complexe et peu lisible.</Body2>
            <BulletPoint
              title="F1 Sidebar"
              body="Apporte une structure claire et rassurante, réduisant la perception de complexité."
            />
            <BulletPoint
              title="F4 Onboarding · modale"
              body="Agit comme point de réentrée en présentant une expérience simplifiée et mieux organisée."
            />
          </div>
        </div>
      </div>

      {/* Équipe projet */}
      <div id="equipe" className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Équipe projet</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Pour porter la refonte de l'expérience multi-service, le projet s'appuie sur une équipe autonome
          et pluridisciplinaire inspirée du modèle Spotify. Elle favorise une collaboration continue entre
          les métiers, une prise de décision agile et une progression par itérations.
        </Body1>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {equipeRoles.slice(0, 6).map((r) => (
            <RoleCard key={r.role} {...r} />
          ))}
        </div>
        <OrphanCentered>
          <RoleCard {...equipeRoles[6]} />
        </OrphanCentered>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {chapters.map((c) => (
            <DarkHeaderCard key={c.title} title={c.title} subtitle={c.subtitle}>
              <ul className="list-disc pl-5 text-base leading-6 text-white/70">
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </DarkHeaderCard>
          ))}
        </div>

        <div className="flex w-full flex-col gap-4">
          <H3 className="w-full text-center">Fonctionnement d'équipe</H3>
          <LeftBorderList
            items={[
              'Décisions prises en sprint planning',
              'Collaboration continue entre design, tech et data',
              'Revues régulières avec les parties prenantes',
              'Itérations guidées par les retours utilisateurs',
            ]}
          />
        </div>
      </div>

      {/* Méthodologie gestion de projet */}
      <div id="methodologie" className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Méthodologie gestion de projet</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Le projet est piloté selon une méthodologie Agile Scrum, une méthode itérative permettant
          d'avancer par cycles, de tester rapidement les hypothèses et d'ajuster la solution en continu
          selon les retours utilisateurs. La phase pilote couvre 24 semaines, structurées en 6 sprints de 4
          semaines chacun.
        </Body1>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1 rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm">
            <H5 className="!text-white/50">Phase pilote</H5>
            <p className="font-syne text-xl text-white">6 sprints · 24 semaines</p>
            <Micro1>Mois 1 → 6</Micro1>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl border-[1.5px] border-purple-pale/50 bg-purple-dark/25 p-6 text-center backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Beta fermée</H5>
            <p className="font-syne text-xl text-white">Segment restreint</p>
            <Micro1 className="!text-white/70">Mois 7 → 9</Micro1>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm">
            <H5 className="!text-white/50">Déploiement</H5>
            <p className="font-syne text-xl text-white">Progressif à grande échelle</p>
            <Micro1>Mois 10 → 12</Micro1>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {sprintCards.map((s) => (
            <DarkHeaderCard key={s.title} title={s.title}>
              <Body2>{s.objectif}</Body2>
              <div className="flex flex-col gap-1">
                <H5 className="!text-purple-pale/70">Actions</H5>
                <ul className="list-disc pl-5 text-base leading-6 text-white/70">
                  {s.actions.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <H5 className="!text-purple-pale/70">Livrables</H5>
                <TagRow tags={s.livrables} />
              </div>
            </DarkHeaderCard>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rituels.map((r) => (
            <div key={r.title} className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <H3 className="!text-xl !leading-normal">{r.title}</H3>
              <Body2>{r.body}</Body2>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div id="roadmap" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Roadmap</SectionTitle>
        <div className="flex w-full flex-col items-center gap-2 text-center">
          <H5 className="!text-purple-pale/70">Durée totale</H5>
          <p className="font-syne text-2xl text-white md:text-3xl">12 mois · 5 phases</p>
        </div>
        <Body1 className="w-full text-center font-light">
          Le projet s'inscrit dans une roadmap globale de 12 mois structurée en cinq phases progressives,
          allant de la recherche initiale jusqu'au déploiement progressif de la solution.
        </Body1>
        <img
          loading="lazy"
          decoding="async"
          src={roadmapMonthBar}
          alt="Répartition des 5 phases sur 12 mois"
          className="w-full rounded-xl"
        />
        <div className="flex w-full flex-col gap-4">
          <div
            ref={roadmapScrollRef}
            onScroll={updateRoadmapScrollState}
            className="hide-scrollbar h-[340px] w-full overflow-x-auto overflow-y-hidden rounded-xl"
          >
            <img
              loading="lazy"
              decoding="async"
              src={roadmapTimeline}
              alt="Roadmap"
              onLoad={updateRoadmapScrollState}
              className="h-[340px] w-auto max-w-none rounded-xl"
            />
          </div>
          <div
            onPointerDown={handleRoadmapTrackPointerDown}
            className="relative h-1.5 w-full cursor-pointer rounded-full bg-white/10"
          >
            <div
              className="absolute top-0 h-1.5 rounded-full bg-grey"
              style={{
                width: `${roadmapThumbRatio * 100}%`,
                left: `${roadmapScroll * (100 - roadmapThumbRatio * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Budget — reuses Fineline's 3-tier budget card recipe, extended to 7 roles */}
      <div id="budget" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Budget projet</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Le budget est estimé sur la base de l'équipe projet décrite précédemment, organisée en squad
          produit cross-fonctionnelle. Les coûts sont calculés en fonction du TJM (Taux Journalier Moyen)
          de chaque profil.
        </Body1>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {tjmCards.slice(0, 6).map((t) => (
            <TjmCard key={t.role} {...t} />
          ))}
        </div>
        <OrphanCentered>
          <TjmCard {...tjmCards[6]} />
        </OrphanCentered>

        <div className="flex w-full flex-col items-center gap-2 text-center">
          <p className="font-syne text-2xl text-white">Estimation globale : 300 000€ à 400 000€</p>
          <Micro1>12 mois · 5 phases · 7 profils</Micro1>
        </div>

        <div className="flex w-full flex-col gap-4">
          <H3 className="w-full text-center">Livrables inclus</H3>
          <ul className="flex w-full flex-col gap-3">
            {budgetLivrables.map((b) => (
              <li key={b.phase} className="flex flex-col gap-1 border-l-2 border-white/15 py-1 pl-4 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="shrink-0 font-syne text-purple-pale/70">{b.phase}</span>
                <Body2>{b.items.join(' · ')}</Body2>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* KPIs */}
      <div id="kpis" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>KPIs UX d'évaluation du projet</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Afin d'évaluer la pertinence de la solution avant son déploiement, plusieurs KPIs permettent de
          mesurer si la refonte répond à la problématique identifiée et améliore l'expérience utilisateur.
          Ces indicateurs s'appuient sur cinq dimensions clés en UX : découvrabilité, usabilité, utilité,
          satisfaction et adéquation problème-solution.
        </Body1>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {kpiDimensions.slice(0, 3).map((d) => (
            <DarkHeaderCard key={d.title} title={d.title}>
              <Body2>{d.objectif}</Body2>
              <div className="flex flex-col gap-1">
                <H5 className="!text-purple-pale/70">Indicateurs</H5>
                <ul className="list-disc pl-5 text-base leading-6 text-white/70">
                  {d.indicateurs.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              {d.taches && (
                <div className="mt-auto flex flex-col gap-2">
                  <H5 className="!text-purple-pale/70">Tâches testées</H5>
                  <TagRow tags={d.taches} />
                </div>
              )}
            </DarkHeaderCard>
          ))}
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {kpiDimensions.slice(3, 5).map((d) => (
            <DarkHeaderCard key={d.title} title={d.title}>
              <Body2>{d.objectif}</Body2>
              <div className="flex flex-col gap-1">
                <H5 className="!text-purple-pale/70">Indicateurs</H5>
                <ul className="list-disc pl-5 text-base leading-6 text-white/70">
                  {d.indicateurs.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </DarkHeaderCard>
          ))}
        </div>

        <div className="flex w-full flex-col gap-4 rounded-2xl border border-purple-pale/40 bg-purple-dark/25 p-6 backdrop-blur-sm">
          <H3 className="w-auto text-left !text-white">La proposition est pertinente si elle démontre</H3>
          <ul className="flex flex-col gap-2">
            {kpiChecklist.map((c) => (
              <li key={c} className="flex items-start gap-2 text-white/85">
                <CheckIcon className="mt-1 size-4 shrink-0 text-purple-pale" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div id="conclusion" className="flex flex-col items-start gap-8 p-8 md:py-16 md:pb-32 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Conclusion</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Malgré une offre multi-service riche, Spotify reste majoritairement perçu et utilisé comme une
          plateforme musicale, ce décalage entre l'offre réelle et l'expérience perçue limite l'exploration
          et freine l'engagement au-delà des habitudes.
          <br />
          <br />
          La solution proposée ne consiste pas à ajouter de nouvelles fonctionnalités, mais à restructurer
          l'expérience existante pour la rendre plus lisible, plus accessible et plus alignée avec les
          usages réels.
        </Body1>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
          {conclusionLevers.map((l) => (
            <div
              key={l.n}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur-sm"
            >
              <span className="font-syne text-2xl text-purple-pale/70">{l.n}</span>
              <Body2 className="!text-white">{l.label}</Body2>
            </div>
          ))}
        </div>

        <Body1 className="w-full text-center font-light">
          En s'appuyant sur quatre leviers complémentaires, ce projet transforme l'interface en un système
          multi-service capable de guider progressivement l'utilisateur vers une exploration plus riche de
          la plateforme.
          <br />
          <br />
          À court terme, cette refonte améliore la découvrabilité des contenus et rend les parcours plus
          fluides. À long terme, elle permet de construire une expérience plus cohérente, plus personnalisée
          et mieux intégrée dans le quotidien des utilisateurs.
        </Body1>

        <p className="w-full text-center font-syne text-xl font-medium text-white/85 md:text-2xl">
          « Ce projet montre que la valeur d'un produit ne repose pas uniquement sur ce qu'il propose, mais
          sur la manière dont il rend cette valeur visible, compréhensible et accessible à l'utilisateur. »
        </p>
      </div>

      <Contact transparent />

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox((lb) => (lb ? { ...lb, index } : lb))}
        />
      )}
    </div>
  )
}
