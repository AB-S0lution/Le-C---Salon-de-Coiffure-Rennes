// Reusable page sections (HTML) shared by several pages: ritual chapter, nuancier, room, quotes.
import { ritual, nuancier, hotspots, business, services, type Swatch } from '../data'
import { chair, bottle, scissors, headProfile, tree, strand, swatchStrand, beams, fireplace, bulbs, birdcage, river } from './art'
import { u, eur } from './dom'

/* ------------------------------------------------ Le Rituel (pinned chapter) */
export function ritualHTML(): string {
  const vigs = [headProfile(), chair(), tree(), bottle(), scissors(), strand([['#4a3426', '#a97b52', '#e1bf8a']], 0.2, 9, 'long', 'rit')]
  const steps = ritual.map((s, i) => `<div class="step${i === 0 ? ' on' : ''}" data-step="${i}"><h3>${s.name}</h3><p class="lead" style="color:var(--room-fg-2)">${s.line}</p>
    ${s.quote ? `<blockquote><p>« ${s.quote.text} »</p><cite>${s.quote.source}</cite></blockquote>` : ''}</div>`).join('')
  return `<section class="ritual" id="rituel" aria-labelledby="rit-h"><div class="stage"><div class="wrap">
  <p class="eyebrow">Le Rituel</p>
  <h2 id="rit-h" data-split style="margin-bottom:clamp(24px,4vw,48px);max-width:18ch">Une heure, pas une demi-heure.</h2>
  <div class="layout">
    <div class="ring-wrap" aria-hidden="true">
      <svg class="ring" viewBox="0 0 100 100"><circle class="bg" cx="50" cy="50" r="46"/><circle class="fg" cx="50" cy="50" r="46" pathLength="1"/></svg>
      <div class="vig-stack">${vigs.map((v, i) => `<div class="${i === 0 ? 'on' : ''}" data-vig="${i}">${v}</div>`).join('')}</div>
      <div class="clock"><div style="align-self:end"><div class="t num" data-clock>0 min</div><div class="s">de soin avant la coupe</div></div></div>
    </div>
    <div>
      <div class="steps" aria-live="polite">${steps}</div>
      <div class="dots" aria-hidden="true">${ritual.map((_, i) => `<span class="${i === 0 ? 'on' : ''}"></span>`).join('')}</div>
      <p class="finale" data-finale>« Nous passons entre 1h et 1h15 par cliente. »<br><small style="font-family:var(--font-body);font-style:normal;font-size:.88rem;color:var(--room-fg-2)">Magali, 7 Jours, 05/09/2024</small></p>
    </div>
  </div></div></div></section>`
}

/* ------------------------------------------------ Nuancier */
function swatchHTML(s: Swatch): string {
  const price = s.priceFrom ? `<div class="price num">dès ${eur(s.priceFrom)}</div>` : ''
  const tag = s.sample ? '<div class="tag">Nuance d’exemple</div>' : ''
  return `<article class="swatch"><div class="art">${swatchStrand(s.stops, s.id)}<div class="veil" aria-hidden="true"></div></div>
  <h3>${s.name}</h3><p>${s.tagline}</p>${price}${tag}</article>`
}
export function nuancierHTML(opts: { title?: string; lead?: string } = {}): string {
  return `<section class="nuancier" id="nuancier" aria-labelledby="nu-h"><div class="nu-pin">
  <div class="head wrap"><p class="eyebrow">La Couleur</p><h2 id="nu-h" data-split style="max-width:20ch">${opts.title ?? 'Des nuances qui s’éclaircissent racine à pointe.'}</h2>
  <p class="lead" data-reveal style="margin-top:1rem">${opts.lead ?? 'Du balayage effet soleil au violine intense : les tons nommés par le salon, et quelques nuances d’exemple.'}</p></div>
  <p class="swipe-hint nu-swipe wrap" aria-hidden="true">Faites glisser le nuancier</p><div class="nu-track" tabindex="0" aria-label="Nuancier, faites défiler horizontalement">${nuancier.map(swatchHTML).join('')}</div>
</div></section>`
}

