/**
 * One-shot asset optimizer: every raster under src/assets/ (except fonts/) is
 * re-encoded to WebP, capped to a sane pixel size for how it's actually shown,
 * and the original PNG/JPEG is deleted. After running, update the `.png`/`.jpg`
 * import specifiers (and `import.meta.glob` patterns) to `.webp`.
 *
 *   node scripts/optimize-images.mjs           # convert + delete originals
 *   node scripts/optimize-images.mjs --dry     # report only
 *
 * Re-runnable: drop new PNG/JPEGs into src/assets/ and run again.
 */
import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import { join, relative, extname } from 'node:path'
import sharp from 'sharp'

const ROOT = 'src/assets'
const DRY = process.argv.includes('--dry')

/** Longest-side pixel cap, by role. Everything renders inside a 1440px layout;
 *  2048 covers 2× DPR even in the fullscreen lightbox. */
function capFor(path, w, h) {
  if (path.includes('/tools/') || path.includes('\\tools\\')) return 320
  const ar = w / h
  if (ar >= 2.8 || ar <= 1 / 2.8) return 4096 // wide panoramas (scrolled timelines)
  return 2048
}

let count = 0
let before = 0
let after = 0

async function processFile(path) {
  const rel = relative(ROOT, path)
  const src = readFileSync(path)
  const img = sharp(src, { failOn: 'none' })
  const meta = await img.metadata()
  const stats = await img.stats()
  const cap = capFor(path, meta.width, meta.height)
  const longest = Math.max(meta.width, meta.height)
  const willResize = longest > cap

  let pipeline = sharp(src, { failOn: 'none' }).rotate()
  if (willResize) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? cap : undefined,
      height: meta.height > meta.width ? cap : undefined,
      withoutEnlargement: true,
      fit: 'inside',
    })
  }
  const opaque = stats.isOpaque
  pipeline = pipeline.webp({
    quality: opaque ? 80 : 82,
    alphaQuality: 92,
    effort: 6,
  })

  const out = await pipeline.toBuffer({ resolveWithObject: true })
  const outPath = path.replace(/\.(png|jpe?g)$/i, '.webp')

  before += src.length
  after += out.data.length
  count++
  const tag = willResize ? `${meta.width}×${meta.height} → ${out.info.width}×${out.info.height}` : `${meta.width}×${meta.height}`
  console.log(
    `${(src.length / 1024).toFixed(0).padStart(6)}KB → ${(out.data.length / 1024).toFixed(0).padStart(5)}KB  ${opaque ? 'opaque' : ' alpha'}  ${tag.padEnd(22)}  ${rel}`,
  )

  if (!DRY) {
    writeFileSync(outPath, out.data)
    if (extname(path).toLowerCase() !== '.webp') unlinkSync(path)
  }
}

const files = []
;(function collect(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'fonts') continue
      collect(path)
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) files.push(path)
  }
})(ROOT)

for (const f of files) await processFile(f)

console.log(
  `\n${count} files  ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024 / 1024).toFixed(1)}MB  (saved ${((1 - after / before) * 100).toFixed(1)}%)${DRY ? '  [dry run, nothing written]' : ''}`,
)
