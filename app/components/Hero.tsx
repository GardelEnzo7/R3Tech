import { ChevronRight, Zap } from "lucide-react";
import { brand, stats, whatsappUrl } from "../lib/site-data";
import TechIllustrationClient from "./TechIllustrationClient";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-ink" />
      <div className="absolute inset-0 -z-10 bg-tech-grid bg-[length:42px_42px] opacity-45" />
      <div className="noise absolute inset-0 -z-10 opacity-20" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/[0.18] blur-[120px]" />
      <div className="absolute right-0 top-32 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="mx-auto flex max-w-7xl flex-col px-5 pb-20 pt-10 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-28">
        <div className="hero-copy">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100">
            <Zap className="h-4 w-4 text-blue-300" aria-hidden="true" />
            {brand.name} · {brand.tagline}
          </span>
          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Desarrollamos el software que hace crecer tu empresa.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Automatizamos procesos, desarrollamos plataformas web y creamos software a medida para que tu empresa ahorre
            tiempo, venda más y escale sin límites.
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
          <div className="mt-10 hidden max-w-2xl gap-3 lg:grid lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
                <p className="brand-type text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="hero-visual-wrap mt-10 flex justify-center lg:mt-0">
          <TechIllustrationClient />
        </div>
      </div>
    </section>
  );
}
