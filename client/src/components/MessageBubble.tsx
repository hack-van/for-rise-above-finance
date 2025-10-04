import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  isTyping?: boolean;
}

export function MessageBubble({ message, isUser, isTyping }: MessageBubbleProps) {
  if (isTyping) {
    return (
      <div className="flex justify-start mb-8">
        <div className="bg-muted rounded-2xl px-6 py-4 max-w-2xl">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "flex mb-8",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "rounded-2xl px-6 py-4 max-w-2xl",
        isUser 
          ? "bg-primary/10 text-foreground" 
          : "bg-muted text-foreground"
      )}
      data-testid={isUser ? "message-user" : "message-ai"}
      >
        <p className="text-lg leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
}
