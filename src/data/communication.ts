/**
 * Communication: single source of truth for the /communication list page
 * and the 8 project pages (/communication/<slug>).
 *
 * TO FILL IN A PROJECT TEXT: set the matching string in `textes` below.
 * Any text left empty ('') renders as a dashed "[À rédiger]" box, so the
 * page layout stays intact while you write.
 *
 * TO REPLACE A MEDIA PLACEHOLDER: fill in `src` (video file) or `poster`
 * (image). Any media left empty renders as a grey rounded block showing its
 * title and format.
 *
 * Files: videos go in /public/communication/videos/, thumbnails in
 * /public/communication/posters/ (WebP, 540 px wide, 9:16), referenced as
 * '/communication/videos/mon-fichier.mp4'.
 *
 * Rules applied by the components:
 * - A video with a link (its own `url`, or a series' episodes) never plays
 *   on the page: its thumbnail and title open the post in a new tab.
 * - A video with no link plays on the page (muted preview on hover, click
 *   opens it full size with sound).
 * - The Instagram / TikTok logo is read from the URL itself.
 * - A series links its cover to the `couverture` episode (or the first
 *   episode if no cover is set).
 *
 * French typography: a non-breaking space sits before every « : », « ? »
 * and « ! » so the punctuation never wraps onto its own line.
 */

export type Ratio = '9:16' | '16:9' | '4:5' | '1:1'

export interface Episode {
  titre: string
  url: string
}

export interface Video {
  id: string
  titre: string
  ecole: string
  plateforme: string
  format: Ratio
  roles: string[]
  resultat: string
  /** Video file, only used when there is no link (the video plays on the page). */
  src: string
  /** Thumbnail image. */
  poster: string
  url: string
  /** Series only: the episode list shown under the card. */
  episodes?: Episode[]
  /** Series only: title of the episode used as the cover video. */
  couverture?: string
}

export interface Media {
  label: string
  format: Ratio
  src: string
}

/** Shorthand so the lists below stay readable: media fields start empty. */
const v = (d: Omit<Video, 'src' | 'poster' | 'url'> & Partial<Pick<Video, 'src' | 'poster' | 'url'>>): Video => ({
  src: '',
  poster: '',
  url: '',
  ...d,
})

/* ------------------------------------------------------------------ */
/* Showreel (top of /communication)                                    */
/* ------------------------------------------------------------------ */

export const showreel = {
  titre: 'Showreel 2026',
  duree: '20 s',
  /** 16:9 version, shown on desktop. */
  srcDesktop: '',
  posterDesktop: '',
  /** 9:16 version, shown on mobile. */
  srcMobile: '',
  posterMobile: '',
}

/* ------------------------------------------------------------------ */
/* Videos, referenced by id from the projects below                    */
/* ------------------------------------------------------------------ */

