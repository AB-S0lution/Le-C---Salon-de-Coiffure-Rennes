// Ritual steps. Names are the salon's own wording (Planity). The one-line explanations are SAMPLE copy.

export interface RitualStep {
  id: string
  name: string
  line: string
  quote?: { text: string; source: string }
  real: boolean
  sample: true
}

export const ritual: RitualStep[] = [
  { id: 'diagnostic', name: 'Diagnostic personnalisé', line: 'On regarde le cuir chevelu, la fibre, l’historique de couleur. On écoute ce que vous voulez. Rien ne commence avant.', real: true, sample: true,
    quote: { text: 'Magali a pris le temps de m\'écouter et de comprendre mes souhaits.', source: 'Avis Planity, 29/12/2023' } },
  { id: 'shampooing', name: 'Shampooing traitant', line: 'Allongé, la nuque soutenue par un support molletonné, avec un soin choisi pour votre cheveu.', real: true, sample: true,
    quote: { text: 'Le shampoing allongé c’est génial.', source: 'Avis Planity, 26/12/2023' } },
  { id: 'massant', name: 'Rituel massant', line: 'Un massage de la tête qui dure vraiment. C’est le moment où l’on ralentit.', real: true, sample: true,
    quote: { text: 'Dorlotée pendant plus d\'une heure, je me suis sentie en de très bonnes mains.', source: 'Avis Planity, 24/02/2024' } },
  { id: 'soin', name: 'Soin personnalisé', line: 'Un soin adapté à ce que le diagnostic a montré, pas un soin de série.', real: true, sample: true },
  { id: 'coupe', name: 'Coupe', line: 'Une coupe pensée pour votre longueur, votre texture et la façon dont vous vous coiffez au quotidien.', real: true, sample: true,
    quote: { text: 'Cheveux coupés au millimètre près.', source: 'Avis Planity, 31/05/2024' } },
  { id: 'coiffage', name: 'Coiffage / brushing', line: 'On termine en vous montrant comment le refaire chez vous.', real: true, sample: true },
]

export const ceremony: { name: string; line: string }[] = [
  { name: 'Diagnostic du cuir chevelu et des cheveux', line: 'Un regard précis avant de choisir quoi appliquer.' },
  { name: 'Huiles vierges bio', line: 'Appliquées sur les longueurs et massées.' },
  { name: 'Rituel massant', line: 'Le même geste lent que dans nos forfaits, plus long.' },
  { name: '« Spa du cheveu »', line: 'Le nom que le salon donne à ce temps de soin.' },
  { name: 'Shampooing ou argile naturelle', line: 'Selon ce que montre le diagnostic.' },
  { name: 'Masque', line: 'Pour refermer la fibre et finir en douceur.' },
]
