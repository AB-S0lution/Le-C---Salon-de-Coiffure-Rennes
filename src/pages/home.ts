import { boot, planityBtn, ARROW } from '../core/shell'
import { facade } from '../core/art'
import { gaugeHTML, mountGauge } from '../core/gauge'
import { ritualHTML, nuancierHTML, houseTrio } from '../core/sections'
import { initHero, initRitual, initNuancier, initDrawOnView } from '../core/motion'
import { quote, postCard, photoFig } from '../core/ui'
import { photo, photos } from '../data/photos'
import { u } from '../core/dom'
import { business, reviews, posts, hours, petitFuteQuote } from '../data'
import { hoursRows } from './_hours'

const q = (id: number) => reviews.find((r) => r.id === id)!

function render(): string {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)
  const sub = business.planity.sub.map((s) => `<li><span>${s.label}</span><b class="num">${String(s.value.toFixed(1)).replace('.', ',')}</b></li>`).join('')
  return `
<section class="hero" aria-labelledby="h1"><div class="wrap">
  <div>
    <h1 id="h1" data-split>Coiffeur coloriste, <em>rue du Chapitre.</em></h1>
    <p class="lead" data-reveal>Diagnostic, rituel massant et couleur sur mesure, dans une maison médiévale du vieux Rennes.</p>
    <div class="btns" data-reveal style="--d:2">${planityBtn()}<a class="btn ghost" href="${u('carte/')}">Voir la carte${ARROW}</a></div>
  </div>
  <div class="hero-art" aria-label="Gravure de la façade du salon, avec ses couleurs">
    ${facade('brush')}${facade('col')}${facade('ink')}<div class="shine"></div>
  </div>
</div></section>

<section class="proof" aria-label="En bref"><div class="wrap"><ul>
  <li data-reveal><strong>5,0 sur Planity</strong><span>201 avis, relevé le 13 octobre 2026</span></li>
  <li data-reveal style="--d:1"><strong>Depuis 2020</strong><span>Rue du Chapitre, Rennes</span></li>
  <li data-reveal style="--d:2"><strong>11 ans formatrice</strong><span>L’Oréal Professionnel, par Magali</span></li>
  <li data-reveal style="--d:3"><strong>Couleurs Gaïa</strong><span>Partenaire depuis 5 ans</span></li>
</ul></div></section>

<section class="section" aria-labelledby="ph-h" style="padding-top:clamp(24px,4vw,48px)"><div class="wrap">
  <p class="eyebrow">L’atelier, en images</p>
  <h2 id="ph-h" data-split style="max-width:18ch;margin-bottom:clamp(24px,4vw,44px)">Couper, colorer, prendre soin.</h2>
  <div class="pband">
    ${photoFig(photo('coupe-aux-ciseaux'), 'wide', 0, true)}
    ${photoFig(photo('torsade-auburn'), 'arch tall', 1)}
    ${photoFig(photo('ciseaux-flacon-ambre'), 'tall', 2)}
  </div>
</div></section>

${ritualHTML()}

<section class="section mesure" id="mesure" aria-labelledby="me-h"><div class="wrap">
  <p class="eyebrow">La Mesure</p>
  <h2 id="me-h" data-split style="margin-bottom:.4em;max-width:16ch">Votre longueur, votre tarif.</h2>
  <p class="lead" data-reveal style="margin-bottom:clamp(28px,4vw,48px)">Le salon mesure les cheveux avec sa propre échelle. Faites glisser le peigne : les tarifs Planity s’ajustent.</p>
  ${gaugeHTML({ compact: true })}
  <p style="margin-top:28px" data-reveal><a class="ul" href="${u('carte/')}">Toute la carte et ses tarifs</a></p>
</div></section>

${nuancierHTML()}

<section class="section" aria-labelledby="ma-h"><div class="wrap">
  <h2 id="ma-h" data-split style="max-width:20ch;margin-bottom:.5em">Une maison de la rue du Chapitre.</h2>
  <div class="split wide-l" style="margin-bottom:clamp(32px,5vw,64px)">
    <p class="pullquote" data-reveal>« ${petitFuteQuote.text} »</p>
    <div><p class="muted" data-reveal>${petitFuteQuote.source}. Selon l’Office de Tourisme de Rennes, l’ancien hôtel particulier du 3 rue du Chapitre date des XIVe-XVe siècles.</p>
    <p data-reveal><a class="ul" href="${u('la-maison/')}">Découvrir la maison</a></p></div>
  </div>
  <div class="trio" style="display:grid;gap:24px;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))">${houseTrio()}</div>
</div></section>

<section class="section" aria-labelledby="av-h" style="background:var(--bg-2)"><div class="wrap">
  <p class="eyebrow">Avis</p>
  <h2 id="av-h" data-split style="margin-bottom:clamp(24px,4vw,48px)">Ce que disent les clientes.</h2>
  <div class="bento">
    <div class="cell big c1" data-reveal><div><div class="score num">5,0</div><p style="margin:.5em 0 0">sur Planity, 201 avis</p></div><ul>${sub}</ul></div>
    ${quote(q(2), 'c2')}
    ${quote(q(16), 'c3 tint')}
    ${quote(q(29), 'c4')}
    ${quote(q(25), 'c5 stone')}
    ${quote(q(13), 'c6')}
    ${quote(q(21), 'c7 tint')}
  </div>
  <p style="margin-top:24px" data-reveal><a class="ul" href="${u('avis/')}">Lire tous les avis</a></p>
</div></section>

<section class="section" aria-labelledby="pst-h" style="background:var(--bg-2)"><div class="wrap">
  <p class="eyebrow">Matières et nuances</p>
  <h2 id="pst-h" data-split style="margin-bottom:.4em">Du cuivré au poivre et sel.</h2>
  <p class="muted" data-reveal style="margin-bottom:clamp(20px,3vw,32px)">Photos d’illustration (Unsplash), pas des réalisations du salon. Faites défiler.</p>
  <p class="swipe-hint" aria-hidden="true">Faites glisser</p><div class="pstrip" tabindex="0" aria-label="Galerie de photos d’illustration, défilement horizontal">${photos.filter((x) => x.tag === 'couleur' || x.tag === 'soins').map((x, i) => photoFig(x, i % 3 === 0 ? 'arch' : '', i % 4)).join('')}</div>
  <p style="margin-top:24px" data-reveal><a class="ul" href="${u('realisations/#photos')}">Toutes les photos</a></p>
</div></section>

<div class="marquee" aria-hidden="true"><div class="track">${[0, 1].map(() => ['diagnostic personnalisé', 'rituel massant', 'sur mesure', 'écoute', 'douceur', 'végétal', 'VEGAN et CRUELTY FREE'].map((w) => `<span>${w}</span><b>/</b>`).join('')).join('')}</div></div>

<section class="section" aria-labelledby="jo-h"><div class="wrap">
  <h2 id="jo-h" data-split style="margin-bottom:clamp(24px,4vw,48px)">Au journal.</h2>
  <div class="posts">${latest.map(postCard).join('')}</div>
  <p style="margin-top:28px" data-reveal><a class="ul" href="${u('journal/')}">Tous les articles</a></p>
</div></section>

<section class="section" style="background:var(--room-bg);color:#eef0ec;--fg-2:#b4bbb8;--line:rgba(238,240,236,.2)"><div class="wrap split wide-l" style="align-items:center">
  <div><h2 data-split>Rue du Chapitre, du lundi au samedi.</h2>
  <p class="lead" data-reveal style="margin-top:1rem;color:#b4bbb8">${business.address.street}, ${business.address.postalCode} ${business.address.city}, à quelques minutes à pied du métro République.</p>
  <div class="btns" data-reveal style="margin-top:1.4rem">${planityBtn()}<a class="btn ghost" href="${business.links.maps}" target="_blank" rel="noopener noreferrer" style="color:#eef0ec;--btn-wash:#eef0ec">Itinéraire</a></div></div>
  <div data-reveal><div class="open-now" data-open-now style="border-color:rgba(238,240,236,.25)"><i></i><span>Horaires</span></div>${hoursRows(hours)}</div>
</div></section>`
}

boot({
  page: 'home',
  render,
  init(main) {
    initHero(main)
    initRitual(main)
    mountGauge(main)
    initNuancier(main)
    initDrawOnView(main)
  },
})
