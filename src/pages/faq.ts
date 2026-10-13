import { boot, planityBtn } from '../core/shell'
import { phead } from '../core/ui'
import { esc, qs, qsa } from '../core/dom'
import { faq, faqGroups } from '../data'

function render(): string {
  return `
${phead({ title: 'Questions <em>fréquentes.</em>', lead: 'Réservation, couleur, soins, tarifs, accès. Les réponses reprennent la carte Planity ; les points à confirmer sont signalés.', crumb: 'FAQ' })}
<section class="section" style="padding-top:0"><div class="wrap" style="max-width:900px">
  <div class="search"><label class="sr" for="q">Rechercher une question</label><input id="q" type="search" placeholder="Rechercher : acompte, mercredi, métro…" autocomplete="off"></div>
  ${faqGroups.map((g) => `<div data-group><h2 style="font-size:1.9rem;margin:2.4rem 0 .6rem">${g}</h2><div class="acc">${faq.filter((f) => f.group === g).map((f) => `<details data-q="${esc((f.q + ' ' + f.a).toLowerCase())}"><summary>${f.q}</summary><div class="ans">${f.a}</div></details>`).join('')}</div></div>`).join('')}
  <p class="empty" data-empty hidden>Aucune question ne correspond. Appelez le salon, il vous répondra.</p>
  <div class="btns" style="margin-top:2.4rem">${planityBtn()}</div>
</div></section>`
}
boot({
  page: 'faq', render,
  init(main) {
    const input = qs<HTMLInputElement>('#q', main)!; const empty = qs('[data-empty]', main)!
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase(); let n = 0
      qsa('details', main).forEach((d) => { const on = !q || d.dataset.q!.includes(q); d.hidden = !on; if (on) n++ })
      qsa('[data-group]', main).forEach((g) => { g.hidden = !qsa('details', g).some((d) => !d.hidden) })
      empty.hidden = n > 0
    })
  },
})
