// REAL data: every line below is a Planity public-menu line read on 2026-10-13
// (https://www.planity.com/le-c-coiffeur-35000-rennes). Prices are indicative.
// Colour prices cover the root application only; colour on the lengths is a supplement.

import type { LengthKey } from './lengths'

export type Category =
  | 'Femme' | 'Homme' | 'Brushing' | 'Colorations' | 'Balayages Naturels'
  | 'Blonds Ultimes' | 'Soins' | 'Lissage brésilien' | 'À la carte'

export type Family =
  | 'forfait-femme' | 'brushing' | 'couleur-brushing' | 'coupe-couleur'
  | 'balayage' | 'blond' | 'toxine' | 'reconstruction' | 'lissage' | null

export interface Service {
  id: string
  category: Category
  family: Family
  name: string
  detail?: string
  length: LengthKey | null
  withCut: boolean | null
  durationMin: number
  priceEUR: number
  bookableOnline: boolean
  note?: string
  real: true
  source: string
  checkedAt: string
}

const SRC = 'https://www.planity.com/le-c-coiffeur-35000-rennes'
const AT = '2026-10-13'

function s(
  id: string, category: Category, family: Family, name: string,
  length: LengthKey | null, withCut: boolean | null, durationMin: number, priceEUR: number,
  extra: { detail?: string; bookableOnline?: boolean; note?: string } = {},
): Service {
  return {
    id, category, family, name, length, withCut, durationMin, priceEUR,
    bookableOnline: extra.bookableOnline ?? true, detail: extra.detail, note: extra.note,
    real: true, source: SRC, checkedAt: AT,
  }
}

