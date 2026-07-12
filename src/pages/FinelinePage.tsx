import { useRef, useState } from 'react'
import Contact from '../components/Contact'
import Lightbox from '../components/Lightbox'
import CaseStudyNav from '../components/CaseStudyNav'
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
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 text-right text-lg text-[rgba(253,251,246,0.7)]">
        {left}
      </span>
      <div className="flex flex-1 min-w-[100px] items-center">
        <svg className="size-3 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5L5 12L12 19"
            stroke="rgba(253,251,246,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="relative h-[1.5px] flex-1 bg-[rgba(253,251,246,0.4)]">
          <span
            className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(253,251,246,0.85)]"
            style={{ left: `${position}%` }}
          />
        </div>
        <svg className="size-3 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5L19 12L12 19"
            stroke="rgba(253,251,246,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="w-24 shrink-0 text-left text-lg text-[rgba(253,251,246,0.7)]">
        {right}
      </span>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="w-full text-center font-syne text-4xl leading-tight text-[#fdfbf6] md:text-5xl md:leading-[48px]">
      {children}
    </p>
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
    <div className="flex w-full items-start gap-3 border-l-2 border-[rgba(253,251,246,0.15)] pl-3">
      <p className="flex-1">
        <span
          className={`block text-[rgba(253,251,246,0.85)] ${compact ? 'text-base leading-6' : 'text-xl leading-7'}`}
        >
          {title}
        </span>
        <span
          className={`block text-[rgba(253,251,246,0.7)] ${compact ? 'text-sm leading-5' : 'text-lg leading-7'}`}
        >
          {body}
        </span>
      </p>
    </div>
  )
}

