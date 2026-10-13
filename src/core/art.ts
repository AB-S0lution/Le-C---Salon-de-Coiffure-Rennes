// Original SVG engravings drawn for this site (no photos, no client assets, no logo tracing).
// Ink layers use currentColor; colour layers use the palette sampled from the real room.

const INK = 'fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"'

/** Shared defs: hatching patterns and gradients, injected once per document. */
export function spriteDefs(): string {
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
  <pattern id="hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(38)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width=".7" opacity=".55"/></pattern>
  <pattern id="hatch2" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)"><line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" stroke-width=".6" opacity=".5"/></pattern>
  <pattern id="stone" width="36" height="18" patternUnits="userSpaceOnUse"><path d="M0 .5H36M0 9.5H36M18 .5V9.5M0 9.5V18M36 9.5V18" fill="none" stroke="currentColor" stroke-width=".6" opacity=".5"/></pattern>
  <pattern id="slate" width="14" height="9" patternUnits="userSpaceOnUse"><path d="M0 8.5H14M7 .5V8.5M0 .5H14" fill="none" stroke="currentColor" stroke-width=".6" opacity=".55"/></pattern>
  <pattern id="cobble" width="22" height="12" patternUnits="userSpaceOnUse"><path d="M2 3q9-3 18 0q2 4-1 7q-8 2-16 0q-3-3-1-7z" fill="none" stroke="currentColor" stroke-width=".6" opacity=".5"/></pattern>
  <linearGradient id="balayage" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b9582e"/><stop offset=".45" stop-color="#e69a62"/><stop offset=".7" stop-color="#b2679a"/><stop offset="1" stop-color="#f0dcae"/></linearGradient>
  </defs></svg>`
}

/** Hexagonal tomette floor as a CSS background image (data URI). `color` is a hex like #BA936D. */
export function hexBg(color = '#BA936D', opacity = 0.5): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'><g fill='${color}' fill-opacity='${opacity}' fill-rule='nonzero'><path d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/></g></svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/* ---------------------------------------------------------------- Façade */

type Layer = 'ink' | 'col' | 'brush'

export function facade(layer: Layer): string {
  const vb = 'viewBox="0 0 400 520"'
  if (layer === 'ink') {
    return `<svg class="facade facade-ink" ${vb} role="img" aria-labelledby="fa-t" ${INK} stroke-width="1.5">
