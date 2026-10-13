// Hotspots for « La Maison ». Captions use Petit Futé and review wording. Positions are % on the engraved room.
export interface Hotspot { id: string; name: string; caption: string; source: string; x: number; y: number; real: true }
export const hotspots: Hotspot[] = [
  { id: 'poutres', name: 'Poutres apparentes', caption: 'Poutres apparentes et grande hauteur sous plafond créent une atmosphère chaleureuse et intimiste.', source: 'Petit Futé', x: 20, y: 10, real: true },
  { id: 'cheminee', name: 'Cheminée ancienne', caption: 'Une cheminée ancienne, au cœur du salon.', source: 'Petit Futé', x: 12, y: 56, real: true },
  { id: 'cerisier', name: 'Le cerisier rose', caption: 'Un grand cerisier en fleurs, rose, au centre de la pièce.', source: 'Le salon', x: 47, y: 36, real: true },
  { id: 'toile', name: 'La toile peinte', caption: 'Une toile en noir et blanc couvre un mur : un paysage de rivière avec un pont et une barque.', source: 'Le salon', x: 85, y: 32, real: true },
  { id: 'ampoules', name: 'Ampoules à filament', caption: 'Des ampoules à filament sur un réseau de câbles, des cages à oiseaux dorées.', source: 'Le salon', x: 54, y: 14, real: true },
  { id: 'vrac', name: 'Le bar à vrac', caption: 'Flacons à pompe en verre ambré, rouge et violet, pots hermétiques et bols en céramique.', source: 'Le salon', x: 86, y: 56, real: true },
  { id: 'tomettes', name: 'Les tomettes', caption: 'Un sol de tomettes hexagonales en terre cuite.', source: 'Le salon', x: 40, y: 90, real: true },
  { id: 'porte', name: 'La porte bleue', caption: 'Une double porte bleue donne sur la rue du Chapitre.', source: 'Le salon', x: 94, y: 78, real: true },
]
export const petitFuteQuote = {
  text: 'C’est au cœur de l’emblématique rue du Chapitre, l’une des plus pittoresques de Rennes, que Magali, coiffeuse et coloriste, a ouvert son salon dans une maison du XVIe siècle.',
  source: 'Petit Futé',
  note: 'Le Petit Futé écrit « XVIe siècle » ; l’Office de Tourisme de Rennes date la maison des XIVe-XVe siècles.',
}
export const sevenJours = [
  { text: 'Nous passons entre 1h et 1h15 par cliente.', source: '7 Jours, 05/09/2024' },
  { text: 'Nous ne pouvons pas bien travailler en proposant une coupe brushing en 30 minutes avec un temps d\'échange et un soin, c\'est impossible.', source: '7 Jours, 05/09/2024' },
]