const videoList: Video[] = [
  /* --- Tips tournage & montage --- */
  v({
    id: 'tips-tournage-montage',
    titre: 'Tips tournage & montage',
    ecole: 'Sup de Pub',
    plateforme: 'TikTok',
    format: '9:16',
    roles: ['Concept', 'Script', 'Face caméra', 'Réalisation', 'Montage'],
    resultat: "Chaque épisode reprend l'accroche du précédent",
    couverture: "Le problème c'est pas ta caméra, c'est tes plans",
    episodes: [
      { titre: '3 choses à éviter en tournage', url: 'https://vt.tiktok.com/ZSg4HYjqY/' },
      { titre: "Le problème c'est pas ta caméra, c'est tes plans", url: 'https://vt.tiktok.com/ZSg4upyC9/' },
      { titre: "Le problème c'est pas tes plans, c'est ton point de vue", url: 'https://vt.tiktok.com/ZSg4HaVFE/' },
      { titre: 'Raccourcis Premiere Pro, partie 1', url: 'https://vt.tiktok.com/ZSg4HxSrL/' },
      { titre: 'Raccourcis Premiere Pro, partie 2', url: 'https://vt.tiktok.com/ZSg4HUVsH/' },
    ],
  }),

  /* --- Campagnes de rentrée --- */
  v({
    id: 'on-t-attend-a-heip',
    src: '/communication/videos/on-t-attend-a-heip.mp4',
    poster: '/communication/posters/on-t-attend-a-heip.webp',
    titre: "On t'attend à HEIP",
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Concept', 'Direction artistique', 'Réalisation', 'Montage'],
    resultat: 'Déclinée en 9:16 et 1:1',
  }),
  v({
    id: 'essuie-camera',
    poster: '/communication/posters/essuie-camera.webp',
    titre: 'EssuieCaméra',
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Concept', 'Réalisation', 'Montage'],
    resultat: 'Rentrée B1',
    url: 'https://www.instagram.com/reel/Dd1cVpMuiNd/',
  }),
  v({
    id: 'back-to-school-kit',
    poster: '/communication/posters/back-to-school-kit.webp',
    titre: 'Back To School Kit',
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Concept', 'Réalisation', 'Montage', 'Rédaction'],
    resultat: 'Rentrée 2026',
    url: 'https://www.instagram.com/reel/Dc_AjWkDnM3/',
  }),
  v({
    id: 'plot-twist-fevrier',
    src: '/communication/videos/plot-twist-fevrier.mp4',
    poster: '/communication/posters/plot-twist-fevrier.webp',
    titre: 'Plot twist : rentrée en février',
    ecole: 'Sup de Pub',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Réalisation', 'Montage'],
    resultat: 'Déclinée en 9:16 et 1:1',
  }),
  v({
    id: 'appel-canada',
    src: '/communication/videos/appel-canada.mp4',
    poster: '/communication/posters/appel-canada.webp',
    titre: 'Un appel depuis le Canada',
    ecole: 'Sup de Pub',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Réalisation', 'Montage'],
    resultat: 'Déclinée en 9:16 et 1:1',
  }),

  /* --- Projection des courts métrages --- */
  v({
    id: 'micro-trottoir-projection',
    poster: '/communication/posters/micro-trottoir-projection.webp',
    titre: 'Devine le film de ton proche',
    ecole: 'Sup de Pub',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Concept', 'Interview', 'Face caméra'],
    resultat: 'Les familles devinent le titre du court métrage',
    url: 'https://www.instagram.com/reel/DdmHYhOjufP/',
  }),

  /* --- Fabrice Rizzoli --- */
  v({
    id: 'fabrice-rizzoli',
    poster: '/communication/posters/fabrice-rizzoli.webp',
    titre: 'Fabrice Rizzoli, géopolitique des criminalités',
    ecole: 'HEIP',
    plateforme: 'Instagram & TikTok',
    format: '9:16',
    roles: ['Réalisation', 'Montage', 'Sous-titrage'],
    resultat: 'Le crime organisé expliqué en moins de 2 minutes',
    couverture: 'Le blanchiment',
    episodes: [
      { titre: 'Le blanchiment', url: 'https://www.instagram.com/reel/DaIctxLgY0y/' },
      { titre: 'La confiscation des avoirs', url: 'https://www.instagram.com/reel/DaaQhrpiGpk/' },
      { titre: 'La corruption, plus rentable que la violence', url: 'https://www.instagram.com/reel/DasSJteEaVJ/' },
      { titre: 'Les ports, un enjeu de pouvoir', url: 'https://vt.tiktok.com/ZSg4GjRQT/' },
      { titre: 'Les repentis', url: 'https://www.instagram.com/reel/DbQcHS5DXY3/' },
      { titre: 'Le rôle des citoyens', url: 'https://www.instagram.com/reel/Dbh7X7ojsgt/' },
      { titre: 'Le crime organisé dans les séries', url: 'https://www.instagram.com/reel/Db0YVr9gpon/' },
    ],
  }),

  /* --- MSc ERCI --- */
  v({
    id: 'msc-erci-programme',
    src: '/communication/videos/msc-erci-programme.mp4',
    poster: '/communication/posters/msc-erci-programme.webp',
    titre: 'MSc ERCI : présentation du programme',
    ecole: 'HEIP',
    plateforme: 'Site web',
    format: '16:9',
    roles: ['Réalisation', 'Montage'],
    resultat: '7 vidéos pour le site + reels',
  }),
  v({
    id: 'msc-erci-apres-diplome',
    poster: '/communication/posters/msc-erci-apres-diplome.webp',
    titre: 'MSc ERCI : et après le diplôme ?',
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Réalisation', 'Montage'],
    resultat: 'Les métiers de chaque spécialisation',
    episodes: [
      { titre: 'Affaires internationales & Diplomatie économique', url: 'https://www.instagram.com/reel/DbnnPFEjsb2/' },
      { titre: 'Sécurité internationale & Défense', url: 'https://www.instagram.com/reel/Db5h4tPisW2/' },
    ],
  }),

  /* --- HEIP London --- */
  v({
    id: 'heip-london',
    poster: '/communication/posters/heip-london.webp',
    titre: 'HEIP London : le campus de Londres',
    ecole: 'HEIP London',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Montage', 'Sous-titrage'],
    resultat: 'Les profs et étudiants du campus de Londres',
    episodes: [
      { titre: 'Épisode 1', url: 'https://www.instagram.com/reel/DZM5w5ujVOl/' },
      { titre: 'Épisode 2', url: 'https://www.instagram.com/reel/DZCmlm7EziN/' },
      { titre: 'Épisode 3', url: 'https://www.instagram.com/reel/DYjmNWzCmC7/' },
      { titre: 'Épisode 4', url: 'https://www.instagram.com/reel/DYWuQ7-EU_G/' },
      { titre: 'Épisode 5', url: 'https://www.instagram.com/reel/DVyFoW7jcJl/' },
      { titre: 'Épisode 6', url: 'https://www.instagram.com/reel/DVLduMmkmia/' },
    ],
  }),

  /* --- Formats étudiants --- */
  v({
    id: 'vrai-ou-faux-miap',
    poster: '/communication/posters/vrai-ou-faux-miap.webp',
    titre: 'Vrai ou Faux : MSc MIAP',
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Montage', "Concept de l'intro"],
    resultat: "J'ai imaginé l'accroche d'ouverture",
    episodes: [
      { titre: 'Épisode 1', url: 'https://www.instagram.com/reel/DdEDQDajL0t/' },
      { titre: 'Épisode 2', url: 'https://www.instagram.com/reel/DdWLrLhjBhW/' },
    ],
  }),
  v({
    id: 'fast-and-curious',
    poster: '/communication/posters/fast-and-curious.webp',
    titre: 'Fast & Curious',
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Montage'],
    resultat: 'Un format rapide en questions "ceci ou cela"',
    episodes: [
      { titre: 'Épisode 1', url: 'https://www.instagram.com/reel/DcgC_4ijNhj/' },
      { titre: 'Épisode 2', url: 'https://www.instagram.com/reel/Dc0papdCllU/' },
    ],
  }),
  v({
    id: 'alternance-miap',
    src: '/communication/videos/alternance-miap.mp4',
    poster: '/communication/posters/alternance-miap.webp',
    titre: "L'alternance en MSc MIAP",
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Montage', 'Sous-titrage'],
    resultat: 'Les étudiants présentent leur alternance',
  }),
  v({
    id: 'ou-fais-tu-ton-alternance',
    src: '/communication/videos/ou-fais-tu-ton-alternance.mp4',
    poster: '/communication/posters/ou-fais-tu-ton-alternance.webp',
    titre: 'Où fais-tu ton alternance ?',
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Montage'],
    resultat: 'Micro-trottoir avec les étudiants de M2',
  }),

  /* --- Portraits & société --- */
  v({
    id: 'portrait-tom-carl',
    poster: '/communication/posters/portrait-tom-carl.webp',
    titre: 'Portrait étudiant : Tom Carl',
    ecole: 'HEIP Lyon',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Montage'],
    resultat: '18 ans, élu municipal',
    url: 'https://www.instagram.com/reel/DYcFhmniMc7/',
  }),
  v({
    id: 'portrait-alumni',
    poster: '/communication/posters/portrait-alumni.webp',
    titre: 'Portrait alumni',
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Réalisation'],
    resultat: 'Diplômée du MSc ERCI',
    url: 'https://www.instagram.com/reel/DW6BnE_kQ6U/',
  }),
  v({
    id: 'barrio-14',
    poster: '/communication/posters/barrio-14.webp',
    titre: 'Barrio 14',
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Réalisation', 'Montage'],
    resultat: "Portrait d'une association de quartier",
    url: 'https://www.instagram.com/reel/DVs4uHAji-Y/',
  }),
  v({
    id: 'fifa-mbappe',
    poster: '/communication/posters/fifa-mbappe.webp',
    titre: 'FIFA et politique : le cas Mbappé',
    ecole: 'HEIP',
    plateforme: 'Instagram',
    format: '9:16',
    roles: ['Réalisation', 'Montage'],
    resultat: 'Format podcast',
    url: 'https://www.instagram.com/reel/DayBZytFVGL/',
  }),
]

