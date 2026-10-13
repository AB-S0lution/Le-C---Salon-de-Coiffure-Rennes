import { boot, planityBtn } from '../core/shell'
import { chair, headProfile, tree, bottle, scissors, strand } from '../core/art'
import { initDrawOnView } from '../core/motion'
import { phead, ctaBand } from '../core/ui'
import { u } from '../core/dom'
import { ritual, booking, sevenJours } from '../data'

function render(): string {
  const vigs = [headProfile(), chair(), tree(), bottle(), scissors(), strand([['#4a3426', '#a97b52', '#e1bf8a']], 0.2, 9, 'long', 'rit2')]
  const steps = ritual.map((s, i) => `<article class="cell" data-reveal><div style="max-width:180px;height:150px;color:var(--fg)">${vigs[i]}</div>
    <div><h3>${s.name}</h3><p class="muted" style="margin-top:.5em">${s.line}</p></div>${s.quote ? `<blockquote style="margin:0"><p style="font-size:1.15rem">« ${s.quote.text} »</p><cite style="font-style:normal;font-size:.85rem" class="muted">${s.quote.source}</cite></blockquote>` : ''}</article>`).join('')
  return `
${phead({ title: 'Le Rituel, <em>étape par étape.</em>', lead: 'Chaque forfait suit le même chemin : un diagnostic, un shampooing traitant, un rituel massant, un soin, la coupe et le coiffage.', crumb: 'Le Rituel' })}

<section class="section" style="padding-top:0" aria-labelledby="st-h"><div class="wrap">
  <h2 id="st-h" class="sr">Les six étapes</h2>
  <div class="posts" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">${steps}</div>
</div></section>

<section class="section" style="background:var(--bg-2)" aria-labelledby="pq-h"><div class="wrap split wide-l">
  <div><h2 id="pq-h" data-split>Pourquoi une heure.</h2>
  <p class="lead" data-reveal style="margin-top:1rem">Magali l’explique à 7 Jours : on ne travaille pas bien un brushing en trente minutes quand on veut aussi échanger et soigner.</p></div>
  <div>${sevenJours.map((s) => `<figure style="margin:0 0 1.6rem" data-reveal><p class="pullquote" style="font-size:1.5rem">« ${s.text} »</p><cite style="display:block;margin-top:8px;font-style:normal;font-size:.88rem" class="muted">${s.source}</cite></figure>`).join('')}</div>
</div></section>

<section class="section" aria-labelledby="pv-h"><div class="wrap split">
  <div><h2 id="pv-h" data-split>Pour une première visite.</h2>
  <p class="muted" data-reveal style="margin-top:1rem">Conseils d’exemple, à adapter avec le salon.</p>
  <ul class="list-plain" style="margin-top:1.2rem" data-reveal>
    <li style="display:block">Apportez des photos de ce que vous aimez.</li>
    <li style="display:block">Dites tout de votre historique de couleur, même ancien.</li>
    <li style="display:block">Prévoyez une heure de plus que la durée affichée si vous avez un rendez-vous ensuite.</li>
    <li style="display:block">Portez des vêtements dans lesquels vous êtes à l’aise : le shampooing se fait allongé, selon les avis des clientes.</li>
  </ul></div>
  <div><h2 data-split>Réservation, acompte, annulation.</h2>
  <p class="lead" data-reveal style="margin-top:1rem">${booking.wording}</p>
  <p class="muted" data-reveal>Ces règles viennent de la configuration Planity du salon, pas d’une politique publiée. Elles peuvent évoluer : vérifiez les conditions au moment de réserver.</p>
  <div class="btns" data-reveal>${planityBtn()}<a class="btn ghost" href="${u('cartes-cadeaux/')}">Cartes cadeaux</a></div></div>
</div></section>
${ctaBand()}`
}

boot({ page: 'rituel', render, init(main) { initDrawOnView(main) } })
