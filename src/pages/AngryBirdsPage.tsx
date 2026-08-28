import { useState, type ReactNode } from 'react'
import Contact from '../components/Contact'
import Lightbox from '../components/Lightbox'
import CaseStudyNav from '../components/CaseStudyNav'
import Coverflow from '../components/Coverflow'
import logoLabel from '../assets/angrybirds/logo-full.svg'
import heroIllustration from '../assets/angrybirds/hero-illustration.gif'
import briefIllustration from '../assets/angrybirds/brief-illustration.png'
import { H1, H2 as SectionTitle, H5, Body1, Body2, Micro1 } from '../components/Typography'

/* Sort by the trailing number in the source path (the glob KEY, not the
   resolved URL — Vite hashes and flattens URLs in the production build). */
function loadGallery(globResult: Record<string, string>) {
  return Object.entries(globResult)
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/(\d+)\.png$/)?.[1] ?? '0', 10)
      const numB = parseInt(b.match(/(\d+)\.png$/)?.[1] ?? '0', 10)
      return numA - numB
    })
    .map(([, url]) => url)
}

/* Vite requires the options object to be an inline literal in each call. */
const introImages = loadGallery(import.meta.glob('../assets/angrybirds/intro/*.png', { eager: true, import: 'default' }) as Record<string, string>)
const protocoleImages = loadGallery(import.meta.glob('../assets/angrybirds/protocole/*.png', { eager: true, import: 'default' }) as Record<string, string>)
const etudesM1Images = loadGallery(import.meta.glob('../assets/angrybirds/etudes-m1/*.png', { eager: true, import: 'default' }) as Record<string, string>)
const etudesM2Images = [
  ...loadGallery(import.meta.glob('../assets/angrybirds/etudes-m2p1a/*.png', { eager: true, import: 'default' }) as Record<string, string>),
  ...loadGallery(import.meta.glob('../assets/angrybirds/etudes-m2p1b/*.png', { eager: true, import: 'default' }) as Record<string, string>),
]
const etudesM2P2Images = loadGallery(import.meta.glob('../assets/angrybirds/etudes-m2p2/*.png', { eager: true, import: 'default' }) as Record<string, string>)
const budgetImages = loadGallery(import.meta.glob('../assets/angrybirds/budget/*.png', { eager: true, import: 'default' }) as Record<string, string>)
const roadmapImages = loadGallery(import.meta.glob('../assets/angrybirds/roadmap/*.png', { eager: true, import: 'default' }) as Record<string, string>)
const kpisImages = loadGallery(import.meta.glob('../assets/angrybirds/kpis/*.png', { eager: true, import: 'default' }) as Record<string, string>)
const conclusionImages = loadGallery(import.meta.glob('../assets/angrybirds/conclusion/*.png', { eager: true, import: 'default' }) as Record<string, string>)

/* Sections in deck order. Each carousel shows its own slice, but clicking a
   card opens the Lightbox on the whole deck at the right slide — so the
   viewer can keep flipping past section boundaries. */
const deckSections = [
  { id: 'introduction', title: 'Introduction', images: introImages },
  { id: 'protocole', title: 'Protocole de Recherche', images: protocoleImages },
  { id: 'methode-1', title: 'Études (Méthode 1)', images: etudesM1Images },
  { id: 'methode-2', title: 'Études (Méthode 2)', images: etudesM2Images },
  { id: 'methode-2-phase-2', title: 'Études (Méthode 2 · Phase 2)', images: etudesM2P2Images },
  { id: 'budget', title: 'Budget', images: budgetImages },
  { id: 'roadmap', title: 'Roadmap', images: roadmapImages },
  { id: 'kpis', title: 'KPIs', images: kpisImages },
  { id: 'conclusion', title: 'Conclusion', images: conclusionImages },
] as const

const allSlides = deckSections.flatMap((s) => s.images)
const sectionOffset: Record<string, number> = {}
{
  let acc = 0
  for (const s of deckSections) {
    sectionOffset[s.id] = acc
    acc += s.images.length
  }
}

