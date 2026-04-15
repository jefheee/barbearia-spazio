"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesGrid — Bento Grid Assimétrico de Consultoria High-Ticket
 *
 * Seção sobre fundo claro (#fafafa) que contrasta com o Hero escuro.
 * Transição suave via gradiente dark→ice no topo.
 *
 * Layout do grid (desktop):
 * ┌──────────────────────┬────────────────┐
 * │  Card 01 (Destaque)  │  Card 02       │
 * │  Visagismo Arquit.   │  Social Proof  │
 * │  2 colunas, escuro   │  1 col, branco │
 * ├──────────────────────┴────────────────┤
 * │  Card 03 — Visagismo Óptico + Citação │
 * │  Full width, branco                    │
 * └────────────────────────────────────────┘
 *
 * Animação: Stagger scroll-triggered com GSAP ScrollTrigger.batch
 */

/** Ícone de estrela inline para performance */
function StarIcon() {
  return (
    <svg
      className="w-5 h-5"
      style={{ color: "#f1c97d" }}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const cards = section.querySelectorAll("[data-animate='service-card']");

      gsap.set(cards, { opacity: 0, y: 60 });

      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
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
      id="servicos"
      className="relative w-full"
      style={{
        backgroundColor: "#fafafa",
        paddingTop: "clamp(4rem, 10vw, 8rem)",
        paddingBottom: "clamp(4rem, 10vw, 8rem)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
      aria-label="Consultoria de Imagem — Serviços"
    >
      {/* ─── Transition Gradient: Dark → Ice ─── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "160px",
          background: "linear-gradient(180deg, #050505 0%, #fafafa 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Section Header ─── */}
        <div className="text-center mb-16">
          <span
            className="inline-block font-body uppercase mb-4"
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#555555",
            }}
          >
            Consultoria de Imagem
          </span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#1a1a1a",
            }}
          >
            A Arquitetura do{" "}
            <span className="font-light" style={{ color: "#1a1a1a" }}>
              Seu Estilo
            </span>
          </h2>
        </div>

        {/* ─── Bento Grid ─── */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "1fr",
          }}
        >
          {/* Row 1: Two cards side by side on desktop */}
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(1, 1fr)",
            }}
          >
            {/* Card 01 — Consultoria de Visagismo Arquitetônico (Dark, Destaque) */}
            <div
              data-animate="service-card"
              className="relative overflow-hidden flex flex-col justify-between group cursor-default"
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "2.5rem",
                padding: "clamp(2rem, 4vw, 3.5rem)",
                minHeight: "380px",
                gridColumn: "1 / -1",
              }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 pointer-events-none"
                style={{
                  width: "320px",
                  height: "320px",
                  background:
                    "radial-gradient(circle, rgba(241,201,125,0.07) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <span
                  className="inline-block font-body uppercase"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    color: "#f1c97d",
                    border: "1px solid rgba(241,201,125,0.2)",
                    borderRadius: "9999px",
                    padding: "6px 16px",
                    marginBottom: "24px",
                  }}
                >
                  Serviço Principal
                </span>

                <h3
                  className="font-display font-bold leading-[1.2] mb-3"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "#ffffff",
                  }}
                >
                  Consultoria de Visagismo Arquitetônico
                </h3>

                <p
                  className="font-body leading-relaxed max-w-lg mb-3"
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  Análise profunda de perfil facial e visagismo estratégico para
                  reposicionamento da sua imagem.
                </p>

                <span
                  className="inline-block font-body"
                  style={{
                    fontSize: "13px",
                    color: "rgba(241,201,125,0.8)",
                  }}
                >
                  Com Jonathan
                </span>
              </div>

              <div className="relative z-10 mt-8 flex items-end justify-between">
                <span
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    color: "#ffffff",
                  }}
                >
                  R$ 800,00
                </span>
                <span
                  className="font-body uppercase"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  por sessão
                </span>
              </div>
            </div>

            {/* Card 02 — Social Proof */}
            <div
              data-animate="service-card"
              className="relative overflow-hidden flex flex-col justify-center items-center text-center"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e8e8e8",
                borderRadius: "2.5rem",
                padding: "clamp(2rem, 4vw, 2.5rem)",
                minHeight: "380px",
                gridColumn: "1 / -1",
              }}
            >
              {/* Star rating */}
              <div
                className="flex items-center gap-1 mb-4"
                aria-label="Avaliação 4.9 de 5 estrelas"
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <span
                className="font-display font-bold mb-2"
                style={{
                  fontSize: "clamp(3rem, 5vw, 4rem)",
                  color: "#1a1a1a",
                  lineHeight: 1,
                }}
              >
                4.9
              </span>

              <span
                className="font-body mb-6"
                style={{
                  fontSize: "13px",
                  color: "#555555",
                }}
              >
                258 avaliações verificadas no Google Maps
              </span>

              <div
                className="mx-auto mb-6"
                style={{
                  width: "48px",
                  height: "1px",
                  background: "rgba(241,201,125,0.3)",
                }}
                aria-hidden="true"
              />

              <p
                className="font-body leading-relaxed max-w-[260px]"
                style={{
                  fontSize: "15px",
                  color: "#555555",
                }}
              >
                A autoridade máxima em visagismo na Pedra Branca
              </p>
            </div>
          </div>

          {/* Card 03 — Visagismo Óptico (Full width) + Citação */}
          <div
            data-animate="service-card"
            className="relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 group cursor-default"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e8e8e8",
              borderRadius: "2.5rem",
              padding: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            <div className="flex-1">
              <span
                className="inline-block font-body uppercase mb-4"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  color: "#c9a35e",
                  border: "1px solid rgba(201,163,94,0.2)",
                  borderRadius: "9999px",
                  padding: "6px 16px",
                }}
              >
                Especialidade
              </span>

              <h3
                className="font-display font-bold leading-[1.2] mb-3"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  color: "#1a1a1a",
                }}
              >
                Visagismo Óptico e Estética Masculina
              </h3>

              <p
                className="font-body leading-relaxed max-w-xl mb-6"
                style={{
                  fontSize: "15px",
                  color: "#555555",
                }}
              >
                Harmonização visual entre corte, barba e traços faciais. Cada
                detalhe calculado para projetar a melhor versão da sua imagem.
              </p>

              {/* Citação de prova social embutida */}
              <blockquote
                className="relative"
                style={{
                  paddingLeft: "20px",
                  borderLeft: "2px solid rgba(241,201,125,0.4)",
                }}
              >
                <p
                  className="font-display italic"
                  style={{
                    fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                    color: "#1a1a1a",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;Não é um corte, é um reposicionamento de imagem.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Decorative orb */}
            <div
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(241,201,125,0.1) 0%, rgba(201,163,94,0.05) 100%)",
              }}
              aria-hidden="true"
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#f1c97d",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