const videoById = (id: string): Video => {
  const found = videoList.find((x) => x.id === id)
  if (!found) throw new Error(`communication.ts: unknown video id "${id}"`)
  return found
}

/* ------------------------------------------------------------------ */
/* Story immersive (Projection des courts métrages)                    */
/* ------------------------------------------------------------------ */

export interface StoryScreen {
  label: string
  /** 'image' advances after `dureeImage` seconds, 'video' after its real length. */
  type: 'image' | 'video'
  src: string
}

export const story = {
  titre: 'Story immersive',
  roles: ['Concept', 'Face caméra', 'Photo & vidéo'],
  url: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTA5OTE3MzY4NDczNTcx?story_media_id=3991247202622198342_3929723136',
  /** Seconds each image screen stays up. */
  dureeImage: 5,
  ecrans: [1, 2, 3, 4, 5, 6].map(
    (n): StoryScreen => ({ label: `Écran ${n}`, type: 'image', src: '' }),
  ),
}

/* ------------------------------------------------------------------ */
/* The 8 projects                                                      */
/* ------------------------------------------------------------------ */

export interface ProjetTextes {
  /** 2-3 sentences: what the project is. */
  overview: string
  /** The school, the audience, the goal. */
  contexte: string
  /** What I did / what the team did (the role pills are shown above it). */
  monRole: string
  /** The idea, the hook, the format, why this choice. */
  concept: string
  /** Optional: shooting photos, script, storyboard. */
  coulisses: string
  /** Qualitative result, no numbers. */
  resultat: string
}

