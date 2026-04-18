"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TransformationShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAfter, setIsAfter] = useState(false); 

  const afterImageRef = useRef<HTMLDivElement>(null);
  const antesImageWrapperRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section, 
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // Atualiza state baseado no progresso para a mudança no título
          onUpdate: (self) => {
            setIsAfter(self.progress >= 0.5);
          }
        }
      });

      // ClipPath vai de inset(0% 100% 0% 0%) para inset(0% 0% 0% 0%)
      tl.to(afterImageRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none"
      }, 0);

      // Divider viaja da esquerda (0%) para a direita (100%)
      tl.to(dividerRef.current, {
        left: "100%",
        ease: "none"
      }, 0);

      // Imagem do ANTES encolhe sutilmente (1.30 -> 1.0)
      tl.fromTo(antesImageWrapperRef.current, 
        { scale: 1.30 },
        { scale: 1.0, ease: "none" }, 
        0
      );

    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="relative w-full bg-[#0a0a0a]" style={{ height: "200vh" }}>
      {/* Container Sticky */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden px-6 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="w-full flex flex-col items-center justify-center text-center pb-8 z-10 pointer-events-none">
          <span
            className="font-display font-bold uppercase block mb-4"
            style={{
              fontSize: "12px",
              letterSpacing: "0.3em",
              color: !isAfter ? "rgb(161,161,170)" : "#f1c97d",
              transition: "color 0.4s ease",
            }}
          >
            {!isAfter ? "Antes" : "Depois"}
          </span>
          <h2
            className="font-display font-extrabold tracking-tighter leading-snug"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fafafa",
              minHeight: "130px", 
            }}
          >
            {!isAfter ? (
              <span className="block animate-fade-up">A versão que o espelho<br />não questiona.</span>
            ) : (
              <span className="block animate-fade-up text-[#f1c97d]">A versão que o mercado<br />não esquece.</span>
            )}
          </h2>
        </div>

        {/* Caixa de Showcase */}
        <div className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] pointer-events-none">
          
          {/* Fundo Antes */}
          <div className="absolute inset-0 h-full w-full z-10 bg-[#1c1b1b] overflow-hidden">
            <div ref={antesImageWrapperRef} className="absolute inset-0 w-full h-full transform origin-center">
              <Image 
                src="/antes.png" 
                alt="Antes da transformação" 
                fill 
                priority 
                className="object-cover object-center pointer-events-none" 
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            </div>
          </div>

          {/* Fundo Depois */}
          <div
            ref={afterImageRef}
            className="absolute inset-0 h-full w-full z-20 bg-[#0a0a0a]"
            style={{ clipPath: `inset(0% 100% 0% 0%)`, WebkitClipPath: `inset(0% 100% 0% 0%)` }}
          >
            <Image 
              src="/depois.png" 
              alt="Depois da transformação" 
              fill 
              priority 
              className="object-cover object-center pointer-events-none" 
            />
          </div>

          {/* Barra Divisora */}
          <div
            ref={dividerRef}
            className="absolute top-0 bottom-0 z-30 flex justify-center items-center pointer-events-none"
            style={{ left: `0%`, width: "4px", transform: "translateX(-50%)" }}
          >
            <div className="absolute inset-y-0 w-px bg-[#f1c97d] shadow-[0_0_20px_6px_rgba(241,201,125,0.4)]" />
            
            <div className="absolute w-12 h-12 bg-[#f1c97d] rounded-full flex flex-col items-center justify-center shadow-[0_0_25px_rgba(241,201,125,0.8)] transform transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18L9 12L15 6" />
                <path d="M9 18L15 12L9 6" transform="translate(6, 0)" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
