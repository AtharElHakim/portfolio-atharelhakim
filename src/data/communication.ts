/**
 * Communication: single source of truth for the /communication listing and
 * the /communication/alternance-omnes page.
 *
 * TO REPLACE A MEDIA PLACEHOLDER: fill in `src` (video file) or `poster`
 * (image). Any media left empty renders as a grey rounded block showing its
 * title and format.
 *
 * Files: videos go in /public/communication/videos/, thumbnails in
 * /public/communication/posters/ (WebP, 540 px wide), referenced as
 * '/communication/videos/mon-fichier.mp4'.
 *
 * Rules applied by the components:
 * - A video with a `url` never plays on the page: its thumbnail opens the
 *   post in a new tab (Instagram / TikTok logo read from the URL).
 * - A video with no `url` plays on the page (muted preview on hover, click
 *   opens it full size with sound).
 * - Each entry of a block's `rangees` is one row of thumbnails: keep 9:16 and
 *   16:9 videos in separate rows.
 * - A video's own `roles` are only shown when they differ from its block's.
 *
 * French typography: a non-breaking space sits before every « : », « ? »
 * and « ! » so the punctuation never wraps onto its own line.
 */

export type Ratio = '9:16' | '16:9' | '4:5' | '1:1'

export interface Video {
  id: string
  /** Short title shown under the thumbnail. */
  titre: string
  format: Ratio
  /** Video file, only used when there is no link (the video plays on the page). */
  src: string
  /** Thumbnail image. */
  poster: string
  url: string
  /** Only when this video's roles differ from its block's. */
  roles?: string[]
}

export interface Bloc {
  id: string
  titre: string
  /** École · plateforme. */
  sousLigne: string
  roles: string[]
  texte: string
  /** Rows of thumbnails, one format per row. */
  rangees: Video[][]
}

export interface SectionCom {
  id: string
  titre: string
  texte: string
  blocs: Bloc[]
}

const POSTERS = '/communication/posters/'
const VIDEOS = '/communication/videos/'

/** Online video: thumbnail + link. `poster: false` = cover not downloaded yet. */
const enLigne = (
  id: string,
  titre: string,
  url: string,
  extra: { roles?: string[]; poster?: false } = {},
): Video => ({
  id,
  titre,
  format: '9:16',
  src: '',
  poster: extra.poster === false ? '' : `${POSTERS}${id}.webp`,
  url,
  roles: extra.roles,
})

/** Local file: plays on the page. */
const fichier = (id: string, titre: string, extra: { roles?: string[]; format?: Ratio } = {}): Video => ({
  id,
  titre,
  format: extra.format ?? '9:16',
  src: `${VIDEOS}${id}.mp4`,
  poster: `${POSTERS}${id}.webp`,
  url: '',
  roles: extra.roles,
})

/* ------------------------------------------------------------------ */
/* /communication listing                                              */
/* ------------------------------------------------------------------ */

export interface CarteCom {
  slug: string
  titre: string
  sousLigne: string
  texte: string
  roles: string[]
  image: string
  /** Crop focus of the card thumbnail (CSS object-position). */
  imagePosition?: string
}

export const cartesCom: CarteCom[] = [
  {
    slug: 'alternance-omnes',
    titre: 'Alternance OMNES Education',
    sousLigne: 'Chargée de\u00a0Communication & de\u00a0Création de\u00a0Contenu\u00a0· HEIP\u00a0et\u00a0Sup\u00a0de\u00a0Pub',
    texte:
      'Création de contenu pour les réseaux sociaux de deux écoles : concept, tournage, montage et face caméra.',
    roles: ['Concept', 'Réalisation', 'Montage', 'Face caméra'],
    image: `${POSTERS}tips-3-points-de-vue.webp`,
    imagePosition: 'center 30%',
  },
]

/* ------------------------------------------------------------------ */
/* /communication/alternance-omnes                                     */
/* ------------------------------------------------------------------ */

