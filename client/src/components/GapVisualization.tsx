import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface GapVisualizationProps {
  currentState: string;
  idealState: string;
  progress: number;
  analysis: string;
}

export function GapVisualization({ currentState, idealState, progress, analysis }: GapVisualizationProps) {
  return (
    <Card className="p-8 border-l-4 border-l-chart-4">
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        The Gap: Reality vs. Vision
      </h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">Where You Are</h3>
          <p className="text-muted-foreground leading-relaxed italic">"{currentState}"</p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">Where You Want to Be</h3>
          <p className="text-muted-foreground leading-relaxed italic">"{idealState}"</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Current Progress</h3>
            <span className="text-2xl font-semibold text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" data-testid="progress-gap" />
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <p className="text-foreground leading-loose">{analysis}</p>
        </div>
      </div>
    </Card>
  );
}
