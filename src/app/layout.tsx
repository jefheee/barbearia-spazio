import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/**
 * Fontes da Marca Spazio
 *
 * Playfair Display — Serifada com alto contraste de traços,
 * ideal para headlines dramáticas que comunicam luxo e tradição.
 *
 * Plus Jakarta Sans — Geométrica moderna com ótima legibilidade,
 * complementa a Playfair sem competir visualmente.
 *
 * As fontes são carregadas via next/font/google para:
 * - Zero CLS (Cumulative Layout Shift)
 * - Self-hosting automático (sem requests externos)
 * - Variáveis CSS para uso no Tailwind e GSAP
 */
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * Metadata SEO — Barbearia Spazio
 *
 * Otimizada para search engines e social sharing.
 * Open Graph e Twitter Cards serão adicionados em iterações futuras.
 */
export const metadata: Metadata = {
  title: "Spazio — Barbearia Premium em Pedra Branca",
  description:
    "Visagismo avançado e reposicionamento de imagem masculina. A Spazio não é barata — e não vamos mudar isso. Agende sua experiência.",
  keywords: [
    "barbearia premium",
    "visagismo masculino",
    "Pedra Branca",
    "corte de cabelo premium",
    "barba premium",
    "Spazio",
  ],
  authors: [{ name: "Barbearia Spazio" }],
  robots: "index, follow",
};

/**
 * Root Layout — Barbearia Spazio
 *
 * Estrutura base de toda a aplicação:
 * - Fundo estrito #050505 (negro profundo)
 * - Fontes Playfair + Jakarta Sans via CSS variables
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
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