export const alternance = {
  slug: 'alternance-omnes',
  titre: 'Alternance OMNES Education',
  /** `\n` = line break in the page headline. */
  sousTitre: 'Chargée de Communication\n& de Création de Contenu',
  infos: ['Déc. 2025 – Sept. 2026', 'Instagram, TikTok, YouTube Shorts, LinkedIn, site web'],
  intro:
    "En alternance au sein du groupe OMNES Education, j'ai créé des contenus pour les réseaux sociaux et le site web de deux écoles : HEIP, école de sciences politiques et de relations internationales, et Sup de Pub, école de communication et de création. Selon les projets, j'ai imaginé les formats, tourné, monté ou présenté face caméra. Les vidéos sont classées par rôle.",
  sections: [
    {
      id: 'conception-realisation-montage',
      titre: 'Conception + Réalisation + Montage',
      texte: "Les projets que j'ai portés de l'idée au montage.",
      blocs: [
        {
          id: 'tips-tournage-montage',
          titre: 'Tips tournage et montage',
          sousLigne: 'Sup de Pub · TikTok',
          roles: ['Face caméra', 'Concept', 'Script', 'Réalisation', 'Montage'],
          texte:
            "Une série TikTok de conseils de tournage et de montage pour Sup de Pub. J'ai choisi les sujets, écrit les textes, tourné, présenté et monté chaque épisode.",
          rangees: [
            [
              enLigne('tips-3-choses', '3 choses à éviter', 'https://vt.tiktok.com/ZSg4HYjqY/'),
              enLigne('tips-3-plans', '3 plans', 'https://vt.tiktok.com/ZSg4upyC9/'),
              enLigne('tips-3-points-de-vue', '3 points de vue', 'https://vt.tiktok.com/ZSg4HaVFE/'),
              enLigne('tips-raccourcis-1', 'Raccourcis Premiere Pro 1', 'https://vt.tiktok.com/ZSg4HxSrL/'),
              enLigne('tips-raccourcis-2', 'Raccourcis Premiere Pro 2', 'https://vt.tiktok.com/ZSg4HUVsH/'),
            ],
          ],
        },
        {
          id: 'campagnes-acquisition',
          titre: "Campagnes d'acquisition",
          sousLigne: 'HEIP · Sup de Pub · Instagram',
          roles: ['Concept', 'Direction artistique', 'Réalisation', 'Montage'],
          texte:
            "Des Meta ads courtes pour donner envie aux futurs étudiants de candidater à HEIP et à Sup de Pub.",
          rangees: [
            [
              fichier('rejoignez-nous', 'Rejoignez-nous'),
              fichier('quelle-ecole', 'Sciences Po, mais quelle école ?'),
              fichier('plot-twist-fevrier', 'Plot twist', { roles: ['Réalisation', 'Montage'] }),
              fichier('appel-canada', 'Un appel depuis le Canada', { roles: ["À l'écran", 'Montage'] }),
              fichier('on-t-attend-a-heip', "On t'attend à HEIP"),
              fichier('pourquoi-pas-heip', 'Pourquoi pas HEIP'),
            ],
          ],
        },
        {
          id: 'rentree-heip',
          titre: 'Rentrée HEIP',
          sousLigne: 'HEIP · Instagram',
          roles: ['Concept', 'Réalisation', 'Montage'],
          texte: 'Des vidéos pour accueillir les nouveaux étudiants de HEIP à la rentrée.',
          rangees: [
            [
              enLigne('essuie-camera', 'EssuieCaméra', 'https://www.instagram.com/reel/Dd1cVpMuiNd/'),
              enLigne('back-to-school-kit', 'Back To School Kit', 'https://www.instagram.com/reel/Dc_AjWkDnM3/', {
                roles: ['Concept', 'Réalisation', 'Montage', 'Rédaction'],
              }),
            ],
          ],
        },
      ],
    },
    {
      id: 'face-camera',
      titre: 'Face Caméra',
      texte: "Les contenus où je suis à l'écran, comme présentatrice ou intervieweuse.",
      blocs: [
        {
          id: 'projection-courts-metrages',
          titre: 'Immersion et micro-trottoirs',
          sousLigne: 'Sup de Pub · Instagram et TikTok',
          roles: ['Concept', 'Face caméra', 'Interview', 'Photo et vidéo'],
          texte:
            'Une story immersive pendant la projection des courts métrages, et des micro-trottoirs pour Instagram et TikTok.',
          rangees: [
            [
              enLigne(
                'story-immersive',
                'Story immersive',
                'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTA5OTE3MzY4NDczNTcx?story_media_id=3991247202622198342_3929723136',
              ),
              enLigne('micro-trottoir-projection', 'Devine le film de ton proche', 'https://www.instagram.com/reel/DdmHYhOjufP/'),
              enLigne('fc-petites-choses', "Les petites choses d'un tournage", 'https://vt.tiktok.com/ZSgWxoFWu/'),
              enLigne('fc-metier-reves', 'Le métier de tes rêves', 'https://vt.tiktok.com/ZSgWQ2JwQ/'),
              enLigne('fc-reussi-99', 'Réussi à 99,9 %', 'https://vt.tiktok.com/ZSgWQNNcR/'),
            ],
          ],
        },
      ],
    },
    {
      id: 'realisation-montage',
      titre: 'Réalisation + Montage',
      texte: "J'ai tourné et monté, à partir d'un concept défini avec l'équipe.",
      blocs: [
        {
          id: 'fabrice-rizzoli',
          titre: 'Fabrice Rizzoli',
          sousLigne: 'HEIP · Instagram et TikTok',
          roles: ['Réalisation', 'Montage', 'Sous-titrage'],
          texte:
            "Une série d'interviews avec Fabrice Rizzoli, professeur de géopolitique des criminalités à HEIP. Chaque épisode explique un mécanisme du crime organisé : blanchiment, corruption, ports…",
          rangees: [
            [
              enLigne('rizzoli-blanchiment', 'Le blanchiment', 'https://www.instagram.com/reel/DaIctxLgY0y/'),
              enLigne('rizzoli-confiscation', 'La confiscation', 'https://www.instagram.com/reel/DaaQhrpiGpk/'),
              enLigne('rizzoli-corruption', 'La corruption', 'https://www.instagram.com/reel/DasSJteEaVJ/'),
              enLigne('rizzoli-ports', 'Les ports', 'https://vt.tiktok.com/ZSg4GjRQT/'),
              enLigne('rizzoli-repentis', 'Les repentis', 'https://www.instagram.com/reel/DbQcHS5DXY3/'),
              enLigne('rizzoli-citoyens', 'Le rôle des citoyens', 'https://www.instagram.com/reel/Dbh7X7ojsgt/'),
              enLigne('rizzoli-series', 'Le crime dans les séries', 'https://www.instagram.com/reel/Db0YVr9gpon/'),
            ],
          ],
        },
        {
          id: 'msc-erci',
          titre: 'MSc ERCI',
          sousLigne: 'HEIP · Site web et Instagram',
          roles: ['Réalisation', 'Montage'],
          texte:
            'Les vidéos de présentation du MSc Expert en Relations et Coopérations Internationales : une version longue en 16:9 pour le site web, et des reels sur les métiers de chaque spécialisation.',
          rangees: [
            [fichier('msc-erci-programme', 'Présentation du programme', { format: '16:9' })],
            [
              enLigne('erci-diplomatie', 'Diplomatie économique', 'https://www.instagram.com/reel/DbnnPFEjsb2/'),
              enLigne('erci-securite-defense', 'Sécurité et défense', 'https://www.instagram.com/reel/Db5h4tPisW2/'),
            ],
          ],
        },
        {
          id: 'portraits-actualite',
          titre: 'Interviews et actualité',
          sousLigne: 'HEIP · Instagram',
          roles: ['Réalisation', 'Montage'],
          texte:
            "Des interviews avec des étudiants et alumni de HEIP, et un reel d'actualité.",
          rangees: [
            [
              enLigne('barrio-14', 'Barrio 14', 'https://www.instagram.com/reel/DVs4uHAji-Y/'),
              enLigne('portrait-tom-carl', 'Tom Carl', 'https://www.instagram.com/reel/DYcFhmniMc7/', { roles: ['Montage'] }),
              enLigne('portrait-alumni', 'Portrait alumni', 'https://www.instagram.com/reel/DW6BnE_kQ6U/', {
                roles: ['Réalisation'],
              }),
              enLigne('fifa-mbappe', 'FIFA et politique', 'https://www.instagram.com/reel/DayBZytFVGL/'),
            ],
          ],
        },
      ],
    },
    {
      id: 'montage',
      titre: 'Montage',
      texte: "J'ai monté à partir des rushs de l'équipe.",
      blocs: [
        {
          id: 'heip-london',
          titre: 'HEIP London',
          sousLigne: 'HEIP · Instagram',
          roles: ['Montage', 'Sous-titrage'],
          texte:
            "Une série d'interviews pour faire découvrir le campus de Londres et le semestre que les étudiants de HEIP peuvent y passer.",
          rangees: [
            [
              enLigne('london-zacchary-who', 'Zacchary : Who are you?', 'https://www.instagram.com/reel/DVLduMmkmia/'),
              enLigne('london-zacchary-why', 'Zacchary : Why London?', 'https://www.instagram.com/reel/DVyFoW7jcJl/'),
              enLigne('london-caroline-campus', 'Caroline : un campus singulier', 'https://www.instagram.com/reel/DYWuQ7-EU_G/'),
              enLigne('london-caroline-vie', 'Caroline : la vie étudiante', 'https://www.instagram.com/reel/DYjmNWzCmC7/'),
              enLigne('london-kevin-teach', 'Kevin : What do you teach?', 'https://www.instagram.com/reel/DZCmlm7EziN/'),
              enLigne('london-kevin-degree', 'Kevin : More than a degree', 'https://www.instagram.com/reel/DZM5w5ujVOl/'),
            ],
          ],
        },
        {
          id: 'micro-trottoirs-etudiants',
          titre: 'Micro-trottoirs étudiants',
          sousLigne: 'HEIP · Instagram',
          roles: ['Montage'],
          texte:
            "Des formats courts avec les étudiants de HEIP pour parler de leur programme et de leur alternance : Vrai ou Faux, Fast & Curious et micro-trottoirs. Pour Vrai ou Faux, j'ai aussi imaginé l'accroche d'ouverture.",
          rangees: [
            [
              enLigne('vrai-ou-faux-1', 'Vrai ou Faux 1', 'https://www.instagram.com/reel/DdEDQDajL0t/', {
                roles: ['Montage', "Concept de l'intro"],
              }),
              enLigne('vrai-ou-faux-2', 'Vrai ou Faux 2', 'https://www.instagram.com/reel/DdWLrLhjBhW/', {
                roles: ['Montage', "Concept de l'intro"],
              }),
              enLigne('fast-curious-1', 'Fast & Curious 1', 'https://www.instagram.com/reel/DcgC_4ijNhj/'),
              enLigne('fast-curious-2', 'Fast & Curious 2', 'https://www.instagram.com/reel/Dc0papdCllU/'),
              fichier('alternance-miap', "L'alternance en MSc MIAP", { roles: ['Montage', 'Sous-titrage'] }),
              fichier('ou-fais-tu-ton-alternance', 'Où fais-tu ton alternance ?'),
            ],
          ],
        },
      ],
    },
  ] as SectionCom[],
}

