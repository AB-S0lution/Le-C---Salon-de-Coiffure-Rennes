// Recruitment. REAL: Facebook post of 25/02/2026 (BP apprentices from June or September 2026; CVs at the salon, not on Wednesdays).
// The « what you learn » bullets are SAMPLE.
export interface Job { id: string; title: string; text: string; when: string; real: boolean; learn: string[]; sample: boolean }
export const jobs: Job[] = [
  { id: 'j1', title: 'Apprenti·e BP coiffure', real: true, sample: false, when: 'Dès juin ou septembre 2026',
    text: 'Vous êtes passionné·e par la coiffure et motivé·e pour vous former en BP ? Rejoignez l’équipe. Déposez votre CV au salon, sauf le mercredi.',
    learn: [] },
  { id: 'j2', title: 'Ce que l’on apprend ici', real: false, sample: true, when: 'Exemple',
    text: 'Un aperçu de ce que peut contenir une formation dans un salon de coloristes.',
    learn: ['Écouter et poser un diagnostic', 'Le geste lent du shampooing et du rituel massant', 'La coupe, au millimètre', 'Les bases de la couleur et du balayage', 'Accueillir et conseiller'] },
]
