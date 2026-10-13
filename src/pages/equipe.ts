import { boot, planityBtn } from '../core/shell'
import { monogram } from '../core/art'
import { phead } from '../core/ui'
import { u } from '../core/dom'
import { visibleTeam } from '../data'

function render(): string {
  const cards = visibleTeam.map((m) => `<article class="member" data-reveal><div class="mono">${monogram(m.firstName.charAt(0))}</div><h2 style="font-size:2.2rem;font-weight:300">${m.firstName}</h2><p class="muted" style="margin:0">${m.role}</p>
    ${m.credentials.length ? `<ul class="list-plain">${m.credentials.map((c) => `<li style="display:block">${c}</li>`).join('')}</ul>` : '<p class="muted" style="font-size:.92rem">Retrouvez-la sur Planity au moment de réserver.</p>'}</article>`).join('')
  return `
${phead({ title: 'L’équipe du <em>salon.</em>', lead: 'Les prénoms que vous voyez sur la page Planity du salon. Pas de photos ici : des monogrammes gravés.', crumb: 'L’équipe' })}
<section class="section" style="padding-top:0"><div class="wrap">
  <div class="team">${cards}</div>
  <div class="split wide-l" style="margin-top:clamp(48px,7vw,96px);align-items:center">
    <div><h2 data-split>Se former au BP, ici.</h2><p class="lead" data-reveal style="margin-top:1rem">Le salon accueille des apprenti·es en BP coiffure. L’équipe change au fil des saisons : la page Planity reste la référence.</p></div>
    <div class="btns" data-reveal>${planityBtn()}<a class="btn ghost" href="${u('recrutement/')}">Rejoindre Le C.</a></div>
  </div>
</div></section>`
}
boot({ page: 'equipe', render })
