# Le C., Rennes (démo)

- **Concept**: « Toile & Balayage », gravure à l'encre en SVG, la couleur entre par des traînées de balayage (masques `@property --sweep1..3`). Signature: « La Mesure » (`src/core/gauge.ts`), prix Planity recalculés par longueur via `priceFor()`.
- **Palette**: chaux (fond clair), encre, bleu d'en-tête, cerisier (accent), thème sombre via `[data-theme=dark]` et `prefers-color-scheme`. Polices Cormorant Garamond / Cormorant SC / Hanken Grotesk.
- **Source de vérité**: `PLAN.md`. Équipe publiée: Magali et Annaëlle seulement (`visibleTeam`). Âge du bâtiment: « maison médiévale », « XIVe-XVe siècles selon l'Office de Tourisme de Rennes ». Jamais le SIRET parisien, pas de son, pas d'e-mail tant que non confirmé, pas de photos ni de logo.
- **Lancer**: `npm run dev`. **Vérifier**: `npm run typecheck && npm run build`, puis `npm run preview -- --port 4179` (base `/Le-C---Salon-de-Coiffure-Rennes/`).
- **Une page = un `index.html` généré + un module** `src/pages/<nom>.ts` (appelle `boot({page, render, init})`). Ajouter une route: éditer `scripts/gen-pages.mjs`, relancer `node scripts/gen-pages.mjs`; `vite.config.ts` détecte les dossiers tout seul.
- **Typographie**: `typo()` (src/core/dom.ts) s'applique à tout le HTML de `boot()`: espaces insécables avant `? ! ; :`, « », « 1 h 15 ». Pas de tiret cadratin dans le texte.
- **Mouvement**: classe `js-motion` posée par un script inline; GSAP + Lenis (pointeur fin seulement); `prefers-reduced-motion` donne l'état statique. Animer `transform`/`opacity` uniquement.
- **Données**: `src/data/*.ts`, en-tête RÉEL vs EXEMPLE; JSON-LD avec données vérifiées seulement.
- **Git**: ne jamais committer ni pousser sans demande.
