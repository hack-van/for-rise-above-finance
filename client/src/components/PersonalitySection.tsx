import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PersonalitySectionProps {
  dominantScript: string;
  emotionalPattern: string;
  attachmentStyle: string;
  content: string;
  quotes: string[];
}

export function PersonalitySection({ 
  dominantScript, 
  emotionalPattern, 
  attachmentStyle, 
  content,
  quotes 
}: PersonalitySectionProps) {
  return (
    <Card className="p-8 border-l-4 border-l-primary">
      <div className="flex flex-wrap gap-3 mb-6">
        <Badge variant="secondary" className="text-sm px-4 py-1" data-testid="badge-money-script">
          {dominantScript}
        </Badge>
        <Badge variant="secondary" className="text-sm px-4 py-1" data-testid="badge-emotional-pattern">
          {emotionalPattern}
        </Badge>
        <Badge variant="secondary" className="text-sm px-4 py-1" data-testid="badge-attachment-style">
          {attachmentStyle}
        </Badge>
      </div>
      
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        Your Money Personality Profile
      </h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground leading-loose whitespace-pre-wrap">{content}</p>
      </div>

      {quotes.length > 0 && (
        <div className="mt-6 space-y-3">
          {quotes.map((quote, idx) => (
            <div key={idx} className="bg-muted/50 rounded-lg p-4 italic text-muted-foreground border-l-2 border-primary/30">
              "{quote}"
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
