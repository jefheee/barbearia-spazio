import { HeroSection } from "@/components/sections/HeroSection";
import { VisagismScience } from "@/components/sections/VisagismScience";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TransformationShowcase } from "@/components/sections/TransformationShowcase";
import { ConciergeTrigger } from "@/components/ui/ConciergeTrigger";

/**
 * Home Page — Barbearia Spazio
 *
 * Ponto de entrada da Landing Page. Compõe as seções
 * da página de forma declarativa.
 *
 * Fluxo visual (High-Ticket 2026):
 * 1. Hero (fundo escuro #050505) — Impacto inicial
 * 2. VisagismScience (fundo escuro #050505) — Autoridade do método
 * 3. ServicesGrid (transição para #fafafa) — Bento Grid de consultoria
 * 4. TransformationShowcase (fundo claro #fafafa) — Vídeo de cases reais
 * 5. ConciergeTrigger (flutuante) — Pílula IA agêntica
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
      <VisagismScience />
      <ServicesGrid />
      <TransformationShowcase />
      <ConciergeTrigger />
    </>
  );
}
