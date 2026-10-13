// REAL but from Planity configuration data (not a published policy). Always phrase with « voir conditions Planity ».

export const booking = {
  depositOnline: true,
  freeCancellationHours: 48,
  lateCancelPct: 30,
  noShowPct: 30,
  slotStepMinutes: 5,
  giftCard: { online: true, atSalon: true, validityMonths: null as number | null /* 6 vs 12 months conflict */ },
  wording:
    'Un acompte est demandé à la réservation en ligne. Annulation gratuite jusqu’à 48 h avant, voir conditions Planity.',
  source: 'https://www.planity.com/le-c-coiffeur-35000-rennes',
  real: true as const,
}
