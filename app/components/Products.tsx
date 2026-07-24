import Image from "next/image";
import { CheckCircle2, ChevronRight, MonitorCog, Rocket, Server } from "lucide-react";
import { projects } from "../lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { TechnicalPanel } from "./TechnicalPanel";

const projectIcons = [Server, MonitorCog, Rocket];

export function Products() {
  return (
    <section id="productos" className="relative overflow-hidden py-24">
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Productos"
          title="Productos propios en desarrollo"
          text="Soluciones pensadas para resolver necesidades concretas con tecnología aplicada, escalable y simple de usar."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = projectIcons[index] ?? Server;
            const isExternal = project.href.startsWith("http");

            return (
              <TechnicalPanel key={project.title} className="flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/[0.14] text-blue-200 ring-1 ring-blue-300/20">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="brand-type rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                    {project.badge}
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/75">
                  <div className="relative aspect-[4/3]">
                    <Image src={project.image} alt={project.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="brand-type mt-6 text-2xl font-bold uppercase tracking-[0.03em] text-white">{project.title}</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.12em] text-blue-200">{project.category}</p>
                  <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

                  <ul className="mt-4 grid gap-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-200">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-blue-300 ring-1 ring-blue-300">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm uppercase tracking-[0.12em] text-slate-400">{project.stack}</p>
                </div>

                <div className="mt-6 border-t border-white/5 pt-6">
                  <a
                    href={project.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-blue-300/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-blue-300 transition hover:text-white"
                  >
                    {project.action}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </TechnicalPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
