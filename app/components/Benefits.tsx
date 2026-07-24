import { CheckCircle2 } from "lucide-react";
import { benefits } from "../lib/site-data";

export function Benefits() {
  return (
    <section id="ventajas" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="brand-type text-base font-bold uppercase tracking-[0.22em] text-blue-400">
              Por qué elegirme
            </p>
            <h2 className="brand-type mt-4 text-4xl font-bold uppercase leading-[0.98] tracking-[0.02em] text-white sm:text-6xl">
              Un partner tecnológico cercano, preciso y resolutivo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              La diferencia está en entender el problema antes de escribir código o cambiar hardware. R3 Tech trabaja con
              foco en resultados, comunicación clara y soporte después de la entrega.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="glass flex min-h-24 items-center gap-4 rounded-2xl p-5 transition hover:border-blue-300/35">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-300" aria-hidden="true" />
                <span className="brand-type text-xl font-bold uppercase tracking-[0.03em] text-slate-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
