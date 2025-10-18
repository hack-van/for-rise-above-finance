import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StakesSectionProps {
  costOfInaction: string;
  rewardOfAction: string;
  barriers: string[];
}

export function StakesSection({ costOfInaction, rewardOfAction, barriers }: StakesSectionProps) {
  return (
    <Card className="p-8 border-l-4 border-l-destructive">
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        What's at Stake
      </h2>
      
      <div className="space-y-6">
        <div className="bg-destructive/5 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-destructive" />
            If Nothing Changes
          </h3>
          <p className="text-muted-foreground leading-relaxed">{costOfInaction}</p>
        </div>

        <div className="bg-chart-2/5 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-chart-2" />
            If You Take Action
          </h3>
          <p className="text-muted-foreground leading-relaxed">{rewardOfAction}</p>
        </div>

        {barriers.length > 0 && (
          <div>
            <h3 className="font-semibold text-foreground mb-3">
              Barriers to Address
            </h3>
            <ul className="space-y-2">
              {barriers.map((barrier, idx) => (
                <li key={idx} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{barrier}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}
