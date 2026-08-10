import type { Metadata } from "next";
import localFont from "next/font/local";
import { brand, siteUrl } from "./lib/site-data";
import "./globals.css";
import { Analytics } from "./components/analytics";
import { Clarity } from "./components/clarity";
import { Schema } from "./components/schema";

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
    default: `${brand.name} | Desarrollo de Software, Páginas Web y Soluciones IT`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Desarrollamos software a medida, páginas web, plataformas SaaS, tiendas online y automatizaciones para empresas. Soluciones tecnológicas modernas enfocadas en aumentar la productividad y el crecimiento.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "R3 Tech",
    "desarrollo de software",
    "software a medida",
    "desarrollo web",
    "páginas web",
    "Next.js",
    "React",
    "TypeScript",
    "automatización",
    "inteligencia artificial",
    "ecommerce",
    "sistemas de gestión",
    "aplicaciones web",
    "software para empresas",
    "consultoría IT",
    "Rosario",
    "Argentina",
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "R3 Tech | Desarrollo de Software, Páginas Web y Soluciones IT",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | ${brand.tagline}`,
    description: "Desarrollo web, aplicaciones, tiendas online y soporte técnico profesional.",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${rajdhani.variable} scroll-smooth`}>
      <body>
        {children}
          <Analytics />
          <Clarity />
          <Schema />
      </body>
    </html>
  );
}
