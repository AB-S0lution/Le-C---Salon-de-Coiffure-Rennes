// REAL customer quotes, verbatim (PLAN.md §4). Attributed to the platform and date only, never to a name.
// Spelling and punctuation are the reviewers' own. Entries flagged display:false are kept for the record
// but never rendered (emoji, unconfirmed wording, or a stylist not confirmed as current).

export type Theme = 'conseils' | 'ambiance' | 'boucles' | 'couleur' | 'equipe'

export interface Review {
  id: number
  text: string
  platform: 'Planity' | 'PagesJaunes'
  date: string // ISO
  service?: string
  themes: Theme[]
  lang: 'fr' | 'en'
  display: boolean
  why?: string
  real: true
}

const r = (id: number, platform: Review['platform'], date: string, text: string, themes: Theme[], extra: Partial<Review> = {}): Review => ({
  id, platform, date, text, themes, lang: 'fr', display: true, real: true, ...extra,
})

export const reviews: Review[] = [
  r(1, 'Planity', '2026-09-09', 'Merci à Magalie j\'adore ma coupe', ['equipe']),
  r(2, 'Planity', '2026-09-06', 'Tout était parfait. De vrais conseils adaptés à la nature de mes cheveux. Je reviens donc en novembre', ['conseils']),
  r(3, 'Planity', '2026-08-15', 'Esprit convivial explications claires ambiance cosy tout était réunis pour un premier rendez-vous réussi', ['conseils', 'ambiance']),
  r(4, 'Planity', '2026-08-12', 'Magalie est très professionnelle et maîtrise parfaitement ses techniques. L\'institut est magnifique, propre et chaleureux. Les produits sont de qualité. Je recommande vivement!', ['equipe', 'ambiance']),
  r(6, 'Planity', '2026-08-11', 'Premier passage pour une coupe, je suis satisfaite des conseils de la coupe! Je recommande vivement!', ['conseils']),
  r(7, 'Planity', '2026-07-31', 'Cela fait 4 fois que je viens dans ce salon toujours très agréable et je ressors toujours contente, alors qu\'avec mes cheveux bouclés j\'ai eu du mal à trouver un salon qui me convenait !', ['boucles']),
  r(8, 'Planity', '2026-06-02', 'Super, tres heureuse de la prestation et l\'accueil. Merci', ['equipe']),
  r(9, 'Planity', '2026-06-01', 'Un salon chaleureux, des personnes de caractère. L\'ambiance n\'est pas aseptisée et le savoir-faire est vraiment au rendez-vous. J\'ai apprécié l\'ambiance atelier d\'artiste.', ['ambiance', 'equipe']),
  r(11, 'Planity', '2026-05-24', 'Jade m\'a donné des précieux conseils pour ma routine et mon type de cheveux, je recommande', ['conseils'], { display: false, why: 'names a stylist not confirmed as current' }),
  r(12, 'PagesJaunes', '2021-12-10', 'Depuis deux que je cherchais un coiffeur comme celui ci franchement c\'est le meilleur', ['equipe']),
  r(13, 'PagesJaunes', '2021-12-10', 'Une équipe super qui se relaye, solidaire, et efficace.', ['equipe']),
  r(14, 'PagesJaunes', '2020-10-22', 'C\'est un super salon très cosy style appartement', ['ambiance'], { display: false, why: 'exact wording medium confidence' }),
  r(15, 'PagesJaunes', '2020-10-22', 'Magali est une grande professionnelle, douce, bienveillante.', ['equipe'], { display: false, why: 'exact wording medium confidence' }),
  r(16, 'Planity', '2023-07-26', 'C’est LE salon de coiffure dont on rêve !', ['ambiance']),
  r(17, 'Planity', '2023-06-14', 'Je fréquente le salon depuis son ouverture il y a trois ans. La qualité des prestations et des conseils est toujours au rendez vous. L ensemble de l équipe est aux petits soins pour ses clients. Les produits proposés sont adaptés et haut de gamme. C est toujours un réel plaisir', ['conseils', 'equipe']),
  r(18, 'Planity', '2023-06-16', 'Le meilleur salon de coiffure de Rennes !', ['equipe'], { service: 'Forfait Homme' }),
  r(19, 'Planity', '2023-09-30', 'Ce salon sort de l’ordinaire, atmosphère calme cosy, prestation au top. Ici ils travaillent vos cheveux au millimètre près. Et le massage de la tête au shampoing qui dure pour le plus grand plaisir 👍', ['ambiance'], { display: false, why: 'contains an emoji' }),
  r(20, 'Planity', '2023-12-26', 'Expérience peu habituelle. Le shampoing allongé c’est génial. À refaire', ['ambiance'], { service: 'Forfait Homme' }),
  r(21, 'Planity', '2023-12-29', '1ère visite. Magali a pris le temps de m\'écouter et de comprendre mes souhaits. Elle explique très bien ce qu\'elle propose de faire, sans forcer. Résultat très satisfaisant !', ['conseils']),
  r(22, 'Planity', '2024-02-14', 'Habitué du salon, c\'est un lieu paisible  (à la différence des salons bruyants avec radio commerciale) et engagé dans des produits sains. Je recommande totalement.', ['ambiance'], { service: 'Forfait Homme' }),
  r(23, 'Planity', '2024-02-24', 'L\'accueil, le cadre, le conseil, les produits utilisés, le soin, la coupe et le coiffage, tout était vraiment parfait. Dorlotée pendant plus d\'une heure, je me suis sentie en de très bonnes mains.', ['conseils', 'ambiance']),
  r(24, 'Planity', '2024-03-24', 'Endroit magique, serein, cocooning, déco naturelle élégante, coiffeuses accueillantes, belle découverte ! Salon hors du commun, contente de la prise en charge et conseils coiffure pour mon GD ado👍', ['ambiance'], { display: false, why: 'contains an emoji' }),
  r(25, 'Planity', '2024-05-31', 'Un salon atypique qui sort son épingle du jeu par rapport aux autres salons, la prestation est au top. Cheveux coupés au millimètre près. Cadre très agréable, vieilles pierres, déco superbe.', ['ambiance']),
  r(26, 'Planity', '2024-10-05', 'Excellent accueil, le cadre est magnifique. Magali s’est très bien occupée de mes cheveux bouclés, je suis ravie.', ['boucles', 'ambiance']),
  r(27, 'Planity', '2025-03-08', 'Magnifique salon au cœur du vieux Rennes.Personnel très professionnel, souriant aimable, serviable à votre écoute. Conseils au top par une professionnelle de la coloration.', ['couleur', 'conseils'], { service: 'Diagnostic' }),
  r(28, 'Planity', '2025-06-16', 'Personnel très professionnel, à l\'écoute. On prend le temps qu\'il faut et on vous donne de vrais conseils personnalisés dans un très joli cadre. Merci beaucoup !', ['conseils', 'equipe']),
  r(29, 'Planity', '2025-07-24', 'J adore le résultat , très naturel !', ['couleur'], { service: 'Balayage mi-longs avec coupe' }),
  r(30, 'Planity', '2026-01-20', 'Le lieu est vraiment très agréable; l\'accueil très chaleureux et les prestations de qualités. Il y a un vrai savoir faire entre les mains de cette équipe. Le plus du salon réside dans le service.', ['equipe', 'ambiance']),
  r(31, 'Planity', '2026-04-04', 'Magalie est une professionnelle sérieuse et prévenante. Le cadre est magnifique.', ['couleur', 'equipe'], { service: 'Diagnostic grey blending' }),
  r(32, 'Planity', '2026-05-05', 'Merci à Soizic très sympathique et professionnelle qui m\'a permis d\'accepter mes boucles. Moi qui me lisse les cheveux depuis des années !', ['boucles'], { display: false, why: 'names a stylist not confirmed as current' }),
  r(33, 'Planity', '2024-12-29', 'Perfection! I’ll come back for sure', ['equipe'], { lang: 'en' }),
]

export const displayReviews = reviews.filter((x) => x.display && x.lang === 'fr')
export const themeLabels: Record<Theme, string> = {
  conseils: 'Conseils', ambiance: 'Ambiance', boucles: 'Boucles', couleur: 'Couleur', equipe: 'Équipe',
}

export function fmtDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}
