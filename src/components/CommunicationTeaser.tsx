import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { H2, H3, Body1, H6, Micro1 } from './Typography'
import Button, { focusRing } from './Button'
import { Placeholder, PlayGlyph } from './communication/media'
import { cardFrame } from './communication/VideoCard'
import { useSwipe } from '../hooks/useSwipe'
import { accueil, alternance, blocPoster, type Bloc } from '../data/communication'

const blocHref = (b: Bloc) => `/communication/${alternance.slug}#${b.id}`

/* Same arrows as the UX/UI carousel (Projects.tsx). */
const arrowGlowStyle = {
  '--glow-color': 'var(--color-purple-light)',
  '--glow-blur': '10px',
  '--glow-opacity': '60%',
  '--glow-blur-hover': '16px',
  '--glow-opacity-hover': '90%',
} as CSSProperties

const arrowClass = `glass-dark flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-purple-pale/50 text-white shadow-glow transition-all duration-300 ${focusRing}`

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg className={`size-5 ${direction === 'left' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Thumb({ bloc }: { bloc: Bloc }) {
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black-soft">
      {blocPoster(bloc) ? (
        <img loading="lazy" decoding="async" src={blocPoster(bloc)} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <Placeholder label={bloc.titre} format="9:16" className="absolute inset-0" />
      )}
      <span className="pointer-events-none absolute bottom-3 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-sm">
        <PlayGlyph />
      </span>
    </div>
  )
}

function CardBody({ bloc }: { bloc: Bloc }) {
  return (
    <div className="flex flex-col gap-1 px-1 pb-1 text-left">
      {/* Room for 2 lines on every card, so a long title doesn't make one card taller. */}
      <H6 className="line-clamp-2 max-md:min-h-[2lh]">{bloc.titre}</H6>
      <Micro1>{bloc.sousLigne}</Micro1>
    </div>
  )
}

/** Mobile only: swipeable 3D carousel, same motion as the UX/UI one on the homepage. */
function MobileCarousel() {
  const blocs = accueil.blocs
  const [activeIndex, setActiveIndex] = useState(Math.floor(blocs.length / 2))
  const goPrev = () => setActiveIndex((i) => (i - 1 + blocs.length) % blocs.length)
  const goNext = () => setActiveIndex((i) => (i + 1) % blocs.length)
  const swipe = useSwipe(goNext, goPrev)

  return (
    <div className="flex w-full flex-col items-center gap-6 md:hidden">
      <div
        className="relative flex h-[470px] w-full items-center justify-center touch-pan-y"
        style={{ perspective: '1600px' }}
        onTouchStart={swipe.onTouchStart}
        onTouchEnd={swipe.onTouchEnd}
      >
        {blocs.map((b, i) => {
          const count = blocs.length
          let offset = (i - activeIndex + count) % count
          if (offset > count / 2) offset -= count
          const isActive = offset === 0
          const abs = Math.abs(offset)
          const style = {
            transform: `translateX(${offset * 150}px) scale(${isActive ? 1 : 0.78}) rotateY(${isActive ? 0 : offset < 0 ? 32 : -32}deg)`,
            zIndex: 10 - abs,
            opacity: abs > 1 ? 0 : isActive ? 1 : 0.55,
          } as CSSProperties
          const cls = `absolute flex w-[230px] flex-col gap-3 p-2.5 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${cardFrame} ${focusRing}`

          return isActive ? (
            <Link key={b.id} to={blocHref(b)} className={`${cls} group cursor-pointer`} style={style}>
              <Thumb bloc={b} />
              <CardBody bloc={b} />
            </Link>
          ) : (
            <button key={b.id} type="button" onClick={() => setActiveIndex(i)} aria-label={`Voir ${b.titre}`} className={`${cls} cursor-pointer`} style={style}>
              <Thumb bloc={b} />
              <CardBody bloc={b} />
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-6">
        <button type="button" onClick={goPrev} aria-label="Contenu précédent" className={arrowClass} style={arrowGlowStyle}>
          <ChevronIcon direction="left" />
        </button>
        <H3 className="min-w-[180px] text-center !text-lg !leading-normal">{blocs[activeIndex].titre}</H3>
        <button type="button" onClick={goNext} aria-label="Contenu suivant" className={arrowClass} style={arrowGlowStyle}>
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  )
}

/** Homepage block: 3 thumbnails leading to their block on /communication/alternance-omnes.
 *  Side by side from md, swipeable carousel below. */
export default function CommunicationTeaser() {
  return (
    <section className="relative flex flex-col items-center gap-10 overflow-hidden p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      <div className="flex flex-col items-center gap-4 text-center">
        <H2>{accueil.titre}</H2>
        <Body1 className="font-light">{accueil.texte}</Body1>
      </div>

      <MobileCarousel />

      <div className="hidden w-full flex-wrap justify-center gap-4 md:flex lg:gap-6">
        {accueil.blocs.map((b) => (
          <Link
            key={b.id}
            to={blocHref(b)}
            className={`group flex w-[260px] flex-col gap-3 p-3 transition-transform duration-300 hover:-translate-y-1 ${cardFrame} ${focusRing}`}
          >
            <Thumb bloc={b} />
            <CardBody bloc={b} />
          </Link>
        ))}
      </div>
      <Button to="/communication">Voir mes contenus</Button>
    </section>
  )
}
