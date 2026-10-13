# Le C. Coiffeur Coloriste, Rennes (maquette de démonstration)

Site vitrine en plusieurs pages pour le salon **Le C.** (3 rue du Chapitre, 35000 Rennes), qui ne réserve que par Planity et n'a pas de site propre. Maquette sans commande du salon ; rien ici n'est officiel.

**Concept « Toile & Balayage »** : le salon est une maison médiévale. Tout le visuel est gravé à l'encre (SVG originaux), et la couleur entre dans le trait comme un balayage, au scroll et au passage du pointeur.
**Signature « La Mesure »** : une règle de longueur (peigne à faire glisser) qui recalcule les vrais tarifs Planity selon la longueur des cheveux.

## Lancer

```bash
npm install
npm run dev          # développement
npm run typecheck    # tsc --noEmit
npm run build        # tsc + vite build, dossier dist/
npm run preview      # aperçu de dist/ (base /Le-C---Salon-de-Coiffure-Rennes/)
node scripts/gen-pages.mjs   # régénère les 28 index.html après un changement de routes
```

## Pages (28)

Accueil, La Maison, Carte & tarifs (La Mesure), Couleur, Soins (avec petit guide), Le Rituel, L'équipe, Réalisations (illustrations filtrables), Le Coin des soins (vrac, sans panier), Avis, Journal + 10 articles d'exemple, Cartes cadeaux, Recrutement, FAQ (recherche), Contact & accès, Mentions légales, Confidentialité, Plan du site, 404.

## Technique

- Vite 8, TypeScript 6, Tailwind v4 (jetons dans `src/style.css`), build multi-pages : chaque dossier contenant `index.html` est une entrée Rollup (`vite.config.ts`).
- Chaque page est un petit HTML généré (`scripts/gen-pages.mjs`: SEO, Open Graph, JSON-LD vérifié sur l'accueil et le contact) plus un module `src/pages/<nom>.ts` qui appelle `boot()` (`src/core/shell.ts`).
- **GSAP** (ScrollTrigger, SplitText) : chapitre épinglé du Rituel, panoramique horizontal du nuancier, titres découpés, balayage de couleur. **Lenis** : défilement doux (souris uniquement). Transitions de page en JS (« feuille d'or »), compatibles Firefox.
- `prefers-reduced-motion` : états statiques ; en dessous de 900 px le Rituel est empilé.
- Pas de son, pas de cookies, pas de service tiers ; polices servies en local (@fontsource).
- Déploiement GitHub Pages via `.github/workflows/deploy.yml`; `ci.yml` vérifie qu'aucune URL absolue n'ignore la base.

## Données

`src/data/*.ts`, chaque fichier indique ce qui est **réel** (tarifs Planity relevés le 13/10/2026, horaires, avis cités, accès OpenStreetMap, SIREN) et ce qui est **exemple** (articles, produits hors coffrets Davroe, galerie, événements, idées de cartes cadeaux, FAQ).

## Points à confirmer avec le salon

E-mail public, accessibilité PMR, moyens de paiement, jours fériés, durée de validité des cartes cadeaux, nombre d'avis Google, rôle de Jade et Soizic (non publiées), accord pour citer les avis et le Petit Futé.
