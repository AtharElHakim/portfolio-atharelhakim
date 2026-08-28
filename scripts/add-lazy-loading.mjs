/**
 * Adds `loading="lazy"` + `decoding="async"` to every <img> in src/**.tsx that
 * doesn't already set `loading`. After running, revert the handful of
 * above-the-fold hero images to eager by hand (Hero, AboutPage portrait,
 * OrealPage hero, AngryBirdsPage hero) and give them `fetchPriority="high"`.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const files = []
;(function collect(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) collect(p)
    else if (e.name.endsWith('.tsx')) files.push(p)
  }
})('src')

let total = 0
for (const f of files) {
  const src = readFileSync(f, 'utf8')
  // Match <img ...> or <img ... /> including across newlines, non-greedy.
  const out = src.replace(/<img\b([^>]*?)(\/?>)/gs, (m, attrs, close) => {
    if (/\bloading=/.test(attrs)) return m
    total++
    return `<img loading="lazy" decoding="async"${attrs}${close}`
  })
  if (out !== src) writeFileSync(f, out)
}
console.log(`Added loading="lazy" to ${total} <img> tags.`)
