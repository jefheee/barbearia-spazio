"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * TransformationShowcase — Video + Impact Statement
 *
 * Matches code.html prototype:
 * - Ice bg (#fafafa)
 * - Two-column: video left (9:16, rounded-3xl), text right
 * - Text: "A diferença entre ser visto e *ser lembrado.*" (italic zinc-400)
 * - h-px divider line + description below
 * - Play button: white/20 backdrop-blur-xl glassmorphism
 */

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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

      const elements = section.querySelectorAll("[data-animate='showcase-el']");
      gsap.set(elements, { opacity: 0, y: 40 });

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
      className="w-full"
      style={{
        backgroundColor: "#fafafa",
        paddingTop: "clamp(5rem, 10vw, 12rem)",
        paddingBottom: "clamp(5rem, 10vw, 12rem)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
      aria-label="Resultados — A diferença entre ser visto e ser lembrado"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Left: Video Container (9:16) */}
          <div className="w-full md:w-1/2" data-animate="showcase-el">
            <div
              className="w-full max-w-[400px] mx-auto relative overflow-hidden group"
              style={{
                aspectRatio: "9 / 16",
                backgroundColor: "#e4e4e7",
                borderRadius: "2rem",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                cursor: "pointer",
              }}
              role="button"
              aria-label="Reproduzir vídeo de transformação"
            >
              {/* Placeholder dark surface */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundColor: "#27272a" }}
                aria-hidden="true"
              />

              {/* Play button — glassmorphism */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "white",
                }}
              >
                <span className="ml-1">
                  <PlayIcon />
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text + Statement */}
          <div className="w-full md:w-1/2" data-animate="showcase-el">
            <h2
              className="font-display font-extrabold tracking-tighter leading-none mb-8"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "rgb(24,24,27)",
              }}
            >
              A diferença entre ser visto e{" "}
              <span className="italic" style={{ color: "rgb(161,161,170)" }}>
                ser lembrado.
              </span>
            </h2>
            <div
              className="mb-8"
              style={{
                width: "96px",
                height: "1px",
                backgroundColor: "rgb(24,24,27)",
              }}
              aria-hidden="true"
            />
            <p
              className="font-body font-medium max-w-md"
              style={{ color: "rgb(113,113,122)" }}
            >
              Assista como a consultoria estratégica transforma não apenas o
              visual, mas a confiança de líderes que frequentam o Spazio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
