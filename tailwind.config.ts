import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration — Barbearia Spazio Design System
 *
 * Tokens da marca definidos aqui servem como a fonte de verdade para
 * todas as decisões visuais do projeto. Cada valor foi escolhido para
 * reforçar a identidade ultra-premium da Spazio.
 *
 * Nota: Com Tailwind v4, a maioria dos tokens é gerenciada via `@theme inline`
 * no globals.css. Este ficheiro complementa com extensões mais complexas
 * (fontFamily, backdropBlur customizado) que beneficiam da sintaxe JS.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      /**
       * Paleta Spazio
       * - background: Negro profundo puro, a base de toda a UI
       * - surface: Negro elevado para cards e superfícies
       * - primary-gold: Dourado assinatura — luxo sem ostentação
       */
      colors: {
        background: "#050505",
        surface: "#0e0e0e",
        "primary-gold": "#f1c97d",
        "primary-gold-light": "#f5daa3",
        "primary-gold-dark": "#c9a35e",
      },
      /**
       * Tipografia
       * - display: Playfair Display — serifada clássica para headlines
       * - body: Plus Jakarta Sans — geométrica moderna para legibilidade
       */
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      /**
       * Glassmorphism extremo
       * backdrop-blur-2xl já existe no Tailwind v4, mas configuramos
       * um valor personalizado para garantir consistência.
       */
      backdropBlur: {
        "2xl": "40px",
        "3xl": "64px",
      },
      /**
       * Animações base para micro-interações
       */
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
