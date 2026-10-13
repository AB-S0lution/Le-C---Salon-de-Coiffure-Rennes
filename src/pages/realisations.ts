import { boot, planityBtn } from '../core/shell'
import { strand } from '../core/art'
import { phead, photoFig } from '../core/ui'
import { photos, photoTagLabel, type PhotoTag } from '../data/photos'
import { duration, esc, qs, qsa, u } from '../core/dom'
import { gallery, techniques, business } from '../data'

const lenLabel: Record<string, string> = { courts: 'Courts', 'mi-longs': 'Mi-longs', longs: 'Longs', 'tres-longs': 'Très longs' }

function card(g: (typeof gallery)[number]): string {
  return `<article class="gcard" data-tech="${esc(g.technique)}"><div class="pic">${strand(g.art.stops, g.art.curl, g.art.seed, g.art.cut, 'g-' + g.id, g.art.count)}</div>
  <p class="cap">${g.caption}</p><h3>${g.title}</h3><p class="meta">${g.technique}, ${lenLabel[g.length]}, ${duration(g.durationMin)}</p>
  <a class="ul" href="${u('carte/#mesure')}">Voir le tarif</a></article>`
}

function render(): string {
  return `
${phead({ title: 'Réalisations, <em>en illustration.</em>', lead: 'Nous ne publions pas de photos de clientes ici. Voici des illustrations gravées de balayages, de blonds et de boucles, pour parler couleur ensemble.', crumb: 'Réalisations' })}
<section class="section" style="padding-top:0"><div class="wrap">
  <p class="sample-note">Illustrations d’exemple, créées pour ce site. Pour voir le travail réel du salon, rendez-vous sur <a class="ul" href="${business.links.instagram}" rel="noopener" target="_blank">Instagram</a>.</p>
  <div class="filters" role="group" aria-label="Filtrer par technique" data-filters>
    <button type="button" class="chip" aria-pressed="true" data-t="">Toutes</button>
    ${techniques.map((t) => `<button type="button" class="chip" aria-pressed="false" data-t="${esc(t)}">${t}</button>`).join('')}
  </div>
  <div class="gal" data-gal style="margin-top:1.6rem">${gallery.map(card).join('')}</div>
  <p class="empty" data-empty hidden>Aucune illustration pour ce filtre.</p>
  <div class="btns" style="margin-top:3rem">${planityBtn()}<a class="btn ghost" href="${business.links.instagram}" rel="noopener" target="_blank">Instagram du salon</a></div>
</div></section>
<section class="section" id="photos" aria-labelledby="pg-h" style="background:var(--bg-2)"><div class="wrap">
  <p class="eyebrow">Photothèque</p>
  <h2 id="pg-h" data-split style="margin-bottom:.4em">Le métier, en ${photos.length} photos.</h2>
  <p class="sample-note">Photos d’illustration issues d’Unsplash (licence Unsplash). Elles ne montrent ni le salon Le C., ni son équipe, ni ses clientes.</p>
  <div class="filters photo-filters" role="group" aria-label="Filtrer les photos" data-pfilters>
    <button type="button" class="chip" aria-pressed="true" data-t="">Toutes</button>
    ${(Object.keys(photoTagLabel) as PhotoTag[]).map((t) => `<button type="button" class="chip" aria-pressed="false" data-t="${t}">${photoTagLabel[t]}</button>`).join('')}
  </div>
  <div class="pgrid" data-pgrid>${photos.map((x, i) => photoFig(x, 'tall', i % 4).replace('<figure', `<figure data-tag="${x.tag}"`)).join('')}</div>
</div></section>`
}

boot({
  page: 'realisations', render,
  init(main) {
    const chips = qsa<HTMLButtonElement>('[data-filters] .chip', main)
    const cards = qsa('.gcard', main); const empty = qs('[data-empty]', main)!
    chips.forEach((c) => c.addEventListener('click', () => {
      chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)))
      let n = 0
      cards.forEach((g) => { const on = !c.dataset.t || g.dataset.tech === c.dataset.t; g.hidden = !on; if (on) n++ })
      empty.hidden = n > 0
    }))
    const pchips = qsa<HTMLButtonElement>('[data-pfilters] .chip', main)
    const figs = qsa('[data-pgrid] .pfig', main)
    pchips.forEach((c) => c.addEventListener('click', () => {
      pchips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)))
      figs.forEach((f) => { f.hidden = !!c.dataset.t && f.dataset.tag !== c.dataset.t })
    }))
  },
})