const wireframes = [
  { img: wireframeWork, label: '"WORK" Page' },
  { img: wireframeAbout, label: '"ABOUT" Page' },
  { img: wireframeContact, label: '"CONTACT" Page' },
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
            'radial-gradient(ellipse at center, #a855f7 0%, #7c3aed 45%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute left-[-10%] top-0 -z-10 h-[340px] w-[700px] max-w-[70vw] -translate-y-1/3 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, #a855f7 0%, #7c3aed 45%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-0 -z-10 h-[340px] w-[700px] max-w-[70vw] -translate-y-1/3 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, #a855f7 0%, #7c3aed 45%, transparent 75%)',
        }}
      />
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'Overview' },
          { id: 'contexte', label: 'Contexte' },
          { id: 'probleme', label: 'Problème' },
          { id: 'audit', label: 'Audit', group: 'Recherche Secondaire' },
          { id: 'benchmark', label: 'Benchmark', group: 'Recherche Secondaire' },
          { id: 'hypotheses', label: 'Hypothèses' },
          { id: 'recherche', label: 'Recherche', group: 'Recherche Primaire' },
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
      <div id="overview" className="flex flex-col items-center gap-12 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src={logoMark} alt="Fine Line" className="h-8" />
          <h1 className="font-syne text-5xl leading-tight text-[#fdfbf6] md:text-[72px] md:leading-[72px]">
            Fine Line Production
          </h1>

          <div className="w-full max-w-[1100px] overflow-hidden rounded-2xl border border-white/15 bg-[#0c0c10] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <img src={ancienSite} alt="Ancien site Fine Line" className="w-full" />
          </div>

          <div className="flex w-full max-w-[1100px] flex-wrap items-start justify-center gap-12 border-t border-white/10 pt-10 text-left">
            <div className="flex max-w-[320px] flex-col gap-2">
              <p className="text-sm font-semibold uppercase text-[rgba(253,251,246,0.5)]">
                Overview
              </p>
              <p className="font-light text-lg leading-6 text-[#fdfbf6]">
                Refonte complète du site web de Fine Line Production, une
                société de production créative libanaise dont l'ancien site
                avait été désactivé. De la recherche UX au design final, j'ai
                mené le projet en autonomie pour concevoir un site moderne et
                fidèle à l'identité de l'agence.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase text-[rgba(253,251,246,0.5)]">
                Mon Rôle
              </p>
              <ul className="list-none font-light text-lg leading-6 text-[#fdfbf6]">
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
                <p className="text-sm font-semibold uppercase text-[rgba(253,251,246,0.5)]">
                  Outils
                </p>
                <ul className="list-none font-light text-lg leading-6 text-[#fdfbf6]">
                  <li>Webflow</li>
                  <li>Google Drive</li>
                  <li>Teams</li>
                  <li>Trello</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold uppercase text-[rgba(253,251,246,0.5)]">
                  Année
                </p>
                <p className="font-light text-lg leading-7 text-[#fdfbf6]">
                  2025
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://preview.webflow.com/preview/finelinelb-f6eecdd75ed16d10638c2e844afe?utm_medium=preview_link&utm_source=designer&utm_content=finelinelb-f6eecdd75ed16d10638c2e844afe&preview=b67d353f0c30868940d4ff182615a6a4&locale=en&workflow=preview"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer border border-violet-300/60 bg-[rgba(124,58,237,0.55)] px-4 py-2 text-xl font-medium leading-7 text-[#fdfbf6] backdrop-blur-[20px] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]"
        >
          Prototype
        </a>
      </div>

      {/* Contexte */}
      <div
        id="contexte"
        className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]"
      >
        <div className="flex w-full flex-col items-center gap-8">
          <SectionTitle>Contexte</SectionTitle>
          <p className="w-full text-center text-lg leading-7 text-[rgba(253,251,246,0.85)] md:text-xl">
            Fine Line Production est une société de production créative basée
            au Liban depuis 2017. Elle collabore avec des ONG et des marques
            de grande consommation pour concevoir des récits visuels
            percutants, en prenant en charge l'ensemble du processus de la
            conception à la postproduction.
          </p>
        </div>
        <div
          className="flex w-full max-w-[500px] items-center justify-center rounded-2xl p-10"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, #7c3aed 0%, #4c1d95 55%, #241457 100%)',
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
      <div id="probleme" className="flex flex-col items-center gap-7 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-8">
          <SectionTitle>Problème</SectionTitle>
          <p className="w-full text-center text-lg leading-7 text-[rgba(253,251,246,0.85)] md:text-xl">
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
          </p>
        </div>
        <div className="flex w-full flex-wrap items-stretch justify-center gap-4 py-4">
          <div className="flex min-w-[320px] max-w-[600px] flex-1 flex-col items-center gap-3 rounded-2xl border border-white/15 p-3 backdrop-blur-sm">
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
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/30 group-hover/img:opacity-100">
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
            <p className="font-syne text-lg leading-8 text-[#fdfbf6]">
              Site Web Actuel
            </p>
          </div>
          <div className="flex min-w-[320px] max-w-[600px] flex-1 flex-col items-center gap-3 rounded-2xl border border-white/15 p-3 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group/video relative flex aspect-[576/367] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-violet-300/40 transition-all duration-300 hover:border-violet-300/70"
            >
              <img
                src={oldWebsiteThumb}
                alt=""
                className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover/video:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover/video:bg-black/45" />
              <img
                src={playIcon}
                alt=""
                className="relative h-20 w-20 transition-transform duration-300 group-hover/video:scale-110"
              />
            </button>
            <p className="font-syne text-lg leading-8 text-[#fdfbf6]">
              Vidéo de l'Ancien Site Web
            </p>
          </div>
        </div>
      </div>

      {/* Audit */}
      <div id="audit" className="flex flex-col items-center gap-14 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-8">
          <p className="w-full text-center text-lg font-semibold uppercase tracking-widest text-violet-300/70">
            Recherche Secondaire
          </p>
          <SectionTitle>Audit</SectionTitle>
          <p className="w-full text-center text-lg leading-7 text-[rgba(253,251,246,0.85)] md:text-xl">
            Pour analyser l'ancien site de Fine Line, j'ai réalisé un audit UX
            basé sur les critères ergonomiques de{' '}
            <span className="font-semibold">Bastien &amp; Scapin</span>.
            Cette méthode m'a permis d'évaluer la navigation, la lisibilité,
            la cohérence visuelle et l'efficacité globale de l'interface,
            afin d'identifier ses points forts et ses axes d'amélioration.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div
            className="flex w-full flex-col items-start gap-5 rounded-3xl border-[1.5px] border-[#4a7c59]/60 p-6 backdrop-blur-[20px] transition-all duration-300"
            style={{
              background: 'rgba(74,124,89,0.35)',
              boxShadow:
                'inset 0 1px 1px rgba(167,243,208,0.45), inset 0 -1px 12px rgba(74,124,89,0.15), 0 0 0 1px rgba(74,124,89,0.2), 0 8px 30px rgba(74,124,89,0.35)',
            }}
          >
            <p className="flex items-center gap-2 font-syne text-xl leading-8 text-[#fdfbf6]">
              <img src={checkIcon} alt="" className="h-5 w-4" />
              Point Forts
            </p>
            <div
              className="flex w-full flex-wrap items-center justify-center gap-3 rounded-lg border border-[#4a7c59]/40 p-3"
              style={{
                background: 'rgba(74,124,89,0.25)',
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/30 group-hover/img:opacity-100">
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
            <div className="flex flex-col gap-3">
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
            className="flex w-full flex-col items-start gap-5 rounded-3xl border-[1.5px] border-[#7c4a4a]/60 p-6 backdrop-blur-[20px] transition-all duration-300"
            style={{
              background: 'rgba(124,74,74,0.35)',
              boxShadow:
                'inset 0 1px 1px rgba(254,202,202,0.45), inset 0 -1px 12px rgba(124,74,74,0.15), 0 0 0 1px rgba(124,74,74,0.2), 0 8px 30px rgba(124,74,74,0.35)',
            }}
          >
            <p className="flex items-center gap-2 font-syne text-xl leading-8 text-[#fdfbf6]">
              <img src={xIcon} alt="" className="h-5 w-4" />
              Point Faible
            </p>
            <div
              className="flex w-full flex-col gap-3 rounded-lg border border-[#7c4a4a]/40 p-3"
              style={{
                background: 'rgba(124,74,74,0.25)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex w-full flex-wrap items-center justify-center gap-3">
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
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/30 group-hover/img:opacity-100">
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
              <div className="flex w-full flex-col gap-3">
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
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/30 group-hover/img:opacity-100">
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
            <div className="flex flex-col gap-3">
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
        <p className="w-full text-center text-lg font-semibold uppercase tracking-widest text-violet-300/70">
          Recherche Secondaire
        </p>
        <SectionTitle>Benchmark des Concurrents</SectionTitle>
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <p className="font-syne text-2xl leading-9 text-[#fdfbf6]">
              Concurrents
            </p>
            <p className="font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
              Pour situer Fine Line dans son environnement, j'ai choisi deux
              concurrents directs.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-4 backdrop-blur-sm">
              <img
                src={competitorNab}
                alt="Né à Beyrouth Films"
                className="aspect-[727/510] w-full rounded-xl object-cover"
              />
              <div className="flex flex-col gap-1">
                <a
                  href="https://neabeyrouth.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-xl text-[#568cc2] underline"
                >
                  Né à Beyrouth Films
                </a>
                <p className="text-lg text-[rgba(253,251,246,0.7)]">
                  Né à Beyrouth est une société de production
                  cinématographique libanaise spécialisée dans la fiction, le
                  documentaire et le court-métrage, engagée à valoriser les
                  talents locaux.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-4 backdrop-blur-sm">
              <img
                src={competitorForward}
                alt="Forward Film Production"
                className="aspect-[727/510] w-full rounded-xl object-cover"
              />
              <div className="flex flex-col gap-1">
                <a
                  href="https://forwardfilmproduction.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-xl text-[#568cc2] underline"
                >
                  Forward Film Production
                </a>
                <p className="text-lg text-[rgba(253,251,246,0.7)]">
                  Forward Film Production est une agence libanaise de
                  production spécialisée dans les documentaires et campagnes
                  ONG, engagée pour les droits humains.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center text-center">
          <p className="font-syne text-2xl leading-9 text-[#fdfbf6]">
            Méthode
          </p>
          <p className="font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
            J'ai ensuite réalisé un benchmark à l'aide de la méthode de
            l'Océan Bleu, afin d'analyser plusieurs critères clés liés à
            l'expérience utilisateur et à la visibilité en ligne, et de
            mettre en évidence les forces et faiblesses relatives de chaque
            acteur
          </p>
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
            className="flex-1 min-w-[280px] cursor-pointer"
          >
            <img
              src={benchmarkChart}
              alt="Benchmark des concurrents"
              className="w-full rounded-xl"
            />
          </button>
          <div className="flex flex-1 min-w-[280px] flex-col gap-4">
            <p className="text-center font-syne text-2xl leading-9 text-[#fdfbf6]">
              Insights Benchmark
            </p>
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
          <p className="w-full text-center font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
            Suite à cette analyse, et à partir de la recherche secondaire,
            j'ai formulé les hypothèses suivantes.
          </p>
        </div>
        <ol className="w-full list-decimal space-y-1 pl-6 text-xl leading-7 text-[#fdfbf6]">
          <li>
            L'utilisateur doit comprendre l'activité de l'entreprise dès les
            premières secondes pour rester engagé sur le site.
          </li>
          <li>
            Un site moderne et régulièrement mis à jour renforce la
            crédibilité et le sérieux perçus de l'entreprise.
          </li>
          <li>
            Proposer un formulaire de contact simple et accessible peut
            faciliter la prise de contact pour les utilisateurs.
          </li>
          <li>
            Une structure claire des projets favorise l'exploration du site,
            l'intérêt pour les services, et la compréhension globale de
            l'offre.
          </li>
        </ol>
      </div>

      {/* Méthodologie de Recherche */}
      <div id="recherche" className="flex flex-col items-center gap-12 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-6">
          <p className="w-full text-center text-lg font-semibold uppercase tracking-widest text-violet-300/70">
            Recherche Primaire
          </p>
          <SectionTitle>Méthodologie de Recherche</SectionTitle>
          <div className="flex w-full flex-wrap items-center justify-center gap-16">
            <p className="w-full max-w-[720px] text-center text-lg leading-7 text-[rgba(253,251,246,0.85)]">
              Dans le cadre de la refonte du site de Fine Line Production, il
              me semblait essentiel de comprendre les attentes des
              utilisateurs, leurs comportements face aux sites de sociétés de
              production, ainsi que les éléments qui influencent leur
              confiance et leur engagement. Pour cela, j'ai décidé de
              combiner deux méthodes complémentaires.
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex w-full flex-col items-center gap-8 rounded-2xl border border-white/15 bg-white/[0.03] p-6 text-center backdrop-blur-sm">
            <p className="font-syne text-3xl leading-tight text-[#fdfbf6]">
              Sondage
            </p>
            <div className="flex flex-col items-center gap-2">
              <p className="text-center font-syne text-lg leading-6 text-[rgba(253,251,246,0.6)]">
                (Quantitatif)
              </p>
              <p className="text-4xl leading-none">🧍🧍🧍🧍🧍🧍🧍🧍🧍</p>
            </div>
            <p className="w-full text-center text-lg leading-7 text-[rgba(253,251,246,0.85)] md:text-xl">
              Le sondage a été créé avec Google Forms et diffusé via WhatsApp,
              afin de recueillir rapidement des retours auprès d'un panel
              varié. Cette approche a permis d'obtenir une vision d'ensemble
              des usages et préférences des utilisateurs.
            </p>
            <a
              href="https://drive.google.com/file/d/1Dcz9YvuJ6D4sM-q5-dw0wePRM2TpTPAz/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer border border-violet-300/60 bg-[rgba(124,58,237,0.55)] px-4 py-2 text-xl font-medium leading-7 text-[#fdfbf6] backdrop-blur-[20px] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]"
            >
              Consulter les résultats (PDF)
            </a>
          </div>
          <div className="flex w-full flex-col items-center gap-8 rounded-2xl border border-white/15 bg-white/[0.03] p-6 text-center backdrop-blur-sm">
            <p className="font-syne text-3xl leading-tight text-[#fdfbf6]">
              Interviews
            </p>
            <div className="flex flex-col items-center gap-2">
              <p className="text-center font-syne text-lg leading-6 text-[rgba(253,251,246,0.6)]">
                (Qualitatif)
              </p>
              <p className="text-4xl leading-none">🧍 🧍 🧍</p>
            </div>
            <p className="w-full text-center text-lg leading-7 text-[rgba(253,251,246,0.85)] md:text-xl">
              Les entretiens ont été menés en visioconférence via WhatsApp,
              afin de comprendre plus en profondeur les ressentis, les
              attentes et les points de blocage des utilisateurs face aux
              sites de production audiovisuelle.
            </p>
            <a
              href="https://drive.google.com/file/d/1Tjnpj-1FCYM2leUcvz4Cjz4xHyJ4Acht/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer border border-violet-300/60 bg-[rgba(124,58,237,0.55)] px-4 py-2 text-xl font-medium leading-7 text-[#fdfbf6] backdrop-blur-[20px] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]"
            >
              Consulter la restitution (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Empathy Map */}
      <div id="empathy-map" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Empathy Map</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
            Afin de transformer les résultats du sondage et des entretiens en
            une vision claire et exploitable, j'ai construit une Empathy Map.
            Cet outil permet de représenter de façon visuelle ce que les
            utilisateurs voient, entendent, pensent, ressentent et font.
          </p>
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
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/30 group-hover/img:opacity-100">
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
          <p className="w-full text-center font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
            Les recherches menées m'ont permis de définir la cible du projet,
            puis de la concrétiser à travers un persona primaire
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/70">
              Cible Primaire
            </p>
            <p className="font-syne text-xl leading-7 text-[#fdfbf6]">
              Entreprises de biens de grande consommation (FMCG)
            </p>
            <p className="text-lg leading-7 text-[rgba(253,251,246,0.7)]">
              Fine Line cible les marques de grande distribution nationale
              (Liban) telles que Cosmaline, Master Chips, Ghandour, etc.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/70">
              Cible Secondaire
            </p>
            <p className="font-syne text-xl leading-7 text-[#fdfbf6]">
              ONG et organisations internationales (NGOs / INGOs)
            </p>
            <p className="text-lg leading-7 text-[rgba(253,251,246,0.7)]">
              Fine Line s'adresse à des ONG locales et internationales qui
              souhaitent produire des contenus audiovisuels à fort impact
              social : campagnes de sensibilisation, documentaires, portraits
              ou vidéos éducatives.
            </p>
          </div>
        </div>

        <p className="w-full text-center font-syne text-4xl leading-tight text-[#fdfbf6] md:text-5xl">
          Personas Primaire
        </p>
        <div className="flex w-full max-w-[1000px] flex-col gap-8 rounded-2xl border border-white/15 bg-white/[0.03] p-8 backdrop-blur-sm">
          <div className="flex w-full flex-wrap gap-10">
            <img
              src={personaTania}
              alt="Persona Tania"
              className="h-[240px] w-[280px] shrink-0 rounded-xl object-cover object-top"
            />
            <div className="flex flex-1 min-w-[280px] flex-col gap-6">
              <div className="flex flex-wrap gap-8">
                <p>
                  <span className="font-syne text-xl text-[#fdfbf6]">
                    Prénom{' '}
                  </span>
                  <span className="text-lg text-[rgba(253,251,246,0.7)]">
                    Tania
                  </span>
                </p>
                <p>
                  <span className="font-syne text-xl text-[#fdfbf6]">
                    Âge{' '}
                  </span>
                  <span className="text-lg text-[rgba(253,251,246,0.7)]">
                    36 ans
                  </span>
                </p>
              </div>
              <div>
                <p className="font-syne text-xl text-[#fdfbf6]">Poste</p>
                <p className="text-lg text-[rgba(253,251,246,0.7)]">
                  Responsable marketing chez Gandour (entreprise libanaise de
                  produits alimentaires)
                </p>
              </div>
              <div>
                <p className="font-syne text-xl text-[#fdfbf6]">
                  Motivation
                </p>
                <ul className="list-disc pl-5 text-lg text-[rgba(253,251,246,0.7)]">
                  <li>Rapidité et efficacité</li>
                  <li>Collaboration fluide avec les équipes</li>
                </ul>
              </div>
              <div>
                <p className="font-syne text-xl text-[#fdfbf6]">
                  Comportements/Attitude
                </p>
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
              <div>
                <p className="font-syne text-xl text-[#fdfbf6]">
                  Frustrations
                </p>
                <ul className="list-disc pl-5 text-lg text-[rgba(253,251,246,0.7)]">
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
              <div>
                <p className="font-syne text-xl text-[#fdfbf6]">
                  Besoins / Objectifs
                </p>
                <ul className="list-disc pl-5 text-lg text-[rgba(253,251,246,0.7)]">
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
          <p className="w-full text-center font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
            Pour passer de la phase de recherche à la phase de conception,
            j'ai commencé par définir la plateforme de marque afin de
            clarifier l'identité et le positionnement de Fine Line.
          </p>
        </div>
        <img src={brandPlatform} alt="Plateforme de marque" className="w-full rounded-xl" />
      </div>

      {/* Direction Artistique */}
      <div id="direction-artistique" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Direction Artistique</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
            Pour répondre aux objectifs clés, j'ai choisi de conserver les
            couleurs historiques de Fine Line tout en leur donnant une
            nouvelle énergie à travers un design plus moderne et évolutif.
            L'idée était de montrer visuellement que le site a franchi une
            étape, qu'il est à la fois fidèle à l'identité de l'entreprise et
            orienté vers l'avenir. Cette direction artistique permet ainsi de
            renforcer la crédibilité, valoriser les projets récents et
            offrir une expérience claire, cohérente et engageante.
          </p>
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
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/30 group-hover/img:opacity-100">
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
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/30 group-hover/img:opacity-100">
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
          <p className="w-full text-center text-lg leading-7 text-[rgba(253,251,246,0.85)] md:text-xl">
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
          </p>
          <a
            href="https://preview.webflow.com/preview/finelinelb-f6eecdd75ed16d10638c2e844afe?utm_medium=preview_link&utm_source=designer&utm_content=finelinelb-f6eecdd75ed16d10638c2e844afe&preview=b67d353f0c30868940d4ff182615a6a4&locale=en&workflow=preview"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer border border-violet-300/60 bg-[rgba(124,58,237,0.55)] px-4 py-2 text-xl font-medium leading-7 text-[#fdfbf6] backdrop-blur-[20px] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]"
          >
            Prototype
          </a>
        </div>
        <div className="flex w-full flex-col gap-6">
          <p className="font-syne text-3xl leading-tight text-[#fdfbf6]">
            Wireframes
          </p>
          <div className="grid grid-cols-1 items-start justify-items-center gap-6 sm:grid-cols-3">
            {wireframes.map((w, i) => (
              <button
                key={w.label}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="flex w-[340px] max-w-full cursor-pointer flex-col gap-4 overflow-hidden rounded-3xl border-[1.5px] border-violet-300/60 bg-[rgba(76,29,149,0.35)] p-4 text-left backdrop-blur-[20px] shadow-[inset_0_1px_1px_rgba(216,180,254,0.45),inset_0_-1px_12px_rgba(139,92,246,0.15),0_0_0_1px_rgba(139,92,246,0.2),0_8px_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-white/10"
                  style={{
                    boxShadow:
                      '0 6px 18px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
                  }}
                >
                  <img
                    src={w.img}
                    alt={w.label}
                    className="absolute inset-0 size-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
                </div>
                <p className="w-full px-1 pb-1 text-center font-syne text-xl leading-7 text-[#fdfbf6]">
                  {w.label}
                </p>
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

      {videoOpen && (
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
                stroke="#fdfbf6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className="flex flex-col items-center gap-3"
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
                  className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-all duration-200 ${
                    playbackRate === rate
                      ? 'border-violet-300/70 bg-[rgba(124,58,237,0.55)] text-[#fdfbf6]'
                      : 'border-white/15 text-[rgba(253,251,246,0.6)] hover:text-[#fdfbf6]'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Budget */}
      <div id="budget" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-start gap-4">
          <SectionTitle>Budget</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
            J'ai établi une estimation budgétaire correspondant aux étapes
            que j'ai menées, jusqu'à la conception et au prototypage. Elle
            reflète les ressources et outils nécessaires pour couvrir
            l'avancement réalisé durant mon stage alterné.
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-6">
        <div className="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="font-semibold text-[#fdfbf6]">01 Recherche</p>
            <ul className="list-disc space-y-1 pl-5 text-lg text-[rgba(253,251,246,0.7)]">
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
            <div className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-4 text-lg">
              <p className="text-[rgba(253,251,246,0.7)]">
                Nombre de Jours : <span className="text-[#fdfbf6]">10,5</span>
              </p>
              <p className="text-[rgba(253,251,246,0.7)]">
                TJM (taux Journalier Moyen) :{' '}
                <span className="text-[#fdfbf6]">30,45 €</span>
              </p>
              <p className="font-semibold text-[#fdfbf6]">
                Total : 319,73 €
              </p>
            </div>
          </div>

          <span className="hidden items-center justify-center font-syne text-4xl text-violet-300/70 md:flex">
            +
          </span>

          <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="font-semibold text-[#fdfbf6]">
              02 Création Visuelle
            </p>
            <ul className="list-disc space-y-1 pl-5 text-lg text-[rgba(253,251,246,0.7)]">
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
            <div className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-4 text-lg">
              <p className="text-[rgba(253,251,246,0.7)]">
                Nombre de Jours : <span className="text-[#fdfbf6]">9</span>
              </p>
              <p className="text-[rgba(253,251,246,0.7)]">
                TJM (taux Journalier Moyen) :{' '}
                <span className="text-[#fdfbf6]">30,45 €</span>
              </p>
              <p className="font-semibold text-[#fdfbf6]">
                Total : 274,05 €
              </p>
            </div>
          </div>

          <span className="hidden items-center justify-center font-syne text-4xl text-violet-300/70 md:flex">
            +
          </span>

          <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm">
            <p className="font-semibold text-[#fdfbf6]">03 Webflow</p>
            <p className="text-lg text-[rgba(253,251,246,0.7)]">
              Hébergement CMS pour une année complète (du 8 août 2024 au 7
              août 2025) :{' '}
              <span className="text-[#fdfbf6]">254,00 €</span>
            </p>
            <div className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-4 text-lg">
              <p className="font-semibold text-[#fdfbf6]">
                Total : 254,00 €
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-syne text-4xl text-violet-300/70">=</span>
          <p className="font-syne text-2xl text-[#fdfbf6]">
            Total Budget : 847,78 €
          </p>
        </div>
        </div>
      </div>

      {/* Roadmap */}
      <div id="roadmap" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-start gap-4">
          <SectionTitle>Roadmap</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
            J'ai construit une roadmap retraçant les étapes clés du projet,
            de l'analyse du contexte au prototypage. Elle m'a permis
            d'avancer avec des livrables clairs et d'assurer une transition
            fluide entre recherche, stratégie et design. Même si certaines
            étapes ont dû être adaptées en cours de route, la progression et
            la qualité des résultats ont été préservées.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="modern-scrollbar w-full overflow-x-auto rounded-xl">
            <img
              src={roadmapTimeline}
              alt="Roadmap"
              className="h-[500px] w-auto max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div id="conclusion" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Conclusion</SectionTitle>
        <p className="w-full text-center text-lg leading-7 text-[rgba(253,251,246,0.85)] md:text-xl">
          Ce projet de refonte du site de Fine Line m'a permis d'appliquer
          concrètement mes compétences en UX/UI design, depuis la recherche
          et l'analyse jusqu'à la conception d'un prototype fonctionnel.
          Malgré l'arrêt du stage alterné avant la finalisation complète,
          j'ai pu poser les bases d'une identité digitale modernisée et
          d'une expérience utilisateur plus claire et cohérente. Ce travail
          m'a aussi permis de renforcer ma méthodologie de recherche, de
          structuration et de prototypage, tout en m'adaptant à un contexte
          professionnel réel.
        </p>
      </div>

      <Contact transparent />
    </div>
  )
}
