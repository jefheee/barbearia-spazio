"use client";

import { useRef, useCallback, type MouseEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * ConciergeTrigger — Pílula Flutuante Glassmorphism (Agentic UI)
 *
 * Botão fixo na base da viewport para futuro Agente de IA (Antigravity RAG).
 *
 * Design:
 * - Posição: fixed bottom-8, centrado horizontalmente
 * - Visual: Glassmorphism escuro (bg-black/80, backdrop-blur-2xl)
 * - Borda: border-white/10
 * - Ícone: Faísca sparkle SVG minimalista
 * - Animação: Float contínuo via CSS + entrada GSAP elastic
 *
 * z-index 50 para ficar acima de todo o conteúdo.
 */

/** SVG Sparkle icon inline */
function SparkleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  );
}

export function ConciergeTrigger() {
  const pillRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /**
   * Animação de entrada — elastic fade-up com delay de 2s
   */
  useGSAP(() => {
    const pill = pillRef.current;
    if (!pill) return;

    gsap.set(pill, { opacity: 0, y: 40, scale: 0.95 });

    gsap.to(pill, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      delay: 2,
      ease: "elastic.out(1, 0.5)",
    });
  });

  /**
   * Efeito magnético subtil
   */
  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const btn = buttonRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      gsap.to(btn, {
        x: deltaX * 0.12,
        y: deltaY * 0.12,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  const handleClick = useCallback(() => {
    window.open(
      "https://wa.me/5548999999999",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <div
      ref={pillRef}
      className="fixed z-50"
      style={{
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      role="complementary"
      aria-label="Concierge Spazio"
    >
      <div
        className="relative"
        style={{
          borderRadius: "9999px",
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          padding: "8px",
          animation: "concierge-float 4s ease-in-out infinite",
        }}
      >
        <button
          ref={buttonRef}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative z-10 inline-flex items-center gap-3 cursor-pointer"
          style={{
            padding: "12px 28px",
            borderRadius: "9999px",
            backgroundColor: "rgba(241, 201, 125, 0.08)",
            border: "1px solid rgba(241, 201, 125, 0.15)",
            color: "#ffffff",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.06em",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = "rgba(241, 201, 125, 0.15)";
            target.style.borderColor = "rgba(241, 201, 125, 0.3)";
            target.style.boxShadow =
              "0 0 24px rgba(241, 201, 125, 0.12)";
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = "rgba(241, 201, 125, 0.08)";
            target.style.borderColor = "rgba(241, 201, 125, 0.15)";
            target.style.boxShadow = "none";
          }}
        >
          {/* Sparkle Icon */}
          <SparkleIcon />

          Falar com o Concierge Spazio
        </button>
      </div>
    </div>
  );
}
