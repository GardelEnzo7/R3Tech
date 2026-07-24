import { Code2, Cpu, Headphones, MonitorCog, Network, Server, ShoppingCart, Wrench, Zap } from "lucide-react";
import { solutionGroups } from "../lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { TechnicalPanel } from "./TechnicalPanel";

const icons = {
  Code2,
  Cpu,
  Headphones,
  MonitorCog,
  Network,
  Server,
  ShoppingCart,
  Wrench,
  Zap,
};

export function Solutions() {
  return (
    <section id="servicios" className="relative overflow-hidden py-24">
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Soluciones"
          title="Soluciones digitales con criterio técnico"
          text="R3 Tech combina diseño, desarrollo y soporte IT para resolver necesidades reales con una experiencia clara, moderna y confiable."
        />

        <div className="space-y-10">
          {solutionGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-blue-300/40 to-transparent" />
                <h3 className="brand-type text-sm font-bold uppercase tracking-[0.22em] text-blue-200">{group.title}</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-blue-300/40 to-transparent" />
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((service) => {
                  const Icon = icons[service.icon];

                  return (
                    <TechnicalPanel key={service.title} className="h-full">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/[0.14] text-blue-200 ring-1 ring-blue-300/20">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <span className="brand-type rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                          {group.title}
                        </span>
                      </div>

                      <h4 className="brand-type text-2xl font-bold uppercase tracking-[0.03em] text-white">
                        {service.title}
                      </h4>
                      <p className="mt-3 leading-7 text-slate-400">{service.text}</p>
                    </TechnicalPanel>
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
