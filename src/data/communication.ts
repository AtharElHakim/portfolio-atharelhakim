/**
 * Communication page: single source of truth for every piece of content.
 *
 * TO REPLACE A PLACEHOLDER: fill in `src` (video file) or `poster` (image).
 * Any media left empty ('') renders as a grey rounded block showing its
 * title and format, so the layout stays intact while you fill things in.
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

export interface Section {
  id: string
  titre: string
  texte: string
  videos: Video[]
  /** Horizontal videos, rendered on their own full-width row below. */
  videosLarges?: Video[]
}

/** Shorthand so the lists below stay readable: media fields start empty. */
const v = (d: Omit<Video, 'src' | 'poster' | 'url'> & Partial<Pick<Video, 'src' | 'poster' | 'url'>>): Video => ({
  src: '',
  poster: '',
  url: '',
  ...d,
})

/* ------------------------------------------------------------------ */
/* 1. Intro                                                            */
/* ------------------------------------------------------------------ */

export const intro = {
  titre: 'Communication & création de contenu',
  texte:
    "Pendant mon alternance chez OMNES Education, j'ai conçu, réalisé et monté des contenus pour les réseaux sociaux de deux écoles : HEIP (sciences politiques et relations internationales) et Sup de Pub (communication et création).",
  infos: ['2 écoles', 'Instagram, TikTok, LinkedIn, site web', 'Déc. 2025 – sept. 2026'],
}

/* ------------------------------------------------------------------ */
/* 2. Showreel                                                         */
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
/* 3–5. Video sections                                                 */
/* ------------------------------------------------------------------ */

