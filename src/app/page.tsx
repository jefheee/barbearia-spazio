import { HeroSection } from "@/components/sections/HeroSection";
import { SpazioExperience } from "@/components/sections/SpazioExperience";
import { VisagismScience } from "@/components/sections/VisagismScience";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TransformationShowcase } from "@/components/sections/TransformationShowcase";
import { LocationSection } from "@/components/sections/LocationSection";
import { AtmosphereVideo } from "@/components/sections/AtmosphereVideo";
import { ConciergeTrigger } from "@/components/ui/ConciergeTrigger";

/**
 * Home Page — Barbearia Spazio
 *
 * Landing Page composition following the code.html prototype order.
 *
 * Visual flow (High-Ticket 2026):
 * 1. Hero (Dark #050505) — Impact statement + primary CTA
 * 2. SpazioExperience (Split: Ice left / Dark right) — Price objection breaker
 * 3. VisagismScience (Dark #0a0a0a) — Method authority + 3-step process
 * 4. TransformationShowcase (Ice #fafafa) — Video case study
 * 5. AtmosphereVideo (Video Player for overall ambiance)
 * 6. ServicesGrid (Ice #fafafa) — Bento grid with pricing
 * 7. ConciergeTrigger (Floating) — Agentic AI pill
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SpazioExperience />
      <VisagismScience />
      <TransformationShowcase />
      <AtmosphereVideo />
      <ServicesGrid />
      <LocationSection />
      <ConciergeTrigger />
    </>
  );
}
