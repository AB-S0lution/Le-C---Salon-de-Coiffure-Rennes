import { boot } from '../core/shell'
import { vignette } from '../core/art'
import { phead, ctaBand, postCard, photoFig, photoFor } from '../core/ui'
import { u, fmtLongDate } from '../core/dom'
import { posts } from '../data'

const slug = location.pathname.replace(/\/+$/, '').split('/').pop() ?? ''
const idx = Math.max(0, posts.findIndex((p) => p.slug === slug))
const post = posts[idx]

function render(): string {
  const prev = posts[idx - 1], next = posts[idx + 1]
  const more = posts.filter((p) => p.slug !== post.slug && p.category === post.category).concat(posts.filter((p) => p.slug !== post.slug && p.category !== post.category)).slice(0, 3)
  return `
${phead({ title: post.title, lead: post.excerpt, crumb: `<a href="${u('journal/')}">Journal</a> / ${post.category}`, art: vignette(post.art), eyebrow: `${post.category}, ${post.readingMin} min de lecture` })}
<article class="section" style="padding-top:0"><div class="wrap">
  <p class="sample-note">Article d’exemple, publié le ${fmtLongDate(post.date)}. Les tarifs et durées cités viennent de la carte Planity ; le reste est un conseil général.</p>
  ${photoFig(photoFor(post.slug), 'wide cover', 0, true)}
  <div class="prose">${post.body.map((b) => `<p data-reveal>${b}</p>`).join('')}</div>
  <p class="tags" style="margin-top:1.6rem">${post.tags.map((t) => `<span>${t}</span>`).join('')}</p>
  <h2 style="font-size:1.8rem;margin-top:3rem">À lire ensuite sur le site</h2>
  <ul class="list-plain">${post.related.map((r) => `<li style="display:block"><a class="ul" href="${u(r.href)}">${r.label}</a></li>`).join('')}</ul>
  <nav aria-label="Articles voisins" class="btns" style="margin-top:2.4rem">
    ${prev ? `<a class="btn ghost" href="${u(`journal/${prev.slug}/`)}">Précédent : ${prev.title}</a>` : ''}
    ${next ? `<a class="btn ghost" href="${u(`journal/${next.slug}/`)}">Suivant : ${next.title}</a>` : ''}
  </nav>
</div></article>
<section class="section" style="background:var(--bg-2)"><div class="wrap"><h2 data-split style="margin-bottom:1em">Dans le même esprit</h2><div class="posts">${more.map(postCard).join('')}</div></div></section>
${ctaBand()}`
}

document.title = `${post.title} | Journal | Le C. Coiffeur Coloriste, Rennes`
boot({ page: 'article', render })
