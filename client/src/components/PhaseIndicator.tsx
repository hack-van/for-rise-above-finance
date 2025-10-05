import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";

const phases = [
  "Your Money Story",
  "Current Reality",
  "Vision & Motivation",
  "Activation",
];

interface PhaseIndicatorProps {
  currentPhase: number;
  questionNumber: number;
  totalQuestions: number;
  reset?: () => void;
}

export function PhaseIndicator({
  currentPhase,
  questionNumber,
  totalQuestions,
  reset,
}: PhaseIndicatorProps) {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b py-4 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-muted-foreground">
            Phase {currentPhase} of 4: {phases[currentPhase - 1]}
          </div>
          <div className="text-sm text-muted-foreground">
            Question {questionNumber} of {totalQuestions}{" "}
            {reset && (
              <Button variant="link" size="sm" onClick={reset}>
                Restart
              </Button>
            )}
          </div>
        </div>
        <Progress
          value={progress}
          className="h-2"
          data-testid="progress-assessment"
        />
      </div>
    </div>
  );
}
