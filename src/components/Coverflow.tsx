import { useState, type CSSProperties } from 'react'
import { focusRing } from './Button'
import { Micro1 } from './Typography'
import { useSwipe } from '../hooks/useSwipe'

/* 3D coverflow deck browser — same visual language as the Home project
   carousel (Projects.tsx), scoped to a set of slide images. The centre card
   is clickable and calls `onOpen(index)` so the page can open the full
   deck in the Lightbox at that slide. Degrades to a static row for 1–2
   slides (a coverflow needs ≥3 to read as one). */

const arrowGlowStyle = {
  '--glow-color': 'var(--color-purple-light)',
  '--glow-blur': '10px',
  '--glow-opacity': '60%',
  '--glow-blur-hover': '16px',
  '--glow-opacity-hover': '90%',
} as CSSProperties

const cardBase =
  'aspect-video overflow-hidden rounded-2xl border-[1.5px] border-purple-pale/50 bg-purple-dark/35 shadow-glass-card'

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

export default function Coverflow({
  slides,
  onOpen,
  ariaLabel = 'Diapositives',
}: {
  slides: string[]
  onOpen: (index: number) => void
  ariaLabel?: string
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const count = slides.length

  const goPrev = () => setActiveIndex((p) => (p - 1 + count) % count)
  const goNext = () => setActiveIndex((p) => (p + 1) % count)
  const swipeHandlers = useSwipe(goNext, goPrev)

  if (count === 0) return null

  if (count <= 2) {
    return (
      <div className="flex w-full max-w-[720px] flex-wrap justify-center gap-4">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => onOpen(i)}
            aria-label={`${ariaLabel}, agrandir la diapositive ${i + 1}`}
            className={`${cardBase} w-full max-w-[340px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${focusRing}`}
          >
            <img src={src} alt="" className="size-full object-cover" />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-[900px] flex-col items-center gap-5">
      <div
        className="relative flex h-[190px] w-full touch-pan-y items-center justify-center md:h-[250px]"
        style={{ perspective: '1600px' }}
        onTouchStart={swipeHandlers.onTouchStart}
        onTouchEnd={swipeHandlers.onTouchEnd}
      >
        {slides.map((src, i) => {
          let offset = (i - activeIndex + count) % count
          if (offset > count / 2) offset -= count
          const isActive = offset === 0
          const abs = Math.abs(offset)
          const style = {
            transform: `translateX(${offset * 230}px) scale(${
              isActive ? 1 : abs === 1 ? 0.82 : 0.62
            }) rotateY(${offset === 0 ? 0 : offset < 0 ? 30 : -30}deg)`,
            zIndex: 10 - abs,
            opacity: abs > 1 ? 0 : isActive ? 1 : 0.5,
          } as CSSProperties
          const className = `${cardBase} absolute w-[260px] cursor-pointer backdrop-blur-[20px] shadow-lift transition-[transform,opacity] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform md:w-[400px]`

          if (isActive) {
            return (
              <button
                key={src}
                type="button"
                onClick={() => onOpen(i)}
                aria-label={`${ariaLabel}, agrandir la diapositive ${i + 1}`}
                className={`${className} ${focusRing}`}
                style={style}
              >
                <img src={src} alt="" className="size-full object-cover" />
              </button>
            )
          }
          return (
            <button
              key={src}
              type="button"
              tabIndex={-1}
              onClick={() => setActiveIndex(i)}
              aria-label={`Voir la diapositive ${i + 1}`}
              className={className}
              style={style}
            >
              <img src={src} alt="" className="size-full object-cover" />
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Diapositive précédente"
          className={`glass-dark flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-purple-pale/50 text-white shadow-glow transition-all duration-300 ${focusRing}`}
          style={arrowGlowStyle}
        >
          <ChevronIcon direction="left" />
        </button>
        <Micro1 className="min-w-[60px] text-center">
          {activeIndex + 1} / {count}
        </Micro1>
        <button
          type="button"
          onClick={goNext}
          aria-label="Diapositive suivante"
          className={`glass-dark flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-purple-pale/50 text-white shadow-glow transition-all duration-300 ${focusRing}`}
          style={arrowGlowStyle}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  )
}
