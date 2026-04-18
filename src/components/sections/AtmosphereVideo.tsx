"use client";

export function AtmosphereVideo() {
  return (
    <section className="w-full px-6 lg:px-12 py-12 pb-4" style={{ backgroundColor: "#fafafa" }}>
      <div className="relative w-full h-[60vh] rounded-[2rem] overflow-hidden mx-auto max-w-7xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] transform translate-z-0">
        <video 
          src="/vídeospazio.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Overlay Escuro */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        {/* Badge Flutuante */}
        <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
          <span className="text-[#fafafa] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Live from Spazio
          </span>
        </div>
      </div>
    </section>
  );
}
