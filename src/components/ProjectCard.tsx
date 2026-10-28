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
      className={`group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-purple-pale/40 ${focusRing}`}
    >
      <div className="relative h-[220px] w-full overflow-hidden rounded-2xl">
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
