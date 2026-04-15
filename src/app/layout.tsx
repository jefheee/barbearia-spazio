import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

/**
 * Fontes da Marca Spazio — Atualização High-Ticket 2026
 *
 * Outfit — Geométrica moderna com variação de peso expressiva,
 * ideal para alternância Bold/Light nas headlines de consultoria.
 * Substitui Playfair para um posicionamento mais contemporâneo.
 *
 * Inter — A referência em legibilidade para interfaces digitais,
 * com métricas otimizadas para corpo de texto e UI elements.
 *
 * As fontes são carregadas via next/font/google para:
 * - Zero CLS (Cumulative Layout Shift)
 * - Self-hosting automático (sem requests externos)
 * - Variáveis CSS para uso no Tailwind e GSAP
 */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * Metadata SEO — Barbearia Spazio
 *
 * Otimizada para search engines e social sharing.
 * Copy atualizado para posicionamento de consultoria high-ticket.
 */
export const metadata: Metadata = {
  title: "Spazio — Consultoria de Imagem Masculina em Pedra Branca",
  description:
    "Visagismo arquitetônico e reposicionamento de imagem masculina. Consultoria de imagem a partir de R$ 800. Para homens que exigem o seu melhor estilo.",
  keywords: [
    "consultoria de imagem masculina",
    "visagismo arquitetônico",
    "Pedra Branca",
    "barbearia premium",
    "Spazio",
    "Jonathan visagista",
  ],
  authors: [{ name: "Barbearia Spazio" }],
  robots: "index, follow",
};

/**
 * Root Layout — Barbearia Spazio
 *
 * Estrutura base de toda a aplicação:
 * - Fontes Outfit + Inter via CSS variables
 * - suppressHydrationWarning para mitigar extensões de browser
 * - Antialiasing habilitado para tipografia premium
 * - Smooth scroll nativo
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground font-body"
        suppressHydrationWarning
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
