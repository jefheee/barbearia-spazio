"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesGrid — Bento Grid Assimétrico (md:grid-cols-12)
 *
 * Proper container alignment: max-w-7xl mx-auto px-4 md:px-8.
 * Main card updated with Jonathan's real authority text.
 * All cards with rounded-3xl.
 */

function StarIcon() {
  return (
    <svg
      className="w-4 h-4"
      style={{ color: "#f1c97d" }}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const elements = section.querySelectorAll("[data-animate='grid-el']");
      gsap.set(elements, { opacity: 0, y: 40 });

      ScrollTrigger.batch(elements, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
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
      id="servicos"
      className="w-full"
      style={{
        backgroundColor: "#fafafa",
        paddingTop: "clamp(4rem, 10vw, 12rem)",
        paddingBottom: "clamp(4rem, 10vw, 12rem)",
      }}
      aria-label="Engenharia Estética Aplicada — Serviços"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8"
          data-animate="grid-el"
        >
          <div className="max-w-2xl">
            <span
              className="font-display font-bold uppercase block mb-6"
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                color: "rgb(161,161,170)",
              }}
            >
              Curated Services
            </span>
            <h2
              className="font-display font-extrabold tracking-tighter leading-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "rgb(24,24,27)",
              }}
            >
              Engenharia Estética Aplicada.
            </h2>
          </div>
          <div
            className="font-body font-medium text-right uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "rgb(113,113,122)",
            }}
          >
            Price List / MMXXVI
          </div>
        </div>

        {/* Bento Grid — 12 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Feature Card — Consultoria Visagista com Jonathan */}
          <div
            data-animate="grid-el"
            className="md:col-span-7 relative overflow-hidden group flex flex-col justify-end"
            style={{
              backgroundColor: "#1c1b1b",
              borderRadius: "2rem",
              minHeight: "520px",
              padding: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            <div>
              <span
                className="inline-block font-body uppercase mb-6"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#f1c97d",
                }}
              >
                Serviço Principal
              </span>
              <h3
                className="font-display font-bold tracking-tighter mb-3"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fafafa" }}
              >
                Consultoria Visagista com Jonathan
              </h3>
              <p
                className="font-body text-sm leading-relaxed max-w-md mb-6"
                style={{ color: "rgb(161,161,170)" }}
              >
                Diagnóstico facial completo com foco em cabelo, barba e
                bem-estar. Cada sessão é desenhada para reposicionar a sua
                imagem e projetar autoridade no seu ambiente profissional.
              </p>
              <div className="flex items-end justify-between">
                <a
                  href="https://wa.me/5548999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-sm tracking-tighter rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: "#f1c97d",
                    color: "#0a0a0a",
                    padding: "12px 28px",
                  }}
                >
                  Agendar Sessão
                </a>
                <span
                  className="font-display font-black italic"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#f1c97d" }}
                >
                  R$ 800
                </span>
              </div>
            </div>
          </div>

          {/* Side Card — Visagismo Óptico */}
          <div
            data-animate="grid-el"
            className="md:col-span-5 flex flex-col justify-between"
            style={{
              backgroundColor: "#201f1f",
              borderRadius: "2rem",
              padding: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            <div>
              <div
                className="mb-12"
                style={{ width: "48px", height: "1px", backgroundColor: "#f1c97d" }}
                aria-hidden="true"
              />
              <h3
                className="font-display font-bold tracking-tighter mb-4"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "#fafafa" }}
              >
                Visagismo Óptico
              </h3>
              <p
                className="font-body text-sm leading-relaxed max-w-sm"
                style={{ color: "rgb(161,161,170)" }}
              >
                Consultoria para escolha de armações e acessórios que complementam
                seu formato de rosto e traços naturais.
              </p>
            </div>
            <div className="mt-auto pt-12">
              <div
                className="font-body uppercase mb-2"
                style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgb(113,113,122)" }}
              >
                Exclusive Add-on
              </div>
              <span
                className="font-bold tracking-tight"
                style={{ fontSize: "1.5rem", color: "#fafafa" }}
              >
                Sob Consulta
              </span>
            </div>
          </div>

          {/* Side Card — Ritual de Barba */}
          <div
            data-animate="grid-el"
            className="md:col-span-5 relative overflow-hidden flex flex-col justify-between"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgb(228,228,231)",
              borderRadius: "2rem",
              padding: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            <div className="relative z-10">
              <h3
                className="font-display font-bold tracking-tighter mb-4"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "rgb(24,24,27)" }}
              >
                Ritual Spazio de Barba
              </h3>
              <p
                className="font-body text-sm leading-relaxed max-w-sm"
                style={{ color: "rgb(82,82,91)" }}
              >
                Relaxamento e precisão. Toalhas quentes, óleos essenciais e o
                acabamento impecável da arquitetura facial.
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <span
                className="font-black italic"
                style={{ fontSize: "1.75rem", color: "rgb(24,24,27)" }}
              >
                R$ 180
              </span>
            </div>
            {/* Decorative circle */}
            <div
              className="absolute -right-8 -bottom-8"
              style={{
                width: "192px",
                height: "192px",
                borderRadius: "50%",
                border: "1px solid rgb(244,244,245)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Social Proof Card */}
          <div
            data-animate="grid-el"
            className="md:col-span-7 flex flex-col justify-center items-center text-center"
            style={{
              backgroundColor: "#201f1f",
              borderRadius: "2rem",
              padding: "clamp(2rem, 4vw, 3rem)",
              minHeight: "280px",
            }}
          >
            <div className="flex gap-1 mb-4" aria-label="4.9 de 5 estrelas">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span
              className="font-display font-black mb-1"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1c97d", lineHeight: 1 }}
            >
              4.9 / 5.0
            </span>
            <p
              className="font-body uppercase mt-3 max-w-sm"
              style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgb(113,113,122)" }}
            >
              Baseado em 258 avaliações reais de clientes exigentes no Google Maps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
