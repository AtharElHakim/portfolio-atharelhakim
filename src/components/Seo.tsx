/**
 * Per-route <head> metadata. React 19 hoists <title>/<meta>/<link> rendered
 * anywhere in the tree into the document <head>, so every page just renders
 * <Seo /> near the top of its markup.
 *
 * SCOPE: social scrapers (LinkedIn, WhatsApp, Slack, iMessage…) don't execute
 * JS, so they read the *static* defaults baked into index.html, not what this
 * component injects at runtime. <Seo /> gives per-page titles/descriptions to
 * browser tabs and to search engines that render JS (Google). True per-page
 * social previews would need build-time prerendering — tracked as a follow-up.
 */

/** Canonical origin. Keep in sync with the og:/twitter: URLs in index.html. */
export const SITE_URL = 'https://atharelhakim.com'

const SITE_NAME = 'Athar El Hakim'

interface SeoProps {
  /** Page-specific title; " · Athar El Hakim" is appended unless `bareTitle`. */
  title: string
  description: string
  /** Route path for the canonical URL, e.g. "/projects/loreal". */
  path: string
  /** Use `title` verbatim (home page owns its full title string). */
  bareTitle?: boolean
  /** Keep this route out of search indexes (404). */
  noindex?: boolean
}

export default function Seo({ title, description, path, bareTitle, noindex }: SeoProps) {
  const fullTitle = bareTitle ? title : `${title} · ${SITE_NAME}`
  const url = `${SITE_URL}${path}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </>
  )
}
