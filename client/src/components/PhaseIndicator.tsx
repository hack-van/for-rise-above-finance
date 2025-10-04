import { Progress } from "@/components/ui/progress";

const phases = [
  "Your Money Story",
  "Current Reality", 
  "Vision & Motivation",
  "Activation"
];

interface PhaseIndicatorProps {
  currentPhase: number;
  questionNumber: number;
  totalQuestions: number;
}

export function PhaseIndicator({ currentPhase, questionNumber, totalQuestions }: PhaseIndicatorProps) {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b py-4 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-muted-foreground">
            Phase {currentPhase} of 4: {phases[currentPhase - 1]}
          </div>
          <div className="text-sm text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </div>
        </div>
        <Progress value={progress} className="h-2" data-testid="progress-assessment" />
      </div>
    </div>
  );
}
