// SAMPLE journal articles written in the salon's voice. Facts inside are limited to the real menu
// (durations, prices, restrictions). Everything else is general advice. Every article is marked sample: true.

export interface Post {
  slug: string
  title: string
  excerpt: string
  category: 'Rituel' | 'Couleur' | 'Soins' | 'Boucles' | 'La maison' | 'Le salon'
  readingMin: number
  date: string
  tags: string[]
  body: string[]
  related: { label: string; href: string }[]
  art: 'facade' | 'chair' | 'tree' | 'strand' | 'bottle' | 'beams' | 'river' | 'scissors' | 'birdcage' | 'bulbs'
  sample: true
}

const raw: Omit<Post, 'sample'>[] = [
  { slug: 'pourquoi-tout-commence-par-un-diagnostic', title: 'Pourquoi tout commence par un diagnostic', category: 'Rituel', readingMin: 4, date: '2026-09-18', tags: ['diagnostic', 'conseils'], art: 'chair',
    excerpt: 'Avant la couleur, avant la coupe, on regarde. Voici ce que cela change pour vous.',
    body: [
      'Chaque rendez-vous au salon commence par un diagnostic personnalisé. Ce n’est pas une formalité : c’est le moment où l’on regarde le cuir chevelu, la fibre, l’historique de vos couleurs, et où l’on vous écoute.',
      'Pour une couleur, le diagnostic se réserve aussi seul, à la carte, à 30 €. Pour un grey blending, il existe en version dédiée à 40 €. Il permet de savoir ce qui est possible, en combien de temps, et à quel prix, avant de s’engager.',
      'Ce que vous pouvez apporter : des photos de ce que vous aimez, la liste de ce que vous avez déjà fait à vos cheveux, et vos habitudes de coiffage. Le reste, nous nous en occupons.',
    ],
    related: [{ label: 'Diagnostic à la carte', href: 'carte/' }, { label: 'Le rituel', href: 'rituel/' }] },
  { slug: 'balayage-effet-soleil-combien-de-temps-prevoir', title: 'Balayage effet soleil : combien de temps prévoir ?', category: 'Couleur', readingMin: 5, date: '2026-09-04', tags: ['balayage', 'durée'], art: 'strand',
    excerpt: 'De 3 h 10 à 4 h 20 selon la longueur : le détail de la carte, pour organiser votre journée.',
    body: [
      'Un balayage naturel est un éclaircissement doux pour un résultat lumière, effet soleil ou californien. Il comprend une patine sans ammoniaque, qui apporte des protéines et referme les écailles.',
      'Sur la carte du salon, un balayage avec brushing dure 3 h 10 en cheveux courts, 3 h 30 en mi-longs, 4 h en longs et 4 h 20 en très longs. Avec la coupe, comptez 3 h 25, 3 h 40, 4 h 05 et 4 h 20.',
      'Les tarifs vont de 154 € à 273 €. Prévoyez une vraie matinée ou un après-midi : le temps long fait partie du résultat.',
    ],
    related: [{ label: 'La Mesure', href: 'carte/#mesure' }, { label: 'La couleur', href: 'couleur/' }] },
  { slug: 'passer-au-blanc-naturel-avec-le-grey-blending', title: 'Passer au blanc naturel avec le grey blending', category: 'Couleur', readingMin: 4, date: '2026-08-21', tags: ['grey blending', 'cheveux blancs'], art: 'scissors',
    excerpt: 'Un passage en douceur plutôt qu’une repousse brutale, et les cas où ce n’est pas possible.',
    body: [
      'Le grey blending consiste à fondre peu à peu la couleur dans vos cheveux blancs, jusqu’à laisser apparaître votre blanc naturel. Il commence par un diagnostic dédié, à 40 €.',
      'Le salon précise qu’il n’est pas possible sur des cheveux colorés avec une teinte végétale, sur des cheveux frisés ou très abîmés. Mieux vaut le savoir avant de vous lancer.',
      'Pour les hommes, il existe aussi un camouflage des cheveux blancs à effet naturel, à 31 €.',
    ],
    related: [{ label: 'Voir la carte', href: 'carte/' }, { label: 'La couleur', href: 'couleur/' }] },
  { slug: 'coloration-vegetale-ce-quil-faut-savoir', title: 'Coloration végétale : ce qu’il faut savoir', category: 'Couleur', readingMin: 5, date: '2026-08-07', tags: ['végétal', 'Couleurs Gaïa'], art: 'bottle',
    excerpt: 'Le salon est partenaire Couleurs Gaïa depuis cinq ans. Voici les questions que l’on pose le plus.',
    body: [
      'La coloration végétale du salon est certifiée bio et vient de Couleurs Gaïa, dont Le C. est salon partenaire depuis cinq ans.',
      'Une règle à connaître : le grey blending n’est pas possible sur des cheveux déjà colorés avec une teinte végétale. Parlez-en lors du diagnostic, avant d’imaginer un changement de cap.',
      'Les tarifs de la couleur végétale ne sont pas affichés sur la carte en ligne. Le plus simple est de téléphoner au salon ou d’en parler au diagnostic.',
    ],
    related: [{ label: 'La couleur', href: 'couleur/' }, { label: 'Le Coin des soins', href: 'boutique/' }] },
  { slug: 'routine-pour-les-cheveux-blonds', title: 'Routine pour les cheveux blonds', category: 'Soins', readingMin: 3, date: '2026-07-24', tags: ['blonds', 'routine'], art: 'strand',
    excerpt: 'Trois gestes simples pour garder un blond clair, brillant et doux entre deux rendez-vous.',
    body: [
      'Un blond ultime s’obtient par éclaircissement poussé, en méthode papier aluminium. Il demande un peu d’attention ensuite : un shampooing doux, un masque une fois par semaine, un peu d’huile sur les pointes.',
      'Le soin profond Olaplex, à 47 €, reconnecte les ponts disulfures et se prolonge à la maison avec la gamme du même nom. Il se réserve par téléphone, pas en ligne.',
      'Entre deux couleurs, un brushing à 42 €, 46 € ou 51 € selon la longueur remet de la forme sans toucher à la fibre.',
    ],
    related: [{ label: 'Blonds ultimes', href: 'carte/#blonds' }, { label: 'Les soins', href: 'soins/' }] },
  { slug: 'boucles-la-coupe-curly', title: 'Boucles : la coupe curly', category: 'Boucles', readingMin: 4, date: '2026-07-10', tags: ['boucles', 'coupe'], art: 'tree',
    excerpt: 'Des boucles définies, légères et pleines de santé : ce que change une coupe pensée pour elles.',
    body: [
      'Beaucoup de clientes racontent avoir eu du mal à trouver un salon qui comprenne leurs boucles. Une coupe curly se pense cheveux secs, en suivant la forme de chaque boucle.',
      'Elle se réserve avec les forfaits de coupe de la carte, à partir de 66 €, pour une heure en cheveux courts.',
      'Apportez votre routine actuelle : produits, fréquence de lavage, façon de sécher. Elle compte autant que la coupe.',
    ],
    related: [{ label: 'Forfaits femme', href: 'carte/#femme' }, { label: 'Réalisations', href: 'realisations/' }] },
  { slug: 'le-cuivre-na-pas-de-saison', title: 'Le cuivré n’a pas de saison', category: 'Couleur', readingMin: 3, date: '2026-06-26', tags: ['cuivré', 'tendance'], art: 'bulbs',
    excerpt: 'Un cuivré chaud illumine un teint en hiver comme en plein été.',
    body: [
      'Un cuivré réussi n’est pas un orange : c’est une famille de nuances, du cuivre foncé au bronze doré, choisie selon votre carnation et vos yeux.',
      'Une coloration avec brushing démarre à 88 € en cheveux courts. Avec la coupe, comptez 112 €.',
      'Le prix indiqué comprend l’application sur les racines uniquement. La couleur sur les longueurs est un supplément, évalué au diagnostic.',
    ],
    related: [{ label: 'Colorations', href: 'carte/#couleurs' }, { label: 'La couleur', href: 'couleur/' }] },
  { slug: 'le-vrac-au-salon', title: 'Le vrac au salon', category: 'Le salon', readingMin: 3, date: '2026-06-12', tags: ['vrac', 'éthique'], art: 'bottle',
    excerpt: 'Un bar à vrac, des flacons en verre et une seconde vie pour vos bouteilles.',
    body: [
      'Dans le salon, un bar à vrac réunit des flacons à pompe en verre ambré, rouge et violet, et des pots hermétiques. Les soins viennent de Couleurs Gaïa.',
      'Le principe : vous gardez votre flacon et nous le remplissons. Moins d’emballage, le même soin.',
      'Les produits du salon sont de soin capillaire haut de gamme, VEGAN et CRUELTY FREE, selon sa présentation sur Planity.',
    ],
    related: [{ label: 'Le Coin des soins', href: 'boutique/' }, { label: 'La Maison', href: 'la-maison/' }] },
  { slug: 'une-maison-a-pans-de-bois-rue-du-chapitre', title: 'Une maison médiévale rue du Chapitre', category: 'La maison', readingMin: 5, date: '2026-05-29', tags: ['maison', 'histoire'], art: 'facade',
    excerpt: 'Poutres apparentes, hauteur sous plafond et cheminée ancienne : l’histoire de la maison du salon.',
    body: [
      'Le 3 rue du Chapitre est un ancien hôtel particulier des XIVe-XVe siècles, selon l’Office de Tourisme de Rennes. Son pan de bois compte parmi les premiers de la ville datés par dendrochronologie.',
      'Le Petit Futé décrit un lieu qui séduit par son cachet : poutres apparentes, grande hauteur sous plafond et cheminée ancienne.',
      'La rue elle-même, autrefois appelée rue du Four au Chapitre, rassemble quelques-unes des plus belles maisons à pans de bois de Rennes.',
    ],
    related: [{ label: 'La Maison', href: 'la-maison/' }, { label: 'Contact et accès', href: 'contact/' }] },
  { slug: 'devenir-coiffeur-se-en-apprentissage', title: 'Devenir coiffeur·se en apprentissage', category: 'Le salon', readingMin: 3, date: '2026-05-15', tags: ['apprentissage', 'BP'], art: 'scissors',
    excerpt: 'Le salon forme des apprenti·es au BP : ce que l’on apprend et comment candidater.',
    body: [
      'Le salon recherchait début 2026 des apprenti·es pour préparer un BP coiffure, avec des arrivées en juin ou en septembre 2026.',
      'On y apprend à regarder avant de faire : le diagnostic, le geste lent du shampooing, la coupe, puis la couleur.',
      'Pour candidater, déposez votre CV au salon, sauf le mercredi, ou appelez le 09 88 43 09 14.',
    ],
    related: [{ label: 'Rejoindre Le C.', href: 'recrutement/' }, { label: 'L’équipe', href: 'equipe/' }] },
]
export const posts: Post[] = raw.map((r) => ({ ...r, sample: true as const }))
export const postCategories = ['Rituel', 'Couleur', 'Soins', 'Boucles', 'La maison', 'Le salon'] as const
