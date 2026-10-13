// REAL business facts (verified, see PLAN.md §1). Only verified fields are used here.
// Sample content elsewhere in src/data is marked `sample: true`.

export interface Business {
  name: string
  fullName: string
  legal: {
    name: string
    sigle: string
    form: string
    capitalEUR: number
    siren: string
    siret: string
    naf: string
    gerance: string
  }
  address: { street: string; postalCode: string; city: string; country: string }
  geo: { lat: number; lon: number }
  phone: { display: string; tel: string }
  /** Public email is single-source (Petit Futé): do NOT print until the owner confirms. */
  email: string | null
  links: { planity: string; instagram: string; facebook: string; maps: string }
  since: number
  credentials: { trainer: string; colourist: string }
  partner: { name: string; since: string; vegan: string }
  planity: { rating: number; reviews: number; checkedAt: string; sub: { label: string; value: number }[] }
  google: { rating: number; reviews: number | null }
}

export const business: Business = {
  name: 'Le C.',
  fullName: 'Le C. Coiffeur Coloriste',
  legal: {
    name: 'LE C',
    sigle: 'LC',
    form: 'SARL',
    capitalEUR: 10000,
    siren: '879 708 261',
    siret: '879 708 261 00018',
    naf: '96.02A Coiffure',
    gerance: 'la gérante de la société',
  },
  address: { street: '3 rue du Chapitre', postalCode: '35000', city: 'Rennes', country: 'FR' },
  geo: { lat: 48.111056, lon: -1.682005 },
  phone: { display: '09 88 43 09 14', tel: '+33988430914' },
  email: null,
  links: {
    planity: 'https://www.planity.com/le-c-coiffeur-35000-rennes',
    instagram: 'https://www.instagram.com/leccoiffeur/',
    facebook: 'https://www.facebook.com/leccoiffeur/',
    maps: 'https://www.google.com/maps/search/?api=1&query=3+rue+du+Chapitre+35000+Rennes',
  },
  since: 2020,
  credentials: {
    trainer: "11 ans formatrice L'Oréal Professionnel",
    colourist: 'Certifiée coloriste monde Redken',
  },
  partner: {
    name: 'Couleurs Gaïa',
    since: 'Partenaire depuis 5 ans',
    vegan: 'Produits de soin capillaire haut de gamme (VEGAN et CRUELTY FREE)',
  },
  planity: {
    rating: 5.0,
    reviews: 201,
    checkedAt: '2026-10-13',
    sub: [
      { label: 'Accueil', value: 5.0 },
      { label: 'Propreté', value: 5.0 },
      { label: 'Cadre et ambiance', value: 5.0 },
      { label: 'Qualité de la prestation', value: 4.9 },
    ],
  },
  google: { rating: 4.9, reviews: null },
}

export interface Rating {
  platform: string
  score: string
  count: string | null
  note: string
  real: true
}
export const ratings: Rating[] = [
  { platform: 'Planity', score: '5,0', count: '201 avis', note: 'relevé le 13 octobre 2026', real: true },
  { platform: 'Google', score: '4,9', count: null, note: 'nombre d’avis à revérifier', real: true },
  { platform: 'PagesJaunes', score: '5', count: '2 avis', note: 'avis de 2020 et 2021', real: true },
]
