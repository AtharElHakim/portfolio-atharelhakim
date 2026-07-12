import { Link } from 'react-router-dom'
import portraitImg from '../assets/portrait-dark-2-transparent.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-wrap items-center gap-16 p-8 md:py-16 md:px-[var(--nav-edge-w)]"
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-16">
      <div className="relative flex flex-1 min-w-[280px] flex-col items-start gap-12">
        <div className="animate-fade-in-up flex flex-col items-start gap-6">
          <h1 className="w-full font-syne text-5xl leading-tight text-[#fdfbf6] md:text-[72px] md:leading-[72px]">
            Salut, moi c'est Athar !
          </h1>
          <p className="w-full font-light text-lg leading-relaxed text-[rgba(253,251,246,0.7)] md:text-2xl md:leading-8">
            Je suis UX/UI designer, photographe et réalisatrice, passionnée
            par les façons non conventionnelles de créer. J'aime donner vie
            aux idées et raconter des histoires à travers des expériences
            visuelles et digitales.
          </p>
        </div>
        <div
          className="animate-fade-in-up flex flex-col items-start justify-center gap-6"
          style={{ animationDelay: '120ms' }}
        >
          <p className="whitespace-nowrap font-syne text-3xl leading-tight text-[#fdfbf6] md:text-5xl md:leading-[48px]">
            Prêt à explorer ?
          </p>
          <Link
            to="/projects"
            className="group flex cursor-pointer items-center justify-center border border-violet-300/60 bg-[rgba(124,58,237,0.55)] px-4 py-2 backdrop-blur-[20px] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]"
          >
            <span className="whitespace-nowrap text-center text-lg font-medium leading-6 text-[#fdfbf6]">
              Voir mes projets
            </span>
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
