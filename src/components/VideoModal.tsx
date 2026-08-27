import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { focusRing } from './Button'
import { useModalFocus } from '../hooks/useModalFocus'

interface VideoModalProps {
  onClose: () => void
  children: ReactNode
}

export default function VideoModal({ onClose, children }: VideoModalProps) {
  const containerRef = useModalFocus<HTMLDivElement>(onClose)

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className={`absolute right-6 top-6 flex size-14 cursor-pointer items-center justify-center rounded-full opacity-80 hover:opacity-100 ${focusRing}`}
      >
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
      </button>
      <div
        className="flex flex-col items-center gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}
