"use client";

import Image from "next/image";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

/**
 * HeroSection — Primeira Impressão da Spazio
 *
 * Background: Foto real do interior da barbearia (/hero-bg.jpg)
 * com overlay escuro para legibilidade.
 * Layout: Totalmente centralizado, max-w-4xl.
 * Typography: Outfit extrabold, Inter para corpo.
 * Logo "SPAZIO" em Playfair Display (serifada, luxo).
 */

const HEADLINE_TEXT = "Sua imagem está abrindo ou fechando portas?";

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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Hero — Spazio Consultoria de Imagem"
    >
      {/* Background Image — Foto real do interior */}
      <Image
        src="/hero-bg.jpg"
        alt="Interior da Barbearia Spazio — cadeiras premium e ambiente climatizado"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay para legibilidade do texto */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(10, 10, 10, 0.82)" }}
        aria-hidden="true"
      />

      {/* Content — centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-6">
        {/* Logo SPAZIO — fonte serifada de luxo */}
        <div
          data-animate="decor-line"
          className="mb-10"
        >
          <span
            className="tracking-[0.35em] uppercase"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              fontWeight: 500,
              color: "#f1c97d",
              letterSpacing: "0.35em",
            }}
          >
            SPAZIO
          </span>
        </div>

        {/* Kicker */}
        <span
          className="inline-block font-display font-bold uppercase mb-8"
          style={{
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "rgba(250,250,250,0.4)",
          }}
        >
          The Architectural Groomer
        </span>

        {/* Headline */}
        <h1
          className="font-display font-extrabold tracking-tighter mb-10"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            color: "#fafafa",
            lineHeight: 0.95,
          }}
        >
          {renderHeadline()}
        </h1>

        {/* Subheadline */}
        <p
          data-animate="subheadline"
          className="font-body leading-relaxed max-w-xl mx-auto mb-12"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            color: "rgba(250,250,250,0.55)",
          }}
        >
          Uma consultoria técnica baseada em visagismo para homens que buscam
          autoridade através da estética.
        </p>

        {/* CTA — centralizado */}
        <div data-animate="cta" className="flex flex-col items-center gap-4">
          <a
            href="https://wa.me/5548999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold text-lg rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#f1c97d",
              color: "#0a0a0a",
              padding: "18px 48px",
            }}
          >
            Iniciar Transformação
          </a>
          <span
            className="font-body uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "rgba(250,250,250,0.3)",
            }}
          >
            Av. Pedra Branca, 303 · Palhoça
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        style={{ opacity: 0.35 }}
        aria-hidden="true"
      >
        <span
          className="font-body uppercase"
          style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#fafafa" }}
        >
          Scroll
        </span>
        <div
          className="animate-[float_3s_ease-in-out_infinite]"
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, rgba(241,201,125,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}
