// REAL, sourced history of the house and of the salon (PLAN.md §2, §6). Dates only where a source gives them.
// Never "monument historique". The "cheminée gothique" belongs to the neighbouring guesthouse, not the salon.

export interface HistoryItem {
  id: string
  when: string
  title: string
  text: string
  source: string
  sourceUrl: string
  kind: 'house' | 'salon'
  real: true
}

export const history: HistoryItem[] = [
  { id: 'h1', when: 'XIVe-XVe siècles', kind: 'house', title: 'Un hôtel particulier médiéval',
    text: 'Le 3 rue du Chapitre est un ancien hôtel particulier des XIVe-XVe siècles, selon l’Office de Tourisme de Rennes.',
    source: 'Office de Tourisme de Rennes', sourceUrl: 'https://www.tourisme-rennes.com/decouvrir-rennes/histoire/rue-du-chapitre/', real: true },
  { id: 'h2', when: 'Moyen Âge', kind: 'house', title: 'La maison de Jean de Boays',
    text: 'Il fut l’hôtel de Jean de Boays, seigneur de Bréquigny, d’après le compte rendu du livre de Daniel Leloup, « Rennes. Une capitale en pan de bois ».',
    source: 'Société d’histoire et d’archéologie de Bretagne', sourceUrl: 'https://www.shabretagne.com/scripts/files/6608a43a03c421.47111900/2019_49.pdf', real: true },
  { id: 'h3', when: 'Datation', kind: 'house', title: 'Une charpente datée par les arbres',
    text: 'Le 3 rue du Chapitre compte parmi les premières structures en pan de bois de Rennes datées par dendrochronologie. L’année exacte n’est pas publiée.',
    source: 'Société d’histoire et d’archéologie de Bretagne', sourceUrl: 'https://www.shabretagne.com/scripts/files/6608a43a03c421.47111900/2019_49.pdf', real: true },
  { id: 'h4', when: '1720', kind: 'house', title: 'Le quartier épargné par l’incendie',
    text: 'Le quartier de la cathédrale a été largement épargné par le grand incendie de 1720.',
    source: 'Office de Tourisme de Rennes', sourceUrl: 'https://www.tourisme-rennes.com/decouvrir-rennes/histoire/rue-du-chapitre/', real: true },
  { id: 'h5', when: 'XVIIIe siècle', kind: 'house', title: 'La famille du Talhouët',
    text: 'La maison appartenait alors à la famille du Talhouët.',
    source: 'Office de Tourisme de Rennes', sourceUrl: 'https://www.tourisme-rennes.com/decouvrir-rennes/histoire/rue-du-chapitre/', real: true },
  { id: 'h6', when: 'décembre 2019', kind: 'salon', title: 'La société est créée',
    text: 'La société LE C est immatriculée en décembre 2019. Magali en est la présidente.',
    source: 'Registre des entreprises', sourceUrl: 'https://recherche-entreprises.api.gouv.fr/search?q=879708261', real: true },
  { id: 'h7', when: '2020', kind: 'salon', title: 'Le salon ouvre',
    text: 'Le salon ouvre en 2020, « quinze jours avant le Covid », raconte Magali.',
    source: '7 Jours, 05/09/2024', sourceUrl: 'https://www.7jours.fr/actualites/coiffure-les-habitudes-et-les-services-evoluent/', real: true },
  { id: 'h8', when: '2026', kind: 'salon', title: 'Recommandé par le Petit Futé',
    text: 'Le guide Petit Futé recommande le salon dans son édition 2026.',
    source: 'Petit Futé', sourceUrl: 'https://www.petitfute.com/v9272-rennes-35000/c1074-beaute-bien-etre/c1164-coiffeur/c443-salon-de-coiffure/1979565-le-c.html', real: true },
]

export interface StreetFact { n: string; text: string; source: string }
export const streetFacts: StreetFact[] = [
  { n: '16', text: 'Le four du chapitre appartenait à l’évêché. Des épis de blé et les clés de saint Pierre ornent encore la façade.', source: 'Office de Tourisme de Rennes' },
  { n: '18', text: 'La plus ancienne maison à pans de bois de la rue, du XVe siècle, en encorbellement.', source: 'Office de Tourisme de Rennes' },
  { n: '20-22', text: 'Deux maisons Renaissance aux profils sculptés, animaux et feuillages.', source: 'Office de Tourisme de Rennes' },
  { n: '5', text: 'Une façade en pan de bois polychrome.', source: 'Office de Tourisme de Rennes' },
  { n: '6', text: 'L’hôtel de Blossac, bâti entre 1728 et 1732.', source: 'Office de Tourisme de Rennes' },
]
