import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import { focusRing } from '../components/Button'
import { H1, H2, H3, H5, Body1, Body2 } from '../components/Typography'
import Seo from '../components/Seo'
import fineLineImg from '../assets/listing-fine-line.webp'
import fineLineFeatureImg from '../assets/fineline/hero-prototype.webp'
import yslImg from '../assets/listing-ysl.webp'
import angryBirdsImg from '../assets/listing-angry-birds.webp'

interface Project {
  slug: string
  title: string
  description: string
  image: string
  /** Larger, cleaner crop used only when this project is the featured card. */
  featureImage?: string
}

const uxUiProjects: Project[] = [
  {
    slug: 'fine-line-production',
    title: 'Fine Line Production',
    description:
      "Refonte complète du site web d'une société de production libanaise, de la recherche UX au design et au prototypage sur Webflow.",
    image: fineLineImg,
    featureImage: fineLineFeatureImg,
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

function ArrowRight() {
  return (
    <svg
      className="size-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-purple-pale/40 ${focusRing}`}
    >
      <div className="h-[220px] w-full overflow-hidden rounded-2xl">
        <img loading="lazy" decoding="async"
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
  )
}

/* Featured project = the page's focal point. Borrows the "active card"
   language from the Home carousel (purple-pale ring, glass-dark fill,
   glass-card + lift shadow) at a larger scale: framed screenshot on the
   left (inset + rounded like the grid cards), title and description on
   the right. Stacks on mobile. */
function FeaturedCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      style={
        {
          '--lift-y': '8px',
          '--lift-blur': '34px',
          '--lift-opacity': '45%',
        } as CSSProperties
      }
      className={`group flex w-full flex-col gap-4 rounded-3xl border-[1.5px] border-purple-pale/50 bg-purple-dark/35 p-4 backdrop-blur-[20px] shadow-glass-card shadow-lift transition-all duration-300 hover:-translate-y-1 hover:border-purple-pale/80 lg:flex-row lg:items-center lg:gap-6 lg:p-5 ${focusRing}`}
    >
      {/* Full Webflow screenshot (nav, hero, tagline), nothing cropped.
          Inset from the card edge with its own rounding, matching the
          grid cards' framed-image treatment. */}
      <div className="relative aspect-[1881/1058] w-full shrink-0 overflow-hidden rounded-2xl bg-black-ink lg:w-[56%]">
        <img loading="lazy" decoding="async"
          src={project.featureImage ?? project.image}
          alt={project.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-3 p-4 lg:p-4">
        <H5 className="!text-purple-pale/70">Étude de cas complète</H5>
        <H3 className="!text-3xl md:!text-4xl">{project.title}</H3>
        <Body1 className="font-light">{project.description}</Body1>
        <span className="mt-1 inline-flex items-center gap-2 font-medium text-white transition-transform duration-300 group-hover:translate-x-1">
          Voir le projet
          <ArrowRight />
        </span>
      </div>
    </Link>
  )
}

function ProjectCategorySection({
  title,
  description,
  projects,
  featuredSlug,
}: {
  /* Category header is optional: while there's only one category it's just
     redundant scaffolding under the page's own H1, so ProjectsPage omits
     it. Pass both again once a second category ships. */
  title?: string
  description?: string
  projects: Project[]
  featuredSlug?: string
}) {
  const featured = featuredSlug
    ? projects.find((p) => p.slug === featuredSlug)
    : undefined
  const rest = featured
    ? projects.filter((p) => p.slug !== featuredSlug)
    : projects

  return (
    <section className="flex w-full flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      {title && (
        <div className="flex max-w-[600px] flex-col items-center gap-4 text-center">
          <H2>{title}</H2>
          {description && <Body1 className="font-light">{description}</Body1>}
        </div>
      )}

      {featured && <FeaturedCard project={featured} />}

      {rest.length > 0 && (
        <div
          className={`grid w-full grid-cols-1 gap-8 sm:grid-cols-2 ${
            rest.length > 2 ? 'lg:grid-cols-3' : ''
          }`}
        >
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default function ProjectsPage() {
  return (
    <div className="relative isolate">
      <Seo
        title="Projets"
        description="Trois études de cas UX/UI menées de la recherche au prototype : Fine Line Production, YSL Sélection Privée et Angry Birds."
        path="/projects"
      />
      <div className="flex flex-col items-center gap-6 px-8 pt-8 pb-0 text-center md:pt-16 md:px-[var(--nav-edge-w)]">
        <div className="flex max-w-[600px] flex-col items-center gap-4">
          <H1>Projets</H1>
          <Body1 className="font-light">
            Trois projets UX/UI menés de la recherche au prototype.
          </Body1>
        </div>
      </div>

      <ProjectCategorySection
        projects={uxUiProjects}
        featuredSlug="fine-line-production"
      />

      <Contact />
    </div>
  )
}
