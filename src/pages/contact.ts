import { boot, planityBtn } from '../core/shell'
import { facade } from '../core/art'
import { phead } from '../core/ui'
import { hoursRows } from './_hours'
import { business, hours, access } from '../data'

const kindLabel = { metro: 'Métro', bus: 'Bus', parking: 'Parkings', velo: 'Vélos' } as const

function render(): string {
  const b = business
  const kinds = (['metro', 'bus', 'parking', 'velo'] as const).map((k) => {
    const pts = access.filter((a) => a.kind === k)
    return `<div class="cell" data-reveal><h3>${kindLabel[k]}</h3><ul class="list-plain">${pts.map((a) => `<li style="display:block"><strong>${a.name}</strong>, ${a.detail}<br><span class="muted">à environ ${a.meters} m en ligne droite</span></li>`).join('')}</ul></div>`
  }).join('')
  return `
${phead({ title: 'Nous <em>trouver.</em>', lead: 'Au cœur du vieux Rennes, à quelques minutes à pied du métro République. Le Chapitre est une petite rue : cherchez la maison à pans de bois.', crumb: 'Contact', art: facade('ink') })}
<section class="section" style="padding-top:0"><div class="wrap contact-grid split wide-l">
  <div>
    <h2 data-split>Le salon</h2>
    <address style="font-style:normal;font-size:1.2rem;line-height:1.7;margin-top:1rem" data-reveal>${b.fullName}<br>${b.address.street}<br>${b.address.postalCode} ${b.address.city}</address>
    <p data-reveal style="margin-top:1rem"><a class="ul" href="tel:${b.phone.tel}">${b.phone.display}</a></p>
    <p class="muted" data-reveal>Si vous cherchez le « n° 5 » : Le C. est au n° 3.</p>
    <div class="btns" style="margin-top:1.4rem" data-reveal>${planityBtn()}<a class="btn ghost" href="${b.links.maps}" rel="noopener" target="_blank">Ouvrir dans Maps</a></div>
    <p class="muted" style="margin-top:1.2rem" data-reveal>Réservation uniquement en ligne sur Planity, 24 h sur 24, ou par téléphone pour la cérémonie de soins et l’Olaplex.</p>
    <p style="margin-top:1.4rem" data-reveal><a class="ul" href="${b.links.instagram}" rel="noopener" target="_blank">Instagram</a>, <a class="ul" href="${b.links.facebook}" rel="noopener" target="_blank">Facebook</a></p>
  </div>
  <div>
    <h2 data-split>Horaires</h2>
    <p class="open-now" data-open-now style="margin:.8rem 0"><span>Horaires</span></p>
    ${hoursRows(hours)}
    <p class="muted" style="font-size:.9rem;margin-top:.8rem">Jours fériés : à confirmer auprès du salon.</p>
  </div>
</div></section>

<section class="section" style="background:var(--bg-2)" aria-labelledby="ac-h"><div class="wrap">
  <h2 id="ac-h" data-split>Venir au salon.</h2>
  <p class="muted" style="margin:1rem 0 1.6rem;max-width:68ch">Distances mesurées en ligne droite sur OpenStreetMap depuis le point GPS de Planity (octobre 2026). À pied, comptez un peu plus : quelques minutes.</p>
  <div class="bento">${kinds}</div>
</div></section>

<section class="section" aria-labelledby="pr-h"><div class="wrap split">
  <div><h2 id="pr-h" data-split>Bon à savoir.</h2>
  <ul class="list-plain" style="margin-top:1rem" data-reveal>
    <li style="display:block"><strong>Accessibilité</strong> : à confirmer auprès du salon (maison ancienne).</li>
    <li style="display:block"><strong>Moyens de paiement</strong> : à confirmer auprès du salon.</li>
    <li style="display:block"><strong>Contact écrit</strong> : par téléphone ou via Planity. L’adresse e-mail du salon sera publiée une fois confirmée.</li>
  </ul></div>
  <div class="cell tint" data-reveal><h3>Site de démonstration</h3><p>Ce site est une maquette. Les réservations passent par Planity, le seul canal officiel du salon.</p></div>
</div></section>`
}
boot({ page: 'contact', render })
