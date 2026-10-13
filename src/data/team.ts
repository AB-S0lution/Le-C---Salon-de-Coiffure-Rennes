// REAL names from Planity's public « Collaborateurs » block (13/10/2026): Magali and Annaëlle only.
// Jade and Soizic are active but hidden on Planity: pendingConfirmation, never rendered until the owner confirms.
// Never list Théa, Fabrice, Eva, Léa, Victoire or Kim as current.

export interface Member {
  id: string
  firstName: string
  role: string
  roleConfirmed: boolean
  credentials: string[]
  pendingConfirmation: boolean
  real: true
}

export const team: Member[] = [
  { id: 'magali', firstName: 'Magali', role: 'Fondatrice, coiffeuse coloriste', roleConfirmed: true,
    credentials: ['11 ans formatrice L\'Oréal Professionnel', 'Certifiée coloriste monde Redken'], pendingConfirmation: false, real: true },
  { id: 'annaelle', firstName: 'Annaëlle', role: 'Équipe du salon', roleConfirmed: false, credentials: [], pendingConfirmation: false, real: true },
  { id: 'jade', firstName: 'Jade', role: 'Équipe du salon', roleConfirmed: false, credentials: [], pendingConfirmation: true, real: true },
  { id: 'soizic', firstName: 'Soizic', role: 'Équipe du salon', roleConfirmed: false, credentials: [], pendingConfirmation: true, real: true },
]
export const visibleTeam = team.filter((m) => !m.pendingConfirmation)
