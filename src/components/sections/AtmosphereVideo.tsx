"use client";

export function AtmosphereVideo() {
  return (
    <section className="w-full flex justify-center items-center py-20 px-6" style={{ backgroundColor: "#fafafa" }}>
      <div className="relative w-full max-w-sm aspect-[9/16] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
        <video 
          src="/vídeospazio.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay Escuro mais suave verticalmente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
        
        {/* Badge Flutuante Centralizada no topo */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 px-5 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-lg whitespace-nowrap">
          <span className="text-[#fafafa] text-[10px] sm:text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Live from Spazio
          </span>
        </div>
      </div>
    </section>
  );
}
