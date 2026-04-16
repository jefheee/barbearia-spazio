"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    title: "1. Diagnóstico Facial",
    desc: "Análise milimétrica da morfologia craniana e pontos de luz do rosto.",
  },
  {
    title: "2. Estratégia de Imagem",
    desc: "Alinhamento entre seus objetivos de carreira e a projeção visual de autoridade.",
  },
  {
    title: "3. Execução Técnica",
    desc: "Cortes precisos e acabamentos que respeitam o crescimento natural e a arquitetura do fio.",
  },
];

export function VisagismScience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const elements = section.querySelectorAll("[data-animate='science-el']");
      gsap.set(elements, { opacity: 0, y: 30 });

      ScrollTrigger.batch(elements, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1.2,
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
      className="w-full flex justify-center overflow-hidden"
      style={{
        backgroundColor: "#0a0a0a",
        paddingTop: "clamp(5rem, 10vw, 8rem)",
        paddingBottom: "clamp(5rem, 10vw, 8rem)",
      }}
      aria-label="A Ciência do Visagismo"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        <div data-animate="science-el" className="w-full flex flex-col items-center justify-center text-center mb-8">
          <h2
            className="font-display font-bold tracking-tighter w-full text-center"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              color: "#fafafa",
            }}
          >
            Não é um corte.{" "}
            <span style={{ color: "#f1c97d" }}>É engenharia de imagem.</span>
          </h2>
        </div>

        <div data-animate="science-el" className="w-full flex justify-center text-center mb-20">
          <p
            className="font-body leading-relaxed max-w-2xl text-center"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "rgb(161,161,170)",
              lineHeight: 1.8,
            }}
          >
            O Visagismo Arquitetônico da Spazio não segue tendências. Nós mapeamos
            as linhas de força do seu rosto, a sua estrutura óssea e o seu momento
            profissional para desenhar a estética que projeta a sua melhor versão.
          </p>
        </div>

        {/* Process Grid — 3 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 w-full"
          style={{ borderTop: "1px solid rgb(39,39,42)" }}
        >
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="w-full flex flex-col items-center text-center" data-animate="science-el">
              <div
                className="font-display font-bold mb-4 w-full text-center"
                style={{ fontSize: "1.25rem", color: "#f1c97d" }}
              >
                {step.title}
              </div>
              <p
                className="font-body text-sm leading-relaxed max-w-[280px] text-center"
                style={{ color: "rgb(113,113,122)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
