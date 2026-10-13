// Shared shell: header, full menu, footer, lantern theme toggle, foil page transition, smooth scroll, reveals.
import '../style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
import { business, hours, isOpenNow } from '../data'
import { spriteDefs, hexBg } from './art'
import { u, typo, qs, qsa, reduceMotion, finePointer } from './dom'

gsap.registerPlugin(ScrollTrigger, SplitText)
// Mobile URL-bar show/hide must not trigger a full refresh (jumps pinned sections on phones).
ScrollTrigger.config({ ignoreMobileResize: true })

export type PageKey =
  | 'home' | 'maison' | 'carte' | 'couleur' | 'soins' | 'rituel' | 'equipe' | 'realisations' | 'boutique' | 'avis'
  | 'journal' | 'cadeaux' | 'recrutement' | 'faq' | 'contact' | 'legal' | 'confidentialite' | 'plan' | 'article'

interface NavLink { key: PageKey; href: string; label: string }
const main: NavLink[] = [
  { key: 'maison', href: 'la-maison/', label: 'La Maison' },
  { key: 'carte', href: 'carte/', label: 'Carte & tarifs' },
  { key: 'couleur', href: 'couleur/', label: 'Couleur' },
  { key: 'soins', href: 'soins/', label: 'Soins' },
  { key: 'journal', href: 'journal/', label: 'Journal' },
  { key: 'contact', href: 'contact/', label: 'Contact' },
]
export const menuGroups: { title: string; links: NavLink[] }[] = [
  { title: 'Le salon', links: [
    { key: 'home', href: '', label: 'Accueil' },
    { key: 'maison', href: 'la-maison/', label: 'La Maison' },
    { key: 'equipe', href: 'equipe/', label: 'L’équipe' },
    { key: 'rituel', href: 'rituel/', label: 'Le Rituel' },
    { key: 'avis', href: 'avis/', label: 'Avis' },
  ] },
  { title: 'La carte', links: [
    { key: 'carte', href: 'carte/', label: 'Carte & tarifs' },
    { key: 'couleur', href: 'couleur/', label: 'La Couleur' },
    { key: 'soins', href: 'soins/', label: 'Les soins' },
    { key: 'realisations', href: 'realisations/', label: 'Réalisations' },
    { key: 'boutique', href: 'boutique/', label: 'Le Coin des soins' },
    { key: 'cadeaux', href: 'cartes-cadeaux/', label: 'Cartes cadeaux' },
  ] },
  { title: 'Pratique', links: [
    { key: 'journal', href: 'journal/', label: 'Journal' },
    { key: 'faq', href: 'faq/', label: 'Questions fréquentes' },
    { key: 'contact', href: 'contact/', label: 'Contact & accès' },
    { key: 'recrutement', href: 'recrutement/', label: 'Rejoindre Le C.' },
    { key: 'plan', href: 'plan-du-site/', label: 'Plan du site' },
  ] },
]

const ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>'
export const ARROW = ICON_ARROW

const planityBtn = (cls = '', label = 'Prendre rendez-vous') =>
  `<a class="btn ${cls}" href="${business.links.planity}" target="_blank" rel="noopener noreferrer">${label}${ICON_ARROW}<span class="sr"> (s’ouvre dans un nouvel onglet, sur Planity)</span></a>`
export { planityBtn }

function headerHTML(page: PageKey): string {
  const links = main.map((l) => `<a href="${u(l.href)}"${l.key === page ? ' aria-current="page"' : ''}>${l.label}</a>`).join('')
  return `<header class="hdr"><div class="wrap row">
  <a class="brand" href="${u()}" aria-label="Le C., coiffeur coloriste, accueil">Le C.<small>COIFFEUR COLORISTE</small></a>
  <nav class="nav" aria-label="Navigation principale">${links}</nav>
  <button class="icon-btn lantern" type="button" aria-pressed="false" aria-label="Allumer la lanterne (thème sombre)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M9 5h6M8 8h8l1 3v7l-1 2H8l-1-2v-7Z"/><path class="lamp" d="M10.5 13c0-1.6 1.5-2.4 1.5-3.8 1 1 1.5 2.1 1.5 3.3 0 1-.7 1.8-1.5 1.8S10.5 14 10.5 13Z"/><path d="M9 21h6"/></svg>
  </button>
  ${planityBtn('cta-hdr small')}
  <button class="icon-btn burger" type="button" aria-expanded="false" aria-controls="menu" aria-label="Ouvrir le menu"><i></i><i></i><i></i></button>
</div></header>`
}

function menuHTML(page: PageKey): string {
  let i = 0
  const cols = menuGroups.map((g) => `<div><h2>${g.title}</h2>${g.links.map((l) => `<a href="${u(l.href)}" style="--i:${i++}"${l.key === page ? ' aria-current="page"' : ''}>${l.label}</a>`).join('')}</div>`).join('')
  return `<div class="menu" id="menu" role="dialog" aria-modal="true" aria-label="Menu" hidden-initial><div class="cols">${cols}</div>
  <div class="meta"><span>${business.address.street}, ${business.address.postalCode} ${business.address.city}</span><a href="tel:${business.phone.tel}">${business.phone.display}</a></div></div>`
}

