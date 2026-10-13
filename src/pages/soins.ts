import { boot, planityBtn } from '../core/shell'
import { bottle } from '../core/art'
import { initDrawOnView } from '../core/motion'
import { phead, ctaBand, photoFig } from '../core/ui'
import { byTag, photo } from '../data/photos'
import { duration, eur, u, qs, qsa } from '../core/dom'
import { ceremony, services } from '../data'

const sv = (id: string) => services.find((s) => s.id === id)!

function threeLen(ids: [string, string, string], labels = ['Courts', 'Mi-longs', 'Longs']): string {
  return `<table class="grid" style="min-width:0"><tbody>${ids.map((id, i) => `<tr><td>${labels[i]}</td><td class="pz num">${eur(sv(id).priceEUR)}</td><td class="muted">${duration(sv(id).durationMin)}</td></tr>`).join('')}</tbody></table>`
}

function render(): string {
  const cer = sv('so-ceremonie'), ola = sv('so-olaplex')
  return `
${phead({ title: 'Les soins, <em>pour la fibre.</em>', lead: 'Une cérémonie, un soin salon, une reconstruction, un lissage : cinq façons de prendre soin des cheveux, toujours après un diagnostic.', crumb: 'Soins', art: bottle() })}

<section class="section" aria-labelledby="ce-h" style="padding-top:0"><div class="wrap split wide-l">
  <div><h2 id="ce-h" data-split>Cérémonie de soins</h2>
    <p class="lead" data-reveal style="margin-top:1rem">${eur(cer.priceEUR)}, ${duration(cer.durationMin)}. Ne se réserve pas en ligne : téléphonez au salon.</p>
    <ol class="list-plain" style="margin-top:1.6rem" data-reveal>${ceremony.map((c) => `<li style="display:block"><strong>${c.name}</strong><br><span class="muted">${c.line}</span></li>`).join('')}</ol></div>
  <div data-reveal><h3>Soin profond Olaplex</h3><p class="muted">${ola.detail} ${eur(ola.priceEUR)}, ${duration(ola.durationMin)}. Ne se réserve pas en ligne.</p>
    <p class="muted">« Tenue du soin jusqu’à 4 semaines si vous utilisez à domicile la gamme Olaplex », indique le salon.</p></div>
</div></section>

<section class="section" style="padding-top:0" aria-label="Photos d’illustration des soins"><div class="wrap"><div class="svc-photos">${[...byTag('soins'), photo('brushing-brosse-ronde')].map((x, i) => photoFig(x, i % 2 ? 'tall' : 'arch tall', i)).join('')}</div></div></section>

<section class="section" style="background:var(--bg-2)" aria-labelledby="so3-h"><div class="wrap">
  <h2 id="so3-h" data-split style="margin-bottom:1em">Trois soins longs.</h2>
  <div class="plist" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))">
    <div class="pgroup" data-reveal><h3>Toxine botulique végétale</h3><p class="sub">Le « botox » capillaire : acide hyaluronique, huile de coco, kératine. Tient 3 à 5 mois. Soins pour trois mois à la maison (shampooing et traitement) inclus.</p>${threeLen(['so-tox-c', 'so-tox-m', 'so-tox-l'])}</div>
    <div class="pgroup" data-reveal><h3>Soin Le C. reconstruction totale</h3><p class="sub">Le soin du salon : une « transfusion » d’acides aminés, de spiruline et d’alpha-kératine. Tient 2 à 3 mois.</p>${threeLen(['so-rec-c', 'so-rec-m', 'so-rec-l'])}</div>
    <div class="pgroup" data-reveal><h3>Lissage brésilien</h3><p class="sub">Adapté aux enfants et aux femmes enceintes, sans odeurs, sans fumée. Tient 6 à 8 mois.</p>${threeLen(['li-c', 'li-m', 'li-l'], ['Courts', 'Mi-longs', 'Longs à très longs'])}</div>
  </div>
  <p class="muted" style="margin-top:1.6rem;font-size:.92rem" data-reveal>Tarifs indicatifs Planity, octobre 2026. Voir aussi <a class="ul" href="${u('carte/#mesure')}">La Mesure</a> pour comparer par longueur.</p>
</div></section>

<section class="section" aria-labelledby="qz-h"><div class="wrap" style="max-width:860px">
  <h2 id="qz-h" data-split style="margin-bottom:.4em">Quel soin pour moi ?</h2>
  <p class="lead" data-reveal>Un petit guide, pas un avis professionnel. Il se termine toujours par un diagnostic.</p>
  <div class="quiz" data-quiz style="margin-top:2rem"></div>
</div></section>
${ctaBand()}`
}

