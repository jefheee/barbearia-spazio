import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

/**
 * Fontes da Marca Spazio — High-Ticket 2026
 *
 * Outfit — Geométrica moderna para headlines de impacto.
 * Inter — Legibilidade máxima para corpo de texto.
 * Playfair Display — Serifada editorial para a logo SPAZIO (luxo).
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

/**
 * Metadata SEO — Barbearia Spazio
 */
export const metadata: Metadata = {
  title: "Spazio — Consultoria de Imagem Masculina em Pedra Branca",
  description:
    "Visagismo arquitetônico e reposicionamento de imagem masculina. Consultoria de imagem a partir de R$ 800. Av. Pedra Branca, 303 – Palhoça.",
  keywords: [
    "consultoria de imagem masculina",
    "visagismo arquitetônico",
    "Pedra Branca",
    "barbearia premium",
    "Spazio",
    "Jonathan visagista",
    "Palhoça",
  ],
  authors: [{ name: "Barbearia Spazio" }],
  robots: "index, follow",
};

/**
 * Root Layout — Barbearia Spazio
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
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
