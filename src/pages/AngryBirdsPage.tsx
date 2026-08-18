import { useState } from 'react'
import Contact from '../components/Contact'
import Lightbox from '../components/Lightbox'
import CaseStudyNav from '../components/CaseStudyNav'
import logoLabel from '../assets/angrybirds/logo-full.svg'
import heroIllustration from '../assets/angrybirds/hero-illustration.gif'
import briefIllustration from '../assets/angrybirds/brief-illustration.png'
import { H1, H2 as SectionTitle, H5, Body1, Body2 } from '../components/Typography'

function loadGallery(globResult: Record<string, string>) {
  return Object.entries(globResult)
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/(\d+)\.png$/)?.[1] ?? '0', 10)
      const numB = parseInt(b.match(/(\d+)\.png$/)?.[1] ?? '0', 10)
      return numA - numB
    })
    .map(([, url]) => url)
}

const introImages = loadGallery(
  import.meta.glob('../assets/angrybirds/intro/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)
const protocoleImages = loadGallery(
  import.meta.glob('../assets/angrybirds/protocole/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)
const etudesM1Images = loadGallery(
  import.meta.glob('../assets/angrybirds/etudes-m1/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)
const etudesM2P1aImages = loadGallery(
  import.meta.glob('../assets/angrybirds/etudes-m2p1a/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)
const etudesM2P1bImages = loadGallery(
  import.meta.glob('../assets/angrybirds/etudes-m2p1b/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)
const etudesM2P1Images = [...etudesM2P1aImages, ...etudesM2P1bImages]
const etudesM2P2Images = loadGallery(
  import.meta.glob('../assets/angrybirds/etudes-m2p2/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)
const budgetImages = loadGallery(
  import.meta.glob('../assets/angrybirds/budget/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)
const roadmapImages = loadGallery(
  import.meta.glob('../assets/angrybirds/roadmap/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)
const kpisImages = loadGallery(
  import.meta.glob('../assets/angrybirds/kpis/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)
const conclusionImages = loadGallery(
  import.meta.glob('../assets/angrybirds/conclusion/*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>,
)

function SlideGallery({
  id,
  title,
  bullets,
  images,
  onOpen,
}: {
  id?: string
  title: string
  bullets: string[]
  images: string[]
  onOpen: (images: string[], index: number) => void
}) {
  return (
    <div id={id} className="relative flex flex-col items-center gap-6 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      <SectionTitle>{title}</SectionTitle>
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8">
        <ul className="flex w-full list-disc flex-col gap-2 pl-5 text-left text-base leading-6 text-white/70">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => onOpen(images, i)}
              className="h-[86px] w-[153px] shrink-0 cursor-pointer overflow-hidden rounded-xl border border-purple-pale/40 opacity-90 shadow-[0_4px_14px_color-mix(in_oklab,var(--color-purple-mid)_20%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:shadow-[0_8px_20px_color-mix(in_oklab,var(--color-purple-mid)_35%,transparent)]"
            >
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="size-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AngryBirdsPage() {
  const [lightbox, setLightbox] = useState<{
    images: string[]
    index: number
  } | null>(null)

  function openGallery(images: string[], index: number) {
    setLightbox({ images, index })
  }

  return (
    <div className="relative isolate">
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'Overview' },
          { id: 'brief', label: 'Le Brief' },
          { id: 'dossier', label: 'Le Dossier' },
          { id: 'conclusion', label: 'Conclusion' },
        ]}
      />

      {/* Header */}
      <div id="overview" className="relative flex flex-col items-center gap-6 px-8 pb-8 pt-4 md:pb-16 md:pt-10 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <img src={logoLabel} alt="Angry Birds" className="h-9" />
          <H1 className="md:!text-5xl md:!leading-[56px]">Research Ops · Angry Birds</H1>

          <div className="flex w-full max-w-[820px] aspect-[820/429] items-center justify-center overflow-hidden rounded-2xl border border-purple-pale/50 bg-[#514DA1] p-4">
            <img
              src={heroIllustration}
              alt="Illustration Angry Birds"
              className="max-h-full max-w-full rounded-xl"
              style={{ clipPath: 'inset(1px 1px 1px 0)' }}
            />
          </div>

          <div className="flex w-full max-w-[820px] flex-col items-center gap-8 border-t border-white/10 pt-8 text-center">
            <div className="flex w-full flex-col items-center gap-2">
              <H5 className="!text-lg">Overview</H5>
              <Body1 className="!text-white font-light">
                Ce projet, réalisé en binôme sur 4 jours dans le cadre d'un
                exercice de Research Ops à Sup de Pub, consistait à inventer
                une étude qualitative de A à Z et à la vendre à un client. Le
                brief qui nous a été donné : comprendre les usages du
                téléphone chez les garçons de 8 à 12 ans pour Angry Birds.
                Nous avons conçu une méthodologie combinant mobile tracking
                et ateliers participatifs avec entretiens parent-enfant,
                pour croiser usages réels et ressentis et identifier les
                moments clés d'engagement.
              </Body1>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <H5 className="!text-lg !text-purple-pale/70">Mon Rôle</H5>
                <ul className="mx-auto list-outside list-disc space-y-1.5 pl-5 text-left font-light text-lg leading-7 text-white marker:text-xs marker:text-white [&>li]:pl-2 md:text-xl">
                  <li>Conception du protocole de recherche</li>
                  <li>Définition des objectifs</li>
                  <li>Définition des hypothèses</li>
                  <li>Création de la méthodologie de recherche</li>
                  <li>Design du dossier</li>
                  <li>Conception de la roadmap et des KPIs</li>
                  <li>Rédaction de l'argumentation client</li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-2">
                <H5 className="!text-lg !text-purple-pale/70">Outils</H5>
                <ul className="list-none text-center font-light text-lg leading-7 text-white md:text-xl">
                  <li>Figma</li>
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
      <div
        id="brief"
        className="relative flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]"
      >
        <SectionTitle>Le Brief</SectionTitle>
        <div className="mx-auto flex w-full max-w-[1000px] flex-wrap items-center justify-center gap-8">
          <div className="flex min-w-[280px] flex-1 flex-col items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <Body1 className="font-light">
              L'exercice consistait à concevoir et vendre une étude qualitative
              de A à Z à un client, en jouant le rôle d'une agence de
              recherche.
              <br />
              <br />
              Le client et la cible ont été tirés au sort parmi 4 options. Nous
              avons hérité du cas Angry Birds : comprendre les usages
              quotidiens du téléphone chez les garçons de 8 à 12 ans, afin
              d'identifier les moments de jeu, les motivations et les
              frustrations pour mieux adapter l'expérience utilisateur du jeu.
            </Body1>
          </div>
          <img
            src={briefIllustration}
            alt=""
            className="w-full max-w-[320px] flex-1 opacity-80"
          />
        </div>
      </div>

      {/* Le Dossier */}
      <div id="dossier" className="relative flex flex-col items-center gap-4 p-8 text-center md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Le Dossier</SectionTitle>
        <Body1 className="w-full max-w-[720px] font-light">
          Voici le dossier complet tel qu'il aurait été présenté à un client
          — cliquez sur une vignette pour le parcourir diapositive par
          diapositive. Chaque section ci-dessous en résume aussi
          l'enchaînement en quelques lignes.
        </Body1>
      </div>

      <SlideGallery
        title="Introduction"
        bullets={[
          "Accroche avec une question incongrue pour capter l'attention du client dès la première slide",
          "Présentation du titre de l'étude et du sujet",
          'Transition vers le protocole de recherche',
        ]}
        images={introImages}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Protocole de Recherche"
        bullets={[
          "Définition de ce qu'est un protocole de recherche (pourquoi, comment, avec qui, avec quels outils)",
          'Présentation du contexte du projet',
          'Détail des objectifs et des premières hypothèses',
        ]}
        images={protocoleImages}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Études (Méthode 1)"
        bullets={[
          'Présentation de la première méthode de recherche retenue',
          'Déroulé étape par étape de la collecte sur le terrain',
          'Premiers enseignements récoltés',
        ]}
        images={etudesM1Images}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Études (Méthode 2)"
        bullets={[
          "Présentation du format (focus group + entretiens) : type, temps, lieu, nombre de participants et d'animateurs",
          "Cadre légal détaillé : contrat parental couvrant consentement, RGPD, autorisation d'enregistrement et droit de retrait",
          "Déroulé de l'atelier : les enfants expriment leurs souhaits et obstacles liés à l'usage du téléphone",
          'Phase de vote collectif pour prioriser les sujets, puis entretiens individuels parent-enfant',
        ]}
        images={etudesM2P1Images}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Études (Méthode 2 Phase 2)"
        bullets={[
          'Vote collectif : les enfants priorisent leurs souhaits et obstacles à partir des post-its récoltés',
          'Les animateurs comptabilisent les votes et retiennent les sujets les plus cités',
          'Préparation et conduite des entretiens individuels qui en découlent',
        ]}
        images={etudesM2P2Images}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Budget"
        bullets={[
          'Plusieurs options tarifaires proposées selon le périmètre de la mission',
          'Détail des postes de coûts : logistique, animateurs, outils de tracking',
          'Justification du choix recommandé pour le client',
        ]}
        images={budgetImages}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Roadmap"
        bullets={[
          'Planning découpé en grandes phases (préparation, terrain, analyse, restitution)',
          "Détail des livrables attendus à chaque étape (panel, kit d'onboarding...)",
          'Vision claire du calendrier semaine par semaine pour rassurer le client',
        ]}
        images={roadmapImages}
        onOpen={openGallery}
      />

      <SlideGallery
        title="KPIs"
        bullets={[
          "Liste des indicateurs suivis : temps d'écran, durée et nombre de sessions, usages par application",
          "Indicateurs de fidélité et de comportement : taux de retour, switching entre applis, facilité d'accès",
          "Lien direct entre ces KPIs et les objectifs business d'Angry Birds",
        ]}
        images={kpisImages}
        onOpen={openGallery}
      />

      <SlideGallery
        id="conclusion"
        title="Conclusion"
        bullets={[
          'Synthèse de la valeur apportée : comprendre non seulement le temps de jeu, mais aussi les motivations et frustrations',
          'Bénéfices mis en avant à court terme (engagement) et à long terme (fidélisation)',
          "Message de clôture pensé pour convaincre le client de valider l'étude",
        ]}
        images={conclusionImages}
        onOpen={openGallery}
      />

      <Contact transparent />

      {lightbox && (
        <Lightbox
          images={lightbox.images.map((src, i) => ({
            src,
            alt: `Diapositive ${i + 1}`,
          }))}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) =>
            setLightbox((prev) => (prev ? { ...prev, index } : null))
          }
        />
      )}
    </div>
  )
}
