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
        <div
          className="animate-fade-in-up flex flex-col items-start justify-center gap-6"
          style={{ animationDelay: '120ms' }}
        >
          <H2 className="!w-auto whitespace-nowrap text-left">Prêt à explorer ?</H2>
          <div className="flex flex-wrap items-center gap-3">
            <Button to="/projects">Voir mes projets UX/UI</Button>
            <Button
              to="/communication"
              variant="ghost"
              className="min-h-11 border border-purple-pale/50 px-6 !text-lg !text-white hover:border-purple-pale/80 md:!text-xl"
            >
              Voir mes contenus
            </Button>
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