<title id="fa-t">Gravure de la façade du salon : une maison à pans de bois, une double porte, des jardinières</title>
<g class="draw">
 <!-- roof -->
 <path d="M26 118 200 20 374 118"/>
 <path d="M44 112 200 28 356 112" opacity=".6"/>
 <path d="M30 118H370"/>
 <path d="M60 104 200 28 340 104L360 118H40Z" fill="url(#slate)" stroke="none"/>
 <path d="M168 62v-34h10v34M222 62v-34h10v34" opacity=".7"/>
 <!-- jettied upper floor, timber frame -->
 <rect x="30" y="118" width="340" height="150"/>
 <path d="M30 118V268M115 118V268M200 118V268M285 118V268M370 118V268"/>
 <path d="M30 192H370"/>
 <path d="M30 118 115 192M115 118 30 192M285 118 370 192M370 118 285 192"/>
 <path d="M115 268 200 192M285 268 200 192" opacity=".8"/>
 <!-- upper windows -->
 <rect x="52" y="206" width="44" height="50"/><path d="M74 206V256M52 231H96"/>
 <rect x="304" y="206" width="44" height="50"/><path d="M326 206V256M304 231H348"/>
 <rect x="150" y="206" width="100" height="50"/><path d="M175 206V256M200 206V256M225 206V256M150 231H250"/>
 <rect x="52" y="132" width="44" height="46"/><path d="M74 132V178"/>
 <rect x="304" y="132" width="44" height="46"/><path d="M326 132V178"/>
 <path d="M150 132q50-24 100 0v46H150Z"/><path d="M200 112V178"/>
 <!-- corbels -->
 <path d="M30 268 52 292 70 268M115 268 130 288 145 268M200 268 215 288 230 268M285 268 270 288 255 268M370 268 348 292 330 268"/>
 <path d="M30 268H370M36 274H364" opacity=".7"/>
 <!-- stone ground floor -->
 <rect x="48" y="290" width="304" height="200" fill="url(#stone)"/>
 <path d="M48 290H352V490H48Z"/>
 <!-- windows ground floor -->
 <rect x="70" y="330" width="62" height="86"/><path d="M101 330V416M70 373H132"/>
 <rect x="268" y="330" width="62" height="86"/><path d="M299 330V416M268 373H330"/>
 <!-- double door in an arch -->
 <path d="M158 490V362q0-34 42-34t42 34V490Z"/>
 <path d="M200 328V490"/>
 <path d="M168 490V366q0-26 32-26M232 490V366q0-26-32-26" opacity=".7"/>
 <path d="M172 410h22M206 410h22M172 440h22M206 440h22" opacity=".6"/>
 <circle cx="190" cy="426" r="2.5"/><circle cx="210" cy="426" r="2.5"/>
 <!-- planters -->
 <path d="M66 424h70l-6 36H72ZM264 424h70l-6 36h-58Z"/>
 <path d="M72 460H130M270 460H328" opacity=".5"/>
 <path d="M80 424q-6-26 4-44M100 424q2-34-6-52M120 424q8-24 2-40M282 424q-4-22 6-38M304 424q4-30-2-48M324 424q6-22 0-34"/>
 <path d="M52 330q-10 40 4 92M348 330q8 44-4 92" opacity=".7"/>
 <!-- hanging blade sign -->
 <path d="M352 306h40M376 306v8"/>
 <rect x="360" y="314" width="34" height="44"/>
 <!-- lantern box -->
 <path d="M24 300h22v26H24ZM28 300 35 292 42 300"/>
 <!-- cobbles -->
 <path d="M0 490H400"/>
 <rect x="0" y="490" width="400" height="30" fill="url(#cobble)" stroke="none"/>
</g>
<g class="hatch-shade" stroke="none">
 <rect x="30" y="118" width="40" height="150" fill="url(#hatch)"/>
 <rect x="300" y="268" width="52" height="222" fill="url(#hatch2)" opacity=".7"/>
 <rect x="158" y="330" width="42" height="160" fill="url(#hatch)" opacity=".5"/>
</g>
<text x="377" y="341" text-anchor="middle" font-family="'Cormorant SC','Cormorant Garamond',serif" font-size="9" letter-spacing=".08em" fill="currentColor" stroke="none">LE C.</text>
</svg>`
  }
  if (layer === 'col') {
    return `<svg class="facade facade-col" ${vb} aria-hidden="true" focusable="false">
<path d="M158 490V362q0-34 42-34t42 34V490Z" fill="#0E3F62"/>
<path d="M200 328V490" stroke="#141A1C" stroke-width="1.5"/>
<g fill="none" stroke="#0E3F62" stroke-width="5">
 <rect x="52" y="206" width="44" height="50"/><rect x="304" y="206" width="44" height="50"/><rect x="150" y="206" width="100" height="50"/>
 <rect x="70" y="330" width="62" height="86"/><rect x="268" y="330" width="62" height="86"/>
 <rect x="52" y="132" width="44" height="46"/><rect x="304" y="132" width="44" height="46"/>
</g>
<path d="M66 424h70l-6 36H72ZM264 424h70l-6 36h-58Z" fill="#0E3F62"/>
<g fill="#4f7a55" opacity=".95">
 <ellipse cx="84" cy="384" rx="9" ry="22"/><ellipse cx="100" cy="376" rx="9" ry="28"/><ellipse cx="119" cy="388" rx="8" ry="20"/>
 <ellipse cx="286" cy="390" rx="8" ry="20"/><ellipse cx="303" cy="378" rx="9" ry="28"/><ellipse cx="322" cy="392" rx="8" ry="18"/>
 <ellipse cx="54" cy="372" rx="6" ry="44"/><ellipse cx="348" cy="372" rx="6" ry="44"/>
