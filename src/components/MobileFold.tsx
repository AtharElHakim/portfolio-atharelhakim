import { useId, useState, type ReactNode } from 'react'
import { focusRing } from './Button'

/* Folds a case-study section's content on phones only: the title stays
   visible with a « Voir la section » toggle, so secondary sections (budget,
   roadmap…) don't make the page dozens of screens long. From md up the
   content is always shown and the toggle is hidden. */
export default function MobileFold({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <>
      <div id={id} className={`w-full flex-col items-center gap-[inherit] md:flex ${open ? 'flex' : 'hidden'}`}>
        {children}
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-purple-pale/40 bg-purple/15 px-5 text-sm font-medium text-white/85 transition-colors hover:border-purple-pale/70 hover:text-white md:hidden ${focusRing}`}
      >
        {open ? 'Masquer la section' : 'Voir la section'}
        <svg className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </>
  )
}
