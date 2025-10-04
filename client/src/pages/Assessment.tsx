import { useState, useEffect, useRef } from "react";
import { PhaseIndicator } from "@/components/PhaseIndicator";
import { MessageBubble } from "@/components/MessageBubble";
import { ChatInput } from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";

//todo: remove mock functionality
const mockQuestions = [
  { phase: 1, text: "What does financial success mean to you personally? Not what you think it 'should' mean, but what it truly means to you." },
  { phase: 1, text: "When you think about your future, what matters most to you?" },
  { phase: 1, text: "What feeling are you chasing when you think about having your finances 'figured out'?" },
  { phase: 2, text: "Walk me through your typical spending week. What do you spend on without thinking?" },
  { phase: 2, text: "What financial habit are you most proud of? What habit do you wish you could change?" },
  { phase: 3, text: "If money stress disappeared tomorrow, what would your life look like? Be specific." },
  { phase: 3, text: "In 3-5 years, what do you want to be true about your financial life?" },
  { phase: 4, text: "On a scale of 1-10, how ready do you feel to make meaningful changes to your financial situation right now?" },
];

interface Message {
  text: string;
  isUser: boolean;
}

export default function Assessment() {
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState<Message[]>([
    { text: "Welcome! I'm here to help you understand your relationship with money. This is a safe, judgment-free space for honest reflection.\n\nLet's begin with your money story...", isUser: false }
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (currentQuestion === 0) {
      setTimeout(() => {
        askQuestion(0);
      }, 1500);
    }
  }, []);

  const askQuestion = (questionIndex: number) => {
    if (questionIndex >= mockQuestions.length) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          text: "Thank you for this honest conversation. I'm going to take everything you've shared and create a personalized profile that shows you exactly what's going on in your relationship with money - the patterns, the conflicts, the strengths, all of it.\n\nGive me a moment to put this together for you...",
          isUser: false
        }]);
        setShowInput(false);
        
        setTimeout(() => {
          setLocation('/report');
        }, 3000);
      }, 1000);
      return;
    }

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        text: mockQuestions[questionIndex].text,
        isUser: false
      }]);
    }, 800);
  };

  const handleSend = (message: string) => {
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    setCurrentQuestion(prev => prev + 1);
    
    setTimeout(() => {
      askQuestion(currentQuestion + 1);
    }, 1000);
  };

  const getCurrentPhase = () => {
    if (currentQuestion < 3) return 1;
    if (currentQuestion < 5) return 2;
    if (currentQuestion < 7) return 3;
    return 4;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 right-4 z-30">
        <ThemeToggle />
      </div>
      
      <PhaseIndicator 
        currentPhase={getCurrentPhase()} 
        questionNumber={Math.min(currentQuestion + 1, mockQuestions.length)} 
        totalQuestions={mockQuestions.length}
      />
      
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} message={msg.text} isUser={msg.isUser} />
          ))}
          {isTyping && <MessageBubble message="" isUser={false} isTyping={true} />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {showInput && (
        <ChatInput 
          onSend={handleSend} 
          disabled={isTyping}
        />
      )}
    </div>
  );
}