</g>
<g fill="#CF6D76"><circle cx="54" cy="350" r="4"/><circle cx="52" cy="384" r="4"/><circle cx="348" cy="356" r="4"/><circle cx="350" cy="392" r="4"/><circle cx="100" cy="352" r="4"/><circle cx="303" cy="350" r="4"/></g>
<rect x="360" y="314" width="34" height="44" fill="#141A1C"/>
<text x="377" y="341" text-anchor="middle" font-family="'Cormorant SC','Cormorant Garamond',serif" font-size="9" letter-spacing=".08em" fill="#EEF0EC">LE C.</text>
<g class="glow" fill="#E8B65C"><rect x="52" y="206" width="44" height="50"/><rect x="304" y="206" width="44" height="50"/><rect x="150" y="206" width="100" height="50"/><rect x="70" y="330" width="62" height="86"/><rect x="268" y="330" width="62" height="86"/></g>
</svg>`
  }
  return `<svg class="facade facade-brush" ${vb} aria-hidden="true" focusable="false">
<g fill="url(#balayage)" opacity=".85"><rect x="30" y="118" width="340" height="150"/><path d="M26 118 200 20 374 118Z"/><rect x="48" y="290" width="304" height="200"/></g></svg>`
}

/* ---------------------------------------------------------------- Cherry tree */

export function tree(): string {
  const petals = Array.from({ length: 70 }, (_, i) => {
    const a = (i * 137.5) * Math.PI / 180
    const rr = Math.sqrt(i / 70) * 120
    const x = 200 + Math.cos(a) * rr * 1.25
    const y = 150 + Math.sin(a) * rr * 0.8
    const r = 10 + ((i * 7) % 9)
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}"/>`
  }).join('')
  return `<svg class="tree" viewBox="0 0 400 420" role="img" aria-labelledby="tr-t" ${INK} stroke-width="1.5">
<title id="tr-t">Gravure d’un cerisier en fleurs</title>
<g class="draw"><path d="M200 400V250q-2-40-30-70M200 300q30-30 50-70M200 270q-34-24-60-60M200 340l-30-20M200 340l26-18"/>
<path d="M170 400h60M150 410h100" opacity=".6"/></g>
<g class="col-tree" fill="#CF6D76" stroke="none" opacity=".88">${petals}</g>
<g class="petals" fill="#CF6D76" stroke="none">${Array.from({ length: 8 }, (_, i) => `<ellipse class="petal p${i}" cx="${110 + i * 26}" cy="${230 + (i % 3) * 14}" rx="5" ry="3"/>`).join('')}</g>
</svg>`
}

/* ---------------------------------------------------------------- Reclining wash chair */

export function chair(): string {
  return `<svg class="chair" viewBox="0 0 400 300" role="img" aria-labelledby="ch-t" ${INK} stroke-width="1.5">
<title id="ch-t">Gravure d’un fauteuil de shampooing incliné avec un appui-nuque molletonné</title>
<g class="draw">
 <path d="M60 250H340"/><path d="M110 250V210M290 250V210"/>
 <path d="M70 200q40-10 110-6 80 4 130 20"/>
 <path d="M70 200q-6 22 40 30h170q40-4 40-26"/>
 <path d="M300 214 330 150q8-20 24-10"/>
 <path d="M70 200 60 140q-2-26 16-34"/>
 <path d="M60 140q-6-50 36-70 36-14 66 4" />
 <path d="M96 70q40-30 78-4" opacity=".6"/>
 <!-- neck rest padded -->
 <path d="M300 160q26-30 56-6l6 22q-30 24-58 4Z" fill="url(#hatch)"/>
 <path d="M312 156q10 14 4 36M330 150q10 12 6 36" opacity=".6"/>
 <!-- basin -->
 <path d="M326 210q20 8 36 40H300q-8-24 26-40Z"/>
 <path d="M340 150q-40-60-14-92" opacity=".8"/>
 <!-- steam -->
 <path d="M150 52q-10-14 0-26M172 50q-10-14 0-26M194 52q-10-14 0-26" opacity=".5"/>
</g></svg>`
}

