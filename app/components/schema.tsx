export function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://r3tech.site/#organization",
        name: "R3 Tech",
        url: "https://r3tech.site",
        logo: "https://r3tech.site/logo.png",
        description:
          "Desarrollamos soluciones tecnológicas para empresas.",
        email: "r3tech24@gmail.com",
        sameAs: [
          // Agregaremos las redes cuando las tengas definidas
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://r3tech.site/#website",
        url: "https://r3tech.site",
        name: "R3 Tech",
        publisher: {
          "@id": "https://r3tech.site/#organization",
        },
        inLanguage: "es-AR",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://r3tech.site/#service",
        name: "R3 Tech",
        url: "https://r3tech.site",
        areaServed: "AR",
        serviceType: [
          "Desarrollo Web",
          "Software a Medida",
          "Automatización",
          "SaaS",
          "Consultoría Tecnológica",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}