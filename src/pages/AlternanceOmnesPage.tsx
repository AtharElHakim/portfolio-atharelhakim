import { useEffect, useId, useState, type CSSProperties, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { focusRing } from '../components/Button'
import Seo from '../components/Seo'
import Contact from '../components/Contact'
import CaseStudyNav from '../components/CaseStudyNav'
import TagRow from '../components/TagRow'
import { H1, H2 as SectionTitle, H3, Body1, Micro1 } from '../components/Typography'
import { VideoMedia } from '../components/communication/VideoCard'
import { fr } from '../components/communication/media'
import { alternance, type Bloc, type Video } from '../data/communication'

/* Laid out like SpotifyPage: back button, centered column, side nav that
   follows the scroll (one entry per section). All copy
   and media live in src/data/communication.ts: edit that file, not this one. */

const SECTION = 'flex flex-col items-center gap-6 p-8 md:py-12 md:px-[var(--nav-edge-w)]'

const navSections = alternance.sections.map((s) => ({ id: s.id, label: s.titre }))

/** Desktop thumbnails per line: up to 6 on one line, more are split into two balanced lines (7 → 4 + 3). */
const perLine = (n: number) => (n <= 6 ? n : Math.ceil(n / 2))

/** A row holds a single format. 16:9 spans the column. 9:16 thumbnails are
 *  centred lines from md up; on mobile, a row of 3+ becomes one horizontal
 *  swipe strip (snap per video, the next one peeking at the edge) so a long
 *  series doesn't stack into several screens. */
function Rangee({ videos }: { videos: Video[] }) {
  const wide = videos[0]?.format === '16:9'
  const k = perLine(videos.length)
  const swipe = !wide && videos.length > 2
  const desktop = '[&>*]:max-w-[180px] md:max-w-[var(--row-max)] lg:[&>*]:w-[calc((100%-(var(--k)-1)*1rem)/var(--k))]'
  const mobile = swipe
    ? // Full-bleed strip: cancel the section's 32px side padding so cards slide to the screen edge.
      'max-md:-mx-8 max-md:w-[calc(100%+4rem)] max-md:flex-nowrap max-md:justify-start max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:scroll-px-8 max-md:px-8 max-md:pb-2 max-md:[scrollbar-width:none] max-md:[&>*]:w-[42%] max-md:[&>*]:shrink-0 max-md:[&>*]:snap-start md:[&>*]:w-[calc(50%-0.5rem)]'
    : '[&>*]:w-[calc(50%-0.5rem)]'
  return (
    <div
      style={wide ? undefined : ({ '--k': k, '--row-max': `calc(${k} * 180px + ${k - 1}rem)` } as CSSProperties)}
      className={`flex w-full flex-wrap justify-center gap-x-4 gap-y-8 ${
        wide ? '[&>*]:w-full [&>*]:max-w-[820px]' : `${mobile} ${desktop}`
      }`}
    >
      {videos.map((v) => (
        <VideoMedia key={v.id} video={v} />
      ))}
    </div>
  )
}

/** Mobile only, for blocks with several rows (MSc ERCI): every video on one
 *  swipe strip at a shared height, so the 16:9 card is simply wider. */
function MixedStrip({ videos }: { videos: Video[] }) {
  return (
    <div className="-mx-8 flex w-[calc(100%+4rem)] snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-8 px-8 pb-2 [scrollbar-width:none] md:hidden">
      {videos.map((v) => (
        <div key={v.id} className={`shrink-0 snap-start ${v.format === '16:9' ? 'w-[min(92vw,440px)]' : 'w-[calc(min(92vw,440px)*81/256)]'}`}>
          <VideoMedia video={v} />
        </div>
      ))}
    </div>
  )
}

/** The intro is folded on every screen size so it doesn't push the videos down. */
function IntroFold({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className={`inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-full px-3 text-sm text-purple-pale transition-colors hover:text-white ${focusRing}`}
      >
        {open ? 'Masquer le contexte' : 'Lire le contexte'}
        <svg className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div id={id} className={`w-full flex-col items-center gap-4 pb-2 ${open ? 'flex' : 'hidden'}`}>
        {children}
      </div>
    </>
  )
}

function BlocView({ bloc, numero }: { bloc: Bloc; numero: number }) {
  const mixed = bloc.rangees.length > 1
  return (
    <div id={bloc.id} className="flex w-full scroll-mt-28 flex-col items-center gap-4 text-center">
      {/* Title + its « école · plateforme » line read as one unit: 8px apart, 16px before the text. */}
      <div className="flex flex-col items-center gap-2">
        <H3 className="!text-2xl md:!text-3xl">
          <span className="mr-2 text-purple-pale/70">{numero}.</span>
          {bloc.titre}
        </H3>
        <Micro1>{bloc.sousLigne}</Micro1>
      </div>
      {/* Phones: videos first, text under them, so the first row shows on opening. */}
      <Body1 className="w-full font-light max-md:order-last">{fr(bloc.texte)}</Body1>
      {mixed && (
        <div className="w-full md:hidden">
          <MixedStrip videos={bloc.rangees.flat()} />
        </div>
      )}
      <div className={`w-full flex-col items-center gap-10 ${mixed ? 'hidden md:flex' : 'flex'}`}>
        {bloc.rangees.map((r) => (
          <Rangee key={r[0].id} videos={r} />
        ))}
      </div>
    </div>
  )
}

export default function AlternanceOmnesPage() {
  // The page is lazy-loaded, so a link to one of its blocks (homepage teaser)
  // arrives before the block exists: scroll to it once rendered.
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
  }, [hash])

  return (
    <div className="relative isolate">
      <Seo
        title={`${alternance.titre} · Projet Communication`}
        description={alternance.sousTitre.replace('\n', ' ')}
        path={`/communication/${alternance.slug}`}
      />
      <CaseStudyNav sections={navSections} backTo="/communication" />

      {/* Hero */}
      {/* Compact on purpose: the first videos must show as soon as the page opens. */}
      <div id="intro" className="flex flex-col items-center px-8 pt-1 md:px-[var(--nav-edge-w)] md:pt-0">
        <div className="flex w-full flex-col items-center gap-2 text-center">
          {/* The role is the headline, the alternance name sits under it. */}
          <H1 className="whitespace-pre-line !text-[28px] md:whitespace-normal md:!text-4xl md:!leading-[44px]">{alternance.sousTitre}</H1>
          <Body1 className="!text-white/70 font-light">{alternance.titre} (HEIP et Sup&nbsp;de&nbsp;Pub)</Body1>
          <TagRow tags={alternance.infos} className="hidden justify-center md:flex [&>span]:text-sm" />
          <IntroFold>
            {/* Mobile: one centred line per info. The bullet is inline with the text
                (not a flex sibling), so it stays next to the first word even when
                the platforms line wraps. */}
            <div className="flex flex-col items-center gap-1 text-sm text-white/60 md:hidden">
              {alternance.infos.map((t) => (
                <span key={t} className="text-center">
                  <span aria-hidden className="mr-1.5 inline-block size-1.5 rounded-full bg-purple-pale/70 align-middle" />
                  {t}
                </span>
              ))}
            </div>
            <Body1 className="w-full text-center !text-white font-light">{fr(alternance.intro)}</Body1>
          </IntroFold>
        </div>
      </div>

      {alternance.sections.map((s, i) => (
        <div key={s.id} id={s.id} className={`${SECTION} ${i === 0 ? '!pt-10 md:!pt-14' : ''}`}>
          <div className="flex w-full flex-col items-center gap-2 text-center">
            <SectionTitle className="!text-purple-pale">{s.titre}</SectionTitle>
            <Body1 className="w-full font-light">{fr(s.texte)}</Body1>
          </div>
          <div className="flex w-full flex-col items-center gap-20">
            {s.blocs.map((b, i) => (
              <BlocView key={b.id} bloc={b} numero={i + 1} />
            ))}
          </div>
        </div>
      ))}

      <div className="pb-8 md:pb-12" />
      <Contact transparent />
    </div>
  )
}
