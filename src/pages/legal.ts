import { boot } from '../core/shell'
import { phead } from '../core/ui'
import { eur } from '../core/dom'
import { business } from '../data'

function render(): string {
  const l = business.legal, a = business.address
  return `
${phead({ title: 'Mentions <em>légales.</em>', crumb: 'Mentions légales' })}
<section class="section" style="padding-top:0"><div class="wrap legal">
  <p class="sample-note">Ce site est une maquette de démonstration réalisée sans commande du salon. Il n’est pas le site officiel de ${business.fullName}.</p>
  <h2>Le salon présenté</h2>
  <p>${l.name} (${business.fullName}), ${l.form} au capital de ${eur(l.capitalEUR)}, ${a.street}, ${a.postalCode} ${a.city}.<br>SIREN ${l.siren}. SIRET ${l.siret}. Activité : ${l.naf}.<br>Téléphone : ${business.phone.display}.</p>
  <p>Représentant légal : ${l.gerance}.</p>
  <h2>Directeur de la publication</h2>
  <p>Le salon n’est pas l’éditeur de cette maquette. Pour toute demande de modification ou de retrait, contactez le salon par téléphone ; elle sera traitée sans délai.</p>
  <h2>Hébergement</h2>
  <p>GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.</p>
  <h2>Propriété intellectuelle</h2>
  <p>Les illustrations, gravures et le graphisme sont des créations originales de cette maquette. Les avis cités appartiennent à leurs auteurs et à la plateforme Planity ; ils sont reproduits à titre d’illustration. Aucun logo ni aucune photographie du salon n’est utilisé.</p>
  <h2>Contenus d’exemple</h2>
  <p>Les articles du journal, les produits hors coffrets Davroe, les idées de cartes cadeaux, les événements et la galerie sont des exemples fictifs, signalés comme tels sur chaque page.</p>
  <h2>Prix</h2>
  <p>Les tarifs reprennent la carte publique de Planity relevée en octobre 2026. Seule la page Planity du salon fait foi.</p>
</div></section>`
}
boot({ page: 'legal', render })
