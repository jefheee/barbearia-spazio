"use client";

import Image from "next/image";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

/**
 * HeroSection — Primeira Impressão da Spazio
 *
 * Background: Foto real do interior (/hero-bg.jpg) + overlay escuro.
 * Layout: Totalmente centralizado, max-w-5xl para respiro generoso.
 * Typography: Outfit extrabold leading-snug (sem corte de descendentes).
 * Logo "SPAZIO" em Playfair Display (serifada, luxo).
 *
 * FIX: `pb-2` nos word-wrappers para evitar clip-path cortar descendentes
 * como "g", "p", "q". `leading-snug` na h1 para inter-linha confortável.
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
        className="inline-block will-change-[clip-path,opacity] pb-2"
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
      {/* Background Image */}
      <Image
        src="/homesrc.jpeg"
        alt="Interior da Barbearia Spazio — cadeiras premium e ambiente climatizado"
        fill
        className="object-cover"
        priority={true}
        quality={100}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1] bg-black/70"
        aria-hidden="true"
      />

      {/* Content — centralizado com max-w-5xl e respiro generoso */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto px-6 lg:px-12 mt-20">
        
        {/* Header Topo Absoluto */}
        <header className="absolute top-8 left-1/2 -translate-x-1/2 text-center w-full z-20">
          <div data-animate="decor-line" className="mb-2">
            <span
              className="tracking-[0.35em] uppercase"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                fontWeight: 500,
                color: "#f1c97d",
              }}
            >
              SPAZIO
            </span>
          </div>
          <span
            className="inline-block font-display font-bold uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "rgba(250,250,250,0.4)",
            }}
          >
            The Architectural Groomer
          </span>
        </header>

        {/* Headline — leading-none para respiro e tracking-tight */}
        <h1
          className="font-display font-extrabold tracking-tight leading-none mb-0"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            color: "#fafafa",
          }}
        >
          {renderHeadline()}
        </h1>

        {/* Subheadline — max-w-2xl para conforto de leitura, mt-6 e leading-relaxed */}
        <p
          data-animate="subheadline"
          className="font-body leading-relaxed max-w-2xl mx-auto mt-6"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            color: "rgba(250,250,250,0.55)",
          }}
        >
          Uma consultoria técnica baseada em visagismo para homens que buscam
          autoridade através da estética.
        </p>

        {/* CTA — mt-16 para descer */}
        <div data-animate="cta" className="flex flex-col items-center gap-6 mt-16">
          <a
            href="https://wa.me/5548999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold text-lg rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#f1c97d",
              color: "#0a0a0a",
              padding: "20px 52px",
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
