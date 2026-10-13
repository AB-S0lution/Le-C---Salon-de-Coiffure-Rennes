// REAL figures only (PLAN.md §11). Each has its source.
export interface Stat { id: string; value: string; label: string; source: string; real: true }
export const stats: Stat[] = [
  { id: 's1', value: '5,0', label: 'sur Planity, 201 avis', source: 'Planity, 13/10/2026', real: true },
  { id: 's2', value: '2020', label: 'ouverture du salon', source: '7 Jours', real: true },
  { id: 's3', value: '11 ans', label: 'formatrice L\'Oréal Professionnel', source: 'Instagram du salon, 7 Jours', real: true },
  { id: 's4', value: '1 h à 1 h 15', label: 'par cliente, selon Magali', source: '7 Jours, 05/09/2024', real: true },
  { id: 's5', value: '5 ans', label: 'partenaire Couleurs Gaïa', source: 'Couleurs Gaïa', real: true },
  { id: 's6', value: '2026', label: 'Recommandé par le Petit Futé', source: 'Petit Futé', real: true },
  { id: 's7', value: 'XIVe-XVe', label: 'siècles, la maison de la rue du Chapitre', source: 'Office de Tourisme de Rennes', real: true },
]
