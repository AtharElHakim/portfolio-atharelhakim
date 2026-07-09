import { useState } from 'react'
import Contact from '../components/Contact'
import Lightbox from '../components/Lightbox'
import CaseStudyNav from '../components/CaseStudyNav'
import logoLabel from '../assets/angrybirds/logo-full.png'
import heroIllustration from '../assets/angrybirds/hero-illustration.gif'
import briefIllustration from '../assets/angrybirds/brief-illustration.png'

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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-syne text-4xl leading-tight text-[#fdfbf6] md:text-5xl md:leading-[48px]">
      {children}
    </p>
  )
}

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
    <div id={id} className="relative flex flex-col items-start gap-6 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      <SectionTitle>{title}</SectionTitle>
      <ul className="flex list-disc flex-col gap-1 pl-5 text-lg leading-7 tracking-[-0.5px] text-[rgba(253,251,246,0.75)] md:text-xl">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => onOpen(images, i)}
            className="h-[86px] w-[153px] shrink-0 cursor-pointer overflow-hidden rounded-lg border border-violet-300/40 opacity-90 shadow-[0_4px_14px_rgba(139,92,246,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)]"
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
    <>
      <CaseStudyNav
        sections={[
          { id: 'brief', label: 'Le Brief' },
          { id: 'dossier', label: 'Le Dossier' },
          { id: 'conclusion', label: 'Conclusion' },
          { id: 'contact', label: 'Contact' },
        ]}
      />

      {/* Header */}
      <div className="relative flex flex-col items-center gap-8 p-8 md:flex-row md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full max-w-[739px] flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-6">
            <img src={logoLabel} alt="Angry Birds" className="h-7" />
            <h1 className="font-syne text-5xl leading-tight tracking-[-0.7px] text-[#fdfbf6] md:text-[72px] md:leading-[72px]">
              Research Ops
              <br />
              Angry Birds
            </h1>
          </div>
          <div className="flex flex-col gap-10">
            <p className="border-b border-white/10 pb-8 text-lg leading-7 tracking-[-0.5px] text-[rgba(253,251,246,0.85)]">
              Ce projet, réalisé en binôme sur 4 jours dans le cadre d'un
              exercice de Research Ops à Sup de Pub, consistait à inventer
              une étude qualitative de A à Z et à la vendre à un client. Le
              brief qui nous a été donné : comprendre les usages du
              téléphone chez les garçons de 8 à 12 ans pour Angry Birds. Nous
              avons conçu une méthodologie combinant mobile tracking et
              ateliers participatifs avec entretiens parent-enfant, pour
              croiser usages réels et ressentis et identifier les moments
              clés d'engagement.
            </p>
            <div className="flex flex-wrap items-start gap-16">
              <div className="flex flex-col gap-1 tracking-[-0.5px]">
                <p className="text-xl font-semibold leading-7 text-[#fdfbf6]">
                  Mon Rôle
                </p>
                <div className="text-lg leading-7 text-[rgba(253,251,246,0.75)]">
                  <p>Conception du protocole de recherche</p>
                  <p>Définition des objectifs</p>
                  <p>Définition des hypothèses</p>
                  <p>Création de la méthodologie de recherche</p>
                  <p>Design du dossier</p>
                  <p>Conception de la roadmap et des KPIs</p>
                  <p>Rédaction de l'argumentation client</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 tracking-[-0.5px]">
                <p className="text-xl font-semibold leading-7 text-[#fdfbf6]">
                  Outils
                </p>
                <p className="text-lg leading-7 text-[rgba(253,251,246,0.75)]">
                  Figma
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 tracking-[-0.5px]">
                <p className="text-xl font-semibold leading-7 text-[#fdfbf6]">
                  Année
                </p>
                <p className="text-lg leading-7 text-[rgba(253,251,246,0.75)]">
                  2026
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full flex-1 overflow-hidden rounded-2xl border border-violet-300/40 p-4"
          style={{
            background: 'rgba(76,29,149,0.35)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <img
            src={heroIllustration}
            alt="Illustration Angry Birds"
            className="w-full rounded-xl"
          />
        </div>
      </div>

      {/* Le Brief */}
      <div
        id="brief"
        className="relative flex flex-col items-center gap-8 p-8 md:flex-row md:py-16 md:px-[var(--nav-edge-w)]"
      >
        <div className="flex flex-1 min-w-[280px] flex-col items-start gap-8">
          <SectionTitle>Le Brief</SectionTitle>
          <p className="text-lg leading-7 tracking-[-0.5px] text-[rgba(253,251,246,0.75)]">
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
          </p>
        </div>
        <img
          src={briefIllustration}
          alt=""
          className="w-full max-w-[400px] flex-1 opacity-80"
        />
      </div>

      {/* Le Dossier */}
      <div id="dossier" className="relative p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <p className="font-syne text-4xl leading-tight text-[#fdfbf6] md:text-5xl md:leading-[48px]">
          Le Dossier
        </p>
        <p className="pt-4 text-lg leading-7 tracking-[-0.5px] text-[rgba(253,251,246,0.75)]">
          Voici le dossier complet tel qu'il aurait été présenté à un client
          — cliquez sur une vignette pour le parcourir diapositive par
          diapositive. Chaque section ci-dessous en résume aussi
          l'enchaînement en quelques lignes.
        </p>
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
        title="Études (Methode 1)"
        bullets={[
          'Présentation de la première méthode de recherche retenue',
          'Déroulé étape par étape de la collecte sur le terrain',
          'Premiers enseignements récoltés',
        ]}
        images={etudesM1Images}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Études (Methode 2)"
        bullets={[
          'Présentation du format (focus group + entretiens) : type, temps, lieu, nombre de participants et d’animateurs',
          "Cadre légal détaillé : contrat parental couvrant consentement, RGPD, autorisation d'enregistrement et droit de retrait",
          'Déroulé de l’atelier : les enfants expriment leurs souhaits et obstacles liés à l’usage du téléphone',
          'Phase de vote collectif pour prioriser les sujets, puis entretiens individuels parent-enfant',
        ]}
        images={etudesM2P1Images}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Études (Methode 2 Phase 2)"
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
          'Lien direct entre ces KPIs et les objectifs business d’Angry Birds',
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
          'Message de clôture pensé pour convaincre le client de valider l’étude',
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
    </>
  )
}
