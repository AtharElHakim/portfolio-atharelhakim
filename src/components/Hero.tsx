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
            Je suis UX/UI designer, photographe et réalisatrice, passionnée
            par les façons non conventionnelles de créer. J'aime donner vie
            aux idées et raconter des histoires à travers des expériences
            visuelles et digitales.
          </Body1>
        </div>
        <div
          className="animate-fade-in-up flex flex-col items-start justify-center gap-6"
          style={{ animationDelay: '120ms' }}
        >
          <H2 className="!w-auto whitespace-nowrap text-left">Prêt à explorer ?</H2>
          <Button to="/projects">Voir mes projets</Button>
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
