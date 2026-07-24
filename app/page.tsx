import { Benefits } from "./components/Benefits";
import { CTA } from "./components/CTA";
import { FloatingActionsClient } from "./components/FloatingActionsClient";
import { Footer } from "./components/Footer";
import { HeaderClient } from "./components/HeaderClient";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Products } from "./components/Products";
import { Solutions } from "./components/Solutions";
import { professionalServiceSchema } from "./lib/site-data";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <HeaderClient />
      <Hero />
      <Solutions />
      <Products />
      <Benefits />
      <Process />
      <CTA />
      <Footer />
      <FloatingActionsClient />
    </main>
  );
}
