"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesGrid — Bento Grid de Consultoria High-Ticket
 *
 * Grid assimétrico focado na autoridade e conversão.
 * Transiciona do fundo escuro do Hero para o fundo Gelo (#fafafa).
 *
 * Layout do grid (desktop):
 * ┌──────────────────────┬────────────────┐
 * │  Card 01 (Destaque)  │  Card 02       │
 * │  Consultoria Visag.  │  Social Proof  │
 * │  2 colunas           │  1 coluna      │
 * ├──────────────────────┴────────────────┤
 * │  Card 03 — Visagismo Óptico           │
 * │  Full width                            │
 * └────────────────────────────────────────┘
 *
 * Animação: Cards entram com stagger scroll-triggered.
 */

/** Dados dos cards de serviço */
const SERVICES = [
  {
    id: "consultoria-visagismo",
    tag: "Serviço Principal",
    title: "Consultoria de Visagismo Arquitetônico",
    professional: "Com Jonathan",
    description:
      "Análise profunda de perfil e arquitetura facial para reposicionar sua imagem.",
    price: "R$ 800,00",
    highlight: true,
  },
  {
    id: "social-proof",
    rating: "4.9",
    reviews: "258",
    tagline: "A autoridade máxima em visagismo na Pedra Branca",
    source: "avaliações verificadas no Google Maps",
  },
  {
    id: "visagismo-optico",
    tag: "Especialidade",
    title: "Visagismo Óptico e Estética Masculina",
    description:
      "Harmonização visual entre corte, barba e traços faciais. Cada detalhe calculado para projetar a melhor versão da sua imagem.",
  },
] as const;

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const cards = section.querySelectorAll("[data-animate='service-card']");

      gsap.set(cards, { opacity: 0, y: 60 });

      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          });
        },
        start: "top 85%",
        once: true,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-ice py-[var(--space-section)] px-6"
      aria-label="A Arquitetura do Seu Estilo"
    >
      {/* ─── Transition Gradient: Dark → Ice ─── */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-ice pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Section Header ─── */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-[11px] tracking-[0.3em] uppercase text-ink-muted mb-4">
            Consultoria de Imagem
          </span>
          <h2 className="font-display text-[var(--text-section-title)] font-bold leading-[1.1] tracking-tight text-ink">
            A Arquitetura do{" "}
            <span className="font-light">Seu Estilo</span>
          </h2>
        </div>

        {/* ─── Bento Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Card 01 — Consultoria de Visagismo (Destaque, 2 colunas) */}
          <div
            data-animate="service-card"
            className="lg:col-span-2 relative overflow-hidden rounded-[var(--radius-card)] bg-ink p-10 md:p-14 flex flex-col justify-between min-h-[380px] group cursor-default"
          >
            {/* Background glow subtil */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(241,201,125,0.06)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <span className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-primary-gold mb-6 border border-primary-gold/20 rounded-full px-4 py-1.5">
                {SERVICES[0].tag}
              </span>
              <h3 className="font-display text-[var(--text-card-title)] font-bold text-white leading-[1.2] mb-3">
                {SERVICES[0].title}
              </h3>
              <p className="font-body text-[15px] leading-relaxed text-white/60 max-w-lg mb-2">
                {SERVICES[0].description}
              </p>
              <span className="inline-block font-body text-[13px] text-primary-gold/80 mt-1">
                {SERVICES[0].professional}
              </span>
            </div>

            <div className="relative z-10 mt-8 flex items-end justify-between">
              <span className="font-display text-3xl md:text-4xl font-bold text-white">
                {SERVICES[0].price}
              </span>
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-white/30">
                por sessão
              </span>
            </div>
          </div>

          {/* Card 02 — Social Proof */}
          <div
            data-animate="service-card"
            className="relative overflow-hidden rounded-[var(--radius-card)] bg-white border border-[#e8e8e8] p-10 flex flex-col justify-center items-center text-center min-h-[380px]"
          >
            {/* Star rating visual */}
            <div className="flex items-center gap-1 mb-4" aria-label={`Avaliação ${SERVICES[1].rating} de 5 estrelas`}>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-primary-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <span className="font-display text-5xl md:text-6xl font-bold text-ink mb-1">
              {SERVICES[1].rating}
            </span>
            <span className="font-body text-[13px] text-ink-muted mb-6">
              {SERVICES[1].reviews} {SERVICES[1].source}
            </span>

            <div className="w-12 h-[1px] bg-primary-gold/30 mx-auto mb-6" aria-hidden="true" />

            <p className="font-body text-[15px] leading-relaxed text-ink-muted max-w-[240px]">
              {SERVICES[1].tagline}
            </p>
          </div>

          {/* Card 03 — Visagismo Óptico (Full width) */}
          <div
            data-animate="service-card"
            className="lg:col-span-3 relative overflow-hidden rounded-[var(--radius-card)] bg-white border border-[#e8e8e8] p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 group cursor-default"
          >
            <div className="flex-1">
              <span className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-primary-gold-dark mb-4 border border-primary-gold-dark/20 rounded-full px-4 py-1.5">
                {SERVICES[2].tag}
              </span>
              <h3 className="font-display text-[var(--text-card-title)] font-bold text-ink leading-[1.2] mb-3">
                {SERVICES[2].title}
              </h3>
              <p className="font-body text-[15px] leading-relaxed text-ink-muted max-w-xl">
                {SERVICES[2].description}
              </p>
            </div>

            {/* Decorative element */}
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary-gold/10 to-primary-gold-dark/5 flex items-center justify-center" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-primary-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
