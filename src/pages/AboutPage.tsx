import Contact from '../components/Contact'
import { H2, Body1, Body2 } from '../components/Typography'
import portraitImg from '../assets/about-portrait-bust.png'
import canoeSketchImg from '../assets/about-canoe-sketch.png'
import clapperboardImg from '../assets/about-clapperboard.png'
import wireframeSketchImg from '../assets/about-wireframe-sketch.png'
import libanParisMapImg from '../assets/about-liban-paris-map.png'
import franceMapImg from '../assets/about-france-map.png'
import lebanonMapImg from '../assets/about-lebanon-map.png'
import routeLineImg from '../assets/about-route-line.png'
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
      <div className="flex flex-1 flex-col gap-2 text-white/85">
        <p className="text-xl leading-tight text-white">{title}</p>
        {paragraphs.map((paragraph) => (
          <Body2 key={paragraph}>{paragraph}</Body2>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="relative isolate">
      <div className="flex items-end justify-center gap-12 border-b border-white/10 px-8 pb-[88px] pt-[138px] md:flex-row-reverse md:gap-24 md:px-[var(--nav-edge-w)]">
        <div className="-mb-[88px] hidden shrink-0 items-end md:flex">
          <img
            src={portraitImg}
            alt="Portrait illustré d'Athar"
            className="size-[280px] object-contain lg:size-[380px]"
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
            <Body1>
              Je suis une personne polyvalente, en quête de ma prochaine
              aventure ! La créativité, c'est mon point de départ, peu importe
              où elle m'emmène.
            </Body1>
          </div>
        </div>
      </div>

      <section className="relative flex flex-col items-center justify-center gap-8 overflow-hidden border-b border-white/10 p-8 md:flex-row md:items-start md:gap-16 md:py-16 md:px-[var(--nav-edge-w)]">
        <img
          src={canoeSketchImg}
          alt=""
          className="pointer-events-none absolute -left-24 top-0 w-[550px] rotate-12 opacity-25 invert"
        />
        <div className="relative z-10 shrink-0">
          <H2>
            Là où tout a
            <br />
            commencé
          </H2>
        </div>
        <div className="relative z-10 flex w-full max-w-[740px] flex-col gap-4 md:w-auto">
          <TimelineItem
            title="Le cinéma avant tout"
            paragraphs={[
              "En 2021, j'ai fini mon Bachelor en Arts Audiovisuels au Liban. Pour mon projet de fin de diplôme, j'ai réalisé un court métrage qui a eu l'opportunité d'être projeté dans plusieurs festivals de film au Liban, au Canada et aux États-Unis.",
            ]}
          />
          <TimelineItem
            title="3 ans de Freelance"
            paragraphs={[
              'Après mon diplôme, j\'ai enchaîné les postes dans les médias : casting, réalisation, montage, photo, direction de production. J\'ai travaillé sur des campagnes ONG, des films et des clips musicaux, dont une collaboration avec Netflix sur "Love is Blind Habibi".',
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

      <section className="relative flex flex-col items-center gap-4 overflow-hidden border-y border-white/10 px-8 pb-8 pt-8 text-center lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:px-16 lg:pb-16 lg:pt-[146px] xl:px-24 xl:pt-[163px]">
        {/* combined single image — mobile & tablet only, one block above the heading */}
        <img
          src={libanParisMapImg}
          alt=""
          className="h-auto w-[300px] opacity-25 invert md:w-[420px] lg:hidden"
        />

        {/* France — desktop (lg+) only, flanks the text on the left */}
        <img
          src={franceMapImg}
          alt=""
          className="hidden h-auto shrink-0 opacity-25 invert lg:block lg:w-[240px] xl:w-[280px]"
        />
        <div className="relative flex w-full max-w-[900px] flex-1 flex-col items-center gap-4 [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]">
          {/* route line — desktop (lg+) only: absolutely positioned above the heading, stretched wider */}
          <img
            src={routeLineImg}
            alt=""
            className="pointer-events-none absolute left-1/2 top-0 hidden max-w-none -translate-x-1/2 opacity-25 invert lg:block lg:h-[145px] lg:w-[620px] lg:-top-[128px] xl:h-[165px] xl:w-[700px] xl:-top-[145px]"
          />
          <H2 className="relative z-10">Un Tournant Décisif</H2>
          <Body1 className="font-light">
            Mais avec l'instabilité économique et sociale croissante au
            Liban, j'ai commencé à repenser mon avenir. Je voulais évoluer,
            explorer de nouvelles manières de raconter des histoires et
            construire une carrière dans un environnement plus stable.
          </Body1>
          <Body1 className="font-light">
            C'est ainsi qu'en août 2024, je suis arrivée à Paris pour
            suivre un Master en UX/UI Lead Design à Sup de Pub.
          </Body1>
        </div>
        {/* Lebanon — desktop (lg+) only, flanks the text on the right */}
        <img
          src={lebanonMapImg}
          alt=""
          className="hidden h-auto shrink-0 opacity-25 invert lg:block lg:w-[200px] xl:w-[230px]"
        />
      </section>

      <section className="flex flex-col items-start justify-center gap-20 border-b border-white/10 p-8 md:flex-row md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-center gap-4">
          <H2 className="md:w-[300px] !text-left">
            Un nouveau
            <br />
            chapitre
          </H2>
          {/* Left illustration column: clapperboard / arrow / wireframe,
              sized uniformly (both crops at w-[180px]) with tight gaps so the
              stack ends roughly where the text column does (tuned at ~1450px;
              text reflow at much narrower/wider md widths shifts the match). */}
          <div className="hidden flex-col items-center gap-3 md:flex">
            <div className="relative w-[180px] overflow-hidden" style={{ aspectRatio: '159 / 133' }}>
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
            <div className="flex h-[76px] w-4 items-center justify-center">
              <img
                src={arrowDownIcon}
                alt=""
                className="w-[76px] max-w-none shrink-0 rotate-90"
                style={{ aspectRatio: '113.667 / 22' }}
              />
            </div>
            <div className="relative w-[180px] overflow-hidden" style={{ aspectRatio: '92.6228 / 77.137' }}>
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
                  "Refonte complète du site d'une société de production libanaise, à distance : j'ai porté tout le projet, de la recherche au design final, en toute autonomie. Le site a été conçu et développé sur Webflow, ma première vraie expérience UX/UI de bout en bout.",
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
                  "Je gère tout le contenu réseaux sociaux : concepts, tournage, montage, veille tendances. Ce n'était pas mon terrain naturel, mais c'est souvent en terrain inconnu que j'apprends le plus.",
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
