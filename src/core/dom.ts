// Small DOM + French typography helpers shared by every page.

export const BASE: string = import.meta.env.BASE_URL

/** Absolute URL under the GitHub Pages base path. `path` has no leading slash. */
export function u(path = ''): string {
  return BASE + path
}

export function qs<T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document): T | null {
  return root.querySelector<T>(sel)
}
export function qsa<T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document): T[] {
  return Array.from(root.querySelectorAll<T>(sel))
}

export function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

const NNBSP = ' '
const NBSP = ' '

/** French typography on the text nodes of an HTML string (never touches tags or attributes). */
export function typo(html: string): string {
  return html
    .split(/(<[^>]+>)/g)
    .map((seg) => {
      if (seg.startsWith('<')) return seg
      return seg
        .replace(/ ([?!;])/g, `${NNBSP}$1`)
        .replace(/ :(?!\/)/g, `${NBSP}:`)
        .replace(/«\s+/g, `«${NBSP}`)
        .replace(/\s+»/g, `${NBSP}»`)
        .replace(/(\d) €/g, `$1${NNBSP}€`)
        .replace(/(\d) (h|min)\b/g, `$1${NBSP}$2`)
        .replace(/ (\d)/g, (m, d) => (/^\s\d$/.test(m) ? ` ${d}` : m))
    })
    .join('')
}

export function eur(n: number): string {
  return `${n}${NNBSP}€`
}

export function duration(min: number): string {
  if (min < 60) return `${min}${NBSP}min`
  const h = Math.floor(min / 60)
  const m = min % 60
  return m ? `${h}${NBSP}h${NBSP}${String(m).padStart(2, '0')}` : `${h}${NBSP}h`
}

export function fmtLongDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00')
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
}

export const reduceMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const finePointer = (): boolean => window.matchMedia('(hover: hover) and (pointer: fine)').matches
