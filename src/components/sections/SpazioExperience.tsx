"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SpazioExperience — Seção Comparativa "Padrão vs Consultoria"
 *
 * Layout split 50/50 inspirado no code.html prototype.
 * Lado esquerdo: Ice (#fafafa) — "O Padrão" (genérico, baixa opacidade)
 * Lado direito:  Dark (#0a0a0a) — "A Consultoria Spazio" (elite, gold accents)
 *
 * Fundo global dark (#050505). Quebra objeção de preço.
 */

interface ComparisonItem {
  title: string;
  desc: string;
}

const STANDARD_ITEMS: ComparisonItem[] = [
  {
    title: "Repetição sem intenção",
    desc: "Cortes genéricos que não consideram sua estrutura óssea ou objetivos profissionais.",
  },
  {
    title: "Ambiente saturado",
    desc: "Barbearias tradicionais focadas em volume de atendimento, não em qualidade diagnóstica.",
  },
];

const SPAZIO_ITEMS: ComparisonItem[] = [
  {
    title: "Visagismo Arquitetônico",
    desc: "Mapeamento facial completo para projetar a mensagem que sua carreira exige.",
  },
  {
    title: "Curadoria de Imagem",
    desc: "Atendimento exclusivo, focado em homens de alto valor e decisões estratégicas.",
  },
];

export function SpazioExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const panels = section.querySelectorAll("[data-animate='exp-panel']");
      gsap.set(panels, { opacity: 0, y: 30 });

      ScrollTrigger.batch(panels, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
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
      className="flex flex-col md:flex-row"
      style={{ minHeight: "70vh" }}
      aria-label="Comparativo — O Padrão vs A Consultoria Spazio"
    >
      {/* Left Panel — "O Padrão" (Ice) */}
      <div
        data-animate="exp-panel"
        className="w-full md:w-1/2 flex flex-col justify-center"
        style={{
          backgroundColor: "#fafafa",
          padding: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <span
          className="font-display font-bold uppercase mb-4"
          style={{
            fontSize: "12px",
            letterSpacing: "0.2em",
            color: "rgb(161,161,170)",
          }}
        >
          Baseline
        </span>
        <h2
          className="font-display font-extrabold tracking-tighter mb-12"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "rgb(24,24,27)",
          }}
        >
          O Padrão
        </h2>
        <ul className="space-y-8">
          {STANDARD_ITEMS.map((item, i) => (
            <li key={i} className="flex flex-col">
              <span
                className="font-bold uppercase tracking-tight italic"
                style={{ fontSize: "1.1rem", color: "rgb(24,24,27)" }}
              >
                {item.title}
              </span>
              <p
                className="font-body text-sm max-w-xs"
                style={{ color: "rgb(82,82,91)" }}
              >
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel — "A Consultoria Spazio" (Dark) */}
      <div
        data-animate="exp-panel"
        className="w-full md:w-1/2 flex flex-col justify-center"
        style={{
          backgroundColor: "#0a0a0a",
          padding: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <span
          className="font-display font-bold uppercase mb-4"
          style={{
            fontSize: "12px",
            letterSpacing: "0.2em",
            color: "#f1c97d",
          }}
        >
          Elite Tier
        </span>
        <h2
          className="font-display font-extrabold tracking-tighter mb-12"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#fafafa",
          }}
        >
          A Consultoria Spazio
        </h2>
        <ul className="space-y-8">
          {SPAZIO_ITEMS.map((item, i) => (
            <li key={i} className="flex flex-col">
              <span
                className="font-bold uppercase tracking-tight"
                style={{ fontSize: "1.1rem", color: "#f1c97d" }}
              >
                {item.title}
              </span>
              <p
                className="font-body text-sm max-w-xs"
                style={{ color: "rgb(161,161,170)" }}
              >
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