/* Read off the deck slides (protocole/2.png, roadmap/2-4.png). */
const protocoleSteps = [
  'Contexte',
  'Objectifs',
  'Hypothèses',
  'Études',
  'Panélistes',
  'Restitution',
]

const roadmapPhases = [
  { name: 'Préparation Méthode 1', duration: '3 semaines' },
  { name: 'Méthode 1 : tracking mobile', duration: '2 semaines' },
  { name: 'Analyse Méthode 1', duration: '2 semaines' },
  { name: 'Préparation Méthode 2', duration: '2 jours' },
  { name: 'Méthode 2 : ateliers + entretiens', duration: '2 jours' },
  { name: 'Analyse Méthode 2', duration: '3 semaines' },
  { name: 'Analyse globale & recommandations', duration: '3 semaines' },
  { name: 'Restitution client', duration: '3 semaines' },
  { name: 'Implémentation & tests utilisateurs', duration: '6 mois' },
]

function DeckSection({
  id,
  title,
  images,
  onOpen,
  children,
}: {
  id: string
  title: string
  images: string[]
  onOpen: (globalIndex: number) => void
  children: ReactNode
}) {
  return (
    <div
      id={id}
      className="relative flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]"
    >
      <SectionTitle>{title}</SectionTitle>
      <div className="flex w-full max-w-[900px] flex-col items-center gap-6">
        {children}
      </div>
      <Coverflow
        slides={images}
        ariaLabel={`${title}, diapositives`}
        onOpen={(i) => onOpen((sectionOffset[id] ?? 0) + i)}
      />
    </div>
  )
}

