import { MessageCircle, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const phases = [
  {
    number: 1,
    title: "Your Money Story",
    description: "Share your financial journey, beliefs, and emotions about money in a safe, judgment-free space.",
    icon: MessageCircle,
  },
  {
    number: 2,
    title: "Current Reality",
    description: "Explore your day-to-day habits, behaviors, and the patterns that shape your financial life.",
    icon: Target,
  },
  {
    number: 3,
    title: "Future Vision",
    description: "Envision the financial life you want and what truly matters to you.",
    icon: Lightbulb,
  },
  {
    number: 4,
    title: "Personalized Insights",
    description: "Receive a comprehensive report revealing your money personality and path forward.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our adaptive, personalized assessment guides you through four meaningful phases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase) => (
            <Card key={phase.number} className="p-8 hover-elevate" data-testid={`card-phase-${phase.number}`}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                <phase.icon className="w-6 h-6" />
              </div>
              <div className="text-sm font-medium text-primary mb-2">Phase {phase.number}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
