// Small HTML builders shared by the pages.
import { business, fmtDate, type Review, type Service, type Post } from '../data'
import { duration, eur, esc, u } from './dom'
import { planityBtn, ARROW } from './shell'
import { photos, type Photo } from '../data/photos'

export function phead(opts: { title: string; lead?: string; crumb?: string; art?: string; eyebrow?: string }): string {
  return `<section class="phead"><div class="wrap${opts.art ? '' : ' solo'}">
  <div>${opts.crumb ? `<p class="crumbs"><a href="${u()}">Accueil</a> / ${opts.crumb}</p>` : ''}
  ${opts.eyebrow ? `<p class="eyebrow">${opts.eyebrow}</p>` : ''}
  <h1 data-split>${opts.title}</h1>
  ${opts.lead ? `<p class="lead" data-reveal style="margin-top:1.4rem">${opts.lead}</p>` : ''}</div>
  ${opts.art ? `<div class="art" data-reveal>${opts.art}</div>` : ''}
</div></section>`
}

export function quote(r: Review, cls = ''): string {
  return `<div class="cell ${cls}" data-reveal><blockquote><p>« ${esc(r.text)} »</p></blockquote><cite>Avis ${r.platform}, ${fmtDate(r.date)}${r.service ? ` (${esc(r.service)})` : ''}</cite></div>`
}

export function ctaBand(title = 'Prendre rendez-vous sur Planity', text = 'Réservation en ligne 24 h sur 24, confirmation immédiate. Un acompte est demandé ; annulation gratuite jusqu’à 48 h avant, voir conditions Planity.'): string {
  return `<section class="section" style="background:var(--bg-2)"><div class="wrap split wide-l" style="align-items:center">
  <div><h2 data-split>${title}</h2><p class="lead" data-reveal style="margin-top:1rem">${text}</p></div>
  <div class="btns" data-reveal>${planityBtn()}<a class="btn ghost" href="tel:${business.phone.tel}">Appeler le ${business.phone.display}</a></div>
</div></section>`
}

export function priceLi(s: Service): string {
  const onlineBadge = s.bookableOnline ? '' : '<span class="badge">sur appel</span>'
  return `<li><span class="nm">${s.name}${onlineBadge}</span><span class="pz num">${eur(s.priceEUR)}<small>${duration(s.durationMin)}</small></span>${s.detail || s.note ? `<span class="dt">${[s.detail, s.note].filter(Boolean).join(' ')}</span>` : '<span></span>'}</li>`
}

export function postCard(p: Post): string {
  return `<article class="post" data-reveal><a class="pic ph" href="${u(`journal/${p.slug}/`)}" aria-hidden="true" tabindex="-1">${photoImg(photoFor(p.slug))}<span class="ph-tag">Photo d’illustration</span></a>
  <p class="meta">${p.category} , ${p.readingMin} min de lecture, <span class="sample">exemple</span></p>
  <h3><a class="ul" href="${u(`journal/${p.slug}/`)}">${p.title}</a></h3><p class="muted">${p.excerpt}</p></article>`
}

export const arrow = ARROW

/** Stable pick of an illustration photo for any key (post slug, service id...). */
export function photoFor(key: string, pool: Photo[] = photos): Photo {
  let h = 0
  for (const c of key) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return pool[h % pool.length]
}

export function photoImg(ph: Photo, eager = false): string {
  return `<img src="${ph.src}" alt="${esc(ph.alt)}" width="${ph.width}" height="${ph.height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`
}

/** Figure with the visible « Photo d'illustration » caption and the Unsplash credit. */
export function photoFig(ph: Photo, cls = '', d = 0, eager = false): string {
  return `<figure class="pfig ${cls}" data-reveal${d ? ` style="--d:${d}"` : ''}><div class="pfig-img">${photoImg(ph, eager)}</div><figcaption>Photo d’illustration, <a href="${ph.url}" target="_blank" rel="noopener noreferrer">${ph.credit}</a></figcaption></figure>`
}
