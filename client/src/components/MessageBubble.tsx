import { cn } from "@/lib/utils";
import file from "../assets/file.svg";

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  loading?: boolean;
  isTyping?: boolean;
  isFile?: boolean;
}

export function MessageBubble({
  message,
  isUser,
  loading,
  isTyping,
  isFile,
}: MessageBubbleProps) {
  if (isTyping) {
    return (
      <div className="flex justify-start mb-8">
        <div className="bg-muted rounded-2xl px-6 py-4 max-w-2xl">
          <div className="flex gap-1">
            <div
              className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (isFile) {
    return (
      <div className="flex mb-8 justify-start">
        <div
          className={cn(
            "rounded-2xl px-6 py-4 max-w-2xl",
            "bg-muted text-foreground"
          )}
          data-testid="message-file"
          aria-busy={!!loading}
        >
          {loading ? (
            <div className="group flex items-center gap-3 text-lg leading-relaxed">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background">
                <span className="h-5 w-5 rounded-full border-2 border-muted-foreground/50 border-t-transparent animate-spin" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-medium">Preparing your report...</span>
              </span>
            </div>
          ) : (
            <a
              style={{ pointerEvents: loading ? "none" : "auto" }}
              href={message}
              target="_blank"
              rel="noopener noreferrer"
              download={message.split("/").pop() || undefined}
              className="group flex items-center gap-3 text-lg leading-relaxed underline"
              aria-label="Download your report"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background">
                <img src={file} alt="file icon" className="h-6 w-6" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-medium">Download your report</span>
              </span>
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex mb-8", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "rounded-2xl px-6 py-4 max-w-2xl",
          isUser ? "bg-primary/10 text-foreground" : "bg-muted text-foreground"
        )}
        data-testid={isUser ? "message-user" : "message-ai"}
      >
        <p className="text-lg leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
}
