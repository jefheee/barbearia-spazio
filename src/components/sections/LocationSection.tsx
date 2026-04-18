"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const elements = section.querySelectorAll("[data-animate='loc-el']");
      gsap.set(elements, { opacity: 0, y: 30 });

      ScrollTrigger.batch(elements, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          });
        },
        start: "top 85%",
        once: true,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center overflow-hidden"
      style={{
        backgroundColor: "#050505",
        paddingTop: "clamp(6rem, 12vw, 10rem)",
        paddingBottom: "clamp(6rem, 12vw, 10rem)",
      }}
      aria-label="Localização Spazio"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">

        <div data-animate="loc-el" className="text-center mb-16 md:mb-20">
          <span
            className="font-display font-bold uppercase block mb-4 text-center"
            style={{
              fontSize: "12px",
              letterSpacing: "0.3em",
              color: "#f1c97d",
            }}
          >
            Spazio Headquarters
          </span>
          <h2
            className="font-display font-bold tracking-tighter w-full text-center mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              color: "#fafafa",
            }}
          >
            Onde a mágica acontece.
          </h2>
          <p
            className="font-body leading-relaxed max-w-2xl mx-auto text-center"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "rgb(161,161,170)",
            }}
          >
            Localizada em um ponto estratégico, a Barbearia Spazio oferece um ambiente premium preparado para a sua transformação estética.
          </p>
        </div>

        {/* Map Container */}
        <div
          data-animate="loc-el"
          className="w-full aspect-square md:aspect-[21/9] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative"
          style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767.471504360043!2d-48.678119364275354!3d-27.626281682078613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735f1211b5bfd%3A0x92dffb5f07efb579!2sBarbearia%20Spazio!5e0!3m2!1spt-BR!2sbr!4v1776485668963!5m2!1spt-BR!2sbr"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 grayscale opacity-80 transition-all hover:opacity-100 hover:grayscale-0 duration-700"
            title="Localização Barbearia Spazio no Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
