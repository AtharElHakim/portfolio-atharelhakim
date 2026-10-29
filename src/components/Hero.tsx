import portraitImg from '../assets/portrait-dark-2-transparent.webp'
import { Display, H2, Body1 } from './Typography'
import Button from './Button'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-wrap items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]"
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-10">
      <div className="relative z-10 flex flex-1 min-w-[280px] flex-col items-start gap-12">
        <div className="animate-fade-in-up flex flex-col items-start gap-4">
          <Display className="w-full">Salut, moi c'est Athar !</Display>
          <Body1 className="w-full font-light">
            UX/UI designer et créatrice de contenu. Du prototype Figma au reel
            de 30 secondes, je fais de chaque idée une histoire qu'on a envie
            de suivre.
          </Body1>
        </div>
        {/* Compact block like the reference: smaller question centred
            above the two buttons, sitting under the paragraph. */}
        <div
          className="animate-fade-in-up flex w-fit flex-col items-center gap-6 lg:self-center"
          style={{ animationDelay: '120ms' }}
        >
          <H2 className="!w-auto whitespace-nowrap md:!text-[40px]">Prêt à explorer ?</H2>
          {/* Equal-width buttons: same fixed width (fits the longer label), side by
              side when there's room, stacked when there isn't. */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button to="/projects" className="w-52 !px-4 sm:w-60 [&_p]:!whitespace-nowrap max-sm:[&_p]:!text-base">Projets UX/UI</Button>
            <Button to="/communication" className="w-52 !px-4 sm:w-60 [&_p]:!whitespace-nowrap max-sm:[&_p]:!text-base">Créations de Contenu</Button>
          </div>
        </div>
      </div>
      {/* Mobile: the portrait sits behind the text, dimmed so the text stays
          readable; beside the text once both fit (1180px+). The opacity lives on the <img>:
          on the wrapper, the fade-in animation's end state would override it. */}
      <div
        className="animate-fade-in-up pointer-events-none flex items-center justify-center max-[1179px]:absolute max-[1179px]:translate-x-[22%] max-[1179px]:inset-x-0 max-[1179px]:top-0 max-[1179px]:bottom-0 max-[1179px]:z-0 min-[1180px]:pointer-events-auto min-[1180px]:relative min-[1180px]:shrink-0"
        style={{ animationDelay: '200ms' }}
      >
        <img
          src={portraitImg}
          alt="Portrait illustré d'Athar"
          fetchPriority="high"
          style={{
            // The illustration has its own dark backdrop: fade its edges into the
            // page instead of cutting her out (a hand-traced cutout left jagged
            // edges). Side fade + top fade; the bottom keeps the light at her feet.
            maskImage:
              'linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
          className="w-auto max-w-none object-contain max-[1179px]:h-full max-[1179px]:opacity-40 max-[1179px]:max-h-[640px] min-[1180px]:h-[600px]"
        />
      </div>
      </div>
    </section>
  )
}
