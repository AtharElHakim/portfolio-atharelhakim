import { Link } from 'react-router-dom'
import portraitImg from '../assets/portrait-dark-2-transparent.png'
import { Display, H2, Body1 } from './Typography'

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
          <Link
            to="/projects"
            className="flex cursor-pointer items-center justify-center rounded-full px-6 py-2 text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, var(--color-purple-light) 0%, var(--color-purple-deep) 100%)',
              boxShadow: '0 0 20px color-mix(in oklab, var(--color-purple-mid) 35%, transparent)',
            }}
          >
            <Body1 className="!text-white whitespace-nowrap text-center">
              Voir mes projets
            </Body1>
          </Link>
        </div>
      </div>
      <div
        className="animate-fade-in-up relative flex w-[320px] items-center justify-center"
        style={{ animationDelay: '200ms' }}
      >
        <img
          src={portraitImg}
          alt="Portrait illustré d'Athar"
          className="h-[600px] w-auto object-contain"
        />
      </div>
      </div>
    </section>
  )
}
