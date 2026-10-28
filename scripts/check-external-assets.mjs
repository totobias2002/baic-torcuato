// Falla el build si el bundle carga archivos (imagenes, video, js, css, fuentes, pdf)
// desde otro dominio. Todo asset tiene que vivir en nuestro servidor (public/media/...):
// BAIC Argentina ya nos pidio que no usemos su servidor. Los links de navegacion
// (instagram, drive, concesionarias) no cuentan: solo URLs que terminan en extension de archivo.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const ASSET = /https?:\/\/[^\s'"`<>)]+?\.(?:jpe?g|png|webp|gif|svg|mp4|webm|mp3|pdf|css|js|mjs|woff2?|ttf|otf)(?=[?#'"`\s)<>]|$)/gi

const files = []
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) { if (e.name !== 'media') walk(p) } else if (/\.(js|css|html|webmanifest)$/.test(e.name)) files.push(p)
  }
}
walk(dist)

const problems = []
for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8')
  for (const m of txt.match(ASSET) || []) problems.push(`${path.relative(dist, f)}: ${m}`)
  for (const m of txt.match(/https?:\/\/(?:[\w-]+\.)*(?:baic|arcfox)\.com\.ar\/(?:wp-content|wp-includes|bj40pro)[^\s'"`<>)]*/gi) || []) problems.push(`${path.relative(dist, f)}: ${m}`)
}

// Rutas /media/... escritas completas en el codigo tienen que existir en el build.
const bundle = files.filter((f) => /\.(js|css|html)$/.test(f)).map((f) => fs.readFileSync(f, 'utf8')).join('\n')
for (const m of new Set(bundle.match(/\/media\/[\w./%-]+\.(?:jpe?g|png|webp|gif|svg|mp4|webm|mp3|pdf|css|js|woff2?)/gi) || [])) {
  if (!fs.existsSync(path.join(dist, m))) problems.push(`falta en dist: ${m}`)
}

if (problems.length) {
  console.error(`\n✖ Assets externos o faltantes (${problems.length}):\n` + [...new Set(problems)].slice(0, 30).map((p) => '  ' + p).join('\n'))
  console.error('\nBajalos a public/media/<sitio>/ y usá la ruta /media/... en el codigo.\n')
  process.exit(1)
}
console.log('✔ Sin assets externos en dist')
