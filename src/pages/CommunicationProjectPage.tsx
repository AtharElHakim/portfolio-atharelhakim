import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Contact from '../components/Contact'
import CaseStudyNav from '../components/CaseStudyNav'
import { focusRing } from '../components/Button'
import { H1, H2 as SectionTitle, H3, H5, Body1, Micro1 } from '../components/Typography'
import VideoCard, { VideoMedia, cardFrame } from '../components/communication/VideoCard'
import StoryPlayer from '../components/communication/StoryPlayer'
import { RolePills } from '../components/communication/media'
import { projetsCom, type ProjetTextes } from '../data/communication'
import NotFoundPage from './NotFoundPage'

/* One template for the 8 Communication projects (/communication/:slug),
   laid out like the UX/UI case studies (Par ici): back button, hero,
   side nav, sections, next project. All copy lives in
   src/data/communication.ts: edit that file, not this one. */

const SECTION = 'flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'contexte', label: 'Contexte' },
  { id: 'mon-role', label: 'Mon rôle' },
  { id: 'concept', label: 'Concept' },
  { id: 'contenus', label: 'Contenus' },
  { id: 'coulisses', label: 'Coulisses' },
  { id: 'resultat', label: 'Résultat' },
]

/** What each empty text is meant to cover, shown inside its "[À rédiger]" box. */
const HINTS: Record<keyof ProjetTextes, string> = {
  overview: "De quoi il s'agit, en 2-3 phrases.",
  contexte: "L'école, la cible, l'objectif.",
  monRole: "Ce que j'ai fait, ce que l'équipe a fait.",
  concept: "L'idée, l'accroche, le format, pourquoi ce choix.",
  coulisses: 'Photos de tournage, script, storyboard (optionnel).',
  resultat: 'Résultat qualitatif, sans chiffres.',
}

function ARediger({ field }: { field: keyof ProjetTextes }) {
  return (
    <div className="w-full max-w-[900px] rounded-2xl border border-dashed border-purple-pale/50 bg-purple-dark/20 p-6 text-center">
      <p className="font-medium text-purple-highlight">[À rédiger]</p>
      <p className="mt-1 text-sm text-white/55">{HINTS[field]}</p>
    </div>
  )
}

function Texte({ textes, field }: { textes: ProjetTextes; field: keyof ProjetTextes }) {
  const value = textes[field]
  return value ? (
    <Body1 className="w-full max-w-[900px] text-center font-light">{value}</Body1>
  ) : (
    <ARediger field={field} />
  )
}

function ArrowRight() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function CommunicationProjectPage() {
  const { slug } = useParams()
  const index = projetsCom.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFoundPage />

  const projet = projetsCom[index]
  const suivant = projetsCom[(index + 1) % projetsCom.length]
  const { couverture, textes } = projet
  const infos = [
    { label: 'École', value: projet.ecole },
    { label: 'Plateformes', value: projet.plateformes },
    { label: 'Période', value: projet.periode || '[À préciser]' },
    { label: 'Format', value: projet.format },
  ]

  return (
    <div className="relative isolate">
      <Seo
        title={`${projet.titre} · Projet Communication`}
        description={projet.resume}
        path={`/communication/${projet.slug}`}
      />
      <CaseStudyNav key={projet.slug} sections={SECTIONS} backTo="/communication" />

      {/* ============ Hero ============ */}
      <div id="hero" className="flex flex-col items-center gap-6 px-8 pb-8 pt-4 md:pb-16 md:pt-10 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <H1 className="md:!text-5xl md:!leading-[52.8px]">{projet.titre}</H1>
          <Body1 className="!text-white/70 font-light">{projet.resume}</Body1>
        </div>
        <dl className="grid w-full max-w-[820px] grid-cols-2 gap-4 text-center md:grid-cols-4">
          {infos.map((i) => (
            <div key={i.label} className="flex flex-col items-center gap-1">
              <dt>
                <H5 className="!text-sm !text-purple-pale/70">{i.label}</H5>
              </dt>
              <dd className={`text-base ${i.value.startsWith('[') ? 'text-purple-highlight' : 'text-white'}`}>{i.value}</dd>
            </div>
          ))}
        </dl>
        <RolePills roles={projet.roles} />
        <div className={couverture.format === '16:9' ? 'w-full max-w-[820px]' : 'w-[240px] sm:w-[280px]'}>
          <VideoMedia video={couverture} />
        </div>
      </div>

      {/* ============ Overview ============ */}
      <div id="overview" className={SECTION}>
        <SectionTitle>Overview</SectionTitle>
        <Texte textes={textes} field="overview" />
      </div>

      {/* ============ Contexte ============ */}
      <div id="contexte" className={SECTION}>
        <SectionTitle>Contexte</SectionTitle>
        <Texte textes={textes} field="contexte" />
      </div>

      {/* ============ Mon rôle ============ */}
      <div id="mon-role" className={SECTION}>
        <SectionTitle>Mon rôle</SectionTitle>
        <RolePills roles={projet.roles} />
        <Texte textes={textes} field="monRole" />
      </div>

      {/* ============ Concept ============ */}
      <div id="concept" className={SECTION}>
        <SectionTitle>Concept</SectionTitle>
        <Texte textes={textes} field="concept" />
      </div>

      {/* ============ Contenus ============ */}
      <div id="contenus" className={SECTION}>
        <SectionTitle>Contenus</SectionTitle>
        {projet.videosLarges?.map((v) => (
          <div key={v.id} className="w-full">
            <VideoCard video={v} wide />
          </div>
        ))}
        <div className="flex w-full flex-wrap items-start justify-center gap-4 lg:gap-6 [&>*]:w-[calc(50%-0.5rem)] [&>*]:lg:w-[calc(25%-1.125rem)]">
          {projet.avecStory && (
            <div className="!w-full sm:!w-auto">
              <StoryPlayer />
            </div>
          )}
          {projet.videos.map((v) => (
            <VideoCard key={v.id} video={v} episodesOpenByDefault />
          ))}
        </div>
      </div>

      {/* ============ Coulisses ============ */}
      <div id="coulisses" className={SECTION}>
        <SectionTitle>Coulisses</SectionTitle>
        <Texte textes={textes} field="coulisses" />
      </div>

      {/* ============ Résultat ============ */}
      <div id="resultat" className={SECTION}>
        <SectionTitle>Résultat</SectionTitle>
        <Texte textes={textes} field="resultat" />
      </div>

      {/* ============ Projet suivant ============ */}
      <div className="flex flex-col items-center px-8 pb-16 md:pb-32 md:px-[var(--nav-edge-w)]">
        <Link
          to={`/communication/${suivant.slug}`}
          className={`group flex w-full max-w-[820px] items-center justify-between gap-6 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-pale/80 md:p-8 ${cardFrame} ${focusRing}`}
        >
          <div className="flex flex-col gap-1">
            <Micro1>Projet suivant</Micro1>
            <H3 className="!text-2xl md:!text-3xl">{suivant.titre}</H3>
          </div>
          <span className="text-white transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight />
          </span>
        </Link>
      </div>

      <Contact transparent />
    </div>
  )
}