/* ---------------------------------------------------------------- Toile river scene */

export function river(): string {
  return `<svg class="river" viewBox="0 0 480 300" role="img" aria-labelledby="ri-t" ${INK} stroke-width="1.2">
<title id="ri-t">Gravure d’un paysage de rivière avec un pont et une barque</title>
<g class="draw">
 <path d="M0 214q60-10 120-4t120-2 120 6 120-2"/>
 <path d="M0 232q60-8 120-2t120-2 120 4 120-2" opacity=".7"/>
 <path d="M0 252q80-6 160 0t160-2 160 2" opacity=".5"/>
 <path d="M60 214V160q30-40 60 0v54M120 214V160q30-40 60 0v54M180 214V160q30-40 60 0v54"/>
 <path d="M50 160H250M50 150H250"/>
 <path d="M250 160q30-30 80-30" opacity=".8"/>
 <path d="M300 250q40 18 90 0l-12-18h-66Z"/><path d="M345 232V196l26 32" />
 <path d="M370 130q10-36 40-40 18 6 24 30M390 130v40" opacity=".9"/>
 <path d="M30 150q8-30 30-34 14 8 14 34M52 150v34" opacity=".9"/>
 <path d="M410 214q20-30 50-24" opacity=".7"/>
 <rect x="2" y="2" width="476" height="296" opacity=".6"/>
</g>
<rect x="60" y="150" width="190" height="64" fill="url(#hatch)" stroke="none" opacity=".6"/>
</svg>`
}

/* ---------------------------------------------------------------- Small vignettes */

