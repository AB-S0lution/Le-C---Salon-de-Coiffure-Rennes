// Colour swatches for « La Couleur ». Tone names come from the real menu and posts (real: true);
// in-between tones are SAMPLE (real: false). Gradient stops are original art, not client photos.

export interface Swatch {
  id: string
  name: string
  tagline: string
  /** root -> tip, hex */
  stops: [string, string, string]
  linkedService: string | null
  priceFrom: number | null
  real: boolean
  sample: boolean
}

export const nuancier: Swatch[] = [
  { id: 'blond-mesure', name: 'Blond sur mesure', tagline: 'Réalisé dans l’écoute et la douceur.', stops: ['#8a6a45', '#cfa86a', '#f0dcae'], linkedService: 'balayage', priceFrom: 154, real: true, sample: false },
  { id: 'blond-ultime', name: 'Blond ultime', tagline: 'Blonds très clairs, méthode papier aluminium, gloss inclus.', stops: ['#6e5a42', '#d9c08a', '#f7ecc8'], linkedService: 'blond', priceFrom: 164, real: true, sample: false },
  { id: 'balayage-soleil', name: 'Balayage effet soleil', tagline: 'Éclaircissement naturel, patine sans ammoniaque.', stops: ['#5a4030', '#b98a58', '#ecd0a2'], linkedService: 'balayage', priceFrom: 154, real: true, sample: false },
  { id: 'balayage-californien', name: 'Balayage californien', tagline: 'Un résultat lumière, du cheveu qui a vécu l’été.', stops: ['#4a3426', '#a97b52', '#e1bf8a'], linkedService: 'balayage', priceFrom: 154, real: true, sample: false },
  { id: 'cuivre', name: 'Cuivré', tagline: 'Il n’y a pas de saison pour illuminer ses cheveux.', stops: ['#4a2418', '#b9582e', '#e69a62'], linkedService: 'couleur-brushing', priceFrom: 88, real: true, sample: false },
  { id: 'violine', name: 'Violine intense', tagline: 'Une couleur franche, posée avec une coupe transformation.', stops: ['#2a1730', '#6b2f66', '#b2679a'], linkedService: 'couleur-brushing', priceFrom: 88, real: true, sample: false },
  { id: 'grey-blending', name: 'Grey blending', tagline: 'Passer en douceur au blanc naturel.', stops: ['#4b4a48', '#9b9892', '#e6e3dc'], linkedService: 'grey', priceFrom: 40, real: true, sample: false },
  { id: 'vegetal-blond', name: 'Végétal blond', tagline: 'Coloration 100 % végétale et bio, Couleurs Gaïa.', stops: ['#6a5a30', '#b8a05a', '#e4d79e'], linkedService: null, priceFrom: null, real: true, sample: false },
  { id: 'vegetal-marron', name: 'Végétal marron', tagline: 'Coloration 100 % végétale et bio, Couleurs Gaïa.', stops: ['#2b1d16', '#5e3b28', '#8d5f40'], linkedService: null, priceFrom: null, real: true, sample: false },
  { id: 'patine', name: 'Patine sans ammoniaque', tagline: 'Apporte des protéines et referme les écailles.', stops: ['#4d4338', '#a9987e', '#e6d8bd'], linkedService: 'balayage', priceFrom: 154, real: true, sample: false },
  { id: 'miel', name: 'Miel', tagline: 'Un doré chaud, très peu contrasté.', stops: ['#5d4125', '#b88a47', '#e7c486'], linkedService: null, priceFrom: null, real: false, sample: true },
  { id: 'noisette', name: 'Noisette', tagline: 'Un châtain clair, sourd et profond.', stops: ['#3b2a1e', '#7d5a3d', '#b48a63'], linkedService: null, priceFrom: null, real: false, sample: true },
  { id: 'cendre', name: 'Cendré', tagline: 'Un blond froid, plus mat.', stops: ['#53514d', '#a7a398', '#dedbd0'], linkedService: null, priceFrom: null, real: false, sample: true },
  { id: 'acajou', name: 'Acajou', tagline: 'Un brun rouge, brillant à la lumière.', stops: ['#2c140f', '#6d2a1c', '#a65036'], linkedService: null, priceFrom: null, real: false, sample: true },
  { id: 'cerise', name: 'Cerise', tagline: 'Un rouge profond, clin d’œil au cerisier du salon.', stops: ['#34121a', '#8e2a3c', '#cf6d76'], linkedService: null, priceFrom: null, real: false, sample: true },
  { id: 'ebene', name: 'Ébène', tagline: 'Un noir doux, qui accroche la lumière.', stops: ['#0c0d0f', '#222428', '#4b4f56'], linkedService: null, priceFrom: null, real: false, sample: true },
]
