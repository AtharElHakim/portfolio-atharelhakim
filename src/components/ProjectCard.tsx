import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { focusRing } from './Button'
import { H3, Body2, Micro1 } from './Typography'

/* Grid card shared by the two project listings (/projects and
   /communication). `meta` is only used by Communication. */
export default function ProjectCard({
  to,
  title,
  description,
  image,
  imagePlaceholder,
  meta,
}: {
  to: string
  title: string
  description: string
  image: string
  /** Rendered instead of the image while `image` is empty. */
  imagePlaceholder?: ReactNode
  meta?: string
}) {
  return (
    <Link
      to={to}
      className={`group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-purple-pale/40 ${focusRing}`}
    >
      <div className="h-[220px] w-full overflow-hidden rounded-2xl">
        {image ? (
          <img
            loading="lazy"
            decoding="async"
            src={image}
            alt={title}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          imagePlaceholder
        )}
      </div>
      <div className="flex flex-col items-start gap-2 px-3 pb-3">
        <H3>{title}</H3>
        {meta && <Micro1>{meta}</Micro1>}
        <Body2>{description}</Body2>
      </div>
    </Link>
  )
}
