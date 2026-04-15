"use client";

import { useRef, useCallback, type ReactNode, type MouseEvent } from "react";
import gsap from "gsap";

/**
 * MagneticButton — Botão Magnético com Glassmorphism
 *
 * Componente de botão ultra-premium que "segue" o cursor do utilizador
 * criando um efeito magnético natural. Inclui:
 *
 * - Efeito magnético via onMouseMove + GSAP transform
 * - Glassmorphism com backdrop-blur e borda dourada semi-transparente
 * - Glow effect subtil no hover
 * - Reset suave ao sair do hover
 *
 * Props:
 * @param children — Conteúdo do botão
 * @param href — Link de destino (opcional)
 * @param className — Classes adicionais (opcional)
 * @param strength — Intensidade do efeito magnético (default: 0.3)
 */

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  "data-animate"?: string;
}

export function MagneticButton({
  children,
  href,
  className = "",
  strength = 0.3,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  /**
   * Calcula o deslocamento magnético baseado na posição do cursor
   * relativa ao centro do botão.
   */
  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distância do cursor ao centro do botão
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Aplica o deslocamento magnético ao botão
      gsap.to(button, {
        x: deltaX * strength,
        y: deltaY * strength,
        duration: 0.4,
        ease: "power2.out",
      });

      // O texto interno segue com maior intensidade para profundidade
      if (innerRef.current) {
        gsap.to(innerRef.current, {
          x: deltaX * strength * 0.5,
          y: deltaY * strength * 0.5,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    },
    [strength]
  );

  /**
   * Reset suave quando o cursor sai — o botão volta ao centro
   * com uma curva elástica premium.
   */
  const handleMouseLeave = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
    });

    if (innerRef.current) {
      gsap.to(innerRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });
    }
  }, []);

  /**
   * Navegação: se href está definido, abre o link.
   * Pode ser expandido para integrar com Next.js router.
   */
  const handleClick = useCallback(() => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }, [href]);

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center px-8 py-4 rounded-full cursor-pointer border border-[rgba(241,201,125,0.2)] bg-[rgba(241,201,125,0.06)] backdrop-blur-[40px] text-primary-gold font-body text-sm font-medium tracking-[0.15em] uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[rgba(241,201,125,0.12)] hover:border-[rgba(241,201,125,0.4)] hover:shadow-[0_0_40px_rgba(241,201,125,0.15)] will-change-transform ${className}`}
      {...props}
    >
      {/* Glow effect no hover — camada separada para performance */}
      <span
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(241,201,125,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Texto interno com tracking magnético independente */}
      <span ref={innerRef} className="relative z-10">
        {children}
      </span>
    </button>
  );
}