export function bottle(): string {
  return `<svg class="vig" viewBox="0 0 200 240" role="img" aria-label="Flacon à pompe en verre" ${INK} stroke-width="1.5"><g class="draw">
<path d="M80 80h40v22q24 12 24 40v70q0 14-14 14H70q-14 0-14-14v-70q0-28 24-40Z"/><path d="M92 80V56h16v24M92 56h-18l-8-8M100 40h24v10"/><path d="M62 150h76M62 190h76" opacity=".5"/></g>
<path d="M62 150h76v62q0 14-14 14H76q-14 0-14-14Z" fill="url(#hatch)" stroke="none" opacity=".6"/></svg>`
}
export function scissors(): string {
  return `<svg class="vig" viewBox="0 0 200 240" role="img" aria-label="Ciseaux de coiffeur" ${INK} stroke-width="1.5"><g class="draw">
<circle cx="70" cy="190" r="22"/><circle cx="130" cy="190" r="22"/><path d="M82 170 140 40q4-10 10-4t0 12L100 172M118 170 60 40q-4-10-10-4t0 12L100 172"/><circle cx="100" cy="170" r="3"/></g></svg>`
}
export function bulbs(): string {
  return `<svg class="vig" viewBox="0 0 200 240" role="img" aria-label="Ampoules à filament suspendues" ${INK} stroke-width="1.5"><g class="draw">
<path d="M0 20q50 30 100 6t100 12"/><path d="M50 36v34M100 26v60M150 30v44"/>
<path d="M42 70h16v10q12 8 12 22 0 14-20 14t-20-14q0-14 12-22Z" transform="translate(-4 0)"/>
<path d="M92 86h16v10q14 8 14 24 0 16-22 16t-22-16q0-16 14-24Z"/>
<path d="M142 74h16v10q12 8 12 22 0 14-20 14t-20-14q0-14 12-22Z" transform="translate(4 0)"/>
<path d="M92 120q8-8 16 0M44 110q6-6 12 0M144 110q6-6 12 0" opacity=".6"/></g>
<g fill="#E8B65C" stroke="none" class="glow"><circle cx="46" cy="106" r="9" opacity=".45"/><circle cx="100" cy="122" r="11" opacity=".45"/><circle cx="150" cy="108" r="9" opacity=".45"/></g></svg>`
}
export function birdcage(): string {
  return `<svg class="vig" viewBox="0 0 200 240" role="img" aria-label="Cage à oiseaux dorée" ${INK} stroke-width="1.4"><g class="draw">
<path d="M100 10V44M100 44q-50 6-52 60 0 54 52 80 52-26 52-80-2-54-52-60Z"/><path d="M100 44V184M76 52q-14 60 24 132M124 52q14 60-24 132M60 90H140M54 130H146M68 164H132"/><path d="M70 184H130" /></g>
<ellipse cx="100" cy="196" rx="34" ry="8" fill="url(#hatch)" stroke="none"/></svg>`
}
export function beams(): string {
  return `<svg class="vig" viewBox="0 0 200 240" role="img" aria-label="Poutres et pan de bois" ${INK} stroke-width="1.6"><g class="draw">
<rect x="20" y="20" width="160" height="200"/><path d="M20 80H180M20 150H180M100 20V220M20 20 100 80 180 20M20 220 100 150 180 220"/></g>
<rect x="20" y="20" width="160" height="60" fill="url(#hatch)" stroke="none" opacity=".5"/></svg>`
}
export function fireplace(): string {
  return `<svg class="vig" viewBox="0 0 200 240" role="img" aria-label="Cheminée ancienne" ${INK} stroke-width="1.5"><g class="draw">
<path d="M20 220V70h160V220M10 70H190M14 58H186M30 58V40H170V58"/><path d="M52 220V120q0-34 48-34t48 34V220"/><path d="M70 220q10-30 30-30t30 30M84 200q8-24 16-24"/></g>
<path d="M52 120q0-34 48-34t48 34V220H52Z" fill="url(#hatch2)" stroke="none" opacity=".6"/></svg>`
}
export function monogram(letter: string): string {
  return `<svg class="mono" viewBox="0 0 160 200" role="img" aria-label="Monogramme ${letter}"><path d="M10 200V90q0-80 70-80t70 80V200Z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M24 200V92q0-66 56-66t56 66V200" fill="none" stroke="currentColor" stroke-width=".7" opacity=".5"/><text x="80" y="128" text-anchor="middle" font-family="'Cormorant Garamond',serif" font-size="78" font-style="italic" font-weight="300" fill="currentColor">${letter}</text></svg>`
}

/** Name -> vignette for journal posts */
export function vignette(name: string): string {
  switch (name) {
    case 'facade': return facade('ink')
    case 'chair': return chair()
    case 'tree': return tree()
    case 'river': return river()
    case 'bottle': return bottle()
    case 'beams': return beams()
    case 'scissors': return scissors()
    case 'bulbs': return bulbs()
    case 'birdcage': return birdcage()
    default: return strand([['#4a3426', '#a97b52', '#e1bf8a']], 0.2, 5, 'long', 'v' + name)
  }
}

/* ---------------------------------------------------------------- Strand compositions (gallery, balayage) */

