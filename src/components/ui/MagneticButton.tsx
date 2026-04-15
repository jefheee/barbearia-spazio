"use client";

import { useRef, useCallback, type ReactNode, type MouseEvent } from "react";
import gsap from "gsap";

/**
 * MagneticButton — Botão Magnético Premium
 *
 * Efeito magnético CLAMPED a ±15px para evitar overflow visual.
 * O texto interno acompanha com metade da intensidade.
 * Estilo: rounded-full, primary gold, scale hover.
 *
 * Segue DESIGN.md: buttons are rounded-full, primary bg, no shadows.
 * On hover: slight scale (1.02) rather than color change.
 */

const MAX_DISPLACEMENT = 15;

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  "data-animate"?: string;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
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

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const moveX = clamp(deltaX * strength, -MAX_DISPLACEMENT, MAX_DISPLACEMENT);
      const moveY = clamp(deltaY * strength, -MAX_DISPLACEMENT, MAX_DISPLACEMENT);

      gsap.to(button, {
        x: moveX,
        y: moveY,
        duration: 0.4,
        ease: "power2.out",
      });

      if (innerRef.current) {
        gsap.to(innerRef.current, {
          x: moveX * 0.5,
          y: moveY * 0.5,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    gsap.to(button, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    if (innerRef.current) {
      gsap.to(innerRef.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    }
  }, []);

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
      className={`group relative inline-flex items-center justify-center rounded-full cursor-pointer font-bold text-lg transition-transform duration-300 hover:scale-[1.02] active:scale-95 will-change-transform overflow-hidden ${className}`}
      style={{
        backgroundColor: "#f1c97d",
        color: "#0a0a0a",
        padding: "20px 40px",
      }}
      {...props}
    >
      <span ref={innerRef} className="relative z-10">
        {children}
      </span>
    </button>
  );
}
