import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah M.",
    initials: "SM",
    quote: "I finally understand why I've been avoiding my finances for years. This assessment showed me patterns I never noticed before.",
  },
  {
    name: "David K.",
    initials: "DK",
    quote: "The insights about my money vigilance and anxiety were spot-on. It felt like therapy, not a financial quiz.",
  },
  {
    name: "Jennifer L.",
    initials: "JL",
    quote: "For the first time, I see my relationship with money clearly. The personalized report gave me hope and a path forward.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What People Discover
          </h2>
          <p className="text-lg text-muted-foreground">
            Real transformations start with awareness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-8" data-testid={`testimonial-${testimonial.initials}`}>
              <div className="flex items-center gap-4 mb-6">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="font-medium text-foreground">{testimonial.name}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
