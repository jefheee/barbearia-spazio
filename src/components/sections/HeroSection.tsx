"use client";

import { useHeroAnimation } from "@/hooks/useHeroAnimation";

/**
 * HeroSection — "The Architectural Groomer"
 *
 * 100vh hero with clean obsidian background (#050505).
 * NO radial-glows, NO decorative grids, NO vignettes.
 * Background is intentionally clean, awaiting future video loop.
 *
 * Typography: Outfit (Display) tight tracking + Inter (Body).
 * Layout follows DESIGN.md: asymmetric CTA with side description.
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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#050505" }}
      aria-label="Hero — Spazio Consultoria de Imagem"
    >
      {/* Architectural shape — subtle bg slab (from prototype) */}
      <div
        className="absolute bottom-0 right-0 -z-0 opacity-40"
        style={{
          width: "50%",
          height: "50%",
          backgroundColor: "#1c1b1b",
          borderTopLeftRadius: "10rem",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <div className="max-w-4xl mx-auto">
          {/* Kicker badge */}
          <span
            data-animate="decor-line"
            className="inline-block font-display font-bold uppercase mb-8"
            style={{
              fontSize: "12px",
              letterSpacing: "0.3em",
              color: "#f1c97d",
            }}
          >
            The Architectural Groomer
          </span>

          {/* Headline */}
          <h1
            className="font-display font-extrabold tracking-tighter mb-12"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              color: "#fafafa",
              lineHeight: 0.95,
            }}
          >
            {renderHeadline()}
          </h1>

          {/* CTA + Side description (asymmetric, per prototype) */}
          <div
            data-animate="cta"
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold text-lg rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#f1c97d",
                color: "#0a0a0a",
                padding: "20px 40px",
              }}
            >
              Iniciar Transformação
            </a>
            <p
              data-animate="subheadline"
              className="font-body text-sm leading-relaxed text-left max-w-[280px]"
              style={{
                color: "rgb(161,161,170)",
                borderLeft: "1px solid rgb(39,39,42)",
                paddingLeft: "1.5rem",
              }}
            >
              Uma consultoria técnica baseada em visagismo para homens que
              buscam autoridade através da estética.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
