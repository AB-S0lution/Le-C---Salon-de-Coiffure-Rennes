// REAL: the salon's own length scale (Planity wording). Drives « La Mesure ».

export type LengthKey = 'courts' | 'mi-longs' | 'longs' | 'tres-longs'

export interface LengthMark {
  key: LengthKey
  label: string
  definition: string
  /** 0..1 position of the mark on the gauge */
  at: number
  real: true
}

export const lengths: LengthMark[] = [
  { key: 'courts', label: 'Courts', definition: 'longueurs au-dessus des oreilles', at: 0.25, real: true },
  { key: 'mi-longs', label: 'Mi-longs', definition: 'au-dessus des épaules', at: 0.49, real: true },
  { key: 'longs', label: 'Longs', definition: 'au niveau ou au-dessous des épaules', at: 0.64, real: true },
  { key: 'tres-longs', label: 'Très longs', definition: 'au-dessous des omoplates', at: 0.82, real: true },
]
