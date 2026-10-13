import { boot } from '../core/shell'
import { chair } from '../core/art'
import { phead, photoFig } from '../core/ui'
import { photo } from '../data/photos'
import { business } from '../data'
import { jobs } from '../data'

function render(): string {
  const [post, learn] = jobs
  return `
${phead({ title: 'Rejoindre <em>Le C.</em>', lead: 'Le salon forme des apprenti·es en BP coiffure.', crumb: 'Recrutement', art: chair() })}
<section class="section" style="padding-top:0"><div class="wrap split wide-l">
  <div><h2 data-split>${post.title}</h2><p class="eyebrow" style="margin-top:.8rem">${post.when}</p>
  <p class="lead" data-reveal style="margin-top:1rem">${post.text}</p>
  <p class="muted" data-reveal>Pas de formulaire ici : déposez votre CV directement au salon, au ${business.address.street}, ${business.address.postalCode} ${business.address.city}, tous les jours sauf le mercredi. Vous pouvez aussi téléphoner au <a class="ul" href="tel:${business.phone.tel}">${business.phone.display}</a>.</p></div>
  <div class="cell tint" data-reveal><h3>${learn.title}</h3><p class="sample-note">${learn.text}</p><ul class="list-plain">${learn.learn.map((l) => `<li style="display:block">${l}</li>`).join('')}</ul></div>
</div>
<div class="wrap"><div class="svc-photos" style="margin-top:clamp(40px,6vw,72px)">${['brosse-et-ciseaux', 'coupe-en-cours', 'ciseaux-peigne'].map((sl, i) => photoFig(photo(sl), 'wide', i)).join('')}</div></div></section>`
}
boot({ page: 'recrutement', render })
