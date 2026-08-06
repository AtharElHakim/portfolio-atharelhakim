import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Contact from '../components/Contact'
import Lightbox from '../components/Lightbox'
import CaseStudyNav from '../components/CaseStudyNav'
import PillButton from '../components/PillButton'
import logoMark from '../assets/fineline/logo-mark.png'
import ancienSite from '../assets/fineline/ancien-site.png'
import productionHouse from '../assets/fineline/production-house.png'
import currentWebsite from '../assets/fineline/current-website.png'
import playIcon from '../assets/fineline/play-icon.svg'
import oldWebsiteVideo from '../assets/fineline/old-website.mp4'
import oldWebsiteThumb from '../assets/fineline/old-website-thumb.jpg'
import checkIcon from '../assets/fineline/icon-check.svg'
import xIcon from '../assets/fineline/icon-x.svg'
import auditStrength1 from '../assets/fineline/audit-strength-1.png'
import auditStrength2 from '../assets/fineline/audit-strength-2.png'
import auditStrength3 from '../assets/fineline/audit-strength-3.png'
import auditWeak1 from '../assets/fineline/audit-weak-1.png'
import auditWeak2 from '../assets/fineline/audit-weak-2.png'
import auditWeak3 from '../assets/fineline/audit-weak-3.png'
import auditWeak4 from '../assets/fineline/audit-weak-4.png'
import auditWeak5 from '../assets/fineline/audit-weak-5.png'
import auditWeak6 from '../assets/fineline/audit-weak-6.png'
import auditWeak7 from '../assets/fineline/audit-weak-7.png'
import competitorNab from '../assets/fineline/competitor-nab.png'
import competitorForward from '../assets/fineline/competitor-forward.jpg'
import benchmarkChart from '../assets/fineline/benchmark-chart.png'
import empathyMap from '../assets/fineline/empathy-map.png'
import personaTania from '../assets/fineline/persona-tania.png'
import personaMoodboard from '../assets/fineline/persona-moodboard.png'
import brandPlatform from '../assets/fineline/brand-platform.png'
import da1 from '../assets/fineline/da-1.png'
import da2 from '../assets/fineline/da-2.png'
import wireframeWork from '../assets/fineline/wireframe-work.png'
import wireframeAbout from '../assets/fineline/wireframe-about.png'
import wireframeContact from '../assets/fineline/wireframe-contact.png'
import roadmapTimeline from '../assets/fineline/roadmap-timeline.png'
import surveyIcons from '../assets/fineline/survey-icons.svg'
import interviewIcons from '../assets/fineline/interview-icons.svg'
import {
  H1,
  H2 as SectionTitle,
  H3,
  H4,
  H5,
  Body1,
  Body2,
  Micro1,
} from '../components/Typography'

function AttitudeScale({
  left,
  right,
  position,
}: {
  left: string
  right: string
  position: number
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-24 shrink-0 text-right text-base leading-6 font-light text-white">
        {left}
      </span>
      <div className="relative flex h-2.5 flex-1 min-w-[100px] items-center">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 241 15"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0.292893 6.65617C-0.0976311 7.0467 -0.0976311 7.67986 0.292893 8.07039L6.65685 14.4343C7.04738 14.8249 7.68054 14.8249 8.07107 14.4343C8.46159 14.0438 8.46159 13.4107 8.07107 13.0201L2.41421 7.36328L8.07107 1.70643C8.46159 1.3159 8.46159 0.682738 8.07107 0.292213C7.68054 -0.0983109 7.04738 -0.0983109 6.65685 0.292213L0.292893 6.65617ZM240.707 8.07039C241.098 7.67986 241.098 7.0467 240.707 6.65617L234.343 0.292213C233.953 -0.0983109 233.319 -0.0983109 232.929 0.292213C232.538 0.682738 232.538 1.3159 232.929 1.70643L238.586 7.36328L232.929 13.0201C232.538 13.4107 232.538 14.0438 232.929 14.4343C233.319 14.8249 233.953 14.8249 234.343 14.4343L240.707 8.07039ZM1 7.36328V8.36328H240V7.36328V6.36328H1V7.36328Z"
            fill="var(--color-grey)"
          />
        </svg>
        <span
          className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85"
          style={{ left: `${position}%` }}
        />
      </div>
      <span className="w-24 shrink-0 text-left text-base leading-6 font-light text-white">
        {right}
      </span>
    </div>
  )
}

function BulletPoint({
  title,
  body,
  compact,
}: {
  title: string
  body: string
  compact?: boolean
}) {
  return (
    <div className="flex w-full items-start gap-4 border-l-2 border-white/15 pl-4">
      <p className="flex-1">
        <span
          className={`block text-white/85 ${compact ? 'text-base leading-6' : 'text-xl leading-7'}`}
        >
          {title}
        </span>
        <span
          className={`block text-white/70 ${compact ? 'text-sm leading-5' : 'text-lg leading-7'}`}
        >
          {body}
        </span>
      </p>
    </div>
  )
}

const wireframes = [
  { img: wireframeWork, label: 'Page "WORK"' },
  { img: wireframeAbout, label: 'Page "ABOUT"' },
  { img: wireframeContact, label: 'Page "CONTACT"' },
]

