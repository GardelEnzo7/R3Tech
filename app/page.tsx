"use client";

import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Server,
  Cpu,
  Code2,
  MonitorCog,
  Zap,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  Rocket,
  ArrowUp,
  Instagram,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const TechIllustration = dynamic(() => import("./components/TechIllustrationClient"), {
  ssr: false,
  loading: () => <div className="w-full h-[560px]" />,
});

const whatsappUrl = "https://wa.me/5493412513986?text=Hola%20R3%20Tech%2C%20quiero%20solicitar%20un%20presupuesto.";

const navItems = [
  { label: "Soluciones", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

const mobileMenuItems = navItems;

const solutionGroups = [
  {
    title: "Software",
    items: [
      { title: "Desarrollo a medida", icon: Code2, text: "Aplicaciones adaptadas a tus procesos." },
      { title: "Integraciones", icon: Server, text: "Conectar sistemas y servicios para automatizar tareas." },
    ],
  },
  {
    title: "Web",
    items: [
      { title: "Páginas y tiendas", icon: Code2, text: "Sitios optimizados para conversión y rendimiento." },
      { title: "UX/UI", icon: Cpu, text: "Diseño pensado en la experiencia del usuario." },
    ],
  },
  {
    title: "Soporte IT",
    items: [
      { title: "Soporte técnico", icon: Server, text: "Configuración y soporte para conexiones estables y seguras." },
    ],
  },
];

const benefits = [
  "Atención personalizada",
  "Presupuestos rápidos",
  "Soluciones a medida",
  "Tecnología actual",
  "Soporte postventa",
  "Trabajo remoto y presencial",
];

const process = ["Analizamos", "Diseñamos", "Desarrollamos", "Implementamos", "Evolucionamos"];

const stats = [
  { value: "+48h", label: "para recibir una propuesta clara" },
  { value: "100%", label: "enfoque en soluciones medibles" },
  { value: "360°", label: "software, web y soporte IT" },
];

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMask: "url('/icono-whatsapp.svg') center / contain no-repeat",
        mask: "url('/icono-whatsapp.svg') center / contain no-repeat",
      }}
    />
  );
}

function LogoImage({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-10 w-20",
    md: "h-16 w-32",
    lg: "h-28 w-60",
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <Image
        src="/r3Tech-logo-transparent.webp"
        alt="R3 Tech"
        fill
        sizes={size === "sm" ? "80px" : size === "md" ? "128px" : "240px"}
        className="object-contain drop-shadow-[0_0_22px_rgba(59,130,246,0.34)]"
        priority={size !== "sm"}
      />
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      className={`technical-panel group relative overflow-hidden rounded-[22px] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/55 ${className}`}
    >
      <motion.div
        className="card-light"
        style={{
          background: useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.18), transparent 72%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function Navbar({ open, onToggle, buttonRef }: { open: boolean; onToggle: () => void; buttonRef: React.RefObject<HTMLButtonElement | null> }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/[0.82] shadow-2xl shadow-black/20 backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Principal">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="R3 Tech inicio">
          <LogoImage size="sm" className="shrink-0" />
          <span>
            <span className="brand-type block text-xl font-bold uppercase tracking-[0.08em] text-white">R3 Tech</span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Software • Web • IT Solutions</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="brand-type rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="brand-type hidden items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-blue-400 md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>

        <button
          type="button"
          ref={buttonRef}
          onClick={onToggle}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 bg-slate-950 text-white md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          <motion.div initial={false} animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.28 }}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.div>
        </button>
      </nav>
    </header>
  );
}

