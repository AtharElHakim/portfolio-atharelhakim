import { useEffect, type CSSProperties } from 'react'
import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import Contact from '../components/Contact'
import CaseStudyNav from '../components/CaseStudyNav'
import TagRow from '../components/TagRow'
import { H1, H2 as SectionTitle, H3, Body1, Micro1 } from '../components/Typography'
import { VideoMedia } from '../components/communication/VideoCard'
import { RolePills, fr } from '../components/communication/media'
import { alternance, type Bloc, type Video } from '../data/communication'

/* Laid out like SpotifyPage: back button, centered column, side nav that
   follows the scroll (one entry per section). All copy
   and media live in src/data/communication.ts: edit that file, not this one. */

const SECTION = 'flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]'

const navSections = alternance.sections.map((s) => ({ id: s.id, label: s.titre }))

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

function BlocView({ bloc }: { bloc: Bloc }) {
  return (
    <div id={bloc.id} className="flex w-full scroll-mt-28 flex-col items-center gap-4 text-center">
      <H3 className="!text-2xl md:!text-3xl">{bloc.titre}</H3>
      <Micro1>{bloc.sousLigne}</Micro1>
      <RolePills roles={bloc.roles} className="justify-center" />
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
      <CaseStudyNav sections={navSections} backTo="/communication" labelMaxWidth="max-w-[160px]" />

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

      {alternance.sections.map((s) => (
        <div key={s.id} id={s.id} className={SECTION}>
          <div className="flex w-full flex-col items-center gap-4 text-center">
            <SectionTitle>{s.titre}</SectionTitle>
            <Body1 className="w-full font-light">{fr(s.texte)}</Body1>
          </div>
          <div className="flex w-full flex-col items-center gap-20">
            {s.blocs.map((b) => (
              <BlocView key={b.id} bloc={b} />
            ))}
          </div>
        </div>
      ))}

      <div className="pb-16 md:pb-24" />
      <Contact transparent />
    </div>
  )
}