function footerHTML(): string {
  const rows = hours.map((h) => `<tr><td>${h.day}</td><td>${h.open ? `${h.open.replace(':', ' h ').replace(' 00', '')} à ${h.close!.replace(':', ' h ').replace(' 00', '')}` : 'Fermé'}</td></tr>`).join('')
  return `<footer class="ftr"><div class="wrap">
  <div class="cols">
    <div><span class="big">Le C.</span><p>Coiffeur coloriste<br>${business.address.street}<br>${business.address.postalCode} ${business.address.city}</p>
      <p><a href="tel:${business.phone.tel}">${business.phone.display}</a></p>${planityBtn('small')}</div>
    <div><h2>Horaires</h2><table aria-label="Horaires d’ouverture"><tbody>${rows}</tbody></table></div>
    <div><h2>Suivre le salon</h2><p><a href="${business.links.instagram}" target="_blank" rel="noopener noreferrer">Instagram @leccoiffeur</a><br><a href="${business.links.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a><br><a href="${business.links.planity}" target="_blank" rel="noopener noreferrer">Planity</a><br><a href="${business.links.maps}" target="_blank" rel="noopener noreferrer">Itinéraire Google Maps</a></p></div>
    <div><h2>Le site</h2><p><a href="${u('la-maison/')}">La Maison</a><br><a href="${u('carte/')}">Carte & tarifs</a><br><a href="${u('avis/')}">Avis</a><br><a href="${u('faq/')}">Questions fréquentes</a><br><a href="${u('contact/')}">Contact & accès</a></p></div>
  </div>
  <div class="legal-row"><a href="${u('mentions-legales/')}">Mentions légales</a><a href="${u('confidentialite/')}">Confidentialité</a><a href="${u('plan-du-site/')}">Plan du site</a><span>© ${new Date().getFullYear()} LE C</span></div>
  <p class="demo">Maquette de démonstration, non officielle : ce site n’est pas le site du salon, qui réserve uniquement sur Planity. Tarifs relevés sur Planity en octobre 2026, à titre indicatif. Illustrations originales.</p>
</div></footer>`
}

function setupTheme(): void {
  const root = document.documentElement
  const btn = qs<HTMLButtonElement>('.lantern')
  if (!btn) return
  const isDark = () => root.dataset.theme === 'dark' || (root.dataset.theme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches)
  const sync = () => { btn.setAttribute('aria-pressed', String(isDark())); btn.setAttribute('aria-label', isDark() ? 'Éteindre la lanterne (thème clair)' : 'Allumer la lanterne (thème sombre)') }
  sync()
  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark'
    root.dataset.theme = next
    try { localStorage.setItem('lec-theme', next) } catch { /* private mode */ }
    btn.classList.remove('flick'); void btn.offsetWidth; btn.classList.add('flick')
    sync()
  })
}

function setupMenu(): void {
  const btn = qs<HTMLButtonElement>('.burger')
  const menu = qs('#menu')
  if (!btn || !menu) return
  const set = (open: boolean) => {
    menu.classList.toggle('open', open)
    btn.setAttribute('aria-expanded', String(open))
    btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu')
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) qs<HTMLAnchorElement>('a', menu)?.focus({ preventScroll: true })
  }
  btn.addEventListener('click', () => set(!menu.classList.contains('open')))
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('open')) { set(false); btn.focus() } })
  menu.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) set(false) })
}

/** Directional hover wash: the fill enters from the side the pointer entered. */
function setupButtons(): void {
  if (!finePointer()) return
  document.addEventListener('pointerover', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('.btn')
    if (!b || b.contains(e.relatedTarget as Node)) return
    const r = b.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    if (Math.abs(x) * r.width > Math.abs(y) * r.height) { b.style.setProperty('--tx', x < 0 ? '-101%' : '101%'); b.style.setProperty('--ty', '0%') }
    else { b.style.setProperty('--tx', '0%'); b.style.setProperty('--ty', y < 0 ? '-101%' : '101%') }
  })
}

