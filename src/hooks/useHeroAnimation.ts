"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * useHeroAnimation — Hook de Animação do Hero Section
 *
 * Gere a entrada dramática da tipografia e elementos do Hero
 * usando uma timeline GSAP coordenada. A animação dispara
 * imediatamente ao montar o componente (sem dependência de scroll).
 *
 * Sequência de animação:
 * 1. Linha decorativa dourada aparece com scaleX
 * 2. Headline revela com clip-path (wipe de baixo para cima)
 * 3. Subheadline entra com fade + translateY
 * 4. CTA aparece com scale + opacity
 *
 * @returns containerRef — Ref para o container do Hero
 */
export function useHeroAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Seleciona os elementos-alvo dentro do container
      const decorLine = container.querySelector("[data-animate='decor-line']");
      const headlineWords = container.querySelectorAll("[data-animate='headline-word']");
      const subheadline = container.querySelector("[data-animate='subheadline']");
      const cta = container.querySelector("[data-animate='cta']");

      // Estado inicial: tudo invisível
      gsap.set(headlineWords, {
        clipPath: "inset(100% 0% 0% 0%)",
        opacity: 0,
      });
      gsap.set(subheadline, { opacity: 0, y: 32 });
      gsap.set(cta, { opacity: 0, scale: 0.9 });
      if (decorLine) {
        gsap.set(decorLine, { scaleX: 0, transformOrigin: "left center" });
      }

      // Timeline principal — coordena toda a sequência
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
          duration: 1.2,
        },
        // Pequeno delay inicial para permitir o layout estabilizar
        delay: 0.3,
      });

      // 1. Linha decorativa dourada
      if (decorLine) {
        tl.to(decorLine, {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.inOut",
        });
      }

      // 2. Headline — cada palavra revela com clip-path (stagger)
      tl.to(
        headlineWords,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power4.out",
        },
        decorLine ? "-=0.4" : "0.3"
      );

      // 3. Subheadline — fade in com deslocamento vertical
      tl.to(
        subheadline,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // 4. CTA — aparece com scale suave
      tl.to(
        cta,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  return { containerRef };
}
