import Seo from '../components/Seo'
import Contact from '../components/Contact'
import CategoryTabs from '../components/CategoryTabs'
import ProjectCard from '../components/ProjectCard'
import { H1 } from '../components/Typography'
import { fr } from '../components/communication/media'
import { cartesCom } from '../data/communication'

/* Same structure as ProjectsPage (title, tabs, grid). Every piece of copy
   and media lives in src/data/communication.ts: edit that file, not this one. */

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
        {/* Same column widths as the UX/UI grid (3 per row on desktop), but
            centered so a lone card doesn't sit on the left. */}
        <div className="flex w-full flex-wrap justify-center gap-8 [&>*]:w-full sm:[&>*]:w-[calc(50%-1rem)] lg:[&>*]:w-[calc((100%-4rem)/3)]">
          {cartesCom.map((c) => (
            <ProjectCard
              key={c.slug}
              to={`/communication/${c.slug}`}
              title={c.titre}
              meta={c.sousLigne}
              description={fr(c.texte)}
              image={c.image}
            />
          ))}
        </div>
      </section>

      <Contact />
    </div>
  )
}
