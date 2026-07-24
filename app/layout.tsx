import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://r3Tech.com"),
  title: {
    default: "R3 Tech | Software, Web & IT Solutions",
    template: "%s | R3 Tech",
  },
  description:
    "R3 Tech desarrolla páginas web, aplicaciones, tiendas online y brinda soporte técnico profesional para empresas y particulares.",
  alternates: {
    canonical: "https://r3Tech.com",
  },
  keywords: [
    "R3 Tech",
    "desarrollo web",
    "software a medida",
    "tiendas online",
    "soporte técnico",
    "reparación de PC",
    "IT solutions",
  ],
  authors: [{ name: "R3 Tech" }],
  creator: "R3 Tech",
  publisher: "R3 Tech",
  openGraph: {
    title: "R3 Tech | Software • Web • IT Solutions",
    description:
      "Tecnología profesional para impulsar tu negocio: web, software, ecommerce y soporte IT.",
    url: "https://r3Tech.com",
    siteName: "R3 Tech",
    images: [
      {
        url: "/r3Tech-logo-transparent.webp",
        width: 1068,
        height: 515,
        alt: "Logo R3 Tech",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R3 Tech | Software • Web • IT Solutions",
    description:
      "Desarrollo web, aplicaciones, tiendas online y soporte técnico profesional.",
    images: ["/r3Tech-logo-transparent.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/r3Tech-icon.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://r3Tech.com/#organization",
        "name": "R3 Tech",
        "url": "https://r3Tech.com",
        "logo": "https://r3Tech.com/r3Tech-logo-transparent.webp",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://r3Tech.com/#website",
        "url": "https://r3Tech.com",
        "name": "R3 Tech",
        "publisher": { "@id": "https://r3Tech.com/#organization" }
      }
    ]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/rajdhani-latin-700-normal.05ae8f94.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/plus-jakarta-sans-latin-400-normal.220db345.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/plus-jakarta-sans-latin-700-normal.d84247b5.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/plus-jakarta-sans-latin-600-normal.226f862d.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
