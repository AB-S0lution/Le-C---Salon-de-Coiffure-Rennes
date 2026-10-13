import type { DayHours } from '../data'

export function fmtTime(t: string): string {
  const [h, m] = t.split(':')
  return m === '00' ? `${Number(h)} h` : `${Number(h)} h ${m}`
}

export function hoursRows(hours: DayHours[], cls = 'hours'): string {
  const rows = hours.map((h) => `<tr data-dow="${h.dow}"><td>${h.day}</td><td>${h.open ? `${fmtTime(h.open)} à ${fmtTime(h.close!)}` : 'Fermé'}</td></tr>`).join('')
  return `<table class="${cls}" aria-label="Horaires d’ouverture"><tbody>${rows}</tbody></table>`
}
