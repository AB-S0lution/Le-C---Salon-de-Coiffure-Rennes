import { boot, planityBtn } from '../core/shell'
import { facade, strand } from '../core/art'
import { nuancierHTML } from '../core/sections'
import { initNuancier, initBrushOnly, initDrawOnView } from '../core/motion'
import { phead, ctaBand, photoFig } from '../core/ui'
import { photo } from '../data/photos'
import { u, eur } from '../core/dom'
import { faq, services } from '../data'

const price = (id: string) => services.find((s) => s.id === id)!.priceEUR

function render(): string {
  const qa = faq.filter((f) => f.group === 'Couleur').map((f) => `<details><summary>${f.q}</summary><div class="ans"><p>${f.a}</p></div></details>`).join('')
  return `
${phead({ title: 'La couleur, <em>au diagnostic.</em>', lead: 'Balayage, blond ultime, cuivré, violine, grey blending ou végétal : on regarde d’abord vos cheveux, ensuite on choisit la méthode.', crumb: 'La Couleur' })}

<section class="section" style="padding-top:0" aria-labelledby="phi-h"><div class="wrap split wide-l" style="align-items:center">
  <div>
    <h2 id="phi-h" data-split style="margin-bottom:.6em">Le diagnostic d’abord.</h2>
    <p data-reveal>Magali est coloriste certifiée Redken et ancienne formatrice L’Oréal Professionnel. Avant toute couleur, elle regarde la fibre, l’historique de vos colorations et vos habitudes. Le diagnostic se réserve seul, à ${eur(price('al-diag'))}.</p>
    <p data-reveal>Le prix d’une couleur comprend l’application en racine uniquement. La couleur sur les longueurs est un supplément, évalué avec vous.</p>
    <div class="btns" data-reveal>${planityBtn()}<a class="btn ghost" href="${u('carte/#mesure')}">Voir La Mesure</a></div>
  </div>
  <div class="hero-art ready" aria-label="Gravure de la façade : passez le pointeur pour peindre des mèches">${facade('brush')}${facade('col')}${facade('ink')}<div class="shine"></div></div>
</div></section>

${nuancierHTML({ title: 'Les tons du salon.', lead: 'Les noms viennent de la carte et des publications du salon. Les nuances marquées d’exemple sont là pour compléter la palette.' })}

<section class="section" style="padding-top:0" aria-label="Photos d’illustration de couleurs"><div class="wrap"><div class="pband">
  ${photoFig(photo('cheveux-au-vent'), 'wide')}
  ${photoFig(photo('blond-lumineux'), 'arch tall', 1)}
  ${photoFig(photo('violine'), 'tall', 2)}
</div><div class="svc-photos">${['outils-pinceau-couleur', 'meches-deux-tons', 'poivre-et-sel', 'cheveux-longs'].map((sl, i) => photoFig(photo(sl), 'wide', i)).join('')}</div></div></section>

<section class="section" aria-labelledby="bal-h"><div class="wrap">
  <h2 id="bal-h" data-split style="margin-bottom:1em;max-width:22ch">Deux gestes de lumière.</h2>
  <div class="split">
    <div data-reveal><h3>Balayage effet soleil ou californien</h3><p class="muted">Un éclaircissement naturel pour un résultat lumière. Il comprend une patine sans ammoniaque, qui apporte des protéines et referme les écailles. Dès ${eur(price('ba-courts'))} en cheveux courts avec brushing.</p>
      <div style="max-width:260px;color:var(--fg)">${strand([['#4a3426', '#a97b52', '#e1bf8a']], 0.25, 6, 'long', 'cb1')}</div></div>
    <div data-reveal><h3>Blonds ultimes</h3><p class="muted">Des blonds très clairs, par éclaircissement poussé en méthode papier aluminium, gloss inclus. Dès ${eur(price('bu-courts'))} en cheveux courts avec brushing.</p>
      <div style="max-width:260px;color:var(--fg)">${strand([['#6e5a42', '#d9c08a', '#f7ecc8']], 0.1, 15, 'bob', 'cb2')}</div></div>
  </div>
</div></section>

<section class="section" style="background:var(--bg-2)" aria-labelledby="veg-h"><div class="wrap">
  <h2 id="veg-h" data-split style="margin-bottom:.8em;max-width:20ch">Végétal et grey blending.</h2>
  <div class="facts">
    <div class="fact" data-reveal><h3>Coloration végétale bio</h3><p>Avec Couleurs Gaïa, dont le salon est partenaire depuis cinq ans. Couleur certifiée bio, 100 % végétale. Tarifs : contactez le salon.</p></div>
    <div class="fact" data-reveal><h3>Grey blending</h3><p>Un passage en douceur au blanc naturel. Diagnostic dédié à ${eur(price('al-grey'))}. Impossible sur cheveux colorés avec une teinte végétale, frisés ou très abîmés.</p></div>
    <div class="fact" data-reveal><h3>Camouflage, pour les hommes</h3><p>Une coloration à effet naturel pour cacher les cheveux blancs, ${eur(price('h-camouflage'))}.</p></div>
    <div class="fact" data-reveal><h3>Décoloration</h3><p>${eur(price('c-decol'))} pour 1 h 30. Elle ne se réserve pas en ligne : téléphonez au salon.</p></div>
  </div>
</div></section>

<section class="section" aria-labelledby="cq-h"><div class="wrap" style="max-width:900px">
  <h2 id="cq-h" data-split style="margin-bottom:1em">Questions sur la couleur.</h2>
  <div class="acc" data-reveal>${qa}</div>
</div></section>
${ctaBand()}`
}

boot({ page: 'couleur', render, init(main) { initNuancier(main); initBrushOnly(main); initDrawOnView(main) } })
