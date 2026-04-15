import { HeroSection } from "@/components/sections/HeroSection";

/**
 * Home Page — Barbearia Spazio
 *
 * Ponto de entrada da Landing Page. Compõe as seções
 * da página de forma declarativa. Novas seções (Bento Grid,
 * Serviços, Testemunhos, etc.) serão adicionadas aqui.
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
      {/* Futuras seções serão compostas aqui:
        <BentoGridSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
        <FooterSection />
      */}
    </>
  );
}
