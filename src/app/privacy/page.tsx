import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GTA6HQ',
  description: 'Privacy Policy for GTA6HQ — how we handle user data and third-party integrations including Pinterest API and Amazon Associates.',
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-40 pb-24 px-6 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto prose prose-invert font-inter">
        <h1 className="text-5xl font-bebas mb-4">PRIVACY POLICY</h1>
        <p className="text-muted mb-12">Dernière mise à jour / Last updated: June 26, 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">1. INTRODUCTION</h2>
          <p className="text-muted">
            Cette Politique de Confidentialité décrit comment <strong>GTA6HQ</strong> (&quot;nous&quot;, &quot;notre&quot;), accessible à l&apos;adresse{' '}
            <strong>gta6-pi-cyan.vercel.app</strong>, collecte, utilise et protège les informations lorsque vous visitez notre site web ou interagissez avec nos services, y compris les intégrations avec des plateformes tierces telles que Pinterest et Amazon.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">2. COLLECTE DES DONNÉES</h2>
          <p className="text-muted mb-4">
            Nous ne collectons <strong>aucune</strong> donnée personnelle nominative directe (nom, adresse, email) sans votre consentement explicite. Les données non-personnelles suivantes peuvent être collectées automatiquement :
          </p>
          <ul className="text-muted list-disc pl-6 space-y-2">
            <li>Données d&apos;analyse anonymes (pages vues, sources de trafic, type d&apos;appareil)</li>
            <li>Cookies déposés par des services tiers (Amazon Associates, Pinterest, outils d&apos;analyse)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">3. UTILISATION DE L&apos;API PINTEREST</h2>
          <p className="text-muted mb-4">
            Nous utilisons l&apos;API Pinterest pour publier et gérer du contenu (épingles) qui renvoie vers les articles de notre site. En détail :
          </p>
          <ul className="text-muted list-disc pl-6 space-y-2">
            <li>Nous <strong>n&apos;accédons pas</strong>, ne collectons pas et ne stockons pas de données personnelles des utilisateurs Pinterest</li>
            <li>Nous <strong>ne lisons pas</strong> les tableaux privés, messages ou informations de profil d&apos;aucun utilisateur Pinterest</li>
            <li>L&apos;API est utilisée exclusivement pour créer des épingles (images + liens) sur notre propre compte Pinterest</li>
            <li>Tout le contenu partagé via Pinterest dirige les utilisateurs vers des pages publiques de notre site</li>
            <li>Nous ne partageons, ne vendons ni ne transférons aucune donnée obtenue via l&apos;API Pinterest à des tiers</li>
          </ul>
          <p className="text-muted mt-4">
            Notre utilisation de l&apos;API Pinterest est conforme aux{' '}
            <a href="https://developers.pinterest.com/terms/" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">
              Conditions d&apos;utilisation des développeurs Pinterest
            </a>{' '}
            et à la{' '}
            <a href="https://policy.pinterest.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">
              Politique de confidentialité de Pinterest
            </a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">4. PROGRAMME D&apos;AFFILIATION AMAZON</h2>
          <p className="text-muted">
            GTA6HQ participe au Programme Partenaires d&apos;Amazon EU, un programme d&apos;affiliation conçu pour permettre à des sites de percevoir une rémunération grâce à la création de liens vers Amazon.fr. Amazon peut utiliser des cookies pour suivre les conversions. Pour plus d&apos;informations, consultez la{' '}
            <a href="https://www.amazon.fr/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">
              Politique de confidentialité d&apos;Amazon
            </a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">5. COOKIES</h2>
          <p className="text-muted">
            Notre site peut utiliser des cookies provenant de services tiers (Amazon, Pinterest, outils d&apos;analyse). Ces cookies servent à suivre les achats affiliés et à analyser l&apos;utilisation du site. Vous pouvez gérer ou désactiver les cookies via les paramètres de votre navigateur à tout moment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">6. PARTAGE DES DONNÉES</h2>
          <p className="text-muted">
            Nous ne vendons, n&apos;échangeons et ne louons <strong>aucune</strong> donnée d&apos;utilisateur à des tiers. Nous ne partageons aucune information personnelle car nous n&apos;en collectons pas.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">7. VOS DROITS (RGPD)</h2>
          <p className="text-muted">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation française applicable, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Puisque nous ne collectons pas de données personnelles, ces droits s&apos;appliquent principalement aux cookies stockés sur votre appareil, que vous pouvez gérer via les paramètres de votre navigateur.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">8. MODIFICATIONS DE CETTE POLITIQUE</h2>
          <p className="text-muted">
            Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Toute modification sera reflétée sur cette page avec une date de mise à jour actualisée.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">9. CONTACT</h2>
          <p className="text-muted">
            Pour toute question concernant cette Politique de Confidentialité, contactez-nous via notre site :{' '}
            <strong>gta6-pi-cyan.vercel.app</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