/* ------------------------------------------------ Room (La Maison) */
export function roomHTML(): string {
  const hot = hotspots.filter((h) => h.id !== 'porte').map((h) => `<button type="button" class="hot" style="left:${h.x}%;top:${h.y}%" aria-expanded="false" aria-controls="room-cap" data-hot="${h.id}" aria-label="${h.name}"></button>`).join('')
  return `<section class="room" aria-label="La salle du salon, gravure interactive"><div class="scene" data-scene>
  <div class="layer" data-layer="far"><svg class="rm" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" role="img" aria-label="Gravure de l’intérieur : poutres, cheminée, cerisier en fleurs, toile peinte, ampoules, bar à vrac">
    <rect x="0" y="0" width="1200" height="520" fill="url(#stone)" stroke="none" opacity=".4"/>
    <g class="draw">
      <path d="M0 520H1200"/>
      <path d="M0 70H1200M0 96H1200" /><path d="M60 0 120 70M300 0 340 70M560 0 580 70M820 0 800 70M1080 0 1040 70"/>
      <rect x="40" y="250" width="200" height="270"/><path d="M60 520V330q0-60 80-60t80 60V520" /><path d="M20 250H260M30 236H250"/>
      <path d="M90 520q10-50 50-50t50 50"/>
      <rect x="900" y="150" width="250" height="190"/><rect x="910" y="160" width="230" height="170" opacity=".6"/>
      <path d="M910 300q50-30 90-10t70-20 70 10M930 320q70-12 190 0"/><path d="M960 300V250q26-26 52 0v50M1010 300V250q26-26 52 0v50"/><path d="M950 250H1070"/>
      <rect x="880" y="400" width="300" height="20"/><path d="M890 420V520M1170 420V520"/>
      <path d="M910 400V340h30v60M960 400V350h30v50M1010 400V345h32v55M1060 400V340h30v60" /><path d="M1110 400v-50h20v50" />
      <path d="M0 520 200 700M400 520 300 700M800 520 760 700M1200 520 1080 700" opacity=".5"/>
    </g>
    <g class="bulb-set"><path d="M600 0q-60 30-120 18M600 0q80 30 160 22M420 50V84M540 38V70M700 40V80M780 50V90" /><circle cx="420" cy="92" r="9"/><circle cx="540" cy="78" r="9"/><circle cx="700" cy="88" r="9"/><circle cx="780" cy="98" r="9"/></g>
    <path d="M300 18V40M290 40h20q8 12 0 36-10 12-20 0-8-24 0-36Z" opacity=".8"/>
  </svg></div>
  <div class="layer" data-layer="near"><svg class="rm" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" aria-hidden="true">
    <g transform="translate(380 120) scale(.9)"><g class="petals-on">${tree().replace(/<svg[^>]*>|<\/svg>/g, '').replace(/<title.*?<\/title>/, '')}</g></g>
  </svg></div>
  ${hot}
  <div class="cap" id="room-cap" role="status" hidden><h3></h3><p></p><small></small></div>
</div></section>`
}

export function houseTrio(): string {
  const items = [
    { v: beams(), t: 'Des poutres apparentes', d: 'Une grande hauteur sous plafond et une atmosphère intimiste, selon le Petit Futé.' },
    { v: fireplace(), t: 'Une cheminée ancienne', d: 'Au cœur du salon, pour une pièce plus chaleureuse que clinique.' },
    { v: river(), t: 'Une toile en noir et blanc', d: 'Un paysage de rivière avec un pont et une barque couvre un mur.' },
  ]
  return items.map((i) => `<div data-reveal><div class="art-frame sq" style="aspect-ratio:4/3;border-radius:2px;padding:14px">${i.v}</div><h3 style="margin-top:14px">${i.t}</h3><p class="muted">${i.d}</p></div>`).join('')
}
void birdcage; void bulbs; void u; void services; void business