export const sectionsVideo: Section[] = [
  {
    id: 'concept-realisation-montage',
    titre: 'Concept · Réalisation · Montage',
    texte:
      "Les projets que j'ai portés de A à Z, de l'idée au montage. Pour Sup de Pub, j'ai créé et présenté face caméra une série de tips sur le tournage et le montage, où chaque épisode reprend l'accroche du précédent.",
    videos: [
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
    ],
  },
  {
    id: 'realisation-montage',
    titre: 'Réalisation · Montage',
    texte:
      "Des interviews d'experts, des vidéos de programme et des portraits, que j'ai tournés et montés à partir d'un concept défini avec l'équipe.",
    videos: [
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
      v({
        id: 'msc-erci-apres-diplome',
        poster: '/communication/posters/msc-erci-apres-diplome.webp',
        titre: 'MSc ERCI : et après le diplôme ?',
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
      v({
        id: 'fifa-mbappe',
        poster: '/communication/posters/fifa-mbappe.webp',
        titre: 'FIFA et politique : le cas Mbappé',
        ecole: 'HEIP',
        plateforme: 'Instagram',
        format: '9:16',
        roles: ['Réalisation', 'Montage'],
        resultat: 'Format podcast',
        url: 'https://www.instagram.com/reel/DayBZytFVGL/',
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
        id: 'plot-twist-fevrier',
        src: '/communication/videos/plot-twist-fevrier.mp4',
        poster: '/communication/posters/plot-twist-fevrier.webp',
        titre: 'Plot twist : rentrée en février',
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
    ],
    videosLarges: [
      v({
        id: 'msc-erci-programme',
        src: '/communication/videos/msc-erci-programme.mp4',
        poster: '/communication/posters/msc-erci-programme.webp',
        titre: 'MSc ERCI : présentation du programme',
        ecole: 'HEIP',
        plateforme: 'Site web',
        format: '16:9',
        roles: ['Réalisation', 'Montage'],
        resultat: '7 vidéos pour le site + reels',
      }),
    ],
  },
  {
    id: 'montage',
    titre: 'Montage',
    texte: "Des interviews, des portraits et des formats étudiants que j'ai montés et sous-titrés.",
    videos: [
      v({
        id: 'heip-london',
        poster: '/communication/posters/heip-london.webp',
        titre: 'HEIP London : le campus de Londres',
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
      v({
        id: 'vrai-ou-faux-miap',
        poster: '/communication/posters/vrai-ou-faux-miap.webp',
        titre: 'Vrai ou Faux : MSc MIAP',
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
        id: 'portrait-tom-carl',
        poster: '/communication/posters/portrait-tom-carl.webp',
        titre: 'Portrait étudiant : Tom Carl',
        ecole: 'HEIP Lyon',
        plateforme: 'Instagram',
        format: '9:16',
        roles: ['Montage'],
        resultat: '18 ans, élu municipal',
        url: 'https://www.instagram.com/reel/DYcFhmniMc7/',
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
        titre: 'Où fais-tu ton alternance ?',
        ecole: 'HEIP',
        plateforme: 'Instagram',
        format: '9:16',
        roles: ['Montage'],
        resultat: 'Micro-trottoir avec les étudiants de M2',
      }),
    ],
  },
]

/* ------------------------------------------------------------------ */
/* 6. Un événement, deux formats                                       */
/* ------------------------------------------------------------------ */

export interface StoryScreen {
  label: string
  /** 'image' advances after `dureeImage` seconds, 'video' after its real length. */
  type: 'image' | 'video'
  src: string
}

export const evenement = {
  surtitre: 'Un événement, deux formats',
  titre: 'Projection des courts métrages · Sup de Pub',
  texte:
    "Pour la projection des films des étudiants en audiovisuel, j'ai imaginé deux contenus : une story immersive pour vivre la soirée en direct, et un micro-trottoir où les familles devaient deviner le titre du film de leur proche.",
  story: {
    titre: 'Story immersive',
    roles: ['Concept', 'Face caméra', 'Photo & vidéo'],
    url: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTA5OTE3MzY4NDczNTcx?story_media_id=3991247202622198342_3929723136',
    /** Seconds each image screen stays up. */
    dureeImage: 5,
    ecrans: [1, 2, 3, 4, 5, 6].map(
      (n): StoryScreen => ({ label: `Écran ${n}`, type: 'image', src: '' }),
    ),
  },
  microTrottoir: v({
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
}

/* ------------------------------------------------------------------ */
/* 7. Stratégie & organisation                                         */
/* ------------------------------------------------------------------ */

export const strategie = {
  titre: 'Stratégie & organisation',
  cartes: [
    {
      icone: 'calendrier',
      titre: 'Calendrier éditorial',
      texte:
        'Planification des publications sur Instagram, TikTok, LinkedIn et Facebook pour deux écoles.',
      /** Blurred screenshot of the calendar. */
      capture: { label: 'Capture floutée du calendrier', format: '16:9', src: '' } as Media,
    },
    {
      icone: 'formats',
      titre: 'Un contenu, chaque plateforme',
      texte:
        'Adapter chaque vidéo au format et aux codes de la plateforme : 9:16, 1:1, 16:9, sous-titres, légendes.',
    },
    {
      icone: 'veille',
      titre: 'Veille',
      texte:
        "Suivi des tendances social media, des nouveaux formats et de l'IA appliquée à la création de contenu.",
    },
  ] as { icone: 'calendrier' | 'formats' | 'veille'; titre: string; texte: string; capture?: Media }[],
}

/* ------------------------------------------------------------------ */
/* Homepage teaser ("Communication & contenus" block)                  */
/* ------------------------------------------------------------------ */

const allVideos = sectionsVideo.flatMap((s) => [...s.videos, ...(s.videosLarges ?? [])])

export const accueil = {
  titre: 'Communication & contenus',
  texte: 'Reels, interviews et séries réalisés pour HEIP et Sup de Pub.',
  /** The 3 vertical videos shown on the homepage, by id. */
  videos: ['tips-tournage-montage', 'on-t-attend-a-heip', 'fabrice-rizzoli']
    .map((id) => allVideos.find((x) => x.id === id))
    .filter((x): x is Video => Boolean(x)),
}
