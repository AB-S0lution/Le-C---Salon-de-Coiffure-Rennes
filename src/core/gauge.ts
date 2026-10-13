// « La Mesure » : the length gauge, built on the salon's own length scale.
// Dragging (or arrow keys) moves a comb down an engraved profile; every length-based price re-flows to the real Planity value.

import { gsap } from 'gsap'
import { lengths, gaugeRows, priceFor, type GaugeRow, type LengthKey, business } from '../data'
import { headProfile } from './art'
import { duration, eur, reduceMotion } from './dom'
import { planityBtn } from './shell'

const TOP = 0.25
const BOT = 0.82

export function gaugeHTML(opts: { compact?: boolean } = {}): string {
  const rows = opts.compact ? [0, 2, 5, 7].map((i) => gaugeRows[i]) : gaugeRows
  const marks = lengths.map((l) => `<div class="mark" data-key="${l.key}" style="top:${l.at * 100}%"><i></i><span><b>${l.label}</b></span></div>`).join('')
  const rowsHTML = rows.map((r, i) => `<div class="row" data-row="${gaugeRows.indexOf(r)}" data-i="${i}"><span class="lbl">${r.label}</span><span class="dur num"><span class="roll"></span></span><span class="pr num"><span class="roll"></span></span></div>`).join('')
  const tabs = lengths.map((l) => `<button type="button" data-key="${l.key}" aria-pressed="false">${l.label}</button>`).join('')
  return `<div class="grid" data-gauge>
  <div class="gauge">
    <div class="stage" data-stage>
      <svg class="strand-clip" viewBox="0 0 220 420" aria-hidden="true" focusable="false" fill="none" stroke="url(#balayage)" stroke-linecap="round">
        <g class="strand" data-strand stroke-width="3.2">
          <path d="M84 44C66 110 78 220 64 400"/><path d="M92 40C74 112 84 222 74 404" opacity=".85"/><path d="M100 40C84 116 92 226 84 410" opacity=".7"/><path d="M76 50C58 118 66 214 52 396" opacity=".8"/><path d="M68 58C50 120 58 210 40 392" opacity=".6"/>
        </g>
      </svg>
      ${headProfile()}
      <div class="rail" aria-hidden="true"></div>
      ${marks}
      <button type="button" class="comb" role="slider" aria-orientation="vertical" aria-label="Longueur des cheveux" aria-valuemin="0" aria-valuemax="3" aria-valuenow="1" aria-valuetext="" data-comb>
        <span class="body"></span><span class="teeth"></span>
      </button>
    </div>
  </div>
  <div class="gauge-out">
    <div class="tabs" role="group" aria-label="Choisir une longueur">${tabs}</div>
    <div class="cur"><h3 data-cur>Mi-longs</h3></div>
    <p class="def" data-def></p>
    <div class="prices" role="table" aria-label="Tarifs selon la longueur" aria-live="polite">${rowsHTML}</div>
    <p class="gauge-note">Tarifs indicatifs relevés sur Planity en octobre 2026. Le prix d’une couleur comprend l’application en racine uniquement. Ce n’est pas un devis.</p>
    <div class="gauge-cta"><p><strong>Toute couleur commence par un diagnostic</strong><br><span class="muted">Diagnostic 30 €, diagnostic grey blending 40 €</span></p>${planityBtn()}</div>
  </div>
</div>`
}

function roll(el: HTMLElement, text: string, animate: boolean): void {
  if (el.dataset.v === text) return
  const prev = el.dataset.v
  el.dataset.v = text
  if (!animate || prev === undefined || reduceMotion()) { el.innerHTML = `<span>${text}</span>`; return }
  el.innerHTML = `<span>${prev}</span><span>${text}</span>`
  gsap.fromTo(el, { yPercent: 0 }, { yPercent: 0, duration: 0 })
  gsap.fromTo(el.children, { yPercent: 0 }, { yPercent: -100, duration: 0.45, ease: 'expo.out', onComplete: () => { el.innerHTML = `<span>${text}</span>`; gsap.set(el.children, { clearProps: 'all' }) } })
}

