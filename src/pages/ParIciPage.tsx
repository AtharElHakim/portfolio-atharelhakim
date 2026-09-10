import { useRef, useState, type CSSProperties, type ReactNode } from 'react'
import Contact from '../components/Contact'
import CaseStudyNav from '../components/CaseStudyNav'
import Button, { focusRing } from '../components/Button'
import VideoModal from '../components/VideoModal'
import Seo from '../components/Seo'
import { H1, H2 as SectionTitle, H3, H4, H5, H6, Body1, Body2, Micro1 } from '../components/Typography'
import { useSwipe } from '../hooks/useSwipe'
import heroImg from '../assets/par-ici/hero.webp'
import introVideo from '../assets/par-ici/intro.mp4'
import introVideoThumb from '../assets/par-ici/video-thumbnail.webp'
import playIcon from '../assets/par-ici/play-icon.svg'
import personaKarim from '../assets/par-ici/persona-karim.webp'
import personaDorra from '../assets/par-ici/persona-dorra.webp'
import personaJiho from '../assets/par-ici/persona-jiho.webp'
import compassLogo from '../assets/par-ici/logo.webp'

const FIGMA_PROTO_URL =
  'https://www.figma.com/proto/ramDR1CZvokt75ymWXOqUY/CNP-Prototype?node-id=340-666&t=lQcSUq85oW64SEuU-1'

const RESEARCH_REPO_URL =
  'https://drive.google.com/drive/folders/1s_v593UIfYclLM6THTxYZ2a7eTbOLsNJ?usp=sharing'

/* ---------- Local helpers ----------
   Per the codebase convention (see the note atop SpotifyPage.tsx), each case
   study defines its own copies of the small shared patterns rather than
   importing a shared file. The ones below are copied 1:1 from
   SpotifyPage/FinelinePage so this page stays structurally identical:
   `SectionShell`, `PullQuote`, `CardGrid`, `ComparisonTable`, `DarkHeaderCard`,
   `CalloutBox`. New patterns flagged inline: `Epigraph`, `RiskMatrix`,
   `MoscowGrid`, `RoadmapTimeline`, `WalkthroughStepper`. */

