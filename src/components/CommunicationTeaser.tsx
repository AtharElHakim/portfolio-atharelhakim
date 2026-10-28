import { Link } from 'react-router-dom'
import { H2, Body1, H6, Micro1 } from './Typography'
import Button, { focusRing } from './Button'
import { Placeholder, PlayGlyph } from './communication/media'
import { cardFrame } from './communication/VideoCard'
import { accueil } from '../data/communication'

/** Homepage block: 3 project thumbnails leading to their /communication pages. */
export default function CommunicationTeaser() {
  return (
    <section className="relative flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      <div className="flex flex-col items-center gap-4 text-center">
        <H2>{accueil.titre}</H2>
        <Body1 className="font-light">{accueil.texte}</Body1>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-4 lg:gap-6">
        {accueil.projets.map((p) => (
          <Link
            key={p.slug}
            to={`/communication/${p.slug}`}
            className={`group flex w-[calc(50%-0.5rem)] flex-col gap-3 p-2.5 transition-transform duration-300 hover:-translate-y-1 sm:p-3 md:w-[260px] ${cardFrame} ${focusRing}`}
          >
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black-soft">
              {p.couverture.poster ? (
                <img loading="lazy" decoding="async" src={p.couverture.poster} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <Placeholder label={p.titre} format="9:16" className="absolute inset-0" />
              )}
              <span className="pointer-events-none absolute bottom-3 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-sm">
                <PlayGlyph />
              </span>
            </div>
            <div className="flex flex-col gap-1 px-1 pb-1">
              <H6>{p.titre}</H6>
              <Micro1>
                {p.ecole} · {p.plateformes}
              </Micro1>
            </div>
          </Link>
        ))}
      </div>
      <Button to="/communication">Voir mes contenus</Button>
    </section>
  )
}
