import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface Strength {
  title: string;
  description: string;
}

interface Pattern {
  title: string;
  description: string;
}

interface CurrentStateSectionProps {
  strengths: Strength[];
  patterns: Pattern[];
}

export function CurrentStateSection({ strengths, patterns }: CurrentStateSectionProps) {
  return (
    <Card className="p-8 border-l-4 border-l-chart-2">
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        Where You Are Right Now
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-chart-2" />
            Your Strengths
          </h3>
          <div className="space-y-4">
            {strengths.map((strength, idx) => (
              <div key={idx} className="bg-chart-2/5 rounded-lg p-4" data-testid={`strength-${idx}`}>
                <h4 className="font-semibold text-foreground mb-2">{strength.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-chart-3" />
            Patterns to Address
          </h3>
          <div className="space-y-4">
            {patterns.map((pattern, idx) => (
              <div key={idx} className="bg-chart-3/5 rounded-lg p-4" data-testid={`pattern-${idx}`}>
                <h4 className="font-semibold text-foreground mb-2">{pattern.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