function prng(seed: number): () => number {
  let s = seed * 9301 + 49297
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export function strand(stops: string[][] | string[], curl: number, seed: number, cut: 'blunt' | 'layers' | 'bob' | 'long', id: string, count = 22): string {
  const st = (Array.isArray(stops[0]) ? stops[0] : stops) as string[]
  const rnd = prng(seed)
  const W = 300, H = 380
  const paths: string[] = []
  for (let i = 0; i < count; i++) {
    const x0 = 70 + (i / (count - 1)) * 160
    const x0j = x0 + (rnd() - 0.5) * 4
    let len: number
    switch (cut) {
      case 'blunt': len = 300; break
      case 'bob': len = 150 + Math.abs(i - count / 2) * -3 + 60; break
      case 'layers': len = 210 + (rnd() - 0.5) * 90; break
      default: len = 300 + (rnd() - 0.5) * 50
    }
    const amp = 6 + curl * 26
    const waves = 1 + curl * 3.2
    let d = `M${x0j.toFixed(1)} 30`
    const steps = 14
    for (let k = 1; k <= steps; k++) {
      const t = k / steps
      const y = 30 + t * len
      const sway = Math.sin(t * Math.PI * waves + i * 0.6 + seed) * amp * t + (x0j - 150) * 0.28 * t
      d += ` L${(x0j + sway).toFixed(1)} ${y.toFixed(1)}`
    }
    paths.push(`<path d="${d}" stroke-width="${(1.4 + rnd() * 1.6).toFixed(2)}" opacity="${(0.72 + rnd() * 0.28).toFixed(2)}"/>`)
  }
  const gid = `sg-${id}`
  return `<svg class="strands" viewBox="0 0 ${W} ${H}" role="img" aria-label="Illustration de mèches" fill="none" stroke="url(#${gid})" stroke-linecap="round" stroke-linejoin="round">
<defs><linearGradient id="${gid}" x1="0" y1="30" x2="0" y2="${H - 20}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${st[0]}"/><stop offset=".55" stop-color="${st[1]}"/><stop offset="1" stop-color="${st[2] ?? st[1]}"/></linearGradient></defs>
<path d="M58 30Q150 8 242 30" stroke="currentColor" stroke-width="1" opacity=".5"/>
${paths.join('')}</svg>`
}

/** Swatch strand: a single column of gradient lines, used in the nuancier. */
export function swatchStrand(stops: [string, string, string], id: string): string {
  const lines = Array.from({ length: 11 }, (_, i) => {
    const x = 20 + i * 16
    const w = 8 + ((i * 5) % 9)
    return `<path d="M${x} 0q${i % 2 ? w : -w} 110 ${i % 3 === 0 ? 4 : -4} 300" stroke-width="${i % 2 ? 6 : 4}"/>`
  }).join('')
  return `<svg class="swatch-art" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" fill="none" stroke="url(#sw-${id})" stroke-linecap="round">
<defs><linearGradient id="sw-${id}" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${stops[0]}"/><stop offset=".55" stop-color="${stops[1]}"/><stop offset="1" stop-color="${stops[2]}"/></linearGradient></defs>${lines}</svg>`
}

/* ---------------------------------------------------------------- Head profile for « La Mesure » */

export function headProfile(): string {
  // viewBox 0 0 220 420. Marks (y): oreilles 118, épaules 232, niveau épaules 270, omoplates 330
  return `<svg class="profile" viewBox="0 0 220 420" role="img" aria-label="Profil d’une tête avec les quatre repères de longueur du salon" ${INK} stroke-width="1.4">
<g class="draw">
 <!-- head -->
 <path d="M96 40q36-14 58 14 14 22 6 52l-6 22q12 6 10 18l-12 6q4 18-6 30-10 8-26 6l2 24"/>
 <path d="M96 40q-26 12-26 50 0 28 14 52"/>
 <path d="M122 100q8 4 8-4M118 122q10 4 14 0" opacity=".5"/>
 <!-- ear -->
 <path d="M108 100q-12 0-12 14t12 16" opacity=".8"/>
 <!-- neck + shoulders -->
 <path d="M96 188q-4 30-6 44-34 8-76 26M126 198q4 22 4 34 40 10 76 22" />
 <path d="M14 258v162M206 254v166" opacity=".4"/>
</g>
<g stroke-dasharray="3 5" opacity=".55" stroke-width=".9">
 <path d="M10 105H210M10 206H210M10 269H210M10 344H210"/>
</g>
</svg>`
}
