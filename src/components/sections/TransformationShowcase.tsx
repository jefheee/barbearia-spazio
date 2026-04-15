"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * TransformationShowcase — Mostruário Premium
 *
 * Contêiner em Ice Mode com espaço para vídeo vertical de alta qualidade
 * (Aspect Ratio 9:16) em bordas modernas, desprovido de celulares de mockup,
 * com um forte apelo Call-to-Action visual na frase sobre "ser lembrado".
 */

/** Play icon simple inline SVG */
function PlayIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function TransformationShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const titleElements = section.querySelectorAll("[data-animate='showcase-text']");
      const videoContainer = section.querySelector("[data-animate='showcase-video']");

      gsap.set(titleElements, { opacity: 0, x: -40 });
      gsap.set(videoContainer, { opacity: 0, scale: 0.95, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(titleElements, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      }).to(
        videoContainer,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.6"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{
        backgroundColor: "#fafafa",
        paddingTop: "clamp(5rem, 10vw, 8rem)",
        paddingBottom: "clamp(6rem, 12vw, 10rem)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
      aria-label="Resultados da Consultoria Spazio"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* Lado Esquerdo: Mensagem e Posicionamento */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <span
            data-animate="showcase-text"
            className="inline-block font-body uppercase mb-6"
            style={{
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "#c9a35e",
            }}
          >
            Resultados Tangíveis
          </span>

          <h2
            data-animate="showcase-text"
            className="font-display font-bold leading-[1.1] tracking-tight mb-8"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#1a1a1a",
            }}
          >
            A diferença entre ser visto e{" "}
            <span style={{ color: "#c9a35e" }}>ser lembrado.</span>
          </h2>
          
          <p
            data-animate="showcase-text"
            className="font-body leading-relaxed mb-10"
            style={{
              fontSize: "16px",
              color: "#555555",
            }}
          >
            Veja como um reposicionamento através do visagismo arquitetônico pode transformar não apenas a estética facial, mas a linguagem que a sua fisionomia projeta no ambiente.
          </p>

          <div
            data-animate="showcase-text"
            className="hidden md:flex flex-row items-center gap-4"
          >
            <div
              style={{
                width: "48px",
                height: "1px",
                backgroundColor: "rgba(26,26,26,0.2)",
              }}
            />
            <span
              className="font-body uppercase text-xs"
              style={{ color: "#888888", letterSpacing: "0.15em" }}
            >
              Assista ao Caso Real
            </span>
          </div>
        </div>

        {/* Lado Direito: Container de Vídeo (9:16 aspect ratio) */}
        <div className="flex-1 w-full max-w-md mx-auto relative flex justify-center">
          <div
            data-animate="showcase-video"
            className="group relative overflow-hidden"
            style={{
              width: "100%",
              aspectRatio: "9 / 16",
              backgroundColor: "#e0e0e0",
              borderRadius: "2.5rem",
              boxShadow: "0 24px 64px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
            role="button"
            aria-label="Reproduzir vídeo de transformação"
          >
            {/* Imagem Placeholder de fundo para o vídeo */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1620052562423-ed21cd062b8c?q=80&w=700&auto=format&fit=crop')",
                backgroundColor: "#1a1a1a",
              }}
              aria-hidden="true"
            />

            {/* Gradient Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {/* Play Button Premium Glassmorphism */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
              }}
            >
              <span className="ml-1">
                <PlayIcon />
              </span>
            </div>

            {/* Tag visual de Vídeo */}
            <div
              className="absolute top-6 right-6"
              style={{
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Estudo de Caso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
