import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-[rgba(253,251,246,0.8)] transition-colors duration-300 hover:text-[#fdfbf6]"
          style={{
            background: 'rgba(253,251,246,0.06)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <ArrowLeftIcon />
          Projets
        </Link>
      </div>

      <div className="pointer-events-none fixed right-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block xl:right-10">
        <nav className="pointer-events-auto flex flex-col items-end gap-2.5 border-r border-white/15 pr-4">
          {sections.map((section) => {
            const isActive = section.id === activeId
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`whitespace-nowrap text-sm transition-colors duration-300 hover:text-[#fdfbf6] ${
                  isActive
                    ? 'font-medium text-[#fdfbf6]'
                    : 'text-[rgba(253,251,246,0.5)]'
                }`}
              >
                {section.label}
              </a>
            )
          })}
        </nav>
      </div>
    </>
  )
}
