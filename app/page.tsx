"use client";

import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  ArrowUp,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MonitorCog,
  MousePointer2,
  PanelsTopLeft,
  Rocket,
  Server,
  ShoppingCart,
  Smartphone,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const whatsappUrl = "https://wa.me/5493412513986?text=Hola%20R3%20Tech%2C%20quiero%20solicitar%20un%20presupuesto.";

const navItems = [
  { label: "Soluciones", href: "#servicios" },
  { label: "Ventajas", href: "#ventajas" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const mobileMenuItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#servicios' },
  { label: 'Ventajas', href: '#ventajas' },
  { label: 'Cómo Trabajamos', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

const solutionGroups = [
  {
    title: "Software",
    items: [
      {
        icon: Cpu,
        title: "Software a medida",
        text: "Software a medida para automatizar procesos.",
      },
      {
        icon: PanelsTopLeft,
        title: "Desarrollo Web",
        text: "Sitios web que convierten visitantes en clientes.",
      },
      {
        icon: ShoppingCart,
        title: "Ecommerce",
        text: "Ecommerce listo para vender desde el primer día.",
      },
      {
        icon: MonitorCog,
        title: "Automatización",
        text: "Integración con WhatsApp, Mercado Pago, APIs e IA.",
      },
      {
        icon: Server,
        title: "SaaS",
        text: "Plataformas web preparadas para crecer con tus usuarios.",
      },
    ],
  },
  {
    title: "IT Solutions",
    items: [
      {
        icon: MousePointer2,
        title: "Soporte Remoto",
        text: "Resolución rápida de problemas sin moverte de tu casa.",
      },
      {
        icon: MonitorCog,
        title: "Optimización",
        text: "Limpieza, mejoras de rendimiento y actualización de hardware.",
      },
      {
        icon: Wrench,
        title: "Reparación",
        text: "Diagnóstico, reparación y mantenimiento de PC y notebooks.",
      },
      {
        icon: Server,
        title: "Redes",
        text: "Configuración y soporte para conexiones estables y seguras.",
      },
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

function TechIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-blue-300/15"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 rounded-full border border-cyan-200/10"
      />
      <div className="absolute inset-10 rounded-[2rem] bg-blue-500/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute left-6 top-20 w-52 rounded-2xl p-4"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
        </div>
        <div className="space-y-2">
          <span className="block h-2 rounded-full bg-blue-300/80" />
          <span className="block h-2 w-4/5 rounded-full bg-slate-500/50" />
          <span className="block h-2 w-2/3 rounded-full bg-slate-500/45" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute right-5 top-10 w-44 rounded-2xl p-4"
      >
        <div className="mb-5 flex items-center justify-between">
          <Server className="h-6 w-6 text-blue-300" aria-hidden="true" />
          <span className="brand-type rounded-full bg-emerald-400/[0.14] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.1em] text-emerald-200">
            Online
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className="h-7 rounded-md bg-white/[0.06]" />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute bottom-20 right-8 w-56 rounded-2xl p-5"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/[0.18]">
            <Cpu className="h-5 w-5 text-blue-200" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">IT Performance</p>
            <p className="text-xs text-slate-400">Optimization</p>
          </div>
        </div>
        <div className="h-2 rounded-full bg-slate-700">
          <motion.div
            initial={{ width: "20%" }}
            animate={{ width: ["35%", "82%", "64%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-full rounded-full bg-blue-400"
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 grid h-24 w-24 place-items-center rounded-3xl border border-blue-300/20 bg-blue-500/[0.12] shadow-glow backdrop-blur-xl"
      >
        <Code2 className="h-10 w-10 text-blue-200" aria-hidden="true" />
      </motion.div>

      <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
        <div className="text-center">
          <div className="mb-3 flex justify-center">
            <LogoImage size="lg"/>
          </div>
          <p className="brand-type text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Tech</p>
        </div>
      </div>
    </div>
  );
}

function TechIllustrationMobile() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="h-[40vh] max-h-[420px] w-full rounded-2xl bg-gradient-to-b from-slate-900/0 to-slate-900/0 p-4">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <div className="absolute left-1/2 top-6 -translate-x-1/2">
            <LogoImage size="md" />
          </div>

          <div className="absolute left-4 top-28 w-[58%] rounded-xl bg-white/[0.03] p-3 shadow-glow">
                <div className="h-28 overflow-hidden rounded-md bg-slate-800 p-3">
              <div className="h-full w-full rounded bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                <pre className="text-xs leading-5 text-slate-300 line-clamp-6">{`const hello = 'R3 Tech';
// Code preview
function run(){
  return 'performance';
}`}</pre>
              </div>
            </div>
          </div>

          <div className="absolute right-4 bottom-16 w-36 rounded-xl bg-blue-500/[0.12] p-3">
            <p className="text-sm font-semibold text-white">IT Performance</p>
            <p className="text-xs text-slate-300">Optimization</p>
            <div className="mt-2 h-2 rounded-full bg-slate-700">
              <div className="h-full w-3/5 rounded-full bg-blue-400" />
            </div>
          </div>

          <div className="absolute left-4 bottom-16 w-28 rounded-xl bg-emerald-400/[0.08] p-2">
            <p className="text-sm font-semibold text-white">Calendar</p>
            <p className="text-xs text-slate-300">Events</p>
          </div>
        </div>
      </div>
    </div>
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

      {/* Mobile-specific hero */}
      <div className="lg:hidden mx-auto max-w-3xl px-5 pb-12 pt-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/16 bg-blue-500/8 px-4 py-2 text-sm font-medium text-blue-100">
            <Zap className="h-4 w-4 text-blue-300" aria-hidden="true" />
            R3 Tech · Software • Web • IT Solutions
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white">Desarrollamos el software que hace crecer tu empresa.</h1>

          <p className="mt-4 text-base leading-7 text-slate-300">Automatizamos procesos, desarrollamos plataformas web y creamos software a medida para que tu empresa ahorre tiempo, venda más y escale sin límites.</p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="brand-type w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-base font-bold uppercase tracking-[0.06em] text-white shadow-glow"
            >
              Solicitar Presupuesto
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="brand-type w-full inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/20 bg-white/[0.02] px-6 py-3 text-base font-bold uppercase tracking-[0.06em] text-white"
            >
              Ver soluciones
+            </a>
          </div>

          <div className="mt-6">
            <TechIllustrationMobile />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <p className="brand-type text-xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Desktop hero (unchanged, visible on lg+) */}
      <div className="hidden lg:grid mx-auto max-w-7xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
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
        >
          <div className="transform sm:scale-100 scale-100">
            <TechIllustration />
          </div>
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
        <div className="space-y-12">
            {solutionGroups.map((group, groupIndex) => (
              <div key={group.title}>
                <FadeIn delay={groupIndex * 0.04}>
                  <h3 className="brand-type mb-5 text-2xl font-bold uppercase tracking-[0.16em] text-blue-300">
                    {group.title}
                  </h3>
                </FadeIn>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <FadeIn key={service.title} delay={index * 0.04}>
                        <MagneticCard className="h-full">
                          <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/[0.14] text-blue-200 ring-1 ring-blue-300/20">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <h3 className="brand-type text-2xl font-bold uppercase tracking-[0.03em] text-white">{service.title}</h3>
                          <p className="mt-3 leading-7 text-slate-400">{service.text}</p>
                        </MagneticCard>
                      </FadeIn>
                    );
                  })}
                </div>
              </div>
            ))}
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
    { label: "Instagram", icon: Instagram, href: "https://instagram.com/" },
    { label: "Email", icon: Mail, href: "mailto:hola@r3Tech.com" },
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
