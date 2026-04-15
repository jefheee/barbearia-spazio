"use client";

import { useRef, useCallback, type MouseEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * ConciergeTrigger — Pílula de Navegação Flutuante (Agentic UI)
 *
 * Componente de interface preparado para IA agêntica.
 * Flutua na base da viewport com Glassmorphism e surge
 * 2 segundos após o carregamento com animação elastic fade-up.
 *
 * Design:
 * - Posição: fixed bottom-8, centrado horizontalmente
 * - Visual: Glassmorphism (bg-white/10, backdrop-blur-2xl, border-white/10)
 * - Botão magnético embutido: "Falar com o Concierge Spazio"
 * - z-index alto para ficar acima de todo o conteúdo
 *
 * A animação GSAP é auto-contida neste componente.
 */

export function ConciergeTrigger() {
  const pillRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /**
   * Animação de entrada — elastic fade-up com delay de 2s
   * Simula uma aparição natural e premium.
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
   * Efeito magnético subtil no botão interno
   */
  const handleMouseMove = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    gsap.to(btn, {
      x: deltaX * 0.15,
      y: deltaY * 0.15,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

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
    // Placeholder para integração com IA agêntica / chatbot
    // Pode abrir modal, drawer lateral, ou redirecionar para WhatsApp
    window.open("https://wa.me/5548999999999", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div
      ref={pillRef}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      role="complementary"
      aria-label="Concierge Spazio"
    >
      <div className="relative rounded-full bg-white/10 backdrop-blur-[40px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] px-2 py-2">
        {/* Glow subtil dourado atrás da pílula */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(241,201,125,0.06)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />

        <button
          ref={buttonRef}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative z-10 inline-flex items-center gap-3 px-7 py-3 rounded-full bg-primary-gold/10 hover:bg-primary-gold/20 border border-primary-gold/20 hover:border-primary-gold/40 text-white font-body text-[13px] font-medium tracking-[0.08em] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer will-change-transform hover:shadow-[0_0_24px_rgba(241,201,125,0.12)]"
        >
          {/* Pulse dot — indica disponibilidade */}
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-gold" />
          </span>

          Falar com o Concierge Spazio
        </button>
      </div>
    </div>
  );
}
