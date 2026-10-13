// REAL opening hours (verified on Planity, PagesJaunes, FNC, Mappy). Holiday closures: not found (TODO).

export interface DayHours {
  day: string
  short: string
  /** JS getDay(): 0 = Sunday */
  dow: number
  open: string | null
  close: string | null
  real: true
}

export const hours: DayHours[] = [
  { day: 'Lundi', short: 'Lun', dow: 1, open: '09:00', close: '20:00', real: true },
  { day: 'Mardi', short: 'Mar', dow: 2, open: '09:00', close: '20:00', real: true },
  { day: 'Mercredi', short: 'Mer', dow: 3, open: '09:00', close: '20:00', real: true },
  { day: 'Jeudi', short: 'Jeu', dow: 4, open: '09:00', close: '20:00', real: true },
  { day: 'Vendredi', short: 'Ven', dow: 5, open: '09:00', close: '20:00', real: true },
  { day: 'Samedi', short: 'Sam', dow: 6, open: '09:00', close: '19:00', real: true },
  { day: 'Dimanche', short: 'Dim', dow: 0, open: null, close: null, real: true },
]

export const holidayClosures: string[] = [] // TODO: ask the owner

export function isOpenNow(date: Date = new Date()): { open: boolean; label: string } {
  // Europe/Paris wall clock
  const parts = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(date)
  const wd = parts.find((p) => p.type === 'weekday')?.value ?? ''
  const hh = Number(parts.find((p) => p.type === 'hour')?.value ?? 0)
  const mm = Number(parts.find((p) => p.type === 'minute')?.value ?? 0)
  const map: Record<string, number> = { 'dim.': 0, 'lun.': 1, 'mar.': 2, 'mer.': 3, 'jeu.': 4, 'ven.': 5, 'sam.': 6 }
  const dow = map[wd.toLowerCase()] ?? date.getDay()
  const today = hours.find((h) => h.dow === dow)
  const now = hh * 60 + mm
  if (today?.open && today.close) {
    const [oh, om] = today.open.split(':').map(Number)
    const [ch, cm] = today.close.split(':').map(Number)
    if (now >= oh * 60 + om && now < ch * 60 + cm) return { open: true, label: `Ouvert maintenant, jusqu’à ${ch} h` }
    if (now < oh * 60 + om) return { open: false, label: `Fermé, ouverture à ${oh} h` }
  }
  return { open: false, label: 'Fermé pour le moment' }
}