/** Foil page transition: a blue fold covers the page, then lifts on the next page. */
function setupFoil(): void {
  const foil = document.createElement('div')
  foil.className = 'foil'
  foil.setAttribute('aria-hidden', 'true')
  foil.innerHTML = '<i></i><i></i>'
  document.body.appendChild(foil)
  const layers = Array.from(foil.querySelectorAll('i'))
  const root = document.documentElement
  const arriving = root.classList.contains('foil-in')
  if (arriving) {
    root.classList.remove('foil-in')
    foil.classList.add('covering')
    gsap.set(layers, { scaleY: 1, transformOrigin: '50% 100%' })
    gsap.to(layers, { scaleY: 0, duration: 0.6, ease: 'expo.inOut', stagger: 0.07, delay: 0.05, onComplete: () => foil.classList.remove('covering') })
  }
  if (reduceMotion()) return
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]')
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank' || a.hasAttribute('download')) return
    const url = new URL(a.href, location.href)
    if (url.origin !== location.origin || !url.pathname.startsWith(u()) ) return
    if (url.pathname === location.pathname && url.hash) return
    e.preventDefault()
    try { sessionStorage.setItem('lec-foil', '1') } catch { /* ignore */ }
    foil.classList.add('covering')
    gsap.set(layers, { transformOrigin: '50% 0%' })
    gsap.to(layers, { scaleY: 1, duration: 0.55, ease: 'expo.inOut', stagger: 0.07, onComplete: () => { location.href = a.href } })
  })
  addEventListener('pageshow', (ev) => { if ((ev as PageTransitionEvent).persisted) { foil.classList.remove('covering'); gsap.set(layers, { scaleY: 0 }) } })
}

let lenis: Lenis | null = null
function setupSmooth(): void {
  if (reduceMotion() || !finePointer()) return
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis?.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
  // anchor links
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]')
    if (!a) return
    const url = new URL(a.href, location.href)
    if (url.pathname !== location.pathname || !url.hash) return
    const t = qs(url.hash)
    if (t) { e.preventDefault(); lenis?.scrollTo(t, { offset: -80 }) }
  })
}
export function scrollToTarget(el: HTMLElement): void { if (lenis) lenis.scrollTo(el, { offset: -90 }); else el.scrollIntoView({ block: 'start' }) }

/** Scroll reveals (IntersectionObserver) + SplitText line masks on headings. */
export function setupReveals(root: ParentNode = document): void {
  const els = qsa('[data-reveal]', root)
  if (!els.length) return
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  els.forEach((el) => io.observe(el))
  // Fail-safe: content is only hidden under .js-motion; if the observer never fires (old engine,
  // throttled tab, anchor jump), reveal what is already on or above screen, then everything.
  const revealPast = () => qsa('[data-reveal]:not(.in)', root).forEach((el) => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in') })
  setTimeout(revealPast, 2500)
  setTimeout(() => qsa('[data-reveal]:not(.in)', root).forEach((el) => el.classList.add('in')), 9000)
}

/** Pause CSS loops (marquee, hotspot pings, petals) while they are off screen. */
function pauseOffscreenLoops(): void {
  if (!('IntersectionObserver' in window)) return
  const io = new IntersectionObserver((entries) => { for (const en of entries) en.target.classList.toggle('is-off', !en.isIntersecting) }, { rootMargin: '120px 0px' })
  qsa('.marquee, .room, .swipe-hint').forEach((el) => io.observe(el))
}

export function splitHeadings(root: ParentNode = document): void {
  if (reduceMotion()) return
  const targets = qsa('[data-split]', root)
  document.fonts.ready.then(() => {
    targets.forEach((el) => {
      SplitText.create(el, {
        type: 'lines', mask: 'lines', autoSplit: true, linesClass: 'split-line',
        onSplit(self) {
          return gsap.from(self.lines, { yPercent: 108, duration: 1, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
        },
      })
    })
  })
}

export function setupOpenNow(): void {
  const st = isOpenNow()
  qsa('[data-open-now]').forEach((el) => {
    el.classList.toggle('is-open', st.open)
    const t = qs('span', el)
    if (t) t.textContent = st.label
  })
  const dow = new Date(new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Paris' }).format(new Date())).getDay()
  qsa('tr[data-dow]').forEach((tr) => tr.classList.toggle('today', Number(tr.dataset.dow) === dow))
}

export interface BootOptions {
  page: PageKey
  render: () => string
  init?: (main: HTMLElement) => void
}

export function boot(opts: BootOptions): void {
  const app = document.getElementById('app')!
  app.innerHTML = typo(
    `<a class="skip" href="#main">Aller au contenu</a><div class="progress" aria-hidden="true"></div>` +
    headerHTML(opts.page) + menuHTML(opts.page).replace(' hidden-initial', '') +
    `<main id="main" tabindex="-1">${opts.render()}</main>` + footerHTML(),
  )
  document.body.insertAdjacentHTML('afterbegin', spriteDefs())
  document.body.insertAdjacentHTML('beforeend', '<div class="paper" aria-hidden="true"></div>')
  const ftr = qs('.ftr')
  if (ftr) ftr.style.setProperty('--hex', hexBg('#BA936D', 0.38))
  setupTheme(); setupMenu(); setupButtons(); setupFoil(); setupSmooth()
  const mainEl = document.getElementById('main')!
  setupReveals(); splitHeadings(); setupOpenNow(); pauseOffscreenLoops()
  opts.init?.(mainEl)
  document.documentElement.classList.add('lec-ready')
  window.addEventListener('load', () => ScrollTrigger.refresh())
}

export { gsap, ScrollTrigger, SplitText }
