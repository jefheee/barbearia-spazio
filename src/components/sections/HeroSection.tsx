"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  const titleLine1 = "A Evolução da sua".split("");
  const titleLine2 = "Imagem".split("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // 1. Efeito de máquina de escrever (aparecendo letra por letra rapidamente)
      tl.to(
        ".char",
        {
          opacity: 1,
          duration: 0.05,
          stagger: 0.05,
          ease: "power1.inOut",
        }
      );

      // 2. Pausa de alguns segundos, em seguida, a imagem da barbearia aparece aos poucos (fade in)
      tl.to(
        bgWrapperRef.current,
        {
          opacity: 1,
          duration: 3,
          ease: "power2.inOut",
        },
        "+=1.5"
      );

      // 3. O texto inferior aparece junto com a imagem da barbearia
      tl.to(
        subTextRef.current,
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#050505] overflow-hidden"
    >
      {/* Camada 1: Imagem de Fundo Premium (Oculta inicialmente com opacity 0) */}
      <div
        ref={bgWrapperRef}
        className="absolute inset-0 w-full h-full z-10 opacity-0"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
      </div>

      {/* Camada 2: Tipografia Inicial */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20"
      >
        <h1 className="text-[#fafafa] text-4xl md:text-6xl font-outfit font-light tracking-widest uppercase text-center leading-tight drop-shadow-2xl">
          {titleLine1.map((char, i) => (
            <span key={`l1-${i}`} className="char opacity-0 inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <br />
          <span className="font-bold">
            {titleLine2.map((char, i) => (
              <span key={`l2-${i}`} className="char opacity-0 inline-block">
                {char}
              </span>
            ))}
          </span>
        </h1>
        <p
          ref={subTextRef}
          className="text-gray-400 mt-8 font-inter text-sm tracking-widest uppercase drop-shadow-lg opacity-0"
        >
          Role para descobrir
        </p>
      </div>
    </section>
  );
}
