// Generates one static HTML shell per route (head, SEO, JSON-LD, inline theme script). Content is rendered by src/pages/*.ts.
// Run: node scripts/gen-pages.mjs
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://ab-s0lution.github.io/Le-C---Salon-de-Coiffure-Rennes/'
const posts = [
  ['pourquoi-tout-commence-par-un-diagnostic', 'Pourquoi tout commence par un diagnostic'],
  ['balayage-effet-soleil-combien-de-temps-prevoir', 'Balayage effet soleil : combien de temps prévoir ?'],
  ['passer-au-blanc-naturel-avec-le-grey-blending', 'Passer au blanc naturel avec le grey blending'],
  ['coloration-vegetale-ce-quil-faut-savoir', 'Coloration végétale : ce qu’il faut savoir'],
  ['routine-pour-les-cheveux-blonds', 'Routine pour les cheveux blonds'],
  ['boucles-la-coupe-curly', 'Boucles : la coupe curly'],
  ['le-cuivre-na-pas-de-saison', 'Le cuivré n’a pas de saison'],
  ['le-vrac-au-salon', 'Le vrac au salon'],
  ['une-maison-a-pans-de-bois-rue-du-chapitre', 'Une maison médiévale rue du Chapitre'],
  ['devenir-coiffeur-se-en-apprentissage', 'Devenir coiffeur·se en apprentissage'],
]
const routes = [
  { dir: '', mod: 'home', title: 'Le C. Coiffeur Coloriste à Rennes, rue du Chapitre', desc: 'Salon de coiffure et de couleur dans une maison médiévale du vieux Rennes. Diagnostic, rituel massant, balayages, blonds ultimes. Maquette de démonstration.', ld: true },
  { dir: 'la-maison/', mod: 'maison', title: 'La Maison, 3 rue du Chapitre', desc: 'L’histoire de Magali et de la maison médiévale de la rue du Chapitre, à Rennes.' },
  { dir: 'carte/', mod: 'carte', title: 'Carte & tarifs', desc: 'Tous les tarifs Planity du salon, relevés en octobre 2026, avec La Mesure : les prix selon la longueur de vos cheveux.' },
  { dir: 'couleur/', mod: 'couleur', title: 'La Couleur', desc: 'Balayages naturels, blonds ultimes, cuivré, violine, grey blending et coloration végétale Couleurs Gaïa.' },
  { dir: 'soins/', mod: 'soins', title: 'Les soins', desc: 'Cérémonie de soins, Olaplex, toxine botulique végétale, reconstruction totale et lissage brésilien.' },
  { dir: 'rituel/', mod: 'rituel', title: 'Le Rituel', desc: 'Comment se passe une visite : diagnostic, shampooing traitant, rituel massant, soin, coupe, coiffage.' },
  { dir: 'equipe/', mod: 'equipe', title: 'L’équipe', desc: 'Magali, coiffeuse coloriste fondatrice, et Annaëlle.' },
  { dir: 'realisations/', mod: 'realisations', title: 'Réalisations', desc: 'Une galerie d’illustrations : balayage, blond, cuivré, violine, boucles, coupe transformation.' },
  { dir: 'boutique/', mod: 'boutique', title: 'Le Coin des soins', desc: 'Le bar à vrac et les soins disponibles au salon. Pas de vente en ligne.' },
  { dir: 'avis/', mod: 'avis', title: 'Avis', desc: '5,0 sur Planity, 201 avis : les mots des clientes, tels qu’ils ont été écrits.' },
  { dir: 'journal/', mod: 'journal', title: 'Journal', desc: 'Articles d’exemple sur la couleur, les soins, les boucles et la maison.' },
  ...posts.map(([slug, t]) => ({ dir: `journal/${slug}/`, mod: 'article', title: t, desc: 'Article d’exemple du journal du salon.', article: true })),
  { dir: 'cartes-cadeaux/', mod: 'cadeaux', title: 'Cartes cadeaux', desc: 'Offrir un temps de soin : cartes cadeaux sur Planity ou au salon.' },
  { dir: 'recrutement/', mod: 'recrutement', title: 'Rejoindre Le C.', desc: 'Le salon recherche des apprenti·es pour un BP coiffure.' },
  { dir: 'faq/', mod: 'faq', title: 'Questions fréquentes', desc: 'Rendez-vous, tarifs, couleur, soins, produits et accès : les réponses.' },
  { dir: 'contact/', mod: 'contact', title: 'Contact & accès', desc: '3 rue du Chapitre, 35000 Rennes. 09 88 43 09 14. Horaires, accès métro et parkings.', ld: true },
  { dir: 'mentions-legales/', mod: 'legal', title: 'Mentions légales', desc: 'Mentions légales du site de démonstration.' },
  { dir: 'confidentialite/', mod: 'confidentialite', title: 'Confidentialité', desc: 'Ce site n’utilise ni cookies ni traceurs.' },
  { dir: 'plan-du-site/', mod: 'plan', title: 'Plan du site', desc: 'Toutes les pages du site.' },
]

const jsonld = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Le C.',
  alternateName: 'Le C. Coiffeur Coloriste',
  url: SITE,
  telephone: '+33988430914',
  priceRange: '€€€',
  address: { '@type': 'PostalAddress', streetAddress: '3 rue du Chapitre', postalCode: '35000', addressLocality: 'Rennes', addressCountry: 'FR' },
  geo: { '@type': 'GeoCoordinates', latitude: 48.111056, longitude: -1.682005 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '19:00' },
  ],
  sameAs: ['https://www.instagram.com/leccoiffeur/', 'https://www.facebook.com/leccoiffeur/', 'https://www.planity.com/le-c-coiffeur-35000-rennes'],
}

function esc(s) { return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;') }

for (const r of routes) {
  const depth = r.dir ? r.dir.split('/').filter(Boolean).length : 0
  const title = r.dir === '' ? r.title : `${r.title} | Le C. Coiffeur Coloriste`
  const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(r.desc)}" />
<link rel="canonical" href="${SITE}${r.dir}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="Le C. Coiffeur Coloriste (maquette)" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(r.desc)}" />
<meta property="og:url" content="${SITE}${r.dir}" />
<meta name="twitter:card" content="summary" />
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#0e3f62" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#10171a" />
<meta name="color-scheme" content="light dark" />
<link rel="icon" type="image/svg+xml" href="%BASE_URL%favicon.svg" />
<script>(function(){var d=document.documentElement;try{var t=localStorage.getItem('lec-theme');if(t)d.dataset.theme=t}catch(e){}var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;if(!rm){d.classList.add('js-motion');setTimeout(function(){if(!d.classList.contains('lec-ready'))d.classList.remove('js-motion')},5000)}try{if(sessionStorage.getItem('lec-foil')==='1'&&!rm){sessionStorage.removeItem('lec-foil');d.classList.add('foil-in')}}catch(e){}})()</script>
${r.ld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
</head>
<body data-page="${r.mod}"${r.article ? ` data-depth="${depth}"` : ''}>
<div id="app"><noscript><p style="padding:2rem;font-family:system-ui">Le C. Coiffeur Coloriste, 3 rue du Chapitre, 35000 Rennes. Téléphone : 09 88 43 09 14. Réservation uniquement sur <a href="https://www.planity.com/le-c-coiffeur-35000-rennes">Planity</a>. Ce site de démonstration nécessite JavaScript.</p></noscript></div>
<script type="module" src="/src/pages/${r.mod}.ts"></script>
</body>
</html>
`
  const out = join(root, r.dir, 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
}
console.log(`${routes.length} pages written`)
