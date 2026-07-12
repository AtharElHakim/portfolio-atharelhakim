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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-syne text-4xl leading-tight text-[#fdfbf6] md:text-5xl md:leading-[48px]">
      {children}
    </p>
  )
}

function BulletPoint({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex w-full items-start gap-4 border-l-2 border-[rgba(253,251,246,0.15)] pl-4">
      <p className="flex-1">
        <span className="block text-xl leading-7 text-[rgba(253,251,246,0.85)]">
          {title}
        </span>
        <span className="block text-lg leading-7 text-[rgba(253,251,246,0.7)]">
          {body}
        </span>
      </p>
    </div>
  )
}

function SlideImage({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-10 pb-8">
      <p className="text-center font-syne text-4xl leading-tight text-[#fdfbf6] md:text-5xl md:leading-[48px]">
        {label}
      </p>
      <img src={src} alt={label} className="w-full rounded" />
    </div>
  )
}

export default function OrealPage() {
  return (
    <>
      <CaseStudyNav
        sections={[
          { id: 'contexte', label: 'Contexte' },
          { id: 'processus', label: 'Processus' },
          { id: 'concept', label: 'Concept' },
          { id: 'apporte', label: 'Ce Qu\'On Apporte' },
        ]}
      />

      {/* Header */}
      <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full max-w-[640px] flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-6">
            <img src={logo} alt="L'Oréal Groupe" className="h-9" />
            <h1 className="font-syne text-5xl leading-tight text-[#fdfbf6] md:text-[72px] md:leading-[72px]">
              YSL Sélection Privée
            </h1>
          </div>
          <div className="flex flex-col gap-10">
            <p className="border-b border-white/10 pb-8 text-lg leading-7 text-[#fdfbf6]">
              Projet réalisé dans le cadre du concours L'Oréal Brandstorm
              2026, en équipe de 3 designers UX/UI sur 4 jours intensifs. De
              la recherche utilisateur à la conception du concept, nous avons
              imaginé une expérience phygitale pour réinventer la découverte
              du parfum de luxe en ligne, présentée oralement devant le jury
              L'Oréal Groupe.
            </p>
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold leading-7 text-[#fdfbf6]">
                  Mon Rôle
                </p>
                <div className="text-lg leading-7 text-[rgba(253,251,246,0.85)]">
                  <p>Recherche &amp; insights</p>
                  <p>Idéation (Crazy 8)</p>
                  <p>Concept &amp; parcours utilisateur</p>
                  <p>Design des visuels produit</p>
                  <p>Présentation &amp; storytelling</p>
                  <p>Pitch oral</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold leading-7 text-[#fdfbf6]">
                  Outils
                </p>
                <div className="text-lg leading-7 text-[rgba(253,251,246,0.85)]">
                  <p>Figma</p>
                  <p>Photoshop</p>
                  <p>Nano Banana</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl font-semibold leading-7 text-[#fdfbf6]">
                  Année
                </p>
                <p className="text-lg leading-7 text-[rgba(253,251,246,0.85)]">
                  2026
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex-1 overflow-hidden rounded">
          <img src={heroSilkBg} alt="" className="w-full opacity-60" />
          <img
            src={heroProduct}
            alt="Coffret YSL Sélection Privée"
            className="absolute inset-0 h-full w-full object-contain"
          />
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
            <p className="text-lg leading-7 text-[rgba(253,251,246,0.85)]">
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
            </p>
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
            <div className="flex flex-col gap-1 text-lg leading-7 text-[rgba(253,251,246,0.85)]">
              <p>
                Face à un brief ambitieux et seulement 4 jours devant nous,
                nous avons adopté une méthode rapide et structurée.
              </p>
              <p className="pt-4 font-syne text-2xl text-[#fdfbf6]">
                Recherche individuelle
              </p>
              <p>
                Chacun a exploré le sujet de son côté : données marché,
                comportements d'achat, tendances du luxe, social listening.
                Plutôt que de chercher la même chose, chacun a identifié ses
                propres patterns et insights pour maximiser la couverture en
                peu de temps.
              </p>
              <p className="pt-4 font-syne text-2xl text-[#fdfbf6]">
                Crazy 8
              </p>
              <p>
                Nous avons mis en commun nos recherches et généré un maximum
                d'idées via la méthode Crazy 8 sur Figma. Trois directions
                fortes ont émergé, que nous avons progressivement convergées
                en un seul concept cohérent.
              </p>
              <p className="pt-4 font-syne text-2xl text-[#fdfbf6]">
                L'insight clé
              </p>
              <p>
                Un fil rouge est apparu dans toutes nos recherches :
                "Aujourd'hui, tout s'achète en ligne. Mais le parfum échappe
                encore au digital. On ne peut pas le sentir."
              </p>
              <p className="pt-4">
                De là est née l'idée centrale : construire un pont entre le
                digital et le physique, transformer l'essai en expérience, et
                la découverte en décision.
              </p>
            </div>
          </div>
          <div
            className="flex w-full max-w-[632px] flex-col items-center gap-4 rounded-2xl border border-violet-300/40 p-4"
            style={{
              background: 'rgba(76,29,149,0.35)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <p className="font-syne text-2xl leading-8 text-[#fdfbf6]">
              Crazy 8
            </p>
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
              <p className="text-lg leading-7 text-[rgba(253,251,246,0.85)]">
                Partant du constat que le parfum reste l'un des derniers
                produits résistants au digital, nous avons conçu YSL
                Sélection Privée "From Trial to Desire" : une expérience
                phygitale qui transforme l'essai en rituel et le sampling en
                levier de conversion.
              </p>
              <p className="font-syne text-2xl leading-9 text-[#fdfbf6]">
                "Un parfum se révèle sur la peau. En ligne, cette révélation
                est absente."
              </p>
            </div>
            <div className="flex flex-1 min-w-[280px] flex-col gap-2">
              <p className="font-syne text-2xl leading-8 text-[#fdfbf6]">
                Tester. Porter. Choisir.
              </p>
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
          <p className="text-lg leading-7 text-[rgba(253,251,246,0.7)]">
            YSL Sélection Privée n'est pas qu'une solution locale. C'est un
            modèle scalable, durable et mesurable, adaptable à l'ensemble des
            marques du Groupe L'Oréal et déployable à l'international.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex flex-1 min-w-[280px] flex-col gap-3">
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
          <p className="text-lg leading-7 text-[rgba(253,251,246,0.7)]">
            Au-delà du concept, L'Oréal Brandstorm demandait à chaque équipe
            de se révéler en tant que personnes. La vidéo devait répondre à 5
            valeurs fondamentales définies par L'Oréal :
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex flex-1 min-w-[280px] flex-col gap-3">
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
          <div
            className="relative flex h-[350px] flex-1 min-w-[280px] items-center justify-center rounded-2xl border border-violet-300/40"
            style={{
              background: 'rgba(76,29,149,0.35)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <img src={playIcon} alt="Lire la vidéo" className="h-20 w-20 cursor-pointer" />
          </div>
        </div>
      </div>

      <Contact transparent />
    </>
  )
}
