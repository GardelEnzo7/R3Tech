import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { brand, socialLinks } from "../lib/site-data";
import { LogoImage } from "./LogoImage";
import { WhatsAppIcon } from "./WhatsAppIcon";

const icons = {
  Github,
  Instagram,
  Linkedin,
  Mail,
  WhatsApp: WhatsAppIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <LogoImage size="md" className="mb-4" />
          <p className="brand-type text-3xl font-bold uppercase tracking-[0.08em] text-white">{brand.name}</p>
          <p className="mt-1 text-sm text-slate-400">{brand.tagline}</p>
          <p className="mt-4 text-sm text-slate-500">© 2026 {brand.name}. Todos los derechos reservados.</p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = icons[item.icon];
            const isExternal = item.href.startsWith("http");

            return (
              <a
                key={item.label}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
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
