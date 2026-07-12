import Contact from '../components/Contact'
import portraitImg from '../assets/about-portrait.png'
import speechBubbleImg from '../assets/about-speech-bubble.svg'
import canoeSketchImg from '../assets/about-canoe-sketch.png'
import clapperboardImg from '../assets/about-clapperboard.png'
import wireframeSketchImg from '../assets/about-wireframe-sketch.png'
import libanIcon from '../assets/icon-liban.svg'
import parisPinIcon from '../assets/icon-paris-pin.svg'
import arrowDownIcon from '../assets/about-arrow.svg'

function TimelineItem({
  title,
  paragraphs,
}: {
  title: string
  paragraphs: string[]
}) {
  return (
    <div className="flex w-full items-start justify-center gap-4 border-l-2 border-[rgba(0,0,0,0.15)] pl-4">
      <div className="flex-1 text-[rgba(7,7,7,0.88)]">
        <p className="text-xl leading-7 text-[#070707]">{title}</p>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-7 text-[rgba(0,0,0,0.7)]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="bg-[#fdfbf6]">
      <div className="flex items-center justify-center gap-12 border-b border-[#070707] px-8 pb-[88px] pt-[138px] md:gap-24 md:px-[var(--nav-edge-w)]">
        <div className="hidden items-center md:flex">
          <div className="h-[484px] w-[173px] shrink-0 overflow-hidden rounded-[3px]">
            <img
              src={portraitImg}
              alt="Portrait illustré d'Athar"
              className="h-full w-full -scale-x-100 object-cover"
              style={{ objectPosition: '44% center' }}
            />
          </div>
          <div className="relative -ml-[13px] -mt-[50px] h-[106px] w-[202px] shrink-0 self-start">
            <img
              src={speechBubbleImg}
              alt=""
              className="absolute inset-0 h-full w-full"
            />
            <p className="absolute left-6 top-[25px] whitespace-nowrap font-syne text-[30px] leading-9 text-[rgba(7,7,7,0.88)]">
              Qui suis-je ?
            </p>
          </div>
        </div>
        <div className="flex max-w-[510px] flex-col items-start gap-4 self-start">
          <div className="font-syne text-5xl leading-tight md:text-[72px] md:leading-[72px]">
            <p className="text-[#070707]">Je m'appelle</p>
            <p className="text-[#d97736]">Athar El Hakim !</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="font-syne text-2xl leading-8 text-[#070707]">
              UX/UI designer et Réalisatrice
            </p>
            <p className="text-lg leading-7 text-[rgba(7,7,7,0.88)] md:text-xl">
              Je suis une personne polyvalente, en quête de ma prochaine
              aventure ! La créativité, c'est mon point de départ, peu importe
              où elle m'emmène.
            </p>
          </div>
        </div>
      </div>

      <section className="relative flex items-start justify-center gap-16 overflow-hidden border-b border-[#070707] p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <img
          src={canoeSketchImg}
          alt=""
          className="pointer-events-none absolute -left-24 top-0 w-[550px] rotate-12 opacity-40"
        />
        <div className="relative z-10 shrink-0">
          <h2 className="font-syne text-4xl leading-tight text-[#070707] md:text-5xl md:leading-[48px]">
            Là où tout
            <br />a commencé
          </h2>
        </div>
        <div className="relative z-10 flex max-w-[740px] flex-col gap-4">
          <TimelineItem
            title="Le cinéma avant tout"
            paragraphs={[
              "En 2021, j'ai fini mon Bachelor en Arts Audiovisuels au Liban. Pour mon projet de fin de diplôme, j'ai réalisé un court métrage qui a eu l'opportunité d'être projeté dans plusieurs festivals de film au Liban, au Canada et aux États-Unis.",
            ]}
          />
          <TimelineItem
            title="3 ans de Freelance"
            paragraphs={[
              'Après mon diplôme, j\'ai travaillé sur plusieurs postes dans le monde des médias : assistante casting, assistante réalisatrice, monteuse vidéo, photographe et directrice de production. J\'ai eu la chance de travailler sur différents types de projets : des campagnes pour des ONG, des films, des clips musicaux, et même d\'avoir l\'opportunité de collaborer avec Netflix sur le show "Love is Blind Habibi".',
            ]}
          />
          <TimelineItem
            title="En dehors des plateaux"
            paragraphs={[
              "J'aime toutes les formes d'art, alors j'ai aussi joué dans des publicités et des clips musicaux, chanté, joué du ukulélé lors d'événements et dans des bars, et même fait du doublage.",
            ]}
          />
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 bg-[rgba(7,7,7,0.88)] p-8 text-center md:py-16 md:px-[var(--nav-edge-w)]">
        <h2 className="font-syne text-4xl leading-tight text-[#fdfbf6] md:text-5xl md:leading-[48px]">
          Un Tournant Décisif
        </h2>
        <div className="flex max-w-[1066px] flex-col items-center gap-4 text-[#fdfbf6]">
          <p className="text-lg leading-7 md:text-xl">
            Mais avec l'instabilité économique et sociale croissante au Liban,
            j'ai commencé à repenser mon avenir. Je voulais évoluer, explorer
            de nouvelles manières de raconter des histoires et construire une
            carrière dans un environnement plus stable.
          </p>
          <p className="text-lg leading-7 md:text-xl">
            C'est ainsi qu'en août 2024, je suis arrivée à Paris pour suivre
            un Master en UX/UI Lead Design à Sup de Pub.
          </p>
          <div className="flex items-center gap-6 text-base">
            <span className="flex items-center gap-2">
              <img src={libanIcon} alt="" className="h-[15px] w-5" />
              Liban
            </span>
            <span className="flex items-center gap-2">
              <img src={parisPinIcon} alt="" className="h-4 w-3" />
              Paris
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start justify-center gap-20 border-b border-[#070707] p-8 md:flex-row md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-center gap-12">
          <h2 className="w-full font-syne text-4xl leading-tight text-[#070707] md:w-[300px] md:text-5xl md:leading-[48px]">
            Un nouveau
            <br />
            chapitre
          </h2>
          <div className="hidden flex-col items-center gap-12 md:flex">
            <div className="relative w-[220px] overflow-hidden" style={{ aspectRatio: '159 / 133' }}>
              <img
                src={clapperboardImg}
                alt=""
                className="absolute max-w-none"
                style={{
                  height: '193.53%',
                  width: '158.71%',
                  left: '-36.51%',
                  top: '-51.35%',
                  filter: 'grayscale(1) contrast(1.4) brightness(1.05)',
                }}
              />
            </div>
            <div className="flex h-[130px] w-[25px] items-center justify-center">
              <img
                src={arrowDownIcon}
                alt=""
                className="w-[130px] max-w-none shrink-0 rotate-90"
                style={{ aspectRatio: '113.667 / 22' }}
              />
            </div>
            <div className="relative w-[220px] overflow-hidden" style={{ aspectRatio: '92.6228 / 77.137' }}>
              <img
                src={wireframeSketchImg}
                alt=""
                className="absolute max-w-none"
                style={{
                  height: '180.11%',
                  width: '100%',
                  left: '0',
                  top: '-22.82%',
                  filter: 'grayscale(1) contrast(1.4) brightness(1.05)',
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex max-w-[740px] flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="font-syne text-2xl leading-8 text-[#d97736]">
              Première Année en France
            </p>
            <div className="flex flex-col gap-2">
              <TimelineItem
                title="Le déclic"
                paragraphs={[
                  "En arrivant en France, j'ai commencé à voir le design autrement.",
                  "J'ai réalisé que, comme dans le cinéma, chaque interface raconte une histoire mais cette fois, elle est construite autour de l'utilisateur.",
                  "C'est là que l'UX/UI a pris tout son sens pour moi.",
                ]}
              />
              <TimelineItem
                title="Stage Fine Line Production"
                paragraphs={[
                  "J'ai travaillé sur la refonte complète du site d'une société de production libanaise, à distance. J'ai pris en charge tout le projet, de la recherche jusqu'au design final, avec une vraie liberté dans les décisions. Le site a été conçu et développé sur Webflow, marquant ma première expérience complète en UX/UI.",
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-syne text-2xl leading-8 text-[#d97736]">
              Deuxième Année en France
            </p>
            <div className="flex flex-col gap-2">
              <TimelineItem
                title="Alternance HEIP"
                paragraphs={[
                  "Aujourd'hui, je travaille en alternance dans une université de sciences politiques à Paris.",
                  "Je suis en charge de la création de contenus pour les réseaux sociaux : concepts, tournage, montage et veille des tendances. Créer du contenu pour une école de sciences politiques, c'est un univers très différent de ce que j'avais connu et justement ce qui le rend intéressant.",
                ]}
              />
              <TimelineItem
                title="Projet en cours"
                paragraphs={[
                  "En parallèle, je développe un site en no-code sur Framer pour la société de production libanaise Midday. C'est mon premier client officiel en UX/UI, un projet qui me permet d'explorer de nouveaux outils, de consolider mes acquis et de les mettre en pratique.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <p className="max-w-[952px] text-center font-syne text-2xl leading-tight text-[rgba(7,7,7,0.88)] md:text-4xl md:leading-10">
          Aujourd'hui, je suis à la recherche de ma prochaine étape, celle qui
          me permettra d'explorer davantage le monde de l'UX/UI. Je suis
          impatiente de voir où ce chemin me mènera !
        </p>
      </section>

      <Contact />
    </div>
  )
}
