// FAQ. Answers are grounded in verified facts (PLAN.md §3, §13). Phrasing is sample copy; open questions
// are worded cautiously (« contactez le salon ») instead of being invented.

export type FaqGroup = 'Rendez-vous' | 'Couleur' | 'Soins' | 'Tarifs' | 'Accès' | 'Produits'
export interface Faq { id: string; group: FaqGroup; q: string; a: string; sample: true }

export const faq: Faq[] = [
  { id: 'q1', group: 'Rendez-vous', q: 'Comment prendre rendez-vous ?', sample: true,
    a: 'Le salon réserve uniquement via Planity, 24 h sur 24, avec confirmation immédiate. Le bouton « Prendre rendez-vous » de ce site vous y conduit. Vous pouvez aussi téléphoner au 09 88 43 09 14.' },
  { id: 'q2', group: 'Rendez-vous', q: 'Faut-il verser un acompte ?', sample: true,
    a: 'Un acompte est demandé à la réservation en ligne. Annulation gratuite jusqu’à 48 h avant ; au-delà, voir les conditions affichées sur Planity.' },
  { id: 'q3', group: 'Rendez-vous', q: 'Le salon est-il ouvert le mercredi ?', sample: true,
    a: 'Oui. Le salon ouvre du lundi au vendredi de 9 h à 20 h, et le samedi de 9 h à 19 h. Il est fermé le dimanche.' },
  { id: 'q4', group: 'Rendez-vous', q: 'Peut-on venir sans rendez-vous ?', sample: true,
    a: 'Le salon fonctionne sur rendez-vous, de préférence. Pour une demande particulière, appelez-nous.' },
  { id: 'q5', group: 'Rendez-vous', q: 'Prenez-vous les enfants ?', sample: true,
    a: 'Il n’y a pas de forfait enfant en ligne aujourd’hui. Contactez le salon pour en parler.' },
  { id: 'q6', group: 'Tarifs', q: 'Les tarifs affichés sont-ils définitifs ?', sample: true,
    a: 'Ce sont les tarifs publics relevés sur Planity en octobre 2026, à titre indicatif. Vérifiez-les sur Planity avant de réserver.' },
  { id: 'q7', group: 'Tarifs', q: 'Y a-t-il un tarif étudiant ?', sample: true,
    a: 'Oui, à partir de 12 ans : 56 € pour le forfait étudiante (sans brushing) et 37 € pour le forfait étudiant homme.' },
  { id: 'q8', group: 'Tarifs', q: 'Le prix de la couleur comprend-il les longueurs ?', sample: true,
    a: 'Le prix indiqué comprend l’application de la coloration en racine uniquement. La couleur sur les longueurs est un supplément, évalué au diagnostic.' },
  { id: 'q9', group: 'Couleur', q: 'Proposez-vous la décoloration ?', sample: true,
    a: 'Oui, à 80 € pour 1 h 30. Elle n’est pas réservable en ligne : téléphonez au salon.' },
  { id: 'q10', group: 'Couleur', q: 'Combien de temps dure un balayage ?', sample: true,
    a: 'De 3 h 10 à 4 h 20 avec brushing selon la longueur, un peu plus avec la coupe. Le détail est dans La Mesure.' },
  { id: 'q11', group: 'Couleur', q: 'Le grey blending est-il possible pour tous les cheveux ?', sample: true,
    a: 'Non. Le salon indique qu’il n’est pas possible sur des cheveux colorés avec une teinte végétale, sur des cheveux frisés ou très abîmés. Le diagnostic grey blending coûte 40 €.' },
  { id: 'q12', group: 'Couleur', q: 'Faites-vous de la coloration végétale ?', sample: true,
    a: 'Oui, avec Couleurs Gaïa, coloration végétale certifiée bio. Le salon est partenaire depuis cinq ans. Contactez-nous pour les tarifs.' },
  { id: 'q13', group: 'Soins', q: 'Le shampooing se fait-il allongé ?', sample: true,
    a: 'De nombreuses clientes parlent du shampooing allongé et du massage de la tête dans leurs avis. Demandez au salon comment il se déroule aujourd’hui.' },
  { id: 'q14', group: 'Soins', q: 'Peut-on réserver un soin Olaplex en ligne ?', sample: true,
    a: 'Le soin profond Olaplex (47 €, 30 minutes) et la cérémonie de soins (75 €, 1 h 05) ne se réservent pas en ligne. Appelez le salon.' },
  { id: 'q15', group: 'Soins', q: 'Proposez-vous un service de barbier ?', sample: true,
    a: 'Non. Le salon propose un entretien de barbe à la tondeuse à 17 €, sans rasage.' },
  { id: 'q16', group: 'Produits', q: 'Vos produits sont-ils vegan ?', sample: true,
    a: 'Le salon indique n’utiliser que des produits de soin capillaire haut de gamme, VEGAN et CRUELTY FREE.' },
  { id: 'q17', group: 'Accès', q: 'Comment venir au salon ?', sample: true,
    a: 'Le salon est au 3 rue du Chapitre, à quelques minutes à pied du métro République (ligne a). Le parking des Lices est à proximité.' },
  { id: 'q18', group: 'Accès', q: 'Quels moyens de paiement acceptez-vous ?', sample: true,
    a: 'Selon un annuaire professionnel : carte bancaire et sans contact. À confirmer avec le salon.' },
]
export const faqGroups: FaqGroup[] = ['Rendez-vous', 'Tarifs', 'Couleur', 'Soins', 'Produits', 'Accès']
