"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

/**
 * HeroSection — Seção Principal da Landing Page
 *
 * 100vh de impacto visual escuro (#050505).
 * Tipografia dramática com Outfit (Display) e Inter (Body).
 *
 * Hierarquia:
 * 1. Linha decorativa dourada
 * 2. Headline com word-stagger GSAP
 * 3. Subheadline descritiva
 * 4. CTA magnético
 * 5. Scroll indicator com float animation
 *
 * Arquitetura data-attributes:
 * - data-animate="decor-line"
 * - data-animate="headline-word"
 * - data-animate="subheadline"
 * - data-animate="cta"
 */

const HEADLINE_TEXT = "A Spazio não é barata. E não vamos mudar isso.";

export function HeroSection() {
  const { containerRef } = useHeroAnimation();

  const renderHeadline = () => {
    const words = HEADLINE_TEXT.split(" ");

    return words.map((word, index) => (
      <span
        key={index}
        data-animate="headline-word"
        className="inline-block will-change-[clip-path,opacity]"
        style={{ marginRight: "0.3em" }}
      >
        {word}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
      aria-label="Hero — Spazio Consultoria de Imagem"
    >
      {/* ─── Background Layers ─── */}
      {/* Radial glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(241,201,125,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,201,125,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(241,201,125,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(5,5,5,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative gold line */}
        <div
          data-animate="decor-line"
          className="mx-auto mb-10"
          style={{
            width: "64px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, #f1c97d 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Headline */}
        <h1
          className="font-display font-bold leading-[1.08] tracking-tight mb-8"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            color: "#fafafa",
          }}
        >
          {renderHeadline()}
        </h1>

        {/* Subheadline */}
        <p
          data-animate="subheadline"
          className="font-body leading-relaxed max-w-2xl mx-auto mb-12"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#888888",
          }}
        >
          Visagismo avançado e reposicionamento de imagem na Pedra Branca.
          <br className="hidden sm:block" />
          Para homens que exigem o seu melhor estilo.
        </p>

        {/* CTA */}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity: 0.4 }}
        aria-hidden="true"
      >
        <span
          className="font-body uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "#888888",
          }}
        >
          Scroll
        </span>
        <div
          className="animate-[float_3s_ease-in-out_infinite]"
          style={{
            width: "1px",
            height: "32px",
            background:
              "linear-gradient(to bottom, rgba(241,201,125,0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
}
