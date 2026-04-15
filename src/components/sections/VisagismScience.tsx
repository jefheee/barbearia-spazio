"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * VisagismScience — Seção de Metodologia e Ciência por trás do Visagismo
 *
 * Seção de transição após o Hero, mantendo o fundo dark mode estrito.
 * Foca em autoridade técnica ("Não é um corte. É engenharia de imagem.").
 */

const PROCESS_STEPS = [
  {
    num: "1",
    title: "Diagnóstico",
    desc: "Mapeamento das geometrias faciais e linhas de expressão.",
  },
  {
    num: "2",
    title: "Estratégia",
    desc: "Alinhamento com o seu momento profissional e imagem desejada.",
  },
  {
    num: "3",
    title: "Execução",
    desc: "Técnica de alta precisão para esculpir e reposicionar.",
  },
];

export function VisagismScience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const title = section.querySelector("[data-animate='science-title']");
      const text = section.querySelector("[data-animate='science-text']");
      const steps = section.querySelectorAll("[data-animate='science-step']");

      gsap.set([title, text], { opacity: 0, y: 40 });
      gsap.set(steps, { opacity: 0, scale: 0.95 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      tl.to([title, text], {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      }).to(
        steps,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#050505",
        paddingTop: "clamp(5rem, 12vw, 10rem)",
        paddingBottom: "clamp(5rem, 12vw, 10rem)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
      aria-label="A Ciência do Visagismo"
    >
      {/* Background glow para dar profundidade ao dark mode */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(241,201,125,0.03) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        {/* Lado Esquerdo: Tópico e Texto Principal */}
        <div className="flex-1 text-center md:text-left">
          <span
            className="inline-block font-body uppercase mb-6"
            style={{
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.3)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "9999px",
              padding: "6px 20px",
            }}
          >
            A Engenharia da Estética
          </span>

          <h2
            data-animate="science-title"
            className="font-display font-bold leading-[1.1] tracking-tight mb-8"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              color: "#fafafa",
            }}
          >
            Não é um corte. <br className="hidden md:block" />
            <span style={{ color: "#f1c97d" }}>É engenharia de imagem.</span>
          </h2>

          <p
            data-animate="science-text"
            className="font-body leading-relaxed max-w-lg mx-auto md:mx-0"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            O Visagismo Arquitetônico da Spazio mapeia as linhas de força do seu
            rosto, a sua estrutura óssea e o seu momento profissional para
            desenhar a estética que projeta a sua melhor versão.
          </p>
        </div>

        {/* Lado Direito: Grid de Processos */}
        <div className="flex-1 w-full flex flex-col gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              data-animate="science-step"
              className="flex items-start gap-6 group"
              style={{
                borderBottom:
                  idx !== PROCESS_STEPS.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                paddingBottom: idx !== PROCESS_STEPS.length - 1 ? "1.5rem" : "0",
              }}
            >
              <span
                className="font-display font-light"
                style={{
                  fontSize: "2rem",
                  color: "rgba(241,201,125,0.4)",
                  lineHeight: "1",
                }}
              >
                0{step.num}
              </span>
              <div>
                <h3
                  className="font-display font-bold mb-2 transition-colors duration-300"
                  style={{
                    fontSize: "1.25rem",
                    color: "#fafafa",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body"
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
