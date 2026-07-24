import { processSteps } from "../lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Process() {
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
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl border border-slate-700/60 bg-slate-950/45 p-6 backdrop-blur-xl">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-blue-500 text-lg font-black text-white shadow-glow">
                {index + 1}
              </div>
              <h3 className="brand-type text-2xl font-bold uppercase tracking-[0.03em] text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
