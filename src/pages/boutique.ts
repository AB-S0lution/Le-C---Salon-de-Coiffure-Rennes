import { boot } from '../core/shell'
import { bottle } from '../core/art'
import { phead, ctaBand, photoThumb, photoFor } from '../core/ui'
import { photo, type Photo } from '../data/photos'
import { eur, esc, qs, qsa } from '../core/dom'
import { products, productTypes, type Product } from '../data'

const pool: Record<Product['type'], string[]> = {
  Shampooing: ['produits-capillaires', 'flacons-pierre', 'flacon-huile'],
  Soin: ['ciseaux-flacon-ambre', 'flacon-huile', 'feuillage'],
  Masque: ['feuillage', 'flacons-pierre'],
  Huile: ['flacon-huile', 'produits-capillaires'],
  Coiffant: ['outils-ardoise', 'brosse', 'seche-cheveux-lin'],
  Accessoire: ['brosse', 'seche-cheveux-peigne', 'ciseaux-bois', 'outils-ardoise'],
  Coffret: ['flacons-pierre', 'ciseaux-flacon-ambre'],
  Vrac: ['flacons-pierre', 'produits-capillaires', 'flacon-huile'],
}
const pic = (p: Product): Photo => photoFor(p.id, pool[p.type].map(photo))

function card(p: Product): string {
  return `<article class="prod" data-type="${p.type}" data-q="${esc((p.name + ' ' + p.hair + ' ' + p.tags.join(' ')).toLowerCase())}">${photoThumb(pic(p))}
  <p class="t">${p.type}, ${p.hair}</p><h3>${p.name}</h3>
  ${p.desc ? `<p class="muted" style="margin:0">${p.desc}</p>` : ''}
  <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}${p.real ? '' : '<span>exemple</span>'}</div>
  <p class="pz num">${p.priceEUR === null ? 'Prix au salon' : eur(p.priceEUR)}</p></article>`
}

function render(): string {
  return `
${phead({ title: 'Le Coin des <em>soins.</em>', lead: 'Quelques produits à emporter, et un bar à vrac pour remplir son flacon. Pas de panier ici : tout se choisit au salon, avec conseil.', crumb: 'Boutique', art: bottle() })}
<section class="section" style="padding-top:0"><div class="wrap">
  <div class="split wide-l" style="margin-bottom:2.4rem"><div><h2 data-split>Le vrac, mode d’emploi.</h2>
  <p class="lead" data-reveal style="margin-top:1rem">Venez avec un flacon vide. Le salon propose des soins capillaires en vrac de la marque Couleurs Gaïa : on le remplit, on le pèse, on repart. Moins d’emballage, la même efficacité.</p></div>
  <p class="sample-note" data-reveal>Seuls les coffrets Davroe et la catégorie du vrac sont réels. Les autres produits sont des exemples génériques, sans marque ni vrai prix.</p></div>
  <div class="search"><label class="sr" for="q">Rechercher un produit</label><input id="q" type="search" placeholder="Rechercher : boucles, blonds, vrac…" autocomplete="off"></div>
  <div class="filters" role="group" aria-label="Filtrer par type" data-filters>
    <button type="button" class="chip" aria-pressed="true" data-t="">Tous</button>
    ${productTypes.map((t) => `<button type="button" class="chip" aria-pressed="false" data-t="${t}">${t}</button>`).join('')}
  </div>
  <div class="prods" data-prods style="margin-top:1.6rem">${products.map(card).join('')}</div>
  <p class="empty" data-empty hidden>Aucun produit ne correspond.</p>
</div></section>
${ctaBand('Un conseil avant d’acheter ?', 'Demandez au salon : le diagnostic dit ce dont vos cheveux ont besoin, et le vrac permet de tester sans engagement.')}`
}

boot({
  page: 'boutique', render,
  init(main) {
    const chips = qsa<HTMLButtonElement>('[data-filters] .chip', main)
    const cards = qsa('.prod', main); const empty = qs('[data-empty]', main)!
    const input = qs<HTMLInputElement>('#q', main)!
    let type = ''
    const apply = () => {
      const q = input.value.trim().toLowerCase(); let n = 0
      cards.forEach((c) => { const on = (!type || c.dataset.type === type) && (!q || c.dataset.q!.includes(q)); c.hidden = !on; if (on) n++ })
      empty.hidden = n > 0
    }
    chips.forEach((c) => c.addEventListener('click', () => { type = c.dataset.t || ''; chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c))); apply() }))
    input.addEventListener('input', apply)
  },
})