const auditStrengths = [auditStrength1, auditStrength2, auditStrength3]

const auditWeaknesses = [
  auditWeak1,
  auditWeak5,
  auditWeak2,
  auditWeak6,
  auditWeak3,
  auditWeak4,
  auditWeak7,
]

const directionArtistique = [da1, da2]

export default function FinelinePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [strengthIndex, setStrengthIndex] = useState<number | null>(null)
  const [weaknessIndex, setWeaknessIndex] = useState<number | null>(null)
  const [daIndex, setDaIndex] = useState<number | null>(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)
  const roadmapScrollRef = useRef<HTMLDivElement>(null)
  const [roadmapScroll, setRoadmapScroll] = useState(0)
  const [roadmapThumbRatio, setRoadmapThumbRatio] = useState(1)

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
  const [singleImage, setSingleImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  return (
    <div className="relative isolate">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[1100px] max-w-[140vw] -translate-x-1/2 -translate-y-1/3 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-purple-light) 0%, var(--color-purple) 45%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute left-[-10%] top-0 -z-10 h-[340px] w-[700px] max-w-[70vw] -translate-y-1/3 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-purple-light) 0%, var(--color-purple) 45%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-0 -z-10 h-[340px] w-[700px] max-w-[70vw] -translate-y-1/3 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-purple-light) 0%, var(--color-purple) 45%, transparent 75%)',
        }}
      />
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'Overview' },
          { id: 'contexte', label: 'Contexte' },
          { id: 'probleme', label: 'Problème' },
          { id: 'audit', label: 'Audit' },
          { id: 'benchmark', label: 'Benchmark' },
          { id: 'hypotheses', label: 'Hypothèses' },
          { id: 'recherche', label: 'Recherche Primaire' },
          { id: 'empathy-map', label: 'Empathy Map' },
          { id: 'synthese', label: 'Synthèse' },
          { id: 'cible', label: 'Cible' },
          { id: 'plateforme', label: 'Plateforme de Marque' },
          { id: 'direction-artistique', label: 'Direction Artistique' },
          { id: 'prototype', label: 'Prototype' },
          { id: 'budget', label: 'Budget' },
          { id: 'roadmap', label: 'Roadmap' },
          { id: 'conclusion', label: 'Conclusion' },
        ]}
      />

      {/* Header */}
      <div id="overview" className="flex flex-col items-center gap-6 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={logoMark} alt="Fine Line" className="h-8" />
          <H1 className="md:!text-5xl md:!leading-[56px]">Fine Line Production</H1>

          <div className="group/hero relative w-full max-w-[820px] overflow-hidden rounded-2xl border border-white/15 bg-black-soft shadow-[0_20px_60px_color-mix(in srgb, var(--color-black-ink) 50%, transparent)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-4">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <img src={ancienSite} alt="Ancien site Fine Line" className="w-full" />
            <div className="pointer-events-none absolute inset-0 top-[45px] flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/hero:bg-black/50">
              <PillButton
                href="https://preview.webflow.com/preview/finelinelb-f6eecdd75ed16d10638c2e844afe?utm_medium=preview_link&utm_source=designer&utm_content=finelinelb-f6eecdd75ed16d10638c2e844afe&preview=b67d353f0c30868940d4ff182615a6a4&locale=en&workflow=preview"
                className="pointer-events-auto opacity-0 group-hover/hero:opacity-100"
              >
                Prototype
              </PillButton>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-start justify-center gap-10 border-t border-white/10 pt-8 text-left">
            <div className="flex max-w-[320px] flex-col gap-2">
              <H5>Overview</H5>
              <Body2 className="!text-white font-light">
                Refonte complète du site web de Fine Line Production, une
                société de production créative libanaise dont l'ancien site
                avait été désactivé. De la recherche UX au design final, j'ai
                mené le projet en autonomie pour concevoir un site moderne et
                fidèle à l'identité de l'agence.
              </Body2>
            </div>
            <div className="flex flex-col gap-2">
              <H5>Mon Rôle</H5>
              <ul className="list-none font-light text-lg leading-6 text-white">
                <li>Audit du site existant</li>
                <li>Benchmark concurrentiel</li>
                <li>Recherches quantitatives et qualitatives</li>
                <li>Analyse des données</li>
                <li>Conception de la direction artistique</li>
                <li>Prototypage sur Webflow</li>
                <li>Roadmap</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <H5>Outils</H5>
                <ul className="list-none font-light text-lg leading-6 text-white">
                  <li>Webflow</li>
                  <li>Google Drive</li>
                  <li>Teams</li>
                  <li>Trello</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <H5>Année</H5>
                <Body2 className="!text-white font-light">
                  2025
                </Body2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contexte */}
      <div
        id="contexte"
        className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]"
      >
        <div className="flex w-full flex-col items-center gap-8">
          <SectionTitle>Contexte</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Fine Line Production est une société de production créative basée
            au Liban depuis 2017. Elle collabore avec des ONG et des marques
            de grande consommation pour concevoir des récits visuels
            percutants, en prenant en charge l'ensemble du processus de la
            conception à la postproduction.
          </Body1>
        </div>
        <div
          className="flex w-full max-w-[500px] items-center justify-center rounded-2xl p-10"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, var(--color-purple) 0%, var(--color-purple-dark) 55%, var(--color-purple-void) 100%)',
          }}
        >
          <img
            src={productionHouse}
            alt="Fine Line Production"
            className="w-full max-w-[280px]"
          />
        </div>
      </div>

      {/* Problème */}
      <div id="probleme" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-8">
          <SectionTitle>Problème</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Fine Line Production disposait d'un site WordPress qui ne
            reflétait plus l'identité de l'agence : visuellement daté,
            difficile à mettre à jour, en décalage avec ses projets récents.
            L'équipe a choisi de le désactiver. À la place, une page
            temporaire propose uniquement de télécharger le company profile
            ou de contacter l'équipe par email.
            <br />
            <br />
            Mon rôle : mener une refonte complète pour redonner au site
            cohérence, clarté et impact.
          </Body1>
        </div>
        <div className="flex w-full flex-wrap items-stretch justify-center gap-4 py-4">
          <div className="flex min-w-[320px] max-w-[600px] flex-1 flex-col items-center gap-4 rounded-2xl border border-white/15 p-4 backdrop-blur-sm">
            <button
              type="button"
              onClick={() =>
                setSingleImage({ src: currentWebsite, alt: 'Site web actuel' })
              }
              className="group/img relative w-full cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={currentWebsite}
                alt="Site web actuel"
                className="aspect-[576/367] w-full rounded-xl object-cover transition-transform duration-300 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/35 group-hover/img:opacity-100">
                <svg
                  className="size-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <p className="font-syne text-lg leading-8 text-white">
              Site Web Actuel
            </p>
          </div>
          <div className="flex min-w-[320px] max-w-[600px] flex-1 flex-col items-center gap-4 rounded-2xl border border-white/15 p-4 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group/video relative flex aspect-[576/367] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-purple-pale/40 transition-all duration-300 hover:border-purple-pale/70"
            >
              <img
                src={oldWebsiteThumb}
                alt=""
                className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover/video:scale-105"
              />
              <div className="absolute inset-0 bg-black/35 transition-all duration-300 group-hover/video:bg-black/40" />
              <img
                src={playIcon}
                alt=""
                className="relative h-20 w-20 transition-transform duration-300 group-hover/video:scale-110"
              />
            </button>
            <p className="font-syne text-lg leading-8 text-white">
              Vidéo de l'Ancien Site Web
            </p>
          </div>
        </div>
      </div>

      {/* Audit */}
      <div id="audit" className="flex flex-col items-center gap-14 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-8">
          <H4>Recherche Secondaire</H4>
          <SectionTitle>Audit</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Pour analyser l'ancien site de Fine Line, j'ai réalisé un audit UX
            basé sur les critères ergonomiques de{' '}
            <span className="font-semibold">Bastien &amp; Scapin</span>.
            Cette méthode m'a permis d'évaluer la navigation, la lisibilité,
            la cohérence visuelle et l'efficacité globale de l'interface,
            afin d'identifier ses points forts et ses axes d'amélioration.
          </Body1>
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div
            className="flex w-full flex-col items-start gap-6 rounded-3xl border-[1.5px] border-success/50 p-6 backdrop-blur-[20px] transition-all duration-300"
            style={{
              background: 'color-mix(in oklab, var(--color-success) 35%, transparent)',
              boxShadow:
                'inset 0 1px 1px color-mix(in srgb, var(--color-success-bg) 40%, transparent), inset 0 -1px 12px color-mix(in oklab, var(--color-success) 15%, transparent), 0 0 0 1px color-mix(in oklab, var(--color-success) 20%, transparent), 0 8px 30px color-mix(in oklab, var(--color-success) 35%, transparent)',
            }}
          >
            <H4 className="flex items-center justify-center gap-2">
              <img src={checkIcon} alt="" className="h-5 w-4" />
              Point Forts
            </H4>
            <div
              className="flex w-full flex-wrap items-center justify-center gap-4 rounded-lg border border-success/40 p-4"
              style={{
                background: 'color-mix(in oklab, var(--color-success) 25%, transparent)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {auditStrengths.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setStrengthIndex(i)}
                  className="group/img relative h-32 w-48 shrink-0 cursor-pointer overflow-hidden rounded-xl"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/35 group-hover/img:opacity-100">
                    <svg
                      className="size-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <BulletPoint
                compact
                title="Navigation simple et directe"
                body="La Nav Bar comportait peu d'éléments, ce qui rendait la structure facile à comprendre"
              />
              <BulletPoint
                compact
                title="Système de tri de projets structuré"
                body='La page "Our Work" proposait des catégories claires permettant de filtrer et consulter facilement les projets'
              />
              <BulletPoint
                compact
                title="Identité de marque cohérente"
                body="Les couleurs de la marque étaient utilisées de manière constante, renforçant la reconnaissance visuelle"
              />
            </div>
          </div>
          <div
            className="flex w-full flex-col items-start gap-6 rounded-3xl border-[1.5px] border-danger/50 p-6 backdrop-blur-[20px] transition-all duration-300"
            style={{
              background: 'color-mix(in oklab, var(--color-danger) 35%, transparent)',
              boxShadow:
                'inset 0 1px 1px color-mix(in srgb, var(--color-danger-bg) 40%, transparent), inset 0 -1px 12px color-mix(in oklab, var(--color-danger) 15%, transparent), 0 0 0 1px color-mix(in oklab, var(--color-danger) 20%, transparent), 0 8px 30px color-mix(in oklab, var(--color-danger) 35%, transparent)',
            }}
          >
            <H4 className="flex items-center justify-center gap-2">
              <img src={xIcon} alt="" className="h-5 w-4" />
              Point Faible
            </H4>
            <div
              className="flex w-full flex-col gap-4 rounded-lg border border-danger/40 p-4"
              style={{
                background: 'color-mix(in oklab, var(--color-danger) 25%, transparent)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex w-full flex-wrap items-center justify-center gap-4">
                {[0, 1, 2, 3, 6].map((i) => (
                  <button
                    key={auditWeaknesses[i]}
                    type="button"
                    onClick={() => setWeaknessIndex(i)}
                    className="group/img relative h-28 w-40 shrink-0 cursor-pointer overflow-hidden rounded-xl"
                  >
                    <img
                      src={auditWeaknesses[i]}
                      alt=""
                      className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/35 group-hover/img:opacity-100">
                      <svg
                        className="size-6 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex w-full flex-col gap-4">
                {[4, 5].map((i) => (
                  <button
                    key={auditWeaknesses[i]}
                    type="button"
                    onClick={() => setWeaknessIndex(i)}
                    className="group/img relative w-full cursor-pointer overflow-hidden rounded-xl"
                  >
                    <img
                      src={auditWeaknesses[i]}
                      alt=""
                      className="w-full rounded-xl transition-transform duration-300 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/35 group-hover/img:opacity-100">
                      <svg
                        className="size-6 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <BulletPoint
                compact
                title="Éléments visuels trompeurs"
                body="Certains éléments semblaient cliquables sans l'être, créant de la confusion chez l'utilisateur"
              />
              <BulletPoint
                compact
                title="Manque de retour visuel"
                body="Lors du changement de catégorie, aucun indicateur visuel ne signalait la sélection active"
              />
              <BulletPoint
                compact
                title="Incohérences visuelles"
                body="Des variations de couleurs, tailles et contrastes nuisaient à la cohérence graphique de l'interface"
              />
              <BulletPoint
                compact
                title="Design daté et surchargé"
                body="L'interface présentait un style ancien et surchargé, donnant une impression de site dépassé"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benchmark */}
      <div id="benchmark" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <H4>Recherche Secondaire</H4>
        <SectionTitle>Benchmark des Concurrents</SectionTitle>
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <H3>Concurrents</H3>
            <Body1 className="font-light">
              Pour situer Fine Line dans son environnement, j'ai choisi deux
              concurrents directs.
            </Body1>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
              <img
                src={competitorNab}
                alt="Né à Beyrouth Films"
                className="aspect-[727/510] w-full rounded-xl object-cover"
              />
              <div className="flex flex-col gap-2">
                <a
                  href="https://neabeyrouth.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-xl text-link underline"
                >
                  Né à Beyrouth Films
                </a>
                <Body1 className="!text-white/70 font-light">
                  Né à Beyrouth est une société de production
                  cinématographique libanaise spécialisée dans la fiction, le
                  documentaire et le court-métrage, engagée à valoriser les
                  talents locaux.
                </Body1>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
              <img
                src={competitorForward}
                alt="Forward Film Production"
                className="aspect-[727/510] w-full rounded-xl object-cover"
              />
              <div className="flex flex-col gap-2">
                <a
                  href="https://forwardfilmproduction.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-xl text-link underline"
                >
                  Forward Film Production
                </a>
                <Body1 className="!text-white/70 font-light">
                  Forward Film Production est une agence libanaise de
                  production spécialisée dans les documentaires et campagnes
                  ONG, engagée pour les droits humains.
                </Body1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center text-center">
          <H3>Méthode</H3>
          <Body1 className="font-light">
            J'ai ensuite réalisé un benchmark à l'aide de la méthode de
            l'Océan Bleu, afin d'analyser plusieurs critères clés liés à
            l'expérience utilisateur et à la visibilité en ligne, et de
            mettre en évidence les forces et faiblesses relatives de chaque
            acteur
          </Body1>
        </div>
        <div className="flex w-full flex-wrap items-center gap-8">
          <button
            type="button"
            onClick={() =>
              setSingleImage({
                src: benchmarkChart,
                alt: 'Benchmark des concurrents',
              })
            }
            className="group/img relative flex-1 min-w-[280px] cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              src={benchmarkChart}
              alt="Benchmark des concurrents"
              className="w-full rounded-xl transition-transform duration-300 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/35 group-hover/img:opacity-100">
              <svg
                className="size-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
          <div className="flex flex-1 min-w-[280px] flex-col gap-4 text-left">
            <H4 className="w-auto text-left">Insights Benchmark</H4>
            <BulletPoint
              title="Compréhension immédiate de l'activité"
              body="Lorsque l'on entre sur les sites de Né à Beyrouth et Forward Film Production, on comprend en quelques secondes ce qu'ils font."
            />
            <BulletPoint
              title="Présence d'une messagerie directe"
              body="Forward Film Production propose une messagerie intégrée sur son site, ce qui permet aux visiteurs de contacter directement l'équipe."
            />
          </div>
        </div>
      </div>

      {/* Hypothèses */}
      <div id="hypotheses" className="flex flex-col items-start gap-4 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-start gap-4">
          <SectionTitle>Hypothèses</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Suite à cette analyse, et à partir de la recherche secondaire,
            j'ai formulé les hypothèses suivantes.
          </Body1>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-baseline gap-4">
            <span className="font-syne text-2xl text-purple-mid">01</span>
            <Body2>
              L'utilisateur doit comprendre l'activité de l'entreprise dès les
              premières secondes pour rester engagé sur le site.
            </Body2>
          </div>
          <div className="flex w-full items-baseline gap-4">
            <span className="font-syne text-2xl text-purple-mid">02</span>
            <Body2>
              Un site moderne et régulièrement mis à jour renforce la
              crédibilité et le sérieux perçus de l'entreprise.
            </Body2>
          </div>
          <div className="flex w-full items-baseline gap-4">
            <span className="font-syne text-2xl text-purple-mid">03</span>
            <Body2>
              Proposer un formulaire de contact simple et accessible peut
              faciliter la prise de contact pour les utilisateurs.
            </Body2>
          </div>
          <div className="flex w-full items-baseline gap-4">
            <span className="font-syne text-2xl text-purple-mid">04</span>
            <Body2>
              Une structure claire des projets favorise l'exploration du site,
              l'intérêt pour les services, et la compréhension globale de
              l'offre.
            </Body2>
          </div>
        </div>
      </div>

      {/* Méthodologie de Recherche */}
      <div id="recherche" className="flex flex-col items-center gap-12 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-6">
          <H4>Recherche Primaire</H4>
          <SectionTitle>Méthodologie de Recherche</SectionTitle>
          <div className="flex w-full flex-wrap items-center justify-center gap-16">
            <Body1 className="w-full max-w-[720px] text-center font-light">
              Dans le cadre de la refonte du site de Fine Line Production, il
              me semblait essentiel de comprendre les attentes des
              utilisateurs, leurs comportements face aux sites de sociétés de
              production, ainsi que les éléments qui influencent leur
              confiance et leur engagement. Pour cela, j'ai décidé de
              combiner deux méthodes complémentaires.
            </Body1>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex w-full flex-col items-center gap-8 rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm">
            <H4>Sondage</H4>
            <div className="flex flex-col items-center gap-2">
              <Body2 className="!text-white/50 text-center font-syne">
                (Quantitatif)
              </Body2>
              <div className="relative flex h-28 w-28 items-center justify-center">
                <div
                  className="absolute inset-0 opacity-70 blur-2xl"
                  style={{
                    background:
                      'radial-gradient(circle, var(--color-purple-light) 0%, var(--color-purple) 50%, transparent 72%)',
                  }}
                />
                <img src={surveyIcons} alt="" className="relative h-16 w-auto" />
              </div>
            </div>
            <Body2 className="w-full flex-1 text-center">
              Le sondage a été créé avec Google Forms et diffusé via WhatsApp,
              afin de recueillir rapidement des retours auprès d'un panel
              varié. Cette approche a permis d'obtenir une vision d'ensemble
              des usages et préférences des utilisateurs.
            </Body2>
            <PillButton
              className="mt-auto"
              href="https://drive.google.com/file/d/1Dcz9YvuJ6D4sM-q5-dw0wePRM2TpTPAz/view?usp=sharing"
            >
              Consulter les résultats (PDF)
            </PillButton>
          </div>
          <div className="flex w-full flex-col items-center gap-8 rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm">
            <H4>Interviews</H4>
            <div className="flex flex-col items-center gap-2">
              <Body2 className="!text-white/50 text-center font-syne">
                (Qualitatif)
              </Body2>
              <div className="relative flex h-28 w-40 items-center justify-center">
                <div
                  className="absolute inset-0 opacity-70 blur-2xl"
                  style={{
                    background:
                      'radial-gradient(circle, var(--color-purple-light) 0%, var(--color-purple) 50%, transparent 72%)',
                  }}
                />
                <img src={interviewIcons} alt="" className="relative h-16 w-auto" />
              </div>
            </div>
            <Body2 className="w-full flex-1 text-center">
              Les entretiens ont été menés en visioconférence via WhatsApp,
              afin de comprendre plus en profondeur les ressentis, les
              attentes et les points de blocage des utilisateurs face aux
              sites de production audiovisuelle.
            </Body2>
            <PillButton
              className="mt-auto"
              href="https://drive.google.com/file/d/1Tjnpj-1FCYM2leUcvz4Cjz4xHyJ4Acht/view?usp=sharing"
            >
              Consulter la restitution (PDF)
            </PillButton>
          </div>
        </div>
      </div>

      {/* Empathy Map */}
      <div id="empathy-map" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Empathy Map</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Afin de transformer les résultats du sondage et des entretiens en
            une vision claire et exploitable, j'ai construit une Empathy Map.
            Cet outil permet de représenter de façon visuelle ce que les
            utilisateurs voient, entendent, pensent, ressentent et font.
          </Body1>
        </div>
        <button
          type="button"
          onClick={() => setSingleImage({ src: empathyMap, alt: 'Empathy Map' })}
          className="group/img relative w-full cursor-pointer overflow-hidden rounded-xl"
        >
          <img
            src={empathyMap}
            alt="Empathy Map"
            className="w-full rounded-xl transition-transform duration-300 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/35 group-hover/img:opacity-100">
            <svg
              className="size-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Synthèse des Recherches */}
      <div id="synthese" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Synthèse des Recherches</SectionTitle>
        <div className="flex flex-col gap-4">
          <BulletPoint
            title="Compréhension immédiate et positionnement clair"
            body="Les utilisateurs veulent savoir dès l'arrivée ce que fait l'entreprise."
          />
          <BulletPoint
            title="Portfolio à jour et hiérarchisé = crédibilité perçue"
            body="Des projets récents et bien classés renforcent la crédibilité (93,8 % estiment essentiel qu'ils soient visibles sur le site)"
          />
          <BulletPoint
            title="Une navigation fluide et une structure lisible sont indispensables"
            body="Un site trop chargé ou désorganisé décourage immédiatement (93,8 % déclarent avoir déjà quitté un site pour cette raison)."
          />
          <BulletPoint
            title="Crédibilité et confiance renforcées par l'apparence et le contact humain"
            body="Les utilisateurs veulent voir l'équipe et ressentir un univers professionnel. 93,8 % considèrent que le design influence directement leur perception de la créativité et du professionnalisme, et 68,8 % préfèrent trouver directement les coordonnées (email, téléphone) plutôt que remplir un formulaire."
          />
        </div>
      </div>

      {/* Cible + Personas */}
      <div id="cible" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Cible</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Les recherches menées m'ont permis de définir la cible du projet,
            puis de la concrétiser à travers un persona primaire
          </Body1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="text-purple-pale/70">Cible Primaire</H5>
            <H4 className="w-auto text-left">
              Entreprises de biens de grande consommation (FMCG)
            </H4>
            <Body1 className="!text-white/70 font-light">
              Fine Line cible les marques de grande distribution nationale
              (Liban) telles que Cosmaline, Master Chips, Ghandour, etc.
            </Body1>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="text-purple-pale/70">Cible Secondaire</H5>
            <H4 className="w-auto text-left">
              ONG et organisations internationales (NGOs / INGOs)
            </H4>
            <Body1 className="!text-white/70 font-light">
              Fine Line s'adresse à des ONG locales et internationales qui
              souhaitent produire des contenus audiovisuels à fort impact
              social : campagnes de sensibilisation, documentaires, portraits
              ou vidéos éducatives.
            </Body1>
          </div>
        </div>

        <H3 className="w-full text-center">Personas Primaire</H3>
        <div className="flex w-full max-w-[1000px] flex-col gap-8 rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
          <div className="flex w-full flex-wrap gap-10">
            <img
              src={personaTania}
              alt="Persona Tania"
              className="h-[240px] w-[280px] shrink-0 rounded-xl object-cover object-top"
            />
            <div className="flex flex-1 min-w-[280px] flex-col gap-6">
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-2">
                  <H5>Prénom</H5>
                  <Body2 className="!text-white font-light">Tania</Body2>
                </div>
                <div className="flex flex-col gap-2">
                  <H5>Âge</H5>
                  <Body2 className="!text-white font-light">36 ans</Body2>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <H5>Poste</H5>
                <Body2 className="!text-white font-light">
                  Responsable marketing chez Gandour (entreprise libanaise de
                  produits alimentaires)
                </Body2>
              </div>
              <div className="flex flex-col gap-2">
                <H5>Motivation</H5>
                <ul className="list-disc pl-6 text-base leading-6 text-white font-light">
                  <li>Rapidité et efficacité</li>
                  <li>Collaboration fluide avec les équipes</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <H5>Comportements/Attitude</H5>
                <div className="flex flex-col gap-2">
                  <AttitudeScale left="Stressée" right="Détendue" position={40} />
                  <AttitudeScale left="Pessimiste" right="Optimiste" position={80} />
                  <AttitudeScale left="Analytique" right="Créative" position={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 border-t border-white/10 pt-8 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <H5>Frustrations</H5>
                <ul className="list-disc pl-6 text-base leading-6 text-white font-light">
                  <li>
                    Devoir relancer plusieurs fois pour les mêmes informations
                  </li>
                  <li>Collaborer avec des équipes désorganisées</li>
                  <li>
                    Avoir le sentiment que le prestataire ne comprend pas
                    l'univers de la marque
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <H5>Besoins / Objectifs</H5>
                <ul className="list-disc pl-6 text-base leading-6 text-white font-light">
                  <li>
                    Collaborer avec des équipes qui comprennent les
                    contraintes business
                  </li>
                  <li>
                    Obtenir des résultats concrets dans des délais courts
                  </li>
                  <li>
                    Garantir la cohérence des campagnes avec l'image de
                    marque
                  </li>
                </ul>
              </div>
            </div>
            <img
              src={personaMoodboard}
              alt="Moodboard"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Plateforme de Marque */}
      <div id="plateforme" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Plateforme de Marque</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Pour passer de la phase de recherche à la phase de conception,
            j'ai commencé par définir la plateforme de marque afin de
            clarifier l'identité et le positionnement de Fine Line.
          </Body1>
        </div>
        <img src={brandPlatform} alt="Plateforme de marque" className="w-full rounded-xl" />
      </div>

      {/* Direction Artistique */}
      <div id="direction-artistique" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Direction Artistique</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Pour répondre aux objectifs clés, j'ai choisi de conserver les
            couleurs historiques de Fine Line tout en leur donnant une
            nouvelle énergie à travers un design plus moderne et évolutif.
            L'idée était de montrer visuellement que le site a franchi une
            étape, qu'il est à la fois fidèle à l'identité de l'entreprise et
            orienté vers l'avenir. Cette direction artistique permet ainsi de
            renforcer la crédibilité, valoriser les projets récents et
            offrir une expérience claire, cohérente et engageante.
          </Body1>
        </div>
        <div className="flex w-full flex-wrap gap-6">
          <button
            type="button"
            onClick={() => setDaIndex(0)}
            className="group/img relative min-w-[280px] flex-1 cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              src={da1}
              alt="Direction artistique 1"
              className="w-full rounded-xl transition-transform duration-300 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/35 group-hover/img:opacity-100">
              <svg
                className="size-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setDaIndex(1)}
            className="group/img relative min-w-[280px] flex-1 cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              src={da2}
              alt="Direction artistique 2"
              className="w-full rounded-xl transition-transform duration-300 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/35 group-hover/img:opacity-100">
              <svg
                className="size-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Prototype + Wireframes */}
      <div id="prototype" className="flex flex-col items-center gap-12 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-center gap-6">
          <SectionTitle>Prototype</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Au cours de mon stage alterné, j'ai eu le temps de concevoir
            uniquement deux pages complètes du site : la page d'accueil et la
            page blog. Le déroulement n'a cependant pas suivi exactement le
            plan initial, en raison de contraintes techniques et
            d'imprévus du côté de l'entreprise, mais sans remettre en cause
            la qualité ni les résultats obtenus. Le projet n'ayant pas pu
            être mené jusqu'au bout dans le cadre de mon contrat, l'équipe a
            ensuite poursuivi le développement en interne. Pour donner une
            vision plus globale, j'ai créé des wireframes pour représenter
            les autres pages, illustrant la structure visuelle et
            l'intention créative sans la direction artistique actuelle que
            j'aurais souhaité déployer sur l'ensemble du site.
          </Body1>
          <PillButton href="https://preview.webflow.com/preview/finelinelb-f6eecdd75ed16d10638c2e844afe?utm_medium=preview_link&utm_source=designer&utm_content=finelinelb-f6eecdd75ed16d10638c2e844afe&preview=b67d353f0c30868940d4ff182615a6a4&locale=en&workflow=preview">
            Prototype
          </PillButton>
        </div>
        <div className="flex w-full flex-col gap-6">
          <H3 className="w-full text-center">Wireframes</H3>
          <div className="grid grid-cols-1 items-start justify-items-center gap-6 sm:grid-cols-3">
            {wireframes.map((w, i) => (
              <button
                key={w.label}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="flex w-[340px] max-w-full cursor-pointer flex-col gap-4 overflow-hidden rounded-3xl border-[1.5px] border-purple-pale/50 bg-purple-dark/35 p-4 text-left backdrop-blur-[20px] shadow-[inset_0_1px_1px_color-mix(in_oklab,var(--color-purple-highlight)_45%,transparent),inset_0_-1px_12px_color-mix(in_oklab,var(--color-purple-mid)_15%,transparent),0_0_0_1px_color-mix(in_oklab,var(--color-purple-mid)_20%,transparent),0_8px_30px_color-mix(in_oklab,var(--color-purple-mid)_35%,transparent)] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-white/10"
                  style={{
                    boxShadow:
                      '0 6px 18px color-mix(in srgb, var(--color-black-ink) 40%, transparent), inset 0 1px 0 color-mix(in srgb, var(--color-white) 15%, transparent)',
                  }}
                >
                  <img
                    src={w.img}
                    alt={w.label}
                    className="absolute inset-0 size-full scale-110 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/15" />
                </div>
                <H4 className="w-full px-2 pb-2 !text-white">
                  {w.label}
                </H4>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={wireframes.map((w) => ({ src: w.img, alt: w.label }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      {strengthIndex !== null && (
        <Lightbox
          images={auditStrengths.map((img, i) => ({
            src: img,
            alt: `Point fort ${i + 1}`,
          }))}
          index={strengthIndex}
          onClose={() => setStrengthIndex(null)}
          onNavigate={setStrengthIndex}
        />
      )}

      {weaknessIndex !== null && (
        <Lightbox
          images={auditWeaknesses.map((img, i) => ({
            src: img,
            alt: `Point faible ${i + 1}`,
          }))}
          index={weaknessIndex}
          onClose={() => setWeaknessIndex(null)}
          onNavigate={setWeaknessIndex}
        />
      )}

      {singleImage && (
        <Lightbox
          images={[singleImage]}
          index={0}
          onClose={() => setSingleImage(null)}
          onNavigate={() => {}}
        />
      )}

      {daIndex !== null && (
        <Lightbox
          images={directionArtistique.map((img, i) => ({
            src: img,
            alt: `Direction artistique ${i + 1}`,
          }))}
          index={daIndex}
          onClose={() => setDaIndex(null)}
          onNavigate={setDaIndex}
        />
      )}

      {videoOpen &&
        createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Fermer"
            className="absolute right-6 top-6 flex size-14 cursor-pointer items-center justify-center opacity-80 hover:opacity-100"
          >
            <svg
              className="size-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="var(--color-white)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className="flex flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={oldWebsiteVideo}
              controls
              autoPlay
              className="max-h-[75vh] max-w-[85vw] cursor-default rounded-lg"
            />
            <div className="flex items-center gap-2">
              {[0.5, 1, 1.25, 1.5, 2].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => {
                    setPlaybackRate(rate)
                    if (videoRef.current) videoRef.current.playbackRate = rate
                  }}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                    playbackRate === rate
                      ? 'border-purple-pale/70 bg-purple/50 text-white'
                      : 'border-white/15 text-white/50 hover:text-white'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body,
        )}

      {/* Budget */}
      <div id="budget" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-start gap-4">
          <SectionTitle>Budget</SectionTitle>
          <Body1 className="w-full text-center font-light">
            J'ai établi une estimation budgétaire correspondant aux étapes
            que j'ai menées, jusqu'à la conception et au prototypage. Elle
            reflète les ressources et outils nécessaires pour couvrir
            l'avancement réalisé durant mon stage alterné.
          </Body1>
        </div>
        <div className="flex w-full flex-col items-center gap-6">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-purple-pale/70" />
                <H4 className="w-auto text-left">01 Recherche</H4>
              </div>
              <ul className="list-disc space-y-2 pl-6 text-sm text-white/70">
                <li>Audit UX du site existant (1 jour)</li>
                <li>Benchmark des concurrents (1 jour)</li>
                <li>
                  Création du contenu et diffusion du sondage + interviews (4
                  jours)
                </li>
                <li>
                  Analyse des réponses + création d'une empathy map (3 jours)
                </li>
                <li>
                  Définir la cible, persona et objectifs utilisateurs (1,5
                  jours)
                </li>
              </ul>
              <Micro1 className="!text-white/70 mt-auto border-t border-white/10 pt-4">
                10,5 jours × 30,45 € ={' '}
                <span className="font-semibold text-white">319,73 €</span>
              </Micro1>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-purple-pale/70" />
                <H4 className="w-auto text-left">02 Création Visuelle</H4>
              </div>
              <ul className="list-disc space-y-2 pl-6 text-sm text-white/70">
                <li>Conception de la plateforme de marque (1,5 jours)</li>
                <li>
                  Création de l'arborescence et architecture du site (1 jour)
                </li>
                <li>Moodboard et direction artistique (1,5 jours)</li>
                <li>
                  Création du UI Kit (polices, couleurs, boutons) (2 jours)
                </li>
                <li>Début de la maquette sur Webflow (3 jours)</li>
              </ul>
              <Micro1 className="!text-white/70 mt-auto border-t border-white/10 pt-4">
                9 jours × 30,45 € ={' '}
                <span className="font-semibold text-white">274,05 €</span>
              </Micro1>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-purple-pale/70" />
                <H4 className="w-auto text-left">03 Webflow</H4>
              </div>
              <Micro1 className="!text-white/70">
                Hébergement CMS pour une année complète (du 8 août 2024 au 7
                août 2025)
              </Micro1>
              <Micro1 className="!text-white/70 mt-auto border-t border-white/10 pt-4">
                <span className="font-semibold text-white">254,00 €</span>
              </Micro1>
            </div>
          </div>

          <p className="font-syne text-2xl text-white">
            Budget Total : 847,78 €
          </p>
        </div>
      </div>

      {/* Roadmap */}
      <div id="roadmap" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-start gap-4">
          <SectionTitle>Roadmap</SectionTitle>
          <Body1 className="w-full text-center font-light">
            J'ai construit une roadmap retraçant les étapes clés du projet,
            de l'analyse du contexte au prototypage. Elle m'a permis
            d'avancer avec des livrables clairs et d'assurer une transition
            fluide entre recherche, stratégie et design. Même si certaines
            étapes ont dû être adaptées en cours de route, la progression et
            la qualité des résultats ont été préservées.
          </Body1>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div
            ref={roadmapScrollRef}
            onScroll={updateRoadmapScrollState}
            className="hide-scrollbar w-full overflow-x-auto rounded-xl"
          >
            <img
              src={roadmapTimeline}
              alt="Roadmap"
              onLoad={updateRoadmapScrollState}
              className="h-[500px] w-auto max-w-none rounded-xl"
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

      {/* Conclusion */}
      <div id="conclusion" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Conclusion</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Ce projet de refonte du site de Fine Line m'a permis d'appliquer
          concrètement mes compétences en UX/UI design, depuis la recherche
          et l'analyse jusqu'à la conception d'un prototype fonctionnel.
          Malgré l'arrêt du stage alterné avant la finalisation complète,
          j'ai pu poser les bases d'une identité digitale modernisée et
          d'une expérience utilisateur plus claire et cohérente. Ce travail
          m'a aussi permis de renforcer ma méthodologie de recherche, de
          structuration et de prototypage, tout en m'adaptant à un contexte
          professionnel réel.
        </Body1>
      </div>

      <Contact transparent />
    </div>
  )
}
