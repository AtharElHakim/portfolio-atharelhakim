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
  imagePosition,
  portrait,
}: {
  to: string
  title: string
  description: string
  image: string
  /** Rendered instead of the image while `image` is empty. */
  imagePlaceholder?: ReactNode
  meta?: string
  /** CSS object-position for the thumbnail crop (e.g. 'center 20%'). */
  imagePosition?: string
  /** Vertical (9:16) image: shown zoomed out, centred over a blurred copy of
   *  itself instead of being cropped to the card's wide frame. */
  portrait?: boolean
}) {
  return (
    <Link
      to={to}
      className={`group flex flex-row items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 transition-all duration-300 transform-gpu will-change-transform hover:-translate-y-1 hover:border-purple-pale/40 sm:flex-col sm:items-stretch sm:gap-4 sm:rounded-3xl sm:p-3 ${focusRing}`}
    >
      {/* Phones: compact list row (thumbnail left, text right) so ~4 projects fit
          on one screen; regular card from sm up. */}
      <div className="relative aspect-[4/3] w-[40%] shrink-0 overflow-hidden rounded-xl sm:aspect-auto sm:h-[220px] sm:w-full sm:rounded-2xl">
        {image && portrait ? (
          <>
            <img
              aria-hidden
              src={image}
              alt=""
              className="absolute inset-0 size-full scale-110 object-cover opacity-60 blur-xl"
            />
            <img
              loading="lazy"
              decoding="async"
              src={image}
              alt={title}
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
              className="relative mx-auto h-[135%] w-auto max-w-none object-cover shadow-lift transition-transform duration-500 group-hover:scale-105"
            />
          </>
        ) : image ? (
          <img
            loading="lazy"
            decoding="async"
            src={image}
            alt={title}
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
            className="size-full transform-gpu object-cover transition-transform duration-500 ease-out will-change-transform [backface-visibility:hidden] group-hover:scale-105"
          />
        ) : (
          imagePlaceholder
        )}
      </div>
      <div className="flex min-w-0 flex-col items-start gap-1 pr-1 sm:gap-2 sm:px-3 sm:pb-3">
        <H3 className="max-sm:!text-lg max-sm:!leading-6">{title}</H3>
        {meta && <Micro1>{meta}</Micro1>}
        <Body2 className="max-sm:line-clamp-2 max-sm:!text-sm max-sm:!leading-5">{description}</Body2>
      </div>
    </Link>
  )
}
