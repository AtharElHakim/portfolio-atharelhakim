import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import fineLineImg from '../assets/listing-fine-line.png'
import yslImg from '../assets/listing-ysl.png'
import angryBirdsImg from '../assets/listing-angry-birds.jpg'

const projects = [
  {
    slug: 'fine-line-production',
    title: 'Fine Line Production',
    description:
      "Refonte complète du site web d'une société de production libanaise, de la recherche UX au design et au prototypage sur Webflow.",
    tags: ['UX/UI Design', 'Web Design'],
    image: fineLineImg,
  },
  {
    slug: 'loreal',
    title: 'YSL Sélection Privée',
    description:
      "Projet réalisé dans le cadre du concours L'Oréal Brandstorm 2026, visant à concevoir une expérience phygitale autour du parfum de luxe.",
    tags: ['UX Strategy', 'Product Design', "L'Oréal Brandstorm"],
    image: yslImg,
  },
  {
    slug: 'angry-birds',
    title: 'Research Ops · Angry Birds',
    description:
      'Étude qualitative conçue dans le cadre d\'un exercice de Research Ops pour analyser les usages mobiles des enfants de 8 à 12 ans.',
    tags: ['UX Research', 'Étude Qualitative', 'Sup de Pub'],
    image: angryBirdsImg,
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-[#fdfbf6]">
      <div className="flex flex-col items-center gap-6 p-8 text-center md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full max-w-[720px] flex-col items-center gap-4 border border-[#070707] bg-[#fdfbf6] px-8 py-10 shadow-[8px_8px_0px_#242424] md:px-14 md:py-14">
          <h1 className="w-full font-syne text-5xl leading-tight text-[#070707] md:text-[72px] md:leading-[72px]">
            Projets
          </h1>
          <p className="w-full font-syne text-2xl leading-tight text-[rgba(7,7,7,0.88)] md:text-[30px] md:leading-9">
            Voici une sélection de mes projets UX/UI. Bonne exploration !
          </p>
        </div>
      </div>

      <section className="flex flex-col items-start gap-12 border-b border-[#070707] p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <div className="flex flex-col items-start gap-4 md:w-[513px]">
          <h2 className="font-syne text-4xl leading-tight text-[#070707] md:text-5xl md:leading-[48px]">
            UX/UI Design
          </h2>
          <p className="text-lg leading-7 text-[rgba(0,0,0,0.7)] md:text-xl">
            Mes projets d'interface utilisateur et d'expérience digitale
          </p>
        </div>
        <div className="flex w-full flex-wrap items-start gap-12">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex min-w-[280px] flex-1 flex-col items-center border border-[#070707] bg-[#fdfbf6]"
            >
              <div className="h-[290px] w-full border border-[rgba(0,0,0,0.7)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-6 p-4">
                <div className="flex w-full flex-col items-start gap-2">
                  <div className="flex w-full flex-col items-start gap-4 text-left">
                    <h3 className="w-full font-syne text-2xl leading-8 text-[#070707]">
                      {project.title}
                    </h3>
                    <p className="w-full text-base leading-5 text-[rgba(7,7,7,0.88)]">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex w-full flex-wrap items-center gap-4 opacity-90">
                    {project.tags.map((tag) => (
                      <p
                        key={tag}
                        className="whitespace-nowrap text-base leading-5 text-[#a3a3a3]"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="flex cursor-pointer items-center justify-center border border-[#070707] bg-[#fdfbf6] px-4 py-2"
                >
                  <span className="whitespace-nowrap text-center text-xl font-medium leading-7 text-[#070707]">
                    En savoir plus
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  )
}
