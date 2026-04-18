"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Menos tempo de pin
          pin: true,
          scrub: 1, 
        },
      });

      // 1. O texto desaparece e escala
      tl.to(
        textRef.current,
        { opacity: 0, scale: 0.9, duration: 0.3, ease: "power2.out" },
        0
      );

      // 2. Animação de clip-path super confiável usando proxy numérico
      const proxy = { radius: 0 };
      tl.to(
        proxy,
        {
          radius: 150,
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            if (bgWrapperRef.current) {
              const r = proxy.radius;
              bgWrapperRef.current.style.clipPath = `circle(${r}% at 50% 50%)`;
              bgWrapperRef.current.style.WebkitClipPath = `circle(${r}% at 50% 50%)`;
            }
          },
        },
        0.1
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#050505] overflow-hidden"
    >
      {/* Camada 1: Imagem de Fundo Premium (Oculta inicialmente pelo clip-path 0%) */}
      <div
        ref={bgWrapperRef}
        className="absolute inset-0 w-full h-full z-10"
        style={{ clipPath: "circle(0% at 50% 50%)", WebkitClipPath: "circle(0% at 50% 50%)" }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Interior Spazio"
          fill
          priority
          quality={100}
          className="object-cover opacity-80 mix-blend-overlay scale-110 md:scale-105" 
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Camada 2: Tipografia Inicial (Visível apenas na tela preta) */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20"
      >
        <h1 className="text-[#fafafa] text-4xl md:text-6xl font-outfit font-light tracking-widest uppercase text-center leading-tight drop-shadow-2xl">
          A Evolução da sua
          <br />
          <span className="font-bold">Imagem</span>
        </h1>
        <p className="text-gray-400 mt-4 font-inter text-sm tracking-widest uppercase drop-shadow-lg">
          Role para descobrir
        </p>
      </div>
    </section>
  );
}