export const services: Service[] = [
  // Femme
  s('f-courts', 'Femme', 'forfait-femme', 'Forfait cheveux courts', 'courts', true, 60, 66),
  s('f-mi', 'Femme', 'forfait-femme', 'Forfait cheveux mi-longs', 'mi-longs', true, 60, 70),
  s('f-longs', 'Femme', 'forfait-femme', 'Forfait cheveux longs', 'longs', true, 60, 75),
  s('f-etudiante', 'Femme', null, 'Forfait étudiante (à partir de 12 ans)', null, true, 50, 56, { note: 'Sans brushing. Avec brushing, choisir le forfait non étudiant.' }),
  s('f-frange', 'Femme', null, 'Frange', null, true, 10, 15, { bookableOnline: false, note: 'Ne se réserve pas en ligne.' }),
  s('f-transfo', 'Femme', null, 'Forfait coupe transformation', null, true, 75, 80, { detail: 'Changement total de coupe, pour passer d’une coupe longue à une coupe courte.' }),
  // Homme
  s('h-homme', 'Homme', null, 'Forfait homme', null, true, 40, 42, { detail: 'Diagnostic, shampooing traitant, rituel massant, coupe et coiffage.' }),
  s('h-etudiant', 'Homme', null, 'Forfait étudiant (à partir de 12 ans)', null, true, 40, 37),
  s('h-camouflage', 'Homme', null, 'Camouflage des cheveux blancs', null, null, 15, 31, { detail: 'Coloration pour homme, effet naturel.' }),
  s('h-barbe', 'Homme', null, 'Entretien barbe à la tondeuse', null, null, 10, 17, { note: 'Tondeuse uniquement. Le salon n’est pas un barbier.' }),
  // Brushing
  s('b-courts', 'Brushing', 'brushing', 'Brushing / coiffage, cheveux courts', 'courts', false, 40, 42),
  s('b-mi', 'Brushing', 'brushing', 'Brushing / coiffage, cheveux mi-longs', 'mi-longs', false, 45, 46),
  s('b-longs', 'Brushing', 'brushing', 'Brushing / coiffage, cheveux longs', 'longs', false, 55, 51),
  // Colorations
  s('c-courts', 'Colorations', 'couleur-brushing', 'Coloration + coiffage / brushing, courts', 'courts', false, 105, 88),
  s('c-mi', 'Colorations', 'couleur-brushing', 'Coloration + coiffage / brushing, mi-longs', 'mi-longs', false, 115, 92),
  s('c-longs', 'Colorations', 'couleur-brushing', 'Coloration + coiffage / brushing, longs', 'longs', false, 130, 97),
  s('cc-courts', 'Colorations', 'coupe-couleur', 'Coupe + couleur + coiffage, courts', 'courts', true, 130, 112),
  s('cc-mi', 'Colorations', 'coupe-couleur', 'Coupe + couleur + coiffage, mi-longs', 'mi-longs', true, 130, 117),
  s('cc-longs', 'Colorations', 'coupe-couleur', 'Coupe (ou coupe transformation) + couleur + coiffage, longs', 'longs', true, 130, 121),
  s('c-decol', 'Colorations', null, 'Décoloration', null, null, 90, 80, { bookableOnline: false, note: 'Visible sur la carte, non réservable en ligne.' }),
  // Balayages Naturels
  s('ba-courts', 'Balayages Naturels', 'balayage', 'Balayage naturel, courts, avec brushing', 'courts', false, 190, 154),
  s('bac-courts', 'Balayages Naturels', 'balayage', 'Balayage naturel, courts, avec coupe et brushing', 'courts', true, 205, 178),
  s('ba-mi', 'Balayages Naturels', 'balayage', 'Balayage naturel, mi-longs, avec brushing', 'mi-longs', false, 210, 190),
  s('bac-mi', 'Balayages Naturels', 'balayage', 'Balayage naturel, mi-longs, avec coupe et brushing', 'mi-longs', true, 220, 215),
  s('ba-longs', 'Balayages Naturels', 'balayage', 'Balayage naturel, longs, avec brushing', 'longs', false, 240, 221),
  s('bac-longs', 'Balayages Naturels', 'balayage', 'Balayage naturel, longs, avec coupe et brushing', 'longs', true, 245, 244),
  s('ba-tl', 'Balayages Naturels', 'balayage', 'Balayage naturel, très longs, avec brushing', 'tres-longs', false, 260, 254),
  s('bac-tl', 'Balayages Naturels', 'balayage', 'Balayage naturel, très longs, avec coupe et brushing', 'tres-longs', true, 260, 273),
  // Blonds Ultimes
  s('bu-courts', 'Blonds Ultimes', 'blond', 'Blond ultime, courts, avec brushing', 'courts', false, 205, 164),
  s('buc-courts', 'Blonds Ultimes', 'blond', 'Blond ultime, courts, avec coupe et brushing', 'courts', true, 220, 193),
  s('bu-mi', 'Blonds Ultimes', 'blond', 'Blond ultime, mi-longs, avec brushing', 'mi-longs', false, 240, 216),
  s('buc-mi', 'Blonds Ultimes', 'blond', 'Blond ultime, mi-longs, avec coupe et brushing', 'mi-longs', true, 245, 241),
  s('bu-longs', 'Blonds Ultimes', 'blond', 'Blond ultime, longs, avec brushing', 'longs', false, 260, 241),
  s('buc-longs', 'Blonds Ultimes', 'blond', 'Blond ultime, longs, avec coupe et brushing', 'longs', true, 260, 263),
  s('bu-tl', 'Blonds Ultimes', 'blond', 'Blond ultime, très longs, avec brushing', 'tres-longs', false, 320, 270),
  s('buc-tl', 'Blonds Ultimes', 'blond', 'Blond ultime, très longs, avec coupe et brushing', 'tres-longs', true, 290, 293),
  // Soins
  s('so-ceremonie', 'Soins', null, 'Cérémonie de soins', null, null, 65, 75, { bookableOnline: false, detail: 'Diagnostic cuir chevelu et cheveux, huiles vierges bio, rituel massant, « Spa du cheveu », shampooing ou argile naturelle, masque.' }),
  s('so-olaplex', 'Soins', null, 'Soin profond Olaplex', null, null, 30, 47, { bookableOnline: false, detail: 'Le soin spécial salon Olaplex : reconnecte les ponts disulfures. Sans sulfates, silicones ni gluten. Hors coupe et brushing.' }),
  s('so-tox-c', 'Soins', 'toxine', 'Soin à la toxine botulique végétale, courts', 'courts', null, 135, 205, { detail: 'Acide hyaluronique, huile de coco, kératine. Tient 3 à 5 mois. Soins maison pendant 3 mois inclus.' }),
  s('so-tox-m', 'Soins', 'toxine', 'Soin à la toxine botulique végétale, mi-longs', 'mi-longs', null, 155, 245),
  s('so-tox-l', 'Soins', 'toxine', 'Soin à la toxine botulique végétale, longs', 'longs', null, 165, 265),
  s('so-rec-c', 'Soins', 'reconstruction', 'Soin Le C. reconstruction totale, courts', 'courts', null, 130, 160, { detail: 'Transfusion d’acides aminés, spiruline et alpha-kératine. Tient 2 à 3 mois.' }),
  s('so-rec-m', 'Soins', 'reconstruction', 'Soin Le C. reconstruction totale, mi-longs', 'mi-longs', null, 140, 185),
  s('so-rec-l', 'Soins', 'reconstruction', 'Soin Le C. reconstruction totale, longs', 'longs', null, 150, 206),
  // Lissage brésilien
  s('li-c', 'Lissage brésilien', 'lissage', 'Lissage brésilien, courts', 'courts', null, 170, 284, { detail: 'Adapté aux enfants et aux femmes enceintes, sans odeurs, sans fumée. Tient 6 à 8 mois.' }),
  s('li-m', 'Lissage brésilien', 'lissage', 'Lissage brésilien, mi-longs', 'mi-longs', null, 200, 359),
  s('li-l', 'Lissage brésilien', 'lissage', 'Lissage brésilien, longs à très longs', 'longs', null, 230, 409),
  // À la carte
  s('al-diag', 'À la carte', null, 'Diagnostic', null, null, 30, 30, { detail: 'Toute couleur commence par un diagnostic.' }),
  s('al-grey', 'À la carte', null, 'Diagnostic grey blending', null, null, 30, 40, { detail: 'Passer en douceur au blanc naturel.', note: 'Impossible sur cheveux colorés avec une teinte végétale, frisés ou très abîmés.' }),
]

