import { useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties, RefObject } from 'react'
import Contact from '../components/Contact'
import Lightbox from '../components/Lightbox'
import VideoModal from '../components/VideoModal'
import CaseStudyNav from '../components/CaseStudyNav'
import logo from '../assets/loreal/logo.svg'
import heroSilkBg from '../assets/loreal/hero-silk-bg.png'
import heroProduct from '../assets/loreal/hero-product.png'
import brandstormBadge from '../assets/loreal/brandstorm-badge.png'
import pitchPhoto from '../assets/loreal/pitch-photo.jpg'
import crazy8 from '../assets/loreal/crazy8.png'
import slide1 from '../assets/loreal/slide1.jpg'
import slide2 from '../assets/loreal/slide2.jpg'
import slide3 from '../assets/loreal/slide3.jpg'
import playIcon from '../assets/loreal/play-icon.svg'
import videoEquipe from '../assets/loreal/video-equipe.mp4'
import videoThumbnail from '../assets/loreal/video-thumbnail.png'
import { H1, H2 as SectionTitle, H3, H4, H5, Body1 } from '../components/Typography'

const numberNodeGlowStyle = {
  '--glow-color': 'var(--color-purple-light)',
  '--glow-opacity': '45%',
} as CSSProperties

const videoPlayGlowStyle = {
  '--glow-color': 'var(--color-purple-light)',
  '--glow-blur': '40px',
  '--glow-opacity': '40%',
} as CSSProperties

function TimelineNode({
  number,
  circleRef,
}: {
  number: string
  circleRef?: RefObject<HTMLDivElement | null>
}) {
  return (
    <div
      className="relative z-10 flex w-10 flex-none items-center justify-center md:w-12"
      aria-hidden="true"
    >
      <div
        ref={circleRef}
        className="flex size-10 items-center justify-center rounded-full border border-purple-pale/50 bg-purple-dark/70 shadow-glow md:size-12"
        style={numberNodeGlowStyle}
      >
        <span className="text-sm font-semibold text-purple-pale md:text-base">
          {number}
        </span>
      </div>
    </div>
  )
}

function BulletPoint({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex w-full items-start gap-4 border-l-2 border-white/15 pl-4">
      <p className="flex-1">
        <span className="block text-base font-medium leading-6 text-white">
          {title}
        </span>
        <span className="block text-base leading-6 text-white/70">
          {body}
        </span>
      </p>
    </div>
  )
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur-sm">
      <p className="text-base font-medium text-white">{title}</p>
      <p className="text-sm text-white/70">{body}</p>
    </div>
  )
}

const videoValues = [
  {
    title: 'Jugement',
    body: "Qu'est-ce qui a guidé notre prise de décision dans des situations complexes ?",
  },
  {
    title: 'Résilience',
    body: 'Quels obstacles avons-nous rencontrés et comment les avons-nous surmontés ?',
  },
  {
    title: 'Ambition',
    body: 'Quelle était notre vision et nos objectifs à long terme pour le projet ?',
  },
  {
    title: 'Empathie',
    body: 'Comment nous soutenions-nous mutuellement au sein de l\'équipe ?',
  },
  {
    title: "Agilité d'apprentissage",
    body: 'Comment avons-nous géré les sujets nouveaux et inconnus ?',
  },
]

