export const siteUrl = "https://r3Tech.com";

export const brand = {
  name: "R3 Tech",
  tagline: "Software • Web • IT Solutions",
  email: "r3tech24@gmail.com",
  location: "Rosario, Santa Fe, Argentina",
};

export const whatsappUrl =
  "https://wa.me/5493412513986?text=Hola%20R3%20Tech%2C%20quiero%20solicitar%20un%20presupuesto.";

export const navItems = [
  { label: "Soluciones", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const stats = [
  { value: "+48h", label: "para recibir una propuesta clara" },
  { value: "100%", label: "enfoque en soluciones medibles" },
  { value: "360°", label: "software, web y soporte IT" },
] as const;

export const solutionGroups = [
  {
    title: "Software",
    items: [
      {
        title: "Software a medida",
        icon: "Code2",
        text: "Aplicaciones adaptadas a tus procesos.",
      },
      {
        title: "Desarrollo Web",
        icon: "MonitorCog",
        text: "Sitios rápidos, modernos y optimizados para Google.",
      },
      {
        title: "Ecommerce",
        icon: "ShoppingCart",
        text: "Tiendas online listas para vender desde el primer día.",
      },
      {
        title: "Automatización",
        icon: "Zap",
        text: "Integración con WhatsApp, Mercado Pago, APIs e IA.",
      },
      {
        title: "SaaS",
        icon: "Server",
        text: "Plataformas escalables para operar, vender y crecer.",
      },
    ],
  },
  {
    title: "IT Solutions",
    items: [
      {
        title: "Soporte Remoto",
        icon: "Headphones",
        text: "Resolución rápida de problemas sin moverte de tu casa.",
      },
      {
        title: "Optimización",
        icon: "Cpu",
        text: "Limpieza, mejoras de rendimiento y actualización de hardware.",
      },
      {
        title: "Reparación",
        icon: "Wrench",
        text: "Diagnóstico, reparación y mantenimiento de PC y notebooks.",
      },
      {
        title: "Redes",
        icon: "Network",
        text: "Configuración de conexiones estables, ordenadas y seguras.",
      },
    ],
  },
] as const;

export const benefits = [
  "Atención personalizada",
  "Presupuestos rápidos",
  "Soluciones a medida",
  "Tecnología actual",
  "Soporte postventa",
  "Trabajo remoto y presencial",
] as const;

export const processSteps = [
  {
    title: "Analizamos",
    text: "Entendemos tu operación, objetivos y puntos de mejora.",
  },
  {
    title: "Diseñamos",
    text: "Definimos una solución clara, viable y pensada para crecer.",
  },
  {
    title: "Desarrollamos",
    text: "Construimos con seguimiento cercano y criterio técnico.",
  },
  {
    title: "Implementamos",
    text: "Ponemos la solución en marcha y validamos su funcionamiento.",
  },
  {
    title: "Evolucionamos",
    text: "Mejoramos, damos soporte y acompañamos la evolución.",
  },
] as const;

export const projects = [
  {
    title: "CourtOS",
    badge: "Próximamente",
    category: "Plataforma inteligente",
    description: "Plataforma inteligente para la gestión de clubes deportivos.",
    image: "/courtos-placeholder.svg",
    alt: "Mockup CourtOS",
    features: ["Reservas online", "Gestión de canchas", "Ranking de jugadores", "Estadísticas"],
    stack: "Next.js · React · TypeScript · Supabase",
    href: "#contacto",
    action: "Próximamente",
  },
  {
    title: "LS Negocios Inmobiliarios",
    badge: "Publicado",
    category: "Desarrollo Web",
    description:
      "Sitio con catálogo de propiedades, buscador inteligente y experiencia moderna enfocada en convertir visitas en consultas.",
    image: "/Ls.webp",
    alt: "Preview LS Negocios Inmobiliarios",
    features: ["Catálogo de propiedades", "Buscador inteligente", "Diseño responsive", "WhatsApp integrado"],
    stack: "Next.js · React · TypeScript · Tailwind CSS",
    href: "https://lsnegociosinmobiliarios.netlify.app/",
    action: "Ver proyecto",
  },
  {
    title: "Lavalle Padel Club",
    badge: "Publicado",
    category: "Sistema de Gestión",
    description:
      "Gestión de club de pádel con reservas online, administración de sedes y control de disponibilidad.",
    image: "/LPC.webp",
    alt: "Preview Lavalle Padel Club",
    features: ["Reservas online", "Gestión de canchas", "Ranking de jugadores", "Panel administrativo"],
    stack: "Next.js · React · TypeScript · Tailwind CSS",
    href: "https://lavallepadelclub.netlify.app/",
    action: "Ver proyecto",
  },
] as const;

export const socialLinks = [
  { label: "WhatsApp", href: whatsappUrl, icon: "WhatsApp" },
  { label: "Instagram", href: "https://www.instagram.com/r3tech.ar/?hl=es", icon: "Instagram" },
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=r3tech24@gmail.com", icon: "Mail" },
  { label: "GitHub", href: "https://github.com/", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "Linkedin" },
] as const;

export const serviceNames = solutionGroups.flatMap((group) => group.items.map((service) => service.title));

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  slogan: brand.tagline,
  description:
    "Desarrollo de páginas web, aplicaciones, tiendas online y soporte técnico profesional para empresas y particulares.",
  url: siteUrl,
  areaServed: "Argentina",
  email: brand.email,
  sameAs: ["https://www.instagram.com/r3tech.ar/?hl=es", "https://github.com/", "https://linkedin.com/"],
  serviceType: serviceNames,
};
