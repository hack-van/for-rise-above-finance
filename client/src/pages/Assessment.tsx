import { useState, useEffect, useRef } from "react";
import { PhaseIndicator } from "@/components/PhaseIndicator";
import { MessageBubble } from "@/components/MessageBubble";
import { ChatInput } from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { sendMessage, useConversation } from "@/hooks/chat";

export default function Assessment() {
  const [, setLocation] = useLocation();
  const { messages } = useConversation();

  const [isTyping, setIsTyping] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  /*const askQuestion = (questionIndex: number) => {
    if (questionIndex >= mockQuestions.length) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you for this honest conversation. I'm going to take everything you've shared and create a personalized profile that shows you exactly what's going on in your relationship with money - the patterns, the conflicts, the strengths, all of it.\n\nGive me a moment to put this together for you...",
            isUser: false,
          },
        ]);
        setShowInput(false);

        setTimeout(() => {
          setLocation("/report");
        }, 3000);
      }, 1000);
      return;
    }

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: mockQuestions[questionIndex].text,
          isUser: false,
        },
      ]);
    }, 800);
  };*/

  /*const handleSend = (message: string) => {
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setCurrentQuestion((prev) => prev + 1);

    setTimeout(() => {
      askQuestion(currentQuestion + 1);
    }, 1000);
  };*/

  /*const getCurrentPhase = () => {
    if (currentQuestion < 3) return 1;
    if (currentQuestion < 5) return 2;
    if (currentQuestion < 7) return 3;
    return 4;
  };*/

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 right-4 z-30">
        <ThemeToggle />
      </div>

      <PhaseIndicator
        //currentPhase={getCurrentPhase()}
        currentPhase={1}
        //questionNumber={Math.min(currentQuestion + 1, mockQuestions.length)}
        questionNumber={1}
        //totalQuestions={mockQuestions.length}
        totalQuestions={10}
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
          {isTyping && (
            <MessageBubble message="" isUser={false} isTyping={true} />
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {showInput && (
        <ChatInput
          onSend={async (message) => {
            await sendMessage(message);
          }}
          disabled={isTyping}
        />
      )}
    </div>
  );
}
