// « Le Coin des soins » (in-salon retail, no e-shop).
// REAL: the Davroe coffrets (Facebook, March 2026): Volume/Repair « For You With Love » 70 €, Curl 100 €, Moisture (price unknown).
// REAL category only: Couleurs Gaïa refills sold en vrac (no product names or prices invented).
// Everything else is SAMPLE with generic, brand-free names.

export type ProductType = 'Shampooing' | 'Soin' | 'Masque' | 'Huile' | 'Coiffant' | 'Accessoire' | 'Coffret' | 'Vrac'
export type ProductTag = 'vegan' | 'cruelty-free' | 'bio' | 'vrac' | 'boucles' | 'blonds' | 'cuir chevelu' | 'recharge'

export interface Product {
  id: string
  name: string
  type: ProductType
  hair: string
  tags: ProductTag[]
  priceEUR: number | null
  desc: string
  real: boolean
  sample: boolean
}

const p = (id: string, name: string, type: ProductType, hair: string, tags: ProductTag[], priceEUR: number | null, desc = '', real = false): Product =>
  ({ id, name, type, hair, tags, priceEUR, desc, real, sample: !real })

export const products: Product[] = [
  p('p1', 'Coffret Davroe Volume / Repair « For You With Love »', 'Coffret', 'Tous types', [], 70, 'Deux produits offerts. Disponible au salon.', true),
  p('p2', 'Coffret Davroe Curl', 'Coffret', 'Boucles', ['boucles'], 100, 'Deux produits offerts. Disponible au salon.', true),
  p('p3', 'Coffret Davroe Moisture', 'Coffret', 'Secs', [], null, 'Prix à demander au salon.', true),
  p('p4', 'Soins capillaires en vrac, Couleurs Gaïa', 'Vrac', 'Selon diagnostic', ['vrac', 'bio', 'recharge'], null, 'Au bar à vrac : venez avec votre flacon, nous le remplissons. Références et prix au salon.', true),
  p('p5', 'Shampooing doux, recharge 250 ml', 'Shampooing', 'Tous types', ['vegan', 'cruelty-free', 'vrac', 'recharge'], 14),
  p('p6', 'Shampooing doux, recharge 500 ml', 'Shampooing', 'Tous types', ['vegan', 'cruelty-free', 'vrac', 'recharge'], 24),
  p('p7', 'Shampooing cuir chevelu sensible, 250 ml', 'Shampooing', 'Cuir chevelu', ['vegan', 'cruelty-free', 'cuir chevelu'], 16),
  p('p8', 'Shampooing violet pour blonds, 250 ml', 'Shampooing', 'Blonds', ['vegan', 'cruelty-free', 'blonds'], 18),
  p('p9', 'Shampooing boucles, recharge 250 ml', 'Shampooing', 'Boucles', ['vegan', 'cruelty-free', 'boucles', 'vrac', 'recharge'], 15),
  p('p10', 'Shampooing clarifiant, 250 ml', 'Shampooing', 'Gras', ['vegan', 'cruelty-free', 'cuir chevelu'], 15),
  p('p11', 'Après-shampooing léger, recharge 250 ml', 'Soin', 'Fins', ['vegan', 'cruelty-free', 'vrac', 'recharge'], 14),
  p('p12', 'Après-shampooing nourrissant, recharge 250 ml', 'Soin', 'Secs', ['vegan', 'cruelty-free', 'vrac', 'recharge'], 15),
  p('p13', 'Soin sans rinçage boucles, 150 ml', 'Soin', 'Boucles', ['vegan', 'cruelty-free', 'boucles'], 19),
  p('p14', 'Soin sans rinçage blonds, 150 ml', 'Soin', 'Blonds', ['vegan', 'cruelty-free', 'blonds'], 20),
  p('p15', 'Masque réparateur, pot hermétique 200 ml', 'Masque', 'Abîmés', ['vegan', 'cruelty-free', 'vrac'], 28),
  p('p16', 'Masque hydratant, pot hermétique 200 ml', 'Masque', 'Secs', ['vegan', 'cruelty-free', 'vrac'], 26),
  p('p17', 'Masque éclat pour cheveux colorés, 200 ml', 'Masque', 'Colorés', ['vegan', 'cruelty-free'], 29),
  p('p18', 'Masque boucles, 200 ml', 'Masque', 'Boucles', ['vegan', 'cruelty-free', 'boucles'], 27),
  p('p19', 'Huile nourrissante, flacon pompe 50 ml', 'Huile', 'Secs', ['vegan', 'cruelty-free', 'bio'], 22),
  p('p20', 'Huile sèche pour les pointes, 50 ml', 'Huile', 'Tous types', ['vegan', 'cruelty-free', 'bio'], 21),
  p('p21', 'Huile cuir chevelu, 30 ml', 'Huile', 'Cuir chevelu', ['vegan', 'cruelty-free', 'bio', 'cuir chevelu'], 24),
  p('p22', 'Crème coiffante boucles, 150 ml', 'Coiffant', 'Boucles', ['vegan', 'cruelty-free', 'boucles'], 18),
  p('p23', 'Spray volume racines, 150 ml', 'Coiffant', 'Fins', ['vegan', 'cruelty-free'], 17),
  p('p24', 'Sérum brillance, 50 ml', 'Coiffant', 'Tous types', ['vegan', 'cruelty-free'], 23),
  p('p25', 'Spray thermoprotecteur, 150 ml', 'Coiffant', 'Tous types', ['vegan', 'cruelty-free'], 16),
  p('p26', 'Peigne en bois à dents larges', 'Accessoire', 'Boucles', ['boucles'], 12),
  p('p27', 'Brosse démêlante', 'Accessoire', 'Tous types', [], 25),
  p('p28', 'Pinces en bois, lot de 4', 'Accessoire', 'Tous types', [], 9),
  p('p29', 'Serviette microfibre', 'Accessoire', 'Boucles', ['boucles'], 19),
  p('p30', 'Bonnet de nuit en satin', 'Accessoire', 'Tous types', [], 24),
  p('p31', 'Flacon vide en verre ambré, pompe 250 ml', 'Accessoire', 'Tous types', ['vrac', 'recharge'], 5),
  p('p32', 'Brume légère pour cheveux, 100 ml', 'Coiffant', 'Tous types', ['vegan', 'cruelty-free'], 18),
]
export const productTypes: ProductType[] = ['Coffret', 'Vrac', 'Shampooing', 'Soin', 'Masque', 'Huile', 'Coiffant', 'Accessoire']
