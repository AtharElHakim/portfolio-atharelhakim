import Contact from '../components/Contact'
import { Body1 } from '../components/Typography'
import portraitImg from '../assets/about-portrait-bust.png'
import canoeSketchImg from '../assets/about-canoe-sketch.png'
import clapperboardImg from '../assets/about-clapperboard.png'
import wireframeSketchImg from '../assets/about-wireframe-sketch.png'
import libanParisMapImg from '../assets/about-liban-paris-map.png'
import arrowDownIcon from '../assets/about-arrow.svg'

function TimelineItem({
  title,
  paragraphs,
}: {
  title: string
  paragraphs: string[]
}) {
  return (
    <div className="flex w-full items-start justify-center gap-4 border-l-2 border-white/15 pl-4">
      <div className="flex-1 text-white/85">
        <p className="text-xl leading-7 text-white">{title}</p>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-7 text-white/70">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="relative isolate">
      <div className="flex items-end justify-center gap-12 border-b border-white/10 px-8 pb-[88px] pt-[138px] md:gap-24 md:px-[var(--nav-edge-w)]">
        <div className="-mb-[88px] hidden shrink-0 items-end md:flex">
          <img
            src={portraitImg}
            alt="Portrait illustré d'Athar"
            className="size-[380px] object-contain"
          />
        </div>
        <div className="flex max-w-[510px] flex-col items-start gap-4 self-start">
          <div className="font-syne text-5xl leading-tight md:text-[72px] md:leading-[72px]">
            <p className="text-white">Je m'appelle</p>
            <p className="whitespace-nowrap text-purple-pale">Athar El Hakim !</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="font-syne text-2xl leading-8 text-white">
              UX/UI designer et Réalisatrice
            </p>
            <p className="text-lg leading-7 text-white/85 md:text-xl">
              Je suis une personne polyvalente, en quête de ma prochaine
              aventure ! La créativité, c'est mon point de départ, peu importe
              où elle m'emmène.
            </p>
          </div>
        </div>
      </div>

      <section className="relative flex items-start justify-center gap-16 overflow-hidden border-b border-white/10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <img
          src={canoeSketchImg}
          alt=""
          className="pointer-events-none absolute -left-24 top-0 w-[550px] rotate-12 opacity-25 invert"
        />
        <div className="relative z-10 shrink-0">
          <h2 className="font-syne text-4xl leading-tight text-white md:text-5xl md:leading-[48px]">
            Là où tout a
            <br />
            commencé
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

      <section className="relative flex flex-col items-center gap-6 overflow-hidden border-y border-white/10 p-8 text-center md:py-16 md:px-[var(--nav-edge-w)]">
        <div
          className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 overflow-hidden md:block"
          style={{ width: 160, height: 200 }}
        >
          <img
            src={libanParisMapImg}
            alt=""
            className="max-w-none opacity-25 invert"
            style={{ width: 976, height: 650, marginLeft: -737, marginTop: -402 }}
          />
        </div>
        <div className="hidden overflow-hidden md:block" style={{ width: 280, height: 270 }}>
          <img
            src={libanParisMapImg}
            alt=""
            className="max-w-none opacity-25 invert"
            style={{ width: 788, height: 525, marginLeft: -37, marginTop: -23 }}
          />
        </div>
        <h2 className="relative z-10 font-syne text-4xl leading-tight text-white md:text-5xl md:leading-[48px]">
          Un Tournant Décisif
        </h2>
        <div className="relative z-10 flex max-w-[720px] flex-col items-center gap-4">
          <Body1 className="font-light">
            Mais avec l'instabilité économique et sociale croissante au Liban,
            j'ai commencé à repenser mon avenir. Je voulais évoluer, explorer
            de nouvelles manières de raconter des histoires et construire une
            carrière dans un environnement plus stable.
          </Body1>
          <Body1 className="font-light">
            C'est ainsi qu'en août 2024, je suis arrivée à Paris pour suivre
            un Master en UX/UI Lead Design à Sup de Pub.
          </Body1>
        </div>
      </section>

      <section className="flex flex-col items-start justify-center gap-20 border-b border-white/10 p-8 md:flex-row md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-center gap-12">
          <h2 className="w-full font-syne text-4xl leading-tight text-white md:w-[300px] md:text-5xl md:leading-[48px]">
            Un nouveau
            <br />
            chapitre
          </h2>
          <div className="hidden flex-col items-center gap-12 md:flex">
            <div className="relative w-[220px] overflow-hidden" style={{ aspectRatio: '159 / 133' }}>
              <img
                src={clapperboardImg}
                alt=""
                className="absolute max-w-none opacity-25 invert"
                style={{
                  height: '193.53%',
                  width: '158.71%',
                  left: '-36.51%',
                  top: '-51.35%',
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
                className="absolute max-w-none opacity-25 invert"
                style={{
                  height: '180.11%',
                  width: '100%',
                  left: '0',
                  top: '-22.82%',
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex max-w-[740px] flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="font-syne text-2xl leading-8 text-purple-pale">
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
            <p className="font-syne text-2xl leading-8 text-purple-pale">
              Deuxième Année en France
            </p>
            <div className="flex flex-col gap-2">
              <TimelineItem
                title="Alternance HEIP"
                paragraphs={[
                  "Aujourd'hui, je suis en alternance à HEIP, une université de sciences politiques à Paris, un univers que je ne connaissais pas du tout avant d'y mettre les pieds.",
                  "Je m'occupe de tout ce qui touche aux réseaux sociaux : trouver les concepts, tourner, monter, suivre les tendances. Ce n'était pas mon terrain de jeu naturel, mais je n'ai jamais eu peur de me lancer dans ce que je ne connais pas, et c'est souvent là que j'apprends le plus.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <p className="max-w-[952px] text-center font-syne text-2xl leading-tight text-white/85 md:text-4xl md:leading-10">
          Aujourd'hui, je suis prête pour ma prochaine aventure, quelle
          qu'elle soit. J'ai hâte de voir où elle va m'emmener !
        </p>
      </section>

      <Contact />
    </div>
  )
}
