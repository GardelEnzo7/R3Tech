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
    apple: "/r3Tech-icon.png",
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
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
