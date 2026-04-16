"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TransformationShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollPinRef = useRef<HTMLDivElement>(null);
  
  const [progress, setProgress] = useState(0); 
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(isDragging);
  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useGSAP(
    () => {
      const pinTarget = scrollPinRef.current;
      if (!pinTarget) return;

      ScrollTrigger.create({
        trigger: pinTarget,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, 
        pin: true,
        // Sync scroll if user is not manually dragging
        onUpdate: (self) => {
          if (!isDraggingRef.current) {
            setProgress(self.progress * 100);
          }
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="relative w-full bg-[#0a0a0a]" style={{ height: "200vh" }}>
      <div ref={scrollPinRef} className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden px-6 lg:px-12">
        
        {/* Cabeçalho Textual Isolado (Acima das fotos) */}
        <div className="w-full flex flex-col items-center justify-center text-center pb-8 z-10 pointer-events-none">
          <span
            className="font-display font-bold uppercase block mb-4"
            style={{
              fontSize: "12px",
              letterSpacing: "0.3em",
              color: progress < 50 ? "rgb(161,161,170)" : "#f1c97d",
              transition: "color 0.4s ease",
            }}
          >
            {progress < 50 ? "Antes" : "Depois"}
          </span>
          <h2
            className="font-display font-extrabold tracking-tighter leading-snug"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fafafa",
              minHeight: "130px", // Maintains space so the layout doesn't jump
            }}
          >
            {progress < 50 ? (
              <span className="block animate-fade-up">A versão que o espelho<br />não questiona.</span>
            ) : (
              <span className="block animate-fade-up text-[#f1c97d]">A versão que o mercado<br />não esquece.</span>
            )}
          </h2>
        </div>

        {/* Container do Slider */}
        <div className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl">
          
          {/* Base Layer: Antes (Sempre visível no fundo) */}
          <div className="absolute inset-0 h-full w-full z-10 bg-[#1c1b1b]">
            <Image 
              src="/antes.png" 
              alt="Antes da transformação" 
              fill 
              priority 
              quality={100}
              className="object-cover object-center pointer-events-none" 
            />
            {/* O degradê preto/escurecimento sobre o "Antes" */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
          </div>

          {/* Top Layer: Depois (Cortado horizontalmente pelo clip-path) */}
          <div
            className="absolute inset-0 h-full w-full z-20 bg-[#0a0a0a]"
            style={{ clipPath: `inset(0% ${100 - progress}% 0% 0%)` }}
          >
            <Image 
              src="/depois.png" 
              alt="Depois da transformação" 
              fill 
              priority 
              quality={100}
              className="object-cover object-center pointer-events-none" 
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* Divisor Visual (A linha que separa) */}
          <div
            className="absolute top-0 bottom-0 z-30 flex justify-center items-center pointer-events-none"
            style={{ left: `${progress}%`, width: "2px", transform: "translateX(-50%)" }}
          >
            <div className="absolute inset-y-0 w-px bg-[#f1c97d] shadow-[0_0_10px_rgba(241,201,125,0.7)]" />
            
            {/* Botão de Arrastar */}
            <div className="absolute w-12 h-12 bg-[#f1c97d] rounded-full flex flex-col items-center justify-center shadow-[0_0_15px_rgba(241,201,125,0.5)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18L9 12L15 6" />
                <path d="M9 18L15 12L9 6" transform="translate(6, 0)" />
              </svg>
            </div>
          </div>

          {/* Controlador HTML Range Nativo */}
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-ew-resize m-0 p-0"
            style={{ WebkitAppearance: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
