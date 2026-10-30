import { useState, type CSSProperties } from 'react'
import { H2, H3, Body1, H6 } from './Typography'
import Button, { focusRing } from './Button'
import { Placeholder, PlayGlyph } from './communication/media'
import { cardFrame, PlayerModal } from './communication/VideoCard'
import { useCarouselGestures } from '../hooks/useCarouselGestures'
import { accueil, type AccueilCarte } from '../data/communication'

/* Same arrows as the UX/UI carousel (Projects.tsx). */
const arrowGlowStyle = {
  '--glow-color': 'var(--color-purple-light)',
  '--glow-blur': '10px',
  '--glow-opacity': '60%',
  '--glow-blur-hover': '16px',
  '--glow-opacity-hover': '90%',
} as CSSProperties

const arrowClass = `glass-dark flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-purple-pale/50 text-white shadow-glow transition-all duration-300 ${focusRing}`

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg className={`size-5 ${direction === 'left' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Thumb({ carte }: { carte: AccueilCarte }) {
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black-soft">
      {carte.video.poster ? (
        <img loading="lazy" decoding="async" src={carte.video.poster} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <Placeholder label={carte.titre} format="9:16" className="absolute inset-0" />
      )}
      <span className="pointer-events-none absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
        <PlayGlyph className="ml-0.5 size-5" />
      </span>
    </div>
  )
}

function CardBody({ carte }: { carte: AccueilCarte }) {
  return (
    <div className="px-1 pb-1 text-left">
      {/* Room for 2 lines on every card, so a long title doesn't make one card taller. */}
      <H6 className="line-clamp-2 max-md:min-h-[2lh]">{carte.titre}</H6>
    </div>
  )
}

/** Mobile only: swipeable 3D carousel, same motion as the UX/UI one on the homepage. */
function MobileCarousel({ onPlay }: { onPlay: (c: AccueilCarte) => void }) {
  const blocs = accueil.cartes
  const [activeIndex, setActiveIndex] = useState(Math.floor(blocs.length / 2))
  const goPrev = () => setActiveIndex((i) => (i - 1 + blocs.length) % blocs.length)
  const goNext = () => setActiveIndex((i) => (i + 1) % blocs.length)
  const gestures = useCarouselGestures(goNext, goPrev)

  return (
    <div className="flex w-full flex-col items-center gap-6 md:hidden">
      <div
        className="relative flex h-[470px] w-full items-center justify-center touch-pan-y select-none [&_img]:pointer-events-none [&_img]:[-webkit-user-drag:none]"
        style={{ perspective: '1600px' }}
        {...gestures}
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

          return (
            <button
              key={b.titre}
              type="button"
              onClick={() => (isActive ? onPlay(b) : setActiveIndex(i))}
              aria-label={isActive ? `Lire la vidéo « ${b.titre} »` : `Voir ${b.titre}`}
              className={`${cls} ${isActive ? 'group' : ''} cursor-pointer`}
              style={style}
            >
              <Thumb carte={b} />
              <CardBody carte={b} />
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

/** Homepage block: 3 videos that play in place (modal with sound), no link
 *  out. Side by side from md, swipeable carousel below. */
export default function CommunicationTeaser() {
  const [playing, setPlaying] = useState<AccueilCarte | null>(null)
  return (
    <section className="relative flex flex-col items-center gap-10 overflow-hidden p-8 md:py-12 md:px-[var(--nav-edge-w)]">
      <div className="flex flex-col items-center gap-4 text-center">
        <H2>{accueil.titre}</H2>
        <Body1 className="font-light">{accueil.texte}</Body1>
      </div>

      <MobileCarousel onPlay={setPlaying} />

      <div className="hidden w-full flex-nowrap justify-center gap-4 md:flex">
        {accueil.cartes.map((c) => (
          <button
            key={c.titre}
            type="button"
            onClick={() => setPlaying(c)}
            aria-label={`Lire la vidéo « ${c.titre} »`}
            className={`group flex w-[calc((100%-2rem)/3)] max-w-[260px] cursor-pointer flex-col gap-3 p-3 transition-transform duration-300 hover:-translate-y-1 ${cardFrame} ${focusRing}`}
          >
            <Thumb carte={c} />
            <CardBody carte={c} />
          </button>
        ))}
      </div>
      <Button to="/communication">Voir mes contenus</Button>
      {playing && <PlayerModal video={{ ...playing.video, titre: playing.titre }} onClose={() => setPlaying(null)} />}
    </section>
  )
}
