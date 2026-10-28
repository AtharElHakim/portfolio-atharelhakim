import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import Contact from '../components/Contact'
import CaseStudyNav from '../components/CaseStudyNav'
import { focusRing } from '../components/Button'
import TagRow from '../components/TagRow'
import { H1, H2 as SectionTitle, H3, Body1, Micro1 } from '../components/Typography'
import { VideoMedia } from '../components/communication/VideoCard'
import { fr } from '../components/communication/media'
import { alternance, type Bloc, type Video } from '../data/communication'

/* Laid out like SpotifyPage: back button, centered column. Instead of the
   side nav, a sticky pill bar (same look as CategoryTabs) lists the 4
   positions and follows the scroll. All copy and media live in
   src/data/communication.ts: edit that file, not this one. */

const SECTION = 'flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]'

/** Sticky bar of the 4 positions: highlights the section in view, click scrolls to it. */
function PositionsNav() {
  const [activeId, setActiveId] = useState(alternance.sections[0].id)
  const navRef = useRef<HTMLElement>(null)

  // On narrow screens the bar scrolls sideways: keep the active tab visible.
  useEffect(() => {
    const nav = navRef.current
    const tab = nav?.querySelector<HTMLElement>('[aria-current="true"]')
    if (nav && tab) nav.scrollTo({ left: tab.offsetLeft - (nav.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' })
  }, [activeId])

  useEffect(() => {
    const els = alternance.sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActiveId(e.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-[8.5rem] z-10 flex justify-center px-4 md:top-20 md:px-[var(--nav-edge-w)]">
      <nav
        ref={navRef}
        aria-label="Postes"
        className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/15 bg-black-soft/90 p-1 backdrop-blur-[20px] [scrollbar-width:none]"
      >
        {alternance.sections.map((s) => {
          const active = s.id === activeId
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active ? 'true' : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 md:px-5 md:text-base ${focusRing} ${
                active ? 'bg-purple text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {s.titre}
            </a>
          )
        })}
      </nav>
    </div>
  )
}

/** Desktop thumbnails per line: up to 6 on one line, more are split into two balanced lines (7 → 4 + 3). */
const perLine = (n: number) => (n <= 6 ? n : Math.ceil(n / 2))

/** A row holds a single format: 9:16 thumbnails stay centered (2 per line on mobile), 16:9 spans the column. */
function Rangee({ videos }: { videos: Video[] }) {
  const wide = videos[0]?.format === '16:9'
  const k = perLine(videos.length)
  return (
    <div
      style={wide ? undefined : ({ '--k': k, maxWidth: `calc(${k} * 180px + ${k - 1}rem)` } as CSSProperties)}
      className={`flex w-full flex-wrap justify-center gap-x-4 gap-y-8 ${
        wide
          ? '[&>*]:w-full [&>*]:max-w-[820px]'
          : '[&>*]:w-[calc(50%-0.5rem)] [&>*]:max-w-[180px] lg:[&>*]:w-[calc((100%-(var(--k)-1)*1rem)/var(--k))]'
      }`}
    >
      {videos.map((v) => (
        <VideoMedia key={v.id} video={v} />
      ))}
    </div>
  )
}

function BlocView({ bloc, numero }: { bloc: Bloc; numero: number }) {
  return (
    <div id={bloc.id} className="flex w-full scroll-mt-44 flex-col items-center gap-4 text-center">
      <H3 className="!text-2xl md:!text-3xl">
        <span className="mr-2 text-purple-pale/70">{numero}.</span>
        {bloc.titre}
      </H3>
      <Micro1>{bloc.sousLigne}</Micro1>
      <Body1 className="w-full font-light">{fr(bloc.texte)}</Body1>
      <div className="mt-4 flex w-full flex-col items-center gap-10">
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
        description={alternance.sousTitre}
        path={`/communication/${alternance.slug}`}
      />
      <CaseStudyNav sections={[]} backTo="/communication" />

      {/* Hero */}
      <div id="intro" className="flex flex-col items-center gap-6 px-8 pb-8 pt-4 md:pb-16 md:pt-10 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <H1 className="md:!text-5xl md:!leading-[52.8px]">{alternance.titre}</H1>
          <Body1 className="!text-white/70 font-light">{alternance.sousTitre}</Body1>
          <TagRow tags={alternance.infos} className="justify-center [&>span]:text-sm" />
          <div className="mt-4 w-full border-t border-white/10 pt-8">
            <Body1 className="w-full text-center !text-white font-light">{fr(alternance.intro)}</Body1>
          </div>
        </div>
      </div>

      <PositionsNav />

      {alternance.sections.map((s) => (
        <div key={s.id} id={s.id} className={`${SECTION} scroll-mt-32`}>
          <div className="flex w-full flex-col items-center gap-4 text-center">
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

      <div className="pb-16 md:pb-24" />
      <Contact transparent />
    </div>
  )
}
