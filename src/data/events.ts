// SAMPLE events and offers. No dates are given: nothing here is announced by the salon.
export interface EventItem { id: string; title: string; text: string; season: string; sample: true }
export const events: EventItem[] = [
  { id: 'e1', title: 'Atelier routine boucles', season: 'À l’étude', text: 'Un temps pour apprendre à sécher, définir et protéger ses boucles. Idée d’exemple.', sample: true },
  { id: 'e2', title: 'Soirée découverte du vrac', season: 'À l’étude', text: 'Venir avec ses flacons, goûter aux textures, poser ses questions. Idée d’exemple.', sample: true },
  { id: 'e3', title: 'Semaine grey blending', season: 'À l’étude', text: 'Des diagnostics regroupés sur quelques jours. Idée d’exemple.', sample: true },
  { id: 'e4', title: 'Rentrée étudiante', season: 'Septembre', text: 'Les forfaits étudiants, à partir de 12 ans, mis en avant à la rentrée. Les tarifs sont ceux de la carte.', sample: true },
  { id: 'e5', title: 'Cartes cadeaux de Noël', season: 'Décembre', text: 'Une carte cadeau, sur Planity ou au salon, pour offrir un temps de soin.', sample: true },
  { id: 'e6', title: 'Fête des mères', season: 'Mai', text: 'Offrir un rituel complet, de la première question au dernier coup de brosse.', sample: true },
]
