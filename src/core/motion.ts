// Page-level motion: hero intro, pointer brush, pinned ritual, nuancier pan, room parallax, draw-on illustrations.
import { gsap, ScrollTrigger } from './shell'
import { hotspots } from '../data'
import { qs, qsa, reduceMotion, finePointer } from './dom'

/** Prepare drawable strokes (pathLength = 1) inside a root. */
function armDraw(root: ParentNode): SVGGeometryElement[] {
  const els = qsa<any>('.draw path, .draw rect, .draw circle, .draw line, .draw ellipse', root) as unknown as SVGGeometryElement[]
  els.forEach((e) => e.setAttribute('pathLength', '1'))
  return els
}

/** Illustrations draw themselves when they enter the viewport. */
export function initDrawOnView(root: ParentNode = document): void {
  if (reduceMotion()) return
  const groups = qsa('svg', root).filter((s) => s.querySelector('.draw') && !s.closest('.hero-art') && !s.closest('.ritual'))
  groups.forEach((svg) => {
    const els = armDraw(svg)
    gsap.set(els, { strokeDasharray: 1, strokeDashoffset: 1 })
    ScrollTrigger.create({
      trigger: svg, start: 'top 90%', once: true,
      onEnter: () => gsap.to(els, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', stagger: { each: 0.012, from: 'start' } }),
    })
  })
}

/** Home hero: the façade draws itself, balayage streaks colour it, the pointer paints a second layer. */
export function initHero(root: HTMLElement): void {
  const art = qs('.hero-art', root)
  if (!art) return
  const ink = qs('.facade-ink', art)!
  const col = qs<any>('.facade-col', art)!
  const brush = qs<any>('.facade-brush', art)
  const h1 = qs('.hero h1', root)
  let seen = false
  try { seen = sessionStorage.getItem('lec-hero') === '1' } catch { /* ignore */ }
  if (reduceMotion() || seen) { art.classList.add('ready'); return }
  try { sessionStorage.setItem('lec-hero', '1') } catch { /* ignore */ }
  const els = armDraw(ink)
  gsap.set(els, { strokeDasharray: 1, strokeDashoffset: 1 })
  const tl = gsap.timeline({ delay: 0.15, defaults: { ease: 'power2.inOut' } })
  tl.to(els, { strokeDashoffset: 0, duration: 1.4, stagger: { each: 0.008, from: 'start' } }, 0)
  tl.add(() => art.classList.add('ready'), 0)
  gsap.set(col, { '--sweep1': 0, '--sweep2': 0, '--sweep3': 0 })
  tl.to(col, { '--sweep1': 1, duration: 0.55, ease: 'power3.out' }, 1.05)
  tl.to(col, { '--sweep2': 1, duration: 0.55, ease: 'power3.out' }, 1.2)
  tl.to(col, { '--sweep3': 1, duration: 0.55, ease: 'power3.out' }, 1.35)
  void h1

  // pointer brush (fine pointers only)
  if (brush && finePointer()) {
    let tx = -200, ty = -200, x = -200, y = -200, raf = 0
    const loop = () => {
      x += (tx - x) * 0.16; y += (ty - y) * 0.16
      brush.style.setProperty('--bx', `${x}px`); brush.style.setProperty('--by', `${y}px`)
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(loop) : 0
    }
    art.addEventListener('pointermove', (e) => {
      const r = art.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top
      if (!raf) raf = requestAnimationFrame(loop)
    })
    art.addEventListener('pointerleave', () => { tx = -200; ty = -200; if (!raf) raf = requestAnimationFrame(loop) })
  }
}
export function initBrushOnly(root: HTMLElement): void {
  const art = qs('.hero-art', root)
  if (!art) return
  const brush = qs<any>('.facade-brush', art)
  art.classList.add('ready')
  if (!brush || !finePointer() || reduceMotion()) return
  let tx = -200, ty = -200, x = -200, y = -200, raf = 0
  const loop = () => { x += (tx - x) * 0.16; y += (ty - y) * 0.16; brush.style.setProperty('--bx', `${x}px`); brush.style.setProperty('--by', `${y}px`); raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(loop) : 0 }
  art.addEventListener('pointermove', (e) => { const r = art.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top; if (!raf) raf = requestAnimationFrame(loop) })
}

/** « Le Rituel » : pinned dark chapter on desktop, stacked list on mobile / reduced motion. */
export function initRitual(root: HTMLElement): void {
  const sec = qs('.ritual', root)
  if (!sec) return
  const mm = gsap.matchMedia()
  mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
    const steps = qsa('.step', sec), vigs = qsa('[data-vig]', sec), dots = qsa('.dots span', sec)
    const fg = qs('.ring .fg', sec)!, clock = qs('[data-clock]', sec)!, finale = qs('[data-finale]', sec)!
    const n = steps.length
    let cur = -1
    const set = (i: number) => {
      if (i === cur) return
      cur = i
      steps.forEach((s, k) => s.classList.toggle('on', k === i))
      vigs.forEach((v, k) => v.classList.toggle('on', k === i))
      dots.forEach((d, k) => d.classList.toggle('on', k <= i))
    }
    set(0)
    const st = ScrollTrigger.create({
      trigger: sec, start: 'top top', end: () => `+=${Math.round(innerHeight * 0.62 * n)}`, pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true,
      onUpdate: (self) => {
        const pr = self.progress
        set(Math.min(n - 1, Math.floor(pr * n)))
        gsap.set(fg, { strokeDashoffset: 1 - pr })
        const mins = Math.round(pr * 75)
        clock.textContent = mins < 60 ? `${mins} min` : `1 h ${String(mins - 60).padStart(2, '0')}`
        finale.classList.toggle('on', pr > 0.92)
      },
    })
    return () => { st.kill(); sec.classList.remove('stacked') }
  })
  mm.add('(max-width: 899px), (prefers-reduced-motion: reduce)', () => {
    sec.classList.add('stacked')
    const fg = qs('.ring .fg', sec)
    if (fg) (fg as unknown as SVGElement).style.strokeDashoffset = '0'
    const clock = qs('[data-clock]', sec); if (clock) clock.textContent = '1 h 15'
    return () => sec.classList.remove('stacked')
  })
}