/* ------------------------------------------------------------------ */
/* Homepage teaser ("Communication & contenus" block)                  */
/* ------------------------------------------------------------------ */

const allBlocs = alternance.sections.flatMap((s) => s.blocs)

/** First video of a block that has a thumbnail. */
export const blocPoster = (b: Bloc) => b.rangees.flat().find((x) => x.poster)?.poster ?? ''

/** A homepage teaser card: plays its video in place (no link out). */
export interface AccueilCarte {
  /** Title shown under the thumbnail (the block it comes from). */
  titre: string
  video: Video
}

const videoById = (id: string): Video => {
  const v = allBlocs.flatMap((b) => b.rangees.flat()).find((x) => x.id === id)
  if (!v) throw new Error(`communication.ts: unknown video id "${id}"`)
  return v
}

export const accueil = {
  titre: 'Créations de Contenu',
  texte: 'Reels, interviews et séries réalisés pour HEIP et Sup de Pub.',
  /** The 3 cards on the homepage. Each needs a local file (`src`) so it plays
   *  on the site, without TikTok/Instagram embeds (cookies, like counts). */
  cartes: [
    { titre: "Campagnes d'acquisition", video: videoById('rejoignez-nous') },
    {
      titre: 'Raccourcis Premiere Pro',
      video: { ...videoById('tips-raccourcis-1'), src: `${VIDEOS}tips-raccourcis-1.mp4`, url: '' },
    },
    {
      titre: 'Tips tournage et montage',
      video: { ...videoById('tips-3-choses'), src: `${VIDEOS}tips-3-choses.mp4`, url: '' },
    },
  ] as AccueilCarte[],
}
