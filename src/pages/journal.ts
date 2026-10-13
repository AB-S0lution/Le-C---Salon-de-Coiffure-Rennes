import { boot } from '../core/shell'
import { scissors } from '../core/art'
import { phead, postCard } from '../core/ui'
import { esc, qs, qsa } from '../core/dom'
import { posts, postCategories, events } from '../data'

function render(): string {
  return `
${phead({ title: 'Le Journal <em>du salon.</em>', lead: 'Des conseils de couleur, de soin et de coupe, et des histoires de la maison. Tous les articles sont des exemples écrits pour ce site.', crumb: 'Journal', art: scissors() })}
<section class="section" style="padding-top:0"><div class="wrap">
  <div class="search"><label class="sr" for="q">Rechercher un article</label><input id="q" type="search" placeholder="Rechercher : balayage, boucles…" autocomplete="off"></div>
  <div class="filters" role="group" aria-label="Filtrer par catégorie" data-filters>
    <button type="button" class="chip" aria-pressed="true" data-t="">Tous</button>
    ${postCategories.map((c) => `<button type="button" class="chip" aria-pressed="false" data-t="${c}">${c}</button>`).join('')}
  </div>
  <div class="posts" style="margin-top:1.8rem">${posts.map((p) => `<div data-cat="${p.category}" data-q="${esc((p.title + ' ' + p.excerpt + ' ' + p.tags.join(' ')).toLowerCase())}">${postCard(p)}</div>`).join('')}</div>
  <p class="empty" data-empty hidden>Aucun article ne correspond.</p>
</div></section>

<section class="section" style="background:var(--bg-2)" aria-labelledby="ev-h"><div class="wrap">
  <h2 id="ev-h" data-split>Idées et rendez-vous à l’étude.</h2>
  <p class="sample-note" style="margin-top:1rem">Aucune date n’est annoncée par le salon. Ce sont des idées d’exemple.</p>
  <div class="bento" style="margin-top:1.4rem">${events.map((e) => `<div class="cell" data-reveal><p class="eyebrow">${e.season}</p><h3>${e.title}</h3><p class="muted">${e.text}</p></div>`).join('')}</div>
</div></section>

<section class="section" aria-labelledby="nl-h"><div class="wrap" style="max-width:640px">
  <h2 id="nl-h" data-split>La lettre du salon.</h2>
  <p class="lead" data-reveal style="margin-top:1rem">Bientôt : un message de temps en temps. L’inscription n’est pas encore ouverte.</p>
  <form class="field" style="margin-top:1.4rem" onsubmit="return false" aria-describedby="nl-note">
    <label for="nl">Votre adresse e-mail</label><input id="nl" type="email" disabled placeholder="prenom@exemple.fr" autocomplete="email">
    <p id="nl-note" class="muted" style="font-size:.9rem;margin-top:8px">Formulaire de démonstration, aucune donnée n’est envoyée ni conservée.</p>
  </form>
</div></section>`
}

boot({
  page: 'journal', render,
  init(main) {
    const chips = qsa<HTMLButtonElement>('[data-filters] .chip', main)
    const items = qsa('[data-cat]', main); const empty = qs('[data-empty]', main)!
    const input = qs<HTMLInputElement>('#q', main)!
    let cat = ''
    const apply = () => {
      const q = input.value.trim().toLowerCase(); let n = 0
      items.forEach((i) => { const on = (!cat || i.dataset.cat === cat) && (!q || i.dataset.q!.includes(q)); i.hidden = !on; if (on) n++ })
      empty.hidden = n > 0
    }
    chips.forEach((c) => c.addEventListener('click', () => { cat = c.dataset.t || ''; chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c))); apply() }))
    input.addEventListener('input', apply)
  },
})
