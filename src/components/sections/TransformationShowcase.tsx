"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export function TransformationShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Controle interativo pelo usuário
  const [progress, setProgress] = useState(25); // Inicia nos 25% para mostrar um pouco do "Depois" e incitar o clique
  const isAfter = progress >= 50;

  useEffect(() => {
    // Reveal suave do depois para instigar a interação quando a página carrega
    const timer = setTimeout(() => {
      setProgress(50);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#0a0a0a] min-h-screen flex flex-col justify-center items-center py-20 px-6 lg:px-12"
    >
      {/* Cabeçalho */}
      <div className="w-full flex flex-col items-center justify-center text-center pb-12 z-10">
        <span
          className="font-display font-bold uppercase block mb-4"
          style={{
            fontSize: "12px",
            letterSpacing: "0.3em",
            color: !isAfter ? "rgb(161,161,170)" : "#f1c97d",
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
            minHeight: "130px", // Evita pulo de layout quando o texto muda
          }}
        >
          {progress < 50 ? (
            <span className="block animate-fade-up">A versão que o espelho<br />não questiona.</span>
          ) : (
            <span className="block animate-fade-up text-[#f1c97d]">A versão que o mercado<br />não esquece.</span>
          )}
        </h2>
        <p className="text-gray-400 mt-4 font-inter text-sm tracking-widest uppercase">
          Arraste para interagir
        </p>
      </div>

      {/* Caixa de Showcase */}
      <div className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[65vh] rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] select-none">
        
        {/* Fundo Antes */}
        <div className="absolute inset-0 h-full w-full z-10 bg-[#1c1b1b] overflow-hidden">
          <div className="absolute inset-0 w-full h-full transform origin-center">
            <Image 
              src="/antes.png" 
              alt="Antes da transformação" 
              fill 
              priority 
              quality={90}
              className="object-cover object-center pointer-events-none" 
            />
            {/* Overlay sutil para o Antes não gritar tanto nas cores */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>
        </div>

        {/* Fundo Depois */}
        <div
          className="absolute inset-0 h-full w-full z-20 bg-[#0a0a0a]"
          style={{ 
            clipPath: `inset(0% ${100 - progress}% 0% 0%)`, 
            WebkitClipPath: `inset(0% ${100 - progress}% 0% 0%)`,
            transition: 'clip-path 0.1s ease-out, -webkit-clip-path 0.1s ease-out' 
          }}
        >
          <Image 
            src="/depois.png" 
            alt="Depois da transformação" 
            fill 
            priority 
            quality={100}
            className="object-cover object-center pointer-events-none" 
          />
        </div>

        {/* Barra Divisora e Handle */}
        <div
          className="absolute top-0 bottom-0 z-30 flex justify-center items-center pointer-events-none"
          style={{ 
            left: `${progress}%`, 
            width: "4px", 
            transform: "translateX(-50%)",
            transition: 'left 0.1s ease-out'
          }}
        >
          {/* Linha brilhante */}
          <div className="absolute inset-y-0 w-px bg-[#f1c97d] shadow-[0_0_20px_6px_rgba(241,201,125,0.4)]" />
          
          {/* Círculo com Setas */}
          <div className="absolute w-12 h-12 bg-[#f1c97d] rounded-full flex flex-col items-center justify-center shadow-[0_0_25px_rgba(241,201,125,0.8)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18L9 12L15 6" />
              <path d="M9 18L15 12L9 6" transform="translate(6, 0)" />
            </svg>
          </div>
        </div>

        {/* Input Invisível para Arraste Nativo */}
        {/* touch-action: pan-y é a mágica que permite que o usuário faça scroll vertical por cima do elemento sem ficar travado! */}
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-ew-resize appearance-none m-0 p-0"
          style={{ 
            WebkitAppearance: 'none',
            touchAction: 'pan-y' // Libera o bloco de rolagem nativo do IOS/Android e acaba com o "Scroll Hijacking"
          }}
          aria-label="Controle de transformação de imagem"
        />
      </div>
    </section>
  );
}
