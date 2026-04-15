"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

/**
 * HeroSection — Seção Principal da Landing Page
 *
 * Componente de 100vh que serve como a primeira impressão da Spazio.
 * A hierarquia visual é:
 *
 * 1. Linha decorativa dourada (marca de luxo)
 * 2. Headline principal com tipografia dramática (Playfair Display)
 * 3. Subheadline descritiva (Plus Jakarta Sans)
 * 4. CTA magnético com glassmorphism
 *
 * Todas as animações são orquestradas pelo hook useHeroAnimation
 * que utiliza uma timeline GSAP coordenada.
 *
 * Arquitetura de data-attributes:
 * - data-animate="decor-line" → Linha decorativa
 * - data-animate="headline-word" → Cada palavra da headline (para stagger)
 * - data-animate="subheadline" → Texto de suporte
 * - data-animate="cta" → Botão de ação
 */

/** Texto da headline dividido por palavras para animação staggered */
const HEADLINE_TEXT = "A Spazio não é barata. E não vamos mudar isso.";

export function HeroSection() {
  const { containerRef } = useHeroAnimation();

  /**
   * Divide a headline em palavras individuais, cada uma envolvida
   * em um span com data-animate para controlo granular do GSAP.
   */
  const renderHeadline = () => {
    const words = HEADLINE_TEXT.split(" ");

    return words.map((word, index) => (
      <span
        key={index}
        data-animate="headline-word"
        className="inline-block mr-[0.3em] will-change-[clip-path,opacity]"
      >
        {word}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-background"
      aria-label="Hero — Barbearia Spazio"
    >
      {/* ─── Background Accents ─── */}
      {/* Glow radial subtil para profundidade */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(241,201,125,0.03)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid decorativo subtil */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(241,201,125,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(241,201,125,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Linha decorativa dourada */}
        <div
          data-animate="decor-line"
          className="w-16 h-[2px] mx-auto mb-10 bg-gradient-to-r from-primary-gold/0 via-primary-gold to-primary-gold/0"
          aria-hidden="true"
        />

        {/* Headline — Playfair Display, tipografia dramática */}
        <h1 className="font-display text-[var(--text-hero)] font-bold leading-[1.1] tracking-tight text-[#fafafa] mb-8">
          {renderHeadline()}
        </h1>

        {/* Subheadline */}
        <p
          data-animate="subheadline"
          className="font-body text-[var(--text-subhero)] leading-relaxed text-[#888888] max-w-2xl mx-auto mb-12"
        >
          Visagismo avançado e reposicionamento de imagem na Pedra Branca.
          <br className="hidden sm:block" />
          Para homens que exigem o seu melhor estilo.
        </p>

        {/* CTA — Botão magnético com glassmorphism */}
        <div data-animate="cta">
          <MagneticButton
            href="https://wa.me/5548999999999"
            strength={0.35}
          >
            Iniciar Consultoria de Imagem
          </MagneticButton>
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        aria-hidden="true"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#888888]">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary-gold/40 to-transparent" />
      </div>
    </section>
  );
}
