// Gift cards. REAL: sold on Planity (« Offrir ») and at the salon; free amount. Validity conflicts in Planity's own data
// (6 vs 12 months): the site says « voir conditions sur Planity ». Amounts and occasions below are SAMPLE.
export interface GiftIdea { id: string; label: string; amountEUR: number | null; serviceId: string | null; occasion: string; sample: true }
export const giftIdeas: GiftIdea[] = [
  { id: 'c1', label: 'Un diagnostic', amountEUR: 30, serviceId: 'al-diag', occasion: 'Pour commencer', sample: true },
  { id: 'c2', label: 'Carte 50 €', amountEUR: 50, serviceId: null, occasion: 'Petit geste', sample: true },
  { id: 'c3', label: 'Un forfait cheveux mi-longs', amountEUR: 70, serviceId: 'f-mi', occasion: 'Anniversaire', sample: true },
  { id: 'c4', label: 'Carte 100 €', amountEUR: 100, serviceId: null, occasion: 'Fête des mères', sample: true },
  { id: 'c5', label: 'La cérémonie de soins', amountEUR: 75, serviceId: 'so-ceremonie', occasion: 'Un moment pour soi', sample: true },
  { id: 'c6', label: 'Carte 150 €', amountEUR: 150, serviceId: null, occasion: 'Noël', sample: true },
]
export const giftRule = 'Vendue sur Planity (bouton « Offrir ») ou au salon, à montant libre. Validité : voir conditions sur Planity.'
