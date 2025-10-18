import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Ready to Transform Your Financial Future?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Take the first step toward financial awareness and freedom. 
          Your personalized insights are just 15 minutes away.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/assessment">
            <Button size="lg" className="text-lg px-8 py-6 h-auto" data-testid="button-start-journey">
              Start Your Journey
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 h-auto backdrop-blur-sm"
            data-testid="button-learn-more"
            onClick={() => window.open('https://riseabovefinance.com', '_blank')}
          >
            Learn About Rise Above Finance
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
