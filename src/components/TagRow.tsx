/** A wrapping row of static metadata tags: a small accent dot + an
 *  understated label. These are labels, not controls — deliberately no
 *  background, border, pill shape, hover, cursor, or focus treatment.
 *  Pass `className` to adjust the row layout (e.g. `justify-center`). */
export default function TagRow({
  tags,
  className = '',
}: {
  tags: string[]
  className?: string
}) {
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-2 ${className}`}>
      {tags.map((t) => (
        <span key={t} className="flex items-center gap-1.5 text-xs text-white/60">
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-purple-pale/70" />
          {t}
        </span>
      ))}
    </div>
  )
}
