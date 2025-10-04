import { Card } from "@/components/ui/card";
import { Brain, Heart, Shield, Users } from "lucide-react";

const frameworks = [
  {
    icon: Brain,
    title: "Klontz Money Scripts",
    description: "Validated psychological framework identifying your unconscious beliefs about money",
  },
  {
    icon: Heart,
    title: "Attachment Theory",
    description: "Understanding how your emotional patterns shape your financial behaviors",
  },
  {
    icon: Shield,
    title: "Behavioral Dimensions",
    description: "Mapping your decision-making style, risk tolerance, and future orientation",
  },
  {
    icon: Users,
    title: "Financial Psychology",
    description: "Evidence-based insights from therapeutic and coaching research",
  },
];

export function Science() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Backed by Science
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our assessment is built on validated psychological frameworks and financial therapy research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frameworks.map((framework) => (
            <Card key={framework.title} className="p-8 flex gap-6" data-testid={`framework-${framework.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-chart-2/10 text-chart-2">
                  <framework.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {framework.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {framework.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
