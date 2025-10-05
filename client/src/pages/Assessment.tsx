import { useState, useEffect, useRef } from "react";
import { PhaseIndicator } from "@/components/PhaseIndicator";
import { MessageBubble } from "@/components/MessageBubble";
import { ChatInput } from "@/components/ChatInput";
import { ThemeToggle } from "@/components/ThemeToggle";
import { sendMessage, useConversation } from "@/hooks/chat";
import { generateReport } from "@/hooks/report";
import FinancialSelfAwarenessMap from "@/components/FinancialSelfAwarenessMap";

const TOTAL_QUESTIONS = 30;

export default function Assessment() {
  const [showInput, setShowInput] = useState(true);
  const [reportLink, setReportLink] = useState<string | null>(null);
  const [reportLinkLoading, setReportLinkLoading] = useState<boolean>(false);
  const { messages, addMessage } = useConversation();

  const isCompleted =
    messages.filter((m) => m.role === "user").length >= TOTAL_QUESTIONS;

  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 right-4 z-30">
        <ThemeToggle />
      </div>

      <PhaseIndicator
        currentPhase={
          // phase 1: 10 questions
          messages.filter((m) => m.role === "user").length + 1 < 10
            ? 1
            : // phase 2: 10 questions
            messages.filter((m) => m.role === "user").length + 1 < 20
            ? 2
            : // phase 3: 7 questions
            messages.filter((m) => m.role === "user").length + 1 < 27
            ? 3
            : // phase 4: 3 questions
              4
        }
        questionNumber={messages.filter((m) => m.role === "user").length + 1}
        totalQuestions={TOTAL_QUESTIONS}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {messages.map((msg, idx) => (
            <MessageBubble
              key={idx}
              message={msg.prompt}
              isUser={msg.role === "user"}
            />
          ))}
          {(reportLink || reportLinkLoading) && (
            <MessageBubble
              message={reportLink ?? ""}
              loading={reportLinkLoading}
              isFile
              isUser={false}
            />
          )}
          {isTyping && (
            <MessageBubble message="" isUser={false} isTyping={true} />
          )}
          {(isCompleted || true) && (
            <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <FinancialSelfAwarenessMap />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {showInput && (
        <ChatInput
          onSend={async (message) => {
            setIsTyping(true);
            try {
              const response = await sendMessage(message);
              if (isCompleted) {
                (async () => {
                  // do not await
                  setShowInput(false);
                  setReportLinkLoading(true);
                  addMessage({
                    prompt: `Thank you for completing the assessment! We are currently generating your report. It will be available for download shortly.`,
                    role: "assistant",
                  });
                  try {
                    const { url } = await generateReport();

                    setReportLink(url);
                  } finally {
                    setReportLinkLoading(false);
                  }
                })();
              } else {
                addMessage({
                  prompt: response || "Sorry, something went wrong.",
                  role: "assistant",
                });
              }
            } finally {
              setIsTyping(false);
            }
          }}
          disabled={isTyping}
        />
      )}
    </div>
  );
}