function MobileMenuOverlay({ open, onClose, buttonRef }: { open: boolean; onClose: () => void; buttonRef: React.RefObject<HTMLButtonElement | null> }) {
  const menuRef = useRef<HTMLElement | null>(null);
  const originalBodyOverflow = useRef<string>("");
  const originalHtmlOverflow = useRef<string>("");
  const originalBodyPaddingRight = useRef<string>("");

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (open) {
      originalBodyOverflow.current = body.style.overflow;
      originalHtmlOverflow.current = html.style.overflow;
      originalBodyPaddingRight.current = body.style.paddingRight;

      const scrollbarWidth = window.innerWidth - html.clientWidth;
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }

      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = originalHtmlOverflow.current;
      body.style.overflow = originalBodyOverflow.current;
      body.style.paddingRight = originalBodyPaddingRight.current;
    }

    return () => {
      html.style.overflow = originalHtmlOverflow.current;
      body.style.overflow = originalBodyOverflow.current;
      body.style.paddingRight = originalBodyPaddingRight.current;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const node = menuRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable: HTMLElement[] = node ? Array.from(node.querySelectorAll(focusableSelector)) as HTMLElement[] : [];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
        buttonRef.current?.focus();
      }
      if (e.key === 'Tab') {
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose, buttonRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] w-screen h-[100dvh] overflow-hidden md:hidden"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-[#060B17]" />
          <div ref={menuRef as any} className="relative z-10 flex h-full w-full flex-col overflow-hidden px-5 pt-6 text-slate-100">
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={onClose}
              className="absolute right-4 top-4 z-50 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition hover:bg-white/15"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative z-50 mt-6 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <LogoImage size="sm" />
                <div>
                  <p className="brand-type text-sm font-bold uppercase tracking-[0.18em] text-white">R3 TECH</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Software · Web · IT Solutions</p>
                </div>
              </div>
            </div>

            <nav aria-label="Menú principal" className="relative z-50 flex-1">
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
                className="mt-8 space-y-3"
              >
                {mobileMenuItems.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: 28 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.34, ease: 'easeOut' } },
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="block w-full px-0 py-4 text-left text-2xl font-semibold tracking-tight text-white transition-colors duration-200 hover:text-blue-300"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <div className="mt-auto relative z-50 pt-6 pb-12">
              <div style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} className="w-full">
                <a
                  href={whatsappUrl}
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-blue-400"
                >
                  Solicitar Presupuesto
                </a>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}




function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-ink" />
      <div className="absolute inset-0 -z-10 bg-tech-grid bg-[length:42px_42px] opacity-45" />
      <div className="noise absolute inset-0 -z-10 opacity-20" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/[0.18] blur-[120px]" />
      <div className="absolute right-0 top-32 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-28 flex flex-col">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100">
            <Zap className="h-4 w-4 text-blue-300" aria-hidden="true" />
            R3 Tech · Software • Web • IT Solutions
          </span>
          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Desarrollamos el software que hace crecer tu empresa.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Automatizamos procesos, desarrollamos plataformas web y creamos software a medida para que tu empresa ahorre tiempo, venda más y escale sin límites.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="brand-type inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-base font-bold uppercase tracking-[0.08em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Solicitar presupuesto
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="brand-type inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/35 bg-white/[0.03] px-7 py-4 text-base font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:border-blue-300/70 hover:bg-white/[0.07]"
            >
              Ver soluciones
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="hidden lg:grid mt-10 max-w-2xl gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
                <p className="brand-type text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          aria-hidden="true"
          className="mt-10 flex justify-center lg:mt-0"
        >
          <TechIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
      <p className="brand-type text-base font-bold uppercase tracking-[0.22em] text-blue-400">{eyebrow}</p>
      <h2 className="brand-type mt-4 text-4xl font-bold uppercase leading-[0.98] tracking-[0.02em] text-white sm:text-6xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{text}</p>
    </FadeIn>
  );
}

