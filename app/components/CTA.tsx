import { Rocket } from "lucide-react";
import { whatsappUrl } from "../lib/site-data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CTA() {
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-300/25 bg-blue-500/10 p-8 shadow-glow backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-[90px]" />
          <div className="relative z-10 max-w-3xl">
            <Rocket className="mb-6 h-10 w-10 text-blue-200" aria-hidden="true" />
            <h2 className="brand-type text-4xl font-bold uppercase leading-[0.98] tracking-[0.02em] text-white sm:text-6xl">
              ¿Tenés una idea o un problema tecnológico?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">Escribime y encontremos la mejor solución.</p>
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
      </div>
    </section>
  );
}
