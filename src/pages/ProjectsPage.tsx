import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import { H1, H3, Body1, Body2 } from '../components/Typography'
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
  title: string
  description: string
  projects: Project[]
}) {
  return (
    <section className="flex w-full flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      <div className="flex max-w-[600px] flex-col items-center gap-4 text-center">
        <h2 className="font-syne text-4xl leading-tight text-white md:text-5xl md:leading-[1.1]">
          {title}
        </h2>
        <Body1 className="font-light">{description}</Body1>
      </div>

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
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[1100px] max-w-[140vw] -translate-x-1/2 -translate-y-1/3 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-purple-light) 0%, var(--color-purple) 45%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute left-[-10%] top-0 -z-10 h-[340px] w-[700px] max-w-[70vw] -translate-y-1/3 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-purple-light) 0%, var(--color-purple) 45%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-0 -z-10 h-[340px] w-[700px] max-w-[70vw] -translate-y-1/3 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-purple-light) 0%, var(--color-purple) 45%, transparent 75%)',
        }}
      />

      <div className="flex flex-col items-center gap-6 p-8 text-center md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex max-w-[720px] flex-col items-center gap-4">
          <H1>Projets</H1>
          <Body1 className="font-light">
            Voici une sélection de mes projets UX/UI. Bonne exploration !
          </Body1>
        </div>
      </div>

      <ProjectCategorySection
        title="UX/UI Design"
        description="Mes projets d'interface utilisateur et d'expérience digitale"
        projects={uxUiProjects}
      />

      <Contact />
    </div>
  )
}
