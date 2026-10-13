import { boot, planityBtn } from '../core/shell'
import { phead, quote, photoSlim } from '../core/ui'
import { photo } from '../data/photos'
import { esc, qs, qsa } from '../core/dom'
import { business, ratings, displayReviews, themeLabels, type Theme } from '../data'

const fr = (n: number) => n.toFixed(1).replace('.', ',')

function render(): string {
  const p = business.planity
  return `
${phead({ title: 'Ce que disent <em>les clientes.</em>', lead: `${fr(p.rating)} sur 5 sur Planity, d’après ${p.reviews} avis (relevé du ${p.checkedAt}). Voici une sélection d’avis réels, cités tels quels.`, crumb: 'Avis' })}
${photoSlim(photo('fauteuils-comptoir'), '50% 60%')}
<section class="section" style="padding-top:0"><div class="wrap">
  <div class="facts" style="margin-bottom:3rem">
    <div class="fact"><h3 class="num">${fr(p.rating)} / 5</h3><p>Note Planity, ${p.reviews} avis</p></div>
    ${p.sub.map((s) => `<div class="fact"><h3 class="num">${fr(s.value)}</h3><p>${s.label}</p></div>`).join('')}
    <div class="fact"><h3 class="num">${fr(business.google.rating)} / 5</h3><p>Note Google, nombre d’avis à confirmer</p></div>
  </div>
  <div class="filters" role="group" aria-label="Filtrer par thème" data-filters>
    <button type="button" class="chip" aria-pressed="true" data-t="">Tous</button>
    ${(Object.keys(themeLabels) as Theme[]).map((t) => `<button type="button" class="chip" aria-pressed="false" data-t="${t}">${themeLabels[t]}</button>`).join('')}
  </div>
  <div class="qlist" style="margin-top:1.8rem" data-list>${displayReviews.map((r) => `<div data-themes="${r.themes.join(' ')}">${quote(r)}</div>`).join('')}</div>
  <p class="empty" data-empty hidden>Aucun avis pour ce thème.</p>
  <p class="muted" style="margin-top:2rem;max-width:70ch">Les avis proviennent de Planity et sont reproduits sans modification, sans nom de cliente. ${ratings.map((r) => esc(r.note)).join(' ')}</p>
  <div class="btns" style="margin-top:2rem">${planityBtn('', 'Lire tous les avis sur Planity')}</div>
</div></section>`
}

boot({
  page: 'avis', render,
  init(main) {
    const chips = qsa<HTMLButtonElement>('[data-filters] .chip', main)
    const items = qsa('[data-themes]', main); const empty = qs('[data-empty]', main)!
    chips.forEach((c) => c.addEventListener('click', () => {
      chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)))
      let n = 0
      items.forEach((i) => { const on = !c.dataset.t || i.dataset.themes!.split(' ').includes(c.dataset.t); i.hidden = !on; if (on) n++ })
      empty.hidden = n > 0
    }))
  },
})
