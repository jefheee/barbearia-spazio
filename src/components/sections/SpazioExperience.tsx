"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SpazioExperience — Comparativo "O Padrão vs A Consultoria Spazio"
 *
 * Split 50/50: Ice left / Dark right.
 * Inner content: max-w-lg with px-6 lg:px-12 on each panel.
 * Real address injected as local trust anchor.
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
  {
    title: "Experiência Imersiva",
    desc: "Ambiente climatizado com cerveja premium e videogame. Sessões de 1h a 2h.",
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
        className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 lg:px-12"
        style={{
          backgroundColor: "#fafafa",
          paddingTop: "clamp(3rem, 6vw, 6rem)",
          paddingBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <span
            className="font-display font-bold uppercase mb-4 block text-center"
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "rgb(161,161,170)",
            }}
          >
            Baseline
          </span>
          <h2
            className="font-display font-extrabold tracking-tighter mb-12 leading-snug text-center"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "rgb(24,24,27)",
            }}
          >
            O Padrão
          </h2>
          <ul className="space-y-8 flex flex-col items-center">
            {STANDARD_ITEMS.map((item, i) => (
              <li key={i} className="flex flex-col items-center">
                <span
                  className="font-bold uppercase tracking-tight italic text-center"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "rgb(24,24,27)" }}
                >
                  {item.title}
                </span>
                <p
                  className="font-body text-base md:text-lg max-w-md mt-4 text-center leading-relaxed"
                  style={{ color: "rgb(82,82,91)" }}
                >
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Panel — "A Consultoria Spazio" (Dark) */}
      <div
        data-animate="exp-panel"
        className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 lg:px-12"
        style={{
          backgroundColor: "#0a0a0a",
          paddingTop: "clamp(3rem, 6vw, 6rem)",
          paddingBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <span
            className="font-display font-bold uppercase mb-4 block text-center"
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "#f1c97d",
            }}
          >
            Elite Tier
          </span>
          <h2
            className="font-display font-extrabold tracking-tighter mb-12 leading-snug text-center"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fafafa",
            }}
          >
            A Consultoria Spazio
          </h2>
          <ul className="space-y-8 flex flex-col items-center">
            {SPAZIO_ITEMS.map((item, i) => (
              <li key={i} className="flex flex-col items-center">
                <span
                  className="font-bold uppercase tracking-tight text-center"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "#f1c97d" }}
                >
                  {item.title}
                </span>
                <p
                  className="font-body text-base md:text-lg max-w-md mt-4 text-center leading-relaxed"
                  style={{ color: "rgb(161,161,170)" }}
                >
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
