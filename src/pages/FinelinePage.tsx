import { useState } from 'react'
import Contact from '../components/Contact'
import Lightbox from '../components/Lightbox'
import CaseStudyNav from '../components/CaseStudyNav'
import logoMark from '../assets/fineline/logo-mark.png'
import ancienSite from '../assets/fineline/ancien-site.png'
import currentWebsite from '../assets/fineline/current-website.png'
import playIcon from '../assets/fineline/play-icon.svg'
import checkIcon from '../assets/fineline/icon-check.svg'
import xIcon from '../assets/fineline/icon-x.svg'
import auditStrength1 from '../assets/fineline/audit-strength-1.png'
import auditStrength2 from '../assets/fineline/audit-strength-2.png'
import auditStrength3 from '../assets/fineline/audit-strength-3.png'
import auditWeak1 from '../assets/fineline/audit-weak-1.png'
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
import roadmap1 from '../assets/fineline/roadmap-1.png'
import roadmap3 from '../assets/fineline/roadmap-3.png'
import roadmap4 from '../assets/fineline/roadmap-4.png'
import budget1 from '../assets/fineline/budget-1.png'
import budget3 from '../assets/fineline/budget-3.png'
import budget5 from '../assets/fineline/budget-5.png'

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
      <p className="flex-1 tracking-[-0.5px]">
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

