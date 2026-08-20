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
                Ce projet, réalisé seul sur 4 jours dans le cadre d'un
                exercice de Research Ops à Sup de Pub, consistait à inventer
                une étude qualitative de A à Z et à la vendre à un client. Le
                brief qui m'a été donné : comprendre les usages du
                téléphone chez les garçons de 8 à 12 ans pour Angry Birds.
                J'ai conçu une méthodologie combinant mobile tracking
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
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:flex-row md:p-8">
          <img
            src={briefIllustration}
            alt=""
            className="w-full max-w-[280px] shrink-0 opacity-70 invert md:max-w-[320px]"
          />
          <Body1 className="font-light">
            L'exercice consistait à concevoir et vendre une étude qualitative
            de A à Z à un client, en jouant le rôle d'une agence de
            recherche.
            <br />
            <br />
            Le client et la cible ont été tirés au sort parmi 4 options. J'ai
            hérité du cas Angry Birds : comprendre les usages
            quotidiens du téléphone chez les garçons de 8 à 12 ans, afin
            d'identifier les moments de jeu, les motivations et les
            frustrations pour mieux adapter l'expérience utilisateur du jeu.
          </Body1>
        </div>
      </div>

      {/* Le Dossier */}
      <div id="dossier" className="relative flex flex-col items-center gap-4 p-8 text-center md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Le Dossier</SectionTitle>
        <Body1 className="w-full max-w-[720px] font-light">
          Voici le dossier complet tel qu'il aurait été présenté à un client
          réel, qui ne maîtrise pas nécessairement le vocabulaire UX/UI.
          Cliquez sur une vignette pour le parcourir diapositive par
          diapositive. Chaque section ci-dessous en résume aussi
          l'enchaînement en quelques lignes.
        </Body1>
      </div>

      <SlideGallery
        title="Introduction"
        bullets={[
          "J'ai ouvert sur une énigme : « Comment voir les poissons dans la mer ? » Réponse : on plonge",
          "Et c'est exactement ce que j'ai fait, plonger dans l'univers numérique des enfants pour vraiment comprendre leurs usages",
          "De là, j'ai enchaîné sur le sujet et le protocole que j'ai suivi pour y arriver",
        ]}
        images={introImages}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Protocole de Recherche"
        bullets={[
          "J'ai posé le cadre : un protocole en 6 étapes, du contexte à la restitution finale",
          "Angry Birds, c'est un jeu créé par Rovio en 2009 pour les enfants. J'ai resserré ma cible sur les garçons de 8 à 12 ans, et je l'ai coupée en deux (8 à 9 ans et 10 à 12 ans) pour mieux comparer",
          "Je me suis fixé 4 objectifs (temps d'écran, motivations, moments de plaisir et de frustration, ce qui engage) et j'ai posé mes premières hypothèses",
        ]}
        images={protocoleImages}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Études (Méthode 1)"
        bullets={[
          "Première méthode, le phone tracking : j'ai suivi 10 garçons 2 jours chacun (un jour d'école, un jour de week-end) via l'application Qustudio, sans jamais toucher à leurs données privées",
          "J'ai récolté le temps d'écran total, la durée et le nombre de sessions, les applications les plus utilisées",
          "Résultat : une cartographie du parcours type par tranche d'âge, et un tableau qui compare les deux groupes",
        ]}
        images={etudesM1Images}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Études (Méthode 2)"
        bullets={[
          "Deuxième méthode, un atelier de 2h avec les mêmes 10 garçons. J'ai démarré par un icebreaker, la création d'un avatar : « il n'y a pas de bonne ou mauvaise réponse »",
          "Sur des post-its verts et rouges, chacun a noté ses souhaits et ce qui le bloquait avec son téléphone, puis j'ai tout collé sur une carte représentant une journée type",
          "Et j'ai encadré tout ça légalement : consentement parental, RGPD, autorisation d'enregistrement, droit de retrait",
        ]}
        images={etudesM2P1Images}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Études (Méthode 2 Phase 2)"
        bullets={[
          "Les enfants ont voté pour leurs 4 souhaits et 4 obstacles préférés, puis les ont transformés eux-mêmes en questions pour leurs parents",
          "Et là, je leur ai réservé une surprise : « c'est vous qui allez poser ces questions directement à vos parents », en entretien individuel de 15 minutes",
          "J'en suis ressorti avec 4 cartographies d'usage, un tableau comparatif, et une analyse qui révèle les écarts entre ce que vivent les enfants et ce qu'en perçoivent leurs parents",
        ]}
        images={etudesM2P2Images}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Budget"
        bullets={[
          "J'ai proposé trois formules, du plus simple au plus complet : phone tracking seul (26 500€), tracking plus atelier (42 800€, mon choix conseillé), ou le pack complet avec implémentation et tests utilisateurs (60 200€)",
          "Chaque euro était justifié, poste par poste : logistique, recrutement des familles, temps des UX researchers",
          "Et j'ai chiffré l'impact attendu : la durée moyenne de session pourrait grimper à 10 à 14 minutes, la rétention à 7 jours passer de 15% à 20 ou 22%",
        ]}
        images={budgetImages}
        onOpen={openGallery}
      />

      <SlideGallery
        title="Roadmap"
        bullets={[
          "9 phases, 6 mois : je suis parti du recrutement des 10 familles pour arriver aux tests utilisateurs finaux sur Angry Birds",
          "J'ai enchaîné les deux méthodes, tracking mobile puis atelier et entretiens, avant de croiser les deux regards dans une phase d'analyse",
          "Et à chaque étape, j'ai livré quelque chose de concret (cartographies, rapport, présentation client) pour suivre l'avancement semaine par semaine",
        ]}
        images={roadmapImages}
        onOpen={openGallery}
      />

      <SlideGallery
        title="KPIs"
        bullets={[
          "Je suis allé plus loin que le simple « combien de temps » : temps d'écran, nombre et durée des sessions, applications préférées, pics d'usage en semaine ou le week-end",
          "J'ai aussi regardé la fidélité, ce qui fait revenir un enfant sur une appli, et à quelle vitesse",
          "Et j'ai gardé des indicateurs plus humains, ceux de l'atelier : quels obstacles reviennent le plus souvent, et où enfants et parents ne voient pas les choses pareil",
        ]}
        images={kpisImages}
        onOpen={openGallery}
      />

      <SlideGallery
        id="conclusion"
        title="Conclusion"
        bullets={[
          "Avec cette étude, Angry Birds ne se contente plus de savoir combien de temps un enfant joue, mais comprend ce qui le fait rester, et ce qui le frustre",
          "À court terme, ça optimise l'engagement. À long terme, ça construit une relation durable avec les jeunes joueurs et leurs parents",
          "Et j'ai refermé sur une note pensée pour convaincre le client de dire oui",
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