export function mountGauge(root: HTMLElement): void {
  const g = root.querySelector<HTMLElement>('[data-gauge]')
  if (!g) return
  const stage = g.querySelector<HTMLElement>('[data-stage]')!
  const comb = g.querySelector<HTMLElement>('[data-comb]')!
  const strand = g.querySelector<SVGGElement>('[data-strand]')!
  const cur = g.querySelector<HTMLElement>('[data-cur]')!
  const def = g.querySelector<HTMLElement>('[data-def]')!
  const tabs = Array.from(g.querySelectorAll<HTMLButtonElement>('.tabs button'))
  const marks = Array.from(g.querySelectorAll<HTMLElement>('.mark'))
  const rows = Array.from(g.querySelectorAll<HTMLElement>('.row'))
  let idx = 1
  let p = lengths[idx].at
  let dragging = false
  let grab = 0
  let first = true

  const strandScale = (pp: number) => Math.max(0.05, (pp * 420 - 44) / (404 - 44))
  const place = (pp: number) => {
    comb.style.top = `${pp * 100}%`
    gsap.set(strand, { scaleY: strandScale(pp) })
  }

  const renderIdx = (animate = true) => {
    const l = lengths[idx]
    cur.textContent = l.label
    def.textContent = `${l.definition.charAt(0).toUpperCase()}${l.definition.slice(1)}`
    comb.setAttribute('aria-valuenow', String(idx))
    comb.setAttribute('aria-valuetext', `${l.label} : ${l.definition}`)
    tabs.forEach((t, i) => t.setAttribute('aria-pressed', String(i === idx)))
    marks.forEach((m, i) => m.classList.toggle('on', i === idx))
    rows.forEach((r) => {
      const gr: GaugeRow = gaugeRows[Number(r.dataset.row)]
      const s = priceFor(gr.family, l.key as LengthKey, !!gr.withCut)
      const dur = r.querySelector<HTMLElement>('.dur .roll')!
      const pr = r.querySelector<HTMLElement>('.pr .roll')!
      roll(dur, s ? duration(s.durationMin) : '-', animate && !first)
      roll(pr, s ? eur(s.priceEUR) : '<span class="na">Sur diagnostic</span>', animate && !first)
    })
    first = false
  }

  const snapTo = (i: number, animateSpring = true) => {
    idx = Math.max(0, Math.min(3, i))
    const target = lengths[idx].at
    renderIdx()
    if (reduceMotion() || !animateSpring) { p = target; place(p); return }
    const o = { v: p }
    gsap.to(o, { v: target, duration: 0.65, ease: 'back.out(1.5)', overwrite: true, onUpdate: () => { p = o.v; place(p) } })
  }

  const nearest = (pp: number) => lengths.reduce((best, l, i) => (Math.abs(l.at - pp) < Math.abs(lengths[best].at - pp) ? i : best), 0)

  comb.addEventListener('pointerdown', (e) => {
    dragging = true
    comb.setPointerCapture(e.pointerId)
    const r = stage.getBoundingClientRect()
    grab = e.clientY - (r.top + p * r.height)
    gsap.killTweensOf({})
    e.preventDefault()
  })
  comb.addEventListener('pointermove', (e) => {
    if (!dragging) return
    const r = stage.getBoundingClientRect()
    p = Math.max(TOP, Math.min(BOT, (e.clientY - grab - r.top) / r.height))
    place(p)
    const n = nearest(p)
    if (n !== idx) { idx = n; renderIdx() }
  })
  const end = () => { if (!dragging) return; dragging = false; snapTo(nearest(p)) }
  comb.addEventListener('pointerup', end)
  comb.addEventListener('pointercancel', end)
  comb.addEventListener('keydown', (e) => {
    const k = e.key
    if (k === 'ArrowDown' || k === 'ArrowRight') { snapTo(idx + 1); e.preventDefault() }
    else if (k === 'ArrowUp' || k === 'ArrowLeft') { snapTo(idx - 1); e.preventDefault() }
    else if (k === 'Home') { snapTo(0); e.preventDefault() }
    else if (k === 'End') { snapTo(3); e.preventDefault() }
  })
  tabs.forEach((t, i) => t.addEventListener('click', () => snapTo(i)))
  marks.forEach((m, i) => { m.style.pointerEvents = 'auto'; m.style.cursor = 'pointer'; m.addEventListener('click', () => snapTo(i)) })
  stage.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('.comb,.mark')) return
    const r = stage.getBoundingClientRect()
    snapTo(nearest((e.clientY - r.top) / r.height))
  })

  place(p)
  renderIdx(false)
  void business
}
