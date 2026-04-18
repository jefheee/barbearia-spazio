"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // Mantém a tela pinada por 3x a altura da viewport
          pin: true,
          scrub: 1, // Suavização nativa do GSAP
        },
      });

      // 1. O texto desaparece rapidamente
      tl.to(
        textRef.current,
        { opacity: 0, duration: 0.2, ease: "power2.out" },
        0
      );

      // 2. A máscara do logo expande agressivamente via transform (GPU), revelando o fundo
      // O scale de 150 garante que o recorte da letra cubra a tela toda
      tl.to(
        maskRef.current,
        { scale: 150, duration: 1, ease: "power4.inOut" },
        0
      );

      // 3. O fundo sofre um leve un-zoom para compensar a entrada
      tl.to(bgRef.current, { scale: 1, duration: 1, ease: "power2.out" }, 0);
    }, containerRef);

    return () => ctx.revert(); // Cleanup para evitar vazamento de memória no React
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#050505] overflow-hidden"
    >
      {/* Camada 1: Imagem de Fundo Premium (Interior da Barbearia) */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full scale-125 transform-gpu"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Interior Spazio"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        {/* Overlay escuro para legibilidade da próxima seção */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Camada 2: Máscara Inversa (O Logo que recorta a tela) */}
      {/* Usando mask-image do CSS moderno que é mais performático que SVG no DOM */}
      <div
        ref={maskRef}
        className="absolute inset-0 w-full h-full bg-[#050505] transform-gpu origin-center flex items-center justify-center pointer-events-none"
        style={{
          // Substitua pela URL do SVG real do Logo da Spazio (deve ser um shape sólido vazado)
          maskImage: "url(/logo-mask.svg)",
          WebkitMaskImage: "url(/logo-mask.svg)",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "300px", // Tamanho inicial do logo na tela
          WebkitMaskSize: "300px",
        }}
      />

      {/* Camada 3: Tipografia Inicial (Fica acima do fundo preto, antes da rolagem) */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
      >
        <h1 className="text-[#fafafa] text-4xl md:text-6xl font-outfit font-light tracking-widest uppercase text-center leading-tight">
          A Evolução da sua
          <br />
          <span className="font-bold">Imagem</span>
        </h1>
        <p className="text-gray-400 mt-4 font-inter text-sm tracking-widest uppercase">
          Role para descobrir
        </p>
      </div>
    </section>
  );
}