function SlideImage({
  label,
  description,
  descriptionClassName = 'font-light',
  src,
  onZoom,
}: {
  label: string
  description: string
  descriptionClassName?: string
  src: string
  onZoom: () => void
}) {
  return (
    <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 text-center">
        <H3>{label}</H3>
        <Body1 className={descriptionClassName}>{description}</Body1>
      </div>
      <div className="relative w-full">
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto h-16 w-2/3 rounded-full opacity-50 blur-2xl"
          style={{
            background:
              'radial-gradient(ellipse at center, color-mix(in oklab, var(--color-purple-light) 60%, transparent) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="relative w-full rounded-2xl border p-3 md:p-4"
          style={{
            borderColor: 'color-mix(in oklab, var(--color-purple-pale) 45%, transparent)',
            background: 'color-mix(in oklab, var(--color-purple-void) 35%, black)',
            boxShadow:
              '0 0 50px color-mix(in oklab, var(--color-purple-light) 35%, transparent), inset 0 0 40px color-mix(in oklab, var(--color-purple) 20%, transparent)',
          }}
        >
          <button
            type="button"
            onClick={onZoom}
            aria-label={`Agrandir : ${label}`}
            className="group/img relative block w-full cursor-pointer overflow-hidden rounded-xl"
          >
            <img src={src} alt={label} className="w-full rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-all duration-300 group-hover/img:bg-black/35">
              <svg
                className="size-8 text-white opacity-70 transition-opacity duration-300 group-hover/img:opacity-100"
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
    </div>
  )
}

export default function OrealPage() {
  const [singleImage, setSingleImage] = useState<{
    src: string
    alt: string
  } | null>(null)
  const [videoOpen, setVideoOpen] = useState(false)

  const processTimelineRef = useRef<HTMLDivElement>(null)
  const processNode1Ref = useRef<HTMLDivElement>(null)
  const processNode2Ref = useRef<HTMLDivElement>(null)
  const processNode3Ref = useRef<HTMLDivElement>(null)
  const [processLines, setProcessLines] = useState<{ top: number; height: number }[]>([])

  const measureProcessLines = () => {
    const wrap = processTimelineRef.current
    const nodes = [processNode1Ref.current, processNode2Ref.current, processNode3Ref.current]
    if (!wrap || nodes.some((n) => !n)) return
    const wrapTop = wrap.getBoundingClientRect().top
    const rects = nodes.map((n) => n!.getBoundingClientRect())
    const segments = []
    for (let i = 0; i < rects.length - 1; i++) {
      const top = rects[i].bottom - wrapTop
      const bottom = rects[i + 1].top - wrapTop
      segments.push({ top, height: bottom - top })
    }
    setProcessLines(segments)
  }

  useLayoutEffect(() => {
    measureProcessLines()
    window.addEventListener('resize', measureProcessLines)
    return () => window.removeEventListener('resize', measureProcessLines)
  }, [])

  return (
    <div className="relative isolate">
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'Overview' },
          { id: 'contexte', label: 'Contexte' },
          { id: 'processus', label: 'Processus' },
          { id: 'concept', label: 'Concept' },
          { id: 'apporte', label: 'Ce Qu\'On Apporte' },
          { id: 'video', label: 'Vidéo Équipe' },
        ]}
      />

      {/* Header */}
      <div id="overview" className="flex flex-col items-center gap-6 px-8 pb-8 pt-4 md:pb-16 md:pt-10 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <img src={logo} alt="L'Oréal Groupe" className="h-9 aspect-[131.469/30]" />
          <H1 className="md:!text-5xl md:!leading-[52.8px]">YSL Sélection Privée</H1>

          <div className="relative w-full max-w-[820px] aspect-[820/429] overflow-hidden rounded-2xl border border-purple-pale/50 bg-purple-dark/35">
            <img src={heroSilkBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
            <img
              src={heroProduct}
              alt="Coffret YSL Sélection Privée"
              className="absolute inset-0 h-full w-full scale-[0.82] object-cover"
            />
          </div>

          <div className="flex w-full flex-col items-center gap-8 border-t border-white/10 pt-8 text-center">
            <div className="flex w-full flex-col items-center gap-2">
              <H5 className="!text-lg">Overview</H5>
              <Body1 className="case-prose !text-white font-light">
                Projet réalisé dans le cadre du concours L'Oréal Brandstorm
                2026, en équipe de 3 designers UX/UI sur 4 jours intensifs.
                De la recherche utilisateur à la conception du concept, nous
                avons imaginé une expérience phygitale pour réinventer la
                découverte du parfum de luxe en ligne, présentée oralement
                devant le jury L'Oréal Groupe.
              </Body1>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <H5 className="!text-lg !text-purple-pale/70">Mon Rôle</H5>
                <ul className="mx-auto list-outside list-disc space-y-1.5 pl-5 text-left font-light text-lg leading-7 text-white marker:text-xs marker:text-white [&>li]:pl-2 md:text-xl">
                  <li>Recherche &amp; insights</li>
                  <li>Idéation (Crazy 8)</li>
                  <li>Concept &amp; parcours utilisateur</li>
                  <li>Design des visuels produit</li>
                  <li>Présentation &amp; storytelling</li>
                  <li>Pitch oral</li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-2">
                <H5 className="!text-lg !text-purple-pale/70">Outils</H5>
                <ul className="list-none text-center font-light text-lg leading-7 text-white md:text-xl">
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Nano Banana</li>
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

      {/* Contexte */}
      <div id="contexte" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Contexte</SectionTitle>
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-8">
          <div className="grid w-full grid-cols-1 items-stretch gap-10 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center gap-5">
              <img
                src={brandstormBadge}
                alt="L'Oréal Brandstorm 2026"
                className="w-[120px] rounded-lg"
              />
              <H3 className="!text-3xl md:!text-4xl">
                Craft the Future of Luxury Fragrance
              </H3>
              <Body1 className="font-light">
                L'Oréal Brandstorm est la plus grande compétition
                d'innovation mondiale, ouverte à toute personne de 18 à 30
                ans, tous domaines et niveaux d'études confondus. L'ambition :{' '}
                <span className="font-medium text-purple-pale">
                  réinventer l'avenir du parfum de luxe, non pas comme un
                  produit, mais comme une expérience complète.
                </span>
              </Body1>
            </div>
            <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl">
              <img
                src={pitchPhoto}
                alt="Pitch devant le jury L'Oréal"
                className="absolute inset-0 h-full w-full object-cover object-[50%_78%]"
              />
            </div>
          </div>
          <Body1 className="case-prose rounded-2xl border border-white/15 bg-white/5 p-6 font-light backdrop-blur-sm">
            Intégré à notre formation à Sup de Pub, le projet s'est déroulé
            sur 4 jours intensifs. Les livrables attendus : une présentation
            en 3 slides et une vidéo d'équipe répondant à 5 valeurs définies
            par L'Oréal. Le 5e jour, nous avons présenté notre concept
            oralement au siège de L'Oréal Groupe, devant 2 membres du jury
            et une représentante RH.{' '}
            <span className="font-medium text-purple-pale">
              Notre projet a été sélectionné Top 1 parmi l'ensemble des
              projets présentés.
            </span>
          </Body1>
        </div>
      </div>

      {/* Processus */}
      <div id="processus" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Processus</SectionTitle>
        <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6">
          <Body1 className="case-prose font-light">
            Face à un brief ambitieux et seulement 4 jours devant nous, nous
            avons adopté une méthode rapide et{' '}structurée.
          </Body1>

          <div ref={processTimelineRef} className="relative flex flex-col">
            {processLines.map((seg, i) => (
              <div
                key={i}
                className="absolute left-5 w-[1.8px] -translate-x-1/2 shadow-glow md:left-6"
                style={{
                  top: seg.top,
                  height: seg.height,
                  background:
                    'linear-gradient(to bottom, var(--color-purple-light), var(--color-purple-pale))',
                  '--glow-color': 'var(--color-purple-light)',
                  '--glow-blur': '6px',
                  '--glow-opacity': '70%',
                } as CSSProperties}
                aria-hidden="true"
              />
            ))}
            <div className="relative mb-6 flex gap-6">
              <TimelineNode number="01" circleRef={processNode1Ref} />
              <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <H4 className="w-auto text-left !text-white">Recherche individuelle</H4>
                <Body1 className="font-light">
                  Chacun a exploré le sujet de son côté : données marché,
                  comportements d'achat, tendances du luxe, social listening.
                  Plutôt que de chercher la même chose, chacun a identifié ses
                  propres patterns et insights pour maximiser la couverture en
                  peu de temps.
                </Body1>
              </div>
            </div>

            <div className="relative mb-6 flex gap-6">
              <TimelineNode number="02" circleRef={processNode2Ref} />
              <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:flex-row md:items-center">
                <div className="flex flex-1 flex-col gap-2">
                  <H4 className="w-auto text-left !text-white">Crazy 8</H4>
                  <Body1 className="font-light">
                    Nous avons mis en commun nos recherches et généré un maximum
                    d'idées via la méthode Crazy 8 sur Figma. Trois directions
                    fortes ont émergé, puis progressivement convergé vers un
                    seul concept cohérent.
                  </Body1>
                </div>
                <button
                  type="button"
                  onClick={() => setSingleImage({ src: crazy8, alt: 'Crazy 8' })}
                  aria-label="Agrandir : Crazy 8"
                  className="group/img relative min-w-[200px] flex-1 cursor-pointer overflow-hidden rounded-xl"
                >
                  <img
                    src={crazy8}
                    alt="Crazy 8"
                    onLoad={measureProcessLines}
                    className="w-full rounded-xl transition-transform duration-300 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-all duration-300 group-hover/img:bg-black/35">
                    <svg
                      className="size-8 text-white opacity-70 transition-opacity duration-300 group-hover/img:opacity-100"
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

            <div className="relative flex gap-6">
              <TimelineNode number="03" circleRef={processNode3Ref} />
              <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-purple-pale/40 bg-purple-dark/25 p-6 backdrop-blur-sm">
                <H4 className="w-auto text-left !text-white">L'insight clé</H4>
                <Body1 className="font-light">
                  Un fil rouge est apparu dans toutes nos recherches :
                  "Aujourd'hui, tout s'achète en ligne. Mais le parfum échappe
                  encore au digital. On ne peut pas le sentir."
                </Body1>
              </div>
            </div>
          </div>

          <Body1 className="case-prose font-light">
            De là est née l'idée centrale : construire un pont entre le
            digital et le physique, transformer l'essai en expérience, et
            la découverte en décision.
          </Body1>
        </div>
        <SlideImage
          label="Slide 1 · Le diagnostic"
          description="Le pitch imposé par L'Oréal tenait en trois slides. Celle-ci pose le problème : en ligne, un parfum ne se sent pas."
          src={slide1}
          onZoom={() => setSingleImage({ src: slide1, alt: 'Slide 1' })}
        />
      </div>

      {/* Concept */}
      <div id="concept" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Concept</SectionTitle>
        <div className="mx-auto flex w-full flex-wrap items-stretch justify-center gap-8">
          <div className="flex min-w-[280px] flex-1 flex-col justify-center gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <Body1 className="font-light">
              Partant du constat que le parfum reste l'un des derniers
              produits résistants au digital, nous avons conçu YSL
              Sélection Privée "From Trial to Desire" : une expérience
              phygitale qui transforme l'essai en rituel et le sampling en
              levier de conversion.
            </Body1>
            <H3 className="leading-9">
              "Un parfum se révèle sur la peau. En ligne, cette révélation
              est absente."
            </H3>
          </div>
          <div className="flex min-w-[280px] flex-1 flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H3>Tester. Porter. Choisir.</H3>
            <BulletPoint
              title="01 Sélectionner"
              body="Le client compose son propre catalogue sur Sephora.com en choisissant 3 fragrances YSL au format roll-on 5 mL."
            />
            <BulletPoint
              title="02 Tester"
              body="Il reçoit un coffret premium et teste chaque fragrance pendant un mois, observant l'évolution réelle du parfum sur sa peau. Chaque roll-on intègre un QR code avec un code promotionnel unique."
            />
            <BulletPoint
              title="03 Choisir"
              body="Il scanne le code de sa fragrance préférée et finalise son achat sur Sephora. Le prix du coffret est déduit du grand format, valable 1 mois après réception. Passé ce délai, le code expire."
            />
          </div>
        </div>
        <SlideImage
          label="Slide 2 · Le concept"
          description="« From Trial to Desire » : le parcours de l'essai à l'achat, résumé en un visuel."
          src={slide2}
          onZoom={() => setSingleImage({ src: slide2, alt: 'Slide 2' })}
        />
      </div>

      {/* Ce qu'on apporte */}
      <div id="apporte" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-8 text-center">
          <SectionTitle>Ce Qu'On Apporte À L'Oréal</SectionTitle>
          <Body1 className="case-prose font-light">
            YSL Sélection Privée n'est pas qu'une solution locale. C'est un
            modèle scalable, durable et mesurable, adaptable à l'ensemble des
            marques du Groupe L'Oréal et déployable à l'international.
          </Body1>
        </div>
        <div className="mx-auto flex w-full max-w-[1100px] flex-wrap items-stretch justify-center gap-8">
          <div className="flex min-w-[280px] flex-1 flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <BulletPoint
              title="Savoir-faire"
              body="Expertise sensorielle appliquée au format roll-on, maîtrise de l'évolution du parfum sur peau."
            />
            <BulletPoint
              title="Durabilité"
              body="Alternative aux miniatures jetables, dosage précis limitant le gaspillage."
            />
            <BulletPoint
              title="Expérience"
              body="Parcours fluide : sélection · test · achat. Un rituel d'essai immersif sur 30 jours."
            />
            <BulletPoint
              title="Innovation"
              body="Le sampling devient un levier de conversion mesurable, transformant l'essai en engagement durable."
            />
            <BulletPoint
              title="Scalabilité"
              body="Adaptable à toutes les marques du Groupe. Et dans un contexte où des marchés comme la Chine interdisent désormais le sampling gratuit, ce modèle offre une alternative premium et rentable."
            />
          </div>
        </div>
        <SlideImage
          label="Slide 3 · L'apport au Groupe"
          description="Pourquoi le modèle vaut au-delà d'YSL, pour l'ensemble du Groupe L'Oréal."
          src={slide3}
          onZoom={() => setSingleImage({ src: slide3, alt: 'Slide 3' })}
        />
      </div>

      {/* Vidéo Équipe */}
      <div id="video" className="flex flex-col items-center gap-8 p-8 md:py-16 md:pb-32 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-8 text-center">
          <SectionTitle>Vidéo Équipe</SectionTitle>
          <Body1 className="case-prose font-light">
            Au-delà du concept, L'Oréal Brandstorm demandait à chaque équipe
            de se révéler en tant que personnes. La vidéo devait répondre à 5
            valeurs fondamentales définies par L'Oréal :
          </Body1>
        </div>

        {/* Hub layout (desktop) */}
        <div className="relative mx-auto hidden aspect-[686/435] w-full max-w-[820px] -mt-[38px] md:block">
          <svg
            viewBox="0 0 686 435"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <filter id="videoConnectorGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="videoConnectorGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-purple-light)" />
                <stop offset="100%" stopColor="var(--color-purple-pale)" />
              </linearGradient>
            </defs>
            <g
              stroke="url(#videoConnectorGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#videoConnectorGlow)"
            >
              <path d="M110,207 L196,207 Q206,207 206,197 L206,190" />
              <path d="M576,207 L490,207 Q480,207 480,197 L480,190" />
              <path d="M162,345 L162,265 Q162,255 172,255 L206,255" />
              <path d="M502,345 L502,265 Q502,255 492,255 L480,255" />
            </g>
          </svg>

          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Lire la vidéo d'équipe"
            className="group/video absolute left-1/2 top-1/2 z-10 flex aspect-video w-[40%] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-purple-pale/50 shadow-glow transition-all duration-300 hover:border-purple-pale/80"
            style={videoPlayGlowStyle}
          >
            <img
              src={videoThumbnail}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-void/80 via-purple-void/30 to-purple-dark/20 transition-colors duration-300 group-hover/video:from-purple-void/70" />
            <img
              src={playIcon}
              alt=""
              className="relative h-14 w-14 transition-transform duration-300 group-hover/video:scale-110"
            />
          </button>

          <div className="absolute left-1/2 top-[32.25%] z-10 flex w-[30%] -translate-x-1/2 -translate-y-full flex-col items-center">
            <ValueCard title={videoValues[0].title} body={videoValues[0].body} />
            <div
              className="h-6 w-[1.8px] bg-gradient-to-b from-purple-pale/10 to-purple-pale/40"
              aria-hidden="true"
            />
          </div>
          <div className="absolute left-[3%] top-[48%] w-[26%] -translate-x-1/2 -translate-y-1/2">
            <ValueCard title={videoValues[1].title} body={videoValues[1].body} />
          </div>
          <div className="absolute left-[96%] top-[48%] w-[24%] -translate-x-1/2 -translate-y-1/2">
            <ValueCard title={videoValues[2].title} body={videoValues[2].body} />
          </div>
          <div className="absolute left-[24%] top-[85%] w-[34%] -translate-x-1/2 -translate-y-1/2">
            <ValueCard title={videoValues[3].title} body={videoValues[3].body} />
          </div>
          <div className="absolute left-[73%] top-[85%] w-[30%] -translate-x-1/2 -translate-y-1/2">
            <ValueCard title={videoValues[4].title} body={videoValues[4].body} />
          </div>
        </div>

        {/* Stacked fallback (mobile) */}
        <div className="mx-auto flex w-full max-w-[500px] flex-col gap-6 md:hidden">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Lire la vidéo d'équipe"
            className="group/video relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl border border-purple-pale/50"
          >
            <img
              src={videoThumbnail}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-void/80 via-purple-void/30 to-purple-dark/20" />
            <img
              src={playIcon}
              alt=""
              className="relative h-16 w-16 transition-transform duration-300 group-hover/video:scale-110"
            />
          </button>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            {videoValues.map((v) => (
              <BulletPoint key={v.title} title={v.title} body={v.body} />
            ))}
          </div>
        </div>
      </div>

      <Contact transparent />

      {videoOpen && (
        <VideoModal onClose={() => setVideoOpen(false)}>
          <video
            src={videoEquipe}
            controls
            autoPlay
            className="max-h-[80vh] max-w-[90vw] cursor-default rounded-lg"
          />
        </VideoModal>
      )}

      {singleImage && (
        <Lightbox
          images={[singleImage]}
          index={0}
          onClose={() => setSingleImage(null)}
          onNavigate={() => {}}
        />
      )}
    </div>
  )
}
