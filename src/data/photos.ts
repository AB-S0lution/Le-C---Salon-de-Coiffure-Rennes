// Photos d'illustration Unsplash (licence Unsplash), pas des photos du commerce.
// EXEMPLE: aucune de ces images ne montre le salon Le C., son équipe ou ses clientes.
// A remplacer par les photos du salon quand Magali en aura cédé les droits (PLAN.md, TODO 17).

export type PhotoTag = 'lieu' | 'atelier' | 'outils' | 'couleur' | 'soins'

export interface Photo {
  slug: string
  src: string
  alt: string
  tag: PhotoTag
  width: number
  height: number
  credit: string
  url: string
}

const p = (slug: string, alt: string, tag: PhotoTag, width: number, height: number, id: string): Photo => ({
  slug, src: import.meta.env.BASE_URL + 'photos/' + slug + '.jpg', alt, tag, width, height,
  credit: 'Unsplash (licence Unsplash)', url: 'https://images.unsplash.com/photo-' + id,
})

export const photos: Photo[] = [
  p('coupe-en-cours', 'Coupe aux ciseaux en cours dans un salon', 'atelier', 1400, 933, '1634449571010-02389ed0f9b0'),
  p('brushing-brosse-ronde', 'Brushing à la brosse ronde et au séchoir', 'atelier', 1400, 935, '1580618672591-eb180b1a973f'),
  p('bigoudi', 'Bigoudi gris tenu entre les doigts', 'outils', 1400, 2492, '1560869713-7d0a29430803'),
  p('outils-pinceau-couleur', 'Brosses, ciseaux et pinceau de coloration en main', 'outils', 1400, 935, '1595475884562-073c30d45670'),
  p('fauteuils-miroirs-ronds', 'Trois fauteuils noirs face à des miroirs ronds sur un mur sombre', 'lieu', 1400, 972, '1600948836101-f9ffda59d250'),
  p('salon-mur-brique', 'Salon de coiffure avec fauteuils noirs, miroirs ronds et mur de brique', 'lieu', 1400, 934, '1633681926022-84c23e8cb2d6'),
  p('seche-cheveux', 'Séchoir à cheveux tenu à la main', 'outils', 1400, 935, '1562322140-8baeececf3df'),
  p('fauteuils-comptoir', 'Fauteuils de coiffure devant un long comptoir et un miroir', 'lieu', 1400, 933, '1521590832167-7bcbfaa6381f'),
  p('bacs-lavage', 'Rangée de bacs de lavage, en noir et blanc', 'lieu', 1400, 2100, '1637777269327-c4d5c7944d7b'),
  p('torsade-auburn', 'Torsade de cheveux auburn vue de dos', 'couleur', 900, 1600, '1614020863825-28a0bb7e3c3c'),
  p('coupe-aux-ciseaux', 'Coiffeuse coupant des longueurs aux ciseaux', 'atelier', 1400, 2100, '1707812343087-c9ff9e5abb43'),
  p('meches-brunes', 'Mèches brunes posées sur un tissu blanc', 'couleur', 1400, 933, '1602549179763-ce6c9df961b7'),
  p('cheveux-au-vent', 'Longue chevelure ondulée en mouvement', 'couleur', 1400, 930, '1470259078422-826894b933aa'),
  p('blond-lumineux', 'Cheveux blonds lumineux sur une chemise blanche', 'couleur', 900, 1350, '1605980766335-d3a41c7332a1'),
  p('violine', 'Cheveux violine sur un mur clair', 'couleur', 1100, 1650, '1492106087820-71f1a00d2b11'),
  p('poivre-et-sel', 'Cheveux gris et noirs, nuance poivre et sel', 'couleur', 900, 1125, '1605980625600-88b46abafa8d'),
  p('coiffage-en-cours', 'Mise en forme des cheveux par une coiffeuse', 'atelier', 1400, 933, '1707979577466-2d6109c68a45'),
  p('cheveux-fond-noir', 'Cheveux bruns sur fond noir', 'couleur', 1100, 1650, '1620939391250-eb822ac0818a'),
  p('cheveux-longs', 'Longueurs souples et brillantes', 'couleur', 1400, 1498, '1669501084883-85849ad2d40f'),
  p('flacons-pierre', 'Flacons noirs posés sur des blocs de pierre grise', 'soins', 1400, 2098, '1567721913486-6585f069b332'),
  p('brosse', 'Brosse à cheveux noire', 'outils', 1400, 804, '1527799820374-dcf8d9d4a388'),
  p('feuillage', 'Feuilles vertes sur fond blanc, pour le végétal', 'soins', 1100, 1467, '1607008829749-c0f284a49fc4'),
  p('produits-capillaires', 'Assortiment de produits capillaires', 'soins', 1100, 1375, '1701976857871-a46363644519'),
  p('seche-cheveux-lin', 'Séchoir noir posé sur du linge', 'outils', 1400, 933, '1620331309205-b5a4669ac526'),
  p('outils-ardoise', 'Tondeuses, ciseaux, peigne et produits sur une ardoise', 'outils', 1400, 933, '1621605815971-fbc98d665033'),
  p('ciseaux-peigne', 'Ciseaux en acier et peigne', 'outils', 1400, 1120, '1596362601603-b74f6ef166e4'),
  p('ciseaux-serviette', 'Ciseaux posés sur une serviette', 'outils', 1400, 933, '1549271568-e87e07c5406b'),
  p('brosse-et-ciseaux', 'Brosse et ciseaux sur une table', 'outils', 1400, 933, '1678356163587-6bb3afb89679'),
  p('ciseaux-flacon-ambre', 'Ciseaux à côté d’un flacon en verre ambré, sur bois', 'soins', 1400, 1750, '1584906755531-f83be6b88d6b'),
  p('seche-cheveux-peigne', 'Séchoir gris et peigne rouge', 'outils', 1400, 935, '1522336284037-91f7da073525'),
  p('ciseaux-bois', 'Collection de ciseaux sur une table en bois', 'outils', 1400, 933, '1675599193741-e6f078a65fbd'),
  p('meches-deux-tons', 'Mèches brunes et noires sur fond blanc', 'couleur', 1400, 933, '1588075438444-11018654f08d'),
  p('queue-de-cheval', 'Queue-de-cheval vue de près', 'couleur', 1100, 1650, '1579083390476-968b47fe96f2'),
  p('longueurs-de-dos', 'Longs cheveux vus de dos', 'couleur', 1100, 1955, '1710527988568-3040fd125358'),
  p('cheveux-noir-et-blanc', 'Chevelure en noir et blanc', 'couleur', 1400, 894, '1675785782005-875e1523de4c'),
  p('texture-brune', 'Texture de cheveux bruns sur fond noir', 'couleur', 1400, 2100, '1774876379962-e39b8ac20b95'),
]

export const photoTagLabel: Record<PhotoTag, string> = { lieu: 'Le lieu', atelier: 'À l’atelier', outils: 'Les outils', couleur: 'Couleur et matière', soins: 'Soins' }

export const photo = (slug: string): Photo => photos.find((x) => x.slug === slug) ?? photos[0]
export const byTag = (tag: PhotoTag): Photo[] => photos.filter((x) => x.tag === tag)
