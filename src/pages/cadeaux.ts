import { boot, planityBtn } from '../core/shell'
import { phead } from '../core/ui'
import { eur, u } from '../core/dom'
import { giftIdeas, giftRule, business } from '../data'

function render(): string {
  const steps = [
    ['1', 'Choisir', 'Un montant libre, ou l’idée d’un soin précis.'],
    ['2', 'Offrir', 'Sur Planity avec le bouton « Offrir », ou directement au salon.'],
    ['3', 'Réserver', 'La personne choisit son créneau sur Planity, quand elle veut.'],
  ]
  return `
${phead({ title: 'Cartes <em>cadeaux.</em>', lead: 'Offrir un temps de soin, c’est offrir une heure d’attention. Le montant est libre.', crumb: 'Cartes cadeaux' })}
<section class="section" style="padding-top:0"><div class="wrap">
  <div class="facts">${steps.map((s) => `<div class="fact" data-reveal><p class="eyebrow">Étape ${s[0]}</p><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('')}</div>
  <p class="lead" style="margin-top:2rem;max-width:62ch" data-reveal>${giftRule}</p>
  <h2 data-split style="margin:3rem 0 1rem">Quelques idées.</h2>
  <p class="sample-note">Idées d’exemple. Les prix des soins sont ceux de la carte Planity ; le montant d’une carte reste libre.</p>
  <div class="bento">${giftIdeas.map((g) => `<div class="cell" data-reveal><p class="eyebrow">${g.occasion}</p><h3>${g.label}</h3><p class="num" style="font-family:var(--font-display);font-size:1.8rem;margin:0">${g.amountEUR ? eur(g.amountEUR) : 'Montant libre'}</p></div>`).join('')}</div>
  <div class="btns" style="margin-top:2.4rem"><a class="btn" href="${business.links.planity}" rel="noopener" target="_blank">Offrir sur Planity</a>${planityBtn('ghost')}<a class="btn ghost" href="${u('faq/')}">Questions fréquentes</a></div>
</div></section>`
}
boot({ page: 'cadeaux', render })