function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden py-24">
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Soluciones"
          title="Soluciones digitales con criterio técnico"
          text="R3 Tech combina diseño, desarrollo y soporte IT para resolver necesidades reales con una experiencia clara, moderna y confiable."
        />

        {/* Render all service items in a single 3-column grid to match previous layout (2 rows x 3 cols) */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutionGroups
            .flatMap((group) => group.items.map((item) => ({ ...item, group: group.title })))
            .map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title + index} delay={index * 0.03}>
                  <MagneticCard className="h-full">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/[0.14] text-blue-200 ring-1 ring-blue-300/20">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="brand-type rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                        {service.group}
                      </span>
                    </div>

                    <h3 className="brand-type text-2xl font-bold uppercase tracking-[0.03em] text-white">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">{service.text}</p>
                  </MagneticCard>
                </FadeIn>
              );
            })}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="ventajas" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="brand-type text-base font-bold uppercase tracking-[0.22em] text-blue-400">Por qué elegirme</p>
            <h2 className="brand-type mt-4 text-4xl font-bold uppercase leading-[0.98] tracking-[0.02em] text-white sm:text-6xl">
              Un partner tecnológico cercano, preciso y resolutivo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              La diferencia está en entender el problema antes de escribir código o cambiar hardware. R3 Tech trabaja con foco en resultados, comunicación clara y soporte después de la entrega.
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit} delay={index * 0.04}>
                <div className="glass flex min-h-24 items-center gap-4 rounded-2xl p-5 transition hover:border-blue-300/35">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-300" aria-hidden="true" />
                  <span className="brand-type text-xl font-bold uppercase tracking-[0.03em] text-slate-100">{benefit}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden py-24">
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso claro para construir soluciones reales"
          text="Acompañamos cada proyecto desde el diagnóstico hasta la mejora continua, con comunicación clara y foco en resultados."
        />
        <div className="relative grid gap-5 lg:grid-cols-5">
          <div className="absolute left-8 right-8 top-11 hidden h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent lg:block" />
          {process.map((step, index) => (
            <FadeIn key={step} delay={index * 0.07}>
              <div className="relative rounded-2xl border border-slate-700/60 bg-slate-950/45 p-6 backdrop-blur-xl">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-blue-500 text-lg font-black text-white shadow-glow">
                  {index + 1}
                </div>
                <h3 className="brand-type text-2xl font-bold uppercase tracking-[0.03em] text-white">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {index === 0 && "Entendemos tu operación, objetivos y puntos de mejora."}
                  {index === 1 && "Definimos una solución clara, viable y pensada para crecer."}
                  {index === 2 && "Construimos con seguimiento cercano y criterio técnico."}
                  {index === 3 && "Ponemos la solución en marcha y validamos su funcionamiento."}
                  {index === 4 && "Mejoramos, damos soporte y acompañamos la evolución."}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-300/25 bg-blue-500/10 p-8 shadow-glow backdrop-blur-xl sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-[90px]" />
            <div className="relative z-10 max-w-3xl">
              <Rocket className="mb-6 h-10 w-10 text-blue-200" aria-hidden="true" />
              <h2 className="brand-type text-4xl font-bold uppercase leading-[0.98] tracking-[0.02em] text-white sm:text-6xl">
                ¿Tenés una idea o un problema tecnológico?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Escribime y encontremos la mejor solución.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="brand-type mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-bold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Hablar por WhatsApp
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  const social = [
    { label: "WhatsApp", icon: WhatsAppIcon, href: whatsappUrl },
    { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/r3tech.ar/?hl=es" },
    { label: "Email", icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=r3tech24@gmail.com" },
    { label: "GitHub", icon: Github, href: "https://github.com/" },
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/" },
  ];

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <LogoImage size="md" className="mb-4" />
          <p className="brand-type text-3xl font-bold uppercase tracking-[0.08em] text-white">R3 Tech</p>
          <p className="mt-1 text-sm text-slate-400">Software • Web • IT Solutions</p>
          <p className="mt-4 text-sm text-slate-500">© {new Date().getFullYear()} R3 Tech. Todos los derechos reservados.</p>
        </div>
        <div className="flex items-center gap-3">
          {social.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-700 bg-white/[0.03] text-slate-300 transition hover:border-blue-300/50 hover:bg-blue-500/[0.12] hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

function FloatingActions({ open }: { open: boolean }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (open) {
    return null;
  }

  return (
    <>
      <motion.div className="fixed left-0 top-0 z-[60] h-1 origin-left bg-blue-400" style={{ scaleX }} />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-blue-500 text-white transition hover:-translate-y-1 hover:bg-blue-400"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      {visible && (
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          aria-label="Volver arriba"
          className="fixed bottom-24 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-slate-700 bg-slate-950/80 text-white transition hover:border-blue-300/50"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.a>
      )}
    </>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "R3 Tech",
      slogan: "Software • Web • IT Solutions",
      description:
        "Desarrollo de páginas web, aplicaciones, tiendas online y soporte técnico profesional para empresas y particulares.",
      url: "https://r3Tech.com",
      areaServed: "Argentina",
      sameAs: ["https://instagram.com/", "https://github.com/", "https://linkedin.com/"],
      serviceType: solutionGroups.flatMap((group) => group.items.map((service) => service.title)),
    }),
    [],
  );

  return (
    <main className="relative bg-ink overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar open={menuOpen} onToggle={() => setMenuOpen((value) => !value)} buttonRef={menuButtonRef} />
      <MobileMenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} buttonRef={menuButtonRef} />
      <Hero />
      <Services />
      <section id="productos" className="relative overflow-hidden py-24">
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Productos"
            title="Productos propios en desarrollo"
            text="Soluciones pensadas para resolver necesidades concretas con tecnología aplicada, escalable y simple de usar."
          />
          <FadeIn>
            <div className="grid gap-6 lg:grid-cols-3">
              <MagneticCard className="h-full flex flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/[0.14] text-blue-200 ring-1 ring-blue-300/20">
                    <Server className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="brand-type rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                    Próximamente
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/75">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/courtos-placeholder.svg"
                      alt="Mockup CourtOS"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="brand-type mt-6 text-2xl font-bold tracking-[0.03em] text-white">CourtOS</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-blue-200">Plataforma inteligente</p>

                  <p className="mt-4 leading-7 text-slate-400 line-clamp-3">Plataforma para la gestión de clubes de pádel con reservas online, administración de socios, ranking y estadísticas en tiempo real.</p>

                  <ul className="mt-4 grid gap-3">
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Reservas Online</li>
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Gestión de Canchas</li>
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Ranking de Jugadores</li>
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Estadísticas</li>
                  </ul>

                  <p className="mt-4 text-sm uppercase tracking-[0.12em] text-slate-400">Next.js · React · TypeScript · Supabase</p>
                </div>

                <div className="mt-6 border-t border-white/5 pt-6">
                  <a
                    href="#"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-blue-300/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-blue-300 transition hover:text-white"
                  >
                    Próximamente
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </MagneticCard>

              <MagneticCard className="h-full flex flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/[0.14] text-blue-200 ring-1 ring-blue-300/20">
                    <MonitorCog className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="brand-type rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                    Publicado
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/75">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://s.wordpress.com/mshots/v1/https://lsnegociosinmobiliarios.netlify.app/?w=1200"
                      alt="Preview LS Negocios Inmobiliarios"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="brand-type mt-6 text-2xl font-bold uppercase tracking-[0.03em] text-white">LS Negocios Inmobiliarios</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.12em] text-blue-200">Desarrollo Web</p>

                  <p className="mt-4 leading-7 text-slate-400 line-clamp-3">Sitio con catálogo de propiedades, buscador inteligente y experiencia moderna enfocada en convertir visitas en consultas.</p>

                  <ul className="mt-4 grid gap-3">
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Catálogo de Propiedades</li>
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Buscador Inteligente</li>
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Diseño Responsive</li>
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>WhatsApp Integrado</li>
                  </ul>

                  <p className="mt-4 text-sm uppercase tracking-[0.12em] text-slate-400">Next.js · React · TypeScript · Tailwind CSS</p>
                </div>

                <div className="mt-6 border-t border-white/5 pt-6">
                  <a
                    href="https://lsnegociosinmobiliarios.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-blue-300/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-blue-300 transition hover:text-white"
                  >
                    Ver Proyecto
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </MagneticCard>

              <MagneticCard className="h-full flex flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/[0.14] text-blue-200 ring-1 ring-blue-300/20">
                    <Rocket className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="brand-type rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                    Publicado
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/75">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://s.wordpress.com/mshots/v1/https://lavallepadelclub.netlify.app/?w=1200"
                      alt="Preview Lavalle Padel Club"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="brand-type mt-6 text-2xl font-bold uppercase tracking-[0.03em] text-white">Lavalle Padel Club</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.12em] text-blue-200">Sistema de Gestión</p>

                  <p className="mt-4 leading-7 text-slate-400 line-clamp-3">Gestión de club de pádel con reservas online, administración de sedes y control de disponibilidad.</p>

                  <ul className="mt-4 grid gap-3">
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Reservas Online</li>
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Gestión de Canchas</li>
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Ranking de Jugadores</li>
                    <li className="flex items-start gap-3 text-sm text-slate-200"><span className="grid h-6 w-6 place-items-center rounded-full ring-1 ring-blue-300 text-blue-300"><CheckCircle2 className="h-4 w-4" /></span>Panel Administrativo</li>
                  </ul>

                  <p className="mt-4 text-sm uppercase tracking-[0.12em] text-slate-400">Next.js · React · TypeScript · Tailwind CSS</p>
                </div>

                <div className="mt-6 border-t border-white/5 pt-6">
                  <a
                    href="https://lavallepadelclub.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-blue-300/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-blue-300 transition hover:text-white"
                  >
                    Ver Proyecto
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </MagneticCard>
            </div>
          </FadeIn>
        </div>
      </section>
      <Benefits />
      <Process />
      <CTA />
      <Footer />
      <FloatingActions open={menuOpen} />
    </main>
  );
}