const SECTION = 'flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]'

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      className={`size-5 ${direction === 'left' ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Non-italic pull-quote — matches the Angry Birds / Spotify treatment
 *  (`font-syne`, `font-medium`, `text-xl md:text-2xl`). */
function PullQuote({ children, tone = 'white' }: { children: ReactNode; tone?: 'white' | 'purple' }) {
  return (
    <p
      className={`w-full max-w-[900px] text-center font-syne text-xl font-medium md:text-2xl ${
        tone === 'purple' ? 'text-purple-pale' : 'text-white/85'
      }`}
    >
      {children}
    </p>
  )
}

/** NEW — large italic cinematic-quote treatment, used only as §3's opening
 *  beat (and its bookend in §16). Reusable for future cinematic-opener case
 *  studies. */
function Epigraph({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <figure className="mx-auto flex w-full max-w-[820px] flex-col items-center gap-4 text-center">
      <blockquote className="font-syne text-2xl italic leading-snug text-white md:text-4xl">
        {children}
      </blockquote>
      {attribution && <figcaption className="text-sm text-white/50">{attribution}</figcaption>}
    </figure>
  )
}

/** ONE reusable card-grid (title + short description, optional status badge +
 *  stat). Reused across the 4 hypotheses (§4), the 4 validated survey results
 *  (§5), the 3 target profiles (§6) and the 5 SUAVE criteria (§13). */
type GridCard = { title: string; description: string; badge?: string; stat?: string }

function CardGrid({ cards, cols = 'md:grid-cols-2' }: { cards: GridCard[]; cols?: string }) {
  return (
    <div className={`grid w-full grid-cols-1 gap-4 ${cols}`}>
      {cards.map((c) => (
        <div
          key={c.title}
          className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center gap-3">
            <H6>{c.title}</H6>
            {c.badge && (
              <span className="rounded-full border border-success/50 bg-success/20 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-success-bg">
                {c.badge}
              </span>
            )}
          </div>
          {c.stat && <p className="font-syne text-2xl text-white md:text-3xl">{c.stat}</p>}
          <Body2>{c.description}</Body2>
        </div>
      ))}
    </div>
  )
}

/** Copied 1:1 from SpotifyPage (`local to SpotifyPage.tsx` per DESIGN_SYSTEM). */
function ComparisonTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-white/15">
      {/* Feature-matrix variant: more columns than Spotify's descriptive table,
          so headers wrap and letter-spacing/padding are tighter to keep the
          whole table inside the section container at desktop width. */}
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-white/15 bg-white/5">
            {columns.map((col, j) => (
              <th
                key={col}
                className={`px-3 py-3 align-bottom text-xs font-semibold uppercase tracking-wide text-purple-pale/70 ${
                  j === 0 ? '' : 'text-center'
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/10 last:border-b-0 even:bg-white/[0.03]">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3 py-3 align-top text-base leading-6 ${
                    j === 0 ? 'font-medium text-white' : 'text-center text-white/70'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Copied 1:1 from SpotifyPage. */
function CalloutBox({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded-2xl border border-purple-pale/40 bg-purple-dark/25 p-6 backdrop-blur-sm">
      <Body1 className="font-light">{children}</Body1>
    </div>
  )
}

/** Copied 1:1 from SpotifyPage (`DarkHeaderCard`, flagged in DESIGN_SYSTEM). */
function DarkHeaderCard({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm">
      <div className="border-b border-white/10 bg-black-soft px-6 py-4">
        <H3 className="!text-xl !text-white !leading-normal">{title}</H3>
        {subtitle && <Body2 className="mt-1">{subtitle}</Body2>}
      </div>
      {children && <div className="flex flex-1 flex-col gap-4 p-6">{children}</div>}
    </div>
  )
}

/** 3-tier budget card recipe (from FinelinePage / SpotifyPage `TjmCard`) —
 *  dot + `H4` title, a list of lines, a bottom total. */
function BudgetCard({
  title,
  lines,
  total,
}: {
  title: string
  lines: { label: string; amount: string }[]
  total: string
}) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-purple-pale/70" />
        <H4 className="w-auto text-left !text-white">{title}</H4>
      </div>
      <ul className="flex flex-col gap-2 text-base leading-6 text-white/70">
        {lines.map((l) => (
          <li key={l.label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2 last:border-b-0">
            <span>{l.label}</span>
            <span className="shrink-0 font-medium text-white">{l.amount}</span>
          </li>
        ))}
      </ul>
      <Micro1 className="!text-white/70 mt-auto border-t border-white/10 pt-4">
        Total exact · <span className="font-semibold text-white">{total}</span>
      </Micro1>
    </div>
  )
}

/** NEW — risk-matrix visual (§6). Not a radar (that's Spotify's Cible): a
 *  scored heat row per profile, crossing 4 vulnerability criteria on a /10
 *  scale. */
function RiskMatrix({ rows }: { rows: { profile: string; origin: 'Hors UE' | 'UE'; score: number }[] }) {
  return (
    <div className="flex w-full max-w-[820px] flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      {rows.map((r) => (
        <div key={r.profile} className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex w-full items-center justify-between gap-3 sm:w-64 sm:shrink-0">
            <span className="text-base leading-6 text-white/85">{r.profile}</span>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-purple-pale/70">
              {r.origin}
            </span>
          </div>
          <div className="flex flex-1 items-center gap-3">
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${r.score * 10}%`,
                  background:
                    r.score >= 7
                      ? 'var(--color-danger-bg)'
                      : r.score >= 4
                        ? 'var(--color-purple-pale)'
                        : 'var(--color-success-bg)',
                }}
              />
            </div>
            <span className="w-12 shrink-0 text-right font-syne text-lg text-white">{r.score}/10</span>
          </div>
        </div>
      ))}
      <Micro1 className="mt-2">
        Score de vulnérabilité sur 10, croisant : connaissance des garanties, connaissance des obligations
        légales, suivi du contrat dans le temps et confiance envers le système assurantiel.
      </Micro1>
    </div>
  )
}

/** NEW — MoSCoW grid (§14). 2x2 rather than 1x4: at four-across each column
 *  was too narrow to be legible, and the item counts are very uneven (Must
 *  have has ~3x the rows of Won't have), which left large empty gaps under the
 *  short columns. `items-start` keeps each card at its natural height. */
function MoscowGrid({
  columns,
}: {
  columns: { label: string; note: string; items: string[] }[]
}) {
  return (
    <div className="grid w-full grid-cols-1 items-start gap-4 sm:grid-cols-2">
      {columns.map((col) => (
        <div
          key={col.label}
          className="flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm"
        >
          <div className="border-b border-white/10 bg-black-soft px-5 py-4">
            <H6>{col.label}</H6>
            <Micro1 className="mt-1">{col.note}</Micro1>
          </div>
          <ul className="flex flex-1 flex-col gap-2 p-5 text-base leading-6 text-white/70">
            {col.items.map((it) => (
              <li key={it} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-purple-pale/70" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/** NEW — numbered-circle-with-connecting-line timeline (§14). Each phase's
 *  body is a `DarkHeaderCard`. */
function RoadmapTimeline({
  phases,
}: {
  phases: { n: number; title: string; duration: string; livrable: string; tasks: string[] }[]
}) {
  return (
    <div className="flex w-full max-w-[900px] flex-col">
      {phases.map((p, i) => (
        <div key={p.n} className="flex gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-purple-pale/50 bg-purple-dark/70 font-syne text-lg text-purple-pale shadow-glow md:size-12"
              style={{ '--glow-color': 'var(--color-purple-light)', '--glow-opacity': '45%' } as CSSProperties}
            >
              {String(p.n).padStart(2, '0')}
            </div>
            {i < phases.length - 1 && <div className="w-px flex-1 bg-white/15" />}
          </div>
          <div className="flex-1 pb-8">
            <DarkHeaderCard title={p.title} subtitle={`Phase ${p.n} · ${p.duration}`}>
              <div className="flex flex-col gap-1">
                <H5 className="!text-purple-pale/70">Livrable</H5>
                <Body2>{p.livrable}</Body2>
              </div>
              <ul className="list-disc pl-5 text-base leading-6 text-white/70">
                {p.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </DarkHeaderCard>
          </div>
        </div>
      ))}
    </div>
  )
}

/* iPhone frame — same bezel + home-indicator idea as SpotifyPage's `PhoneFrame`,
   minus the drawn status bar (Karim's screenshots already carry their own
   clock / Dynamic Island / signal glyphs). The screen cutout matches the
   screenshots' native ratio (1179 / 2553) so they sit edge-to-edge with an
   even bezel, no black band above the clock. */
const PHONE_CONTENT_RADIUS = '12% / 5.5%'
const PHONE_CONTENT_STYLE: CSSProperties = {
  left: '3.242%',
  top: '1.535%',
  width: '93.516%',
  height: '95.868%',
  borderRadius: PHONE_CONTENT_RADIUS,
  clipPath: `inset(0 round ${PHONE_CONTENT_RADIUS})`,
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: '401 / 847' }}>
      <svg
        viewBox="0 0 401 847"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="399" height="845" rx="58" fill="#1c1c1e" />
        <rect x="11" y="11" width="379" height="825" rx="48" fill="#0b0b0c" />
      </svg>

      <div className="absolute z-10 overflow-hidden" style={PHONE_CONTENT_STYLE}>
        <img loading="lazy" decoding="async" src={src} alt={alt} className="block w-full" />
      </div>

      <svg
        viewBox="0 0 401 847"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
        aria-hidden="true"
      >
        <rect x="154" y="808" width="93" height="5" rx="2.5" fill="#5a5a5c" />
      </svg>
    </div>
  )
}

/** §10 — interactive step-by-step walkthrough for Karim's screens. A step can
 *  span several screens: advancing swaps the screen and keeps the step copy in
 *  place, then rolls on to the next step. Reuses the Coverflow pagination
 *  control (glass-dark circle buttons + `Micro1` "n / total" counter) and the
 *  shared `useSwipe` hook. */
const stepArrowGlow = {
  '--glow-color': 'var(--color-purple-light)',
  '--glow-blur': '10px',
  '--glow-opacity': '60%',
  '--glow-blur-hover': '16px',
  '--glow-opacity-hover': '90%',
} as CSSProperties

function WalkthroughStepper({
  steps,
}: {
  steps: { title: string; body: string; screens: string[] }[]
}) {
  // A step can span several screens (e.g. the onboarding explainer, the
  // profiling questions, the subscription flow): advancing swaps the screen
  // and keeps the step copy in place, then rolls on to the next step.
  // Flatten to a screen list the pager walks through.
  const screens = steps.flatMap((s, stepIdx) =>
    s.screens.map((src, screenIdx) => ({ stepIdx, screenIdx, src })),
  )
  const [i, setI] = useState(0)
  const count = screens.length
  const prev = () => setI((p) => (p - 1 + count) % count)
  const next = () => setI((p) => (p + 1) % count)
  const swipe = useSwipe(next, prev)
  const { stepIdx, screenIdx, src } = screens[i]
  const step = steps[stepIdx]
  const screenCount = step.screens.length
  const multi = screenCount > 1

  return (
    <div className="flex w-full max-w-[820px] flex-col items-center gap-5">
      <div
        className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[248px_1fr]"
        onTouchStart={swipe.onTouchStart}
        onTouchEnd={swipe.onTouchEnd}
      >
        <div className="mx-auto flex w-full max-w-[248px] flex-col items-center gap-3">
          <PhoneFrame src={src} alt={`${step.title} — écran ${screenIdx + 1}`} />
          {/* Row is always rendered (fixed height) so the stepper doesn't
              resize when moving between single- and multi-screen steps. */}
          <div className="flex h-2 items-center gap-1.5">
            {multi &&
              Array.from({ length: screenCount }, (_, d) => (
                <span
                  key={d}
                  className={`size-1.5 rounded-full transition-colors ${
                    d === screenIdx ? 'bg-purple-pale' : 'bg-white/25'
                  }`}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Micro1 className="!text-purple-pale/70">
            Étape {stepIdx + 1}
            {multi ? ` · écran ${screenIdx + 1} / ${screenCount}` : ''}
          </Micro1>
          <H3 className="!text-xl !leading-normal">{step.title}</H3>
          <Body1 className="font-light">{step.body}</Body1>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Écran précédent"
          className={`glass-dark flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-purple-pale/50 text-white shadow-glow transition-all duration-300 ${focusRing}`}
          style={stepArrowGlow}
        >
          <ChevronIcon direction="left" />
        </button>
        <Micro1 className="min-w-[60px] text-center">
          {i + 1} / {count}
        </Micro1>
        <button
          type="button"
          onClick={next}
          aria-label="Écran suivant"
          className={`glass-dark flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-purple-pale/50 text-white shadow-glow transition-all duration-300 ${focusRing}`}
          style={stepArrowGlow}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  )
}

/** Condensed secondary-persona card (§6) — first case study with 3 personas,
 *  so the primary keeps the full Persona treatment and the two secondaries
 *  use this lighter card. */
function SecondaryPersona({
  name,
  meta,
  bio,
  frustrations,
  raisons,
  image,
}: {
  name: string
  meta: string
  bio: string
  frustrations: string[]
  raisons: string[]
  image: string
}) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="size-20 shrink-0 rounded-xl object-cover" />
        <div className="flex flex-col gap-0.5">
          <H3 className="!text-xl !leading-normal">{name}</H3>
          <Micro1>{meta}</Micro1>
        </div>
      </div>
      <Body2>{bio}</Body2>
      <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <H5 className="!text-purple-pale/70">Frustrations</H5>
          <ul className="list-disc pl-5 text-base leading-6 text-white/70">
            {frustrations.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <H5 className="!text-purple-pale/70">Ce qu'elle attend de Par ici</H5>
          <ul className="list-disc pl-5 text-base leading-6 text-white/70">
            {raisons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ---------- Content data ---------- */

const hypotheses: GridCard[] = [
  {
    title: 'Le contrat ne suit pas la vie',
    description:
      "Les assurés sont mal couverts parce que leur contrat ne suit pas leur vie. Un parcours qui détecte les moments de vie et propose automatiquement une mise à jour éviterait qu'ils soient exposés sans le savoir.",
  },
  {
    title: 'Méconnaissance des garanties détenues',
    description:
      "Beaucoup ne comprennent pas les garanties des contrats qu'ils possèdent déjà, y compris celles incluses dans leur carte bancaire. Rendues simples et accessibles au bon moment, ces informations éviteraient trous de couverture et doublons.",
  },
  {
    title: 'Méconnaissance des obligations légales',
    description:
      "Beaucoup ignorent les règles de base de l'assurance, comme l'obligation d'assurance habitation pour les locataires. Mieux informées, ces personnes prendraient de meilleures décisions et réduiraient le risque de non-assurance.",
  },
  {
    title: "Contrats dispersés, pas de vue d'ensemble",
    description:
      "Les contrats sont éclatés entre plusieurs assureurs sans qu'aucune vue d'ensemble n'existe. Un endroit unique pour tout voir, repérer les doublons et les manques, leur permettrait enfin de piloter leur protection.",
  },
]

const surveyResults: GridCard[] = [
  {
    title: 'H1 · Le contrat ne suit pas la vie',
    badge: 'Validée',
    stat: '45%',
    description:
      "45% mettent à jour leur contrat seulement « si j'y pense ». 19% n'ont jamais été contactés par leur assureur et ne l'ont jamais fait de leur côté.",
  },
  {
    title: 'H2 · Méconnaissance des garanties détenues',
    badge: 'Validée',
    stat: '90%',
    description:
      "90% ne savent pas précisément ce que couvre leur assurance (71% + 19%). 77% s'auto-évaluent à 2 ou 3 sur 5 sur leur compréhension de l'assurance.",
  },
  {
    title: 'H3 · Méconnaissance des obligations légales',
    badge: 'Validée',
    stat: '0%',
    description:
      "0% des répondants ont cité correctement leurs obligations légales d'assurance. Réponses fragmentées, incorrectes ou vides pour l'ensemble des répondants.",
  },
  {
    title: "H4 · Contrats dispersés, pas de vue d'ensemble",
    badge: 'Validée',
    stat: '84%',
    description:
      "61% ont leurs contrats chez 2 assureurs ou plus. 84% voudraient une plateforme unique pour centraliser tous leurs contrats.",
  },
]

const targetProfiles: GridCard[] = [
  {
    title: 'Le Primo-Arrivant',
    stat: '9 / 10',
    description:
      "Étranger non-UE arrivé depuis moins d'un an, en pleine saturation administrative : titre de séjour, logement, compte bancaire, sécurité sociale. L'assurance n'est pas une priorité consciente ; elle devient une urgence uniquement quand une contrainte externe l'impose.",
  },
  {
    title: 'Le Résident en Transition',
    stat: '5 / 10',
    description:
      "En France depuis 1 à 3 ans. Il commence à s'installer, trouve un emploi, change d'appartement. Il a souscrit ses premières assurances sans vraiment comprendre ce qu'il a signé, et ses contrats sont dispersés entre plusieurs assureurs.",
  },
  {
    title: "L'Établi",
    stat: '2 / 10',
    description:
      "En France depuis plus de 3 ans, souvent titulaire d'une carte de résident. Il s'en sort mieux administrativement mais garde des lacunes profondes : sa vie a changé (enfants, déménagements, voiture) mais ses contrats n'ont pas suivi.",
  },
]

const suave: GridCard[] = [
  {
    title: 'Simple',
    description:
      "L'onboarding prend moins de 2 minutes. Les questions sont en swipe oui/non, les contrats résumés en langage clair, et l'app parle la langue de l'utilisateur. Pas de jargon, pas de complexité inutile.",
  },
  {
    title: 'Utile',
    description:
      "Par ici résout un problème réel et documenté. L'app intervient au bon moment, avant que la mal-assurance ne s'installe, pas après.",
  },
  {
    title: 'Accessible',
    description:
      "Disponible en 27 langues, gratuite pour l'utilisateur, distribuée via le réseau physique La Banque Postale en plus du digital. Pensée pour quelqu'un qui ne connaît pas le système français.",
  },
  {
    title: 'Viable',
    description:
      "Modèle économique B2C direct, commission sur chaque contrat souscrit via Par ici, montée en gamme progressive avec l'utilisateur. Valeur data et conquête client pour CNP, en s'appuyant sur un partenariat qui existe déjà.",
  },
  {
    title: 'Équitable',
    description:
      "Conçue spécifiquement pour une population sous-adressée, elle réduit les inégalités d'accès à l'information assurantielle et aligne la performance commerciale de CNP avec son impact social.",
  },
]

const walkImgs = import.meta.glob('../assets/par-ici/walkthrough/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>
const walk = (name: string) => walkImgs[`../assets/par-ici/walkthrough/${name}.webp`]

/* Karim's real app screens. A step can carry several screens (`screens`);
   the stepper swaps the screen and keeps the step copy in place before
   rolling on to the next step. */
const walkthroughSteps: { title: string; body: string; screens: string[] }[] = [
  {
    title: 'Choix de la langue',
    body: "Avant même de créer son compte, Karim choisit sa langue. L'app détecte automatiquement la langue du téléphone et la présélectionne ; il peut choisir n'importe quelle autre. Objectif : 27 langues disponibles dans l'app.",
    screens: [walk('s1')],
  },
  {
    title: 'On lui explique tout avant de commencer',
    body: "Avant de répondre à la moindre question, Karim découvre ce que l'app peut faire pour lui. Des attentes claires avant l'onboarding.",
    screens: [walk('s2-1'), walk('s2-2'), walk('s2-3'), walk('s2-4')],
  },
  {
    title: 'Création de compte et profiling',
    body: "Karim crée son compte en quelques secondes via email, Google ou Apple, puis répond à quelques questions simples : prénom, nom, âge, nationalité, situation et date d'arrivée en France. Vient ensuite le questionnaire de 7 questions, en swipe oui/non, dont l'objectif est de générer sa checklist personnalisée.",
    screens: [walk('s3-1'), walk('s3-2'), walk('s3-3'), walk('s3-4')],
  },
  {
    title: 'Génération de la checklist personnalisée',
    body: "En fonction de ses réponses, l'app génère automatiquement sa checklist, classée par ordre de priorité : Urgent (immédiat), Important (rapidement), À explorer (selon sa situation), Fait (déjà réglé).",
    screens: [walk('s4')],
  },
  {
    title: 'Explication des obligations',
    body: "Karim clique sur RC Habitation dans sa checklist. L'app lui explique ce que c'est et pourquoi c'est une obligation légale pour les locataires, puis affine ses besoins avec quelques questions supplémentaires.",
    screens: [walk('s5')],
  },
  {
    title: "Recommandation d'offres + résumé clair par IA",
    body: "L'app présente les offres CNP dans l'ordre, de la mieux adaptée à sa situation jusqu'à la moins adaptée, en montrant pour chacune ce qu'elle couvre concrètement. Sur la fiche d'une offre, l'IA transforme 40 pages de conditions générales en un résumé compréhensible dans sa langue. Il peut souscrire directement ou contacter un conseiller CNP.",
    screens: [walk('s6-1'), walk('s6-2')],
  },
  {
    title: 'Souscription et coffre-fort numérique',
    body: "Avant de payer, l'app demande d'ajouter les documents nécessaires (titre de séjour, justificatif de domicile) : photo ou PDF, sauvegardés automatiquement dans le coffre-fort, sans jamais avoir à les importer deux fois. Paiement par carte, Apple Pay ou Google Pay. Le coffre-fort l'alerte avant l'expiration d'un document.",
    screens: [walk('s7-1'), walk('s7-2'), walk('s7-3'), walk('s7-4')],
  },
  {
    title: 'Suivi proactif dans la durée',
    body: "Par ici ne disparaît pas une fois la souscription faite. L'app envoie des alertes proactives aux moments qui comptent (titre de séjour qui expire, contrat à échéance, un an en France, nouvelle offre adaptée) et active une messagerie avec un vrai conseiller CNP humain.",
    screens: [walk('s8-1'), walk('s8-2')],
  },
]

const poppinsWeights = [
  { w: '300', label: 'Light' },
  { w: '400', label: 'Regular' },
  { w: '500', label: 'Medium' },
  { w: '600', label: 'SemiBold' },
  { w: '700', label: 'Bold' },
  { w: '800', label: 'ExtraBold' },
]

const roadmapPhases = [
  {
    n: 1,
    title: 'Partenariats stratégiques',
    duration: '2 semaines',
    livrable: 'Conventions de partenariat signées',
    tasks: [
      "Établir le cadre légal du partenariat CNP × La Banque Postale pour la distribution de l'app en agence",
      'Aligner les équipes CNP et LBP sur les objectifs de distribution et de recommandation',
      'Définir les modalités de collaboration avec les associations partenaires',
    ],
  },
  {
    n: 2,
    title: 'Recherche et cartographie administrative',
    duration: '4 semaines',
    livrable: 'Base de données complète et validée des démarches administratives',
    tasks: [
      "Contacter des associations spécialisées (La Cimade, OFII) pour un partenariat de contenu sur les démarches des étrangers non-UE",
      "À défaut, mener une recherche approfondie sur les sources officielles (interieur.gouv.fr, service-public.fr, Légifrance)",
      'Définir les niveaux de priorité de chaque démarche (urgent, important, à explorer)',
      'Valider le contenu avec des experts juridiques et administratifs',
    ],
  },
  {
    n: 3,
    title: 'Conception UX/UI',
    duration: '4 semaines',
    livrable: 'Prototype validé prêt pour le développement',
    tasks: [
      "Finalisation du design system et de l'identité visuelle",
      'Conception des écrans clés et du prototype interactif',
      'Tests utilisateurs sur le prototype avec des étrangers non-UE',
    ],
  },
  {
    n: 4,
    title: 'Développement MVP',
    duration: '7 semaines',
    livrable: 'App fonctionnelle en environnement de test',
    tasks: [
      "Onboarding multilingue (10 langues au lancement)",
      'QCM profil et génération de checklist personnalisée',
      'Parcours assurance RC Habitation et mutuelle étudiante',
      "Coffre-fort documents et alertes d'expiration",
      'Collecte de données utilisateurs conforme au RGPD',
    ],
  },
  {
    n: 5,
    title: 'Intégration CNP',
    duration: '3 semaines',
    livrable: 'App connectée aux systèmes CNP',
    tasks: [
      "Intégration des offres CNP et du système de paiement dans l'app",
      'Connexion avec les systèmes back-office CNP pour la gestion des contrats',
      'Tests de sécurité et de conformité RGPD, ajustements UX et correction des bugs',
    ],
  },
  {
    n: 6,
    title: 'Beta testing',
    duration: '3 semaines',
    livrable: 'Rapport de beta testing et version corrigée de l’app',
    tasks: [
      "Beta testing auprès de 50 utilisateurs recrutés via le réseau La Banque Postale et les associations partenaires",
      'Recueil de feedbacks et identification des points de friction',
      'Ajustements UX et correction des bugs',
    ],
  },
  {
    n: 7,
    title: 'Lancement officiel',
    duration: '2 semaines',
    livrable: 'App disponible publiquement, conseillers LBP formés',
    tasks: [
      "Déploiement sur l'App Store et Google Play",
      "Formation des conseillers La Banque Postale à recommander l'app en agence",
      'Communication de lancement via le réseau LBP et les associations partenaires',
    ],
  },
  {
    n: 8,
    title: 'Consolidation et scale',
    duration: '5 mois',
    livrable: 'Résultats mesurés 6 mois après le lancement',
    tasks: [
      "Lancement de l'analyse IA des contrats CNP et de la messagerie conseiller CNP",
      "Extension des produits CNP disponibles dans l'app",
      'Analyse des données CNP collectées via Par ici pour affiner les offres',
      'Expansion progressive vers d’autres segments de populations vulnérables',
    ],
  },
]

/* ---------- Page ---------- */

export default function ParIciPage() {
  const [videoOpen, setVideoOpen] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="relative isolate">
      <Seo
        title="Par ici — Étude de cas UX/UI"
        description="Par ici, compagnon mobile assurantiel et administratif pour les étrangers non-UE primo-arrivants en France. Hackathon PULSE (CNP Assurances × Sinnasse), du brief SUAVE au prototype."
        path="/projects/par-ici"
      />
      <CaseStudyNav
        sections={[
          { id: 'hero', label: 'Hero' },
          { id: 'overview', label: 'Overview' },
          { id: 'brief', label: 'Brief' },
          { id: 'intro', label: 'Intro' },
          { id: 'contexte', label: 'Contexte' },
          { id: 'recherche-quantitative', label: 'Recherche quantitative' },
          { id: 'cible', label: 'Cible' },
          { id: 'recherche-qualitative', label: 'Recherche qualitative' },
          { id: 'probleme', label: 'Problème' },
          { id: 'solution', label: 'Solution' },
          { id: 'parcours', label: 'Parcours utilisateur' },
          { id: 'direction-artistique', label: 'Direction Artistique' },
          { id: 'prototype', label: 'Prototype' },
          { id: 'valeur-strategique', label: 'Valeur stratégique' },
          { id: 'roadmap', label: 'Roadmap' },
          { id: 'budget', label: 'Budget' },
          { id: 'conclusion', label: 'Conclusion' },
        ]}
      />

      {/* ============ Hero ============ */}
      <div id="hero" className="flex flex-col items-center gap-6 px-8 pb-8 pt-4 md:pb-16 md:pt-10 md:px-[var(--nav-edge-w)]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <img src={compassLogo} alt="Logo Par ici : une boussole" className="size-14" />
          <H1 className="md:!text-5xl md:!leading-[52.8px]">Par ici</H1>
          <Body1 className="!text-white/70 font-light">
            Un compagnon mobile pour les étrangers non-UE primo-arrivants en France
          </Body1>

          <div className="mx-auto w-full max-w-[820px] overflow-hidden rounded-2xl border border-white/15 bg-black-soft shadow-lift">
            <img
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              src={heroImg}
              alt="Écran d'accueil de Par ici : « Bienvenue en France », sur fond CNP Assurances"
              className="block w-full"
            />
          </div>
        </div>
      </div>

      {/* ============ Overview ============ */}
      <div id="overview" className={SECTION}>
        <div className="flex w-full max-w-[820px] flex-col items-center gap-8 text-center">
          <div className="flex w-full flex-col items-center gap-2">
            <H5 className="!text-lg">Overview</H5>
            <Body1 className="w-full text-center !text-white font-light">
              Projet mené en binôme avec Jean-Marc Bassil lors du hackathon national PULSE (CNP Assurances
              × Sinnasse), sur le brief #Solutions Inclusives. Par ici est un compagnon mobile assurantiel
              et administratif indépendant, pensé pour guider les étrangers non-UE primo-arrivants dès leur
              premier jour en France. Face au mur administratif et linguistique, l'app génère des checklists
              personnalisées, traduit les obligations légales en 27 langues et s'appuie sur l'IA pour
              résumer les contrats en langage clair. Plus qu'un outil de démarches, c'est une main tendue
              qui construit une relation de confiance durable entre CNP Assurances et une nouvelle
              génération d'assurés.
            </Body1>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-[3fr_2fr_1fr]">
            <div className="flex flex-col items-center gap-2">
              <H5 className="!text-lg !text-purple-pale/70">Mon Rôle</H5>
              <ul className="mx-auto list-outside list-disc space-y-1.5 pl-5 text-left font-light text-lg leading-7 text-white marker:text-xs marker:text-white [&>li]:pl-2 md:text-xl">
                <li>Recherche UX qualitative &amp; quantitative</li>
                <li>Analyse stratégique &amp; ciblage</li>
                <li>Problématique &amp; stratégie produit</li>
                <li>UX Design &amp; arborescence</li>
                <li>UI Design &amp; Design System</li>
                <li>Modélisation business &amp; roadmap</li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2">
              <H5 className="!text-lg !text-purple-pale/70">Outils</H5>
              <ul className="list-none text-center font-light text-lg leading-7 text-white md:text-xl">
                <li>Figma</li>
                <li>Google Forms</li>
                <li>Google Docs</li>
                <li>NotebookLM</li>
                <li>Google Drive</li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2">
              <H5 className="!text-lg !text-purple-pale/70">Année</H5>
              <Body1 className="!text-white font-light">2026</Body1>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Brief ============ */}
      <div id="brief" className={SECTION}>
        <SectionTitle>Le Brief</SectionTitle>

        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <Body1 className="text-center font-light">
            Dans le cadre du hackathon national PULSE, organisé par le Lab d'Innovation de CNP Assurances et
            l'agence Sinnasse, notre équipe a choisi le brief #Solutions Inclusives : « Et si CNP Assurances
            luttait contre la Mal-Assurance auprès des populations vulnérables ? » Le jury attendait un produit
            ou service innovant, conforme aux critères SUAVE, directement distribuable et capable d'accompagner
            ces utilisateurs vers une couverture d'assurance juste et compréhensible.
          </Body1>
        </div>
      </div>

      {/* ============ Intro ============ */}
      <div id="intro" className={SECTION}>
        <SectionTitle>Intro</SectionTitle>
        <Epigraph attribution="George Washington">
          « La confiance pousse lentement, mais une fois enracinée, elle devient difficile à ébranler. »
        </Epigraph>
        <div className="flex w-full max-w-[820px] flex-col items-center gap-3 text-center">
          <Body1 className="font-light">
            On sait ce que vous vous dites. C'est quoi ce début ? On est dans un film ?
          </Body1>
          <Body1 className="font-light">Pas tout à fait. Mais presque.</Body1>
          <Body1 className="font-light">
            On va vous raconter comment on a répondu au brief de CNP Assurances. Ça commence par une
            question, ça passe par des mois de recherche, et ça aboutit à une solution qu'on pense
            sincèrement avoir un impact. Installez-vous.
          </Body1>
        </div>

        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          aria-label="Lire la vidéo d'introduction"
          className={`group/video relative flex aspect-video w-full max-w-[820px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black-soft shadow-lift ${focusRing}`}
        >
          <img
            loading="lazy"
            decoding="async"
            src={introVideoThumb}
            alt=""
            className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover/video:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover/video:bg-black/50" />
          <img
            loading="lazy"
            decoding="async"
            src={playIcon}
            alt=""
            className="relative h-20 w-20 transition-transform duration-300 group-hover/video:scale-110"
          />
        </button>
      </div>

      {/* ============ Contexte ============ */}
      <div id="contexte" className={SECTION}>
        <div className="flex w-full flex-col items-center gap-4">
          <SectionTitle>Contexte</SectionTitle>
          <Body1 className="w-full text-center font-light">
            On a commencé par apprendre à connaître l'assureur.
          </Body1>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Qui est CNP Assurances ?</H5>
            <ul className="list-disc pl-5 text-base leading-6 text-white/70">
              <li>Premier assureur public français, filiale à 100% de La Banque Postale</li>
              <li>Présent dans 17 pays, 36 millions de personnes protégées dans le monde</li>
              <li>3ᵉ assureur en France, 5ᵉ en Europe, 4ᵉ au Brésil</li>
              <li>Entreprise à mission depuis 2021, engagée pour une société inclusive et durable</li>
              <li>En transition d'un modèle B2B2C vers un modèle B2C direct</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">La stratégie : Lead for Impact</H5>
            <ul className="list-disc pl-5 text-base leading-6 text-white/70">
              <li>Accélérer la conquête commerciale en allant directement vers les clients</li>
              <li>Diversifier les canaux et partenariats de distribution</li>
              <li>Innover pour rendre l'expérience utilisateur plus simple et plus rapide</li>
              <li>Accéder directement aux données clients sans passer par des intermédiaires</li>
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Nos hypothèses de départ</H3>
          <Body1 className="w-full text-center font-light">
            Avant de commencer la recherche, nous avons formulé 4 hypothèses.
          </Body1>
          <CardGrid cards={hypotheses} />
        </div>
      </div>

      {/* ============ Recherche quantitative ============ */}
      <div id="recherche-quantitative" className={SECTION}>
        <div className="flex w-full flex-col items-center gap-4">
          <SectionTitle>Recherche quantitative</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Data et social listening : on a plongé dans les données officielles.
          </Body1>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Axe 1 · Le contrat ne suit pas la vie</H5>
            <Body2>
              La loi charge l'assuré seul de déclarer tout changement de vie dans un délai de 15 jours
              (Légifrance, article L.113-2). Le devoir de conseil dans la durée existe légalement mais, en
              pratique, l'assureur reprend rarement contact à échéance (ACPR, Recommandation 2024-R-03).
            </Body2>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Axe 2 · Droits et obligations mal compris</H5>
            <Body2>
              De nombreux contrats MRH et auto contiennent des clauses d'exclusion illégales (ACPR, 24
              septembre 2024). En 2023, le Médiateur de l'Assurance a reçu 30 620 saisines, soit +42% en un an.
              560 000 véhicules circulent sans assurance ; 14% des 18-30 ans déclarent avoir déjà conduit sans
              assurance (FGAO, Baromètre 2024).
            </Body2>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Axe 3 · Fragmentation, doublons et angles morts</H5>
            <Body2>
              57% des Français répartissent leurs contrats sur plusieurs assureurs, seuls 40% centralisent
              (Ipsos pour Giva, novembre 2025). Un foyer cumule en moyenne 6 à 8 protections. 3,7 millions
              d'adultes en France ne peuvent pas lire leur contrat d'assurance (ANLCI / INSEE, Enquête IVQ
              2022).
            </Body2>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Sondage quantitatif</H3>
          <Body1 className="w-full text-center font-light">
            Pour recueillir plus de données, on a créé un sondage. Le questionnaire couvrait 4 thèmes : la
            situation administrative, le nombre et la dispersion des contrats, le niveau de compréhension des
            assurances et les préférences pour une solution idéale.
          </Body1>
          <div className="grid w-full max-w-[820px] grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {[
              ['16', 'Questions'],
              ['31', 'Répondants aux profils variés'],
              ['1', 'Semaine, diffusé via WhatsApp (boule de neige)'],
            ].map(([n, label]) => (
              <div key={label} className="flex flex-col gap-1 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <p className="font-syne text-2xl text-white md:text-3xl">{n}</p>
                <Micro1>{label}</Micro1>
              </div>
            ))}
          </div>
          <Micro1>Outil : Google Forms</Micro1>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Résultats du sondage</H3>
          <Body1 className="w-full text-center font-light">
            Ce sondage nous a permis de valider nos 4 hypothèses.
          </Body1>
          <CardGrid cards={surveyResults} />
        </div>

        <div className="flex w-full flex-col gap-4">
          <H3 className="w-full text-center">Insights complémentaires issus du sondage</H3>
          <ul className="mx-auto flex w-full max-w-[820px] flex-col gap-3">
            {[
              "Les participants veulent un endroit unique pour centraliser tous leurs contrats : 84% jugent une plateforme centralisée très utile.",
              "La banque est l'acteur de confiance privilégié, cité en premier devant l'assureur, le conseiller indépendant et l'application digitale.",
              "Comprendre pour choisir soi-même prime sur être conseillé : « Le plus important est de comprendre ce qui se joue à la base pour qu'ensuite je puisse moi-même choisir. »",
              "Une solution purement digitale ne suffit pas : les répondants citent spontanément une application et un conseiller humain, un rendez-vous physique annuel, une messagerie.",
            ].map((it) => (
              <li key={it} className="border-l-2 border-white/15 py-1 pl-4 text-white/80">
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ============ Cible ============ */}
      <div id="cible" className={SECTION}>
        <div className="flex w-full flex-col items-center gap-4">
          <SectionTitle>Cible</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Le sondage nous a guidés vers notre cible : les étrangers en France.
          </Body1>
        </div>

        <div className="w-full max-w-[820px]">
          <Body1 className="w-full text-center font-light">
            Le sondage était ouvert à tous les profils de populations vulnérables, sans cible prédéfinie. On a
            laissé les données parler, et elles nous ont pointés vers une population précise. On a alors
            segmenté cette population selon 3 axes.
          </Body1>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Par statut administratif</H5>
            <Body2>
              Étudiant étranger (visa étudiant) · Travailleur étranger (salarié, indépendant) · Demandeur
              d'asile / réfugié · Résident permanent (carte 10 ans)
            </Body2>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Par ancienneté en France</H5>
            <Body2>Primo-arrivant (moins d'1 an) · En transition (1 à 3 ans) · Établi (3 ans et plus)</Body2>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Par origine géographique</H5>
            <Body2>Union Européenne · Hors UE</Body2>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Matrice de risque</H3>
          <Body1 className="w-full text-center font-light">
            On a scoré chaque profil d'étranger en France sur 10, en croisant 4 critères de vulnérabilité.
          </Body1>
          {/* NEW component — risk matrix (not the Spotify radar) */}
          <RiskMatrix
            rows={[
              { profile: 'Étudiant hors UE, primo-arrivant', origin: 'Hors UE', score: 9 },
              { profile: 'Travailleur hors UE, primo-arrivant', origin: 'Hors UE', score: 8 },
              { profile: 'Résident hors UE, en transition', origin: 'Hors UE', score: 5 },
              { profile: 'Résident permanent hors UE, établi', origin: 'Hors UE', score: 2 },
              { profile: 'Étudiant / travailleur UE', origin: 'UE', score: 3 },
            ]}
          />
          <CalloutBox>
            La matrice parle d'elle-même. Les étrangers non-UE primo-arrivants obtiennent les scores les plus
            élevés : les étudiants hors UE atteignent 9/10, les travailleurs 8/10. Plus l'ancienneté en France
            augmente, plus les scores baissent, et les profils UE restent significativement en dessous. Notre
            cible principale est donc claire : les étrangers non-UE résidant en France, avec une priorité
            donnée aux primo-arrivants.
          </CalloutBox>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Notre cible en 3 profils</H3>
          <Body1 className="w-full text-center font-light">
            La matrice nous a donné une direction. On a ensuite affiné en construisant 3 segments qui
            représentent les étapes du parcours d'un étranger non-UE en France.
          </Body1>
          <CardGrid cards={targetProfiles} cols="md:grid-cols-3" />
        </div>

        {/* Persona primaire — full treatment (same layout as Spotify's Persona) */}
        <div className="flex w-full max-w-[1000px] flex-col gap-8 rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
          <div className="flex w-full flex-col items-center gap-1 text-center">
            <H5 className="!text-purple-pale/70">Persona primaire · Le Primo-Arrivant</H5>
            <H3 className="w-full text-center">Karim El Haddad</H3>
          </div>
          <div className="flex w-full flex-wrap gap-10">
            <div className="shrink-0">
              <img
                src={personaKarim}
                alt="Karim El Haddad"
                className="size-[240px] rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-1 min-w-[280px] flex-col gap-6">
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-2">
                  <H5>Âge</H5>
                  <Body2 className="!text-white font-light">21 ans</Body2>
                </div>
                <div className="flex flex-col gap-2">
                  <H5>Nationalité</H5>
                  <Body2 className="!text-white font-light">Libanais</Body2>
                </div>
                <div className="flex flex-col gap-2">
                  <H5>Occupation</H5>
                  <Body2 className="!text-white font-light">Étudiant en master audiovisuel, Sup de Pub Paris</Body2>
                </div>
              </div>
              <PullQuote tone="purple">
                « Tout le monde lui dit qu'il faut faire des démarches. Mais personne ne lui dit lesquelles,
                dans quel ordre, et comment. »
              </PullQuote>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Bio</H5>
              <Body2>
                Karim vient du Liban, d'un quartier qui s'appelle Naccache. Avec la situation au Liban, il a
                décidé de partir faire son master en audiovisuel à Paris, avec un rêve : devenir réalisateur.
                Il vit avec des colocataires à Villejuif, et c'est la première fois qu'il vit loin de chez lui.
                Paris n'est pas juste une ville pour lui, c'est un engagement sur le long terme.
              </Body2>
            </div>
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Personnalité</H5>
              <Body2>
                Doux et attentionné, il prend soin des gens autour de lui. Aventurier, il a tout quitté pour
                Paris. Mais perfectionniste : quand il a trop de choses à gérer, il se retrouve vite submergé
                et sa to-do list tourne en boucle dans sa tête.
              </Body2>
            </div>
            <div className="flex flex-col gap-2">
              <H5 className="!text-purple-pale/70">Rêves</H5>
              <ul className="list-disc pl-5 text-base leading-6 text-white/70">
                <li>Finir son master et travailler à Paris</li>
                <li>S'installer durablement en France</li>
                <li>Devenir réalisateur</li>
              </ul>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 border-t border-white/10 pt-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <H5>Frustrations</H5>
              <ul className="list-disc pl-6 text-base leading-6 text-white font-light">
                <li>Il se sent submergé facilement quand il y a trop de choses à faire en même temps</li>
                <li>Il n'arrive pas à s'enlever sa to-do list de la tête, loin de sa zone de confort</li>
                <li>Il est surtout dépassé par la quantité de paperasse administrative à faire en France</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <H5>Ce qu'il attend de Par ici</H5>
              <ul className="list-disc pl-6 text-base leading-6 text-white font-light">
                <li>Un guide qui lui explique étape par étape comment s'installer administrativement</li>
                <li>Savoir exactement quoi faire, dans quel ordre, sans chercher partout</li>
                <li>Une source fiable qui le rassure, dans sa langue et sans jargon, accessible depuis son téléphone</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Personas secondaires</H3>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            <SecondaryPersona
              image={personaDorra}
              name="Dorra Mansouri"
              meta="25 ans · Tunisienne · Le Résident en Transition"
              bio="Diplômée d'un master marketing, en pleine recherche d'emploi à Pantin. Son visa étudiant expire bientôt et elle doit déposer une demande d'Autorisation Provisoire de Séjour « recherche d'emploi ». Elle envoie des candidatures le jour, gère ses démarches le soir, et n'a pas le temps de souffler."
              frustrations={[
                "Elle jongle entre recherche d'emploi et démarches urgentes sans savoir par où commencer",
                "Elle ne sait pas si son assurance habitation la protège bien maintenant qu'elle vit seule",
                "Elle a une mutuelle étudiante mais ignore si elle est encore valable hors statut étudiant",
              ]}
              raisons={[
                'Une checklist des démarches urgentes avant l’expiration de son visa',
                'Comprendre vite ce qu’elle a comme couverture et ce qu’il lui manque',
                'Des offres CNP adaptées à sa transition étudiant vers salarié',
              ]}
            />
            <SecondaryPersona
              image={personaJiho}
              name="Park Ji-ho"
              meta="34 ans · Coréen · L'Établi"
              bio="Chef cuisinier dans un restaurant gastronomique parisien, installé à Vincennes depuis 6 ans. Marié, un enfant de 2 ans, et il vient d'acheter sa première voiture. Ses journées commencent à 9h et se terminent rarement avant minuit ; chaque jour de congé compte."
              frustrations={[
                "Il n'a presque pas de temps et ne veut pas le gâcher sur de l'administratif",
                "Il déteste la paperasse et remet toujours le non-urgent à plus tard",
                "Sa vie a changé (famille, voiture) mais ses contrats n'ont pas suivi",
              ]}
              raisons={[
                'Une vue claire sur tous ses contrats d’assurance en un seul endroit',
                'Comprendre ce qui a changé dans sa couverture depuis son arrivée',
                'Une solution simple, sans appeler un conseiller ni perdre de temps',
              ]}
            />
          </div>
        </div>
      </div>

      {/* ============ Recherche qualitative ============ */}
      <div id="recherche-qualitative" className={SECTION}>
        <div className="flex w-full flex-col items-center gap-4">
          <SectionTitle>Recherche qualitative</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Notre cible était définie. Il nous fallait des données qualitatives. Trois segments, trois réalités
            différentes : on a interviewé une personne par segment, un primo-arrivant, un résident en
            transition, un établi.
          </Body1>
        </div>

        <div className="grid w-full max-w-[820px] grid-cols-1 gap-4 text-center sm:grid-cols-3">
          {[
            ['3', 'Entretiens individuels semi-directifs'],
            ['30 à 45 min', 'Par entretien'],
            ['4 blocs', 'Arrivée en France, assurances, langue et compréhension, besoins et solution'],
          ].map(([n, label]) => (
            <div key={label} className="flex flex-col gap-1 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <p className="font-syne text-2xl text-white md:text-3xl">{n}</p>
              <Micro1>{label}</Micro1>
            </div>
          ))}
        </div>
        <Micro1>
          Consentement verbal recueilli avant chaque entretien · Outils : Google Docs, NotebookLM, Recorder
        </Micro1>

        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col items-center gap-4">
            <H3 className="w-full text-center">Restitution et synthèse des entretiens</H3>
            <Body1 className="w-full text-center font-light">
              On a réécouté chaque entretien en détail et construit une table de restitution pour chaque
              interviewé (profil, verbatims clés, besoins, frustrations, notes d'observation). Ce travail a
              dégagé 2 insights qu'on n'avait pas détectés dans le sondage.
            </Body1>
          </div>

          <div className="grid w-full max-w-[820px] grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                n: 'Insight 01',
                statement:
                  'La première souscription est toujours déclenchée par une contrainte externe, jamais par une démarche proactive.',
                verbatim: "« J'ai signé parce qu'il fallait signer. »",
              },
              {
                n: 'Insight 02',
                statement:
                  "L'information sur les droits et obligations circule entre pairs via des réseaux communautaires informels, avant de passer par les canaux officiels.",
                verbatim: "« Tout ce que je sais, c'est grâce au groupe WhatsApp. »",
              },
            ].map((it) => (
              <div
                key={it.n}
                className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
              >
                <H5 className="!text-purple-pale/70">{it.n}</H5>
                <p className="text-base leading-6 text-white/85">{it.statement}</p>
                <Micro1 className="mt-auto italic">{it.verbatim}</Micro1>
              </div>
            ))}
          </div>

          <div className="w-full max-w-[820px] border-l-2 border-purple-pale/50 pl-5 md:pl-6">
            <p className="font-syne text-xl font-medium leading-snug text-white/90 md:text-2xl">
              Les étrangers non-UE en France ne sont pas mal assurés par manque de volonté, mais par manque
              d'information et d'accompagnement au bon moment.
            </p>
          </div>
        </div>

        {/* ResearchOps — boxed methodology note, framing borrowed from « Research Ops · Angry Birds » */}
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col gap-3 rounded-2xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">ResearchOps</H5>
            <H3>Une recherche organisée, centralisée et réutilisable</H3>
            <Body1 className="font-light">
              Tout au long du projet, on a appliqué les principes de ResearchOps pour structurer notre
              démarche. Nos données, insights, personas et artefacts ont été centralisés dans un Research
              Repository accessible à toute l'équipe.
            </Body1>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Google Drive', 'Centralisation des documents'],
              ['Google Forms', 'Diffusion et collecte du sondage quantitatif'],
              ['Google Docs', 'Prise de notes durant les entretiens qualitatifs'],
              ['Recorder', 'Enregistrement des entretiens'],
              ['Figma', 'Organisation visuelle des données, prototypage et UI kit'],
            ].map(([tool, use]) => (
              <div key={tool} className="flex flex-col gap-1 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <H6>{tool}</H6>
                <Body2>{use}</Body2>
              </div>
            ))}
          </div>
          <a
            href={RESEARCH_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm text-link underline decoration-white/30 underline-offset-4 ${focusRing}`}
          >
            Voir le Research Repository
          </a>
        </div>
      </div>

      {/* ============ Problème ============ */}
      <div id="probleme" className="flex flex-col items-center gap-8 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Problème</SectionTitle>
        <p className="mx-auto max-w-[900px] text-center font-syne text-3xl leading-snug text-white md:text-4xl">
          Comment CNP Assurances peut-il devenir le premier point de contact de confiance des étrangers non-UE,
          une des populations les plus exposées à la mal-assurance ?
        </p>
      </div>

      {/* ============ Solution ============ */}
      <div id="solution" className={SECTION}>
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <H5 className="!text-purple-pale/70">La Solution</H5>
          <H3>Par ici, un compagnon administratif et assurantiel indépendant</H3>
          <Body1 className="w-full text-center font-light">
            Par ici est une application indépendante de l'app CNP. Le concept : un compagnon administratif et
            assurantiel pour les étrangers non-UE en France, dès leur arrivée.
          </Body1>
        </div>
        <div className="w-full max-w-[820px]">
          <Body1 className="w-full text-center font-light">
            Arriver dans un nouveau pays, ce n'est pas juste une liste de démarches administratives. C'est une
            nouvelle langue, un nouveau système, un nouvel environnement, souvent sans réseau, sans repères,
            sans savoir par où commencer. Et parmi ces démarches, il y a les assurances : RC Habitation,
            mutuelle, assurance auto, assurance voyage. Des obligations légales que personne n'a expliquées,
            dans une langue juridique que l'utilisateur ne maîtrise pas. C'est exactement là que Par ici
            intervient.
          </Body1>
        </div>
      </div>

      {/* ============ Parcours utilisateur ============ */}
      <div id="parcours" className={SECTION}>
        <div className="flex w-full flex-col items-center gap-4">
          <SectionTitle>Parcours utilisateur</SectionTitle>
          <div className="w-full max-w-[900px]">
            <Body1 className="w-full text-center font-light">
              Il arrive en France → il est submergé par les démarches → il ouvre Par ici → il choisit sa langue
              → il répond à 7 questions sur sa situation → l'app génère sa checklist personnalisée → il clique
              sur une tâche et découvre les offres CNP adaptées → il comprend ce qu'il signe grâce au résumé IA
              → il souscrit et paie directement dans l'app → ses documents et contrats sont centralisés → l'app
              le notifie à chaque étape importante de sa vie en France.
            </Body1>
          </div>
        </div>

        <div className="flex w-full max-w-[900px] flex-col items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <H3 className="w-full text-center">Il s'appelle Karim</H3>
          <Body1 className="text-center font-light">
            Il a 21 ans, il est Libanais et vient d'atterrir à Paris pour commencer son master en audiovisuel.
            C'est la première fois qu'il vit loin de chez lui. Il n'a qu'une valise, un rêve et toute une vie à
            construire dans un pays qu'il ne connaît pas encore. Tout le monde lui dit qu'il faut faire des
            démarches, mais personne ne lui dit lesquelles, dans quel ordre, et comment. Voici comment Par ici
            l'accompagne, écran par écran.
          </Body1>
        </div>

        {/* Interactive stepper — one screen at a time (see WalkthroughStepper note) */}
        <WalkthroughStepper steps={walkthroughSteps} />

        <div className="flex w-full max-w-[900px] flex-col items-center gap-6">
          <PullQuote>Par ici n'est pas un outil. C'est une main tendue.</PullQuote>
          <Body1 className="w-full text-center font-light">
            Karim va utiliser Par ici pour sa première RC Habitation aujourd'hui. Dans deux ans, quand il
            décroche son CDI, il reviendra pour sa mutuelle. Dans cinq ans, quand il achète sa première
            voiture, pour son assurance auto. Dans dix ans, quand il fonde une famille, pour une assurance vie.
            Ce n'est pas une app qu'on utilise une fois. C'est une relation. Et une relation qui dure, pour
            CNP, c'est un client fidèle, qui monte en gamme à chaque étape de sa vie et recommande à toute sa
            communauté.
          </Body1>
        </div>
      </div>

      {/* ============ Direction Artistique ============ */}
      <div id="direction-artistique" className={SECTION}>
        <div className="flex w-full flex-col items-start gap-4">
          <SectionTitle>Direction Artistique</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Technology, human connection, and clarity. Par ici s'adresse à une génération connectée, habituée
            aux interfaces modernes. On voulait un design qui inspire confiance dès le premier regard, sans
            être froid ni corporate. Notre direction artistique puise dans trois idées : la technologie
            accessible, la connexion humaine et la clarté dans la complexité, pour un univers sombre et
            lumineux à la fois. Le bleu qui domine est directement inspiré du logo de CNP Assurances.
          </Body1>
        </div>

        {/* Palette de couleurs */}
        <div className="flex w-full flex-col gap-6 rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
          <H3 className="w-full text-center">Palette de couleurs</H3>
          <Body1 className="w-full text-center font-light">
            On a choisi de mélanger le violet et le bleu plutôt qu'une seule couleur : le bleu seul aurait été
            trop corporate, le violet seul trop dramatique. Ensemble ils créent un univers plus nuancé, avec
            une vraie profondeur. Ce choix prend tout son sens avec le Liquid Glass (iOS 26) : un effet de
            verre translucide et dépoli qui laisse transparaître le dégradé violet/bleu à travers les boutons
            et les cartes.
          </Body1>
          <div className="flex flex-col gap-4">
            <H5 className="!text-purple-pale/70">Couleurs principales</H5>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                ['#1B22A7', 'Primary', 'Bleu foncé, inspiré du logo CNP'],
                ['#4260E6', 'Primary Blue', 'Bleu vif, éléments actifs et interactions'],
                ['#7B96FF', 'Secondary Blue', 'Bleu clair, accents et états secondaires'],
              ].map(([hex, name, use]) => (
                <div key={hex} className="flex flex-col gap-2">
                  <div className="h-16 w-full rounded-xl border border-white/10" style={{ background: hex }} />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">{name}</span>
                    <Micro1>{hex}</Micro1>
                    <Micro1>{use}</Micro1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <H5 className="!text-purple-pale/70">Couleurs fonctionnelles · checklist</H5>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ['#FF4C4C', 'Rouge', 'Tâches urgentes'],
                ['#FFB039', 'Jaune', 'Tâches importantes'],
                ['#4AEC9B', 'Teal', 'Tâches à explorer'],
                ['#2FD634', 'Vert', 'Tâches faites'],
              ].map(([hex, name, use]) => (
                <div key={hex} className="flex flex-col gap-2">
                  <div className="h-16 w-full rounded-xl border border-white/10" style={{ background: hex }} />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">{name}</span>
                    <Micro1>{hex}</Micro1>
                    <Micro1>{use}</Micro1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <H5 className="!text-purple-pale/70">Dégradés &amp; verre</H5>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <div
                  className="h-16 w-full rounded-xl border border-white/10"
                  style={{ background: 'linear-gradient(135deg, #4260E6, #7B42E6)' }}
                />
                <Micro1>Bouton principal · #4260E6 → #7B42E6</Micro1>
              </div>
              <div className="flex flex-col gap-2">
                <div
                  className="h-16 w-full rounded-xl border border-white/10"
                  style={{ background: 'linear-gradient(135deg, #9421CC, #500C80, #1A2EB2, #0D47D1)' }}
                />
                <Micro1>Dégradé fond principal · #9421CC → #7A12A8 · #500C80 → #1A2EB2 → #0D47D1</Micro1>
              </div>
              <div className="flex flex-col gap-2">
                <div
                  className="h-16 w-full rounded-xl border border-white/10"
                  style={{ background: 'rgba(153,171,255,0.15)', backdropFilter: 'blur(8px)' }}
                />
                <Micro1>Liquid Glass · #99ABFF à 15% · verre translucide et dépoli, sur boutons et cartes</Micro1>
              </div>
            </div>
          </div>
          <Micro1>
            Neutres : Blanc #FAFAFA (textes et icônes) · Noir #0D0D0D (fond sombre) · Gris #EAEAEA (éléments
            secondaires)
          </Micro1>
        </div>

        {/* Typographie : Poppins */}
        <div className="flex w-full flex-col gap-6 rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
          <div className="flex w-full flex-col items-center gap-2 text-center">
            <H3>Typographie : Poppins</H3>
            <Micro1>Police géométrique · Google Fonts · Multilingue</Micro1>
          </div>
          <Body1 className="w-full text-center font-light">
            Le choix de Poppins n'est pas anodin. C'est une police géométrique, ronde et lisible, conçue pour
            fonctionner dans toutes les langues et sur tous les écrans. Pour une app qui s'adresse à des
            utilisateurs non francophones, la lisibilité est primordiale.
          </Body1>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4" style={{ fontFamily: 'Poppins, var(--font-sans)' }}>
            {poppinsWeights.map((p) => (
              <div key={p.w} className="flex flex-col items-center gap-1">
                <span className="text-4xl text-white" style={{ fontWeight: Number(p.w) }}>
                  Ag
                </span>
                <Micro1>
                  {p.w} · {p.label}
                </Micro1>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-white/85" style={{ fontFamily: 'Poppins, var(--font-sans)' }}>
            <p className="text-lg tracking-wide">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
            <p className="text-lg tracking-wide">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            <p className="text-lg tracking-wide">0 1 2 3 4 5 6 7 8 9 · ! ? @ # € %</p>
          </div>
        </div>

        {/* Le logo : Par ici */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-6 rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm md:flex-row">
          <div className="shrink-0">
            <img src={compassLogo} alt="Logo « La Boussole »" className="size-[200px]" />
          </div>
          <div className="flex flex-col gap-3">
            <H3 className="!text-xl !leading-normal">Le logo : « La Boussole »</H3>
            <Body1 className="font-light">
              Le logo de Par ici, c'est une boussole. Pas par hasard : une boussole, c'est ce qu'on cherche
              quand on est perdu, quand on ne sait pas par où commencer, quand on a besoin d'une direction.
              C'est exactement ce que ressent un étranger qui arrive en France pour la première fois. Par ici
              est cette boussole : elle pointe dans la bonne direction, elle guide.
            </Body1>
          </div>
        </div>
      </div>

      {/* ============ Prototype ============ */}
      <div id="prototype" className="flex flex-col items-center gap-6 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Prototype</SectionTitle>
        <Body1 className="w-full text-center font-light">
          On a porté tout le concept dans un prototype Figma interactif, de l'onboarding à la souscription.
          À vous de l'explorer.
        </Body1>
        <Button href={FIGMA_PROTO_URL}>Découvrir le prototype</Button>
      </div>

      {/* ============ Valeur stratégique ============ */}
      <div id="valeur-strategique" className={SECTION}>
        <div className="flex w-full flex-col items-center gap-4">
          <SectionTitle>Valeur stratégique</SectionTitle>
          <Body1 className="w-full text-center font-light">
            En quoi Par ici s'inscrit dans la stratégie de CNP ?
          </Body1>
        </div>

        <div className="w-full max-w-[900px]">
          <Body1 className="w-full text-center font-light">
            Par ici ne sort pas de nulle part : CNP Assurances est une filiale à 100% de La Banque Postale
            depuis 2023, et les conseillers LBP distribuent déjà les produits CNP en agence. Par ici ne crée
            pas un nouveau partenariat, elle exploite un lien qui existe déjà pour atteindre une population que
            ni l'un ni l'autre ne touche via ses canaux traditionnels. Le lien fonctionne dans les deux sens :
            un étranger qui arrive ouvre un compte à La Banque Postale, la seule banque française avec une
            mission légale d'accessibilité bancaire, et le conseiller lui parle de Par ici ; à l'inverse, si
            l'app détecte que l'utilisateur n'a pas de compte bancaire, elle lui recommande La Banque Postale.
            Deux portes d'entrée, un même écosystème de confiance, et au centre : CNP Assurances.
          </Body1>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Une app unique sur le marché</H3>
          <Body1 className="w-full text-center font-light">
            Il n'existe rien comme Par ici. Avant de la concevoir, on a regardé ce qui existait, et ce qu'on a
            trouvé confirme qu'il y a un vide. <span className="text-white/50">(✓ Oui · ✕ Non · ◐ Partiel)</span>
          </Body1>
          <ComparisonTable
            columns={[
              'Solution',
              'Checklist administrative',
              'Assurance',
              'Multilingue',
              'Cible non-UE',
              'Acteur public',
            ]}
            rows={[
              ['Francetranger', '✓', '✕', '✕', '◐', '✕'],
              ['Giva', '✕', '✓', '✕', '✕', '✕'],
              ['Portail gouvernemental', '✓', '✕', '✕', '✓', '✓'],
              ['Apps assureurs', '✕', '◐', '✕', '✕', '✕'],
              ['Par ici', '✓', '✓', '✓', '✓', '✓'],
            ]}
          />
          <CalloutBox>
            Par ici occupe un espace vide : aucune solution existante ne combine l'accompagnement
            administratif, la simplification multilingue des contrats et la distribution de produits CNP
            adaptés aux étrangers non-UE.
          </CalloutBox>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">La donnée comme actif stratégique</H5>
            <Body2>
              Par ici ne fait pas que distribuer des assurances, elle apprend. Chaque réponse au QCM, chaque
              offre consultée, chaque contrat souscrit ou refusé donne à CNP une vision précise de ce dont les
              étrangers non-UE ont besoin, à quel moment de leur parcours et avec quel budget. Une donnée que
              CNP ne possède pas aujourd'hui. C'est exactement ce que CNP cherche avec son virage B2C.
            </Body2>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <H5 className="!text-purple-pale/70">Le pari long terme</H5>
            <Body2>
              Les étrangers non-UE représentent 6,5% de la population française, soit près de 4 millions de
              personnes : un segment massif, sous-adressé et structurellement fidèle. La durabilité du modèle
              repose sur trois mécaniques : la loyauté (le premier contact crée une confiance durable),
              l'effet communautaire (propagation sans coût d'acquisition) et la montée en gamme (chaque
              changement de vie est une nouvelle opportunité commerciale).
            </Body2>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">SUAVE : Par ici répond aux critères</H3>
          <CardGrid cards={suave} cols="md:grid-cols-2 lg:grid-cols-3" />
        </div>
      </div>

      {/* ============ Roadmap ============ */}
      <div id="roadmap" className={SECTION}>
        <SectionTitle>Roadmap</SectionTitle>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Priorisation MoSCoW</H3>
          <Body1 className="w-full text-center font-light">Ce qu'on fait, dans quel ordre.</Body1>
          {/* NEW component — MoSCoW 4-column grid */}
          <MoscowGrid
            columns={[
              {
                label: 'Must have',
                note: 'Présent dès le lancement',
                items: [
                  'Onboarding multilingue (27 langues objectif, 10 au lancement)',
                  'QCM profil pour comprendre la situation de l’utilisateur',
                  'Génération de checklist personnalisée',
                  'Page recommandation La Banque Postale',
                  'QCM besoins assurance selon la tâche choisie',
                  'Offres CNP adaptées au profil',
                  'Souscription et paiement intégrés',
                  'Coffre-fort documents et alertes d’expiration',
                  'Notifications proactives de suivi de contrats',
                ],
              },
              {
                label: 'Should have',
                note: 'Rapidement après',
                items: [
                  'Analyse IA des contrats CNP existants',
                  'Messagerie conseiller CNP',
                  'Extension des produits CNP disponibles',
                  'Profil et paramètres complets',
                ],
              },
              {
                label: 'Could have',
                note: 'À moyen terme',
                items: [
                  'Intégration avec les systèmes LBP pour récupération automatique des contrats',
                  'Recommandations proactives basées sur les changements de vie détectés',
                  'Extension à d’autres populations vulnérables',
                ],
              },
              {
                label: "Won't have",
                note: "Pas pour l'instant",
                items: [
                  'Chatbot IA conversationnel',
                  'Comparateur multi-assureurs',
                  'Intégration avec d’autres banques que LBP',
                ],
              },
            ]}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Déploiement total : 11 mois</H3>
          <Body1 className="w-full text-center font-light">
            8 phases, des conventions de partenariat jusqu'au lancement officiel sur les stores et à la
            consolidation.
          </Body1>
          {/* NEW component — numbered-circle roadmap timeline, DarkHeaderCard bodies */}
          <RoadmapTimeline phases={roadmapPhases} />
        </div>
      </div>

      {/* ============ Budget ============ */}
      <div id="budget" className={SECTION}>
        <div className="flex w-full flex-col items-center gap-4">
          <SectionTitle>Budget</SectionTitle>
          <Body1 className="w-full text-center font-light">
            Déploiement sur 11 mois · CNP Assurances × La Banque Postale · deux scénarios comparatifs.
          </Body1>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <BudgetCard
            title="Scénario 1 · Équipe interne CNP + expertises externes"
            total="88 324 € (≈ 90 000 €)"
            lines={[
              { label: 'Équipe projet (chef de projet, dev, design, RGPD, internalisé)', amount: '0 €' },
              { label: 'A · Ressources humaines externes (IA, juridique, cartographie)', amount: '42 000 €' },
              { label: 'B · Infrastructure et outils (AWS, API IA, Stripe, stores)', amount: '18 324 €' },
              { label: 'C · Beta testing et lancement (testeurs, formation LBP, com.)', amount: '18 000 €' },
              { label: 'D · Consolidation et scale sur 5 mois (support multilingue)', amount: '10 000 €' },
            ]}
          />
          <BudgetCard
            title="Scénario 2 · Équipe entièrement externalisée (freelances)"
            total="371 924 € (≈ 370 000 €)"
            lines={[
              { label: 'A · Équipe projet freelances (PO, UX/UI, mobile, backend, IA, RGPD)', amount: '289 600 €' },
              { label: 'B · Expertises ponctuelles externes (juridique, cartographie)', amount: '12 000 €' },
              { label: 'C · Infrastructure et outils', amount: '18 324 €' },
              { label: 'D · Beta testing et lancement', amount: '18 000 €' },
              { label: 'E · Consolidation et scale sur 5 mois (maintenance + support)', amount: '34 000 €' },
            ]}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <H3 className="w-full text-center">Récapitulatif comparatif</H3>
          {/* ComparisonTable for the line-by-line recap (AncienNouveauCompare
              is an image-pair component; see summary) */}
          <ComparisonTable
            columns={['Poste', 'Scénario 1 · équipe interne', 'Scénario 2 · équipe externe']}
            rows={[
              ['Équipe projet', '0 € (internalisé CNP)', '289 600 €'],
              ['Expertises externes ponctuelles', '42 000 €', '12 000 €'],
              ['Infrastructure et outils', '18 324 €', '18 324 €'],
              ['Beta testing et lancement', '18 000 €', '18 000 €'],
              ['Consolidation et scale (5 mois)', '10 000 €', '34 000 €'],
              ['Total exact', '88 324 € (≈ 90 000 €)', '371 924 € (≈ 370 000 €)'],
            ]}
          />
        </div>
      </div>

      {/* ============ Conclusion ============ */}
      <div id="conclusion" className="flex flex-col items-center gap-8 p-8 md:py-16 md:pb-32 md:px-[var(--nav-edge-w)]">
        <SectionTitle>Conclusion</SectionTitle>
        <Body1 className="w-full text-center font-light">
          Avec Par ici, CNP se positionne comme le premier point de confiance des étrangers non-UE en France.
          4 millions d'entre eux vivent ici, parmi les populations les plus exposées à la mal-assurance, et
          jusqu'ici personne ne s'est vraiment occupé d'eux. Par ici change ça : être là au bon moment, dès le
          premier jour, avant la concurrence. Cette relation qui commence avec une RC Habitation à 21 ans peut naturellement évoluer :
          une mutuelle, une assurance auto, une assurance vie, une retraite.
        </Body1>
        <Body1 className="w-full text-center font-light">
          Mais ce qui nous touche le plus, c'est ce que ça représente au-delà des chiffres. 4 millions de
          personnes bien assurées, c'est 4 millions de personnes qui peuvent tomber malades sans s'endetter,
          avoir un accident sans tout perdre, s'installer en France sans vivre dans l'angoisse de l'inconnu.
          C'est une société qui accueille vraiment, pas juste administrativement.
        </Body1>
        <Epigraph>
          « La confiance pousse lentement. Mais une fois enracinée, elle devient difficile à ébranler. »
        </Epigraph>
        <PullQuote tone="purple">Avec Par ici, on a voulu planter cette graine.</PullQuote>
      </div>

      <Contact transparent />

      {videoOpen && (
        <VideoModal onClose={() => setVideoOpen(false)}>
          <video
            ref={videoRef}
            src={introVideo}
            poster={introVideoThumb}
            preload="metadata"
            controls
            autoPlay
            className="max-h-[80vh] max-w-[90vw] cursor-default rounded-lg"
          />
          <div className="flex items-center gap-2">
            {[0.5, 1, 1.25, 1.5, 2].map((rate) => (
              <Button
                key={rate}
                variant="filter"
                active={playbackRate === rate}
                onClick={() => {
                  setPlaybackRate(rate)
                  if (videoRef.current) videoRef.current.playbackRate = rate
                }}
              >
                {rate}x
              </Button>
            ))}
          </div>
        </VideoModal>
      )}
    </div>
  )
}
