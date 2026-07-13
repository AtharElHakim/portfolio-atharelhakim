import Contact from '../components/Contact'
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
import { H1, H2 as SectionTitle, H3, H5, Body1, Body2 } from '../components/Typography'

function BulletPoint({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex w-full items-start gap-4 border-l-2 border-white/15 pl-4">
      <p className="flex-1">
        <span className="block text-xl leading-7 text-white/85">
          {title}
        </span>
        <span className="block text-lg leading-7 text-white/70">
          {body}
        </span>
      </p>
    </div>
  )
}

function SlideImage({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-10 pb-8">
      <SectionTitle>{label}</SectionTitle>
      <img src={src} alt={label} className="w-full rounded" />
    </div>
  )
}

export default function OrealPage() {
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
          { id: 'processus', label: 'Processus' },
          { id: 'concept', label: 'Concept' },
          { id: 'apporte', label: 'Ce Qu\'On Apporte' },
        ]}
      />

      {/* Header */}
      <div id="overview" className="flex flex-col items-center gap-6 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={logo} alt="L'Oréal Groupe" className="h-9 aspect-[131.469/30]" />
          <H1 className="md:!text-5xl md:!leading-[56px]">YSL Sélection Privée</H1>

          <div className="relative w-full max-w-[820px] overflow-hidden rounded-2xl border border-white/15">
            <img src={heroSilkBg} alt="" className="w-full opacity-60" />
            <img
              src={heroProduct}
              alt="Coffret YSL Sélection Privée"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="flex w-full flex-wrap items-start justify-center gap-10 border-t border-white/10 pt-8 text-left">
            <div className="flex max-w-[320px] flex-col gap-2">
              <H5>Overview</H5>
              <Body2 className="!text-white font-light">
                Projet réalisé dans le cadre du concours L'Oréal Brandstorm
                2026, en équipe de 3 designers UX/UI sur 4 jours intensifs.
                De la recherche utilisateur à la conception du concept, nous
                avons imaginé une expérience phygitale pour réinventer la
                découverte du parfum de luxe en ligne, présentée oralement
                devant le jury L'Oréal Groupe.
              </Body2>
            </div>
            <div className="flex flex-col gap-2">
              <H5>Mon Rôle</H5>
              <ul className="list-none font-light text-lg leading-6 text-white">
                <li>Recherche &amp; insights</li>
                <li>Idéation (Crazy 8)</li>
                <li>Concept &amp; parcours utilisateur</li>
                <li>Design des visuels produit</li>
                <li>Présentation &amp; storytelling</li>
                <li>Pitch oral</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <H5>Outils</H5>
                <ul className="list-none font-light text-lg leading-6 text-white">
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Nano Banana</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <H5>Année</H5>
                <Body2 className="!text-white font-light">2026</Body2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contexte */}
      <div id="contexte" className="flex flex-col items-start gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Contexte</SectionTitle>
        <div className="flex w-full flex-wrap items-start gap-12">
          <div className="flex flex-1 min-w-[280px] flex-col items-start gap-4">
            <img
              src={brandstormBadge}
              alt="L'Oréal Brandstorm 2026"
              className="w-[149px] rounded"
            />
            <Body1 className="font-light">
              L'Oréal Brandstorm est la plus grande compétition d'innovation
              mondiale, ouverte à toute personne de 18 à 30 ans, tous
              domaines et niveaux d'études confondus. Le brief 2026 : Craft
              the Future of Luxury Fragrance : réinventer l'avenir du parfum
              de luxe, non pas comme un produit, mais comme une expérience
              complète.
              <br />
              <br />
              Intégré à notre formation à Sup de Pub, le projet s'est déroulé
              sur 4 jours intensifs. Les livrables attendus : une
              présentation en 3 slides et une vidéo d'équipe répondant à 5
              valeurs définies par L'Oréal. Le 5ème jour, nous avons présenté
              notre concept oralement au siège de L'Oréal Groupe, devant 2
              membres du jury et une représentante RH. Notre projet a été
              sélectionné Top 1 parmi l'ensemble des projets présentés.
            </Body1>
          </div>
          <img
            src={pitchPhoto}
            alt="Pitch devant le jury L'Oréal"
            className="flex-1 min-w-[280px] rounded"
          />
        </div>
      </div>

      {/* Processus */}
      <div id="processus" className="flex flex-col gap-14 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-wrap items-center gap-12">
          <div className="flex flex-1 min-w-[280px] flex-col gap-8">
            <SectionTitle>Processus</SectionTitle>
            <div className="flex flex-col gap-4">
              <Body1 className="font-light">
                Face à un brief ambitieux et seulement 4 jours devant nous,
                nous avons adopté une méthode rapide et structurée.
              </Body1>
              <div className="flex flex-col gap-2">
                <H3>Recherche individuelle</H3>
                <Body1 className="font-light">
                  Chacun a exploré le sujet de son côté : données marché,
                  comportements d'achat, tendances du luxe, social listening.
                  Plutôt que de chercher la même chose, chacun a identifié ses
                  propres patterns et insights pour maximiser la couverture en
                  peu de temps.
                </Body1>
              </div>
              <div className="flex flex-col gap-2">
                <H3>Crazy 8</H3>
                <Body1 className="font-light">
                  Nous avons mis en commun nos recherches et généré un maximum
                  d'idées via la méthode Crazy 8 sur Figma. Trois directions
                  fortes ont émergé, que nous avons progressivement convergées
                  en un seul concept cohérent.
                </Body1>
              </div>
              <div className="flex flex-col gap-2">
                <H3>L'insight clé</H3>
                <Body1 className="font-light">
                  Un fil rouge est apparu dans toutes nos recherches :
                  "Aujourd'hui, tout s'achète en ligne. Mais le parfum échappe
                  encore au digital. On ne peut pas le sentir."
                </Body1>
              </div>
              <Body1 className="font-light">
                De là est née l'idée centrale : construire un pont entre le
                digital et le physique, transformer l'essai en expérience, et
                la découverte en décision.
              </Body1>
            </div>
          </div>
          <div className="flex w-full max-w-[632px] flex-col items-center gap-4 rounded-2xl border border-purple-pale/60 bg-purple-dark/35 p-4 backdrop-blur-[20px]">
            <H3>Crazy 8</H3>
            <img src={crazy8} alt="Crazy 8" className="w-full rounded" />
          </div>
        </div>
        <SlideImage label="Slide 1" src={slide1} />
      </div>

      {/* Concept */}
      <div id="concept" className="flex flex-col gap-14 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col gap-8">
          <SectionTitle>Concept</SectionTitle>
          <div className="flex flex-wrap items-start gap-20">
            <div className="flex flex-1 min-w-[280px] flex-col gap-4">
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
            <div className="flex flex-1 min-w-[280px] flex-col gap-2">
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
        </div>
        <SlideImage label="Slide 2" src={slide2} />
      </div>

      {/* Ce qu'on apporte */}
      <div id="apporte" className="flex flex-col gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col gap-4">
          <SectionTitle>Ce Qu'On Apporte À L'Oréal</SectionTitle>
          <Body1 className="font-light">
            YSL Sélection Privée n'est pas qu'une solution locale. C'est un
            modèle scalable, durable et mesurable, adaptable à l'ensemble des
            marques du Groupe L'Oréal et déployable à l'international.
          </Body1>
        </div>
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex flex-1 min-w-[280px] flex-col gap-4">
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
            className="flex-1 min-w-[280px] rounded"
          />
        </div>
        <SlideImage label="Slide 3" src={slide3} />
      </div>

      {/* Vidéo Équipe */}
      <div className="flex flex-col gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col gap-4">
          <SectionTitle>Vidéo Équipe</SectionTitle>
          <Body1 className="font-light">
            Au-delà du concept, L'Oréal Brandstorm demandait à chaque équipe
            de se révéler en tant que personnes. La vidéo devait répondre à 5
            valeurs fondamentales définies par L'Oréal :
          </Body1>
        </div>
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex flex-1 min-w-[280px] flex-col gap-4">
            <BulletPoint
              title="Jugement"
              body="Qu'est-ce qui a guidé notre prise de décision dans des situations complexes ?"
            />
            <BulletPoint
              title="Résilience"
              body="Quels obstacles avons-nous rencontrés et comment les avons-nous surmontés ?"
            />
            <BulletPoint
              title="Ambition"
              body="Quelle était notre vision et nos objectifs à long terme pour le projet ?"
            />
            <BulletPoint
              title="Empathie"
              body="Comment nous soutenions-nous mutuellement au sein de l'équipe ?"
            />
            <BulletPoint
              title="Agilité d'apprentissage"
              body="Comment avons-nous géré les sujets nouveaux et inconnus ?"
            />
          </div>
          <div className="relative flex h-[350px] flex-1 min-w-[280px] items-center justify-center rounded-2xl border border-purple-pale/60 bg-purple-dark/35 backdrop-blur-[20px]">
            <img src={playIcon} alt="Lire la vidéo" className="h-20 w-20 cursor-pointer" />
          </div>
        </div>
      </div>

      <Contact transparent />
    </div>
  )
}
