"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * TransformationShowcase — Before/After Scroll-Driven Wipe Effect
 *
 * Awwwards-level interaction:
 * - h-[200vh] outer container for scroll distance
 * - h-screen pinned inner with two stacked images (absolute inset-0)
 * - Bottom layer: "Antes" (desaturated, low-energy placeholder)
 * - Top layer: "Depois" (vibrant, high-energy placeholder)
 * - GSAP ScrollTrigger with scrub:true, pin:true animates
 *   clip-path from inset(0 100% 0 0) → inset(0 0% 0 0) (L→R wipe)
 * - Centered divider line + "Antes / Depois" labels
 *
 * Uses generic color placeholders. Swap for real images later.
 */

export function TransformationShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const afterImage = afterImageRef.current;
      const label = labelRef.current;
      if (!section || !afterImage || !label) return;

      // Pin the showcase area and animate clip-path on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: ".showcase-pin-target",
          pinSpacing: false,
        },
      });

      // Wipe: reveal "Depois" image from left to right via clip-path
      tl.fromTo(
        afterImage,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "none" }
      );

      // Animate the divider label position
      tl.fromTo(
        label,
        { left: "0%" },
        { left: "100%", duration: 1, ease: "none" },
        0
      );
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: "200vh" }}
    >
      {/* Pinned viewport */}
      <div className="showcase-pin-target relative w-full h-screen overflow-hidden">
        {/* "Antes" Layer — muted, low-energy (bottom) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: "#1c1b1b" }}
          aria-label="Antes da consultoria"
        >
          {/* Placeholder pattern: subtle grid lines */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${(i + 1) * 12.5}%`,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
          <div className="text-center relative z-10 px-6">
            <span
              className="font-display font-bold uppercase block mb-4"
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                color: "rgb(113,113,122)",
              }}
            >
              Antes
            </span>
            <h2
              className="font-display font-extrabold tracking-tighter leading-snug"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "rgb(63,63,70)",
              }}
            >
              A versão que o espelho<br />não questiona.
            </h2>
          </div>
        </div>

        {/* "Depois" Layer — vibrant, gold accents (top, clip-path animated) */}
        <div
          ref={afterImageRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundColor: "#0a0a0a",
            clipPath: "inset(0 100% 0 0)",
          }}
          aria-label="Depois da consultoria Spazio"
        >
          {/* Subtle gold accent line */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "2px",
              background: "linear-gradient(to right, transparent, #f1c97d, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="text-center relative z-10 px-6">
            <span
              className="font-display font-bold uppercase block mb-4"
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                color: "#f1c97d",
              }}
            >
              Depois
            </span>
            <h2
              className="font-display font-extrabold tracking-tighter leading-snug"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "#fafafa",
              }}
            >
              A versão que o mercado<br />não esquece.
            </h2>
            <p
              className="font-body max-w-md mx-auto mt-8"
              style={{
                fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                color: "rgb(161,161,170)",
              }}
            >
              Visagismo Arquitetônico aplicado. Cada detalhe projetado
              para comunicar competência, confiança e autoridade.
            </p>
          </div>
        </div>

        {/* Moving Divider Line — follows the wipe edge */}
        <div
          ref={labelRef}
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: "0%", width: "2px" }}
        >
          <div
            className="h-full"
            style={{
              width: "2px",
              background: "linear-gradient(to bottom, transparent 10%, #f1c97d 50%, transparent 90%)",
            }}
          />
          {/* Label pill */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#f1c97d",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 8L6 12L18 16" />
              <path d="M6 8L18 12L6 16" />
            </svg>
          </div>
        </div>

        {/* Fixed bottom labels */}
        <div
          className="absolute bottom-8 left-0 right-0 z-20 flex justify-between pointer-events-none"
          style={{ padding: "0 clamp(1.5rem, 5vw, 4rem)" }}
        >
          <span
            className="font-body uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "rgb(113,113,122)",
            }}
          >
            Scroll para revelar
          </span>
          <span
            className="font-body uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "rgb(113,113,122)",
            }}
          >
            Before / After
          </span>
        </div>
      </div>
    </div>
  );
}