export const categories: Category[] = [
  'Femme', 'Homme', 'Brushing', 'Colorations', 'Balayages Naturels', 'Blonds Ultimes', 'Soins', 'Lissage brésilien', 'À la carte',
]

export function byCategory(c: Category): Service[] {
  return services.filter((x) => x.category === c)
}

/**
 * Price lookup for the gauge. Returns null when the Planity menu has no line for that length
 * (the gauge then shows « Sur diagnostic »). The brazilian smoothing line covers "longs à très longs".
 */
export function priceFor(family: Exclude<Family, null>, length: LengthKey, withCut = false): Service | null {
  const fam = services.filter((x) => x.family === family)
  const hasCutSplit = fam.some((x) => x.withCut === true) && fam.some((x) => x.withCut === false)
  const exact = fam.find((x) => x.length === length && (!hasCutSplit || x.withCut === withCut))
  if (exact) return exact
  if (length === 'tres-longs') return fam.find((x) => x.name.includes('très longs') && x.length === 'longs') ?? null
  return null
}

export interface GaugeRow {
  family: Exclude<Family, null>
  label: string
  withCut?: boolean
}

export const gaugeRows: GaugeRow[] = [
  { family: 'forfait-femme', label: 'Forfait femme' },
  { family: 'brushing', label: 'Brushing / coiffage' },
  { family: 'couleur-brushing', label: 'Coloration + brushing' },
  { family: 'coupe-couleur', label: 'Coupe + couleur + coiffage' },
  { family: 'balayage', label: 'Balayage naturel + brushing' },
  { family: 'balayage', label: 'Balayage naturel + coupe + brushing', withCut: true },
  { family: 'blond', label: 'Blond ultime + brushing' },
  { family: 'blond', label: 'Blond ultime + coupe + brushing', withCut: true },
  { family: 'toxine', label: 'Toxine botulique végétale' },
  { family: 'reconstruction', label: 'Reconstruction totale' },
  { family: 'lissage', label: 'Lissage brésilien' },
]
