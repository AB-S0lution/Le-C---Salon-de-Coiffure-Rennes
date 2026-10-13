import { boot, planityBtn } from '../core/shell'
import { facade, monogram } from '../core/art'
import { roomHTML } from '../core/sections'
import { initRoom, initDrawOnView } from '../core/motion'
import { phead, ctaBand, photoFig } from '../core/ui'
import { photo } from '../data/photos'
import { u } from '../core/dom'
import { history, streetFacts, sevenJours, petitFuteQuote, business } from '../data'

function render(): string {
  const tl = history.map((h) => `<div class="tl ${h.kind}" data-reveal><div class="when">${h.when}</div><h3>${h.title}</h3><p>${h.text}</p><p class="src">Source : <a href="${h.sourceUrl}" target="_blank" rel="noopener noreferrer">${h.source}</a></p></div>`).join('')
  const street = streetFacts.map((f) => `<li><span><strong>N° ${f.n}</strong> ${f.text}</span><span class="muted" style="white-space:nowrap">${f.source}</span></li>`).join('')
  return `
${phead({ title: 'Magali, et la maison de la <em>rue du Chapitre.</em>', lead: 'Un salon ouvert en 2020, dans un ancien hôtel particulier du vieux Rennes. Ici, le temps fait partie de la coiffure.', crumb: 'La Maison' })}

<section class="section" aria-labelledby="mg-h"><div class="wrap split wide-l">
  <div>
    <h2 id="mg-h" data-split style="margin-bottom:.6em">Onze ans à former, puis son propre salon.</h2>
    <p data-reveal>Magali a été formatrice L’Oréal Professionnel pendant onze ans. Elle se présente aussi comme coloriste certifiée Redken. Elle ouvre Le C. en 2020, « quinze jours avant le Covid ».</p>
    <p data-reveal>Son idée : prendre le temps. Le salon passe entre une heure et une heure et quart par cliente, environ le double d’un salon ordinaire, avec un échange et un soin avant la coupe.</p>
    ${sevenJours.map((s) => `<figure style="margin:1.6rem 0" data-reveal><p class="pullquote" style="margin:0">« ${s.text} »</p><cite style="display:block;margin-top:10px;font-style:normal;font-size:.9rem" class="muted">Magali, ${s.source}</cite></figure>`).join('')}
  </div>
  <div class="art-frame" data-reveal style="color:var(--fg)">${facade('ink')}</div>
</div></section>

<section class="section" aria-labelledby="ph-h" style="padding-top:0"><div class="wrap">
  <h2 id="ph-h" data-split style="margin-bottom:.4em">L’esprit d’un salon qui prend son temps.</h2>
  <p class="muted" data-reveal style="margin-bottom:2rem">Photos d’illustration (Unsplash). Les photos du salon arriveront avec l’accord de Magali.</p>
  <div class="pband">
    ${photoFig(photo('fauteuils-miroirs-ronds'), 'wide')}
    ${photoFig(photo('bacs-lavage'), 'arch tall', 1)}
    ${photoFig(photo('flacons-pierre'), 'tall', 2)}
  </div>
  <div class="svc-photos">${['salon-mur-brique', 'fauteuils-comptoir', 'brushing-brosse-ronde', 'feuillage'].map((sl, i) => photoFig(photo(sl), 'wide', i)).join('')}</div>
</div></section>

${roomHTML()}

<section class="section" aria-labelledby="hi-h"><div class="wrap split wide-r">
  <div><h2 id="hi-h" data-split>Une maison des XIVe-XVe siècles.</h2>
  <p class="lead" data-reveal style="margin-top:1rem">Le 3 rue du Chapitre est un ancien hôtel particulier des XIVe-XVe siècles, selon l’Office de Tourisme de Rennes. La date exacte de sa charpente n’est pas publiée.</p>
  <figure style="margin:2rem 0 0" data-reveal><p class="pullquote" style="margin:0;font-size:1.5rem">« ${petitFuteQuote.text} »</p><cite style="display:block;margin-top:10px;font-style:normal;font-size:.9rem" class="muted">${petitFuteQuote.source}. ${petitFuteQuote.note}</cite></figure></div>
  <div class="timeline" aria-label="Chronologie de la maison et du salon">${tl}</div>
</div></section>

<section class="section" style="background:var(--bg-2)" aria-labelledby="ru-h"><div class="wrap">
  <h2 id="ru-h" data-split style="margin-bottom:.5em">La rue du Chapitre.</h2>
  <p class="lead" data-reveal>Autrefois rue du Four au Chapitre, aujourd’hui l’une des plus pittoresques de Rennes, au pied de la cathédrale Saint-Pierre.</p>
  <ul class="list-plain" style="margin-top:2rem;max-width:900px" data-reveal>${street}</ul>
  <p class="muted" style="margin-top:1.4rem;font-size:.92rem" data-reveal>Le Salon Coiffure Chapitre II, au n° 7, est un autre salon. Le C. est au n° 3.</p>
</div></section>

<section class="section" aria-labelledby="va-h"><div class="wrap">
  <h2 id="va-h" data-split style="margin-bottom:1em;max-width:18ch">Ce qui compte au salon.</h2>
  <div class="facts">
    <div class="fact" data-reveal><h3>Le temps</h3><p>Une heure à une heure et quart par cliente, avec diagnostic, shampooing traitant, rituel massant et soin.</p></div>
    <div class="fact" data-reveal><h3>Des produits choisis</h3><p>Soin capillaire haut de gamme, VEGAN et CRUELTY FREE, selon la présentation du salon sur Planity.</p></div>
    <div class="fact" data-reveal><h3>Couleurs Gaïa</h3><p>Coloration végétale certifiée bio, avec un partenariat de cinq ans.</p></div>
    <div class="fact" data-reveal><h3>Le vrac</h3><p>Des soins à remplir soi-même, dans des flacons que l’on garde.</p></div>
  </div>
  <p class="muted" style="margin-top:2rem" data-reveal>Le salon est « Recommandé 2026 » par le Petit Futé, une recommandation de guide et non un prix.</p>
  <div class="split" style="margin-top:3rem;align-items:center"><div data-reveal style="max-width:200px;color:var(--fg)">${monogram('M')}</div>
  <div data-reveal><h3>${business.credentials.trainer}</h3><p class="muted">${business.credentials.colourist}.</p><div class="btns">${planityBtn()}<a class="btn ghost" href="${u('equipe/')}">L’équipe</a></div></div></div>
</div></section>
${ctaBand()}`
}

boot({ page: 'maison', render, init(main) { initRoom(main); initDrawOnView(main) } })
