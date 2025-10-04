import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Hero_image_contemplative_person_604c02db.png";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
          Understand Your Relationship<br />with Money
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          A compassionate, therapy-informed assessment to help you gain deep awareness 
          of your financial patterns and take the first step toward transformation.
        </p>
        <Link href="/assessment">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            data-testid="button-start-assessment"
          >
            Start Your Assessment
          </Button>
        </Link>
        <p className="mt-6 text-sm text-white/80">
          100% Confidential • No Credit Card Required • 15-20 minutes
        </p>
      </div>
    </section>
  );
}
