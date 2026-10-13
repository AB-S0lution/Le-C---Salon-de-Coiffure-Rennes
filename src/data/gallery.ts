// SAMPLE gallery: original SVG illustrations, clearly captioned « Illustration ». Never real client results.
// No stylist is credited. Durations come from the real menu.

export type Technique =
  | 'Balayage' | 'Blond' | 'Cuivré' | 'Violine' | 'Boucles' | 'Coupe transformation' | 'Lissage' | 'Végétal'

export interface Artwork {
  id: string
  title: string
  technique: Technique
  length: 'courts' | 'mi-longs' | 'longs' | 'tres-longs'
  durationMin: number
  /** art parameters for strandArt() */
  art: { stops: string[]; curl: number; count: number; seed: number; cut: 'blunt' | 'layers' | 'bob' | 'long' }
  serviceFamily: string
  caption: 'Illustration'
  sample: true
}

const a = (id: string, title: string, technique: Technique, length: Artwork['length'], durationMin: number,
  stops: string[], curl: number, seed: number, cut: Artwork['art']['cut'], serviceFamily: string): Artwork =>
  ({ id, title, technique, length, durationMin, art: { stops, curl, count: 22, seed, cut }, serviceFamily, caption: 'Illustration', sample: true })

export const gallery: Artwork[] = [
  a('g1', 'Soleil de juillet', 'Balayage', 'mi-longs', 210, ['#4a3426', '#a97b52', '#e1bf8a'], 0.2, 3, 'layers', 'balayage'),
  a('g2', 'Lumière d’été, longs', 'Balayage', 'longs', 240, ['#3a2a20', '#9a7048', '#dcb982'], 0.3, 8, 'long', 'balayage'),
  a('g3', 'Californien court', 'Balayage', 'courts', 190, ['#4b3727', '#b08558', '#ecd0a2'], 0.1, 5, 'bob', 'balayage'),
  a('g4', 'Balayage très long', 'Balayage', 'tres-longs', 260, ['#3f2e22', '#a47c52', '#e8cc98'], 0.35, 11, 'long', 'balayage'),
  a('g5', 'Blond de lin', 'Blond', 'courts', 205, ['#6e5a42', '#d9c08a', '#f7ecc8'], 0.1, 14, 'bob', 'blond'),
  a('g6', 'Blond ultime mi-long', 'Blond', 'mi-longs', 240, ['#6a5a40', '#e0cb98', '#fbf1d2'], 0.2, 17, 'layers', 'blond'),
  a('g7', 'Blond clair, longs', 'Blond', 'longs', 260, ['#6a5a45', '#dbc690', '#f8ebc2'], 0.25, 21, 'long', 'blond'),
  a('g8', 'Blond sur mesure', 'Blond', 'tres-longs', 320, ['#5d4e3a', '#d2b97e', '#f4e5b4'], 0.3, 24, 'long', 'blond'),
  a('g9', 'Cuivré de mars', 'Cuivré', 'mi-longs', 105, ['#4a2418', '#b9582e', '#e69a62'], 0.2, 27, 'layers', 'couleur-brushing'),
  a('g10', 'Cuivré court', 'Cuivré', 'courts', 105, ['#40201a', '#a94e2a', '#de8f58'], 0.1, 30, 'bob', 'couleur-brushing'),
  a('g11', 'Cuivré long', 'Cuivré', 'longs', 130, ['#44221a', '#b4552d', '#ea9b64'], 0.3, 33, 'long', 'couleur-brushing'),
  a('g12', 'Violine intense', 'Violine', 'courts', 130, ['#2a1730', '#6b2f66', '#b2679a'], 0.1, 36, 'bob', 'coupe-couleur'),
  a('g13', 'Violine et coupe', 'Violine', 'mi-longs', 130, ['#281530', '#703068', '#bb70a4'], 0.2, 39, 'layers', 'coupe-couleur'),
  a('g14', 'Boucles définies', 'Boucles', 'mi-longs', 60, ['#2b1d16', '#6a4630', '#a37852'], 0.9, 42, 'layers', 'forfait-femme'),
  a('g15', 'Boucles légères', 'Boucles', 'courts', 60, ['#31221a', '#74503a', '#b08560'], 0.8, 45, 'bob', 'forfait-femme'),
  a('g16', 'Coupe curly', 'Boucles', 'longs', 60, ['#2a1b14', '#654029', '#9a6d48'], 1, 48, 'long', 'forfait-femme'),
  a('g17', 'Boucles blondes', 'Boucles', 'mi-longs', 60, ['#5a4a32', '#c3a46a', '#ecd9a6'], 0.85, 51, 'layers', 'forfait-femme'),
  a('g18', 'Du long au court', 'Coupe transformation', 'courts', 75, ['#3a2a20', '#7c583a', '#b48c62'], 0.1, 54, 'bob', 'forfait-femme'),
  a('g19', 'Carré plongeant', 'Coupe transformation', 'mi-longs', 75, ['#2f2018', '#6c4b32', '#a37b57'], 0.05, 57, 'bob', 'forfait-femme'),
  a('g20', 'Changement total', 'Coupe transformation', 'courts', 75, ['#241812', '#5b3d29', '#92684a'], 0.15, 60, 'layers', 'forfait-femme'),
  a('g21', 'Lissage brésilien', 'Lissage', 'longs', 230, ['#251a14', '#5a3d2a', '#8f6a4b'], 0, 63, 'long', 'lissage'),
  a('g22', 'Lissage, mi-longs', 'Lissage', 'mi-longs', 200, ['#2b1e16', '#62432f', '#97724f'], 0, 66, 'blunt', 'lissage'),
  a('g23', 'Végétal marron', 'Végétal', 'mi-longs', 105, ['#2b1d16', '#5e3b28', '#8d5f40'], 0.15, 69, 'layers', 'couleur-brushing'),
  a('g24', 'Végétal blond', 'Végétal', 'longs', 130, ['#6a5a30', '#b8a05a', '#e4d79e'], 0.25, 72, 'long', 'couleur-brushing'),
]
export const techniques: Technique[] = ['Balayage', 'Blond', 'Cuivré', 'Violine', 'Boucles', 'Coupe transformation', 'Lissage', 'Végétal']
