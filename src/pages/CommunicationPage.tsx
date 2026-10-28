import type { ReactNode } from 'react'
import Seo from '../components/Seo'
import Contact from '../components/Contact'
import CategoryTabs from '../components/CategoryTabs'
import TagRow from '../components/TagRow'
import { H1, H2, H3, H5, Body1, Body2 } from '../components/Typography'
import VideoCard, { cardFrame } from '../components/communication/VideoCard'
import Showreel from '../components/communication/Showreel'
import StoryPlayer from '../components/communication/StoryPlayer'
import { MediaImage } from '../components/communication/media'
import { intro, sectionsVideo, evenement, strategie } from '../data/communication'

/* Every piece of copy and media on this page lives in
   src/data/communication.ts: edit that file, not this one. */

const sectionPad = 'flex w-full flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]'

function SectionHeader({ surtitre, titre, texte }: { surtitre?: string; titre: string; texte?: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-4 text-center">
      {surtitre && <H5 className="!text-purple-pale/70">{surtitre}</H5>}
      <H2>{titre}</H2>
      {texte && <Body1 className="w-full font-light">{texte}</Body1>}
    </div>
  )
}

/** Vertical cards: 2 columns on mobile, 4 on desktop, rows centered. */
function VerticalRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4 lg:gap-6 [&>*]:w-[calc(50%-0.5rem)] [&>*]:lg:w-[calc(25%-1.125rem)]">
      {children}
    </div>
  )
}

function StrategyIcon({ name }: { name: 'calendrier' | 'formats' | 'veille' }) {
  const paths = {
    calendrier: 'M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3 8h2m4 0h2m-8 4h2',
    formats: 'M4 4h6v10H4zM14 4h6v6h-6zM14 14h6v6h-6zM4 18h6',
    veille: 'M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Zm9.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  }
  return (
    <span className="flex size-12 items-center justify-center rounded-2xl border border-purple-pale/40 bg-purple/20 text-purple-highlight">
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d={paths[name]} />
      </svg>
    </span>
  )
}

export default function CommunicationPage() {
  return (
    <div className="relative isolate">
      <Seo
        title="Communication & création de contenu"
        description="Séries, interviews, reels et stories réalisés pour les réseaux sociaux de HEIP et Sup de Pub pendant mon alternance chez OMNES Education."
        path="/communication"
      />

      {/* 1. Intro */}
      <section className="flex flex-col items-center gap-6 px-8 pt-8 text-center md:pt-16 md:px-[var(--nav-edge-w)]">
        <CategoryTabs />
        <H1 className="max-w-[900px]">{intro.titre}</H1>
        <Body1 className="w-full font-light">{intro.texte}</Body1>
        <TagRow tags={intro.infos} className="justify-center [&>span]:text-sm" />
      </section>

      {/* 2. Showreel */}
      <section className={sectionPad}>
        <Showreel />
      </section>

      {/* 3–5. Video sections */}
      {sectionsVideo.map((s) => (
        <section key={s.id} id={s.id} className={sectionPad}>
          <SectionHeader titre={s.titre} texte={s.texte} />
          <VerticalRow>
            {s.videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </VerticalRow>
          {s.videosLarges?.map((v) => (
            <div key={v.id} className="w-full">
              <VideoCard video={v} wide />
            </div>
          ))}
        </section>
      ))}

      {/* 6. Un événement, deux formats */}
      <section id="evenement" className={sectionPad}>
        <SectionHeader surtitre={evenement.surtitre} titre={evenement.titre} texte={evenement.texte} />
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-start md:justify-center md:gap-16">
          <StoryPlayer />
          <div className="w-[260px] sm:w-[300px]">
            <VideoCard video={evenement.microTrottoir} />
          </div>
        </div>
      </section>

      {/* 7. Stratégie & organisation */}
      <section id="strategie" className={sectionPad}>
        <SectionHeader titre={strategie.titre} />
        <div className="grid w-full gap-6 md:grid-cols-3">
          {strategie.cartes.map((c) => (
            <article key={c.titre} className={`flex flex-col gap-4 p-6 ${cardFrame}`}>
              <StrategyIcon name={c.icone} />
              <H3 className="!text-xl md:!text-2xl">{c.titre}</H3>
              <Body2>{c.texte}</Body2>
              {c.capture && <MediaImage {...c.capture} className="mt-auto" />}
            </article>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  )
}
