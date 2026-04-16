"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TransformationShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // React state para atualização de textos (debounce via RAF para fluidez ou direto)
  const [targetProgress, setTargetProgress] = useState(0); 

  // Refs de estado para lógica de animação
  const physicsProgress = useRef(0);
  const targetProgressRef = useRef(0);
  const isDraggingRef = useRef(false);
  
  const afterImageRef = useRef<HTMLDivElement>(null);
  const antesImageWrapperRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    targetProgressRef.current = targetProgress;
  }, [targetProgress]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Usando ScrollTrigger apenas para ler a barra de progresso em tempo real do container sticky
      ScrollTrigger.create({
        trigger: section, 
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // NÃO RETEMOS SCROLL JS! Usamos apenas o progresso nativo para não bugar o CSS
        onUpdate: (self) => {
          if (!isDraggingRef.current) {
            setTargetProgress(self.progress * 100);
          }
        },
      });

      // Ticker para atualizar frame a frame a alavanca (clipPath e Scale)
      const updatePhysics = () => {
        const LERP_FACTOR = 0.12; 
        physicsProgress.current += (targetProgressRef.current - physicsProgress.current) * LERP_FACTOR;
        const p = physicsProgress.current;

        if (afterImageRef.current) {
          // Clip path clássico livre de bugs de maskImage
          afterImageRef.current.style.clipPath = `inset(0% ${100 - p}% 0% 0%)`;
        }
        if (dividerRef.current) {
          dividerRef.current.style.left = `${p}%`;
        }
        if (antesImageWrapperRef.current) {
           // Escala diminui de forma fluida de 1.30 até 1.0 para equiparar
           const scaleValue = 1.30 - (0.30 * (p / 100));
           antesImageWrapperRef.current.style.transform = `scale(${scaleValue})`;
        }
      };

      gsap.ticker.add(updatePhysics);
      
      return () => {
        gsap.ticker.remove(updatePhysics);
      };
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="relative w-full bg-[#0a0a0a]" style={{ height: "200vh" }}>
      {/* Container "Fixed/Sticky" controlado 100% via CSS. */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden px-6 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="w-full flex flex-col items-center justify-center text-center pb-8 z-10 pointer-events-none">
          <span
            className="font-display font-bold uppercase block mb-4"
            style={{
              fontSize: "12px",
              letterSpacing: "0.3em",
              color: targetProgress < 50 ? "rgb(161,161,170)" : "#f1c97d",
              transition: "color 0.4s ease",
            }}
          >
            {targetProgress < 50 ? "Antes" : "Depois"}
          </span>
          <h2
            className="font-display font-extrabold tracking-tighter leading-snug"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fafafa",
              minHeight: "130px", 
            }}
          >
            {targetProgress < 50 ? (
              <span className="block animate-fade-up">A versão que o espelho<br />não questiona.</span>
            ) : (
              <span className="block animate-fade-up text-[#f1c97d]">A versão que o mercado<br />não esquece.</span>
            )}
          </h2>
        </div>

        {/* Caixa de Showcase */}
        <div className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden cursor-ew-resize shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
          
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
            style={{ clipPath: `inset(0% 100% 0% 0%)` }}
          >
            <Image 
              src="/depois.png" 
              alt="Depois da transformação" 
              fill 
              priority 
              className="object-cover object-center pointer-events-none" 
            />
            {/* Um brilho bem sutil na borda de encontro seria feito com uma linha, que é a divider line. */}
          </div>

          {/* Barra Divisora com Glow que finge o Degradê de Corte Suave */}
          <div
            ref={dividerRef}
            className="absolute top-0 bottom-0 z-30 flex justify-center items-center pointer-events-none"
            style={{ left: `0%`, width: "4px", transform: "translateX(-50%)" }}
          >
            {/* O "Glow" do degradê da linha */}
            <div className="absolute inset-y-0 w-px bg-[#f1c97d] shadow-[0_0_20px_6px_rgba(241,201,125,0.4)]" />
            
            <div className="absolute w-12 h-12 bg-[#f1c97d] rounded-full flex flex-col items-center justify-center shadow-[0_0_25px_rgba(241,201,125,0.8)] transform transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18L9 12L15 6" />
                <path d="M9 18L15 12L9 6" transform="translate(6, 0)" />
              </svg>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={targetProgress}
            onChange={(e) => setTargetProgress(Number(e.target.value))}
            onMouseDown={() => { isDraggingRef.current = true; }}
            onMouseUp={() => { isDraggingRef.current = false; }}
            onTouchStart={() => { isDraggingRef.current = true; }}
            onTouchEnd={() => { isDraggingRef.current = false; }}
            className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-ew-resize appearance-none m-0 p-0"
            style={{ WebkitAppearance: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
