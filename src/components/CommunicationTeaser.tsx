import { useState, type CSSProperties } from 'react'
import { H2, Body1 } from './Typography'
import Button, { focusRing } from './Button'
import { Placeholder, PlayGlyph } from './communication/media'
import { cardFrame, PlayerModal } from './communication/VideoCard'
import { useCarouselGestures } from '../hooks/useCarouselGestures'
import { accueil, type AccueilCarte } from '../data/communication'

function Thumb({ carte }: { carte: AccueilCarte }) {
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden bg-black-soft">
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

/** Swipeable 3D carousel (all screen sizes), same motion as the UX/UI one on the homepage:
 *  the active card sits in front, the neighbours tilt back on each side. */
function MobileCarousel({ onPlay }: { onPlay: (c: AccueilCarte) => void }) {
  const blocs = accueil.cartes
  const [activeIndex, setActiveIndex] = useState(Math.floor(blocs.length / 2))
  const goPrev = () => setActiveIndex((i) => (i - 1 + blocs.length) % blocs.length)
  const goNext = () => setActiveIndex((i) => (i + 1) % blocs.length)
  const gestures = useCarouselGestures(goNext, goPrev)

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div
        className="relative flex h-[470px] w-full items-center justify-center [--step:150px] md:h-[520px] md:[--step:290px] touch-pan-y select-none [&_img]:pointer-events-none [&_img]:[-webkit-user-drag:none]"
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
            transform: `translateX(calc(var(--step) * ${offset})) scale(${isActive ? 1 : 0.78}) rotateY(${isActive ? 0 : offset < 0 ? 32 : -32}deg)`,
            zIndex: 10 - abs,
            opacity: abs > 1 ? 0 : isActive ? 1 : 0.55,
          } as CSSProperties
          const cls = `absolute flex w-[230px] flex-col overflow-hidden md:w-[270px] transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${cardFrame} ${focusRing}`

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
            </button>
          )
        })}
      </div>

    </div>
  )
}

/** Homepage block: 3 videos in a swipeable 3D carousel; the front card plays
 *  its video in place (modal with sound), no link out. */
export default function CommunicationTeaser() {
  const [playing, setPlaying] = useState<AccueilCarte | null>(null)
  return (
    <section className="relative flex flex-col items-center gap-10 overflow-hidden p-8 md:py-12 md:px-[var(--nav-edge-w)]">
      <div className="flex flex-col items-center gap-4 text-center">
        <H2>{accueil.titre}</H2>
        <Body1 className="font-light">{accueil.texte}</Body1>
      </div>

      <MobileCarousel onPlay={setPlaying} />

      <Button to="/communication">Voir mes contenus</Button>
      {playing && <PlayerModal video={{ ...playing.video, titre: playing.titre }} onClose={() => setPlaying(null)} />}
    </section>
  )
}