export interface ProjetCom {
  slug: string
  titre: string
  ecole: string
  plateformes: string
  periode: string
  format: string
  /** One sentence: list card description + hero subtitle. */
  resume: string
  /** Main role pills on the list card. */
  rolesCle: string[]
  /** Every role on the project, shown in the hero. */
  roles: string[]
  /** Video used as the hero cover and the list-card thumbnail. */
  couverture: Video
  /** "Contenus" grid (vertical videos). */
  videos: Video[]
  /** Horizontal videos, full-width rows above the grid. */
  videosLarges?: Video[]
  /** Shows the story player next to the grid. */
  avecStory?: boolean
  textes: ProjetTextes
}

/** Every text starts empty: the page shows "[À rédiger]" until it's filled in. */
const aRediger = (): ProjetTextes => ({
  overview: '',
  contexte: '',
  monRole: '',
  concept: '',
  coulisses: '',
  resultat: '',
})

/** Period of each project: not specified yet. */
const PERIODE_A_PRECISER = ''

export const projetsCom: ProjetCom[] = [
  {
    slug: 'tips-tournage-montage',
    titre: 'Tips tournage & montage',
    ecole: 'Sup de Pub',
    plateformes: 'TikTok',
    periode: PERIODE_A_PRECISER,
    format: '9:16',
    resume: 'Une série TikTok de conseils vidéo, écrite, tournée et présentée face caméra.',
    rolesCle: ['Concept', 'Face caméra', 'Réalisation', 'Montage'],
    roles: ['Concept', 'Script', 'Face caméra', 'Réalisation', 'Montage'],
    couverture: videoById('tips-tournage-montage'),
    videos: [videoById('tips-tournage-montage')],
    textes: aRediger(),
  },
  {
    slug: 'campagnes-rentree',
    titre: 'Campagnes de rentrée',
    ecole: 'HEIP · Sup de Pub',
    plateformes: 'Instagram',
    periode: PERIODE_A_PRECISER,
    format: '9:16 · 1:1',
    resume: 'Des pubs courtes et des vidéos de rentrée pour donner envie de rejoindre les écoles.',
    rolesCle: ['Concept', 'Direction artistique', 'Réalisation', 'Montage'],
    roles: ['Concept', 'Direction artistique', 'Réalisation', 'Montage', 'Rédaction'],
    couverture: videoById('on-t-attend-a-heip'),
    videos: ['on-t-attend-a-heip', 'essuie-camera', 'back-to-school-kit', 'plot-twist-fevrier', 'appel-canada'].map(videoById),
    textes: aRediger(),
  },
  {
    slug: 'projection-courts-metrages',
    titre: 'Projection des courts métrages',
    ecole: 'Sup de Pub',
    plateformes: 'Instagram',
    periode: PERIODE_A_PRECISER,
    format: 'Story · 9:16',
    resume: 'Un événement couvert en deux formats : une story immersive et un micro-trottoir.',
    rolesCle: ['Concept', 'Face caméra', 'Interview'],
    roles: ['Concept', 'Face caméra', 'Interview', 'Photo & vidéo'],
    couverture: videoById('micro-trottoir-projection'),
    videos: [videoById('micro-trottoir-projection')],
    avecStory: true,
    textes: aRediger(),
  },
  {
    slug: 'fabrice-rizzoli',
    titre: 'Fabrice Rizzoli',
    ecole: 'HEIP',
    plateformes: 'Instagram & TikTok',
    periode: PERIODE_A_PRECISER,
    format: '9:16',
    resume: 'Une série de 7 interviews pour expliquer le crime organisé en moins de 2 minutes.',
    rolesCle: ['Réalisation', 'Montage', 'Sous-titrage'],
    roles: ['Réalisation', 'Montage', 'Sous-titrage'],
    couverture: videoById('fabrice-rizzoli'),
    videos: [videoById('fabrice-rizzoli')],
    textes: aRediger(),
  },
  {
    slug: 'msc-erci',
    titre: 'MSc ERCI',
    ecole: 'HEIP',
    plateformes: 'Site web & Instagram',
    periode: PERIODE_A_PRECISER,
    format: '16:9 · 9:16',
    resume: 'Les vidéos du programme : version site web en 16:9 et reels sur les métiers.',
    rolesCle: ['Réalisation', 'Montage'],
    roles: ['Réalisation', 'Montage'],
    couverture: videoById('msc-erci-programme'),
    videosLarges: [videoById('msc-erci-programme')],
    videos: [videoById('msc-erci-apres-diplome')],
    textes: aRediger(),
  },
  {
    slug: 'heip-london',
    titre: 'HEIP London',
    ecole: 'HEIP',
    plateformes: 'Instagram',
    periode: PERIODE_A_PRECISER,
    format: '9:16',
    resume: "Une série d'interviews pour faire découvrir le campus de Londres.",
    rolesCle: ['Montage', 'Sous-titrage'],
    roles: ['Montage', 'Sous-titrage'],
    couverture: videoById('heip-london'),
    videos: [videoById('heip-london')],
    textes: aRediger(),
  },
  {
    slug: 'formats-etudiants',
    titre: 'Formats étudiants',
    ecole: 'HEIP',
    plateformes: 'Instagram',
    periode: PERIODE_A_PRECISER,
    format: '9:16',
    resume: 'Des formats récurrents avec les étudiants : Vrai ou Faux, Fast & Curious, alternance.',
    rolesCle: ['Montage', "Concept de l'intro"],
    roles: ['Montage', "Concept de l'intro", 'Sous-titrage'],
    couverture: videoById('vrai-ou-faux-miap'),
    videos: ['vrai-ou-faux-miap', 'fast-and-curious', 'alternance-miap', 'ou-fais-tu-ton-alternance'].map(videoById),
    textes: aRediger(),
  },
  {
    slug: 'portraits-societe',
    titre: 'Portraits & société',
    ecole: 'HEIP',
    plateformes: 'Instagram',
    periode: PERIODE_A_PRECISER,
    format: '9:16',
    resume: "Des portraits d'étudiants, d'alumni et d'associations engagés.",
    rolesCle: ['Réalisation', 'Montage'],
    roles: ['Réalisation', 'Montage'],
    couverture: videoById('portrait-tom-carl'),
    videos: ['portrait-tom-carl', 'portrait-alumni', 'barrio-14', 'fifa-mbappe'].map(videoById),
    textes: aRediger(),
  },
]

/* ------------------------------------------------------------------ */
/* Homepage teaser ("Communication & contenus" block)                  */
/* ------------------------------------------------------------------ */

export const accueil = {
  titre: 'Communication & contenus',
  texte: 'Reels, interviews et séries réalisés pour HEIP et Sup de Pub.',
  /** The 3 projects shown on the homepage, by slug. */
  projets: ['tips-tournage-montage', 'campagnes-rentree', 'fabrice-rizzoli']
    .map((slug) => projetsCom.find((p) => p.slug === slug))
    .filter((p): p is ProjetCom => Boolean(p)),
}