export default function AngryBirdsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="relative isolate">
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'Overview' },
          { id: 'brief', label: 'Le Brief' },
          { id: 'dossier', label: 'Le Dossier' },
          { id: 'introduction', label: 'Introduction' },
          { id: 'protocole', label: 'Protocole' },
          { id: 'methode-1', label: 'Méthode 1' },
          { id: 'methode-2', label: 'Méthode 2' },
          { id: 'methode-2-phase-2', label: 'Méthode 2 · Phase 2' },
          { id: 'budget', label: 'Budget' },
          { id: 'roadmap', label: 'Roadmap' },
          { id: 'kpis', label: 'KPIs' },
          { id: 'conclusion', label: 'Conclusion' },
        ]}
      />

      {/* Header */}
      <div
        id="overview"
        className="flex flex-col items-center gap-6 px-8 pb-8 pt-4 md:pb-16 md:pt-10 md:px-[var(--nav-edge-w)]"
      >
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <img src={logoLabel} alt="Angry Birds" className="h-9" />
          <H1 className="md:!text-5xl md:!leading-[52.8px]">Research Ops · Angry Birds</H1>

          <div
            className="flex w-full max-w-[820px] aspect-[820/429] items-center justify-center overflow-hidden rounded-2xl border border-purple-pale/50"
            /* Exception: frame fill is sampled straight from the hero
               illustration's own flat background (#514ea1) so the letterbox
               bars blend into the artwork instead of showing a seam. */
            style={{ background: '#514ea1' }}
          >
            <img
              src={heroIllustration}
              alt="Illustration Angry Birds"
              className="max-h-full max-w-full rounded-xl"
              style={{ clipPath: 'inset(1px 1px 1px 0)' }}
            />
          </div>

          <div className="flex w-full flex-col items-center gap-8 border-t border-white/10 pt-8 text-center">
            <div className="flex w-full flex-col items-center gap-2">
              <H5 className="!text-lg">Overview</H5>
              <Body1 className="w-full text-center !text-white font-light">
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
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:flex-row">
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
      <div
        id="dossier"
        className="relative flex flex-col items-center gap-4 p-8 text-center md:py-16 md:px-[var(--nav-edge-w)]"
      >
        <SectionTitle>Le Dossier</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Le dossier a été conçu pour un client qui ne maîtrise pas le
          vocabulaire UX. Les sections ci-dessous en retracent le fil,
          diapositives à l'appui.
        </Body1>
      </div>

      <DeckSection
        id="introduction"
        title="Introduction"
        images={introImages}
        onOpen={setLightboxIndex}
      >
        <p className="mx-auto whitespace-nowrap text-center font-syne text-[clamp(0.95rem,4.6vw,1.875rem)] leading-snug text-white">
          « Pour voir les poissons, il faut plonger. »
        </p>
        <Body1 className="w-full text-center font-light">
          C'est l'image qui ouvre le dossier. Comprendre les usages du
          téléphone chez des garçons de 8 à 12 ans demandait la même chose :
          entrer dans leur quotidien numérique plutôt que l'observer de loin.
        </Body1>
      </DeckSection>

      <DeckSection
        id="protocole"
        title="Protocole de Recherche"
        images={protocoleImages}
        onOpen={setLightboxIndex}
      >
        <Body1 className="w-full text-center font-light">
          Un protocole en 6 étapes, du cadrage à la restitution client.
        </Body1>
        <ol className="flex w-full flex-wrap items-center justify-center gap-2">
          {protocoleSteps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-3.5"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-purple-mid/30 text-xs font-semibold text-purple-pale">
                {i + 1}
              </span>
              <span className="text-sm text-white/80">{step}</span>
            </li>
          ))}
        </ol>
        <div className="grid w-full gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Cible</H5>
            <Body2>
              Garçons de 8 à 12 ans, scindés en 8–9 ans et 10–12 ans pour
              comparer les tranches d'âge (Angry Birds, Rovio, 2009).
            </Body2>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">4 objectifs</H5>
            <Body2>
              Temps d'écran, motivations, moments de plaisir et de
              frustration, leviers d'engagement. Premières hypothèses posées à
              ce stade.
            </Body2>
          </div>
        </div>
      </DeckSection>

      <DeckSection
        id="methode-1"
        title="Études (Méthode 1)"
        images={etudesM1Images}
        onOpen={setLightboxIndex}
      >
        <Body1 className="w-full text-center font-light">
          <strong className="font-medium text-white">Phone tracking.</strong>{' '}
          10 garçons suivis 2 jours chacun, un jour d'école et un jour de
          week-end, via l'application Qustodio, sans accès à leurs données
          personnelles. Relevé : temps d'écran total, nombre et durée des
          sessions, applications les plus utilisées. Sortie : une cartographie
          du parcours type par tranche d'âge et un tableau comparant les deux
          groupes.
        </Body1>
      </DeckSection>

      <DeckSection
        id="methode-2"
        title="Études (Méthode 2)"
        images={etudesM2Images}
        onOpen={setLightboxIndex}
      >
        <Body1 className="w-full text-center font-light">
          <strong className="font-medium text-white">
            Atelier participatif, 2 heures
          </strong>
          , avec les mêmes 10 garçons. Démarrage par un icebreaker (création
          d'un avatar, « il n'y a pas de bonne ou de mauvaise réponse ») pour
          lever la barrière de la performance. Chacun note ensuite sur des
          post-its verts et rouges ce qu'il aimerait faire et ce qui le bloque
          avec son téléphone ; le tout est reporté sur une carte de journée
          type.
        </Body1>
        <Micro1 className="w-full text-center italic">
          Cadre légal : consentement parental, RGPD, autorisation
          d'enregistrement, droit de retrait.
        </Micro1>
      </DeckSection>

      <DeckSection
        id="methode-2-phase-2"
        title="Études (Méthode 2 · Phase 2)"
        images={etudesM2P2Images}
        onOpen={setLightboxIndex}
      >
        <p className="mx-auto max-w-[40ch] text-center font-syne text-xl font-medium text-purple-pale md:text-2xl">
          Le twist : ce sont les enfants qui interrogent leurs parents.
        </p>
        <Body1 className="w-full text-center font-light">
          Après un vote sur leurs 4 souhaits et 4 obstacles prioritaires, les
          enfants les ont reformulés en questions, qu'ils ont posées
          eux-mêmes à leurs parents en entretien individuel de 15 minutes. En
          sortie : 4 cartographies d'usage, un tableau comparatif et une
          analyse des écarts entre ce que vivent les enfants et ce qu'en
          perçoivent leurs parents.
        </Body1>
      </DeckSection>

      <DeckSection
        id="budget"
        title="Budget"
        images={budgetImages}
        onOpen={setLightboxIndex}
      >
        <Body1 className="w-full text-center font-light">
          Trois formules, chiffrées poste par poste : logistique, recrutement
          des familles, temps de recherche.
        </Body1>
        <div className="grid w-full gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-1 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-white/50">Essentiel</H5>
            <p className="font-syne text-2xl text-white">26 500 €</p>
            <Body2 className="mt-1">Phone tracking seul.</Body2>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl border-[1.5px] border-purple-pale/50 bg-purple-dark/25 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Conseillé</H5>
            <p className="font-syne text-2xl text-white">42 800 €</p>
            <Body2 className="mt-1 !text-white/85">
              Tracking + atelier participatif.
            </Body2>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-white/50">Complet</H5>
            <p className="font-syne text-2xl text-white">60 200 €</p>
            <Body2 className="mt-1">+ implémentation et tests utilisateurs.</Body2>
          </div>
        </div>
        <Body1 className="w-full text-center font-light">
          Impact projeté : session moyenne de 10 à 14&nbsp;min, rétention à
          7&nbsp;jours de&nbsp;15&nbsp;% à 20–22&nbsp;%.
        </Body1>
      </DeckSection>

      <DeckSection
        id="roadmap"
        title="Roadmap"
        images={roadmapImages}
        onOpen={setLightboxIndex}
      >
        <Body1 className="w-full text-center font-light">
          9 phases sur 6 mois, du recrutement des familles aux tests
          utilisateurs finaux. Un livrable concret à chaque étape :
          cartographies, rapport, présentation client.
        </Body1>
        <ol className="flex w-full max-w-[640px] flex-col">
          {roadmapPhases.map((phase, i) => (
            <li
              key={phase.name}
              className="flex items-baseline gap-4 border-l-2 border-white/15 py-2 pl-4"
            >
              <span className="font-syne text-lg leading-none text-purple-pale/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-white/85">{phase.name}</span>
              <span className="shrink-0 text-sm text-white/50">
                {phase.duration}
              </span>
            </li>
          ))}
        </ol>
      </DeckSection>

      <DeckSection
        id="kpis"
        title="KPIs"
        images={kpisImages}
        onOpen={setLightboxIndex}
      >
        <Body1 className="w-full text-center font-light">
          Au-delà du temps d'écran, des indicateurs quantitatifs et
          qualitatifs.
        </Body1>
        <div className="flex w-full flex-col gap-4">
          {[
            {
              label: 'Usage',
              items: [
                "temps d'écran",
                'sessions',
                'durée des sessions',
                'applications préférées',
                'pics semaine / week-end',
              ],
            },
            {
              label: 'Fidélité',
              items: ['taux de retour', "vitesse de retour sur l'appli"],
            },
            {
              label: 'Atelier',
              items: [
                'obstacles les plus fréquents',
                'écarts de perception enfant / parent',
              ],
            },
          ].map((group) => (
            <div key={group.label} className="flex flex-col items-center gap-2">
              <H5 className="!text-purple-pale/70">{group.label}</H5>
              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DeckSection>

      <DeckSection
        id="conclusion"
        title="Conclusion"
        images={conclusionImages}
        onOpen={setLightboxIndex}
      >
        <Body1 className="w-full text-center font-light">
          Au bout de cette étude, Angry Birds ne mesure plus seulement le temps
          de jeu : le studio comprend ce qui fait rester un enfant et ce qui le
          frustre.
        </Body1>
        <Body1 className="w-full text-center font-light">
          À court terme, de quoi ajuster l'engagement ; à plus long terme, de
          quoi construire une relation durable avec les jeunes joueurs et leurs
          parents.
        </Body1>
      </DeckSection>

      <Contact transparent />

      {lightboxIndex !== null && (
        <Lightbox
          images={allSlides.map((src, i) => ({
            src,
            alt: `Diapositive ${i + 1}`,
          }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  )
}
