import { useState } from 'react'
import Contact from '../components/Contact'
import Lightbox from '../components/Lightbox'
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
import lorealBrands from '../assets/loreal/loreal-brands.png'
import playIcon from '../assets/loreal/play-icon.svg'
import videoEquipe from '../assets/loreal/video-equipe.mp4'
import { H1, H2 as SectionTitle, H3, H4, H5, Body1, Body2 } from '../components/Typography'

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

function SlideImage({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-10 pb-8">
      <SectionTitle>{label}</SectionTitle>
      <div
        className="relative w-full rounded-2xl border p-3 md:p-4"
        style={{
          borderColor: 'color-mix(in oklab, var(--color-purple-pale) 45%, transparent)',
          background: 'color-mix(in oklab, var(--color-purple-void) 35%, black)',
          boxShadow:
            '0 0 50px color-mix(in oklab, var(--color-purple-light) 35%, transparent), inset 0 0 40px color-mix(in oklab, var(--color-purple) 20%, transparent)',
        }}
      >
        <img src={src} alt={label} className="w-full rounded-xl" />
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

  return (
    <div className="relative isolate">
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'Overview' },
          { id: 'contexte', label: 'Contexte' },
          { id: 'processus', label: 'Processus' },
          { id: 'concept', label: 'Concept' },
          { id: 'apporte', label: 'Ce Qu\'On Apporte' },
        ]}
      />

      {/* Header */}
      <div id="overview" className="flex flex-col items-center gap-6 px-8 pb-8 pt-4 md:pb-16 md:pt-10 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <img src={logo} alt="L'Oréal Groupe" className="h-9 aspect-[131.469/30]" />
          <H1 className="md:!text-5xl md:!leading-[56px]">YSL Sélection Privée</H1>

          <div className="relative w-full max-w-[820px] aspect-[820/429] overflow-hidden rounded-2xl border border-purple-pale/50 bg-purple-dark/35">
            <img src={heroSilkBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
            <img
              src={heroProduct}
              alt="Coffret YSL Sélection Privée"
              className="absolute inset-0 h-full w-full scale-[0.82] object-cover"
            />
          </div>

          <div className="flex w-full max-w-[820px] flex-col items-center gap-8 border-t border-white/10 pt-8 text-center">
            <div className="flex w-full flex-col items-center gap-2">
              <H5 className="!text-lg">Overview</H5>
              <Body1 className="!text-white font-light">
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
              <p className="font-syne text-3xl leading-tight text-white md:text-4xl">
                Craft the Future of Luxury Fragrance
              </p>
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
          <Body1 className="w-full rounded-2xl border border-white/15 bg-white/5 p-6 text-center font-light backdrop-blur-sm md:p-8">
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
      <div id="processus" className="flex flex-col items-center gap-14 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Processus</SectionTitle>
        <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6">
          <Body1 className="w-full text-center font-light">
            Face à un brief ambitieux et seulement 4 jours devant nous, nous
            avons adopté une méthode rapide et structurée.
          </Body1>

          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <H4 className="w-auto text-left !text-white">01 Recherche individuelle</H4>
            <Body1 className="font-light">
              Chacun a exploré le sujet de son côté : données marché,
              comportements d'achat, tendances du luxe, social listening.
              Plutôt que de chercher la même chose, chacun a identifié ses
              propres patterns et insights pour maximiser la couverture en
              peu de temps.
            </Body1>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:flex-row md:items-center md:p-8">
            <div className="flex flex-1 flex-col gap-2">
              <H4 className="w-auto text-left !text-white">02 Crazy 8</H4>
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

          <div className="flex flex-col gap-2 rounded-2xl border border-purple-pale/40 bg-purple-dark/25 p-6 backdrop-blur-sm md:p-8">
            <H4 className="w-auto text-left !text-white">03 L'insight clé</H4>
            <Body1 className="font-light">
              Un fil rouge est apparu dans toutes nos recherches :
              "Aujourd'hui, tout s'achète en ligne. Mais le parfum échappe
              encore au digital. On ne peut pas le sentir."
            </Body1>
          </div>

          <Body1 className="w-full text-center font-light">
            De là est née l'idée centrale : construire un pont entre le
            digital et le physique, transformer l'essai en expérience, et
            la découverte en décision.
          </Body1>
        </div>
        <SlideImage label="Slide 1" src={slide1} />
      </div>

      {/* Concept */}
      <div id="concept" className="flex flex-col items-center gap-14 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Concept</SectionTitle>
        <div className="mx-auto flex w-full max-w-[1100px] flex-wrap items-stretch justify-center gap-8">
          <div className="flex min-w-[280px] flex-1 flex-col justify-center gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8">
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
          <div className="flex min-w-[280px] flex-1 flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8">
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
        <SlideImage label="Slide 2" src={slide2} />
      </div>

      {/* Ce qu'on apporte */}
      <div id="apporte" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full max-w-[720px] flex-col items-center gap-4 text-center">
          <SectionTitle>Ce Qu'On Apporte À L'Oréal</SectionTitle>
          <Body1 className="font-light">
            YSL Sélection Privée n'est pas qu'une solution locale. C'est un
            modèle scalable, durable et mesurable, adaptable à l'ensemble des
            marques du Groupe L'Oréal et déployable à l'international.
          </Body1>
        </div>
        <div className="mx-auto flex w-full max-w-[1100px] flex-wrap items-stretch justify-center gap-8">
          <div className="flex min-w-[280px] flex-1 flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8">
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
          <img
            src={lorealBrands}
            alt="Marques du Groupe L'Oréal Luxe"
            className="min-w-[280px] flex-1 rounded-2xl object-cover"
          />
        </div>
        <SlideImage label="Slide 3" src={slide3} />
      </div>

      {/* Vidéo Équipe */}
      <div className="flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full max-w-[720px] flex-col items-center gap-4 text-center">
          <SectionTitle>Vidéo Équipe</SectionTitle>
          <Body1 className="font-light">
            Au-delà du concept, L'Oréal Brandstorm demandait à chaque équipe
            de se révéler en tant que personnes. La vidéo devait répondre à 5
            valeurs fondamentales définies par L'Oréal :
          </Body1>
        </div>

        {/* Circular layout (desktop) */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[780px] md:block">
          <div className="pointer-events-none absolute inset-[140px] rounded-full border border-dashed border-white/10" />
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Lire la vidéo d'équipe"
            className="group/video absolute left-1/2 top-1/2 z-10 flex aspect-video w-[300px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-2xl border border-purple-pale/50 bg-purple-dark/35 backdrop-blur-[20px] transition-all duration-300 hover:border-purple-pale/80"
          >
            <img
              src={playIcon}
              alt=""
              className="h-14 w-14 transition-transform duration-300 group-hover/video:scale-110"
            />
          </button>
          {videoValues.map((v, i) => {
            const angle = ((-90 + i * 72) * Math.PI) / 180
            const r = 250
            const x = 390 + r * Math.cos(angle)
            const y = 390 + r * Math.sin(angle)
            return (
              <div
                key={v.title}
                style={{ left: `${x}px`, top: `${y}px` }}
                className="absolute w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-white/5 p-3 text-center backdrop-blur-sm"
              >
                <p className="text-sm font-medium text-white">{v.title}</p>
                <p className="mt-1 text-xs text-white/70">{v.body}</p>
              </div>
            )
          })}
        </div>

        {/* Stacked fallback (mobile) */}
        <div className="mx-auto flex w-full max-w-[500px] flex-col gap-6 md:hidden">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Lire la vidéo d'équipe"
            className="group/video relative flex h-[220px] w-full items-center justify-center rounded-2xl border border-purple-pale/50 bg-purple-dark/35 backdrop-blur-[20px]"
          >
            <img
              src={playIcon}
              alt=""
              className="h-16 w-16 transition-transform duration-300 group-hover/video:scale-110"
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
          <video
            src={videoEquipe}
            controls
            autoPlay
            onClick={(event) => event.stopPropagation()}
            className="max-h-[80vh] max-w-[90vw] cursor-default rounded-lg"
          />
        </div>
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
