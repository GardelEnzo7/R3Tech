import type { Metadata } from "next";
import localFont from "next/font/local";
import { brand, siteUrl } from "./lib/site-data";
import "./globals.css";

const plusJakarta = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    {
      path: "../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const rajdhani = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    {
      path: "../node_modules/@fontsource/rajdhani/files/rajdhani-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/rajdhani/files/rajdhani-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/rajdhani/files/rajdhani-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | Software, Web & IT Solutions`,
    template: `%s | ${brand.name}`,
  },
  description:
    "R3 Tech desarrolla páginas web, aplicaciones, tiendas online y brinda soporte técnico profesional para empresas y particulares.",
  alternates: {
    canonical: siteUrl,
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
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  openGraph: {
    title: `${brand.name} | ${brand.tagline}`,
    description: "Tecnología profesional para impulsar tu negocio: web, software, ecommerce y soporte IT.",
    url: siteUrl,
    siteName: brand.name,
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
    title: `${brand.name} | ${brand.tagline}`,
    description: "Desarrollo web, aplicaciones, tiendas online y soporte técnico profesional.",
    images: ["/r3Tech-logo-transparent.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/r3tech-icon.png",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: brand.name,
      url: siteUrl,
      logo: `${siteUrl}/r3Tech-logo-transparent.webp`,
      sameAs: ["https://www.instagram.com/r3tech.ar/?hl=es", "https://github.com/", "https://linkedin.com/"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: brand.name,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${rajdhani.variable} scroll-smooth`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {children}
      </body>
    </html>
  );
}
