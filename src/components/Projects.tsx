import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { H2, H3, Body1, Body2 } from './Typography'
import { focusRing } from './Button'
import { useSwipe } from '../hooks/useSwipe'
import fineLineImg from '../assets/fineline/ancien-site.webp'
import yslImg from '../assets/project-ysl.webp'
import researchOpsImg from '../assets/project-research-ops.webp'

const projects = [
  {
    slug: 'loreal',
    title: 'YSL Sélection Privée',
    description:
      'Concept phygital pour réinventer la découverte du parfum de luxe.',
    image: yslImg,
  },
  {
    slug: 'fine-line-production',
    title: 'Fine Line Production',
    description:
      "Refonte UX/UI d'un site de production audiovisuelle, de l'audit au prototype.",
    image: fineLineImg,
  },
  {
    slug: 'angry-birds',
    title: 'Research Ops · Angry Birds',
    description: 'Étude UX pour comprendre les usages mobiles des enfants.',
    image: researchOpsImg,
  },
]

const arrowGlowStyle = {
  '--glow-color': 'var(--color-purple-light)',
  '--glow-blur': '10px',
  '--glow-opacity': '60%',
  '--glow-blur-hover': '16px',
  '--glow-opacity-hover': '90%',
} as CSSProperties

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      className={`size-5 ${direction === 'left' ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(1)
  const active = projects[activeIndex]

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % projects.length)
  const swipeHandlers = useSwipe(goNext, goPrev)

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center gap-10 overflow-hidden p-8 md:py-16 md:px-[var(--nav-edge-w)]"
    >
      <div className="relative flex w-full max-w-[1440px] flex-col items-center gap-6">
        <div className="animate-fade-in-up flex flex-col items-center gap-4 text-center">
          <H2>Projets</H2>
          <Body1 className="font-light">
            Découvrez mes projets UX/UI les plus récents
          </Body1>
        </div>
      </div>

      <div
        className="relative flex h-[440px] w-full max-w-[1440px] items-center justify-center touch-pan-y"
        style={{ perspective: '1600px' }}
        onTouchStart={swipeHandlers.onTouchStart}
        onTouchEnd={swipeHandlers.onTouchEnd}
      >
        {projects.map((project, i) => {
          const count = projects.length
          let offset = (i - activeIndex + count) % count
          if (offset > count / 2) offset -= count
          const isActive = offset === 0
          const abs = Math.abs(offset)
          const translateX = offset * 300
          const rotateY = offset === 0 ? 0 : offset < 0 ? 32 : -32
          const scale = isActive ? 1 : abs === 1 ? 0.82 : 0.6
          const opacity = abs > 1 ? 0 : isActive ? 1 : 0.55

          const cardInner = (
            <div className="flex size-full flex-col gap-4 p-4">
              <div
                className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/10 shadow-lift shadow-frame"
                style={{ '--lift-y': '6px', '--lift-blur': '18px', '--lift-opacity': '40%' } as CSSProperties}
              >
                <img loading="lazy" decoding="async"
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/15" />
              </div>
              <div className="flex flex-col items-start gap-2 px-2 pb-2">
                <H3 className="w-full !text-xl !leading-normal">{project.title}</H3>
                <Body2
                  className={`w-full transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {project.description}
                </Body2>
              </div>
            </div>
          )

          const cardClass =
            'absolute h-[400px] w-[340px] overflow-hidden rounded-3xl border-[1.5px] border-purple-pale/50 bg-purple-dark/35 backdrop-blur-[20px] shadow-glass-card shadow-lift transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform'

          const style = {
            transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
            zIndex: 10 - abs,
            opacity,
            '--lift-blur': '40px',
            '--lift-opacity': '40%',
          } as CSSProperties

          if (isActive) {
            return (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className={`${cardClass} cursor-pointer`}
                style={style}
              >
                {cardInner}
              </Link>
            )
          }

          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Voir ${project.title}`}
              className={`${cardClass} cursor-pointer`}
              style={style}
            >
              {cardInner}
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Projet précédent"
          className={`glass-dark flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-purple-pale/50 text-white shadow-glow transition-all duration-300 ${focusRing}`}
          style={arrowGlowStyle}
        >
          <ChevronIcon direction="left" />
        </button>
        <H3 className="min-w-[180px] text-center !text-lg !leading-normal">{active.title}</H3>
        <button
          type="button"
          onClick={goNext}
          aria-label="Projet suivant"
          className={`glass-dark flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-purple-pale/50 text-white shadow-glow transition-all duration-300 ${focusRing}`}
          style={arrowGlowStyle}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </section>
  )
}
