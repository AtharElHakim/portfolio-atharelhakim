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

export interface CaseStudySection {
  id: string
  label: string
  group?: string
}

export default function CaseStudyNav({
  sections,
}: {
  sections: CaseStudySection[]
}) {
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
      <div className="sticky top-20 z-10 flex items-center px-4 py-2 md:px-12">
        <Link
          to="/projects"
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
        <div className="pointer-events-none fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block xl:right-10">
          <nav className="pointer-events-auto flex flex-col items-end gap-2 border-r border-white/15 pr-4">
            {sections.map((section, i) => {
              const isActive = section.id === activeId
              const showGroup = section.group && section.group !== sections[i - 1]?.group
              return (
                <div key={section.id} className="flex flex-col items-end">
                  {showGroup && (
                    <p className="mb-2 mt-2 whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-purple-pale/70 first:mt-0">
                      {section.group}
                    </p>
                  )}
                  <a
                    href={`#${section.id}`}
                    className={`whitespace-nowrap text-sm transition-colors duration-300 hover:text-white ${
                      isActive ? 'font-medium text-white' : 'text-white/50'
                    }`}
                  >
                    {section.label}
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