/** Nuancier: horizontal pan with pinned wrapper; each strand lightens root to tip as it crosses the centre. */
export function initNuancier(root: HTMLElement): void {
  const sec = qs('.nuancier', root)
  if (!sec) return
  const pin = qs('.nu-pin', sec)!
  const track = qs('.nu-track', sec)!
  const mm = gsap.matchMedia()
  mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
    sec.classList.remove('native')
    const dist = () => Math.max(0, track.scrollWidth - innerWidth)
    const pan = gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: pin, start: 'top top', end: () => `+=${dist()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 } })
    qsa('.swatch', track).forEach((sw) => {
      const veil = qs('.veil', sw)
      if (!veil) return
      gsap.fromTo(veil, { yPercent: 0 }, { yPercent: -100, ease: 'none', scrollTrigger: { trigger: sw, containerAnimation: pan, start: 'left 85%', end: 'left 30%', scrub: true } })
    })
    return () => { gsap.set(track, { clearProps: 'transform' }) }
  })
  mm.add('(max-width: 899px), (prefers-reduced-motion: reduce)', () => {
    sec.classList.add('native')
    qsa('.veil', sec).forEach((v) => ((v as HTMLElement).style.display = 'none'))
    return () => { sec.classList.remove('native'); qsa('.veil', sec).forEach((v) => ((v as HTMLElement).style.display = '')) }
  })
}

/** La Maison room: parallax between layers (max 40 px) and hotspot captions. */
export function initRoom(root: HTMLElement): void {
  const sec = qs('.room', root)
  if (!sec) return
  const cap = qs('#room-cap', sec)!
  const hots = qsa<HTMLButtonElement>('.hot', sec)
  hots.forEach((h) => h.addEventListener('click', () => {
    const d = hotspots.find((x) => x.id === h.dataset.hot)!
    const open = h.getAttribute('aria-expanded') !== 'true'
    hots.forEach((o) => o.setAttribute('aria-expanded', 'false'))
    if (!open) { cap.hidden = true; return }
    h.setAttribute('aria-expanded', 'true')
    qs('h3', cap)!.textContent = d.name; qs('p', cap)!.textContent = d.caption; qs('small', cap)!.textContent = `Source : ${d.source}`
    cap.hidden = false
    if (!reduceMotion()) gsap.fromTo(cap, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'expo.out' })
  }))
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { cap.hidden = true; hots.forEach((o) => o.setAttribute('aria-expanded', 'false')) } })
  if (reduceMotion()) return
  const far = qs('[data-layer="far"]', sec)!, near = qs('[data-layer="near"]', sec)!
  gsap.fromTo(far, { y: -20 }, { y: 20, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true } })
  gsap.fromTo(near, { y: 40 }, { y: -40, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true } })
  const petals = qs('.petals-on', sec)
  qsa('.petal', sec).forEach((p, i) => (p as unknown as HTMLElement).style.setProperty('--k', String(i)))
  if (petals) ScrollTrigger.create({ trigger: sec, start: 'top 80%', end: 'bottom 20%', onToggle: (s) => petals.classList.toggle('petals-on', s.isActive) })
}
