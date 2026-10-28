import Seo from '../components/Seo'
import Contact from '../components/Contact'
import CategoryTabs from '../components/CategoryTabs'
import ProjectCard from '../components/ProjectCard'
import { H1 } from '../components/Typography'
import Showreel from '../components/communication/Showreel'
import { Placeholder } from '../components/communication/media'
import { projetsCom } from '../data/communication'

/* Same structure as ProjectsPage (title, tabs, grid), with the showreel
   as the grid's first card. Every piece of copy and media lives in
   src/data/communication.ts: edit that file, not this one. */

export default function CommunicationPage() {
  return (
    <div className="relative isolate">
      <Seo
        title="Projets Communication"
        description="Séries, interviews, reels et stories réalisés pour les réseaux sociaux de HEIP et Sup de Pub pendant mon alternance chez OMNES Education."
        path="/communication"
      />
      <div className="flex flex-col items-center gap-6 px-8 pt-8 pb-0 text-center md:pt-16 md:px-[var(--nav-edge-w)]">
        <div className="flex max-w-[600px] flex-col items-center gap-4">
          <H1>Projets</H1>
        </div>
        <CategoryTabs />
      </div>

      <section className="flex w-full flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Showreel />
          {projetsCom.map((p) => (
            <ProjectCard
              key={p.slug}
              to={`/communication/${p.slug}`}
              title={p.titre}
              meta={p.ecole}
              description={p.resume}
              image={p.couverture.poster}
              imagePlaceholder={<Placeholder label={p.titre} format={p.couverture.format} />}
            />
          ))}
        </div>
      </section>

      <Contact />
    </div>
  )
}
