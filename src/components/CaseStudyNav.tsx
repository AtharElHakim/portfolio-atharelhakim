import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { focusRing } from './Button'

function ArrowLeftIcon() {
  return (
    <svg
      className="size-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12H5M5 12L12 19M5 12L12 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Glues short French words to the next word, so a wrapped label never
 *  leaves "de", "et", "à"… alone at the end of a line. */
const keepShortWords = (text = '') => text.replace(/(^|\s)(de|du|des|et|à|au|aux|un|une|le|la|les|en|par)\s/gi, '$1$2 ')

export interface CaseStudySection {
  id: string
  label: string
  group?: string
}

export default function CaseStudyNav({
  sections,
  backTo = '/projects',
  labelMaxWidth = 'max-w-[160px]',
}: {
  sections: CaseStudySection[]
  /** Listing the "← Projets" button returns to. */
  backTo?: string
  /** Long labels wrap at this width so they never run into the content column. */
  labelMaxWidth?: string
}) {
  const labelWrap = `text-left ${labelMaxWidth}`
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <>
      {/* Sticky only where the side nav lives (lg+); on smaller screens a floating
          back button would sit on top of the text while scrolling. */}
      <div className="relative z-10 flex items-center px-4 py-2 md:px-12 lg:sticky lg:top-20">
        <Link
          to={backTo}
          className={`flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition-colors duration-300 hover:text-white ${focusRing}`}
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <ArrowLeftIcon />
          Projets
        </Link>
      </div>

      {createPortal(
        // Fixed start, not centered: every project's list begins 34px under the back
        // button (bottom at 132px) however many sections it has. Short screens scroll it.
        <div className="pointer-events-none fixed left-6 top-[166px] z-50 hidden lg:block xl:left-10">
          <nav className="pointer-events-auto flex max-h-[calc(100vh-182px)] flex-col items-start gap-2 overflow-y-auto border-l border-white/15 pl-4 [scrollbar-width:none]">
            {sections.map((section, i) => {
              const isActive = section.id === activeId
              const showGroup = section.group && section.group !== sections[i - 1]?.group
              return (
                <div key={section.id} className="flex flex-col items-start">
                  {showGroup && (
                    <p className={`mb-2 mt-2 ${labelWrap} text-xs font-semibold uppercase tracking-widest text-purple-pale/70 first:mt-0`}>
                      {keepShortWords(section.group)}
                    </p>
                  )}
                  <a
                    href={`#${section.id}`}
                    className={`${labelWrap} text-sm transition-colors duration-300 hover:text-white ${
                      isActive ? 'font-medium text-white' : 'text-white/50'
                    }`}
                  >
                    {keepShortWords(section.label)}
                  </a>
                </div>
              )
            })}
          </nav>
        </div>,
        document.body,
      )}
    </>
  )
}
