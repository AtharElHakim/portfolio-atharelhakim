import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface LightboxImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      className={`size-8 ${direction === 'left' ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="var(--color-white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      className="size-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="var(--color-white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const goPrev = () => onNavigate((index - 1 + images.length) % images.length)
  const goNext = () => onNavigate((index + 1) % images.length)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  const current = images[index]

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-6 top-6 flex size-14 cursor-pointer items-center justify-center opacity-80 hover:opacity-100"
      >
        <CloseIcon />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            goPrev()
          }}
          aria-label="Image précédente"
          className="absolute left-4 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center opacity-80 hover:opacity-100 md:left-8"
        >
          <ArrowIcon direction="left" />
        </button>
      )}

      <img
        src={current.src}
        alt={current.alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] max-w-[85vw] cursor-default object-contain"
      />

      {images.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            goNext()
          }}
          aria-label="Image suivante"
          className="absolute right-4 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center opacity-80 hover:opacity-100 md:right-8"
        >
          <ArrowIcon direction="right" />
        </button>
      )}

      {images.length > 1 && (
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white">
          {index + 1} / {images.length}
        </p>
      )}
    </div>,
    document.body,
  )
}
