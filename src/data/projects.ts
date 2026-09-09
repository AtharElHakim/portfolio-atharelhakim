import fineLineListing from '../assets/listing-fine-line.webp'
import fineLineFeature from '../assets/fineline/hero-prototype.webp'
import fineLineHome from '../assets/fineline/ancien-site.webp'
import yslListing from '../assets/listing-ysl.webp'
import yslHome from '../assets/project-ysl.webp'
import angryBirdsListing from '../assets/listing-angry-birds.webp'
import angryBirdsHome from '../assets/project-research-ops.webp'
import spotifyHero from '../assets/spotify/hero.webp'
import parIciHero from '../assets/par-ici/hero.webp'

export interface Project {
  slug: string
  title: string
  /** Projects page — grid card + (when featured) the large focal card. */
  gridDescription: string
  gridImage: string
  /** Larger, cleaner crop for the featured card; falls back to `gridImage`. */
  featureImage?: string
  /** Homepage carousel — shorter copy, different crop. */
  homeDescription: string
  homeImage: string
  /** Whether this project appears in the homepage featured carousel. */
  featuredOnHome: boolean
}

/**
 * Single source of truth for project order and featured status. The Projects
 * page grid and the homepage carousel both derive from this array, so the
 * order here is the order everywhere. Homepage carousel = the entries with
 * `featuredOnHome: true`, in this same order.
 */
export const projects: Project[] = [
  {
    slug: 'par-ici',
    title: 'Par ici',
    featuredOnHome: true,
    gridDescription:
      "Compagnon mobile assurantiel et administratif pour les étrangers non-UE primo-arrivants en France, conçu lors du hackathon PULSE (CNP Assurances × Sinnasse).",
    gridImage: parIciHero,
    featureImage: parIciHero,
    homeDescription:
      'Compagnon mobile pour les étrangers non-UE primo-arrivants en France.',
    homeImage: parIciHero,
  },
  {
    slug: 'spotify',
    title: 'Spotify',
    featuredOnHome: true,
    gridDescription:
      "Redesign de l'expérience multi-service de Spotify, de l'audit de marque à une recommandation mettant en avant musique, podcasts et audiobooks.",
    gridImage: spotifyHero,
    homeDescription:
      "Redesign de l'expérience multi-service, de l'audit de marque à la recommandation.",
    homeImage: spotifyHero,
  },
  {
    slug: 'fine-line-production',
    title: 'Fine Line Production',
    featuredOnHome: true,
    gridDescription:
      "Refonte complète du site web d'une société de production libanaise, de la recherche UX au design et au prototypage sur Webflow.",
    gridImage: fineLineListing,
    featureImage: fineLineFeature,
    homeDescription:
      "Refonte UX/UI d'un site de production audiovisuelle, de l'audit au prototype.",
    homeImage: fineLineHome,
  },
  {
    slug: 'loreal',
    title: 'YSL Sélection Privée',
    featuredOnHome: false,
    gridDescription:
      "Projet réalisé dans le cadre du concours L'Oréal Brandstorm 2026, visant à concevoir une expérience phygitale autour du parfum de luxe.",
    gridImage: yslListing,
    homeDescription:
      'Concept phygital pour réinventer la découverte du parfum de luxe.',
    homeImage: yslHome,
  },
  {
    slug: 'angry-birds',
    title: 'Research Ops · Angry Birds',
    featuredOnHome: false,
    gridDescription:
      "Étude qualitative conçue dans le cadre d'un exercice de Research Ops pour analyser les usages mobiles des enfants de 8 à 12 ans.",
    gridImage: angryBirdsListing,
    homeDescription: 'Étude UX pour comprendre les usages mobiles des enfants.',
    homeImage: angryBirdsHome,
  },
]

/** Homepage carousel selection, in canonical order. */
export const homeProjects = projects.filter((p) => p.featuredOnHome)