interface Q { q: string; opts: { label: string; v: string }[] }
const questions: Q[] = [
  { q: 'Que cherchez-vous surtout ?', opts: [
    { label: 'Réparer des cheveux abîmés ou cassants', v: 'repair' },
    { label: 'Lisser, sans fumée ni odeur', v: 'smooth' },
    { label: 'De la douceur et de la brillance', v: 'soft' },
    { label: 'Un temps de soin pour le cuir chevelu', v: 'scalp' },
  ] },
  { q: 'Combien de temps avez-vous ?', opts: [
    { label: 'Une demi-heure', v: 'short' },
    { label: 'Environ une heure', v: 'mid' },
    { label: 'Deux heures ou plus', v: 'long' },
  ] },
]

function result(a: string, t: string): { name: string; text: string; id: string } {
  if (a === 'smooth') return { name: 'Lissage brésilien', text: 'Il tient 6 à 8 mois et se fait en 2 h 50 à 3 h 50 selon la longueur.', id: 'li-m' }
  if (a === 'scalp') return { name: 'Cérémonie de soins', text: 'Diagnostic du cuir chevelu, huiles bio, rituel massant et masque, en 1 h 05.', id: 'so-ceremonie' }
  if (a === 'repair') return t === 'short' ? { name: 'Soin profond Olaplex', text: 'Trente minutes pour reconnecter la fibre.', id: 'so-olaplex' } : { name: 'Soin Le C. reconstruction totale', text: 'Un soin de 2 h 10 à 2 h 30 qui tient 2 à 3 mois.', id: 'so-rec-m' }
  return t === 'long' ? { name: 'Toxine botulique végétale', text: 'Un soin de 2 h 15 à 2 h 45 qui tient 3 à 5 mois.', id: 'so-tox-m' } : t === 'mid' ? { name: 'Cérémonie de soins', text: 'Une heure de douceur, avec massage et masque.', id: 'so-ceremonie' } : { name: 'Soin profond Olaplex', text: 'Trente minutes, pour une fibre plus souple.', id: 'so-olaplex' }
}

boot({
  page: 'soins', render,
  init(main) {
    initDrawOnView(main)
    const box = qs('[data-quiz]', main)!
    const ans: string[] = []
    const draw = () => {
      const n = ans.length
      if (n < questions.length) {
        const q = questions[n]
        box.innerHTML = `<fieldset style="border:0;padding:0;margin:0"><legend class="eyebrow" style="margin-bottom:12px">Question ${n + 1} sur ${questions.length}</legend><p style="font-family:var(--font-display);font-size:1.8rem;margin-bottom:1rem">${q.q}</p><div class="filters">${q.opts.map((o) => `<button type="button" class="chip" data-v="${o.v}">${o.label}</button>`).join('')}</div></fieldset>`
        qsa<HTMLButtonElement>('button', box).forEach((b) => b.addEventListener('click', () => { ans.push(b.dataset.v!); draw() }))
      } else {
        const r = result(ans[0], ans[1]); const s = sv(r.id)
        box.innerHTML = `<div class="cell tint"><h3>${r.name}</h3><p>${r.text}</p><p class="muted">${eur(s.priceEUR)}${s.id === 'li-m' || s.id === 'so-tox-m' || s.id === 'so-rec-m' ? ' en mi-longs' : ''}. ${s.bookableOnline ? '' : 'Ne se réserve pas en ligne : téléphonez au salon.'}</p><p><strong>Le diagnostic confirme le choix : ${eur(30)}.</strong></p><div class="btns">${planityBtn()}<button type="button" class="btn ghost" data-restart>Recommencer</button></div></div>`
        qs('[data-restart]', box)!.addEventListener('click', () => { ans.length = 0; draw() })
      }
    }
    draw()
  },
})