export default function FinelinePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[1100px] max-w-[140vw] -translate-x-1/2 -translate-y-1/3 opacity-60 blur-3xl"
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
          { id: 'audit', label: 'Audit' },
          { id: 'benchmark', label: 'Benchmark' },
          { id: 'hypotheses', label: 'Hypothèses' },
          { id: 'recherche', label: 'Recherche' },
          { id: 'synthese', label: 'Synthèse' },
          { id: 'empathy-map', label: 'Empathy Map' },
          { id: 'cible', label: 'Cible' },
          { id: 'plateforme', label: 'Plateforme de Marque' },
          { id: 'direction-artistique', label: 'Direction Artistique' },
          { id: 'prototype', label: 'Prototype' },
          { id: 'budget', label: 'Budget' },
          { id: 'roadmap', label: 'Roadmap' },
          { id: 'conclusion', label: 'Conclusion' },
          { id: 'contact', label: 'Contact' },
        ]}
      />

      {/* Header */}
      <div id="overview" className="flex flex-col items-center gap-10 p-8 text-center md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-center gap-6">
          <img src={logoMark} alt="Fine Line" className="h-8" />
          <h1 className="font-syne text-5xl leading-tight tracking-[-0.7px] text-[#fdfbf6] md:text-[72px] md:leading-[72px]">
            Fine Line Production
          </h1>
        </div>
        <p className="max-w-[720px] text-lg leading-7 tracking-[-0.5px] text-[#fdfbf6] md:text-xl">
          Refonte complète du site web de Fine Line Production, une
          société de production créative libanaise dont l'ancien site
          avait été désactivé. De la recherche UX au design final, j'ai
          mené le projet en autonomie pour concevoir un site moderne et
          fidèle à l'identité de l'agence.
        </p>
        <div className="flex w-full flex-wrap items-start justify-center gap-12 border-y border-white/10 py-8">
          <div className="flex flex-col items-center gap-1 tracking-[-0.5px]">
            <p className="text-xl font-semibold leading-7 text-[#fdfbf6]">
              Mon Rôle
            </p>
            <div className="text-lg leading-7 text-[rgba(253,251,246,0.85)]">
              <p>Audit du site existant</p>
              <p>Benchmark concurrentiel</p>
              <p>Recherches quantitatives et qualitatives</p>
              <p>Analyse des données</p>
              <p>Conception de la direction artistique</p>
              <p>Prototypage sur Webflow</p>
              <p>Roadmap</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 tracking-[-0.5px]">
            <p className="text-xl font-semibold leading-7 text-[#fdfbf6]">
              Outils
            </p>
            <div className="text-lg leading-7 text-[rgba(253,251,246,0.85)]">
              <p>Webflow</p>
              <p>Google Drive</p>
              <p>Teams</p>
              <p>Trello</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 tracking-[-0.5px]">
            <p className="text-xl font-semibold leading-7 text-[#fdfbf6]">
              Année
            </p>
            <p className="text-lg leading-7 text-[rgba(253,251,246,0.85)]">
              2025
            </p>
          </div>
        </div>
        <a
          href="https://preview.webflow.com/preview/finelinelb-f6eecdd75ed16d10638c2e844afe?utm_medium=preview_link&utm_source=designer&utm_content=finelinelb-f6eecdd75ed16d10638c2e844afe&preview=b67d353f0c30868940d4ff182615a6a4&locale=en&workflow=preview"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer border border-violet-300/40 px-4 py-2 text-xl font-medium leading-7 tracking-[-0.5px] text-[#fdfbf6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)]"
        >
          Prototype
        </a>
        <div className="w-full max-w-[900px] overflow-hidden rounded-2xl border border-white/15">
          <img src={ancienSite} alt="Ancien site Fine Line" className="w-full" />
        </div>
      </div>

      {/* Contexte */}
      <div
        id="contexte"
        className="flex flex-col items-start gap-10 p-8 md:flex-row md:items-center md:py-16 md:px-[var(--nav-edge-w)]"
      >
        <div className="flex flex-1 flex-col items-start gap-8 tracking-[-0.5px]">
          <SectionTitle>Contexte</SectionTitle>
          <p className="w-full text-center text-lg leading-7 text-[rgba(253,251,246,0.85)] md:text-xl">
            Fine Line Production est une société de production créative basée
            au Liban depuis 2017. Elle collabore avec des ONG et des marques
            de grande consommation pour concevoir des récits visuels
            percutants, en prenant en charge l'ensemble du processus de la
            conception à la postproduction.
          </p>
        </div>
        <div className="hidden shrink-0 flex-col items-center font-syne text-5xl leading-tight tracking-[-0.7px] text-[#fdfbf6] opacity-10 md:flex md:w-[500px] md:text-[60px] md:leading-[64px]">
          <p>PRE-PRODUCTION</p>
          <p>PRODUCTION</p>
          <p>POST PRODUCTION</p>
        </div>
      </div>

      {/* Problème */}
      <div id="probleme" className="flex flex-col items-center gap-7 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-8 tracking-[-0.5px]">
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
            <img
              src={currentWebsite}
              alt="Site web actuel"
              className="aspect-[576/367] w-full rounded-lg object-cover"
            />
            <p className="font-syne text-lg leading-8 tracking-[-0.5px] text-[#fdfbf6]">
              Site Web Actuel
            </p>
          </div>
          <div className="flex min-w-[320px] max-w-[600px] flex-1 flex-col items-center gap-3 rounded-2xl border border-white/15 p-3 backdrop-blur-sm">
            <div
              className="relative flex aspect-[576/367] w-full items-center justify-center rounded-lg border border-violet-300/40"
              style={{
                background: 'rgba(76,29,149,0.35)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <img src={playIcon} alt="" className="h-20 w-20" />
            </div>
            <p className="font-syne text-lg leading-8 tracking-[-0.5px] text-[#fdfbf6]">
              Vidéo de l'Ancien Site Web
            </p>
          </div>
        </div>
      </div>

      {/* Audit */}
      <div id="audit" className="flex flex-col items-center gap-14 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-8 tracking-[-0.5px]">
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
        <div className="flex w-full flex-wrap items-start justify-center gap-8">
          <div className="flex w-full max-w-[592px] flex-col items-start gap-5 rounded-2xl border border-white/15 bg-white/[0.03] p-6 shadow-[0_8px_30px_rgba(74,124,89,0.18)] backdrop-blur-sm transition-all duration-300 hover:border-[#4a7c59]/50">
            <p className="flex items-center gap-2 font-syne text-xl leading-8 tracking-[-0.5px] text-[#4a7c59]">
              <img src={checkIcon} alt="" className="h-5 w-4" />
              Point Forts
            </p>
            <div
              className="flex w-full flex-wrap items-center justify-center gap-3 rounded-lg border border-violet-300/40 p-3"
              style={{
                background: 'rgba(76,29,149,0.35)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <img src={auditStrength1} alt="" className="h-32 rounded" />
              <img src={auditStrength2} alt="" className="h-32 rounded" />
              <img src={auditStrength3} alt="" className="h-32 rounded" />
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
          <div className="flex w-full max-w-[592px] flex-col items-start gap-5 rounded-2xl border border-white/15 bg-white/[0.03] p-6 shadow-[0_8px_30px_rgba(124,74,74,0.18)] backdrop-blur-sm transition-all duration-300 hover:border-[#7c4a4a]/50">
            <p className="flex items-center gap-2 font-syne text-xl leading-8 tracking-[-0.5px] text-[#7c4a4a]">
              <img src={xIcon} alt="" className="h-5 w-4" />
              Point Faible
            </p>
            <div
              className="flex w-full flex-wrap items-center justify-center gap-3 rounded-lg border border-violet-300/40 p-3"
              style={{
                background: 'rgba(76,29,149,0.35)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <img src={auditWeak1} alt="" className="h-28 rounded" />
              <img src={auditWeak3} alt="" className="h-28 rounded" />
              <img src={auditWeak4} alt="" className="h-28 rounded" />
              <img src={auditWeak5} alt="" className="h-28 rounded" />
              <img src={auditWeak6} alt="" className="h-28 rounded" />
              <img src={auditWeak7} alt="" className="h-28 rounded" />
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
      <div id="benchmark" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Benchmark des Concurrents</SectionTitle>
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col items-center text-center tracking-[-0.5px]">
            <p className="font-syne text-2xl leading-9 text-[#fdfbf6]">
              Concurrents
            </p>
            <p className="font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
              Pour situer Fine Line dans son environnement, j'ai choisi deux
              concurrents directs.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-1 min-w-[280px] items-center gap-4">
              <img
                src={competitorNab}
                alt="Né à Beyrouth Films"
                className="aspect-[727/510] flex-1 rounded object-cover"
              />
              <div className="flex flex-1 flex-col gap-1 tracking-[-0.5px]">
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
            <div className="flex flex-1 min-w-[280px] items-center gap-4">
              <img
                src={competitorForward}
                alt="Forward Film Production"
                className="aspect-[727/510] flex-1 rounded object-cover"
              />
              <div className="flex flex-1 flex-col gap-1 tracking-[-0.5px]">
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
        <div className="flex w-full flex-col items-center text-center tracking-[-0.5px]">
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
          <img
            src={benchmarkChart}
            alt="Benchmark des concurrents"
            className="flex-1 min-w-[280px] rounded"
          />
          <div className="flex flex-1 min-w-[280px] flex-col gap-4">
            <p className="text-center font-syne text-2xl leading-9 tracking-[-0.5px] text-[#fdfbf6]">
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
          <p className="w-full text-center font-syne text-xl leading-8 tracking-[-0.5px] text-[rgba(253,251,246,0.7)]">
            Suite à cette analyse, et à partir de la recherche secondaire,
            j'ai formulé les hypothèses suivantes.
          </p>
        </div>
        <ol className="list-decimal space-y-1 pl-6 text-xl leading-7 tracking-[-0.5px] text-[#fdfbf6]">
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
          <SectionTitle>Méthodologie de Recherche</SectionTitle>
          <div className="flex w-full flex-wrap items-center justify-center gap-16">
            <p className="max-w-[475px] text-center text-lg leading-7 tracking-[-0.5px] text-[rgba(253,251,246,0.85)]">
              Dans le cadre de la refonte du site de Fine Line Production, il
              me semblait essentiel de comprendre les attentes des
              utilisateurs, leurs comportements face aux sites de sociétés de
              production, ainsi que les éléments qui influencent leur
              confiance et leur engagement. Pour cela, j'ai décidé de
              combiner deux méthodes complémentaires.
            </p>
            <div className="flex items-center gap-14">
              <div className="flex flex-col items-center gap-2">
                <p className="text-center font-syne text-2xl leading-8 tracking-[-0.5px] text-[rgba(253,251,246,0.85)]">
                  Sondage en ligne
                  <br />
                  (Quantitatif)
                </p>
                <p className="text-4xl leading-none">🧍🧍🧍🧍🧍🧍🧍🧍🧍</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-center font-syne text-2xl leading-8 tracking-[-0.5px] text-[rgba(253,251,246,0.85)]">
                  Interviews
                  <br />
                  (Qualitatif)
                </p>
                <p className="text-4xl leading-none">🧍 🧍 🧍</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8">
          <p className="font-syne text-5xl leading-tight text-[#fdfbf6]">
            Sondage
          </p>
          <p className="w-full text-center text-lg leading-7 tracking-[-0.5px] text-[rgba(253,251,246,0.85)] md:text-xl">
            Le sondage a été créé avec Google Forms et diffusé via WhatsApp,
            afin de recueillir rapidement des retours auprès d'un panel
            varié. Cette approche a permis d'obtenir une vision d'ensemble
            des usages et préférences des utilisateurs.
          </p>
          <a
            href="https://drive.google.com/file/d/1Dcz9YvuJ6D4sM-q5-dw0wePRM2TpTPAz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer border border-violet-300/40 px-4 py-2 text-xl font-medium leading-7 tracking-[-0.5px] text-[#fdfbf6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)]"
          >
            Consulter les résultats du sondage (PDF)
          </a>
        </div>
        <div className="flex w-full flex-col items-start gap-8">
          <p className="font-syne text-5xl leading-tight text-[#fdfbf6]">
            Interviews
          </p>
          <p className="w-full text-center text-lg leading-7 tracking-[-0.5px] text-[rgba(253,251,246,0.85)] md:text-xl">
            Les entretiens ont été menés en visioconférence via WhatsApp, afin
            de comprendre plus en profondeur les ressentis, les attentes et
            les points de blocage des utilisateurs face aux sites de
            production audiovisuelle.
          </p>
          <a
            href="https://drive.google.com/file/d/1Tjnpj-1FCYM2leUcvz4Cjz4xHyJ4Acht/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer border border-violet-300/40 px-4 py-2 text-xl font-medium leading-7 tracking-[-0.5px] text-[#fdfbf6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)]"
          >
            Consulter la restitution complète des entretiens (PDF)
          </a>
        </div>
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

      {/* Empathy Map */}
      <div id="empathy-map" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Empathy Map</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 tracking-[-0.5px] text-[rgba(253,251,246,0.7)]">
            Afin de transformer les résultats du sondage et des entretiens en
            une vision claire et exploitable, j'ai construit une Empathy Map.
            Cet outil permet de représenter de façon visuelle ce que les
            utilisateurs voient, entendent, pensent, ressentent et font.
          </p>
        </div>
        <img src={empathyMap} alt="Empathy Map" className="w-full rounded" />
      </div>

      {/* Cible + Personas */}
      <div id="cible" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Cible</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 tracking-[-0.5px] text-[rgba(253,251,246,0.7)]">
            Les recherches menées m'ont permis de définir la cible du projet,
            puis de la concrétiser à travers un persona primaire
          </p>
        </div>
        <ol className="list-decimal space-y-4 pl-6 tracking-[-0.5px]">
          <li className="text-center">
            <p className="font-syne text-2xl leading-9 text-[#fdfbf6]">
              Entreprises de biens de grande consommation (FMCG)
            </p>
            <p className="font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
              Fine Line cible les marques de grande distribution nationale
              (Liban) telles que Cosmaline, Master Chips, Ghandour, etc.
            </p>
          </li>
          <li className="text-center">
            <p className="font-syne text-2xl leading-9 text-[#fdfbf6]">
              ONG et organisations internationales (NGOs / INGOs)
            </p>
            <p className="font-syne text-xl leading-8 text-[rgba(253,251,246,0.7)]">
              Fine Line s'adresse à des ONG locales et internationales qui
              souhaitent produire des contenus audiovisuels à fort impact
              social : campagnes de sensibilisation, documentaires, portraits
              ou vidéos éducatives.
            </p>
          </li>
        </ol>

        <p className="w-full text-center font-syne text-4xl leading-tight text-[#fdfbf6] md:text-5xl">
          Personas Primaire
        </p>
        <div className="flex w-full flex-wrap items-center gap-16">
          <img
            src={personaTania}
            alt="Persona Tania"
            className="h-[305px] w-[281px] rounded object-cover"
          />
          <div className="flex flex-1 min-w-[280px] flex-wrap gap-10 tracking-[-0.5px]">
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-syne text-2xl text-[#fdfbf6]">
                  Prénom{' '}
                </span>
                <span className="text-lg text-[rgba(253,251,246,0.7)]">Tania</span>
              </p>
              <p>
                <span className="font-syne text-2xl text-[#fdfbf6]">
                  Âge{' '}
                </span>
                <span className="text-lg text-[rgba(253,251,246,0.7)]">
                  36 ans
                </span>
              </p>
              <div>
                <p className="font-syne text-2xl text-[#fdfbf6]">Poste</p>
                <p className="text-lg text-[rgba(253,251,246,0.7)]">
                  Responsable marketing chez Gandour (entreprise libanaise de
                  produits alimentaires)
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-syne text-2xl text-[#fdfbf6]">
                  Motivation
                </p>
                <ul className="list-disc pl-5 text-lg text-[rgba(253,251,246,0.7)]">
                  <li>Rapidité et efficacité</li>
                  <li>Collaboration fluide avec les équipes</li>
                </ul>
              </div>
              <div>
                <p className="font-syne text-2xl text-[#fdfbf6]">
                  Comportements/Attitude
                </p>
                <div className="flex flex-col gap-1 text-lg text-[rgba(253,251,246,0.7)]">
                  <p>Stressée ←──●───→ Détendue</p>
                  <p>Pessimiste ←────●─→ Optimiste</p>
                  <p>Analytique ←──●───→ Créative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center gap-16">
          <div className="flex flex-1 min-w-[280px] flex-col gap-6">
            <div>
              <p className="font-syne text-2xl text-[#fdfbf6]">
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
              <p className="font-syne text-2xl text-[#fdfbf6]">
                Besoins / Objectifs
              </p>
              <ul className="list-disc pl-5 text-lg text-[rgba(253,251,246,0.7)]">
                <li>
                  Collaborer avec des équipes qui comprennent les contraintes
                  business
                </li>
                <li>Obtenir des résultats concrets dans des délais courts</li>
                <li>
                  Garantir la cohérence des campagnes avec l'image de marque
                </li>
              </ul>
            </div>
          </div>
          <img
            src={personaMoodboard}
            alt="Moodboard"
            className="w-[561px] max-w-full rounded"
          />
        </div>
      </div>

      {/* Plateforme de Marque */}
      <div id="plateforme" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Plateforme de Marque</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 tracking-[-0.5px] text-[rgba(253,251,246,0.7)]">
            Pour passer de la phase de recherche à la phase de conception,
            j'ai commencé par définir la plateforme de marque afin de
            clarifier l'identité et le positionnement de Fine Line.
          </p>
        </div>
        <img src={brandPlatform} alt="Plateforme de marque" className="w-full rounded" />
      </div>

      {/* Direction Artistique */}
      <div id="direction-artistique" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Direction Artistique</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 tracking-[-0.5px] text-[rgba(253,251,246,0.7)]">
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
        <div className="flex w-full flex-wrap gap-2">
          <img src={da1} alt="Direction artistique 1" className="flex-1 min-w-[280px] rounded" />
          <img src={da2} alt="Direction artistique 2" className="flex-1 min-w-[280px] rounded" />
        </div>
      </div>

      {/* Prototype + Wireframes */}
      <div id="prototype" className="flex flex-col items-start gap-12 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-start gap-6">
          <SectionTitle>Prototype</SectionTitle>
          <p className="w-full text-center text-lg leading-7 tracking-[-0.5px] text-[rgba(253,251,246,0.85)] md:text-xl">
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
            className="cursor-pointer border border-violet-300/40 px-4 py-2 text-xl font-medium leading-7 tracking-[-0.5px] text-[#fdfbf6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)]"
          >
            Prototype
          </a>
        </div>
        <div className="flex w-full flex-col gap-6">
          <p className="font-syne text-3xl leading-tight tracking-[-0.5px] text-[#fdfbf6]">
            Wireframes
          </p>
          <div className="flex flex-wrap items-start justify-center gap-6">
            {wireframes.map((w, i) => (
              <button
                key={w.label}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="flex w-[392px] max-w-full cursor-pointer flex-col items-start overflow-hidden rounded-lg border border-violet-300/40 text-left shadow-[0_4px_14px_rgba(139,92,246,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)]"
              >
                <img
                  src={w.img}
                  alt={w.label}
                  className="h-[374px] w-[392px] max-w-full border-b border-white/10 object-cover"
                />
                <p className="px-4 py-6 font-syne text-2xl leading-8 tracking-[-0.5px] text-[#fdfbf6]">
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

      {/* Budget */}
      <div id="budget" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-start gap-4">
          <SectionTitle>Budget</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 tracking-[-0.5px] text-[rgba(253,251,246,0.7)]">
            J'ai établi une estimation budgétaire correspondant aux étapes
            que j'ai menées, jusqu'à la conception et au prototypage. Elle
            reflète les ressources et outils nécessaires pour couvrir
            l'avancement réalisé durant mon stage alterné.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center gap-0 overflow-x-auto border border-white/10 p-6">
            <img src={budget1} alt="Budget" className="h-[300px] shrink-0" />
            <img src={budget3} alt="Budget" className="h-[300px] shrink-0" />
            <img src={budget5} alt="Budget" className="h-[300px] shrink-0" />
          </div>
          <p className="text-center text-base leading-5 tracking-[-0.5px] text-[#a3a3a3]">
            ← scrollez pour explorer →
          </p>
        </div>
      </div>

      {/* Roadmap */}
      <div id="roadmap" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-start gap-4">
          <SectionTitle>Roadmap</SectionTitle>
          <p className="w-full text-center font-syne text-xl leading-8 tracking-[-0.5px] text-[rgba(253,251,246,0.7)]">
            J'ai construit une roadmap retraçant les étapes clés du projet,
            de l'analyse du contexte au prototypage. Elle m'a permis
            d'avancer avec des livrables clairs et d'assurer une transition
            fluide entre recherche, stratégie et design. Même si certaines
            étapes ont dû être adaptées en cours de route, la progression et
            la qualité des résultats ont été préservées.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center gap-0 overflow-x-auto border border-white/10 p-6">
            <img src={roadmap1} alt="Roadmap" className="h-[300px] shrink-0" />
            <img src={roadmap3} alt="Roadmap" className="h-[300px] shrink-0" />
            <img src={roadmap4} alt="Roadmap" className="h-[300px] shrink-0" />
          </div>
          <p className="text-center text-base leading-5 tracking-[-0.5px] text-[#a3a3a3]">
            ← scrollez pour explorer →
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div id="conclusion" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Conclusion</SectionTitle>
        <p className="w-full text-center text-lg leading-7 tracking-[-0.5px] text-[rgba(253,251,246,0.85)] md:text-xl">
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
