export default function MentionsLegales() {
  return (
    <div className="pt-40 pb-24 px-6 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto prose prose-invert font-inter">
        <h1 className="text-5xl font-bebas mb-12">MENTIONS LÉGALES</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">1. PRÉSENTATION DU SITE</h2>
          <p className="text-muted">
            Le site <strong>GTA6HQ.fr</strong> est un site d&apos;information et de comparaison d&apos;articles gaming spécialisé dans l&apos;univers Grand Theft Auto VI.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">2. AFFILIATION AMAZON</h2>
          <p className="text-muted italic">
            &quot;En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.&quot;
          </p>
          <p className="text-muted mt-4">
            GTA6HQ participe au Programme Partenaires d’Amazon EU, un programme d’affiliation conçu pour permettre à des sites de percevoir une rémunération grâce à la création de liens vers Amazon.fr.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">3. PROPRIÉTÉ INTELLECTUELLE</h2>
          <p className="text-muted">
            Rockstar Games, Grand Theft Auto, GTA VI, et tous les logos associés sont des marques déposées de Take-Two Interactive Software, Inc. Ce site n&apos;est pas affilié, approuvé ou parrainé par Rockstar Games ou Take-Two Interactive.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bebas text-cyan mb-4">4. DONNÉES PERSONNELLES</h2>
          <p className="text-muted">
            Ce site ne collecte aucune donnée personnelle nominative. Nous utilisons uniquement des outils d&apos;analyse de trafic anonymes pour améliorer votre expérience.
          </p>
        </section>

        <section className="mb-12">
            <h2 className="text-2xl font-bebas text-cyan mb-4">5. CONTACT</h2>
            <p className="text-muted">
                Pour toute question, vous pouvez nous contacter à l&apos;adresse suivante : contact@gta6hq.fr
            </p>
        </section>
      </div>
    </div>
  );
}
