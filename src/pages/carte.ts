import { boot } from '../core/shell'
import { gaugeHTML, mountGauge } from '../core/gauge'
import { initDrawOnView } from '../core/motion'
import { phead, ctaBand, priceLi, photoFig } from '../core/ui'
import { byTag } from '../data/photos'
import { duration, eur, u } from '../core/dom'
import { byCategory, services, lengths, type Category } from '../data'

function group(c: Category, sub?: string): string {
  return `<div class="pgroup" data-reveal><h3>${c}</h3>${sub ? `<p class="sub">${sub}</p>` : ''}<ul>${byCategory(c).map(priceLi).join('')}</ul></div>`
}

function lengthTable(c: 'Balayages Naturels' | 'Blonds Ultimes', intro: string, id: string): string {
  const rows = lengths.map((l) => {
    const a = services.find((s) => s.category === c && s.length === l.key && s.withCut === false)!
    const b = services.find((s) => s.category === c && s.length === l.key && s.withCut === true)!
    return `<tr><td><strong>${l.label}</strong><br><span class="muted" style="font-size:.88rem">${l.definition}</span></td><td class="pz num" data-label="Avec brushing">${eur(a.priceEUR)} <span class="muted" style="font-family:var(--font-body);font-size:.85rem">${duration(a.durationMin)}</span></td><td class="pz num" data-label="Avec coupe et brushing">${eur(b.priceEUR)} <span class="muted" style="font-family:var(--font-body);font-size:.85rem">${duration(b.durationMin)}</span></td></tr>`
  }).join('')
  return `<div class="pgroup" id="${id}" data-reveal style="grid-column:1/-1"><h3>${c}</h3><p class="sub">${intro}</p><div class="table-wrap"><table class="grid stack"><thead><tr><th scope="col">Longueur</th><th scope="col">Avec brushing</th><th scope="col">Avec coupe et brushing</th></tr></thead><tbody>${rows}</tbody></table></div></div>`
}

function render(): string {
  return `
${phead({ title: 'Carte & <em>tarifs.</em>', lead: 'Les prix publics du salon sur Planity, relevés en octobre 2026, à titre indicatif. Chaque forfait comprend le rituel complet.', crumb: 'Carte & tarifs' })}

<section class="section mesure" id="mesure" aria-labelledby="me-h" style="padding-top:clamp(40px,6vw,80px)"><div class="wrap">
  <h2 id="me-h" data-split style="margin-bottom:.4em;max-width:18ch">La Mesure.</h2>
  <p class="lead" data-reveal style="margin-bottom:clamp(28px,4vw,48px)">Quatre repères, ceux du salon : courts, mi-longs, longs, très longs. Faites glisser le peigne ou choisissez une longueur.</p>
  ${gaugeHTML()}
</div></section>

<section class="section" style="padding-block:clamp(24px,4vw,48px)" aria-label="Photos d’illustration des outils du salon"><div class="wrap"><p class="swipe-hint" aria-hidden="true">Faites glisser</p><div class="pstrip" tabindex="0" aria-label="Outils du métier, photos d’illustration">${[...byTag('outils'), ...byTag('atelier')].map((x, i) => photoFig(x, i % 3 === 0 ? 'arch' : '', i % 4)).join('')}</div></div></section>

<section class="section" aria-labelledby="car-h"><div class="wrap">
  <h2 id="car-h" data-split style="margin-bottom:.6em">Toute la carte.</h2>
  <p class="lead" data-reveal style="margin-bottom:2.4rem">Le forfait comprend le diagnostic personnalisé, le shampooing traitant, le rituel massant, le soin personnalisé, la coupe et le coiffage. Pour les hommes : diagnostic, shampooing traitant, rituel massant, coupe et coiffage.</p>
  <div class="plist">
    <div id="femme">${group('Femme')}</div>
    <div id="homme">${group('Homme', 'Le salon n’est pas un barbier : seul l’entretien de barbe à la tondeuse est proposé.')}</div>
    <div id="brushing">${group('Brushing')}</div>
    <div id="couleurs">${group('Colorations', 'Le prix comprend l’application de la coloration en racine uniquement. La couleur sur les longueurs est un supplément.')}</div>
    ${lengthTable('Balayages Naturels', 'Un éclaircissement naturel pour un résultat lumière, effet soleil ou californien, avec une patine sans ammoniaque.', 'balayages')}
    ${lengthTable('Blonds Ultimes', 'Des blonds très clairs, par éclaircissement poussé en méthode papier aluminium, gloss inclus.', 'blonds')}
    <div id="alacarte">${group('À la carte')}</div>
    <div class="pgroup" data-reveal><h3>Et aussi</h3><p class="sub">Les soins et le lissage brésilien ont leur page.</p><p><a class="ul" href="${u('soins/')}">Voir les soins</a></p><p class="muted" style="font-size:.95rem">Enfants : contactez le salon. Les lignes marquées « sur appel » ne se réservent pas en ligne.</p></div>
  </div>
  <p class="muted" style="margin-top:2.4rem;font-size:.92rem" data-reveal>Tarifs indicatifs Planity, octobre 2026. Les durées sont celles affichées par Planity. Un acompte est demandé à la réservation en ligne ; annulation gratuite jusqu’à 48 h avant, voir conditions Planity.</p>
</div></section>
${ctaBand()}`
}

boot({ page: 'carte', render, init(main) { mountGauge(main); initDrawOnView(main) } })
