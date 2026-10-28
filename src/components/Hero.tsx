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
      <div className="relative flex flex-1 min-w-[280px] flex-col items-start gap-12">
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
          className="animate-fade-in-up flex w-fit flex-col items-center gap-5"
          style={{ animationDelay: '120ms' }}
        >
          <H2 className="!w-auto whitespace-nowrap !text-2xl md:!text-3xl">Prêt à explorer ?</H2>
          <div className="flex flex-wrap items-center justify-center gap-3 min-[400px]:flex-nowrap sm:gap-4">
            <Button to="/projects" className="!px-4 min-[380px]:!px-5 sm:!px-6 [&_p]:!whitespace-nowrap">Projets UX/UI</Button>
            <Button to="/communication" className="!px-4 min-[380px]:!px-5 sm:!px-6 [&_p]:!whitespace-nowrap">Créations de Contenu</Button>
          </div>
        </div>
      </div>
      <div
        className="animate-fade-in-up relative flex w-[320px] items-center justify-center"
        style={{ animationDelay: '200ms' }}
      >
        <img
          src={portraitImg}
          alt="Portrait illustré d'Athar"
          fetchPriority="high"
          className="h-[600px] w-auto object-contain"
        />
      </div>
      </div>
    </section>
  )
}
