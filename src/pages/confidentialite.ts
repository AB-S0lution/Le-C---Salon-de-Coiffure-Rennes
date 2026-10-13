import { boot } from '../core/shell'
import { phead } from '../core/ui'

function render(): string {
  return `
${phead({ title: 'Confidentialité, <em>sans cookies.</em>', crumb: 'Confidentialité' })}
<section class="section" style="padding-top:0"><div class="wrap legal">
  <h2>Aucun cookie, aucun traceur</h2>
  <p>Ce site ne dépose aucun cookie, n’intègre aucun outil de mesure d’audience, aucune carte interactive ni aucun service tiers au chargement. Les polices sont servies depuis le site lui-même.</p>
  <h2>Ce qui reste dans votre navigateur</h2>
  <p>Deux informations purement techniques sont conservées sur votre appareil, jamais envoyées : votre choix de thème clair ou sombre, et un indicateur qui anime la transition entre deux pages. Vous pouvez les effacer à tout moment dans les réglages du navigateur.</p>
  <h2>Formulaires</h2>
  <p>La lettre du salon et les autres formulaires de la maquette ne sont pas actifs : aucune donnée n’est collectée.</p>
  <h2>Liens externes</h2>
  <p>Le bouton de réservation vous conduit sur Planity, qui applique sa propre politique de confidentialité. Il en va de même pour Instagram, Facebook et Google Maps si vous suivez ces liens.</p>
  <h2>Hébergement</h2>
  <p>GitHub Pages peut enregistrer des journaux techniques (adresse IP) selon sa propre politique.</p>
</div></section>`
}
boot({ page: 'confidentialite', render })
