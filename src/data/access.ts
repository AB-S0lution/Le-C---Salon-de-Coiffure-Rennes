// REAL distances measured from OpenStreetMap data (straight line from the Planity GPS point, 13/10/2026).
// Walking is a little longer: the site says « à quelques minutes à pied », never an exact walking time.

export interface AccessPoint {
  id: string
  kind: 'metro' | 'bus' | 'parking' | 'velo'
  name: string
  detail: string
  meters: number
  straightLine: true
  source: 'OpenStreetMap'
  real: true
}

export const access: AccessPoint[] = [
  { id: 'a1', kind: 'metro', name: 'République', detail: 'Métro ligne a', meters: 250, straightLine: true, source: 'OpenStreetMap', real: true },
  { id: 'a2', kind: 'metro', name: 'Sainte-Anne', detail: 'Métro lignes a et b', meters: 420, straightLine: true, source: 'OpenStreetMap', real: true },
  { id: 'a3', kind: 'metro', name: 'Saint-Germain', detail: 'Métro ligne b', meters: 440, straightLine: true, source: 'OpenStreetMap', real: true },
  { id: 'a4', kind: 'bus', name: 'Place Saint-Sauveur', detail: 'Arrêt de bus', meters: 110, straightLine: true, source: 'OpenStreetMap', real: true },
  { id: 'a5', kind: 'parking', name: 'Les Lices', detail: 'Parking souterrain, 422 places', meters: 200, straightLine: true, source: 'OpenStreetMap', real: true },
  { id: 'a6', kind: 'parking', name: 'Chézy-Dinan', detail: 'Parking, 403 places', meters: 390, straightLine: true, source: 'OpenStreetMap', real: true },
  { id: 'a7', kind: 'parking', name: 'Hoche', detail: 'Parking, 777 places', meters: 590, straightLine: true, source: 'OpenStreetMap', real: true },
  { id: 'a8', kind: 'velo', name: 'Place de Bretagne', detail: 'Vélos en libre-service', meters: 215, straightLine: true, source: 'OpenStreetMap', real: true },
]
