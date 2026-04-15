import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ConciergeTrigger } from "@/components/ui/ConciergeTrigger";

/**
 * Home Page — Barbearia Spazio
 *
 * Ponto de entrada da Landing Page. Compõe as seções
 * da página de forma declarativa.
 *
 * Fluxo visual (High-Ticket 2026):
 * 1. Hero (fundo escuro #050505) — Impacto inicial
 * 2. ServicesGrid (transição para #fafafa) — Bento Grid de consultoria
 * 3. ConciergeTrigger (flutuante) — Pílula IA agêntica
 *
 * Arquitetura:
 * - Cada seção é um componente isolado em /components/sections/
 * - A lógica de animação vive em hooks dedicados em /hooks/
 * - Esta page.tsx permanece limpa e focada na composição
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ConciergeTrigger />
      {/* Futuras seções:
        <TestimonialsSection />
        <FooterSection />
      */}
    </>
  );
}
