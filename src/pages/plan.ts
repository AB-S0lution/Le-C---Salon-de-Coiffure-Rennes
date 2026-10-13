import { boot } from '../core/shell'
import { phead, photoSlim } from '../core/ui'
import { photo } from '../data/photos'
import { u } from '../core/dom'
import { menuGroups } from '../core/shell'
import { posts } from '../data'

function render(): string {
  const groups = [...menuGroups, { title: 'Journal', links: posts.map((p) => ({ key: 'article', href: `journal/${p.slug}/`, label: p.title })) }, { title: 'Légal', links: [
    { key: 'legal', href: 'mentions-legales/', label: 'Mentions légales' }, { key: 'confidentialite', href: 'confidentialite/', label: 'Confidentialité' }] }]
  return `
${phead({ title: 'Plan du <em>site.</em>', crumb: 'Plan du site' })}
${photoSlim(photo('salon-mur-brique'), '50% 55%')}
<section class="section" style="padding-top:0"><div class="wrap">${groups.map((g) => `<div style="margin-bottom:2rem"><h2 style="font-size:1.7rem;margin-bottom:.6rem">${g.title}</h2><nav class="sitemap" aria-label="${g.title}">${g.links.map((l) => `<a class="ul" href="${u(l.href)}">${l.label}</a>`).join('')}</nav></div>`).join('')}</div></section>`
}
boot({ page: 'plan', render })
