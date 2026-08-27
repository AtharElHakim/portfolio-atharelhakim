import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import { H1, H2, H3, Body1, Body2 } from '../components/Typography'
import fineLineImg from '../assets/listing-fine-line.png'
import yslImg from '../assets/listing-ysl.png'
import angryBirdsImg from '../assets/listing-angry-birds.jpg'

interface Project {
  slug: string
  title: string
  description: string
  image: string
}

const uxUiProjects: Project[] = [
  {
    slug: 'fine-line-production',
    title: 'Fine Line Production',
    description:
      "Refonte complète du site web d'une société de production libanaise, de la recherche UX au design et au prototypage sur Webflow.",
    image: fineLineImg,
  },
  {
    slug: 'loreal',
    title: 'YSL Sélection Privée',
    description:
      "Projet réalisé dans le cadre du concours L'Oréal Brandstorm 2026, visant à concevoir une expérience phygitale autour du parfum de luxe.",
    image: yslImg,
  },
  {
    slug: 'angry-birds',
    title: 'Research Ops · Angry Birds',
    description:
      "Étude qualitative conçue dans le cadre d'un exercice de Research Ops pour analyser les usages mobiles des enfants de 8 à 12 ans.",
    image: angryBirdsImg,
  },
]

function ProjectCategorySection({
  title,
  description,
  projects,
}: {
  /* Category header is optional: while there's only one category it's just
     redundant scaffolding under the page's own H1, so ProjectsPage omits
     it. Pass both again once a second category ships. */
  title?: string
  description?: string
  projects: Project[]
}) {
  return (
    <section className="flex w-full flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      {title && (
        <div className="flex max-w-[600px] flex-col items-center gap-4 text-center">
          <H2>{title}</H2>
          {description && <Body1 className="font-light">{description}</Body1>}
        </div>
      )}

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-purple-pale/40 hover:bg-white/5"
          >
            <div className="h-[220px] w-full overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-start gap-2 px-3 pb-3">
              <H3>{project.title}</H3>
              <Body2>{project.description}</Body2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  return (
    <div className="relative isolate">

      <div className="flex flex-col items-center gap-6 px-8 pt-8 pb-0 text-center md:pt-16 md:px-[var(--nav-edge-w)]">
        <div className="flex max-w-[600px] flex-col items-center gap-4">
          <H1>Projets</H1>
          <Body1 className="font-light">
            Trois projets UX/UI menés de la recherche au prototype.
          </Body1>
        </div>
      </div>

      <ProjectCategorySection projects={uxUiProjects} />

      <Contact />
    </div>
  )
}
