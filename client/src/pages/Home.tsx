import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Science } from "@/components/Science";
import { FinalCTA } from "@/components/FinalCTA";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="absolute top-0 right-0 p-6 z-30">
        <ThemeToggle />
      </header>
      
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Science />
      <FinalCTA />
      
      <footer className="py-8 px-6 text-center text-sm text-muted-foreground border-t">
        <p>© 2025 Rise Above Finance. All rights reserved.</p>
      </footer>
    </div>
  );
}
